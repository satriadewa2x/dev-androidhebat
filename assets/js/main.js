(function () {
  var target = document.getElementById('typed');
  if (!target) return;

  var line = 'cat kebijakan-privasi.md';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    target.textContent = line;
    return;
  }

  var i = 0;
  function type() {
    if (i <= line.length) {
      target.textContent = line.slice(0, i);
      i++;
      setTimeout(type, 45);
    }
  }
  setTimeout(type, 500);
})();
