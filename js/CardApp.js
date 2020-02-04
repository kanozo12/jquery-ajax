class CardApp {
    constructor() {
        this.cardList = $(".card-list");
        this.word = $("#word");
        this.opt = $("#searchOpt")
        this.data = [];
        this.range = $(".slider");

        $(".register").hide();
        $.ajax({
            url: '/data.json',
            method: 'get',
            success: (data) => {
                this.data = data;                
                this.range.attr("max", Math.max(...data.map( x => x.price)));
                this.range.val(Math.max(...data.map( x => x.price)));
                this.range.attr("min", Math.min(...data.map( x => x.price)));

                this.loadData(data);
            }
        });
        this.addEvent();
    }

    addEvent(){
        $("#btnSearch").on("click", this.search);
        this.range.on("change", this.filter);
        $("#register").on("click", this.loadRegisterPage);
        $("#registerOK").on("click", this.registerCard);

        $(document).on("click", ".up", this.uplike);
        $("#sortData").on("click", ()=>{
            let sortedData = this.data.sort((a, b) => a.result - b.result);
            this.loadData(sortedData);
        });
    }

    uplike = (e) => {
        let value = $(e.target).data("result");
        $(e.target).siblings(".result").html((value + 1) + "명");
        $(e.target).data("result", value + 1);
    }

    registerCard = () => {
        let name = $("#name").val();
        let price = $("#price").val();
        let result = $("#result").val();

        this.data.push({image:"busan.jpg", name, price, result});
        $(".container").show('slow');
        $(".register").hide('slow');
        this.loadData(this.data);
    };

    loadRegisterPage = () => {
        $(".container").hide('slow');
        $(".register").show('slow');
    }

    filter = () => {
        //여기에 range의 범위안에 있는 값들만을 출력하도록 만들어봐.
        console.log(this.range.val());
        let filterData = this.data.filter(x => x.price <= this.range.val())
            .sort((a, b) => a.price - b.price);
        this.loadData(filterData);
    }

    search = () => {
        let word = this.word.val();

        if(this.opt.val() == "name"){
            let regex = new RegExp(word,"gi");
            let filterData = this.data.filter(
                item => item.name.includes(word)).map( x => {
                    let item = JSON.parse(JSON.stringify(x));
                    item.name = item.name.replace(regex, `<span class="hl">$&</span>`);
                    return item;
                });
            this.loadData(filterData);
        }else {
            let filterData = this.data.filter( x => x.price <= word).map( x => {
                let item = JSON.parse(JSON.stringify(x));
                item.price = `<span class="hl">${item.price}</span>`;
                return item;
            });
            this.loadData(filterData);
        }
        
    }

    loadData(data) {
        this.cardList.empty();
        data.forEach((item, idx) => {            
            let str = this.makeCard(item);
            this.cardList.append(str);
            setTimeout(() => {
                $(".card-list > .card").eq(idx).addClass("active");
            }, 50 + idx * 100);
        });
    }

    makeCard(item) {
        return `
        <div class="card">
            <div class="img">
                <img src="/img/${item.image}" alt="${item.image}">
            </div>
            <div class="info">
                <h4 class="name">${item.name}</h4>
                <h4 class="price">${item.price}원</h4>
                <div class="grade">
                    <span class="result">${item.result}명</span>
                    <button class="up" data-result="${item.result}">좋아요</button>
                </div>
            </div>
        </div>
        `;
    }
}