import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Node,
  mergeAttributes
} from "./chunk-YPTL5VOL.js";
import "./chunk-WL4XZBWR.js";

// node_modules/@tiptap/extension-list-item/dist/index.js
var ListItem = Node.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: true,
  parseHTML() {
    return [{
      tag: "li"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["li", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
});
export {
  ListItem,
  ListItem as default
};
//# sourceMappingURL=@tiptap_extension-list-item.js.map
