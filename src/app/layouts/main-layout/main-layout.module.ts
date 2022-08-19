import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MainLayoutComponent } from "./main-layout.component";
import { InterceptorService } from "@app-core/http/interceptor.service";
import { MainRoutingModule } from "./main-routing.module";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { AngularMaterialModule } from "@shared/index";
import { HomeComponent } from './components/home/home.component';
import { ContainerListComponent } from './components/container-list/container-list.component';

import { MovesComponent } from './components/moves/moves.component';
import { PaymentsComponent } from './components/payments/payments.component';

@NgModule({
  declarations: [MainLayoutComponent, SidenavComponent, ToolbarComponent, HomeComponent, ContainerListComponent, MovesComponent, PaymentsComponent],
  imports: [
    RouterModule,
    MainRoutingModule,
    CommonModule,
    AngularMaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
})
export class MainLayoutModule {}
