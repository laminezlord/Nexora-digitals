(function () {
  'use strict';

  // Main WhatsApp number for the contact form (country code, no + or spaces).
  var WHATSAPP_NUMBER = '2348132949373';

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');

  function setMenu(open) {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      setMenu(!links.classList.contains('open'));
    });
    links.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && links.classList.contains('open')) {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Contact form: builds a WhatsApp message and opens the chat
  var form = document.getElementById('contact-form');
  if (!form) return;

  var nameInput = document.getElementById('f-name');
  var businessInput = document.getElementById('f-business');
  var needInput = document.getElementById('f-need');
  var messageInput = document.getElementById('f-message');
  var error = document.getElementById('form-error');
  var ready = document.getElementById('form-ready');
  var readyLink = document.getElementById('form-ready-link');

  nameInput.addEventListener('input', function () {
    if (nameInput.value.trim()) error.hidden = true;
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = nameInput.value.trim();
    var business = businessInput.value.trim();
    var need = needInput.value;
    var details = messageInput.value.trim();

    if (!name) {
      error.hidden = false;
      nameInput.focus();
      return;
    }
    error.hidden = true;

    var lines = [
      'Hi Nexora Digitals, my name is ' + name + (business ? ' from ' + business : '') + '.',
      'I need: ' + need.toLowerCase() + '.'
    ];
    if (details) lines.push('', details);

    var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
    readyLink.href = url;
    ready.hidden = false;

    var win = null;
    try { win = window.open(url, '_blank'); } catch (err) { win = null; }
    if (win) {
      try { win.opener = null; } catch (err) { /* ignore */ }
    }
  });
})();
