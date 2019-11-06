import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor{

  constructor() { }
  intercept(req,next){
    let tokenizedRequest=req.clone({
      setHeaders:{
        Authorization:'Bearer xx.yy.zz'
      }
    })
    return next.handle(tokenizedRequest);
  }
}
