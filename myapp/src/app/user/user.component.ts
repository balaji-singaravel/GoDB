import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  dataList = [];
  constructor(private router:Router) { }

  ngOnInit(): void {

    let dataList = localStorage.getItem("data");

    this.dataList = JSON.parse(dataList);

  }


  onLogout(){
    localStorage.clear();
    this.router.navigate(['/Login']);
  }

}
