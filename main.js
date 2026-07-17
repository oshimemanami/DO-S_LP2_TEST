// ============================================
// main.js
// アコーディオンの開閉制御
// ============================================
// アコーディオンの開閉
function toggleAccordion(btn) {
  btn.classList.toggle('is-active');
  var panel = btn.nextElementSibling;
  panel.classList.toggle('is-open');
}
