import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { CarouselGamesComponent } from './carousel-games/carousel-games.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    GamesComponent,
    HomeComponent,
    FourOhFourComponent,
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    CarouselGamesComponent,
    SearchComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [{ provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
