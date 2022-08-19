// export interface ContainerListResponse {
//   error: boolean;
//   data: {
//     results: ContainerInterface[];
//     totalResults: string;
//   }
// }

// export interface ContainerInfoInterface {
//   ContainerNumber: any;
//   Origin: any;
//   Destination: any;
//   Status: any;
//   Description: any;
//   Dimensions: any;
// }

// export interface ContainerInterface {
//   id: number;
//   containernumber: string;
//   origin: string;
//   destination: string;
//   status: string;
//   description: string;
//   dimensions: string;
//   book: boolean;
// }

export interface item {
  issuesBy: string;
  qty: string;
  fee: string;
  total: string;
}
