import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup,} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;
  formsubmitted:boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      display: this.fb.control(''),
      mynumber: this.fb.control(49, [Validators.required, Validators.min(0), Validators.max(100)]),
    }, { validators: customCrossValidator });
  }

  submit() {
   this.formsubmitted=true;
  }

  get display() {
    return this.form.get('display').value==='yes';
  }

  get mynumber() {
    return this.form.get('mynumber');
  }

  clearSubmit(){
    this.formsubmitted=false;
   }


}

export function customCrossValidator(group: FormGroup) {
  const {  display, mynumber } = group.controls;
  if (display.value==='yes' && mynumber.value>50 ) {
    return { customCrossValidator: true };
  } 
  return null;
}