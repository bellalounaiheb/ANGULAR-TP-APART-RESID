import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ApartmentService} from "../shared/apartment.service";
import {Apartment} from "../core/models/apartment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-apartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css']
})
export class FormApartmentComponent {
  constructor(private aps:ApartmentService, private _router:Router){}
  myForm:FormGroup;

  ngOnInit(){
    this.myForm=new FormGroup({ //FormGroup: le formulaire
      sousgroupe1:new FormGroup({
      appartNum:new FormControl('',[Validators.required,Validators.pattern("[1-9][0-9]*")]), //Form:champ du formulaire
      surface:new FormControl('',[Validators.required]),
      floorNum:new FormControl('', [Validators.required]),
      }),
      surfaceTerrace:new FormControl('', [Validators.required]),
    })
  }

    get NumApart(){
      return this.myForm.get('sousgroupe1').get('appartNum');
    }
    get surface(){
      return this.myForm.get('sousgroupe1').get('surface');
    }
    get NumFloor(){
      return this.myForm.get('sousgroupe1').get('floorNum');
    }

    get SurfaceTerrace(){
    return this.myForm.get("surfaceTerrace");
    }

    get sousgroupe1(){
      return this.myForm.get('sousgroupe1');
    }

  addApartment(){
    let a : Apartment = new Apartment();
    a.appartNum = this.NumApart.value;
    a.surface = this.surface.value;
    a.floorNum = this.NumFloor.value;
    a.surfaceTerrace = this.SurfaceTerrace.value;
    this.aps.addApartment(a).subscribe(()=>this._router.navigateByUrl("home"));
  }

}
