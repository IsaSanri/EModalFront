import { Component } from "@angular/core";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent {
  constructor() {}

  public openNav(): void {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "#818181";

  }

  public closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
  }
// public prueba():void{
//   console.log("CLICK")
// }
}
