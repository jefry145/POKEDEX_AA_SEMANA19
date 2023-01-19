import { Component } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    title = 'actividad19';
  
    data:any[] = [];
    
    criterio!:any
  
    constructor(private pokedex:ServiciosService){}
  
  
      ngOnInit():void{
        this.getPokemons()
      }
  
  
    getPokemons(){
  
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
  }
  