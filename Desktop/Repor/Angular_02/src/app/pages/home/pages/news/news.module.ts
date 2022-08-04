import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NbButtonModule, NbCardModule, NbTagModule, NbUserModule } from '@nebular/theme';



@NgModule({
  declarations: [
    NewsComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbTagModule,
    NbUserModule,
    
  ]
})
export class NewsModule { }
