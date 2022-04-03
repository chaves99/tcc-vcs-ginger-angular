import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoutePathKey } from "src/app/model/route-path-key";
import { AuthGuard } from "./auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProjectDetailComponent } from "./project/project-detail/project-detail.component";
import { ProjectComponent } from "./project/project.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: RoutePathKey.PATH_ADMIN_PROFILE,
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: RoutePathKey.PATH_ADMIN_PROJECT,
        component: ProjectComponent,
        canActivate: [AuthGuard]
    },
    {
        path: RoutePathKey.PATH_ADMIN_PROJECT + "/:id",
        component: ProjectDetailComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        // RouterModule
    ]
})
export class AdminRoutingModule { }
