import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project/project.service';

@Component({
    selector: 'app-explore',
    templateUrl: './explore.component.html',
})
export class ExploreComponent implements OnInit {

    constructor(
        private projectService: ProjectService
    ) { }

    ngOnInit(): void {
        
    }

}
