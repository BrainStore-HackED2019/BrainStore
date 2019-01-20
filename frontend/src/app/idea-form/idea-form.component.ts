import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Idea } from '../idea';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {

  constructor(private http : HttpClient) { }

  newPost: Observable<any>;
  topics: Observable<any>;

  onSubmit() {

    var ideaName = (<HTMLInputElement> document.getElementById("IdeaName")).value;
    var description = (<HTMLInputElement> document.getElementById("Description")).value;

    let idea = new Idea(ideaName, description);

    this.newPost = this.http.post('http://localhost:3000/ideas/send', idea);
    console.log("Submitted.");
  }

  getTopics() {
    console.log('Clicked');
    this.topics = this.http.get('http://localhost:3000/topics/list');
    console.log(this.topics);
    
  }

  ngOnInit() {

  }

}
