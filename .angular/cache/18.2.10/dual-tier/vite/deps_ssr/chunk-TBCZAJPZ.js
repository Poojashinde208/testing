import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  __export,
  __spreadValues
} from "./chunk-LDODSSGN.js";

// node_modules/@dicebear/core/lib/utils/license.js
var license_exports = {};
__export(license_exports, {
  text: () => text,
  xml: () => xml2
});

// node_modules/@dicebear/core/lib/utils/escape.js
var escape_exports = {};
__export(escape_exports, {
  xml: () => xml
});
function xml(content) {
  return content.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// node_modules/@dicebear/core/lib/utils/license.js
function xml2(style) {
  var _a, _b, _c, _d, _e, _f, _g;
  const title = (_a = style.meta) === null || _a === void 0 ? void 0 : _a.title;
  const creator = (_b = style.meta) === null || _b === void 0 ? void 0 : _b.creator;
  const source = (_c = style.meta) === null || _c === void 0 ? void 0 : _c.source;
  const license = (_e = (_d = style.meta) === null || _d === void 0 ? void 0 : _d.license) === null || _e === void 0 ? void 0 : _e.url;
  const rights = text(style);
  if (!title && !creator && !source && !license && !rights) {
    return "";
  }
  return '<metadata xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/"><rdf:RDF><rdf:Description>' + (title ? `<dc:title>${xml(title)}</dc:title>` : "") + (creator ? `<dc:creator>${xml(creator)}</dc:creator>` : "") + (source ? `<dc:source xsi:type="dcterms:URI">${xml((_g = (_f = style.meta) === null || _f === void 0 ? void 0 : _f.source) !== null && _g !== void 0 ? _g : "")}</dc:source>` : "") + (license ? `<dcterms:license xsi:type="dcterms:URI">${xml(license)}</dcterms:license>` : "") + (rights ? `<dc:rights>${xml(rights)}</dc:rights>` : "") + "</rdf:Description></rdf:RDF></metadata>";
}
function text(style) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
  let title = ((_a = style.meta) === null || _a === void 0 ? void 0 : _a.title) ? `„${(_b = style.meta) === null || _b === void 0 ? void 0 : _b.title}”` : "Design";
  let creator = `„${(_d = (_c = style.meta) === null || _c === void 0 ? void 0 : _c.creator) !== null && _d !== void 0 ? _d : "Unknown"}”`;
  if ((_e = style.meta) === null || _e === void 0 ? void 0 : _e.source) {
    title += ` (${style.meta.source})`;
  }
  let result = "";
  if (((_g = (_f = style.meta) === null || _f === void 0 ? void 0 : _f.license) === null || _g === void 0 ? void 0 : _g.name) !== "MIT" && ((_h = style.meta) === null || _h === void 0 ? void 0 : _h.creator) !== "DiceBear" && ((_j = style.meta) === null || _j === void 0 ? void 0 : _j.title)) {
    result += "Remix of ";
  }
  result += `${title} by ${creator}`;
  if ((_l = (_k = style.meta) === null || _k === void 0 ? void 0 : _k.license) === null || _l === void 0 ? void 0 : _l.name) {
    result += `, licensed under „${(_o = (_m = style.meta) === null || _m === void 0 ? void 0 : _m.license) === null || _o === void 0 ? void 0 : _o.name}”`;
    if ((_q = (_p = style.meta) === null || _p === void 0 ? void 0 : _p.license) === null || _q === void 0 ? void 0 : _q.url) {
      result += ` (${style.meta.license.url})`;
    }
  }
  return result;
}

// node_modules/@dicebear/core/lib/utils/prng.js
var MIN = -2147483648;
var MAX = 2147483647;
function xorshift(value) {
  value ^= value << 13;
  value ^= value >> 17;
  value ^= value << 5;
  return value;
}
function hashSeed(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i) | 0;
    hash = xorshift(hash);
  }
  return hash;
}
function create(seed = "") {
  seed = seed.toString();
  let value = hashSeed(seed) || 1;
  const next = () => value = xorshift(value);
  const integer = (min, max) => {
    return Math.floor((next() - MIN) / (MAX - MIN) * (max + 1 - min) + min);
  };
  return {
    seed,
    next,
    bool(likelihood = 50) {
      return integer(1, 100) <= likelihood;
    },
    integer(min, max) {
      return integer(min, max);
    },
    pick(arr, fallback) {
      var _a;
      if (arr.length === 0) {
        next();
        return fallback;
      }
      return (_a = arr[integer(0, arr.length - 1)]) !== null && _a !== void 0 ? _a : fallback;
    },
    shuffle(arr) {
      const internalPrng = create(next().toString());
      const workingArray = [...arr];
      for (let i = workingArray.length - 1; i > 0; i--) {
        const j = internalPrng.integer(0, i);
        [workingArray[i], workingArray[j]] = [workingArray[j], workingArray[i]];
      }
      return workingArray;
    },
    string(length, characters = "abcdefghijklmnopqrstuvwxyz1234567890") {
      const internalPrng = create(next().toString());
      let str = "";
      for (let i = 0; i < length; i++) {
        str += characters[internalPrng.integer(0, characters.length - 1)];
      }
      return str;
    }
  };
}

