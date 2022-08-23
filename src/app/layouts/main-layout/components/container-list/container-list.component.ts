import { Component, AfterViewInit, ViewChild, OnInit } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Container } from "@app-models/container.model";
// import { Router } from "@angular/router";
// import { BookingState } from "@app-core/store/models/booking.model";
// import { ContainerService } from "../../../../services/containers/container.service";
// import { Container } from "@app-models/container.model";
// import { Store } from '@ngrx/store';
// import { ReviewContainer } from '@app-core/store/actions/container.action';


@Component({
  selector: "app-container-list",
  templateUrl: "./container-list.component.html",
  styleUrls: ["./container-list.component.scss"],
})
export class ContainerListComponent implements OnInit, AfterViewInit {

  containerTable: Container[] = [
    {container: '#-1034', origin: 'Miami', destination: 'New York', status: 'IN YARD', description: 'Container 1', dimensions: '20 Feet', book: true},
    {container: '#-3424', origin: 'New York', destination: 'Miami', status: 'UNLOAD FROM VESSEL', description: 'Container 3', dimensions: '33 Feet', book: true},
    {container: '#-4533', origin: 'Orlando', destination: 'Miami', status: 'GATE OUT', description: 'Container 5', dimensions: '30 Feet', book: true},
    {container: '#-5334', origin: 'Miami', destination: 'San Agustin', status: 'GATE OUT', description: 'Container 6', dimensions: '25 Feet', book: true},
    {container: '#-6453', origin: 'Miami', destination: 'Los Angeles', status: 'GATE OUT', description: 'Container 7', dimensions: '31 Feet', book: true},
    {container: '#-6453', origin: 'Miami', destination: 'Los Angeles', status: 'GATE OUT', description: 'Container 7', dimensions: '31 Feet', book: true},
    {container: '#-6453', origin: 'Miami', destination: 'Los Angeles', status: 'GATE OUT', description: 'Container 7', dimensions: '31 Feet', book: true},
    {container: '#-6453', origin: 'Miami', destination: 'Los Angeles', status: 'GATE OUT', description: 'Container 7', dimensions: '31 Feet', book: true},
    {container: '#-6453', origin: 'Miami', destination: 'Los Angeles', status: 'GATE OUT', description: 'Container 7', dimensions: '31 Feet', book: true},
  ];

  public getColor(status: any) {
    switch (status) {
      case "IN YARD":
        return "green";
      case "UNLOAD FROM VESSEL":
        return "blue";
      case "GATE OUT":
        return "red";
      default:
        return "black";
    }
  }
  displayedColumns: string[] = [
    "container",
    "origin",
    "destination",
    "status",
    "description",
    "dimensions",
    "book",
  ];
  dataSource = new MatTableDataSource(this.containerTable);
  // dataSource!: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild("sort") sort!: MatSort;

constructor(
    // private containerService: ContainerService,
    // private store: Store<BookingState>,
    // private router: Router
  ) {}


  ngOnInit(): void {
    this.ngAfterViewInit()

  }
// init(): void {
//     this.containerService.getContainers().subscribe((response: any) => {
//       this.dataSource = new MatTableDataSource(response.content);
//       this.dataSource.paginator = this.paginator;
//       this.dataSource.sort = this.sort;
//     });
//   }
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // selectContainer(element: Container) {
  //   this.store.dispatch(ReviewContainer(element))
  //   this.router.navigate(['book'])

  // }
}
