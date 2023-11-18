
window.onload = function() {
  countDownToTime("10 october 2024 9:56:00");
}

function countDownToTime(countTo) {
  
  let futureDate = new Date(countTo);
futureDate = (futureDate.getTime()/1000);

let now = new Date();
now = (now.getTime()/1000);

timeDifference = (futureDate- now);
  
let days = Math.floor( timeDifference / (24*60*60));
let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


$(".days").html(` - ${days} D`);
$(".hours").html(`${hours} h`);
$(".minutes").html(`${ mins } m`);
$('.seconds').html(`${ secs} s`)


setInterval(function() {  countDownToTime(countTo); }, 1000);
}


$("textarea").keyup(function(){
  let myLength = $(this).val().length
  $("#num").text(
    100 - myLength <= 0 ? " Your character Finished" : 100 - myLength
  )
})



function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}