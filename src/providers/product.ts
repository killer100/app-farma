import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { URL_AUTOCOMPLETE_PRODUCT } from '../config/api-urls';

import { DATA_AUTOCOMPLETE_PRODUCT, DATA_PRODUCT_PRICES_PAGE1 } from '../values/api-values';

@Injectable()
export class ProductProvider {

  constructor(public http: HttpClient) {

  }

  public listAutocompleteByName($name: string) {
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
      let data = DATA_AUTOCOMPLETE_PRODUCT.d.map(item => {
        return { id: item.id, value: item.value.replace('  ', ' ') };
      });
      setTimeout(() => { resolve(data); }, 1000);
    })
  }

  public listProductsWithPrice(id, page, pageSize) {
    //start = (page-1)*pageSize
    //end = page*pageSize

    return new Promise(resolve => {
      let response = {
        items: DATA_PRODUCT_PRICES_PAGE1.aaData,
        page: page,
        pageSize: pageSize,
        total: DATA_PRODUCT_PRICES_PAGE1.iTotalRecords,
      };

      setTimeout(() => { resolve(response); }, 1000);
    })
  }

}
