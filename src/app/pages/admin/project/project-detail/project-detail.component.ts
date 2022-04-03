import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Project, ProjectService } from "src/app/services/project/project.service";

@Component({
    selector: 'admin-project-detatil-component',
    templateUrl: 'project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {

    project?: Project;

    constructor(
        private router: ActivatedRoute,
        private projectService: ProjectService,
    ) { }

    ngOnInit(): void {
        this.projectService
            .getById(this.router.snapshot.params["id"])
            .subscribe(p => {
                this.project = p;
                console.log(this.project);
            });


    }

}