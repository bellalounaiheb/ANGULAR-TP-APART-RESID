import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent {
  residenceForm:FormGroup;

  ngOnInit() {
    this.residenceForm = new FormGroup( {
      sousgroupe: new FormGroup( {
        id: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required])
      })
    })
  }

  get idResidence(){
    return this.residenceForm.get('sousgroupe').get('id');
  }
  get residenceName(){
    return this.residenceForm.get('sousgroupe').get('name');
  }
  get residenceAddress(){
    return this.residenceForm.get('sousgroupe').get('address');
  }

  get sousgroupe(){
    return this.residenceForm.get('sousgroupe');
  }
}
