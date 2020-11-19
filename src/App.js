import React from 'react';
import Card from './components/card';
import Pagination from './components/pagination';
import './App.css';
import './components/styles.css'
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemones: [],
            currentPage: 1,
            pagesShow:[0,1,2,3,4,5,6],
            pokemonPerPage: 8,
            initPoke: 1
        }
    }

    componentDidMount() {
        const limit = this.state.pokemonPerPage;
        const url = 'https://pokeapi.co/api/v2/pokemon';
        //Consumir la API de pokeapi
        fetch(`${url}?limit=${limit}`)
            .then(response => response.json())
            .then(data => this.setState({pokemones: data.results}))
            .catch( error => {
              console.log(error);
            })
    }
      paginationShow =(currentPage)=>{
        // let cantPageShow=10;
        // let pages = [];
        // if(currentPage >5){
        // let limiteInferior = currentPage - 4;
        // let limiteSuperior = currentPage + 3;
        // for(let i = limiteInferior; i<=limiteSuperior; i++){
        // pages.push(i);
        // }
        // }else{
        // for(let i = 1; i<=cantPageShow; i++){
        // pages.push(i);}}
        // console.log(pages)
        // this.setState({currentPage: currentPage})
        // this.setState({pagesShow:pages})
        // console.log(this.state.pagesShow)
      }
    fetchPage = (requestPage) => {
      //1. Completar el método para poder obtener los pokemones dependiendo de la página solicitada
      const limit = this.state.pokemonPerPage;
      const url = 'https://pokeapi.co/api/v2/pokemon';
     
      this.setState({initPoke:requestPage, currentPage:requestPage});
      fetch(`${url}?limit=${limit}&offset=${(requestPage - 1) * this.state.pokemonPerPage}`)
            .then(response => response.json())
            .then(data => this.setState({pokemones: data.results}))
            .catch( error => {
              console.log(error);
            }
            )
            let cantPageShow=6;
            let pages = [];
            if(requestPage >5){
            let limiteInferior = requestPage - 4;
            let limiteSuperior = requestPage + 3;
            for(let i = limiteInferior; i<=limiteSuperior; i++){
            pages.push(i);
            }
            }else{
            for(let i = 0; i<=cantPageShow; i++){
            pages.push(i);}}
            console.log(pages)
            this.setState({currentPage: requestPage})
            this.setState({pagesShow:pages})
            console.log(this.state.pagesShow)
            
    }

    render() {
        return (
          <div>
            <div className="pokedex-container">
              {
                
                this.state.pokemones.map( (pokemon, index) => {  
                  if(this.state.initPoke>1){ 
                   index=((index)+(this.state.pokemonPerPage*(this.state.initPoke-1)))
                  }
                  //2. Solucionar el problema de obtener las imagenes de los pokemones con id < 10, > 10, > 100            
                  let pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(index>=9)&&(index<=99) ? ("0"+(index+1)):((index>99) ?((index+1)):("00"+(index+1)))}.png`
                  return (
                    <Card key={index + 1} name={pokemon.name} img={pokemonImg} />
                  )
                })
              }
            </div>,
            <div className="pagination">
            <Pagination currentPage={this.state.currentPage} 
            fetchPageFn={this.fetchPage} 
            paginationShow={this.paginationShow} 
            ShowPages={this.state.pagesShow} />
            </div>
            </div>
        )
    }
}
