import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { GitHubRepository } from '../model/githubrepository.model';
import { GitHubUser } from '../model/githubuser.model';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  baseURL: string = "https://api.github.com/";

  constructor(private http: HttpClient) { }

  // The https://api.github.com/users/<username>?repos endpoint returns the list of Repositories belonging to the user <userName>.
  // Use a more strongly typed response by using <GitHubRepository[]>.
  getGitHubRepository(userName: string): Observable<GitHubRepository[]> {
    return this.http.get<GitHubRepository[]>(
      this.baseURL + 'users/' + userName + '/repos',
      {
        observe: 'body',
        responseType: "json" // How is the response parsed. It can be one of the arraybuffer, json blob or text.
      }
    )
  }

  getGitHubUserData(userName: string): Observable<GitHubUser> {
    return this.http.get<GitHubUser>(this.baseURL + 'users/' + userName,
      {
        observe: 'body',
        responseType: "json"
      }
    )
  }
}
