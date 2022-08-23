// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


// import { environment } from '@environments/environment';
// const containersTable= [
//   {container: '#-1034', origin: 'Miami', destination: 'New York', status: 'IN YARD', description: 'Container 1', dimensions: '20 Feet', book: true},
//   {container: '#-3424', origin: 'New York', destination: 'Miami', status: 'UNLOAD FROM VESSEL', description: 'Container 3', dimensions: '33 Feet', book: true},
//   {container: '#-4533', origin: 'Orlando', destination: 'Miami', status: 'GATE OUT', description: 'Container 5', dimensions: '30 Feet', book: true},
//   {container: '#-5334', origin: 'Miami', destination: 'San Agustin', status: 'GATE OUT', description: 'Container 6', dimensions: '25 Feet', book: true},
//   {container: '#-6453', origin: 'Miami', destination: 'Los Angeles', status: 'GATE OUT', description: 'Container 7', dimensions: '31 Feet', book: true},
//   {container: '#-6453', origin: 'Miami', destination: 'Los Angeles', status: 'GATE OUT', description: 'Container 7', dimensions: '31 Feet', book: true},
//   {container: '#-6453', origin: 'Miami', destination: 'Los Angeles', status: 'GATE OUT', description: 'Container 7', dimensions: '31 Feet', book: true},
//   {container: '#-6453', origin: 'Miami', destination: 'Los Angeles', status: 'GATE OUT', description: 'Container 7', dimensions: '31 Feet', book: true},
//   {container: '#-6453', origin: 'Miami', destination: 'Los Angeles', status: 'GATE OUT', description: 'Container 7', dimensions: '31 Feet', book: true},
// ];
@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor() { }
  // fillContainers(): any[] {
  //   let containersList = containersTable;

  //   return containersList;
  // }

  // getContainers() {
  //   let header = new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem('token') });

  //   const requestOptions = { headers: header };
  //   return this.http.get(environment.EDI, requestOptions)
  // }
}
