import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  // styleUrl: './single-post.component.css'
})
export class PostListComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient){}



  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts = () => {
    this.http.get("https://jsonplaceholder.typicode.com/posts")
    .subscribe((posts: []) => {
      this.loadedPosts = posts;
    })
  }
}
