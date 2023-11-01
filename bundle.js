document.addEventListener("DOMContentLoaded", function () {
    // Verifica se há um idioma armazenado no localStorage
    var idiomaArmazenado = localStorage.getItem("idioma");
  
    if (idiomaArmazenado) {
      // Atualiza a URL da página atual com o idioma armazenado
      var urlParams = new URLSearchParams(window.location.search);
      urlParams.set("lang", idiomaArmazenado);
      history.pushState(
        null,
        "",
        window.location.pathname + "?" + urlParams.toString()
      );
    }
  
    // Obtém os parâmetros de consulta da URL
    var urlParams = new URLSearchParams(window.location.search);
    var lang = urlParams.get("lang");
  
    if (lang === "eng" || lang === "es") {
      // Oculte as <div> com a classe "preco-produto destaque-preco"
      var todasAsSecoesParaOcultar = document.querySelectorAll(
        ".preco-produto.destaque-preco"
      );
      todasAsSecoesParaOcultar.forEach(function (secao) {
        secao.style.display = "none";
      });
    }
  
    const translations = {
      pt: {
        news: "Lançamentos",
        buttonLabel: "For English",
        // Adicione mais traduções conforme necessário
      },
      eng: {
        news: "News",
        buttonLabel: "Para Português",
        // Adicione mais traduções conforme necessário
      },
    };
  
    if (lang in translations) {
      var translation = translations[lang];
  
      // Traduza o elemento "news"
      var newsElement = document.querySelector(".titulo-categoria");
      if (newsElement) {
        newsElement.innerHTML = `<strong>${translation.news}</strong>`;
      }
  
      // Traduza o elemento "buttonLabel"
      var buttonElement = document.getElementById("idiomaBotao");
      if (buttonElement) {
        buttonElement.innerHTML = translation.buttonLabel;
      }
    }
  
    // Obtém o idioma da URL
    var urlParams = new URLSearchParams(window.location.search);
    var lang = urlParams.get("lang");
  
    // Obtém referências aos botões
    var ptBotao = document.getElementById("ptBotao");
    var engBotao = document.getElementById("engBotao");
    var esBotao = document.getElementById("esBotao");
  
    ptBotao.style.display = "none";
    engBotao.style.display = "none";
    esBotao.style.display = "none";
  
    if (lang === "eng") {
      ptBotao.style.display = "block";
      esBotao.style.display = "block";
    } else if (lang === "es") {
      engBotao.style.display = "block";
      ptBotao.style.display = "block";
    } else {
      engBotao.style.display = "block";
      esBotao.style.display = "block";
    }
  
    ptBotao.addEventListener("click", function () {
      urlParams.set("lang", "pt");
      location.href = window.location.pathname + "?" + urlParams.toString();
      localStorage.setItem("idioma", "pt");
    });
  
    engBotao.addEventListener("click", function () {
      urlParams.set("lang", "eng");
      location.href = window.location.pathname + "?" + urlParams.toString();
      localStorage.setItem("idioma", "eng");
    });
  
    esBotao.addEventListener("click", function () {
      urlParams.set("lang", "es");
      location.href = window.location.pathname + "?" + urlParams.toString();
      localStorage.setItem("idioma", "es");
    });
  
    // Obtém a referência para a div de destino
    var destinoElemento = document.querySelector(".nivel-um");
  
    // Obtém a referência para o botão que você deseja mover
    var botao = document.getElementById("idiomaBotao");
  
    if (destinoElemento && botao) {
      // Remove o botão de sua localização atual
      botao.parentNode.removeChild(botao);
  
      // Insere o botão dentro da div de destino
      destinoElemento.appendChild(botao);
    }
  });
  