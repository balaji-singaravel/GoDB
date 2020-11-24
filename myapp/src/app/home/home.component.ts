import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  notifications = [{topic:'Enforcement', siverity:'High', time:'2 hrs ago', description:'A new issue has been reported for Kaliyugan'},
  {topic:'Enforcement', siverity:'High', time:'2 hrs ago', description:'A new issue has been reported for Kaliyugan'},
  {topic:'Enforcement', siverity:'High', time:'2 hrs ago', description:'A new issue has been reported for Kaliyugan'}]

}
