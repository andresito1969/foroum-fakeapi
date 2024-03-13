import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';


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
    .pipe(map(
      (postList: []) => {
        postList.map((value: {}) => {
          value["sort"] = Math.random()
        })
        postList.sort((a: {}, b: {}): number => {
          return a["sort"] - b["sort"];
        })
        return postList
      }
    ))
    .subscribe((posts: []) => {
      this.loadedPosts = posts;
    })
  }
}
