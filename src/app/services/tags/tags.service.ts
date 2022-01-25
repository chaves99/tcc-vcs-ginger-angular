import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GlobalVariable } from "src/app/model/global";

@Injectable({ providedIn: 'root' })
export class TagsService {

    urlTags: string = GlobalVariable.BASE_API_URL + '/tags';

    constructor(
        private http: HttpClient
    ) { }

    public getAll(): Observable<Tags[]> {
        console.log(this.urlTags);
        return this.http.get<Tags[]>(this.urlTags);
    }

}

export interface Tags {
    id?: number;
    description?: string;
}