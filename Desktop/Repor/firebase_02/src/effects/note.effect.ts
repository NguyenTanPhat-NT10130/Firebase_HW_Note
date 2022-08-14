import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { NoteService } from "src/app/services/note.service";
import * as NoteActions from "src/actions/note.action"
import { catchError, from, map, of, switchMap } from "rxjs";
import { Note } from "src/models/note.model";

@Injectable()
export class NoteEffects{
    constructor(private actions$: Actions, private noteService: NoteService) {}
    addNote$=createEffect(()=>this.actions$.pipe(
        ofType(NoteActions.addNote),
        switchMap((action)=>from(this.noteService.addNew(action.note))),
        map(()=>NoteActions.addNoteSuccess()),
        catchError(error=>{return of(NoteActions.addNoteFialure({error:error.messaging}));
    }
    )));

    getNotes$=createEffect(()=>this.actions$.pipe(
        ofType(NoteActions.getNotes),
        switchMap(()=> from(this.noteService.getAll())),
        map((snapshot)=>{
            let notes=snapshot.map((doc)=><Note>doc.data());
            return NoteActions.getNotesSuccess({notes:notes});

        }),
        catchError((error)=>{
            return of(NoteActions.getNotesFailure({error:error.messaging}))
        })
    ));

    deleteNotes$=createEffect(()=>this.actions$.pipe(
        ofType(NoteActions.deleteNote),
        switchMap((action)=> from(this.noteService.delete(action.id))),
        map(()=>NoteActions.deleteNoteSuccess()),
        catchError(error=>{return of(NoteActions.deleteNoteFailure({error:error.messaging}));
    })
    ));

    updateNotes$=createEffect(()=>this.actions$.pipe(
        ofType(NoteActions.updateNote),
        switchMap((action)=> from(this.noteService.update(action.note))),
        map(()=>NoteActions.updateNoteSuccess()),
        catchError(error=>{return of(NoteActions.updateNoteFailure({error:error.messaging}));
    })
    ));

}