import { Component, OnInit } from '@angular/core';
import {UsersService} from '../v1/users.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: UsersService) {
  }

  ngOnInit() {
  }

 
}
