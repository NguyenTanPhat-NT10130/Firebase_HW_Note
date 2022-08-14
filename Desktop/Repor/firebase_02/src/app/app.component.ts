import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NoteState } from 'src/states/note.state';
import * as NoteActions from 'src/actions/note.action';
import {Note} from 'src/models/note.model';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 NoteState$= this.store.select('note');
 notes$=this.store.select((state)=>state.note.notes);

 currentNote: Note={
  id:'', 
  name:'',
  title: '',
  datePost: '',
  content:'',
 } 
  constructor(private store: Store<{note:NoteState}>, private dialog: MatDialog){}
  ngOnInit(): void {
    this.NoteState$.subscribe(state=>{
      console.log(state);
    })
    // this.store.dispatch(NoteActions.addNote({
    //   note:{
    //     id: Date.now().toString(), 
    //     name:'Jonh Doe', 
    //     title:'Nhat ky', 
    //     datePost: '4/5/2020',
    //     content:'di tham gia trai he' },
    //   }));
      
      this.store.dispatch(NoteActions.getNotes());
  }

  addNote(){
    this.store.dispatch(NoteActions.addNote({note:this.currentNote}))
  }
  
  deleteNote(id: string){
    this.store.dispatch(NoteActions.deleteNote({id}));
  }



  updateNote(){
    let dialogRef= this.dialog.open(DialogComponent, {data: {name:'Vishae'}}) 
    dialogRef.afterClosed().subscribe(result =>{
      console.log('Dialog result: ${result');
    });
    // let note:Note={
    //   id:'199923', 
    //   name:'Duc',
    //   title: 'Hello Phat',
    //   datePost: '4/5/2022',
    //   content:'Noi dung sau khi cap nhat',
    //}
    this.store.dispatch(NoteActions.updateNote({note:this.currentNote}));
  }
}
