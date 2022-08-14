import { createReducer, on } from "@ngrx/store";
import { NoteState } from "src/states/note.state";
import * as NoteActions from "src/actions/note.action"
import {state} from "@angular/animations"

const initailState :NoteState={
    notes: [],
    isLoading:false,
    error:""
}

export const noteReducer=createReducer(
    initailState,
    on(NoteActions.addNote, state=>({
        ...state,
        isLoading: true
    })),

    on(NoteActions.addNoteSuccess, (state)=>({
        ...state,
        isLoading:false,
        error:""
    })),
    on(NoteActions.addNoteFialure, (state,{error})=>({
        ...state,
        isLoading:false,
        error:error
    })),
    on(NoteActions.getNotes, (state)=>({
        ...state,
        isLoading: true,
        error:""
    })),

    on(NoteActions.getNotesSuccess, (state,{notes}) =>({
        ...state,
        isLoading:false,
        notes:notes
    })),
    on(NoteActions.getNotesFailure, (state, {error})=>({
        ...state,
        isLoading:false,
        error:error
    })),

    on(NoteActions.deleteNote, (state)=>({
        ...state,
        isLoading:true,
        error:""
    })),

    on(NoteActions.deleteNoteSuccess, (state)=>({
        ...state,
        isLoading:true,
        error:""
    })),

    on(NoteActions.deleteNoteFailure, (state,{error})=>({
        ...state,
        isLoading:false,
        error:error
    })),

    on(NoteActions.updateNote, (state)=>({
        ...state,
        isLoading:true,
        error:""
    })),

    on(NoteActions.updateNoteSuccess, (state)=>({
        ...state,
        isLoading:false,
        error:""
    })),

    on(NoteActions.updateNoteFailure, (state,{error})=>({
        ...state,
        isLoading:true,
        error:error
    })),
    

)