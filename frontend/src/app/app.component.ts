import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from "./post";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BrainStore';

  readonly root_URL = 'localhost:3000';

  constructor(private http: HttpClient) {}

  posts: Observable<Post[]>;
  newPost: Observable<any>;

  getPosts() {
    this.posts = this.http.get<Post[]>(this.root_URL + '/posts');
  }

  createPost() {
    console.log("POST");
    const data : Post = {
      id: null,
      userId: 23,
      title: 'My New Post',
      body: 'Hello World!'
    }

    this.newPost = this.http.post(this.root_URL, data);
    
  }
}
