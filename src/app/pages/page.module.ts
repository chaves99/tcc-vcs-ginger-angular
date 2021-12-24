import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { AboutComponent } from "./about/about.component";
import { AdminModule } from "./admin/admin.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ExploreComponent } from "./explore/explore.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UserRegisterComponent } from "./user-register/user-register.component";

@NgModule({
    declarations: [
        LoginComponent,
        UserRegisterComponent,
        ExploreComponent,
        DashboardComponent,
        AboutComponent,
        NotFoundComponent
    ],
    imports: [
        SharedModule,
        AdminModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class PageModule { }