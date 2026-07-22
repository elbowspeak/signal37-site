// Mobile nav toggle. Delegated so a tap outside the open menu closes it.
document.addEventListener('click', function (e) {
  var btn = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (!btn || !links) return;
  if (e.target.closest('.nav-toggle')) {
    var open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  } else if (!e.target.closest('#nav-links')) {
    links.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
});
