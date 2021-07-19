import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePathKey } from "./model/route-path-key";
import { LoginComponent } from "./components/login/login.component";
import { ExploreComponent } from './components/explore/explore.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: RoutePathKey.PATH_LOGIN, component: LoginComponent },
  { path: RoutePathKey.PATH_EXPLORE, component: ExploreComponent },
  { path: RoutePathKey.PATH_HOME, component: DashboardComponent },
  { path: RoutePathKey.PATH_ABOUT, component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }