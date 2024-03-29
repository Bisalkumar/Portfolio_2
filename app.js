document.addEventListener("DOMContentLoaded", function() {
  var progressBar = document.getElementById('progress-bar');
  window.addEventListener('scroll', function() {
      var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
      gsap.to(progressBar, {width: scrollPercentage + '%', duration: 0.3, ease: 'power1.out'});
  });
});

function handleClick1() {
  document.getElementById('circle').style.top = '18px';
  document.getElementById('cir1').style.top = '18px';
}
function handleClick2() {
  document.getElementById('circle').style.top="81px";
  document.getElementById('cir1').style.top="81px";
}
function handleClick3() {
  document.getElementById('circle').style.top="144px";
  document.getElementById('cir1').style.top="144px";
}
function handleClick4() {
  document.getElementById('circle').style.top="212px";
  document.getElementById('cir1').style.top="212px";
}
function handleClick5() {
  document.getElementById('circle').style.top="275px";
  document.getElementById('cir1').style.top="275px";
}
function handleClick6() {
  document.getElementById('circle').style.top="338px";
  document.getElementById('cir1').style.top="338px";
}
function handleClick7() {
  document.getElementById('circle').style.top="406px";
  document.getElementById('cir1').style.top="406px";
}

function handleClick(index) {
  var icons = document.querySelectorAll('.navigation .icon span');
  icons.forEach(function(icon) {
    icon.classList.remove('active');
  });
  icons[index - 1].classList.add('active');
}