// node_modules/@dicebear/core/lib/utils/svg.js
function getViewBox(result) {
  let viewBox = result.attributes["viewBox"].split(" ");
  let x = parseInt(viewBox[0]);
  let y = parseInt(viewBox[1]);
  let width = parseInt(viewBox[2]);
  let height = parseInt(viewBox[3]);
  return {
    x,
    y,
    width,
    height
  };
}
function addBackground(result, primaryColor, secondaryColor, type, rotation) {
  let {
    width,
    height,
    x,
    y
  } = getViewBox(result);
  const solidBackground = `<rect fill="${primaryColor}" width="${width}" height="${height}" x="${x}" y="${y}" />`;
  switch (type) {
    case "solid":
      return solidBackground + result.body;
    case "gradientLinear":
      return `<rect fill="url(#backgroundLinear)" width="${width}" height="${height}" x="${x}" y="${y}" /><defs><linearGradient id="backgroundLinear" gradientTransform="rotate(${rotation} 0.5 0.5)"><stop stop-color="${primaryColor}"/><stop offset="1" stop-color="${secondaryColor}"/></linearGradient></defs>` + result.body;
  }
}
function addScale(result, scale) {
  let {
    width,
    height,
    x,
    y
  } = getViewBox(result);
  let percent = scale ? (scale - 100) / 100 : 0;
  let translateX = (width / 2 + x) * percent * -1;
  let translateY = (height / 2 + y) * percent * -1;
  return `<g transform="translate(${translateX} ${translateY}) scale(${scale / 100})">${result.body}</g>`;
}
function addTranslate(result, x, y) {
  let viewBox = getViewBox(result);
  let translateX = (viewBox.width + viewBox.x * 2) * ((x !== null && x !== void 0 ? x : 0) / 100);
  let translateY = (viewBox.height + viewBox.y * 2) * ((y !== null && y !== void 0 ? y : 0) / 100);
  return `<g transform="translate(${translateX} ${translateY})">${result.body}</g>`;
}
function addRotate(result, rotate) {
  let {
    width,
    height,
    x,
    y
  } = getViewBox(result);
  return `<g transform="rotate(${rotate}, ${width / 2 + x}, ${height / 2 + y})">${result.body}</g>`;
}
function addFlip(result) {
  let {
    width,
    x
  } = getViewBox(result);
  return `<g transform="scale(-1 1) translate(${width * -1 - x * 2} 0)">${result.body}</g>`;
}
function addViewboxMask(result, radius) {
  let {
    width,
    height,
    x,
    y
  } = getViewBox(result);
  let rx = radius ? width * radius / 100 : 0;
  let ry = radius ? height * radius / 100 : 0;
  return `<mask id="viewboxMask"><rect width="${width}" height="${height}" rx="${rx}" ry="${ry}" x="${x}" y="${y}" fill="#fff" /></mask><g mask="url(#viewboxMask)">${result.body}</g>`;
}
function createAttrString(result) {
  const attributes = __spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, result.attributes);
  return Object.keys(attributes).map((attr) => `${xml(attr)}="${xml(attributes[attr])}"`).join(" ");
}
function randomizeIds(result) {
  const prng = create(Math.random().toString());
  const ids = {};
  return result.body.replace(/(id="|url\(#)([a-z0-9-_]+)([")])/gi, (match, m1, m2, m3) => {
    ids[m2] = ids[m2] || prng.string(8);
    return `${m1}${ids[m2]}${m3}`;
  });
}

// node_modules/@dicebear/core/lib/schema.js
var schema = {
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    seed: {
      type: "string"
    },
    flip: {
      type: "boolean",
      default: false
    },
    rotate: {
      type: "integer",
      minimum: 0,
      maximum: 360,
      default: 0
    },
    scale: {
      type: "integer",
      minimum: 0,
      maximum: 200,
      default: 100
    },
    radius: {
      type: "integer",
      minimum: 0,
      maximum: 50,
      default: 0
    },
    size: {
      type: "integer",
      minimum: 1
    },
    backgroundColor: {
      type: "array",
      items: {
        type: "string",
        pattern: "^(transparent|[a-fA-F0-9]{6})$"
      }
    },
    backgroundType: {
      type: "array",
      items: {
        type: "string",
        enum: ["solid", "gradientLinear"]
      },
      default: ["solid"]
    },
    backgroundRotation: {
      type: "array",
      items: {
        type: "integer",
        minimum: -360,
        maximum: 360
      },
      default: [0, 360]
    },
    translateX: {
      type: "integer",
      minimum: -100,
      maximum: 100,
      default: 0
    },
    translateY: {
      type: "integer",
      minimum: -100,
      maximum: 100,
      default: 0
    },
    clip: {
      type: "boolean",
      default: true
    },
    randomizeIds: {
      type: "boolean",
      default: false
    }
  }
};

