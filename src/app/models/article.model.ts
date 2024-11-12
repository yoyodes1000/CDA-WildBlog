export interface Article {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  isPublished: boolean;
  likeCount: string;
  categoryName: string;
  isLiked: string;
}
