import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDashboardComponent } from './projectmanager/project-dashboard/project-dashboard.component';
import { ProjectManagementComponent } from './projectmanager/project-management/project-management.component';
import { ProjectTaskManagementComponent } from './projectmanager/project-task-management/project-task-management.component';
import { ProjectTeamManagementComponent } from './projectmanager/project-team-management/project-team-management.component';
import { ProjectAnalyticsComponent } from './projectmanager/project-analytics/project-analytics.component';
import { ProjectNotificationsComponent } from './projectmanager/project-notifications/project-notifications.component';
import { TeamDashboardComponent } from './teams/team-dashboard/team-dashboard.component';
import { TeamProjectDetailsComponent } from './teams/team-project-details/team-project-details.component';
import { TeamTaskManagementComponent } from './teams/team-task-management/team-task-management.component';
import { TeamTeamDetailsComponent } from './teams/team-team-details/team-team-details.component';
import { TeamNotificationsComponent } from './teams/team-notifications/team-notifications.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminUserManagementComponent } from './admin/admin-user-management/admin-user-management.component';
import { AdminProjectManagementComponent } from './admin/admin-project-management/admin-project-management.component';
import { AdminTaskManagementComponent } from './admin/admin-task-management/admin-task-management.component';
import { AdminTeamManagementComponent } from './admin/admin-team-management/admin-team-management.component';
import { AdminAnalyticsComponent } from './admin/admin-analytics/admin-analytics.component';
import { AdminNotificationsComponent } from './admin/admin-notifications/admin-notifications.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { ProjectLayoutComponent } from './projectmanager/project-layout/project-layout.component';
import { TeamLayoutComponent } from './teams/team-layout/team-layout.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
const routes: Routes = [
  { path: '', component:RegisterComponent},
  { path: 'login', component: LoginComponent },
  {
    path: 'project-manager',
    component:  ProjectLayoutComponent,
    children: [
      { path: 'dashboard', component: ProjectDashboardComponent },
      { path: 'projectmanagerprojects', component: ProjectManagementComponent },
      { path: 'projectmanagertask', component: ProjectTaskManagementComponent },
      { path: 'projectmanagerteam', component: ProjectTeamManagementComponent },
      { path: 'projectmanageranalytics', component: ProjectAnalyticsComponent },
      { path: 'projectmanagernotifications', component: ProjectNotificationsComponent },
      // Other Project Manager routes
    ],
  },
  {
    path: 'team-member',
    component: TeamLayoutComponent,
    children: [
      { path: 'dashboard', component: TeamDashboardComponent },
      { path: 'teamprojects', component: TeamProjectDetailsComponent },
      { path: 'teamtask', component: TeamTaskManagementComponent },
      { path: 'teamteam', component: TeamTeamDetailsComponent },
      { path: 'teamnotifications', component: TeamNotificationsComponent },
      // Other Team Member routes
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'admindashboard', component: AdminDashboardComponent },
      { path: 'adminuser', component: AdminUserManagementComponent },
      { path: 'adminproject', component: AdminProjectManagementComponent },
      { path: 'admintask', component: AdminTaskManagementComponent },
      { path: 'adminteam', component: AdminTeamManagementComponent },
      { path: 'adminanalytics', component: AdminAnalyticsComponent },
      { path: 'adminnotifications', component: AdminNotificationsComponent },
      // Other Admin routes
    ],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
