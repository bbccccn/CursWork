import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {MyFile} from "./my-file";
import {Observable} from "rxjs";

@Injectable()
export class MyFileService {

  constructor(private http: Http) { }

  public sendFile(file: MyFile){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post("http://localhost:8080/api/files/", JSON.stringify(file), options).subscribe(v => console.log(v.headers));
  }

  public getTorrentFiles(id): Observable<any>{
    return this.http.get("http://localhost:8080/api/files/" + id);
  }
}
