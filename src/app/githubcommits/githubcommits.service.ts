import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BranchDetail } from "../model/branchdetail.model";

@Injectable()
export class GithubcommitsService {

  private baseUrl:string='http://localhost:8080/git/branches';

  constructor(private http: HttpClient) { }

  getGitHubBranches(){

    return this.http.get<BranchDetail[]>(this.baseUrl);
  /*  let fakeEmpList = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
      {id: 2, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
      {id: 3, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
      {id: 4, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
    ];
    return fakeEmpList; */
  }

}
