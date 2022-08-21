import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PageNotFoundComponent } from "@shared/components/page-not-found/page-not-found.component";
import { Routing } from "./app-routing.module";
import { LoginLayoutModule } from "./layouts/login-layout/login-layout.module";
import { AuthGuard } from "@app-core/auth-guard/auth.guard";
import { AuthenticationService } from "@app-core/authentication/authentication.service";
import { MainLayoutModule } from "./layouts/main-layout/main-layout.module";
// import { reducers } from "@app-core/store";
// import { StoreDevtoolsModule } from "@ngrx/store-devtools";
// import { StoreModule } from "@ngrx/store";
// import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    Routing,
    LoginLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MainLayoutModule,
    // StoreModule.forRoot(reducers, {}),
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [AuthenticationService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
