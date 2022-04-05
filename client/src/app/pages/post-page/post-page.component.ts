import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit {
  constructor(
    private readonly router: ActivatedRoute,
    public readonly postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.postsService.getPostItem(params.id);
    });
  }

  sanitize(value: string): string {
    return value
      .replace(
        /(\b(https?|):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi,
        '<a target="_blank" rel="noopener noreferrer" href="$1">$1</a>'
      )
      .replace(
        /(^|[^/])(www\.[\S]+(\b|$))/gim,
        '$1<a target="_blank" rel="noopener noreferrer" href="http://$2">$2</a>'
      )
      .replace(/\n/gi, '<br>');
  }
}
