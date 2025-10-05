// Updates footer year + optional demo form status
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const demoForm = document.querySelector('form[data-demo-status]');
  if (demoForm) {
    demoForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const status = document.getElementById('status');
      if (status) status.textContent = 'Thanks! (demo only)';
    });
  }
})();
