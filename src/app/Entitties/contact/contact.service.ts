import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {IContact} from '../shared/model/contact.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  resourceUrl = 'http://localhost:8080/api/contact';

  constructor(protected http: HttpClient) {
  }

  postContact(contact: IContact): Observable<HttpResponse<void>> {
    return this.http.post<void>(this.resourceUrl, contact, {observe: 'response'});
  }
}
