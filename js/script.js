let allEtiquetas = [];
const cep = document.getElementById('cep');

cep.addEventListener('blur', (e) => {
  let cepProcurado = cep.value.replace('-', '');
  console.log(cepProcurado);

  // console.log(res);
  fetchCep(cepProcurado);
});

const showData = (dadosResult) => {
  for (const dado in dadosResult) {
    if (document.querySelector('#' + dado)) {
      document.querySelector('#' + dado).value = dadosResult[dado];
    }
  }
};

async function fetchCep(cep) {
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  };
  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`, options);
    const cepEncontrado = await res.json();
    // allEtiquetas.push(cepEncontrado);
    showData(cepEncontrado);

    // console.log(allEtiquetas);
  } catch (error) {
    console.log('Cep não encontrado');
  }
}
