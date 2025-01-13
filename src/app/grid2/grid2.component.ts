import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Import CUSTOM_ELEMENTS_SCHEMA
import { IgxGridModule } from 'igniteui-angular'; // Import the IgxGridModule
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Import RouterLink for routing

@Component({
  selector: 'app-grid2',
  standalone: true,
  imports: [IgxGridModule, CommonModule, RouterLink], // Add IgxGridModule to imports
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add CUSTOM_ELEMENTS_SCHEMA here
  template: `
    <h4>Sorting Grid</h4>
    <igx-grid [data]="data" [sortings]="[{ field: 'Name', dir: 1 }]">
      <igx-column field="ID" header="ID" [sortable]="true"></igx-column>
      <igx-column field="Name" header="Name" [sortable]="true"></igx-column>
       <igx-column field="Age" header="Age" [sortable]="true"></igx-column>
    </igx-grid>
  `,
})
export class Grid2Component {
  data = [
    { ID: 1, Name: 'Johnaaa', Age: 30 },
    { ID: 2, Name: 'Jane', Age: 25 },
    { ID: 3, Name: 'Jack', Age: 35 },
    { ID: 4, Name: 'Jill', Age: 28 },
    { ID: 5, Name: 'Joe', Age: 40 },
    { ID: 6, Name: 'James', Age: 45 },
    { ID: 7, Name: 'Jenny', Age: 22 },
    { ID: 8, Name: 'Jerry', Age: 38 },
  ];
}
