import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditPostPageComponent } from './pages/edit-post-page/edit-post-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { NewPostPageComponent } from './pages/new-post-page/new-post-page.component';
import { JoinPageComponent } from './pages/join-page/join-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MaterialUiModule } from './shared/material-ui/material-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    EditPostPageComponent,
    PostPageComponent,
    NewPostPageComponent,
    JoinPageComponent,
    LoginPageComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
