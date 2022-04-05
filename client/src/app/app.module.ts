import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EditPostPageComponent } from './pages/edit-post-page/edit-post-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { NewPostPageComponent } from './pages/new-post-page/new-post-page.component';
import { JoinPageComponent } from './pages/join-page/join-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MaterialUiModule } from './shared/material-ui/material-ui.module';
import { SubHeaderComponent } from './shared/sub-header/sub-header.component';
import { ContainerComponent } from './shared/container/container.component';

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
    SubHeaderComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => ({
        link: httpLink.create({ uri: environment.uri }),
        cache: new InMemoryCache(),
      }),
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
