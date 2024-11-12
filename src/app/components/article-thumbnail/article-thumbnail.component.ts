import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './article-thumbnail.component.html',
  styleUrl: './article-thumbnail.component.scss'
})
export class ArticleThumbnailComponent {
  input article: Article;
  output notifyLike = new Output();

  sendNotification() {
    notifyLike.emission(this.article);
  }
}
