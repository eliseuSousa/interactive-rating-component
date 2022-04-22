(() => {
  const titulo=document.querySelector('.titulo');
  const avaliacaoFinal=JSON.parse(localStorage.getItem('avaliacao' ||[]))
  informaAvaliacao=`<p class="mensagem">You selected ${avaliacaoFinal} out of 5</p>`;
  titulo.insertAdjacentHTML('beforebegin', informaAvaliacao);
})();