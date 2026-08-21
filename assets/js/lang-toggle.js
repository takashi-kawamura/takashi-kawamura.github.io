(function () {
  var LANG_KEY = 'preferred-lang';

  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem(LANG_KEY, lang);
    var btn = document.getElementById('lang-toggle-btn');
    if (btn) {
      btn.textContent = lang === 'ja' ? 'English' : '日本語';
      btn.setAttribute('aria-label', lang === 'ja' ? 'Switch to English' : '日本語に切り替え');
    }
  }

  function wireButton() {
    var lang = localStorage.getItem(LANG_KEY) || 'ja';
    var btn = document.getElementById('lang-toggle-btn');
    if (btn) {
      btn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-lang') || 'ja';
        applyLang(current === 'ja' ? 'en' : 'ja');
      });
    }
    applyLang(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireButton);
  } else {
    wireButton();
  }
})();
