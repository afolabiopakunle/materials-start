import { Component } from '@angular/core';
import {PostModel} from "./shared/post.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sentPost(data: PostModel) {
    this.posts.push(data)
  }
  posts: PostModel[] = [

  ]
}
