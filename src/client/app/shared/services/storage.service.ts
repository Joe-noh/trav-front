import {Injectable} from 'angular2/core';

@Injectable()
export class StorageService {
  put(key: string, value: any) {
    window.localStorage.setItem(key, value);
  }

  get(key): any {
    return window.localStorage.getItem(key);
  }
}
