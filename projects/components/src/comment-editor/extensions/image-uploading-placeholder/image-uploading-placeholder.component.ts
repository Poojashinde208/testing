import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularNodeViewComponent } from '../angular-node-view.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'emr-image-uploading-placeholder',
  standalone: true,
  imports: [
    MatProgressSpinner
  ],
  templateUrl: './image-uploading-placeholder.component.html',
  styleUrl: './image-uploading-placeholder.component.scss',
  host: {
    'class': 'emr-image-uploading-placeholder',
    '[class.selected]': 'selected'
  }
})
export class ImageUploadingPlaceholderComponent extends AngularNodeViewComponent implements OnInit, OnDestroy {
  protected src: string;
  private _canceled = false;

  ngOnInit() {
    const uploadFn = this.extension.options['uploadFn'];
    this.src = this.node.attrs['src'];
    const base64 = this.src.split(',')[1];
    const file = window.atob(base64);
    uploadFn(file).then((src: string) => {
      if (this._canceled) {
        return;
      }

      const image = new Image();
      image.src = src;
      image.onload = () => {
        this.editor.chain().focus().setImage({ src }).run();
      };
    });
  }

  ngOnDestroy() {
    this._canceled = true;
  }
}