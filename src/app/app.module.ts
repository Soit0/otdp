import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {MatTreeModule} from '@angular/material/tree';
import {FormsModule} from '@angular/forms';

import { HomepageComponent } from './homepage/homepage.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotesComponent } from './notes/notes.component';
import { ContactComponent } from './contact/contact.component';
import {environment} from '../environments/environment';
// Firebase import
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CurriculumComponent,
    ProjectsComponent,
    NotesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    // Firebase modules
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore / db
    AngularFireAuthModule, // auth
    AngularFireStorageModulffdvde,     // storage
    MatTreeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
