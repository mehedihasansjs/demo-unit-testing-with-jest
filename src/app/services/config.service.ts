import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getApiUrl() {
    return "https://api.github.com";
  }
}
