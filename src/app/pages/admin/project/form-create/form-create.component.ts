import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CreateProjectDto } from "src/app/services/project/project.service";
import { Tags, TagsService } from "src/app/services/tags/tags.service";

@Component({
    selector: 'admin-project-form-create',
    templateUrl: 'form-create.component.html'
})
export class ProjectFormCreateComponent implements OnInit {

    tagList: Tags[] = [];

    constructor(
        public dialogRef: MatDialogRef<ProjectFormCreateComponent>,
        @Inject(MAT_DIALOG_DATA) public data: CreateProjectDto,
        private tagsService: TagsService
    ) {
        this.tagsService.getAll().subscribe(data => this.tagList = data)
    }


    ngOnInit(): void {
        this.tagsService.getAll().subscribe(data => this.tagList = data);
    }

}