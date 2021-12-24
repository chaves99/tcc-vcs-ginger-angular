import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePathKey } from "./model/route-path-key";
import { LoginComponent } from "./pages/login/login.component";
import { ExploreComponent } from './pages/explore/explore.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () =>
            import('./pages/admin/admin.module')
                .then(m => m.AdminModule),
    },
    { path: RoutePathKey.PATH_LOGIN, component: LoginComponent },
    { path: RoutePathKey.PATH_EXPLORE, component: ExploreComponent },
    { path: RoutePathKey.PATH_HOME, component: DashboardComponent },
    { path: RoutePathKey.PATH_ABOUT, component: AboutComponent },
    { path: RoutePathKey.PATH_USER_REGISTER, component: UserRegisterComponent },
    { path: '**', component: NotFoundComponent}
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