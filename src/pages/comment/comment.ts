import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from '../../shared/comment';


/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  comment: FormGroup;

  comnd: Comment;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl:ViewController,private formBuilder: FormBuilder) {

      this.comment = this.formBuilder.group({
        author: ['',Validators.required],
        rating: ['',Validators.required],
        comment: ['',Validators.required]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

  dismiss() {
    this.comnd  = this.comment.value;
    this.comnd.date = new Date().toISOString();
    console.log(this.comnd);
    this.viewCtrl.dismiss(this.comnd);
  }

}
