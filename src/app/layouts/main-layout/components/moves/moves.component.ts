import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
// import { Store } from '@ngrx/store';
// import { AddToCart } from "@app-core/store/actions/add-cart.actions";
import { Move } from "@app-models/container.model";
// import { Router } from "@angular/router";
// import { BookingState } from "@app-core/store/models/booking.model";
// import Swal from "sweetalert2";
// import { CancelReview } from "@app-core/store/actions/container.action";
// import { SetBookingDate } from '@app-core/store/actions/booking-info.action';


@Component({
  selector: "app-moves",
  templateUrl: "./moves.component.html",
  styleUrls: ["./moves.component.scss"],
})
export class MovesComponent  implements OnInit{

  movesTable: Move[] = [
    {issuedBy: 'AICT', qty: 2, fee: 12500, total: 25000},
    {issuedBy: 'AICT', qty: 2, fee: 12500, total: 25000},
    {issuedBy: 'AICT', qty: 2, fee: 12500, total: 25000},
    {issuedBy: 'AICT', qty: 2, fee: 12500, total: 25000},
    {issuedBy: 'AICT', qty: 2, fee: 12500, total: 25000}
  ];


  // container!: Container
  // dateBook!: Date


  constructor( ) {}


  ngOnInit(): void {
    // this.store.select("date").subscribe((res: any) => {
    //   if (res !== "0000-00-00")
    //     this.dateBook = res
    // })

    // this.store.select("container").subscribe((res: Container) => {
    //   if (res.containerId == "") {
    //     // this.goBack();
    //   }
    //   this.container = res
    // })
  }
  displayedColumns: string[] = ['issuedBy', 'qty', 'fee', 'total'];
  dataSource = new MatTableDataSource(this.movesTable);

  // pay() {
  //   if (!this.checkBookingDate()) {
  //     return
  //   }

  //   const bookingDetail = {
  //     containerId: this.container.containerId,
  //     fee: this.container.fee
  //   }
  //   this.store.dispatch(AddToCart(bookingDetail))
  //   this.router.navigate(['payment']);
  // }
  // checkBookingDate(): boolean {
  //   // console.log(this.dateBook)
  //   // if (this.dateBook === undefined) {
  //   //   Swal.fire("Warning", "Please set booking date", "warning")
  //   //   return false;
  //   // } else {
  //   //   const date = moment(this.dateBook).format("yyyy-MM-DD");
  //   //   this.store.dispatch(SetBookingDate({ date }))
  //     return true;
  //   }
  // }

  // addToCart() {
  //   if (!this.checkBookingDate()) {
  //     return
  //   }

  //   const bookingDetail = {
  //     containerId: this.container.containerId,
  //     fee: this.container.fee
  //   }
  //   this.store.dispatch(AddToCart(bookingDetail))
  //   this.goBack();
  // }

  // goBack() {
  //   this.router.navigate(['/containers'])
  // }

  // cancel() {
  //   this.store.dispatch(CancelReview())
  //   this.goBack();
  // }
  // displayedColumns: string[] = ["issuesBy", "qty", "fee", "total"];


}
