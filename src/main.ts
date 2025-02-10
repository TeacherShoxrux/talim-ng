import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter} from '@angular/router';
import routesConfig from './app/app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient} from '@angular/common/http';
import {LoadingInterceptor} from './app/interceptor/loading.interceptor';

bootstrapApplication(AppComponent, {
  providers:[
    provideHttpClient(),
    provideRouter(routesConfig),
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }

  ]}
).catch(err => console.error(err));
