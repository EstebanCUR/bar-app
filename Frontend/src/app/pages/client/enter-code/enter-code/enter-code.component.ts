import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.scss']
})
export class EnterCodeComponent implements OnInit {

  control = new FormControl('', [Validators.maxLength(2), Validators.required, Validators.max(10), Validators.pattern("^[0-9]*$")])

  constructor() { }

  ngOnInit(): void {
  }

}
