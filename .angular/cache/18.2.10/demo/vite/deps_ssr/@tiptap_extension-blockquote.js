import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Node,
  mergeAttributes,
  wrappingInputRule
} from "./chunk-YPTL5VOL.js";
import "./chunk-WL4XZBWR.js";

// node_modules/@tiptap/extension-blockquote/dist/index.js
var inputRegex = /^\s*>\s$/;
var Blockquote = Node.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: true,
  parseHTML() {
    return [{
      tag: "blockquote"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["blockquote", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({
        commands
      }) => {
        return commands.wrapIn(this.name);
      },
      toggleBlockquote: () => ({
        commands
      }) => {
        return commands.toggleWrap(this.name);
      },
      unsetBlockquote: () => ({
        commands
      }) => {
        return commands.lift(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [wrappingInputRule({
      find: inputRegex,
      type: this.type
    })];
  }
});
export {
  Blockquote,
  Blockquote as default,
  inputRegex
};
//# sourceMappingURL=@tiptap_extension-blockquote.js.map
