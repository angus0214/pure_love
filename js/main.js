let width = 100
let  perfData = window.performance.timing// The PerformanceTiming interface represents timing-related performance information for the given page.
let  EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart)
let  time = parseInt((EstimatedTime / 1000) % 60) * 100;

// Loadbar Animation
$('.loadbar').animate(
  {
    width: width + '%',
  },
  time
);

// Loadbar Glow Animation
$('.glow').animate(
  {
    width: width + '%',
  },
  time
);

// Percentage Increment Animation
let PercentageID = $('#precent')
let  start = 0
let  end = 100
let durataion = time;
animateValue(PercentageID, start, end, durataion);

function animateValue(id, start, end, duration) {
  var range = end - start,
    current = start,
    increment = end > start ? 1 : -1,
    stepTime = Math.abs(Math.floor(duration / range)),
    obj = $(id);

  var timer = setInterval(function () {
    current += increment;
    $(obj).text(current + '%');
    //obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Fading Out Loadbar on Finised
// setTimeout(function () {
//   $('.preloader-wrap').fadeOut(400);
// }, time);
