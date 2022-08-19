import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-layout",
  templateUrl: "./login-layout.component.html",
  styleUrls: ["./login-layout.component.scss"],
})
export class LoginLayoutComponent {
  constructor(private router: Router) {}

  email = new FormControl("", [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError("required")) {
      return "You must enter a value";
    }

    return this.email.hasError("email") ? "Not a valid email" : "";
  }

  goTo(): void {
    this.router.navigate(["/home"]);
  }
}
