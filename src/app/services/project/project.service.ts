import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GlobalVariable } from "src/app/model/global";
import { UserRegisterReceived } from "src/app/model/user-register";
import { Tags } from "../tags/tags.service";

@Injectable({
    providedIn: "root"
})
export class ProjectService {

    urlProject: string = GlobalVariable.BASE_API_URL + '/project';

    constructor(
        private httpClient: HttpClient
    ) { }

    public getProjectsByUser(userId: number): Observable<Project[]> {
        return this.httpClient.get<Project[]>(`${this.urlProject}/${userId}`);
    }

    public createProject(project: CreateProjectDto): Observable<Project> {
        return this.httpClient.post<Project>(`${this.urlProject}/create`, project);
    }

}

export interface Project {
    id: number;
    name: String;
    tags: Tags[];
    comments: Comment[];

}

export interface Comment {
    content: string;
    project: Project;
    user: UserRegisterReceived;
}

export interface CreateProjectDto {
    userId: number | undefined;
    name: string;
    tagIds: number[];
}
