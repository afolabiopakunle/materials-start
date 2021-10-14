import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";

const ImportedMaterials = [
  MatButtonModule
]

@NgModule({
  imports: [ImportedMaterials],
  exports: [ImportedMaterials]
})
export class MaterialsModule { }
