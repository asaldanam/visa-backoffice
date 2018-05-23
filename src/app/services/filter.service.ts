import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {

  filter:any = {
    country: {
      name: '',
      selected: false
    },
    date: {
      name: '',
      selected: false
    }
  };

  constructor() { }

}