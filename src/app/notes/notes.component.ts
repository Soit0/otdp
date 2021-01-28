import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {Data} from './model/Data';
import {DATA_MOCK} from './model/DataMock';

import EditorJS from '@editorjs/editorjs';

import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnDestroy  {
  treeControl = new NestedTreeControl<Data>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Data>();


  constructor(public angularFireAuth: AngularFireAuth) {
    this.dataSource.data = DATA_MOCK;
    console.log(DATA_MOCK);  }

  ngOnInit(): void {
    const editor = new EditorJS('editorjs');
  }

  ngOnDestroy(): void {

  }
  saveEditor(): void {

}

  hasChild = (_: number, node: Data) => !!node.children && node.children.length > 0;

}

