import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-test-r-forms',
  templateUrl: './test-r-forms.component.html',
  styleUrls: ['./test-r-forms.component.scss']
})
export class TestRFormsComponent implements OnInit {

  userform!:FormGroup;
  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.initialize()
  }

  initialize()
  {
    this.userform=this.fb.group(
      {
        First_name:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(25),Validators.pattern('^[A-Za-z]+$')]],
        Last_name:[null,[Validators.required,Validators.minLength(1)]],
        date_of_birth:[null,[Validators.required]],
        Native:[null,[Validators.required,Validators.pattern('^[A-Za-z]+$')]],
        Contact_number:[null,[Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]+$')]],
        gender:[null,[Validators.required]],  
        email:[null,[Validators.required,Validators.email]],
      }
    )
  }
  get form()
  {
    return this.userform.controls;
  }
  save()
  {
    this.userform.markAllAsTouched();
    console.log(this.userform.value);
    // this.userform.reset();
  }

}
