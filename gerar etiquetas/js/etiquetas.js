// const buttonElement = document.getElementById('gerar');

// document.getElementById('formCep').addEventListener('submit', addCep);
// buttonElement.onclick = gerar;

const ceps = JSON.parse(localStorage.getItem('ceps'));
console.log(ceps);

const listEtiquetas = document.getElementById('etiquetas');

for (cep of ceps) {
  const divEtiqueta = document.createElement('div');
  divEtiqueta.setAttribute('class', 'etiqueta');
  const corpoEtiqueta = `
  <H3 class="destinatario">DESTINATÁRIO</h3>

  <label class="nome"><strong>${cep.nome}</strong></label>

  <div class="endereco">
  <label>${cep.logradouro}</label>
  <label>${cep.numero}</label>
  <label>${cep.complemento}</label>
  </div>

  <div class="localidade">
  <label>${cep.bairro}</label>
  <label>${cep.localidade}</label>
  <label>${cep.uf}</label>
  </div>

  <div class="cep">
  <label>${cep.cep}</label>
  </div>



  <div>
    <img src=${cep.barCode} id="barcodeImage" class="codeBarImage" />
    
    
  </div>
  
`;
  divEtiqueta.innerHTML += corpoEtiqueta;
  listEtiquetas.appendChild(divEtiqueta);
}

window.print();
function gerar() {
  var doc = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts: true,
    floatPrecision: 16,
  });
  // doc.fromHTML(
  //   `<html><head><title></title></head><body>` +
  //     document.getElementById('con').innerHTML +
  //     `</body></html>`
  // );
  // doc.save('div.pdf');
  var elementHandler = {
    '#ignorePDF': function (element, renderer) {
      return true;
    },
  };
  var source = window.document.getElementsByTagName('body')[0];
  doc.fromHTML(
    source,
    10,
    10,

    {
      width: 120,
      elementHandlers: elementHandler,
    },
    function () {
      doc.save('pdf.pdf');
    }
  );
  // doc.autoPrint();

  // doc.output('dataurlnewwindow');
}
gerar();
