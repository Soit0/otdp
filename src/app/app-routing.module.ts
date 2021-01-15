import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {CurriculumComponent} from './curriculum/curriculum.component';
import {ProjectsComponent} from './projects/projects.component';
import {NotesComponent} from './notes/notes.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'curriculum', component: CurriculumComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
