export interface Container {
  container: string;
  origin: string;
  destination: string;
  status: string;
  description: string;
  dimensions: string;
  book: boolean

}

export interface Move{
  issuedBy:string,
  qty:number,
  fee:number,
  total:number

}
