import { Component, OnInit } from '@angular/core';
import {UserService} from "../entities/user/user.service";
import {User} from "../entities/user/user";
import {isNull} from "util";

@Component({
  selector: 'app-profile-widget',
  templateUrl: './profile-widget.component.html',
  styleUrls: ['./profile-widget.component.css']
})
export class ProfileWidgetComponent implements OnInit {
  isSignedIn: boolean;
  user: User;
  name: string;
  password: string;


  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    console.log(JSON.stringify(this.user));
    if (!isNull(this.user)) {
      this.isSignedIn = true;
      console.log("this shit is null?")
    }
  }

  onLogin(){
    if (this.neverLookHerePls()) this.isSignedIn = true;
  }


  neverLookHerePls() : boolean{
    let isLogged = false;
    this.userService.getUserByLP(this.name, this.password).subscribe( v => {
      console.log("============");
      console.log(JSON.stringify(v["_body"]));
      if (v["_body"] === "")
        console.log("Try again");
      else {
        this.user = JSON.parse(v["_body"]);
        this.userService.setCurrentUser(this.user);
        isLogged = true;
      }
    });
    console.log(JSON.stringify(this.user));
    return isLogged;
  }
}
