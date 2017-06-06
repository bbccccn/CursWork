import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Injectable()
export class PermissionService {

  constructor(private http: Http) { }

  public getPermissionById(id: any): Observable<any>{
    return this.http.get("http://localhost:8080/api/permissions/" + id);
  }

  public getAllPermissions(): Observable<any>{
    return this.http.get("http://localhost:8080/api/permissions/");
  }
}
