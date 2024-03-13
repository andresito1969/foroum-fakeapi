import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  // styleUrl: './post-item.component.css'
})
export class PostItemComponent implements OnInit{
  @Input() postItem;

  ngOnInit(): void {
      console.log("item", this.postItem)
  }
}
