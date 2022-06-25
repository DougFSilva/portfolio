import { SobreminComponent } from './components/sobremin/sobremin.component';
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
        path:"curriculo",
        component: CurriculoComponent
      },
      {
        path:"sobremin",
        component: SobreminComponent
      },

    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
