import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { GitHubRepo } from '../model/githubrepo';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  baseURL: string = "https://api.github.com/";

  constructor(private http: HttpClient) { }

  getGitHubRepos(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + userName + '/repos')
  }
}
