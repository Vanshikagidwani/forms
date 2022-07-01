import { Component, OnInit,} from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    gender: new FormControl(Validators.required)
  });

  onSubmit() {
    
    console.warn(this.profileForm.value);
    console.log(this.profileForm)
  }
  constructor() { }

  ngOnInit(): void {

    

}}
