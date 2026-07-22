// Contact form: submit via AJAX so the user stays on s37.ai and lands on our
// own thanks page (Formspree's _next redirect is unreliable on the free tier).
(function () {
  var form = document.querySelector('.contact-form');
  if (!form) return;
  var status = form.querySelector('.form-status');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = form.querySelector('button[type=submit]');
    var label = btn.textContent;
    btn.disabled = true; btn.textContent = 'Sending…';
    if (status) status.textContent = '';
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (res) {
      if (res.ok) { window.location.href = 'thanks.html'; return; }
      return res.json().then(function (data) {
        var msg = (data && data.errors && data.errors.map(function (x) { return x.message; }).join(', ')) || 'Something went wrong. Please email joshua@s37.ai.';
        throw new Error(msg);
      });
    }).catch(function (err) {
      btn.disabled = false; btn.textContent = label;
      if (status) status.textContent = err.message || 'Could not send. Please email joshua@s37.ai.';
    });
  });
})();
