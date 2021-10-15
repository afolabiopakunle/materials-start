import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const ImportedMaterials = [
  MatButtonModule,
  MatExpansionModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  imports: [ImportedMaterials,],
  exports: [ImportedMaterials]
})
export class MaterialsModule { }
