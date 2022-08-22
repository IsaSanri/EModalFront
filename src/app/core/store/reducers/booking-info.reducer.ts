import { createReducer, on } from '@ngrx/store';
import { SetBookingDate } from '../actions/booking-info.action';

const initialState: string = "0000-00-00";

export const SetBookingDateReducer = createReducer(
    initialState,
    on(SetBookingDate, (state, date) => {
        state = date.date
        return state;
    })
);
