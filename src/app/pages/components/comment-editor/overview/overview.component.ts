import { Component } from '@angular/core';
import {
  BasicCommandBarExampleComponent
} from '../../command-bar/_examples/basic-command-bar-example/basic-command-bar-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicCommentEditorExampleComponent
} from '../_examples/basic-comment-editor-example/basic-comment-editor-example.component';
import {
  CommentEditorWithToolbarExampleComponent
} from '../_examples/comment-editor-with-toolbar-example/comment-editor-with-toolbar-example.component';
import {
  CommentEditorWithFullViewModeExampleComponent
} from '../_examples/comment-editor-with-full-view-mode-example/comment-editor-with-full-view-mode-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    BasicCommandBarExampleComponent,
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicCommentEditorExampleComponent,
    CommentEditorWithToolbarExampleComponent,
    CommentEditorWithFullViewModeExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
