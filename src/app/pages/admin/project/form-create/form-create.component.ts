import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { LoginService } from "src/app/services/login/login.service";

@Component({
    selector: 'admin-project-form-create',
    templateUrl: 'form-create.component.html'
})
export class ProjectFormCreateComponent {

    projectTemplate: {
        name?: '';
        tags?: number[]
    } = {};

    constructor(
        public logiService: LoginService,
        public dialogRef: MatDialogRef<ProjectFormCreateComponent>,
        // @Inject(MAT_DIALOG_DATA) public data: DialogD
    ) { }

    onClose(): void {
        this.dialogRef.close();
    }

}