import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AuthComponent} from './pages/auth/auth.component';
import {SubjectsComponent} from './pages/subjects/subjects.component';

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
    path: 'subjects',
    component: SubjectsComponent,
    title: 'Subjects Page'
  },

]
export default routesConfig;