// node_modules/@dicebear/core/lib/utils/options.js
function defaults(schema2) {
  var _a;
  let result = {};
  let props = (_a = schema2.properties) !== null && _a !== void 0 ? _a : {};
  Object.keys(props).forEach((key) => {
    let val = props[key];
    if (typeof val === "object" && void 0 !== val.default) {
      if (Array.isArray(val.default)) {
        result[key] = [...val.default];
      } else if (typeof val.default === "object") {
        result[key] = __spreadValues({}, val.default);
      } else {
        result[key] = val.default;
      }
    }
  });
  return result;
}
function merge(style, options) {
  var _a;
  let result = __spreadValues(__spreadValues(__spreadValues({}, defaults(schema)), defaults((_a = style.schema) !== null && _a !== void 0 ? _a : {})), options);
  return JSON.parse(JSON.stringify(result));
}

// node_modules/@dicebear/core/lib/utils/color.js
function convertColor(color) {
  return "transparent" === color ? color : `#${color}`;
}
function getBackgroundColors(prng, backgroundColor, backgroundType) {
  var _a;
  let shuffledBackgroundColors = prng.shuffle(backgroundColor);
  if (shuffledBackgroundColors.length <= 1) {
    shuffledBackgroundColors = backgroundColor;
    prng.next();
  } else if (backgroundColor.length == 2 && backgroundType == "gradientLinear") {
    shuffledBackgroundColors = backgroundColor;
    prng.next();
  } else {
    shuffledBackgroundColors = prng.shuffle(backgroundColor);
  }
  if (shuffledBackgroundColors.length === 0) {
    shuffledBackgroundColors = ["transparent"];
  }
  const primary = shuffledBackgroundColors[0];
  const secondary = (_a = shuffledBackgroundColors[1]) !== null && _a !== void 0 ? _a : shuffledBackgroundColors[0];
  return {
    primary: convertColor(primary),
    secondary: convertColor(secondary)
  };
}

// node_modules/@dicebear/core/lib/core.js
function createAvatar(style, options = {}) {
  var _a, _b, _c, _d, _e;
  options = merge(style, options);
  const prng = create(options.seed);
  const result = style.create({
    prng,
    options
  });
  const backgroundType = prng.pick((_a = options.backgroundType) !== null && _a !== void 0 ? _a : [], "solid");
  const {
    primary: primaryBackgroundColor,
    secondary: secondaryBackgroundColor
  } = getBackgroundColors(prng, (_b = options.backgroundColor) !== null && _b !== void 0 ? _b : [], backgroundType);
  const backgroundRotation = prng.integer(((_c = options.backgroundRotation) === null || _c === void 0 ? void 0 : _c.length) ? Math.min(...options.backgroundRotation) : 0, ((_d = options.backgroundRotation) === null || _d === void 0 ? void 0 : _d.length) ? Math.max(...options.backgroundRotation) : 0);
  if (options.size) {
    result.attributes.width = options.size.toString();
    result.attributes.height = options.size.toString();
  }
  if (options.scale !== void 0 && options.scale !== 100) {
    result.body = addScale(result, options.scale);
  }
  if (options.flip) {
    result.body = addFlip(result);
  }
  if (options.rotate) {
    result.body = addRotate(result, options.rotate);
  }
  if (options.translateX || options.translateY) {
    result.body = addTranslate(result, options.translateX, options.translateY);
  }
  if (primaryBackgroundColor !== "transparent" && secondaryBackgroundColor !== "transparent") {
    result.body = addBackground(result, primaryBackgroundColor, secondaryBackgroundColor, backgroundType, backgroundRotation);
  }
  if (options.radius || options.clip) {
    result.body = addViewboxMask(result, (_e = options.radius) !== null && _e !== void 0 ? _e : 0);
  }
  if (options.randomizeIds) {
    result.body = randomizeIds(result);
  }
  const attributes = createAttrString(result);
  const metadata = xml2(style);
  const svg = `<svg ${attributes}>${metadata}${result.body}</svg>`;
  return {
    toString: () => svg,
    toJson: () => {
      var _a2;
      return {
        svg,
        extra: __spreadValues({
          primaryBackgroundColor,
          secondaryBackgroundColor,
          backgroundType,
          backgroundRotation
        }, (_a2 = result.extra) === null || _a2 === void 0 ? void 0 : _a2.call(result))
      };
    },
    toDataUri: () => {
      return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    }
  };
}

export {
  escape_exports,
  license_exports,
  schema,
  createAvatar
};
/*! Bundled license information:

@dicebear/core/lib/index.js:
  (*!
   * DiceBear (@dicebear/core)
   *
   * Code licensed under MIT (https://github.com/dicebear/dicebear/blob/main/LICENSE)
   * Copyright (c) 2024 Florian Körner
   *)
*/
//# sourceMappingURL=chunk-TBCZAJPZ.js.map
