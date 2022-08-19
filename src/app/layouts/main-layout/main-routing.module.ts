import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContainerListComponent } from "./components/container-list/container-list.component";
import { HomeComponent } from "./components/home/home.component";
import { MovesComponent } from "./components/moves/moves.component";
import { PaymentsComponent } from "./components/payments/payments.component";
import { MainLayoutComponent } from "./main-layout.component";


const routes: Routes = [
  {
    path:"",
    component: MainLayoutComponent,
    // canActivate:[PermissionsGuard],
    children:[
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'containers',
        component: ContainerListComponent
      },
      {
        path:'moves',
        component: MovesComponent
      },
      {
        path: 'payment',
        component: PaymentsComponent
      }
    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
