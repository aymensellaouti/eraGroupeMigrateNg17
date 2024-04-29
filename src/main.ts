import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import {  provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AuthInterceptor } from './app/auth/interceptor/auth.interceptor';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { appRoutes } from './app/app.routes';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        provideAnimations(),
        provideToastr(),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(appRoutes, withComponentInputBinding()/*, withPreloading(PreloadAllModules)*/)
    ]
})
  .catch(err => console.error(err));
//bindToComponentInputs: true,
