import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs';
import { MateriasService } from './services/materias.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  res: any;
  cveVar: string | undefined = "";
  clave: string = "";
  clave2: string = "";

  // list:any;
  plantilla = {
    cve_materia: this.cveVar,
    grado: "",
    clave: "",
    materia: "",
    horas_prac: "",
    horas_teo: "",
    creditos: ""
  }


  public list2: any[] = [];

  constructor(public _materiaService: MateriasService) {

  }

  async ngOnInit() {
    this.list2.push(this.read());
  }


  async create() {

    let req = this.plantilla;
    this._materiaService.createRecords(req).subscribe(
      async data => {
        console.log(data);

      },
      (error) => {
        console.log(error);
      }
    )
  }

  async read() {
    this._materiaService.allRecords().subscribe(
      async data => {
        this.list2 = []
        // console.log( data.body.length)
        for (let i = 0; i < data.body.length; i++) {
          this.list2.push(data.body[i]);
          // console.log(data.body[i])
        }
      },
      (error) => {
        console.log(error);
      })
  }
  async readOne() {

  }

  async update() {
    let req = this.plantilla;
    this._materiaService.updateRecords(req).subscribe(
      (data) => {
        console.log(data);
        this.limpiar();
      },
      (error) => {
        console.log(error);
      })
    console.log(req);

  }
  async delete() {
    let req = {
      "cve_mat": this.clave,
      "clave": this.clave2
    };
    // this._materiaService.removeRecords(req).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.limpiar();
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // )
    let url = "https://scompcenter.com/david/rest_api_alu_materias_daw/api/delete_materia.php";
    let data = {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' ,'Access-Control-Allow-Methods' : '*'},
      body: JSON.stringify(req)
    };
    const res = await fetch(url, data);
  }

  guardarDelete(cve_mat: string, clave: string) {
    this.clave = cve_mat;
    this.clave2 = clave;
  }

  limpiar() {
    this.plantilla = {
      cve_materia: this.cveVar,
      grado: "",
      clave: "",
      materia: "",
      horas_prac: "",
      horas_teo: "",
      creditos: ""
    }

    this.clave = "";
    this.clave2 = "";
  }

  guardarCV(cve: string) {
    this.limpiar();
    this.cveVar = cve;
  }
}

