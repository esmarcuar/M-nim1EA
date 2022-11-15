import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-denuncia',
  templateUrl: './create-denuncia.component.html',
  styleUrls: ['./create-denuncia.component.css']
})
export class CreateDenunciaComponent implements OnInit {
  createdenunciaForm: FormGroup;
  submitted = false;
  clickCreatedenuncia: boolean;


  constructor(private formBuilder: FormBuilder, private _router: Router) { 
    this.createdenunciaForm = this.formBuilder.group({});
    this.clickCreatedenuncia = false;
  }

  ngOnInit(): void {
    this.createdenunciaForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      
    });
  }
  onSubmit() {
    this.submitted = true;
  }
  sendCreatedenuncia(){
		if(!this.createdenunciaForm.invalid){
		axios.post('http://localhost:5432/api/denuncias/', {
			title: this.createdenunciaForm.value.title,
			description: this.createdenunciaForm.value.description,
		//	owner: this.createdenunciaForm.value.owner,
		//	date: this.createdenunciaForm.value.date,
			//location: this.createdenunciaForm.value.location
		}).then((response) => {
			environment.auth = response.data.token;
			this._router.navigate(['/denuncia-screen'])
		}).catch((error) => {
			console.log(error);
		});
	}
	}
}
