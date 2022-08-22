import { Container } from 'src/app/models/container.model';
export interface BookingState {
  date: string,
  details: BookingDetail[],
  container: Container
}

export interface BookingDetail {
  containerId: string,
  fee: number
}
