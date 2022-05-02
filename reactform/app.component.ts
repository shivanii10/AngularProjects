import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactform';
  uname: any;   
  passwd: any;  
  email:any;   
  formdata: any;
  constructor(){
    this.myForm();
  }
  ngOnInit(){
   
  }
  myForm(){
    this.formdata= new FormGroup({     
      uname: new FormControl("admin", [ Validators.required, Validators.minLength(6) ]   ),    
      passwd: new FormControl("admin", Validators.required),    
      email : new FormControl('email', Validators.email) });
  }

}
