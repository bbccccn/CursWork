import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable()
export class UserService {
  private user: User;

  constructor(private http: Http) { }

  public getCurrentUser(): User{
    return this.user;
  }

  public getUserById(id: any): Observable<any>{
    return this.http.get("http://localhost:8080/api/users/" + id);
  }

  public getUserByLP(login: string, password: string): Observable<any> {
    return this.http.get("http://localhost:8080/api/users/" + login + "/" + password);
  }
}
