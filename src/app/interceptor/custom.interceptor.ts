import { HttpInterceptorFn } from '@angular/common/http';
import {AuthService} from '../services/authService';
import {inject} from '@angular/core';



export const customInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const authService = inject(AuthService);
  const token = authService.getToken();

  if (token) {const cloneReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
    return next(cloneReq);
  }
  return next(req);
};
