import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character:any;
  charId: number = 1;


  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { id: 1 }
      this.charId = params['id'];
    }
  );

    this.charactersService.returnCharacter(this.charId)
      .subscribe(
        (result) => {
          this.character = result;
        },
        (error) => {
          console.log('There has been a problem');
        }
      );
  }

}
