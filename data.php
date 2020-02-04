<?php

header("Content-type: application/json");
$data = [
    [
        'image'=> 'busan.jpg',
        'name'=>'부산',
        'price' => 9000,
        'result' => 7000
    ],
    [
        'image'=> 'damyang.jpg',
        'name'=>'담양',
        'price' => 8000,
        'result' => 8245
    ],
    [
        'image'=> 'jeju.jpg',
        'name'=>'제주',
        'price' => 12000,
        'result' => 9245
    ],
    [
        'image'=> 'kwangwha.jpg',
        'name'=>'광화',
        'price' => 12000,
        'result' => 8245
    ],
];
echo json_encode($data);