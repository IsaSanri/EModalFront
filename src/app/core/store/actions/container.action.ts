import { createAction, props } from '@ngrx/store';
import { Container } from "src/app/models/container.model"


export const ReviewContainer = createAction(
    '[Container] Review container to book',
    props<Container>()
);

export const CancelReview = createAction(
    '[Container] Cancel review container to book');
