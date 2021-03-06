import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  profileForm = {
    firstName: '',
    lastName: '',
    gender: ''
  };

  onSubmit(form: any){
    form.reset();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
