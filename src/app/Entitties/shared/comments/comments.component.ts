import {Component, Input, OnInit} from '@angular/core';
import {IComment} from '../model/comment.model';
import {CommentService} from './comment.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() productId: number;
  comments: IComment[] = [];
  page = 0;
  size = 5;
  total = 13; // bu bilgi servisten alinacak
  loading: boolean;

  constructor(private commentService: CommentService) {
  }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.loading = true;
    this.commentService.getProductComments(this.productId, {page: this.page, size: this.size})
      .pipe(finalize(() => this.loading = false))
      .subscribe((comments: IComment[]) => {
        this.comments = this.comments.concat(comments);
        this.page++;
      });
  }

}
