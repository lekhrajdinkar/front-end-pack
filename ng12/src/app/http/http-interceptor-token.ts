import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class HttpInterceptorPrint implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        console.log("****INTERCEPTOR-1*********HTTP REQ CONSOLE LOG*************");
        console.log('PRINT REQUEST',req);
        console.log("***********************************************************\n\n");

        return next.handle(req);
    }
}

export class HttpInterceptorToken implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        console.log("****INTERCEPTOR-2*********Add Token*************");
        // let h = new HttpHeaders();
        // h.set('Content-Type',  'application/json');
        // h.set('Authorization',  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbml0aWFsI…DcyfQ.5e9Bhrl-2LSGWWfrmp79K0gSrQLRIG0ZbUbB-WIJiN4');
        
        let new_req = req.clone({headers: req.headers.append('Authorization','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbml0aWFsI…DcyfQ.5e9Bhrl-2LSGWWfrmp79K0gSrQLRIG0ZbUbB-WIJiN4') });
        
        //let p = new HttpParams();
        
        new_req = new_req.clone({params: new_req.params.append('param-1', 'param-1')})
        console.log('Modifies REQUEST ::',new_req);
        console.log("***********************************************************\n\n");

        return next.handle(new_req);
    }
}