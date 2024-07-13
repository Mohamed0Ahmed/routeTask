import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private _HttpClient:HttpClient) { }



  getCustomers():Observable<any> 
  {
    return this._HttpClient.get('http://localhost:3000/customers');
  }


  getTransaction():Observable<any> 
  {
    return this._HttpClient.get('http://localhost:3000/transactions');
  }

}
