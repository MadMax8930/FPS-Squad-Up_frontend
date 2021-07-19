import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './guards/auth.guard';
import { AccountComponent } from './account/account.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent, children: [

     { path: 'login', component: LoginComponent},
     { path: 'register', component: RegisterComponent}
  ]},

  { path: '', canActivate: [AuthGuard], component: LayoutComponent, children: [

     { path: '', redirectTo: '/home', pathMatch: 'full'},
     { path: 'home', component: HomeComponent },
     { path: 'home', component: CarouselComponent },
     { path: 'games', component: CarouselComponent },
     { path: 'search', component: SearchComponent },
     { path: 'not-found', component: FourOhFourComponent },
     { path: '**', redirectTo: 'not-found'}
  ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
