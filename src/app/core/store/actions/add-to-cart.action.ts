import { createAction, props } from '@ngrx/store';
import { BookingDetail } from '../models/bookin.model';


export const AddToCart = createAction(
    '[Cart] Set Booking Detail',
    props<BookingDetail>()
);
