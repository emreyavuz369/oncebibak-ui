import {Component, OnInit} from '@angular/core';
import {Contact} from '../shared/model/contact.model';
import {ContactService} from './contact.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact = new Contact();
  submitted: boolean;
  saving: boolean;

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
  }

  submitContactInfo() {
    if (this.saving) {
      return;
    }
    this.saving = true;
    this.contactService.postContact(this.contact)
      .pipe(finalize(() => this.saving = false))
      .subscribe(() => {
        this.submitted = true;
        console.log('calisti');
      }, () => {
        console.log('calismadi');
      });
  }

}
