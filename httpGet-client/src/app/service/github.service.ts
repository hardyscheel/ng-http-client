import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { GitHubRepository } from '../model/githubrepository';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  baseURL: string = "https://api.github.com/";

  constructor(private http: HttpClient) { }

  // The https://api.github.com/users/<username>?repos endpoint returns the list of Repositories belonging to the user <userName>.
  getGitHubRepository(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + userName + '/repos')
  }
}
