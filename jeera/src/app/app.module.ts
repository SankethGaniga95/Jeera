import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectLayoutComponent } from './projectmanager/project-layout/project-layout.component';
import { SidebarComponent } from './projectmanager/sidebar/sidebar.component';
import { ProjectDashboardComponent } from './projectmanager/project-dashboard/project-dashboard.component';
import { ProjectManagementComponent } from './projectmanager/project-management/project-management.component';
import { ProjectTaskManagementComponent } from './projectmanager/project-task-management/project-task-management.component';
import { ProjectTeamManagementComponent } from './projectmanager/project-team-management/project-team-management.component';
import { ProjectAnalyticsComponent } from './projectmanager/project-analytics/project-analytics.component';
import { ProjectNotificationsComponent } from './projectmanager/project-notifications/project-notifications.component';
import { TeamLayoutComponent } from './teams/team-layout/team-layout.component';
import { TeamSidebarComponent } from './teams/team-sidebar/team-sidebar.component';
import { TeamDashboardComponent } from './teams/team-dashboard/team-dashboard.component';
import { TeamProjectDetailsComponent } from './teams/team-project-details/team-project-details.component';
import { TeamTaskManagementComponent } from './teams/team-task-management/team-task-management.component';
import { TeamTeamDetailsComponent } from './teams/team-team-details/team-team-details.component';
import { TeamNotificationsComponent } from './teams/team-notifications/team-notifications.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminUserManagementComponent } from './admin/admin-user-management/admin-user-management.component';
import { AdminProjectManagementComponent } from './admin/admin-project-management/admin-project-management.component';
import { AdminTaskManagementComponent } from './admin/admin-task-management/admin-task-management.component';
import { AdminTeamManagementComponent } from './admin/admin-team-management/admin-team-management.component';
import { AdminAnalyticsComponent } from './admin/admin-analytics/admin-analytics.component';
import { AdminNotificationsComponent } from './admin/admin-notifications/admin-notifications.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectLayoutComponent,
    SidebarComponent,
    ProjectDashboardComponent,
    ProjectManagementComponent,
    ProjectTaskManagementComponent,
    ProjectTeamManagementComponent,
    ProjectAnalyticsComponent,
    ProjectNotificationsComponent,
    TeamLayoutComponent,
    TeamSidebarComponent,
    TeamDashboardComponent,
    TeamProjectDetailsComponent,
    TeamTaskManagementComponent,
    TeamTeamDetailsComponent,
    TeamNotificationsComponent,
    AdminLayoutComponent,
    AdminSidebarComponent,
    AdminDashboardComponent,
    AdminUserManagementComponent,
    AdminProjectManagementComponent,
    AdminTaskManagementComponent,
    AdminTeamManagementComponent,
    AdminAnalyticsComponent,
    AdminNotificationsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
