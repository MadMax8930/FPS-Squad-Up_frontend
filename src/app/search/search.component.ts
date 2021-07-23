import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {


  behaviourList: any = ['Casual: Plays for fun', 'Indifferent: No f#cks given', 'Competitive: Plays to win', 'Sweat/Tryhard: Only victory matters'];
  strengthList: any = ['Aggro Rusher', 'Sharp Shooter', 'Clutch Master', 'Sneaky Killer', 'Support Brother', 'Wicked Sniper'];
  gameList: any = ['Wolfenstein', 'Overwatch', 'DOOM', 'Halo Series', 'Crysis Series', 'Battlefield 1', 'Battlefield 4', 'Battlefield 5', 'Modern Warfare', 'Warzone', 'Black Ops Cold War', 'Apex Legends', 'PUBG', 'CS:GO', 'Escape from Tarkov', 'Quake Champions', 'Squad', 'Titanfall Series', 'Destiny 2', 'Rainbow Six Siege', 'Call of Duty WW2', 'Battlefield 3', 'Battlefield Bad Company 2', 'Valorant', 'Payday']
  systemList: any = ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series S/X', 'Nintendo Switch', 'Any (Crossplay)'];
  countryList: any = ['USA', 'France', 'Spain', 'Bamba', 'Italy'];

  
  form = new FormGroup({

    game: new FormControl('', Validators.required),
    system: new FormControl('', Validators.required),
    behaviour: new FormControl(''),
    strength: new FormControl(''),
    country: new FormControl('')

  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }

  findSquadmate(e) {
    console.log(e.target.value);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
