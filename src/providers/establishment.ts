import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

import { ESTABLISHMENT_LIST_PAGE } from '../values/api-values';
import { ESTABLISHMENT_DATA } from '../values/api-values';

@Injectable()
export class EstablishmentProvider {

  constructor(public http: HttpClient) {

  }

  public listEstablishments() {
    // let data = {
    //   term: $name
    // };

    // return new Promise(resolve => {
    //   this.http.post(URL_AUTOCOMPLETE_PRODUCT, data).subscribe((data: any) => {
    //     let response = data.d.map(item => {
    //       return { id: item.id, value: item.value.replace('  ', ' ') };
    //     })
    //     resolve(response);
    //   }, err => {
    //     console.log(err);
    //   });
    // });
    return new Promise(resolve => {
      setTimeout(() => { resolve(ESTABLISHMENT_LIST_PAGE); }, 1000);
    })
  }

  public getEstablishment(codigo: string) {
    return new Promise(resolve => {
      setTimeout(() => { resolve(ESTABLISHMENT_DATA); }, 1000);
    })
  }

}
