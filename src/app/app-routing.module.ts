import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DeletesComponent } from './deletes/deletes.component';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'display',component:DisplayComponent},
  {path:'deletes',component:DeletesComponent},
  {path:'search',component:SearchComponent},
  {path:'register',component:RegisterComponent},
  {path:"menu",component:MenuComponent},
  {path:"home",component:AppComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
