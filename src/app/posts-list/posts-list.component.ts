import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../shared/post.model";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  panelOpenState = false;
  @Input() post!: PostModel;
}
