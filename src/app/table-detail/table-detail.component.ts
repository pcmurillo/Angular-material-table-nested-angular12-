import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableDetailComponent implements OnInit {

  isTableExpanded = false;


  dataStudentsList = new MatTableDataSource();
  displayedStudentsColumnsList: string[] = ['id', 'name', 'age', 'address', 'actions'];


  ngOnInit() {
    this.dataStudentsList.data = STUDENTS_DATA;
  }

  // Toggel Rows
  toggleTableRows() {
    this.isTableExpanded = !this.isTableExpanded;

    this.dataStudentsList.data.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    })
  }

}

const STUDENTS_DATA = [
  {
    "id": 1,
    "name": "Abby Jaskolski ",
    "age": 21,
    "address": 1.0079,
    "isExpanded": false,
    "subjects": [
      {
        "name": "Bio",
        "type": "Medical",
        "grade": "A"
      },
      {
        "name": "Chemistry",
        "type": "Medical",
        "grade": "A"
      },
      {
        "name": "Physics",
        "type": "Medical",
        "grade": "A"
      }
    ]
  },
  {
    "id": 2,
    "name": "Jabari Fritsch",
    "age": 20,
    "address": 1.0079,
    "isExpanded": false,
    "subjects": [
      {
        "name": "Bio",
        "type": "Medical",
        "grade": "A"
      },
      {
        "name": "Chemistry",
        "type": "Medical",
        "grade": "A"
      },
      {
        "name": "Physics",
        "type": "Medical",
        "grade": "A"
      }
    ]
  },
  {
    "id": 3,
    "name": "Maybell Simonis",
    "age": 21,
    "address": 1.0079,
    "isExpanded": false,
    "subjects": [
      {
        "name": "Bio",
        "type": "Medical",
        "grade": "A"
      },
      {
        "name": "Chemistry",
        "type": "Medical",
        "grade": "A"
      },
      {
        "name": "Physics",
        "type": "Medical",
        "grade": "A"
      }
    ]
  }
];
