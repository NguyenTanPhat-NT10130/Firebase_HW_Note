import { Note } from "src/models/note.model";

export interface NoteState{
    notes: Note[];
    isLoading: boolean;
    error: string;
}