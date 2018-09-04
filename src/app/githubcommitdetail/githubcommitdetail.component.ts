import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GitcommitdetailService } from './gitcommitdetail.service';
import { HttpErrorResponse } from "@angular/common/http";
import { BranchDetail } from "../model/branchdetail.model";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'githubcommitdetail',
  templateUrl: './githubcommitdetail.component.html',
  styleUrls: ['./githubcommitdetail.component.css']
})
export class GithubcommitdetailComponent implements OnInit {
 private response:Array<any>;
  constructor(private githubcommitdetailService: GitcommitdetailService) { }

  ngOnInit() {
    console.log("Coming here to GithubcommitdetailComponent")
    var commitId = localStorage.getItem("commitId");
    this.getGitHubCommits(commitId);
  }

  getGitHubCommits(commitId){
    this.githubcommitdetailService.retrieveGitCommits(commitId).subscribe(
      data => {
        this.response = data;
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
