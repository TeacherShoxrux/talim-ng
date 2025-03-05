import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AuthComponent} from './pages/auth/auth.component';
import {SubjectsComponent} from './pages/subjects/subjects.component';
import {DirectionAddComponent} from './pages/direction-add/direction-add.component';
import {SubjectAddComponent} from './pages/subject-add/subject-add.component';
import {SubjectThemeAddComponent} from './pages/subject-theme-add/subject-theme-add.component';
import {SubjectThemesComponent} from './pages/subject-themes/subject-themes.component';

export const routes: Routes = [];
const routesConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'auth',
    component: AuthComponent,
    title: 'Auth Page'
  },
  {
    path: 'subjects/:id',
    component: SubjectsComponent,
    title: 'Subjects Page'
  },
  {
    path: 'direction-add/:id',
    component: DirectionAddComponent,
    title: 'Direction add Page'
  },
  {
    path: 'subject-add/:id',
    component: SubjectAddComponent,
    title: 'Subjects add Page'
  },
  {
    path: 'subject-theme-add/:id',
    component: SubjectThemeAddComponent,
    title: 'Theme add Page'
  },
  {
    path: 'subject-themes/:id',
    component: SubjectThemesComponent,
    title: 'Theme of Subject Page'
  },

]
export default routesConfig;
