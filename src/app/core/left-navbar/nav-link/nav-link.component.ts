import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
})
export class NavLinkComponent implements OnInit {
  @Input()
  link!: string;

  @Input()
  title!: string;

  @Input()
  icon!: string;

  constructor() {}

  ngOnInit(): void {}
}
