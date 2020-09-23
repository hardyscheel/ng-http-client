import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubRepositoryComponent } from './githubrepository.component';

describe('GitHubRepositoryComponent', () => {
  let component: GitHubRepositoryComponent;
  let fixture: ComponentFixture<GitHubRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitHubRepositoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
