import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {

  constructor(private http : HttpClient) { }

  newPost: Observable<any>;

  onSubmit() {

    const data : Post = {
      title: 'My New Idea',
      description: 'From Cody'
    }

    this.newPost = this.http.post('http://localhost:3000/ideas/send', data);
    console.log("Submitted.");
  }

  ngOnInit() {
  }

}
