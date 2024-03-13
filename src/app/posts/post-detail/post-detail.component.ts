import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit{
  
  constructor(private route: ActivatedRoute, 
    private http: HttpClient){}

  detailedPost;
  isLoadedPost = false;

  ngOnInit(): void {
    const postId = this.route.snapshot.params.id
    this.fetchDetailedPost(postId);
  }

  fetchDetailedPost = (postId) => {
    let params = new HttpParams().set('id', postId);
    setTimeout(() => {
      this.http.get("https://jsonplaceholder.typicode.com/posts", { params: params })
        .subscribe(post => {
          this.detailedPost = post[0]
          this.isLoadedPost = true;
        });
    }, 2000)
    
  }
}
