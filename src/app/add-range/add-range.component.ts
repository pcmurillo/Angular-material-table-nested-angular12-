import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-range',
  templateUrl: './add-range.component.html',
  styleUrls: ['./add-range.component.css']
})
export class AddRangeComponent implements OnInit {
    gaugeTitleForm:FormGroup;
    gaugeTitles:FormArray;

    constructor(private formBuilder: FormBuilder){}

    ngOnInit() {
      this.gaugeTitleForm = this.formBuilder.group({
        firstName: ['', Validators.minLength(3)],
        lastName: [''],
        mesInicio: [1],
        mesFinal: [12],
        gaugeTitles: this.formBuilder.array([])
      });
    }
    createItem(){
      return this.formBuilder.group({
        title:["",Validators.required],
        name:["",Validators.required]    
      });
    }

    cargarItem(t1:string){
      return this.formBuilder.group({
        title:[t1,Validators.required],
        name:[]    
      });
    }

    addItem():void{
      this.gaugeTitles = this.gaugeTitleForm.get('gaugeTitles') as FormArray;
      this.gaugeTitles.push(this.createItem());
    }
    removeRow(index) {
      console.log(index);
      (<FormArray>this.gaugeTitleForm.get("gaugeTitles")).removeAt(index);
    }
    onClone(){
      let inicio: number = this.gaugeTitleForm.controls['mesInicio'].value; 
      let final: number = this.gaugeTitleForm.controls['mesFinal'].value; 
      for (let index = inicio; index <= final; index++) { 
            let val1: string = 'prueba' + index;
            //let val2: string = 'prueba' + final;
            (<FormArray>
              (<FormGroup>this.gaugeTitleForm).controls.gaugeTitles).push(this.cargarItem(val1));
      }
    }
    onLimpiar(){
      let inicio: number = this.gaugeTitleForm.controls['mesInicio'].value; 
      let final: number = this.gaugeTitleForm.controls['mesFinal'].value; 
    /* for(let index in this.gaugeTitles){
        (<FormArray>this.gaugeTitleForm.get("gaugeTitles")).removeAt();  
      }
      
      for (let index = inicio; index <= final; index++) { 
        console.log(index+'---');
        (<FormArray>this.gaugeTitleForm.get("gaugeTitles")).removeAt(index);
      }*/
      (<FormArray>this.gaugeTitleForm.get("gaugeTitles")).clear();
    }
    onSubmit(){
      console.log(this.gaugeTitleForm.value)
    }
}
