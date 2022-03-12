import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTable } from "@angular/material/table";
import { LoginService } from "src/app/services/login/login.service";
import { Project, ProjectService, CreateProjectDto } from "src/app/services/project/project.service";
import { Tags } from "src/app/services/tags/tags.service";
import { ProjectFormCreateComponent } from "./form-create/form-create.component";

@Component({
    selector: 'admin-project-component',
    templateUrl: 'project.component.html',
    styleUrls: ['project.component.css']
})
export class ProjectComponent implements OnInit {

    displayedColumns: string[] = ['name', 'description', 'createdDate', 'lastModifiedDate'];

    projects: Project[] = [];

    @ViewChild(MatTable) table!: MatTable<Project>

    constructor(
        private loginService: LoginService,
        private projectService: ProjectService,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        let idUser = this.loginService.getLoggedUser()?.id;
        if (idUser !== undefined) {
            this.projectService.getProjectsByUser(idUser)
                .subscribe(p => {
                    console.log(p);
                    this.projects = p;
                });
        }
    }

    hasProject(): boolean {
        return this.projects.length > 0;
    }

    public formatProjectsTags(tags: Tags[]): string {
        if (tags.length > 3) {
            return `${tags[0].description}, ${tags[1].description}, ${tags[2].description}, ...`;
        } else if (tags.length == 0) {
            return `No tags`;
        } else {
            let description: string = "";
            tags.forEach((tag, index) => {
                description.concat(tag.description || '');
            });
            return description;
        }
    }

    openDialogNewProject() {
        this.dialog.open<ProjectFormCreateComponent, any, CreateProjectDto>(ProjectFormCreateComponent, {
            width: '500px',
            data: {}
        })
            .afterClosed()
            .subscribe(result => {
                if (result !== undefined) {
                    result.userId = this.loginService.getLoggedUser()?.id;
                    this.projectService.createProject(result)
                        .subscribe(p => {
                            this.projects.push(p);
                            this.table.renderRows();
                        });
                }
            });
    }

}
