(() => {
  const listaAvaliacao = document.querySelector('.lista-avaliacao');
  const buttons = document.querySelectorAll('.lista-avaliacao > button');
  const buttonSubmit = document.querySelector('.submit');

  buttonSubmit.addEventListener('click', () => {
    const tipoAvaliacao = document.querySelector('.focus');
    const avaliacao = tipoAvaliacao.value;
    localStorage.setItem('avaliacao', JSON.stringify(avaliacao))
    window.location.href = './thank-you.html';
  })

  listaAvaliacao.addEventListener('click', ()=> {
    addFocusButton();
  })

  function addFocusButton() {
    buttons.forEach((key)=>{
      key.addEventListener('click', ()=> {
        removeFocusButton();
        key.setAttribute('class', 'item focus');
      })
    });
  }

  function removeFocusButton() {
    let button;
    for (let i = 0; i < buttons.length; i++) {
      button = buttons[i];
      button.setAttribute('class', 'item');
    }
  }
})();