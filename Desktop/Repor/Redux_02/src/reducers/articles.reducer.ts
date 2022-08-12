import { createReducer, on } from "@ngrx/store";
import { ArticlesState } from "src/states/articles.state";
import * as ArticlesActions from 'src/actions/articles.action';

const initialSate: ArticlesState = {
    list: [],
    error: '',
    isSuccess: true,
    isLoading: false,
};

export const articlesReducer = createReducer(initialSate,
    on(ArticlesActions.getPaginate, (state) => { 
        console.log(state);
        return({ ...state, isLoading: true })}),
    on(ArticlesActions.getPaginateSuccess, (state, action) => ({ ...state, list: action.list, isLoading: false, error: '', isSuccess: true })),
    on(ArticlesActions.getPaginateFail, (state, action) => ({ ...state,list: [], error: action.error, isLoading: false, isSuccess: false }))
);