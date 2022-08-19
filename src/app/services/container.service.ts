import { Injectable } from "@angular/core";
// import {Observable} from "rxjs";
// import {environment} from "@environments/environment";
// import {HttpClient} from "@angular/common/http";
// import {ContainerInfoInterface, ContainerListResponse} from "@app-models/container.model";
// import { item } from "@app-models/container.model";
// import {map} from "rxjs/operators";

const data = [
  { issuesBy: 1, qty: "Hydrogen", fee: 1.0079, total: "H" },
  { issuesBy: 2, qty: "Helium", fee: 4.0026, total: "He" },
  { issuesBy: 3, qty: "Lithium", fee: 6.941, total: "Li" },
  { issuesBy: 4, qty: "Beryllium", fee: 9.0122, total: "Be" },
  { issuesBy: 5, qty: "Boron", fee: 10.811, total: "B" },
];

const containers_list = [
  {
    containerNumber: "#-1034",
    origin: "Miami",
    destination: "New York",
    status: "IN YARD",
    description: "Container 1",
    dimensions: "20 Feet",
    book: true,
  },
  {
    containerNumber: "#-3424",
    origin: "New York",
    destination: "Miami",
    status: "UNLOAD FROM VESSEL",
    description: "Container 3",
    dimensions: "33 Feet",
    book: true,
  },
  {
    containerNumber: "#-4533",
    origin: "Orlando",
    destination: "Miami",
    status: "GATE OUT",
    description: "Container 5",
    dimensions: "30 Feet",
    book: true,
  },
  {
    containerNumber: "#-5334",
    origin: "Miami",
    destination: "San Agustin",
    status: "GATE OUT",
    description: "Container 6",
    dimensions: "25 Feet",
    book: true,
  },
  {
    containerNumber: "#-6453",
    origin: "Miami",
    destination: "Los Angeles",
    status: "GATE OUT",
    description: "Container 7",
    dimensions: "31 Feet",
    book: true,
  },
  {
    containerNumber: "#-6453",
    origin: "Miami",
    destination: "Los Angeles",
    status: "GATE OUT",
    description: "Container 7",
    dimensions: "31 Feet",
    book: true,
  },
  {
    containerNumber: "#-6453",
    origin: "Miami",
    destination: "Los Angeles",
    status: "GATE OUT",
    description: "Container 7",
    dimensions: "31 Feet",
    book: true,
  },
  {
    containerNumber: "#-6453",
    origin: "Miami",
    destination: "Los Angeles",
    status: "GATE OUT",
    description: "Container 7",
    dimensions: "31 Feet",
    book: true,
  },
  {
    containerNumber: "#-6453",
    origin: "Miami",
    destination: "Los Angeles",
    status: "GATE OUT",
    description: "Container 7",
    dimensions: "31 Feet",
    book: true,
  },
];

@Injectable({
  providedIn: "root",
})
export class ContainerService {
  // constructor(private http: HttpClient) {}

  //   public getContainerList(query: string): Observable<ContainerListResponse> {
  //     const url = `${environment.URL}/?s=${query}&apikey=${environment.OMDB_APIKEY}`;
  //     return this.http.get<any>(url).pipe(
  //       map((data) => {
  //         console.log("data", data);
  //         const results = data.Search?.map((element: ContainerInfoInterface, index: number) => {
  //           return {
  //             id: index,
  //             containernumber: element.ContainerNumber,
  //             origin: element.Origin,
  //             destination: element.Destination,
  //             status: element.Status,
  //             description: element.Description,
  //             dimensions: element.Dimensions,
  //             book: false
  //           };
  //         });
  //         return {
  //           error: data.Response !== "True",
  //           data: {
  //             results: results,
  //             totalResults: ''
  //           }
  //         };
  //       })
  //     );
  //   }
  // }

  fillTable(): any[] {
    let dataSource = data;

    return dataSource;
  }

  fillTableContainers(): any[] {
    let containersList = containers_list;

    return containersList;
  }
}
