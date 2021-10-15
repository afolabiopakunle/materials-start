import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from '@angular/material/expansion';


const ImportedMaterials = [
  MatButtonModule,
  MatExpansionModule
]

@NgModule({
  imports: [ImportedMaterials,],
  exports: [ImportedMaterials]
})
export class MaterialsModule { }
