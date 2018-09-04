import { RouterModule, Routes } from '@angular/router';
import { GithubcommitsComponent } from './githubcommits/githubcommits.component';
import { GithubcommitdetailComponent } from './githubcommitdetail/githubcommitdetail.component';

const routes: Routes = [
  { path: 'githubcommits', component: GithubcommitsComponent },
  { path: 'githubcommitdetail', component: GithubcommitdetailComponent },
  {path : '', component : GithubcommitsComponent}
];

export const routing = RouterModule.forRoot(routes);
