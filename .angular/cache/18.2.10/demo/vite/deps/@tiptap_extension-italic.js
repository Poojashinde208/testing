import {
  Mark,
  markInputRule,
  markPasteRule,
  mergeAttributes
} from "./chunk-A6PFEKUU.js";
import "./chunk-NEYRJIQJ.js";

// node_modules/@tiptap/extension-italic/dist/index.js
var starInputRegex = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/;
var starPasteRegex = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g;
var underscoreInputRegex = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/;
var underscorePasteRegex = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g;
var Italic = Mark.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{
      tag: "em"
    }, {
      tag: "i",
      getAttrs: (node) => node.style.fontStyle !== "normal" && null
    }, {
      style: "font-style=italic"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["em", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({
        commands
      }) => {
        return commands.setMark(this.name);
      },
      toggleItalic: () => ({
        commands
      }) => {
        return commands.toggleMark(this.name);
      },
      unsetItalic: () => ({
        commands
      }) => {
        return commands.unsetMark(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [markInputRule({
      find: starInputRegex,
      type: this.type
    }), markInputRule({
      find: underscoreInputRegex,
      type: this.type
    })];
  },
  addPasteRules() {
    return [markPasteRule({
      find: starPasteRegex,
      type: this.type
    }), markPasteRule({
      find: underscorePasteRegex,
      type: this.type
    })];
  }
});
export {
  Italic,
  Italic as default,
  starInputRegex,
  starPasteRegex,
  underscoreInputRegex,
  underscorePasteRegex
};
//# sourceMappingURL=@tiptap_extension-italic.js.map
