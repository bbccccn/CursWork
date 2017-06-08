import { Component, OnInit } from '@angular/core';
import {UserService} from "../entities/user/user.service";
import {User} from "../entities/user/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-bar',
  templateUrl: './profile-bar.component.html',
  styleUrls: ['./profile-bar.component.css']
})
export class ProfileBarComponent implements OnInit {
  private user: User;
  private isSignedIn: boolean = false;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    if (this.user !== null) {
      this.isSignedIn = true;
    }
  }

  public onClick(){
    this.router.navigate(['/login']);
  }
}
