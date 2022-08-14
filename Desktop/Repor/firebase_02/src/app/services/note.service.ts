import { Injectable } from '@angular/core';
import { collection, Firestore, collectionSnapshots, deleteDoc } from '@angular/fire/firestore';
import { setDoc, doc, getDocs } from '@firebase/firestore';
import { throwError } from 'rxjs';
import { Note } from 'src/models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private db:Firestore) { }

  addNew(note:Note){
    if(!note.id){
      throw new Error ('Note id is required');
    }
    return setDoc(doc(this.db, 'notes/' + note.id), note);
  }

  getAll(){
    return collectionSnapshots(collection(this.db,'notes'))
    //return getDocs(collection(this.db, 'notes'))
  }

  update(note:Note){
    return setDoc(doc(this.db, 'notes/'+ note.id), note)
  }

  delete(NoteID:string){
    return deleteDoc(doc(this.db, 'notes/' + NoteID));
  }
  
}
