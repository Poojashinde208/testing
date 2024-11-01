import {
  Mark,
  markInputRule,
  markPasteRule,
  mergeAttributes
} from "./chunk-A6PFEKUU.js";
import "./chunk-NEYRJIQJ.js";

// node_modules/@tiptap/extension-code/dist/index.js
var inputRegex = /(?:^|\s)(`(?!\s+`)((?:[^`]+))`(?!\s+`))$/;
var pasteRegex = /(?:^|\s)(`(?!\s+`)((?:[^`]+))`(?!\s+`))/g;
var Code = Mark.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: true,
  exitable: true,
  parseHTML() {
    return [{
      tag: "code"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["code", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setCode: () => ({
        commands
      }) => {
        return commands.setMark(this.name);
      },
      toggleCode: () => ({
        commands
      }) => {
        return commands.toggleMark(this.name);
      },
      unsetCode: () => ({
        commands
      }) => {
        return commands.unsetMark(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [markInputRule({
      find: inputRegex,
      type: this.type
    })];
  },
  addPasteRules() {
    return [markPasteRule({
      find: pasteRegex,
      type: this.type
    })];
  }
});
export {
  Code,
  Code as default,
  inputRegex,
  pasteRegex
};
//# sourceMappingURL=@tiptap_extension-code.js.map
