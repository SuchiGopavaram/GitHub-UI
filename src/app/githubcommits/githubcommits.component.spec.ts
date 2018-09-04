import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubcommitsComponent } from './githubcommits.component';

describe('GithubcommitsComponent', () => {
  let component: GithubcommitsComponent;
  let fixture: ComponentFixture<GithubcommitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubcommitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubcommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
