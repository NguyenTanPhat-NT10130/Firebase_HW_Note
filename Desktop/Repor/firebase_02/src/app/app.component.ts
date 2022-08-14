import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NoteState } from 'src/states/note.state';
import * as NoteActions from 'src/actions/note.action';
import {Note} from 'src/models/note.model';

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
  constructor(private store: Store<{note:NoteState}>){}
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
  
  deleteNote(){
    this.store.dispatch(NoteActions.deleteNote({id: this.currentNote.id}));
  }

  updateNote(){
    this.store.dispatch(NoteActions.updateNote({note:this.currentNote}));
  }
}
