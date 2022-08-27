import { Component, OnInit } from '@angular/core';
import {  UsersApiService } from "./users.api.service";
import { IusersIteam } from "./model/users.models";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: IusersIteam[] | undefined;
  isSpecial: any;
  isUnchanged: any;
  canSave: any;



  constructor(private service: UsersApiService) {}

  ngOnInit(): void {

    this.service. getsearchusers().subscribe((Result: IusersIteam[] | undefined) => {
      this.users = Result;
      console.log(Result);
    });
  }
  

  emial(emialname:string): void  {
  
    this.service.getsearchusers().subscribe((Result) => {
      this.users = Result;
      console.log(Result);
    });
  
  
  } 

}
