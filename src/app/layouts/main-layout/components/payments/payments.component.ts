import { Component, OnInit } from "@angular/core";
// import { Router } from "@angular/router";
import { Move } from "@app-models/container.model";

// import { BookingState } from "@app-core/store/models/booking.model";
// import { BookingsService } from '@app-services/bookings/bookings.service';
// // import { Store } from "@ngrx/store";
// import Swal from "sweetalert2";

const Payments: Move[] = [
  {issuedBy: 'AICT', qty: 2, fee: 12500, total: 25000},
    {issuedBy: 'AICT', qty: 2, fee: 12500, total: 25000},
    {issuedBy: 'AICT', qty: 2, fee: 12500, total: 25000},
];

@Component({
  selector: "app-payments",
  templateUrl: "./payments.component.html",
  styleUrls: ["./payments.component.scss"],
})
export class PaymentsComponent implements OnInit {
  // paymentMethods!: any[]
  // paymentMethod!: any
  // date!: string
  // cart!: any[]
  total:number=75000;
  displayedColumns: string[] = ['issuedBy', 'qty', 'fee', 'total', 'action'];
  dataSource=Payments;
  clickedRows=new Set<Move>();
  sources = [
    { value: 'masterCard', viewValue: 'MasterCard' },
    { value: 'visa', viewValue: 'Visa' },
    { value: 'payPal', viewValue: 'PayPal' },
  ];


  constructor() { }

  ngOnInit(): void {
    // this.store.select('date').subscribe(res => this.date = res)
    // this.store.select('details').subscribe((res: any[]) => {
    //   this.cart = res.filter((detail) => detail.containerId !== "")
    //   this.cart = this.cart.map(({ type, ...rest }) => {
    //     return rest;
    //   })
    // })
    // this.bookingService.getPaymentMethods().subscribe((res: any) => {
    //   this.paymentMethods = res.content
    // })
  }

  // delete(containerId: string) {
  //   this.cart = this.cart.filter(detail => detail.containerId !== containerId)
  // }

  // cancel() {
  //   this.router.navigate(['containers']);
  // }

  // get totalPayment(): number {
  //   const result = this.cart.reduce((accumulator, obj) => {
  //     return accumulator + obj.fee;
  //   }, 0);
  //   return result;
  // }

  // pay() {
  //   // if (this.paymentMethod === undefined || this.cart.length == 0) {
  //   //   Swal.fire("Warn", "Please select at least one container and card", "warning")
  //   //   return
  //   // }

  //   // this.bookingService.payBooking(this.date, this.paymentMethod, this.cart).subscribe((response: any) => {
  //   //   if (!response.hasError) {
  //   //     Swal.fire("Success", `Payment proccessed successfully with token ${response.content.paymentToken}`, 'success')
  //   //     this.router.navigate(['containers'])
  //   //   }
  //   // },
  //   //   () => {
  //   //     Swal.fire("Error", "Your payment can't be proccessed", 'error')
  //   //   })
  // }

}

// export interface card {
//   issues_by:string;
//   qty:number;
//   fee:number;
//   total:number;
// }


