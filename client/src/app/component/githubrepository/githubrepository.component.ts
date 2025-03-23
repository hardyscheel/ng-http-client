import { Component, OnInit } from '@angular/core';

import { GitHubService } from '../../service/github.service';

import { GitHubRepository } from '../../model/githubrepository.model';

@Component({
  selector: 'app-githubrepository',
  templateUrl: './githubrepository.component.html',
  styleUrls: ['./githubrepository.component.css']
})
export class GitHubRepositoryComponent implements OnInit {

  userName: string = "hardyscheel";
  gitHubRepositories: GitHubRepository[];

  loading: boolean = false;
  errorMessage: string;

  constructor(private gitHubService: GitHubService) { }

  ngOnInit(): void {
  }

  getGitHubRepository() {
    this.loading = true;
    this.errorMessage = "";
    this.gitHubService.getGitHubRepository(this.userName)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.gitHubRepositories = response;
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
