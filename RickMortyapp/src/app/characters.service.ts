import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {


  charactersIds :any[] = new Array(12);

  constructor(private http: HttpClient) { }

  getRamdomcharacters(){
    for (let i = 0; i < this.charactersIds.length; i++) {
      this.charactersIds[i] = Math.floor(Math.random() * (826 - 1) + 1);
    }
  }

  returnCharacters() {
    this.getRamdomcharacters();
    return this.http.get('https://rickandmortyapi.com/api/character/'+this.charactersIds)
  }

  returnCharacter(id:number) {
    return this.http.get('https://rickandmortyapi.com/api/character/'+id)
  }

}
