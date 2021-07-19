import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // tslint:disable-next-line: no-trailing-whitespace
  
  messageSearch = 'LET\'S HAVE A LOOK FOR YOUR SQUADMATE';

  constructor() { }

  ngOnInit(): void {
  }

}
