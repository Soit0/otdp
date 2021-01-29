import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {Data} from './model/Data';
import {DATA_MOCK} from './model/DataMock';

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

import {AngularFireAuth} from '@angular/fire/auth';
import {log} from 'util';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnDestroy {
  treeControl = new NestedTreeControl<Data>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Data>();
  editor: any;
  content: any;
  currentUuid: number;


  constructor(public angularFireAuth: AngularFireAuth) {
    this.dataSource.data = DATA_MOCK;
    console.log(DATA_MOCK);
  }

  ngOnInit(): void {
    this.editor = new EditorJS({
      holder: 'editorjs',
      tools: {
        header: Header,
        list: List
      }
    });
  }

  ngOnDestroy(): void {

  }

  saveEditor(): void {
    this.editor.save().then((outputData) => {
      console.log('Article data: ', outputData);
      this.content = JSON.stringify(outputData);
      console.log('content : ', outputData);
      console.log(typeof this.content);
    }).catch((error) => {
      console.log('Saving failed: ', error);
    });
  }

  hasChild(_: number, node: Data): boolean {
    return node.children?.length > 0;
  }

  setCurrentFile(node: any): void {
    if (!this.hasChild(0, node)) {
      this.currentUuid = node.uuid;
      this.editor.isReady
        .then(() => {
          this.editor = new EditorJS({
            holder: 'editorjs',
            tools: {
              header: Header,
              list: List
            },
            data:
          });
          console.log('Editor.js is ready to work!');
          /** Do anything you need after editor initialization */
        })
        .catch((reason) => {
          console.log(`Editor.js initialization failed because of ${reason}`)
        });
    }
  }

  toggleReadOnly(): void {
    this.editor.readOnly.toggle();
  }
}

