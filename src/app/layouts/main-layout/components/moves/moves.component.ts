import { Component } from "@angular/core";
import { ContainerService } from "@app-services/container.service";

@Component({
  selector: "app-moves",
  templateUrl: "./moves.component.html",
  styleUrls: ["./moves.component.scss"],
})
export class MovesComponent {
  constructor(private containerService: ContainerService) {}

  displayedColumns: string[] = ["issuesBy", "qty", "fee", "total"];
  dataSource = this.containerService.fillTable();
}
