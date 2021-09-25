import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonText = '';
  @Input() buttonVariant: 'primary' | 'secondary' = 'primary';
  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.click.emit();
  }

}
