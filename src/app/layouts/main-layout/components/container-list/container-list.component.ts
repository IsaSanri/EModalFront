import { Component, AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ContainerService } from "../../../../services/container.service";

@Component({
  selector: "app-container-list",
  templateUrl: "./container-list.component.html",
  styleUrls: ["./container-list.component.scss"],
})
export class ContainerListComponent implements AfterViewInit {
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

  constructor(private containerService: ContainerService) {}

  //Para que funcione la tabla hice cambios en tsconfig.json

  displayedColumns: string[] = [
    "containerNumber",
    "origin",
    "destination",
    "status",
    "description",
    "book",
  ];
  dataSource = new MatTableDataSource(
    this.containerService.fillTableContainers()
  );

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
