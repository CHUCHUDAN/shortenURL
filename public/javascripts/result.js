
const copyButton = document.querySelector('.result-copy-button');
const copyText = document.querySelector('.copyText');

copyButton.addEventListener('click', function () {
  // 建立一個 range 對象來選中文本範圍
  const range = document.createRange();
  range.selectNode(copyText);

  // 將 range 對象添加到選區中
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  // 複製選區內容到剪貼板
  document.execCommand('copy');

  // 清除選區
  selection.removeAllRanges();

  copyButton.textContent = 'Copied!'
  copyButton.disabled = true
  copyButton.classList.add('result-copied-button')

  setTimeout(function () {
    copyButton.textContent = 'Copy'
    copyButton.disabled = false
    copyButton.classList.remove('result-copied-button')
  }, 2000);

});

