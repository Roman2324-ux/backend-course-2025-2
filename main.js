const currency = "usd"; const date_from = "20220115"; const date_to = "20220131";
const base = new URL('https://bank.gov.ua/NBU_Exchange/exchange_site');
base.searchParams.append('valcode', currency);
base.searchParams.append('start', date_from);
base.searchParams.append('end', date_to);
base.searchParams.append('sort', 'exchangedate');
base.searchParams.append('order', 'desc');

base.searchParams.append('json', '');

console.log(base.toString());
