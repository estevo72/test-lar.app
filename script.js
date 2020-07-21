categories = [
	{ "id": 1, "name": "Receitas - Salário" },
	{ "id": 2, "name": "Receitas - Outros" },
	{ "id": 3, "name": "Despesas - Moradia" },
	{ "id": 4, "name": "Despesas - Alimentação" },
	{ "id": 5, "name": "Despesas - Lazer" }
]
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

//1-Crie uma função que retorne o saldo na conta (créditos - débitos).

const saldo = () => {
  let transactionsObj = JSON.parse(JSON.stringify(transactions));
  let saldo = transactionsObj.reduce((value, balance) =>{
    return balance.type === "DEBIT" ? value -= balance.amount : value += balance.amount;
  },0);
  return parseFloat(saldo.toFixed(2));
}


//2-Crie uma função que recebe o json acima e um parâmetro type (CREDIT ou DEBIT). Retornar a soma das transações do tipo passado.

const sumType = (json, type) => {
  let transactionsObj = JSON.parse(JSON.stringify(json));
  let sum = transactionsObj.reduce((value, current)=>{
    return current.type === type ? value += current.amount : value += 0;
  },0);
  return parseFloat(sum.toFixed(2));
}

//3-Crie uma função que retorne o percentual das despesas em relação às receitas. Percentual = debitos/créditos

const percent = () => {
  let debits = sumType(transactions, "DEBIT");
  let credit = sumType(transactions, "CREDIT");
  let relationPercent = (debits/credit) * 100;
  return parseFloat(relationPercent.toFixed(2));
}

//4-Crie uma função que recebe o JSON no formato acima e um parâmetro category_id (number). Retornar a soma dos valores da categoria passada.

const sumCategory = (json, category_id) => {
  let transactionsObj = JSON.parse(JSON.stringify(json));
  let sum = transactionsObj.reduce((value, current)=>{
    return current.category_id === category_id ? value += current.amount : value += 0;
  },0);
  return parseFloat(sum.toFixed(2));
}

//5-Crie uma função que dada uma categoria retorne o percentual gasto nesta categoria em relação ao total de receitas. Percentual = (soma dos valores da categoria)/(soma dos créditos)

const percentSumCategory = (category_id) => {
  let credit = sumType(transactions, "CREDIT");
  let transactionsObj = JSON.parse(JSON.stringify(transactions));
  let aux = transactionsObj.reduce((value, current)=>{
    //current.type !== "CREDIT" &&
    return current.category_id === category_id ? value += current.amount : value += 0;
  },0);
  let relationPercent = (aux/credit) * 100;
  return parseFloat(relationPercent.toFixed(2))
}


/*6-Crie uma função que recebe os JSONs acima e retorne um objeto no seguinte formato:
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
} */

const relatory = (transactions, categories) =>{
  let listCategories = JSON.parse(JSON.stringify(categories));

  let aux = listCategories.map((categorie)=>{
    return {
        "name": categorie.name,
        "amount": sumCategory(transactions, categorie.id),
        "percentual": percentSumCategory(categorie.id),
    }
  });

  let jsonObj =  {
    "income": sumType(transactions, "CREDIT"),
    "expense": sumType(transactions, "DEBIT"),
    "balance": percent(),
    "categories": aux
  }
  return jsonObj;
}