import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitHubRepositoryComponent } from './component/githubrepository/githubrepository.component';

const routes: Routes = [
  { path: 'githubrepository', component: GitHubRepositoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
