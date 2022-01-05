import { Component, Inject } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { LoginService } from "src/app/services/login/login.service";
import { CreateProjectDto } from "src/app/services/project/project.service";

@Component({
    selector: 'admin-project-form-create',
    templateUrl: 'form-create.component.html'
})
export class ProjectFormCreateComponent {

    tagList: {
        id?: number;
        desc?: string;
    }[] = [];

    constructor(
        public dialogRef: MatDialogRef<ProjectFormCreateComponent>,
        @Inject(MAT_DIALOG_DATA) public data: CreateProjectDto
    ) { }

}