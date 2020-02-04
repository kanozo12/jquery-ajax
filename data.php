<?php

header("Content-type: application/json");
$data = [
    [
        'image'=> 'busan.jpg',
        'name'=>'부산',
        'price' => 11111,
        'result' => 1234
    ],
    [
        'image'=> 'busan.jpg',
        'name'=>'부산',
        'price' => 22222,
        'result' => 1234
    ],
    [
        'image'=> 'busan.jpg',
        'name'=>'부산',
        'price' => 33333,
        'result' => 1234
    ],
    [
        'image'=> 'busan.jpg',
        'name'=>'부산',
        'price' => 44444,
        'result' => 1234
    ],
    [
        'image'=> 'busan.jpg',
        'name'=>'부산',
        'price' => 55555,
        'result' => 1234
    ],
    [
        'image'=> 'busan.jpg',
        'name'=>'부산',
        'price' => 66666,
        'result' => 1234
    ],
    [
        'image'=> 'busan.jpg',
        'name'=>'부산',
        'price' => 77777,
        'result' => 1234
    ],
    [
        'image'=> 'busan.jpg',
        'name'=>'부산',
        'price' => 88888,
        'result' => 1234
    ],
    [
        'image'=> 'busan.jpg',
        'name'=>'부산',
        'price' => 99999,
        'result' => 1234
    ],
   
];

echo json_encode($data);