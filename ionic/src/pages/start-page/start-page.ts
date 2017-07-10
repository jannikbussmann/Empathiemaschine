import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from "../../providers/reddit-service";

@Component({
  selector: 'page-start-page',
  templateUrl: 'start-page.html'
})
export class StartPage {
  private data:any;
  constructor(public navCtrl: NavController, public redditService:RedditService) {
  }
  ionViewDidLoad(){
    this.redditService.getRemoteData().subscribe(data=>{
      this.data=data.data;console.log(this.data);});
  }
}
