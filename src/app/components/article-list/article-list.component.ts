import { Component, inject, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent implements OnInit {

  http = inject(HttpClient);
  apiUrl: string = 'http://localhost:3000/articles';
  articles$!: Observable<Article[]>;

  ngOnInit() {
    this.articles$ = this.http.get<Article[]>(this.apiUrl);
  }

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }

  getArticles$() {
    return this.http.get<Article[]>(this.apiUrl);
  }

  getArticlesById$(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }
}
