import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AddcustomerComponent } from './admin/addcustomer/addcustomer.component';
import { AddleadsComponent } from './admin/addleads/addleads.component';
import { AddprojectsComponent } from './admin/addprojects/addprojects.component';
import { AdduserComponent } from './admin/adduser/adduser.component';

import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { LeadsComponent } from './admin/leads/leads.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 { path :"", component: LoginComponent},
 { path :"admin", component:AdminnavbarComponent,
  children:[
    {path: 'leads', component:LeadsComponent },
    {path: 'projects', component: ProjectsComponent },
    {path: 'adduser', component: AdduserComponent },
    {path: 'addprojects', component: AddprojectsComponent },
    {path: 'addcustomer', component: AddcustomerComponent },
    {path: 'addleads', component: AddleadsComponent }
  

  ]}
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
