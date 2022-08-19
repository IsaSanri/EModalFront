import { Component } from "@angular/core";
import { ContainerService } from "@app-services/container.service";

@Component({
  selector: "app-payments",
  templateUrl: "./payments.component.html",
  styleUrls: ["./payments.component.scss"],
})
export class PaymentsComponent  {
  total: number = 100000;
  constructor(private containerService: ContainerService) {}

  displayedColumns: string[] = ["issuesBy", "qty", "fee", "total", "delete"];
  dataSource = this.containerService.fillTable();


  sources = [
    { value: "masterCard", viewValue: "MasterCard" },
    { value: "visa", viewValue: "Visa" },
    { value: "payPal", viewValue: "PayPal" },
  ];
}
