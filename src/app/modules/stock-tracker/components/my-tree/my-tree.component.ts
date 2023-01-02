import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { RandomUserService } from '@stock-tracker/services/random-user.service';
import { RandomUser } from '@stock-tracker/models/randomuser.interface';

class Node {
  name!: string;
  children?: Node[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-my-tree',
  templateUrl: './my-tree.component.html',
  styleUrls: ['./my-tree.component.scss']
})
export class MyTreeComponent {
  private _transformer = (node: Node, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private randomUserService: RandomUserService) {
    this.randomUserService.getRandomUser().subscribe(response => {
      this.dataSource.data = this.buildFileTree(response, 0);
    });
  }

  buildFileTree(obj: {[key: string]: any}, level: number): Node[] {
    return Object.keys(obj).reduce<Node[]>((accumulator, key) => {
      const value = obj[key];
      const node = new Node();
      node.name = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.name = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
