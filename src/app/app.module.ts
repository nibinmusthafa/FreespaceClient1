import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LeadsComponent } from './admin/leads/leads.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AddressComponent } from './address/address.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProjectsComponent } from './admin/projects/projects.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import {MatTreeModule} from '@angular/material/tree';
import { AdduserComponent } from './admin/adduser/adduser.component';
import { AddleadsComponent } from './admin/addleads/addleads.component';
import { AddprojectsComponent } from './admin/addprojects/addprojects.component';
import { AddcustomerComponent } from './admin/addcustomer/addcustomer.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeadsComponent,
    AdmindashboardComponent,
    AddressComponent,
    AdminnavbarComponent,
    ProjectsComponent,
    AdduserComponent,
    AddleadsComponent,
    AddprojectsComponent,
    AddcustomerComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    NgMultiSelectDropDownModule.forRoot(),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
