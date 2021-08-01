import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { Country } from './models/phon.model';
import { PhoneService } from './services/phone.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit, ControlValueAccessor {
  conutryControl: FormControl = new FormControl(90);
  countries: Country[] = [];

  onChange: any = () => { };
  onTouched: any = () => { };
  disabled = false;

  constructor(private phoneService: PhoneService) {
    this.countries = phoneService.countryList;
    this.conutryControl.valueChanges.subscribe(val => {
      this.onChange(val);
    })
  }
  writeValue(obj: any): void {
    this.conutryControl.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }

  getMask(): string {
    return '(500)000-00-00';
  }








}
