import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { IgxGridModule, IgxGridComponent, IgxStringFilteringOperand } from 'igniteui-angular';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-grid3',
  standalone: true,
  imports: [IgxGridModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <h4>Filtering Grids</h4>
    <input 
      type="text" 
      placeholder="Filter by name" 
      (input)="onFilterName($event)" 
      style="margin-bottom: 10px; padding: 5px; width: 300px;" 
    />
    <igx-grid #grid [data]="data" [autoGenerate]="false" [height]="'500px'">
      <igx-column field="ID" header="ID" [filterable]="true"></igx-column>
      <igx-column field="Name" header="Name" [filterable]="true"></igx-column>
      <igx-column field="Age" header="Age" [filterable]="true"></igx-column>
    </igx-grid>
  `,
})
export class Grid3Component {
  @ViewChild('grid', { static: true }) grid!: IgxGridComponent;

  data = [
    { ID: 1, Name: 'John', Age: 30 },
    { ID: 2, Name: 'Jane', Age: 25 },
    { ID: 3, Name: 'Jack', Age: 35 },
    { ID: 4, Name: 'Jill', Age: 28 },
    { ID: 5, Name: 'Joe', Age: 40 },
    { ID: 6, Name: 'James', Age: 45 },
    { ID: 7, Name: 'Jenny', Age: 22 },
    { ID: 8, Name: 'Jerry', Age: 38 },
  ];

  onFilterName(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.grid.filter('Name', inputValue, IgxStringFilteringOperand.instance().condition('contains'));
  }
}
