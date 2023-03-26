import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class ApiService {

  public API_URI   ='https://scompcenter.com/david/rest_api_alu_materias_daw/api/';

  constructor() { }
}
