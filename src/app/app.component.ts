import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ld-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redesprou-phone-input';
  telephone = '';
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      telephone: ['+5562993718452'],
      //telephone: [null],        
    });
  }



  printTelephone(event) {
    this.telephone = event;
  }
}
