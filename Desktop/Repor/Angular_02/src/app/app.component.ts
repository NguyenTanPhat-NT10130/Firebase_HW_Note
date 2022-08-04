import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './services/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular_02';

  constructor(private articlesServce:ArticlesService){}
  
  ngOnInit(): void {
    this.articlesServce.getPaginated(1, 10);
  }
  items=[
    {title:'Home', icon:'home',link:'/home'},
    {title:'Shop', icon:'info-outline',link:'/shop'},
  ];
}
