import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, OnInit} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {Data} from './model/Data';
import {DATA_MOCK} from './model/DataMock';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  treeControl = new NestedTreeControl<Data>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Data>();

  constructor() {
    this.dataSource.data = DATA_MOCK;
  }

  ngOnInit(): void {
  }

  hasChild = (_: number, node: Data) => !!node.children && node.children.length > 0;

}
