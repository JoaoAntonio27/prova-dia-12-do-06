//1 - Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.//
function testar_primo(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
for (var i = 1; i <= 1000; i++) {
    if (testar_primo(i)) {
      console.log(i);
    }
  }

//2 - Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.//

function verificarSenha() {
    let senha = prompt("Insira a senha:"); 
  
    let mensagemTamanho = "A senha deve ter pelo menos 8 caracteres.";
    let mensagemMaiuscula = "A senha deve conter pelo menos uma letra maiúscula.";
    let mensagemMinuscula = "A senha deve conter pelo menos uma letra minúscula.";
    let mensagemNumero = "A senha deve conter pelo menos um número.";
  
    if (senha.length < 8) {
      alert(mensagemTamanho); 
    } else if (!/[A-Z]/.test(senha)) {
      alert(mensagemMaiuscula); 
    } else if (!/[a-z]/.test(senha)) {
      alert(mensagemMinuscula); 
    } else if (!senha.match(/[0-9]/)) {
      alert(mensagemNumero); 
    } else {
      alert("A senha é válida!"); 
    }
  }
  

 // 3 - Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.//
  
  function fatorial(n) {
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 1;
  } else if (n > 10) {
    return "Número muito grande. Limite máximo é 10.";
  } else {
    return n * fatorial(n - 1);
  }
}

//4 - Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.//


function QuadradoPerfeito() {
    let numero = prompt("Insira um número:");
  
    let raiz = Math.sqrt(numero);
    if (raiz == Math.floor(raiz)) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
  
  QuadradoPerfeito();
  