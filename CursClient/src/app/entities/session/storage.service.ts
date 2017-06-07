import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  public setObject(key, object){
    object = JSON.stringify(object);
    localStorage.setItem(key, object);
  }

  public getObject(key): any{
    let res = localStorage.getItem(key);
    if (res != null && res !== 'undefined') res = JSON.parse(res);
    return res;
  }

  public removeObject(key){
    localStorage.removeItem(key);
  }

}
