import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggle} from "@angular/material/button-toggle";

const ImportedMaterials = [
  MatButtonModule,
]

@NgModule({
  imports: [ImportedMaterials,],
  exports: [ImportedMaterials]
})
export class MaterialsModule { }
