import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  handleError(component: string, err: any) {
    /**
     * method common for handle errors
     */
    console.log('componente', component, 'error', err);
  }
}
