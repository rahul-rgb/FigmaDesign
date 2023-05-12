import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  constructor(private http: HttpClient) { }
  postUrl = 'loginApi';
  postSignupUrl = "signupApi"
  // public addLoginData(data:any){
  //   if(data == ''){
  //     alert("please insert record")
  //   }else{
  //     return this.http.post<any>(this.postUrl, data).pipe(catchError(this.CatchError))
  //   }
  // }
  // public CatchError(error:HttpErrorResponse){
  //   return throwError(error.statusText);
  // }

   // public addSignupData(data:any){
  //   if(data == ''){
  //     alert("please insert record")
  //   }else{
  //     return this.http.post<any>(this.postSignupUrl, data).pipe(catchError(this.CatchError))
  //   }
  // }
  // public CatchError(error:HttpErrorResponse){
  //   return throwError(error.statusText);
  // }
}
