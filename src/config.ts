import { Headers, RequestOptions } from '@angular/http';

export class Config {
  static get apiUrl() {
    if (window.location.hostname === 'localhost') {
      return `https://portbackend.herokuapp.com/`;
    }
    return `https://portbackend.herokuapp.com/`;
  };
  static get authCredentials() {
    const jsonHeaders = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: jsonHeaders, withCredentials: true });
  }
}
