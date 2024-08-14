class Produto {
    
    constru

  
constructor(idProduto, nome, categoria, preco, quantidadeEstoque, dataFabricacao, dataValidade = null, fornecedor = null) {
        
       
this.idProduto = idProduto;
        
      
this.nome = nome;
        
       

  
this.categoria = categoria;
        
      
this.preco = preco;
        
       
this.quantidadeEstoque = quantidadeEstoque;
        
        thi

      

 
this.dataFabricacao = dataFabricacao;
        
        
this.dataValidade = dataValidade;
        
        t

 
this.fornecedor = fornecedor;
    }

    
    }

  

  
// Método para criar uma cópia do objeto
    
   
copia() {
        
       
return new Produto(
            
            thi

      
this.idProduto,
            
            th

     
this.nome,
            
        
this.categoria,
            
         

  
this.preco,
            
        
this.quantidadeEstoque,
            
            th

        

  
this.dataFabricacao,
            
            

    
this.dataValidade,
            
            th

     
this.fornecedor
        );
    }

    
        );
    }

        );

   
// Método para exibir informações do produto
    
    exibirInformacoes

    exibirInfo

    exi
exibirInformacoes() {
        
        r

  
return `Produto(ID: ${this.idProduto}, Nome: ${this.nome}, Categoria: ${this.categoria}, ` +
               
             

        

  
`Preço: ${this.preco}, Quantidade em Estoque: ${this.quantidadeEstoque}, ` +
               
          

   
`Data de Fabricação: ${this.dataFabricacao}, Data de Validade: ${this.dataValidade}, ` +
               
           

    
`Fornecedor: ${this.fornecedor})`;
    }
}


    }
// Testando a classe

co
const produto1 = new Produto(1, 'Produto A', 'Categoria 1', 100.0, 50, '2024-01-01', '2025-01-01', 'Fornecedor X');

cons
const produtoCopia = produto1.copia();



consol


console.log(produto1.exibirInformacoes());

c
console.log(produtoCopia.exibirInformacoes());