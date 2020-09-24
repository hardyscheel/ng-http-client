import { Component, OnInit } from '@angular/core';

import { GitHubService } from '../../service/github.service';

import { GitHubUser } from '../../model/githubuser.model';

@Component({
  selector: 'app-githubuser',
  templateUrl: './githubuser.component.html',
  styleUrls: ['./githubuser.component.css']
})
export class GitHubUserComponent implements OnInit {

  userName: string = "HardyScheel";
  gitHubUser: GitHubUser;

  loading: boolean = false;
  errorMessage: string;

  constructor(private gitHubService: GitHubService) {
  }

  ngOnInit(): void {
  }

  getGitHubUserData() {
    this.loading = true;
    this.errorMessage = "";
    this.gitHubService.getGitHubUserData(this.userName)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.gitHubUser = response;
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed
          this.loading = false;
        })

  }

}
