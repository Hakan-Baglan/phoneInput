import { Injectable } from '@angular/core';
import { Country } from '../models/phon.model';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  countryList: Country[]=[
    {
      id:90,
      name:'Türkiye',
      slug:'TR'
    },
    {
      id:34,
      name:'Almanya',
      slug:'AL'
    },
    {
      id:13,
      name:'Azerbaycan',
      slug:'AZ'
    },
  ];

  constructor() { }

  

  
}
