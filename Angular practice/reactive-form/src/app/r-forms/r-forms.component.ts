import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-r-forms',
  templateUrl: './r-forms.component.html',
  styleUrls: ['./r-forms.component.scss']
})
export class RFormsComponent implements OnInit
{
  userForm! : FormGroup;

  constructor(private fb:FormBuilder) {}
  ngOnInit(): void {
    this.initializeForm();
  }


  initializeForm()
  {
    this.userForm = this.fb.group(
      {
        name: [null, [ Validators.required,Validators.pattern('^[A-Za-z ]+$')]],
        email: [null, [Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
        password:[null,[Validators.required,Validators.pattern('^.{8,}$')]],
        phonenumber: [null, [Validators.required,Validators.pattern('^[0-9]{1,10}$')]],
      }
    )
  }
  get form()
  {
    return this.userForm.controls;    
  }
  form1()
  {
    console.log(this.userForm.value);
    console.log(this.userForm.controls);
  }
}
