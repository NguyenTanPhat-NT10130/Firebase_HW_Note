import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NbCardModule, NbTabsetModule, NbTagModule, NbUserModule } from '@nebular/theme';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbTabsetModule,
    NbCardModule,
    NbTagModule,
    NbUserModule
  ]
})
export class HomeModule { }
