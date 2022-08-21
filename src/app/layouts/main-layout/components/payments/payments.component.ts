import { Component, OnInit } from "@angular/core";
import { BookingsService } from '@app-services/bookings/bookings.service';

@Component({
  selector: "app-payments",
  templateUrl: "./payments.component.html",
  styleUrls: ["./payments.component.scss"],
})
export class PaymentsComponent implements OnInit {
  paymentMethods!: any[]

  listCard: card[] = [
    {
      issues_by:"AICT",
      qty:2,
      fee:25000,
      total:50000
    },
    {
      issues_by:"AICT",
      qty:5,
      fee:12500,
      total:125000
    },
    {
      issues_by:"AICT",
      qty:2,
      fee:12500,
      total:25000
    }
  ];

  displayedColumns: string[] = ["issuesBy", "qty", "fee", "total", "delete"];
  constructor(private bookingService: BookingsService) { }

  ngOnInit(): void {
    this.bookingService.getPaymentMethods().subscribe((res) => {
      console.log(res);
    })
    this.listCard.push();
  }



  sources = [
    { value: "masterCard", viewValue: "MasterCard" },
    { value: "visa", viewValue: "Visa" },
    { value: "payPal", viewValue: "PayPal" },
  ];

  get totalPayment(): number{
    const result = this.listCard.reduce((accumulator, obj) => {
      return accumulator + obj.total;
    }, 0);
    return result;
  }
}


export interface card {
  issues_by:string;
  qty:number;
  fee:number;
  total:number;
}


