import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { AccountComponent } from './account/account.component';
import { CarouselGamesComponent } from './carousel-games/carousel-games.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent, children: [

     { path: 'login', component: LoginComponent},
     { path: 'register', component: RegisterComponent}
  ]},

  { path: '', canActivate: [AuthGuard], component: HomeComponent, children: [

     { path: 'home', component: HomeComponent },
     { path: '', redirectTo: '/home', pathMatch: 'full'},
     { path: 'games', component: GamesComponent },
     { path: 'not-found', component: FourOhFourComponent },
     { path: '**', redirectTo: 'not-found'}
  ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
