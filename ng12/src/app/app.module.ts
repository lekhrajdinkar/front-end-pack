import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserComponent } from './http/user/user.component';
import { BlogsComponent } from './http/blogs/blogs.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { PlaygroundComponent } from './http/playground/playground.component';
import { HttpInterceptorPrint, HttpInterceptorToken } from './http/http-interceptor-token';

@NgModule({
  declarations: [
    AppComponent,
    HttpComponent,
    UserComponent,
    BlogsComponent,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    StoreModule.forRoot(reducers, {metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorPrint,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorToken,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
