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
        return this.httpClient.get<Project[]>(`${this.urlProject}/user/${userId}`);
    }

    public createProject(project: CreateProjectDto): Observable<Project> {
        return this.httpClient.post<Project>(`${this.urlProject}/create`, project);
    }

    public getById(id: number): Observable<Project> {
        return this.httpClient.get<Project>(`${this.urlProject}/${id}`);
    }

}

export interface Project {
    id: number;
    name: string;
    description: string;
    user?: UserRegisterReceived;
    orientador?: UserRegisterReceived;
    tags?: Tags[];
    comments?: Comment[];
    createdDate: Date;
    lastModifiedDate: Date;
}

export interface Comment {
    content: string;
    project: Project;
    user: UserRegisterReceived;
}

export interface CreateProjectDto {
    userId: number | undefined;
    name: string;
    description: string
    tagIds: number[];
}
