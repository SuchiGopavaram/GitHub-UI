import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GithubcommitsService } from './githubcommits.service';
import { HttpErrorResponse } from "@angular/common/http";
import { BranchDetail } from "../model/branchdetail.model";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'githubcommits',
  templateUrl: './githubcommits.component.html',
  styleUrls: ['./githubcommits.component.css']
})

export class GithubcommitsComponent implements OnInit {
    private commitEntries:Array<any>;
    private branchList:Array<BranchDetail>;
    constructor(private gitHService: GithubcommitsService, private router: Router) { }

    ngOnInit(){
      this.getGitHubBranches();
      //this.emplist =this.gitHService.getGitHubCommits();
    }

    gitGitHubCommit(commitId): void {
      localStorage.removeItem("commitId");
      localStorage.setItem("commitId", commitId);
      this.router.navigate(['githubcommitdetail']);
    };

    getGitHubBranches(){
      this.gitHService.getGitHubBranches().subscribe(
        data => {
          this.branchList = data;
        },
        (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured :"+err.message);
       }
     });
   }
}
