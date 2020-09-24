import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GithubComponent } from './component/github/github.component';
import { GitHubUserComponent } from './component/githubuser/githubuser.component';
import { GitHubRepositoryComponent } from './component/githubrepository/githubrepository.component';

const routes: Routes = [
  { path: 'github', component: GithubComponent },
  { path: 'githubuser', component: GitHubUserComponent },
  { path: 'githubrepository', component: GitHubRepositoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
