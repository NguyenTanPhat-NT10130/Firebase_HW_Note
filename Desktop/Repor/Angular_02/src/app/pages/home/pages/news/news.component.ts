import { Component, OnInit} from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
 
})
export class NewsComponent implements OnInit {

  constructor(private articlesService:ArticlesService) { }
  articles:any[] =[];

  ngOnInit(): void {
    this.articlesService.getPaginated(1,10).subscribe((data)=>{
      this.articles=[];
      for(let articles of data){
        this.articles.push(articles);
        
      }
      console.log(this.articles);
    });
  }

  toLink(link: string){
    window.open(link,'_blank');
  }

  
}
