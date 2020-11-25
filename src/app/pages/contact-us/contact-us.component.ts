import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  formaSol: FormGroup;

  constructor(public pageService: InfoPageService,
              private fb: FormBuilder  ) { }

  ngOnInit(): void {

    this.crearFormulario();
  }
  
  
  guardarSolContactUs() {
    
    console.log( this.formaSol );
  
    console.log("pasa a la clase");
  }
  
  crearFormulario() {
    this.formaSol = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
        subject: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
        message: ['', [Validators.required, Validators.minLength(50)]]
      } 
    );
  }

}
