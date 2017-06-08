import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {User} from "./user";
import {StorageService} from "../session/storage.service";

@Injectable()
export class UserService {
  private user: User;

  constructor(private http: Http,
              private storage: StorageService) { }

  public logOut(){
    this.storage.removeObject('loggedUser');
  }

  public getCurrentUser(): User{
    let o = this.storage.getObject('loggedUser');
    if (o !== 'undefined') this.user = o;
    return this.user;
  }

  public setCurrentUser(user: User): void{
    this.storage.setObject('loggedUser', user);
    this.user = user;
  }

  public getUserById(id: any): Observable<any>{
    return this.http.get("http://localhost:8080/api/users/" + id);
  }

  public getUserByLP(login: string, password: string): Observable<any> {
    return this.http.get("http://localhost:8080/api/users/login/" + login + "/" + password);
  }
}
