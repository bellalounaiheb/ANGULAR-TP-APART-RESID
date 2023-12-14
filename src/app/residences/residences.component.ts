import { Component } from '@angular/core';
import { Apartment } from '../core/models/apartment';
import { Residence } from '../core/models/residence';
import { ApartmentService } from '../shared/apartment.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  surface : number;
  name : string = "valeur initial";
  name2 : string = "";
  //injecter le service ApartmentService dans le composant ResidencesComponent
  constructor(private aps:ApartmentService){}

  ngOnInit(){
    this.aps.getAllResidences().subscribe(result => this.listResidences = result);
    this.aps.getAllApartments().subscribe(result => this.listApartments = result);
  }
  setName(val:string){
    this.name=val;
  }
  listResidences:Residence[]=[];
  listApartments:Apartment[]=[];
    list : Apartment[]=[];
  getApartments(nb:number){
  this.list=[];
  for ( let a of this.listApartments){
     console.log(a);
     if (a.residence?.id == nb){
          this.list.push(a);
     }
    }
  }
  deleteResidence(r:Residence){
    this.aps.deleteResidence(r).subscribe();
    this.aps.getAllResidences().subscribe(result => this.listResidences = result);
  }
}
