import { RouterModule, Routes } from '@angular/router';
import {AboutComponent,PortafolioComponent,PortfolioItemComponent} from './components/index.pages';

const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  {path:'about', component: AboutComponent},
  {path:'item/:id', component: PortfolioItemComponent},

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});
