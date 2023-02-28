
//若使用者沒有輸入內容，就按下了送出鈕，需要防止表單送出並提示使用者
const indexFormInput = document.querySelector('.index-form-input')
const indexUrlButton = document.querySelector('.index-url-button')

indexUrlButton.addEventListener('click', () => {
  indexFormInput.classList.add('was-validated')
})

indexFormInput.addEventListener('submit', (event) => {
  if (!indexFormInput.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
})