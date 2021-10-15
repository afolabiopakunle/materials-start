import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  title!: string;
  content!: string;

  @Output() sendPost = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  submitPost() {
    this.sendPost.emit({
      title: this.title,
      content: this.content
    })
  }

}
