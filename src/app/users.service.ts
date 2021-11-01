import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [
    { name: 'A' },
    { name: 'B' },
    { name: 'C' }
  ]
  constructor() { }

}