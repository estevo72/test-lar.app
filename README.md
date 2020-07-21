# Teste da LAR.app

## Regras
* Criar um repositório GIT incluindo este README.md e o código fonte com as soluções para as questões. Envie o link em resposta ao email que recebeu.
* Pode utilizar qualquer linguagem pra solucionar os problemas. Aqui na LAR trabalhamos com Java, Kotlin, Javascript, mas fique à vontade para escolher qualquer linguagem de sua preferência.
* Responda tudo que conseguir e do jeito que conseguir. Entretanto, esperamos encontrar nas soluções boas práticas de programação, clean code. Lembre-se sempre: DRY ;)


## Problema
LAR.app é muito organizada e gostaria de entender sua situação financeira. Para isso, decidiu classificar seus gastos e entender melhor como seu dinheiro está sendo gasto.

Para isso, ela obteve acesso a um JSON com as transações bancárias ocorridas em sua conta de um certo período e classificou tudo de acordo com algumas categorias que ela definiu:

```

categories = [
	{ "id": 1, "name": "Receitas - Salário" },
	{ "id": 2, "name": "Receitas - Outros" },
	{ "id": 3, "name": "Despesas - Moradia" },
	{ "id": 4, "name": "Despesas - Alimentação" },
	{ "id": 5, "name": "Despesas - Lazer" }
]
```

```
transactions = [
   {
      "type":"DEBIT",
      "amount":258.60,
      "description":"Condomínio",
      "category_id":3
   },
   {
      "type":"DEBIT",
      "amount":1093.03,
      "description":"Aluguel",
      "category_id":3
   },
   {
      "type":"DEBIT",
      "amount":780.53,
      "description":"Mercado",
      "category_id":4
   },
   {
      "type":"CREDIT",
      "amount":3500.00,
      "description":"Recebimento de salário",
      "category_id":1
   },
   {
      "type":"DEBIT",
      "amount":80.53,
      "description":"Feira Orgânica",
      "category_id":4
   },
   {
      "type":"DEBIT",
      "amount":36.25,
      "description":"Café no mercado municipal",
      "category_id":5
   },
   {
      "type":"DEBIT",
      "amount":76.64,
      "description":"Energia Elétrica",
      "category_id":3
   },
   {
      "type":"DEBIT",
      "amount":120.56,
      "description":"Hamburguer artesanal",
      "category_id":5
   },
   {
      "type":"CREDIT",
      "amount":190.00,
      "description":"Venda do celular velho",
      "category_id":2
   }
]
```

Dadas as informações acima:

Crie uma função que retorne o saldo na conta (créditos - débitos).
Crie uma função que recebe o json acima e um parâmetro type (CREDIT ou DEBIT). Retornar a soma das transações do tipo passado.
Crie uma função que retorne o percentual das despesas em relação às receitas. Percentual = debitos/créditos
Crie uma função que recebe o JSON no formato acima e um parâmetro category_id (number). Retornar a soma dos valores da categoria passada.
Crie uma função que dada uma categoria retorne o percentual gasto nesta categoria em relação ao total de receitas. Percentual = (soma dos valores da categoria)/(soma dos créditos)
Crie uma função que recebe os JSONs acima e retorne um objeto no seguinte formato:

```
{
    "income": //soma dos créditos
    "expense": //soma dos débitos
    "balance": //diferença entre créditos e débitos
    "categories": [
        {
            "name": "Receitas - Salário", //nome da categoria
            "amount": //soma dos valores desta categoria
            "percentual": //percentual da soma dos valores da categoria em relação ao total de créditos
        },
        ... //fazer isso para todas as categorias
    ]
}
```
