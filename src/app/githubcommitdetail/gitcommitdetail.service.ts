import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GitcommitdetailService {

private baseUrl:string='http://localhost:8080/git/commits';

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  retrieveGitCommits(commitId){
    return this.http.get<String[]>(this.baseUrl + '/' + commitId, {responseType: 'text' as 'json'})
  }
}
