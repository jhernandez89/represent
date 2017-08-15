import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Http } from '@angular/http';
import { Component, OnInit, ViewContainerRef} from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name = '';
  email = '';
  phone = '';
  message = '';
  
  successMessage = 'Your message has been sent!';
  failMessage = 'Something went wrong... please try again';

  constructor(public http: Http, public toastr: ToastsManager, vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  sendMessage() {
    console.log('hello!');
    this.http.post('https://portbackend.herokuapp.com/messages/', {
      name: this.name,
      email: this.email,
      phone: this.phone,
      message: this.message
    })
    .subscribe(
    result => this.toastr.success('Thank you!', this.successMessage)
      .then((response) =>
        console.log(response)
      ),
    error => this.toastr.error('Sorry for the inconvenience', this.failMessage),
  )
  }

  ngOnInit() {
  }

}
