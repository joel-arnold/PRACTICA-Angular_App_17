import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from '../../services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: [],
})
export class CargaComponent {
  archivos: FileItem[] = [];
  estaSobreDrop: boolean = false;

  constructor(public servCargaImagenes: CargaImagenesService) {}

  cargarImagenes() {
    this.servCargaImagenes.cargarImagenesFirebase(this.archivos);
  }

  limpiarArchivos() {
    this.archivos = [];
  }
}
