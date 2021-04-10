const http = require('http'); 
const url = require('url');
const operacao = require('./opcao.js');

http.createServer(function(req, resp) {     
    resp.writeHead(200, {'Content-Type':'text/html'}); 

    let conteudo = url.parse(req.url, true).query; 
    let num1 = parseInt(conteudo.n1);
    let num2 = parseInt(conteudo.n2);

    if(conteudo.opcao == "somar" || conteudo.opcao == "+"){
        resp.end("Resultado: " + operacao.Mais(num1,num2))       
    }else if(conteudo.opcao == "subtrair" || conteudo.opcao == "-"){      
        resp.end("Resultado: " + operacao.Menos(num1,num2)) 
    }
    else if(conteudo.opcao == "multiplicar" || conteudo.opcao == "*"){       
      resp.end("Resultado: " + operacao.Multiplicacao(num1,num2)) 
    }
    else if(conteudo.opcao == "dividir" || conteudo.opcao == "/"){       
        resp.end("Resultado: " + operacao.Divisao(num1,num2)) 
    }
    else if(conteudo.opcao == "resto" || conteudo.opcao == "%"){       
        resp.end("Resultado: " + operacao.Resto(num1,num2)) 
    }
}).listen(4000); 
