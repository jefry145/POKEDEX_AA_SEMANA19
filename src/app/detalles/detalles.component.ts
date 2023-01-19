import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../services/servicios.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {

// Data Pokedex
  data:any[] = [];


// Codigo del Pokemon
  criterio:any


// Filtrado de array
  dataDetails!:any


// VALORES
  PokemonName:any
  PokemonImg:any
  

// data Pokedex

  constructor(public pokedex : ServiciosService , private rutaActiva: ActivatedRoute ){}
  

  ngOnInit():void{

// Funcion que Consigue La data Pokedex

    this.GetPokemo()

// Codigo Del Pokemon

    this.rutaActiva.paramMap.subscribe(
      (paramMap: any) => {
        const{params} = paramMap
        this.criterio = params.id
      }
    );
 
  }

  // Funcion Pokedex

  GetPokemo(){

    let pokemonData;

    for(let i = 21; i < 40; i++){


      this.pokedex.getPokemon(String(i)).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name,
            orden: res.order
          }
          this.data.push(pokemonData)
        
      })

    }
  }
 
  // Filtrando el array con el codigo

  ngAfterViewChecked(){

    this.dataDetails=this.data.filter((element: { name: string; }) => element.name == this.criterio)
    this.PokemonName= this.dataDetails[0].name
    this.PokemonImg = this.dataDetails[0].image
  }

}
