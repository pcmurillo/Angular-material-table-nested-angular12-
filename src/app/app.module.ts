// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { TableNestedComponent } from './table-nested/table-nested.component';
import { HelloComponent } from './hello.component';
import { DemoMaterialModule } from './material-module.module';
import { TableDetailComponent } from './table-detail/table-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TableNestedComponent,
    TableDetailComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    // Material Modules for Datatable, List and Buttons
    MatTableModule,
    MatListModule,
    MatButtonModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent, TableNestedComponent]
})
export class AppModule { }

