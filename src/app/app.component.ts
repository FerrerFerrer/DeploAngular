import { Component } from '@angular/core';
import { MateriasService } from './services/materias.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  res: any;

  constructor(public _materiaService: MateriasService){

  }

  async create() {

  }
  async read() {

  }
  async readOne() {

  }
  async update() {

  }
  async delete() {

  }

}

