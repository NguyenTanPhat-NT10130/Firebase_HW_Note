import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {catchError, map, switchMap, of} from 'rxjs';
import { Articles } from "src/states/articles.state";
import * as ArticlesActions from "../actions/articles.action"
@Injectable()
export class ArticlesEffects{
    constructor(private actions$: Actions, private http:HttpClient){}

    getArticles= createEffect(()=> this.actions$.pipe(ofType(ArticlesActions.getPaginate),
    switchMap((action)=>{
        console.log(action);
        return this.http.get(`https://social.runwayclub.dev/api/articles/latest?page=${action.page}&per_page=${action.perPage}`);
    }),
    map((response)=>{
        return ArticlesActions.getPaginateSuccess({list:<Array<Articles>>response,});
    }),
    catchError((error)=> {
        return of(ArticlesActions.getPaginateFail({error:error.message}));
    })
    ));
}