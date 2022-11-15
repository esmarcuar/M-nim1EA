import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import axios from 'axios';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Denuncia } from '../../models/Denuncia';

@Component({
  selector: 'app-denuncia-screen',
  templateUrl: './denuncia-screen.component.html',
  styleUrls: ['./denuncia-screen.component.css']
})
export class denunciaScreenComponent implements OnInit {



  listdenuncia : Denuncia[] = [];

  constructor() { }

  ngOnInit(): void {
  
    this.getdenuncias();
  }

  nextCarrousel(){
	$('.home-carrousel').animate({
		scrollLeft: "+=300px"
	}, "slow");
  }

  backCarrousel(){
	$('.home-carrousel').animate({
		scrollLeft: "-=300px"
	}, "slow");
  }
  
  getdenuncias(){
		const response = axios.get('http://localhost:5432/api/denuncias/', {
		}).then((response) => {
      this.listdenuncia = response.data;
		}).catch((error) => {
			console.log(error);
		});
	}

}
