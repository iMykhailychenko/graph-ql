import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { EditPostPageComponent } from './pages/edit-post-page/edit-post-page.component';
import { NewPostPageComponent } from './pages/new-post-page/new-post-page.component';
import { JoinPageComponent } from './pages/join-page/join-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'post/:id', component: PostPageComponent },
  { path: 'edit-post/:id', component: EditPostPageComponent },
  { path: 'new-post', component: NewPostPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'join', component: JoinPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
