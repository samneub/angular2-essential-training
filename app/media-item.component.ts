import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  constructor( private mediaItemService: MediaItemService ) {}

  onDelete() {
    this.delete.emit(this.mediaItem);
  }

  onFavorite() {
    this.mediaItem.isFavorite = !this.mediaItem.isFavorite;
    this.mediaItemService.update(this.mediaItem)
      .subscribe(() => {});
  }
}
