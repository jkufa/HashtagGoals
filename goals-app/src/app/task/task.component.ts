import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit {
  @Input() title: string = '';
  @Input() subitle: string = '';
  isDone: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
