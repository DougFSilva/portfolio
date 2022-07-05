import { SamcsComponent } from './components/portfolio/samcs/samcs.component';
import { SobremimComponent } from './components/sobremim/sobremim.component';
import { CurriculoComponent } from './components/curriculo/curriculo.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const routes: Routes = [
  {
    path:"",
    component: ToolbarComponent,
    children:[
      {
        path:"home",
        component: HomeComponent
      },
      {
        path:"portfolio",
        component: PortfolioComponent
      },
      {
        path:"portfolio/samcs",
        component: SamcsComponent
      },
      {
        path:"curriculo",
        component: CurriculoComponent
      },
      {
        path:"sobremim",
        component: SobremimComponent
      },

    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
