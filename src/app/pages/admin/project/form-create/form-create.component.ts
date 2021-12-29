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

    projectTemplate: {
        name?: '';
        tags?: number[]
    } = {};

    tagFormControl = new FormControl();

    tagList: {
        id?: number;
        desc?: string;
    }[] = [{
        id: 1,
        desc: 'tag teste 1'
    },
    {
        id: 2,
        desc: 'tag teste 2'
    },
    {
        id: 3,
        desc: 'tag teste 3'
    }];

    constructor(
        public logiService: LoginService,
        public dialogRef: MatDialogRef<ProjectFormCreateComponent>,
        @Inject(MAT_DIALOG_DATA) public data: CreateProjectDto
    ) { }

    onClose(): void {
        console.log('onClose');
        console.log(this.tagFormControl.value);
        // this.dialogRef.close();
    }

}