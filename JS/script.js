function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var links = document.querySelectorAll('a[href^="#"]');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function (e) {
    e.preventDefault();
    var href = this.getAttribute('href');
    smoothScroll(href, 1000);
  });
}


// Consulta por cep

function limpa_formulário_cep() {
  document.getElementById('rua').value = ("");
  document.getElementById('bairro').value = ("");
  document.getElementById('cidade').value = ("");
  document.getElementById('uf').value = ("");

}
function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    document.getElementById('rua').value = (conteudo.logradouro);
    document.getElementById('bairro').value = (conteudo.bairro);
    document.getElementById('cidade').value = (conteudo.localidade);
    document.getElementById('uf').value = (conteudo.uf);
  }
  else {
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {

  var cep = valor.replace(/\D/g, '');

  if (cep != "") {

    var validacep = /^[0-9]{8}$/;

    if (validacep.test(cep)) {

      document.getElementById('rua').value = "...";
      document.getElementById('bairro').value = "...";
      document.getElementById('cidade').value = "...";
      document.getElementById('uf').value = "...";

      var script = document.createElement('script');
      script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

      document.body.appendChild(script);
    }
    else {
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  }
  else {
    limpa_formulário_cep();
  }
};
