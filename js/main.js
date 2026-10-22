(function () {
  const btn = document.querySelector('.menu-btn');
  const links = document.querySelector('.nav-links');

  if (btn && links) {
    btn.addEventListener('click', function () {
      const open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  const form = document.getElementById('contact-form');
  const note = document.getElementById('form-note');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const email = data.get('email') || '';
      const type = data.get('type') || '';
      const message = data.get('message') || '';
      const body = encodeURIComponent(
        (type ? 'Type: ' + type + '\n\n' : '') + message + '\n\n— ' + name + ' (' + email + ')'
      );
      window.location.href = 'mailto:abdulindia.scars@gmail.com?subject=' +
        encodeURIComponent('WordPress project') + '&body=' + body;
      if (note) note.hidden = false;
      form.reset();
    });
  }
})();
