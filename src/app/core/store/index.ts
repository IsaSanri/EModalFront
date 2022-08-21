import { ActionReducerMap } from '@ngrx/store';
import { BookingState } from './models/booking.model';
import { AddToCartReducer } from './reducers/add-cart.reducer';
import { ReviewContainerReducer } from './reducers/container.reducer';
import { SetBookingInfoReducer } from './reducers/booking-info.reducer';

export const reducers: ActionReducerMap<BookingState> = {
    info: SetBookingInfoReducer,
    details: AddToCartReducer,
    container: ReviewContainerReducer
};
