import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  // @ViewChild('txtSearchInput')
  // public searchInput!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string ="";

  @Output()
  public onValue = new EventEmitter<string>();

  searchBy(value: string): void{
    // const inputSearch = this.searchInput.nativeElement.value;
    console.log('SearchInput Desde Search Box: ', value );
    this.onValue.emit(value);
  }

}
