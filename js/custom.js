/******************************************
    File Name: custom.js
    Template Name: Flat.logistic - Responsive HTML5 Template
    Created By: WordPressShowcase
    Envato Profile: https://themeforest.net/user/WordPressShowcase
    Website: https://showwp.com
    Version: 1.0
/*******************************************/

/**== Menu js ==**/

"use strict";

$("#navbar_menu").menumaker({
	title: "Menu",
	format: "multitoggle"
});

/**== wow animation ==**/

new WOW().init();

/**== loader js ==*/

$(window).load(function() {
    $(".bg_load").fadeOut("slow");
})

/**== img change on hover ==**/

$('.fader').hover(function() {
    $(this).find("img:last").fadeToggle();
});

	
