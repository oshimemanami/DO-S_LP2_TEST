// ============================================
// main.js
// アコーディオン開閉・モーダル・下部固定バー制御
// ============================================
// アコーディオンの開閉
function toggleAccordion(btn) {
  btn.classList.toggle('is-active');
  var panel = btn.nextElementSibling;
  panel.classList.toggle('is-open');
}

// 購入先を選択モーダル
function openModal() {
  document.getElementById('purchaseModal').classList.add('is-open');
}
function closeModal() {
  document.getElementById('purchaseModal').classList.remove('is-open');
}

// 下部固定バー右側:ブラウザバック
function goBack() {
  window.history.back();
}
