import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {


  behaviourList: any = ['Casual: someone who isplaying mostly for fun', 'Indifferent: someone indifferent, win or lose doesn\'t matter', 'Competitive: someone playing to win, callouts enabled', 'Sweat/Tryhard : bunny hops, op guns, only victory matters'];
  strengthList: any = ['Aggro Rusher : aggressive-run-n-gun type of player', 'Sharp Shooter : all-around-great-aim type of player', 'Clutch Master : game-sense-high-iq type of player', 'Sneaky Killer : death-right-behind-you type of player', 'Support Brother : here-for-the-team type of player', 'Wicked Sniper : dat-spicy-quick-scope type of player'];
  gameList: any = ['Wolfenstein', 'Borderlands 2', 'Warface', 'Overwatch', 'DOOM', 'Halo Series', 'Crysis Series', 'Dying Light', 'Battlefield 1', 'Battlefield 4', 'Battlefield 5', 'Ghost Recon Series', 'Hunt Showdown', 'GTA V', 'Left 4 Dead', 'Insurgency', 'Rising Storm 2', 'Verdun', 'World War 3', 'Red Orchestra 2', 'Modern Warfare', 'Warzone', 'Black Ops Cold War', 'Apex Legends', 'PUBG', 'CS:GO', 'Escape from Tarkov', 'Quake Champions', 'Squad', 'Titanfall Series', 'Destiny 2', 'Rainbow Six Siege', 'Call of Duty WW2', 'Far Cry Series', 'Roblox', 'Battlefield 3', 'Battlefield Bad Company 2', 'Valorant', 'Payday']
  systemList: any = ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series S/X', 'Nintendo Switch', 'Mobile', 'Any / Crossplay'];
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
