let valor = document.querySelector("#reais");
let input = document.querySelector("#converter");
let de = document.querySelector("#moedasde");
let para = document.querySelector("#moedaspara");
let label = document.querySelector("label span");
let simbolo = document.querySelector(".moedaSimbolo");

setInterval(function () {
  //Dolar para Reais
  if (de.value == "USD" && para.value == "BRL") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "R$";
    } else {
      valor.innerText = (parseFloat(input.value) * 5.47)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "R$";
    }
  }

  //Dolar para Euro
  else if (de.value == "USD" && para.value == "EUR") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "€";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.86)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "€";
    }
  }

  //Dolar para Libra Esterlina
  else if (de.value == "USD" && para.value == "GBP") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "£";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.73)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "£";
    }
  }

  //Dolar para Peso Argentino
  else if (de.value == "USD" && para.value == "ARS") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "$";
    } else {
      valor.innerText = (parseFloat(input.value) * 98.91)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "$";
    }
  }

  //Dolar para Guarani
  else if (de.value == "USD" && para.value == "PYG") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "₲";
    } else {
      valor.innerText = (parseFloat(input.value) * 6910.31)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "₲";
    }
  }

  //Real para dolar
  else if (de.value == "BRL" && para.value == "USD") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "$";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.18)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "$";
    }
  }

  //Real para Euro
  else if (de.value == "BRL" && para.value == "EUR") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "€";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.16)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "€";
    }
  }

  //Real para Libra Esterlina
  else if (de.value == "BRL" && para.value == "GBP") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "£";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.13)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "£";
    }
  }

  //Real para Peso Argentino
  else if (de.value == "BRL" && para.value == "ARS") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "$";
    } else {
      valor.innerText = (parseFloat(input.value) * 18.08)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "$";
    }
  }

  //Real para Guarani
  else if (de.value == "BRL" && para.value == "PYG") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "₲";
    } else {
      valor.innerText = (parseFloat(input.value) * 1263.29)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "₲";
    }
  }

  //Euro para dolar
  else if (de.value == "EUR" && para.value == "USD") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "$";
    } else {
      valor.innerText = (parseFloat(input.value) * 1.16)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "$";
    }
  }

  //Euro para Real
  else if (de.value == "EUR" && para.value == "BRL") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "R$";
    } else {
      valor.innerText = (parseFloat(input.value) * 6.34)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "R$";
    }
  }

  //Euro para Libra Esterlina
  else if (de.value == "EUR" && para.value == "GBP") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "£";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.85)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "£";
    }
  }

  //Euro para Peso argentino
  else if (de.value == "EUR" && para.value == "ARS") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "$";
    } else {
      valor.innerText = (parseFloat(input.value) * 114.62)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "$";
    }
  }

  //Euro para Guarani
  else if (de.value == "EUR" && para.value == "PYG") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "₲";
    } else {
      valor.innerText = (parseFloat(input.value) * 8008.38)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "₲";
    }
  }

  //Libra esterlina para dolar
  else if (de.value == "GBP" && para.value == "USD") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "$";
    } else {
      valor.innerText = (parseFloat(input.value) * 1.36)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "$";
    }
  }

  //Libra esterlina para Real
  else if (de.value == "GBP" && para.value == "BRL") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "R$";
    } else {
      valor.innerText = (parseFloat(input.value) * 7.45)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "R$";
    }
  }

  //libra esterlina para Euro
  else if (de.value == "GBP" && para.value == "EUR") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "€";
    } else {
      valor.innerText = (parseFloat(input.value) * 1.18)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "€";
    }
  }

  //libra esterlina para Peso argentino
  else if (de.value == "GBP" && para.value == "ARS") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "$";
    } else {
      valor.innerText = (parseFloat(input.value) * 134.75)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "$";
    }
  }

  //Libra esterlina para Guarani
  else if (de.value == "GBP" && para.value == "PYG") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "₲";
    } else {
      valor.innerText = (parseFloat(input.value) * 9418.03)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "₲";
    }
  }

  //Peso argentino para dolar
  else if (de.value == "ARS" && para.value == "USD") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "$";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.01)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "$";
    }
  }

  //Peso argentino para Real
  else if (de.value == "ARS" && para.value == "BRL") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "R$";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.055)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "R$";
    }
  }

  //Peso argentino para Euro
  else if (de.value == "ARS" && para.value == "EUR") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "€";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.0087)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "€";
    }
  }

  //Peso argentino para Libra esterlina
  else if (de.value == "ARS" && para.value == "GBP") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "£";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.0074)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "£";
    }
  }

  //Peso argentino para Guarani
  else if (de.value == "ARS" && para.value == "PYG") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "₲";
    } else {
      valor.innerText = (parseFloat(input.value) * 69.88)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "₲";
    }
  }

  //Guarani para dolar
  else if (de.value == "PYG" && para.value == "USD") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "$";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.00014)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "$";
    }
  }

  //Guarani para Real
  else if (de.value == "PYG" && para.value == "BRL") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "R$";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.00079)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "R$";
    }
  }

  //Guarani para Euro
  else if (de.value == "PYG" && para.value == "EUR") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "€";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.00012)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "€";
    }
  }

  //Guarani para Libra esterlina
  else if (de.value == "PYG" && para.value == "GBP") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "£";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.00011)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "£";
    }
  }

  //Guarani para Peso argentino
  else if (de.value == "PYG" && para.value == "ARS") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "$";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.014)
        .toFixed(2)
        .replace(".", ",");
      simbolo.innerText = "$";
    }
  }

  //Moeda propria
  else if (de.value == para.value) {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2).replace(".", ",");
      if (para.value == "USD") {
        simbolo.innerText = "$";
      } else if (para.value == "BRL") {
        simbolo.innerText = "R$";
      } else if (para.value == "EUR") {
        simbolo.innerText = "€";
      }
    } else {
      valor.innerText = parseFloat(input.value).toFixed(2).replace(".", ",");
      if (para.value == "USD") {
        simbolo.innerText = "$";
      } else if (para.value == "BRL") {
        simbolo.innerText = "R$";
      } else if (para.value == "EUR") {
        simbolo.innerText = "€";
      }
    }
  }
}, 1);