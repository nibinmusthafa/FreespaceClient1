import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UserManagementDataSource, UserManagementItem } from './user-management-datasource';
import { HttpClient } from '@angular/common/http';
import { AdminService, idesignation } from '../admin.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<UserManagementItem>;
  dataSource: UserManagementDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  designations:idesignation[]=[];

  constructor(private service:AdminService) {


    this.dataSource = new UserManagementDataSource();
  }
 

  getUserList(){
    this.service.getUser().subscribe(response => {
     this.designations = response;
     
    });
    
  }
  ngOnit(){
    this.getUserList();
   }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.getUserList();
  }
}
