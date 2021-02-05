import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Note} from '../notes/model/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
  }

  async createNote(note: Note): Promise<any> {
    const user = await this.afAuth.currentUser;
    return this.db.collection('notes').add({
      ...note,
      uid: user.uid,
      // TODO : data model
      tasks: [{test: 'test'}]
    });
  }


  async updateNote(note: Note): Promise<any> {
    return this.db.collection('notes')
      .doc(note.uid)
      .update(note);
  }

  deleteNote(noteId: string): any {
    return this.db
      .collection('notes')
      .doc(noteId)
      .delete();
  }
}
