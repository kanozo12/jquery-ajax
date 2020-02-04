class CardApp {
    constructor() {
        this.cardList = $(".card-list");
        this.word = $("#word");
        this.addEvent();
        this.data = [];

        $.ajax({
            url: '/data.php',
            method: 'get',
            success: (data) => {
                this.data = data;
                this.loadData(data);
            }
        });

    }

    addEvent() {
        $("#btnSearch").on("click", this.serach);
    }

    serach() {

        // console.log(this.search);
        let word = this.word.val();
        let regex = new RegExp(word, "gi");
        let search = $("#searchOpt option:selected").val();
        if (search == "name") {
            this.data.forEach(item => {

                let filterData = this.data.filter(item => item.name.includes(word)).map(item => {
                    let newItem = JSON.parse(JSON.stringify(item));
                    newItem.name = newItem.name.replace(regex, `<span class="c">$&</span>`);
                    return newItem;
                });
                this.loadData(filterData);

            });

        } else if (search == "price") {
            this.data.forEach(item => {

                let filterData = this.data.filter(item => word >= item.price);
                console.log(filterData);

                filterData = filterData.map(item => {
                    let newItem = JSON.parse(JSON.stringify(item));
                    newItem.price = newItem.price.toString().replace(newItem.price, `<span class="c">$&</span>`);
                    return newItem;
                });

                this.loadData(filterData);
            });
        }

    }

    loadData(data) {
        this.cardList.empty();
        data.forEach((item, idx) => {
            let str = this.makeCard(item);
            this.cardList.append(str);
            setTimeout(() => {
                $(".card-list > .card").eq(idx).addClass("active");
            }, 50 + idx * 400);

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
                </div>
            </div>
        </div>`;
    }
}