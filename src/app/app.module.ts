import { ToastsContainer } from './notification/toasts-container.component';
import { httpInterceptorProviders } from './interceptor/index';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubmitCommoditiesComponent } from './submit-commodities/submit-commodities.component';
import { SanitizeHtmlPipe } from './services/sanitize-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubmitCommoditiesComponent,
    SanitizeHtmlPipe,
    ToastsContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
