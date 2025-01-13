import { Component } from '@angular/core';
import { IgxGridModule } from 'igniteui-angular';

interface RowData {
  ID: number;
  Name: string;
  Age: number;
}

@Component({
  selector: 'app-grid4',
  standalone: true,
  imports: [IgxGridModule],
  template: `
    <h4>Editing Grid: you can only edit name and age </h4>
    <igx-grid 
      [data]="data" 
      [autoGenerate]="false" 
      [height]="'500px'" 
      (onEditDone)="onEditDone($event)">
      <igx-column field="ID" header="ID" [editable]="false"></igx-column>
      <igx-column field="Name" header="Name" [editable]="true"></igx-column>
      <igx-column field="Age" header="Age" [editable]="true"></igx-column>
    </igx-grid>
  `,
})
export class Grid4Component {
  // Strictly type the data array as an array of RowData objects
  data: RowData[] = [
    { ID: 1, Name: 'John', Age: 30 },
    { ID: 2, Name: 'Jane', Age: 25 },
    { ID: 3, Name: 'Jack', Age: 35 },
    { ID: 4, Name: 'Jill', Age: 28 },
    { ID: 5, Name: 'Joe', Age: 40 },
    { ID: 6, Name: 'James', Age: 45 },
    { ID: 7, Name: 'Jenny', Age: 22 },
    { ID: 8, Name: 'Jerry', Age: 38 },
  ];

  // Handle the event when editing is done
  onEditDone(event: any) {
    const updatedData = event.newValue;
    const field = event.column.field as keyof RowData;
    const rowIndex = event.rowIndex;

    // Update the corresponding field in the data array
    (this.data[rowIndex] as any)[field] = updatedData;
  }
  
}
