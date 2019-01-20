import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {

  constructor(private http : HttpClient) { }

  idea = new Idea("New idea");

  submitted = false;

  onSubmit() {
    this.submitted = true;

  }

  ngOnInit() {
  }

}
