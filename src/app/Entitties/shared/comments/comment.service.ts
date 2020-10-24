import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IComment} from '../model/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor() {
  }

  /**
   * ürün id bilgisine gore yorumları getiren servis
   * @param productId ürün idsi
   * @param req pageable bilgisi
   */
  getProductComments(productId: number, req: { page: number, size: number }): Observable<IComment[]> {
    const from = req.page * req.size;
    const to = (req.page + 1) * req.size;

    const comment1: IComment = {
      commentDate: '2020-06-21',
      commentHeader: 'iphone',
      commentUrl: 'https://www.n11.com/urun/apple-iphone-11-64-gb-apple-turkiye-garantili-1109951?magaza=cincin#unf-review',
      productRate: 4,
      userComment: '2019 modeli bir telefon ama apple nin yani iphonenin daha doğrusu bir özelliği va kamerası 12 mp ama 48 mp li telefondamn daha güzel foto çekiyor video çekiyor buna bayılıyorum. Onun dışında hızlı şarjı gerçekten çok hızlı , kendi de hızlı güzel bir telefon abim de var kullanıyor ve çok memnun',
      userName: 'n11'
    };

    const comment2: IComment = {
      commentDate: '2020-06-22',
      commentHeader: 'iphone 2',
      commentUrl: 'www.hepsiburada.com',
      productRate: 4,
      userComment: '2019 modeli bir telefon ama apple nin yani iphonenin daha doğrusu bir özelliği va kamerası 12 mp ama 48 mp li telefondamn daha güzel foto çekiyor video çekiyor buna bayılıyorum. Onun dışında hızlı şarjı gerçekten çok hızlı , kendi de hızlı güzel bir telefon abim de var kullanıyor ve çok memnun',
      userName: 'hepsiburada'
    };

    const comment3: IComment = {
      commentDate: '2020-06-22',
      commentHeader: 'iphone 2',
      commentUrl: 'www.hepsiburada.com',
      productRate: 4,
      userComment: 'ürünü çok beğendik',
      userName: 'gittigidiyor'
    };

    const comment4: IComment = {
      commentDate: '2020-06-22',
      commentHeader: 'iphone 2',
      commentUrl: 'www.hepsiburada.com',
      productRate: 4,
      userComment: 'ürünü çok beğendik',
      userName: 'trendyol'
    };

    const comment5: IComment = {
      commentDate: '2020-06-22',
      commentHeader: 'iphone 2',
      commentUrl: 'www.hepsiburada.com',
      productRate: 4,
      userComment: 'ürünü çok beğendik',
      userName: 'hepsiburada'
    };

    const comment6: IComment = {
      commentDate: '2020-06-22',
      commentHeader: 'iphone 2',
      commentUrl: 'www.hepsiburada.com',
      productRate: 4,
      userComment: 'ürünü çok beğendik',
      userName: 'hepsiburada'
    };

    const comment7: IComment = {
      commentDate: '2020-06-22',
      commentHeader: 'iphone 2',
      commentUrl: 'www.hepsiburada.com',
      productRate: 4,
      userComment: 'ürünü çok beğendik',
      userName: 'hepsiburada'
    };

    const comment8: IComment = {
      commentDate: '2020-06-22',
      commentHeader: 'iphone 2',
      commentUrl: 'www.hepsiburada.com',
      productRate: 4,
      userComment: 'ürünü çok beğendik',
      userName: 'hepsiburada'
    };

    const comment9: IComment = {
      commentDate: '2020-06-22',
      commentHeader: 'iphone 2',
      commentUrl: 'www.hepsiburada.com',
      productRate: 4,
      userComment: 'ürünü çok beğendik',
      userName: 'hepsiburada'
    };

    const comment10: IComment = {
      commentDate: '2020-06-22',
      commentHeader: 'iphone 2',
      commentUrl: 'www.hepsiburada.com',
      productRate: 4,
      userComment: 'ürünü çok beğendik',
      userName: 'hepsiburada'
    };

    const comment11: IComment = {
      commentDate: '2020-06-22',
      commentHeader: 'iphone 2',
      commentUrl: 'www.hepsiburada.com',
      productRate: 4,
      userComment: 'ürünü çok beğendik',
      userName: 'hepsiburada'
    };

    const comment12: IComment = {
      commentDate: '2020-06-22',
      commentHeader: 'iphone 2',
      commentUrl: 'www.hepsiburada.com',
      productRate: 4,
      userComment: 'ürünü çok beğendik',
      userName: 'hepsiburada'
    };

    const comment13: IComment = {
      commentDate: '2020-06-22',
      commentHeader: 'iphone 2',
      commentUrl: 'www.hepsiburada.com',
      productRate: 4,
      userComment: 'ürünü çok beğendik',
      userName: 'hepsiburada'
    };

    const comments = [comment1, comment2, comment3, comment4, comment5, comment6,
      comment7, comment8, comment9, comment10, comment11, comment12, comment13];

    return of(comments.slice(from, to));
  }
}
