/**
* Extração de Titulo, Link de imagem, Data da publicação e texto.
*/
const axios = require('axios');
const cheerio= require('cheerio');

//const urlfilho = 'https://www.gov.br/pt-br/noticias/energia-minerais-e-combustiveis/2022/02/setor-eletrico-brasileiro-alcanca-recordes-historicos-e-conquistas-em-2021';
const urlfilho = 'https://www.gov.br/pt-br/noticias/financas-impostos-e-gestao-publica/2022/02/superavit-primario-dos-estados-e-df-cresce-91-em-2021-e-atinge-r-124-bilhoes';

axios.get(urlfilho)
.then(resp=>{
    const dadoshtml = resp.data
    const $ = cheerio.load(dadoshtml);
    const titulo = $('h1').text();
    const linkimg = $('img').attr('src');
    const datapublicacao = $('span[class="value"]').text();
    const texto = $('div[property="rnews:articleBody"]').text();
    
    const dados = {titulo,linkimg,datapublicacao,texto}

    console.log(dados);

});
