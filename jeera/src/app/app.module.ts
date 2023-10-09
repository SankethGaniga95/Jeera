import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { TaskListingComponent } from './task-listing/task-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListingComponent,
    TaskListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
