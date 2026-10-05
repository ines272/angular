import { Routes } from '@angular/router';
import { ConferenceList } from './conference-list/conference-list';
import { Home } from './home/home';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'list', component: ConferenceList }
];
