import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MateriasService extends ApiService{

  constructor(private http: HttpClient) { super()}

  allRecords(vin : string) : Observable<any>{
    return this.http.get(this.API_URI + "lista_planes_materias.php")
  }

  singleRecords(vin : string) : Observable<any>{
    return this.http.get(this.API_URI + "busca_plan_materia.php")
  }

  createRecords(body:any) : Observable<any>{
    return this.http.post(this.API_URI + "create_materia.php", body)
  }

  updateRecords(body:any) : Observable<any>{
    return this.http.put(this.API_URI + "update_materia.php", body)
  }

  removeRecords(body:any) : Observable<any>{
    return this.http.delete(this.API_URI + "delete_materia.php", body)
  }

}
