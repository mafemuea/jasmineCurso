const incrementar = (numero = 1, incremento = 1) =>
  numero > 100 ? numero : numero + incremento;

const multiplicar = (numero = 1, otroNumero = 1) =>
  numero > 100 ? numero : numero * otroNumero;

export { incrementar, multiplicar };
