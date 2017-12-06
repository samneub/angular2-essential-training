import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService {
  constructor(private http: Http) {}

  get(medium) {
    let searchParams = new URLSearchParams();
    searchParams.append('medium', medium);
    return this.http.get('mediaitems', { search: searchParams })
      .map(response => {
        console.log(response.json());
        return response.json().mediaItems;
      });
  }
  
  add(mediaItem) {
    return this.http.post('mediaitems', mediaItem)
      .map(response => {});
  }
  
  delete(mediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`)
      .map(response => {});
  }

  update(mediaItem) {
    return this.http.put('mediaitems', mediaItem)
      .map(response => {});
  }
}
