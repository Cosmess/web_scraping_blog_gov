const axios = require('axios');
const cheerio= require('cheerio');
const { children, not } = require('cheerio/lib/api/traversing');

const sitealvo = 'https://www.gov.br/pt-br/noticias/ultimas-noticias';

axios.get(sitealvo)
.then(resp =>{
    let dadoshtml = resp.data;
    let noticias = [];
    const $ = cheerio.load(dadoshtml);

    $('.tileHeadline').each((i,e)=>{
        const titulo = $(e).children().text();
        const link = $(e).children().attr('href');

        const linhanoticia = {titulo, link};
        noticias.push(linhanoticia);
       
    })
    console.log(noticias);
})

