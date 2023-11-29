import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor( private CountriesService: CountriesService ) {}

  searchByCapital(term: string):void {
    console.log('searchByCapital ')
    this.CountriesService.searchCapital(term).
      subscribe( countriesReturned => {
        this.countries = countriesReturned;
      })
  }



}
