<template>
    <div class="container">
                <h2> Použité technologie </h2>
                <p class="technology_description"> Zjisti víc o technologiích použitých v tomto projektu!</p>
            <div class="row technology_row justify-content-center">
                <a @click="nodeDetail" class="technology_item"><img src="../assets/node.png" class="technology_picture"> Node.js </a>
                <a @click="singlespaDetail" class="technology_item"><img src="../assets/singlespa.png" class="technology_picture"> Single-SPA </a>
                <a @click="expressDetail" class="technology_item"><img src="../assets/express.png" class="technology_picture"> Express.js </a>   
                <a @click="axiosDetail" class="technology_item"><img src="../assets/axios.png" class="technology_picture"> Axios </a>             
            </div>
            <div class="row technology_row justify-content-center">
                <a @click="angularDetail" class="technology_item"><img src="../assets/angular.png" class="technology_picture"> Angular </a>
                <a @click="reactDetail" class="technology_item"><img src="../assets/react.png" class="technology_picture"> React.js </a>
                <a @click="vueDetail" class="technology_item"><img src="../assets/vue.png" class="technology_picture"> Vue.js </a>
            </div>   
            <div class="technology_detail">
                <h3>{{ techHeader }}</h3>
                <p class="technology_desc">                    
                   {{ techDescription }}
                </p>
                <p v-html="techLinks"></p>
            </div>                   
    </div>
</template>

<script>
export default {
  name: 'MenuLogoes',
  data() {
  return {
    techHeader: '',
    techDescription: 'Kliknutím na ikonu se zobrazi detaily o dané technologii',
    techLinks: ''
  }
},
methods: {
  nodeDetail() {
    this.techHeader = 'Node.js',
    this.techDescription = 'Node.js je základem práce pro vývoj ebových aplikací s podporou škálování a server-side zpracování. Všechny další technologie na webu jsou na něm značné závislé.',
    this.techLinks = '<a href="https://nodejs.org/en" target="_blank" class="technology_link"> Web </a><a href="https://nodejs.org/en/docs" target="_blank" class="technology_link"> Docs </a>'
  },
  singlespaDetail() {
    this.techHeader = 'Single-SPA',
    this.techDescription = 'Originální single-spa je skvělý framework pro tvorbu micro-frontend, tedy aplikace z oddělených komponent. Mimo mé aplikace na něm funguje například i Facebook, nebo Google Maps a Gmail',
    this.techLinks = '<a href="https://single-spa.js.org/" target="_blank" class="technology_link"> Web </a><a href="https://single-spa.js.org/docs/getting-started-overview" target="_blank" class="technology_link"> Docs </a>'
  },
  expressDetail() {
    this.techHeader = 'Express.js',
    this.techDescription = 'Jedná se o kvalitní backend utilitu, která umožňuje navazovat a provozovat komunikaci přes REST API. Díky tomu bylo možné připojit OpenAI API.',
    this.techLinks = '<a href="https://expressjs.com/" target="_blank" class="technology_link"> Web </a><a href="https://expressjs.com/en/guide/routing.html" target="_blank" class="technology_link"> Docs </a>'
  },
  axiosDetail() {
    this.techHeader = 'Axios',
    this.techDescription = 'Axios je službou, která zprostředkovává komunikaci přes HTTP requesty mezi aplikací a prohlížečem. Zároveň je skvělou volbou pro práci s JSON daty.',
    this.techLinks = '<a href="https://axios-http.com/" target="_blank" class="technology_link"> Web </a><a href="https://axios-http.com/docs/intro#" target="_blank" class="technology_link"> Docs </a>'
  },
  angularDetail() {
    this.techHeader = 'Angular',
    this.techDescription = 'Angular je nástupcem Angular.js, vyvinutého pod společností Google. Projekt Angular je dítětem "odpadlíků" z Google a tvoří celou komponentu v mém projektu.',
    this.techLinks = '<a href="https://angular.io/" target="_blank" class="technology_link"> Web </a><a href="https://angular.io/docs" target="_blank" class="technology_link"> Docs </a>'
  },
  reactDetail() {
    this.techHeader = 'React.js',
    this.techDescription = 'React.js je frontend framework vyvinutý společností Meta (tehdy Facebook) v roce 2013. V projektu tvoří komponentu propojenou s OpenAI API.',
    this.techLinks = '<a href="https://react.dev/" target="_blank" class="technology_link"> Web </a><a href="https://react.dev/reference/react" target="_blank" class="technology_link"> Docs</a>'
  },
  vueDetail() {
    this.techHeader = 'Vue.js',
    this.techDescription = 'Vue.js je svižný a kompaktní frontend framework ve kterém je tvořena právě tato komponenta. Nabízí možnosti rychlé tvorby skvělého frontend.',
    this.techLinks = '<a href="https://vuejs.org/" target="_blank" class="technology_link"> Web </a><a href="https://vuejs.org/guide/introduction.html" target="_blank" class="technology_link"> Docs </a>'
  }
}
}
</script>

<style>
.technology_item{
    width: 70px;
    display: inline-block;
    color: #252424;
    background-color: #c8d3fc;
    text-decoration: none;
    font-size: 0.7rem;
    font-weight: 500;
    padding-bottom: 5px;
    padding-top: 5px;
    margin-left: 10px;

    border-color: #93a5ec;
    border-width: 2px;
    border-style: solid;
    border-radius: 5px;
}
.technology_item:hover{
    font-weight: 600;
    color: #FFFFFF;
    background-color: #5c6380;
    border-color: #5c6380;
}
.technology_link{
    width: 90px;
    display: inline-block;
    color: #252424;
    background-color: #c8d3fc;
    text-decoration: none;
    font-size: 0.7rem;
    font-weight: 500;
    padding-bottom: 5px;
    padding-top: 5px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: 10px;

    border-color: #93a5ec;
    border-width: 2px;
    border-style: solid;
    border-radius: 5px;
}
.technology_link:hover{
    font-weight: 600;
    color: #FFFFFF;
    background-color: #5c6380;
    border-color: #5c6380;
}
.technology_picture{
    display: block;
    width: 40px;
    height: 40px;
    margin-left: 15px;
    padding-bottom: 5px;
}
.technology_detail{
    padding-top: 25px;
    color:#252424;    
}
.technology_desc{
    color:#252424; 
    font-size: 1.1rem;
    max-width: 100%;
}
.content-row{
    margin-top: 10px;
}
</style>

