document.addEventListener("DOMContentLoaded", function() {
  var progressBar = document.getElementById('progress-bar');
  window.addEventListener('scroll', function() {
      var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
      gsap.to(progressBar, {width: scrollPercentage + '%', duration: 0.3, ease: 'power1.out'});
  });
});
function handleClick1() {
  document.getElementById('circle').style.top = '20px';
  document.getElementById('cir1').style.top = '20px';

}
function handleClick2() {
  document.getElementById('circle').style.top="100px";
  document.getElementById('cir1').style.top="100px";


}
function handleClick3() {
  document.getElementById('circle').style.top="180px";
  document.getElementById('cir1').style.top="180px";

}
function handleClick4() {
  document.getElementById('circle').style.top="260px";
  document.getElementById('cir1').style.top="260px";

}
function handleClick5() {
  document.getElementById('circle').style.top="340px";
  document.getElementById('cir1').style.top="340px";

}
function handleClick6() {
  document.getElementById('circle').style.top="420px";
  document.getElementById('cir1').style.top="420px";

}
function handleClick7() {
  document.getElementById('circle').style.top="500px";
  document.getElementById('cir1').style.top="500px";

}