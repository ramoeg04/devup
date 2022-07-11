import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsletterService } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  title:string='Contáctanos'
  error:string ='Ingrese un valor correcto'
  constructor( private newsletterServices: NewsletterService) { }

  ngOnInit(): void {
  }
  addForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10)]),
  })


  post(){
    console.log(this.addForm.value)
    this.newsletterServices.postNewsletter(this.addForm.value).subscribe(res =>{
      console.log(res);
    })
  }



}
