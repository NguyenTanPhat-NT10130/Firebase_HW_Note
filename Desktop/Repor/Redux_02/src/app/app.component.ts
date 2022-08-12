import { Component } from '@angular/core';
import { Articles, ArticlesState } from 'src/states/articles.state';
import * as ArticlesActions from '../actions/articles.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Redux_02';

  articles$:Observable<Articles[]>;
  constructor(private store:Store<{articles:ArticlesState}>){
    this.articles$=this.store.select((state)=> state.articles.list);
  }
  loadArticles(){
    console.log("loading articles...");
    this.store.dispatch(ArticlesActions.getPaginate({
      page:1,
      perPage:10,
    })
    );
  }
}
