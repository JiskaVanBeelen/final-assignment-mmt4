
$("#accordion").accordion({
    header: ".accordion-header",
    animate: 1000,
    heightStyle: "content"
});


$("#toggle").click(function () {
    $("#toggleBall").toggleClass("active")
    $("body").toggleClass("dark");
});


var player = videojs("player");
var player2 = videojs("player2");
var player3 = videojs("player3");
var player4 = videojs("player4");
var player5 = videojs("player5");


var playBtn = $("#play");
var playBtn2 = $("#play2");
var playBtn3 = $("#play3");
var playBtn4 = $("#play4");
var playBtn5 = $("#play5");

var rewindBtn = $("#rewind");
var rewindBtn2 = $("#rewind2");
var rewindBtn3 = $("#rewind3");
var rewindBtn4 = $("#rewind4");
var rewindBtn5 = $("#rewind5");

var checkBtn = $("#check");
var checkBtn2 = $("#check2");
var checkBtn3 = $("#check3");
var checkBtn4 = $("#check4");
var checkBtn5 = $("#check5");

var doneCheck = $('#done');
var doneCheck2 = $('#done2');
var doneCheck3 = $('#done3');
var doneCheck4 = $('#done4');
var doneCheck5 = $('#done5');

var popupShow = $(".popup");
var popupShow2 = $(".popup");
var popupShow3 = $(".popup");
var popupShow4 = $(".popup");
var popupShow5 = $(".popup");

var popupClose = $('.close');
var popupClose1 = $('.close');
var popupClose2 = $('.close');
var popupClose3 = $('.close');
var popupClose4 = $('.close');
var popupClose5 = $('.close');


player.on("ready", function () {
    //als video bestand klaar is dan...
    
    $("player").each(function() {
		$( this ).toggleClass("player");

	  });

	playBtn.click(function () {
         event.preventDefault();
        //play knop is geklikt

		//play video
		if (!player.paused()) {
			player.pause();
            $(".playIcon").attr("src","img/play.svg");
		} else {
			player.play();
            $(".playIcon").attr("src","img/pause.svg");
		}
	});

	//rewind
	rewindBtn.click(function () {
		var time = player.currentTime();
		player.currentTime(time - 10);
	});
    
    //check & popup
    checkBtn.click(function(){
		popupShow.css({'display' : "block"})
		
		checkBtn.css({'display' : "none"})
		doneCheck.css({'opacity' : "1"})
	});
	
	popupClose.click(function(){
		popupShow.css({'display' : "none"})
	});
});


//player2
player2.on("ready", function () {
    //als video bestand klaar is dan...
    
    $("player2").each(function() {
		$( this ).toggleClass("player2");

	  });

	playBtn2.click(function () {
         event.preventDefault();
        //play knop is geklikt

		//play video
		if (!player2.paused()) {
			player2.pause();
            $(".playIcon").attr("src","img/play.svg");
		} else {
			player2.play();
            $(".playIcon").attr("src","img/pause.svg");
		}
	});

	//rewind
	rewindBtn2.click(function () {
		var time = player2.currentTime();
		player2.currentTime(time - 10);
	});
    
    //check & popup
    checkBtn2.click(function(){
		popupShow2.css({'display' : "block"})
		
		checkBtn2.css({'display' : "none"})
		doneCheck2.css({'opacity' : "1"})
	});
	
	popupClose2.click(function(){
		popupShow2.css({'display' : "none"})
	});
});


//player3
player3.on("ready", function () {
    //als video bestand klaar is dan...
    
    $("player3").each(function() {
		$( this ).toggleClass("player3");

	  });

	playBtn3.click(function () {
         event.preventDefault();
        //play knop is geklikt
		
		//play video
		if (!player3.paused()) {
			player3.pause();
            $(".playIcon").attr("src","img/play.svg");
		} else {
			player3.play();
            $(".playIcon").attr("src","img/pause.svg");
		}
	});

	//rewind
	rewindBtn3.click(function () {
		var time = player3.currentTime();
		player3.currentTime(time - 10);
	});
    
    //check & popup
    checkBtn3.click(function(){
		popupShow3.css({'display' : "block"})
		
		checkBtn3.css({'display' : "none"})
		doneCheck3.css({'opacity' : "1"})
	});
	
	popupClose3.click(function(){
		popupShow3.css({'display' : "none"})
	});
});


//player4
player4.on("ready", function () {
    //als video bestand klaar is dan...
    
    $("player4").each(function() {
		$( this ).toggleClass("player4");

	  });

	playBtn4.click(function () {
         event.preventDefault();
        //play knop is geklikt
		
		//play video
		if (!player4.paused()) {
			player4.pause();
            $(".playIcon").attr("src","img/play.svg");
		} else {
			player4.play();
            $(".playIcon").attr("src","img/pause.svg");
		}
	});

	//rewind
	rewindBtn4.click(function () {
		var time = player4.currentTime();
		player4.currentTime(time - 10);
	});
    
    //check & popup
    checkBtn4.click(function(){
		popupShow4.css({'display' : "block"})
		
		checkBtn4.css({'display' : "none"})
		doneCheck4.css({'opacity' : "1"})
	});
	
	popupClose4.click(function(){
		popupShow4.css({'display' : "none"})
	});
});


//player5
player5.on("ready", function () {
    //als video bestand klaar is dan...
    
    $("player5").each(function() {
		$( this ).toggleClass("player5");

	  });

	playBtn5.click(function () {
         event.preventDefault();
        //play knop is geklikt

		//play video
		if (!player5.paused()) {
			player5.pause();
            $(".playIcon").attr("src","img/play.svg");
		} else {
			player5.play();
            $(".playIcon").attr("src","img/pause.svg");
		}
	});

	//rewind
	rewindBtn5.click(function () {
		var time = player5.currentTime();
		player5.currentTime(time - 10);
	});
    
    //check & popup
    checkBtn5.click(function(){
		popupShow5.css({'display' : "block"})
		
		checkBtn5.css({'display' : "none"})
		doneCheck5.css({'opacity' : "1"})
	});
	
	popupClose5.click(function(){
		popupShow5.css({'display' : "none"})
	});
});




