import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public version = environment.version;

  constructor(public readonly postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getList();
  }
}
