(() => {
  const listaAvaliacao = document.querySelector('.lista-avaliacao');
  const buttons = document.querySelectorAll('.item');
  const buttonSubmit = document.querySelector('.submit');

  buttonSubmit.addEventListener('click', () => {
    const tipoAvaliacao = document.querySelector('.focus');
    const avaliacao = tipoAvaliacao.value;
    localStorage.setItem('avaliacao', JSON.stringify(avaliacao))
    window.location.href = './thank-you.html';
  })

  function activeButton() {
    buttons.forEach((button) => {
      button.classList.remove('focus');
      this.classList.add('focus');
    })
  }

  buttons.forEach((button) => {
    button.addEventListener('click', activeButton);
  })
})();