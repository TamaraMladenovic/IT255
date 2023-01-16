import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { LetoviBazaModel } from './letovi-baza.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-letovi-baza',
  templateUrl: './letovi-baza.component.html',
  styleUrls: ['./letovi-baza.component.scss']
})
export class LetoviBazaComponent implements OnInit {

  formValue !: FormGroup;

  letBazaModelObj: LetoviBazaModel = new LetoviBazaModel();

  flightData !: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {

  }


  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      naziv: [''],
      od: [''],
      do: ['']
    })
    this.getAllLetovi();
  }

  clickDodajLet() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postDetaljiLeta() {
    this.letBazaModelObj.naziv = this.formValue.value.naziv;
    this.letBazaModelObj.od = this.formValue.value.od;
    this.letBazaModelObj.do = this.formValue.value.do;

    this.api.postLet(this.letBazaModelObj).subscribe(res=>{
      console.log(res);
      alert("Let uspesno dodat");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllLetovi();
    },
    _err=>{
      alert("Let uspesno dodat");
    }
    )
  
  
  }

  getAllLetovi() {
    this.api.getLet().subscribe(res => {
      this.flightData = res;
    })
  }

  deleteLet(row: any) {
    this.api.deleteLet(row.id).subscribe(_res => {
      alert("Flight deleted");
      this.getAllLetovi();
    })
  }

  onEdit(row: any) {
    this.letBazaModelObj.id = row.id;
    this.formValue.controls['naziv'].setValue(row.naziv);
    this.formValue.controls['od'].setValue(row.od);
    this.formValue.controls['do'].setValue(row.do);
    this.showAdd = false;
    this.showUpdate = true;
  }

  updateDetaljiLeta() {
    this.letBazaModelObj.naziv = this.formValue.value.naziv;
    this.letBazaModelObj.od = this.formValue.value.od;
    this.letBazaModelObj.do = this.formValue.value.do;
    this.api.updateLet(this.letBazaModelObj, this.letBazaModelObj.id).subscribe(_res => {
      alert("Updated successfuly");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllLetovi();
    })
  }

}
