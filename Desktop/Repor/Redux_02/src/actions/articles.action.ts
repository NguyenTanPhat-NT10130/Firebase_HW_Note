import { createAction, props } from "@ngrx/store";
import { Articles } from "src/states/articles.state";

export const getPaginate=createAction(
    '[Articles] Get Paginate',
    props<{page:number, perPage: number}>()
);

export const getPaginateSuccess = createAction(
    '[Articles] Get Paginate Success',
    props<{list: Articles[]}>()
    );

    export const getPaginateFail = createAction(
        '[Articles] Get Paginate Fail',
        props<{error: string}>()
        );