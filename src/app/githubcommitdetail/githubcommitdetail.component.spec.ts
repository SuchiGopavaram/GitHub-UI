import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubcommitdetailComponent } from './githubcommitdetail.component';

describe('GithubcommitdetailComponent', () => {
  let component: GithubcommitdetailComponent;
  let fixture: ComponentFixture<GithubcommitdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubcommitdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubcommitdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
