import { Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcclanchComponent } from './acclanch/acclanch.component';
import { CreateEntityComponent } from './create-entity/create-entity.component';

export const Approute:Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '', component: LoginComponent},
    {path: 'home', component:HomeComponent,
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'acclanch', component: AcclanchComponent},
            {path: 'create-entity', component: CreateEntityComponent},
            {path: './acclanch/#myModal', component: AcclanchComponent}
        ]
    }
];