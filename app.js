// gsap top scroll animation
document.addEventListener("DOMContentLoaded", function() {
  var progressBar = document.getElementById('progress-bar');
  window.addEventListener('scroll', function() {
      var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
      gsap.to(progressBar, {width: scrollPercentage + '%', duration: 0.3, ease: 'power1.out'});
  });
});
