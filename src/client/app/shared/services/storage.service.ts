import {Injectable} from 'angular2/core';

@Injectable()
export class StorageService {

  constructor(private window: Window) {}

  put(key: string, value: any) {
    this.window.localStorage.setItem(key, value);
  }

  get(key): any {
    return this.window.localStorage.getItem(key);
  }
}
