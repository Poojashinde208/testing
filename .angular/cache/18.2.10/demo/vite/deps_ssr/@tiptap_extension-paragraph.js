import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Node,
  mergeAttributes
} from "./chunk-YPTL5VOL.js";
import "./chunk-WL4XZBWR.js";

// node_modules/@tiptap/extension-paragraph/dist/index.js
var Paragraph = Node.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [{
      tag: "p"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["p", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({
        commands
      }) => {
        return commands.setNode(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
});
export {
  Paragraph,
  Paragraph as default
};
//# sourceMappingURL=@tiptap_extension-paragraph.js.map
