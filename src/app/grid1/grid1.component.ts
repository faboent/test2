import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Import CUSTOM_ELEMENTS_SCHEMA
import { IgxGridModule } from 'igniteui-angular'; // Import the IgxGridModule
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-grid1',
  standalone: true,
  imports: [IgxGridModule, CommonModule], // Add IgxGridModule to imports
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add CUSTOM_ELEMENTS_SCHEMA here
  template: `
  <h4>Paging Grid</h4>
    <igx-grid [data]="data" [paging]="true">
      <igx-column field="ID" header="ID"></igx-column>
      <igx-column field="Name" header="Name"></igx-column>
        <igx-column field="Age" header="Age"></igx-column>
      <igx-paginator [perPage]="5"></igx-paginator> <!-- Set perPage to 5 here -->
    </igx-grid>
  `,
})
export class Grid1Component {
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
}
