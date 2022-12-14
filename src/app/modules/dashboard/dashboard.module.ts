import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "../dashboard/dashboard-routing.module";
import { AngularMaterialModule, FormsModule } from "@shared/index";

import { ReactiveFormsModule } from "@angular/forms";
import { PipesModule } from "@shared/pipes/pipes.module";
import { DirectivesModule } from "@shared/directives/directives.module";


@NgModule({
  declarations: [
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    DirectivesModule,
  ],
})
export class DashboardModule {}
