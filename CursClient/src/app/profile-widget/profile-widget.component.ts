import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {UserService} from "../entities/user/user.service";
import {User} from "../entities/user/user";
import {isNull} from "util";

@Component({
  selector: 'app-profile-widget',
  templateUrl: './profile-widget.component.html',
  styleUrls: ['./profile-widget.component.css']
})
export class ProfileWidgetComponent implements OnInit {
  isSignedIn: boolean = false;
  user: User;
  name: string;
  password: string;


  constructor(private userService:UserService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    if (!isNull(this.user)) {
      this.isSignedIn = true;
    }
  }

  onLogin(){
    this.neverLookHerePls();
    if (this.user !== null) {
      this.isSignedIn = true;
    }
  }

  onLogOut(){
    this.userService.logOut();
    location.reload();
  }

  neverLookHerePls() : boolean{
    this.userService.getUserByLP(this.name, this.password).subscribe( v => {
      console.log("============");
      console.log(JSON.stringify(v["_body"]));
      if (v["_body"] === "")
        console.log("Try again");
      else {
        this.user = JSON.parse(v["_body"]);
        this.userService.setCurrentUser(this.user);
        location.reload();
      }
    });
    return false;
  }
}
