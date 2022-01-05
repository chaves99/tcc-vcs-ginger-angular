import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { LoginService } from "src/app/services/login/login.service";
import { Project, ProjectService, ProjectTags } from "src/app/services/project/project.service";
import { ProjectFormCreateComponent } from "./form-create/form-create.component";

@Component({
    selector: 'admin-project-component',
    templateUrl: 'project.component.html'
})
export class ProjectComponent implements OnInit {

    projects: Project[] = [];

    constructor(
        private loginService: LoginService,
        private projectService: ProjectService,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {

    }

    hasProject(): boolean {
        return this.projects.length > 0;
    }

    public formatProjectsTags(tags: ProjectTags[]): string {
        if (tags.length > 3) {
            return `${tags[0].description}, ${tags[1].description}, ${tags[2].description}, ...`;
        } else if (tags.length == 0) {
            return `No tags`;
        } else {
            let desc: string = "";
            tags.forEach((tag, index) => {
                desc.concat(tag.description);
            });
            return desc;
        }
    }

    openDialogNewProject() {
        this.dialog.open(ProjectFormCreateComponent, {
            width: '500px',
            data: {}
        })
            .afterClosed()
            .subscribe(result => {
                console.log('Dialog is closed');
                console.log(result);
            });
    }

}
