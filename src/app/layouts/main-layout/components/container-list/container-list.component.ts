import { Component, AfterViewInit, ViewChild, OnInit } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { BookingState } from "@app-core/store/models/booking.model";
import { ContainerService } from "../../../../services/containers/container.service";
import { Container } from "@app-models/container.model";
import { Store } from '@ngrx/store';
import { ReviewContainer } from '@app-core/store/actions/container.action';

@Component({
  selector: "app-container-list",
  templateUrl: "./container-list.component.html",
  styleUrls: ["./container-list.component.scss"],
})
export class ContainerListComponent implements OnInit, AfterViewInit {
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
  dataSource!: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild("sort") sort!: MatSort;

  constructor(
    private containerService: ContainerService,
    private store: Store<BookingState>,
    private router: Router
  ) {}
  init(): void {
    this.containerService.getContainers().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response.content);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  ngOnInit(): void {
    this.init();
  }

  filter(event: Event) {
    const object: any = event.target;
    this.dataSource.filter = object.value.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.init()
  }

  selectContainer(element: Container) {
    this.store.dispatch(ReviewContainer(element))
    this.router.navigate(['book'])

  }
}
