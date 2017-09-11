$(document).ready(function(){

loadImage();

});




function loadImage(){

var imageUrl = 'img/brazil.jpg';
$('body').css('background-image', 'url(' + imageUrl + ')');


$('.divMovements').css('background-color', '#cecdc8');

}


var start = new Date;

setInterval(function() {
    $('.Timer').text((new Date - start) / 1000 + " Seconds");
}, 1000);