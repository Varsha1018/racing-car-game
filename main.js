canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image="https://i.postimg.cc/9rqYz9HM/car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "https://i.postimg.cc/tnnW1Kff/car2.png";
car2_x = 10;
car2_y = 100;

background_img = "racing.jpg";

function add() {
    mars = new Image();
    mars.onload = uploadmars;
    mars.src = background_img;

    car1 = new Image();
    car1.onload = uploadcar1;
    car1.src = car1_image;

    car2 = new Image();
    car2.onload = uploadcar2;
    car2.src = car2_image;
}


function uploadmars() {
    ctx.drawImage(mars, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
    if (keypressed == '38') {
        up(); console.log("up");
    }



    if (keypressed == '40') {
        down(); console.log("down");
    }


    if (keypressed == '37') {
        left(); console.log("left");
    }

    if (keypressed == '39') {
        right(); console.log("right");
    }

    if (keypressed == '87') {
        car_up(); console.log("W");
    }

    if (keypressed == '83') {
        car_down(); console.log("S");
    }

    if (keypressed == '65') {
        car_left(); console.log("A");
    }

    if (keypressed == '68') {
        car_right(); console.log("D");
    }
}


function up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        uploadmars();
        uploadcar1();
        uploadcar2();
    }

}

function down() {
    if (car1_y <= 400) {
        car1_y = car1_y + 10;
        uploadmars();
        uploadcar1();
        uploadcar2();
    }

}

function left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        uploadmars();
        uploadcar1();
        uploadcar2();
    }

}

function right() {
    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        uploadmars();
        uploadcar1();
        uploadcar2();
    }

}

function car_up() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        uploadmars();
        uploadcar1();
        uploadcar2();
    }

}

function car_down() {
    if (car2_y <= 400) {
        car2_y = car2_y + 10;
        uploadmars();
        uploadcar1();
        uploadcar2();
    }

}

function car_left() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        uploadmars();
        uploadcar1();
        uploadcar2();
    }

}

function car_right() {
    if (car2_x <= 700) {
        car2_x = car2_x + 10;
        uploadmars();
        uploadcar1();
        uploadcar2();
    }

}




