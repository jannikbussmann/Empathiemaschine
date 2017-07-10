import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RedditService provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RedditService {

  constructor(public http: Http) {
    console.log('Hello RedditService Provider');
  }
  getRemoteData(){
    return this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=20&sort=hot')
    .map(res=>res.json());
  }
}
