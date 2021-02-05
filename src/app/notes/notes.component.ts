import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {TreeNode} from './model/TreeNode';
import {TREE_MOCK} from './mock/TreeMock';
import {DOCUMENT_LIST_MOCK} from './mock/NoteListMock';

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

import {AngularFireAuth} from '@angular/fire/auth';
import {Note} from './model/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnDestroy {
  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();
  editor: any;
  editorContent: any;
  currentUid: string;
  selectedDocument: Note;
  selectedDocumentStringified: string;


  constructor(public angularFireAuth: AngularFireAuth) {
    this.dataSource.data = TREE_MOCK;
    console.log(TREE_MOCK);
  }

  ngOnInit(): void {
    this.editor = new EditorJS({
      holder: 'editorjs',
      tools: {
        header: Header,
        list: List
      },
      placeholder: 'Let`s write an awesome story!',
      data: (DOCUMENT_LIST_MOCK.find(document => document.uid === '111')).data
      // TODO: create readOnlyMode
    });
  }

  ngOnDestroy(): void {

  }

  saveEditor(): void {
    this.editor.save().then((outputData) => {
      console.log('Article data: ', outputData);
      this.editorContent = JSON.stringify(outputData);
    }).catch((error) => {
      console.log('Saving failed: ', error);
    });
  }

  hasChild(_: number, node: TreeNode): boolean {
    return node.children?.length > 0;
  }

  setCurrentFile(node: any): void {
    if (!this.hasChild(0, node)) {
      this.currentUid = node.uid;
      this.selectedDocument = DOCUMENT_LIST_MOCK.find(document => document.uid === this.currentUid);
      this.selectedDocumentStringified = JSON.stringify(this.selectedDocument.data.blocks);
      this.editor.block.render({
        blocks: this.selectedDocument
      });
    }
  }

  toggleReadOnly(): void {
    this.editor.readOnly.toggle();
  }
}

