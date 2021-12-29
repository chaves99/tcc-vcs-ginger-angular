import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProjectFormCreateComponent } from "./project/form-create/form-create.component";
import { ProjectComponent } from "./project/project.component";

@NgModule({
    declarations: [
        DashboardComponent,
        ProfileComponent,
        ProjectComponent,
        ProjectFormCreateComponent
    ],
    providers: [],
    imports: [
        AdminRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AdminModule { }