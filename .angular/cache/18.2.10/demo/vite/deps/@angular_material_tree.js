import {
  CDK_TREE_NODE_OUTLET_NODE,
  CdkNestedTreeNode,
  CdkTree,
  CdkTreeModule,
  CdkTreeNode,
  CdkTreeNodeDef,
  CdkTreeNodeOutlet,
  CdkTreeNodePadding,
  CdkTreeNodeToggle
} from "./chunk-LHMX7Y3F.js";
import {
  MatCommonModule
} from "./chunk-CL3AVGCT.js";
import "./chunk-Q3ORPOUC.js";
import "./chunk-IMCTWWZW.js";
import {
  DataSource
} from "./chunk-GFORZQW3.js";
import "./chunk-2I3EKJ2U.js";
import "./chunk-KJGUM6FH.js";
import "./chunk-TW3USIDQ.js";
import "./chunk-R3PUTU7J.js";
import "./chunk-IOSFBF5K.js";
import {
  Attribute,
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Inject,
  Input,
  IterableDiffers,
  NgModule,
  Optional,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-BJHOPU5P.js";
import {
  merge
} from "./chunk-O6VDDHVS.js";
import "./chunk-IXUSS67I.js";
import {
  BehaviorSubject,
  map,
  take
} from "./chunk-BONRK7YY.js";
import "./chunk-NEYRJIQJ.js";

// node_modules/@angular/material/fesm2022/tree.mjs
function isNoopTreeKeyManager(keyManager) {
  return !!keyManager._isNoopTreeKeyManager;
}
var MatTreeNode = class _MatTreeNode extends CdkTreeNode {
  /**
   * The tabindex of the tree node.
   *
   * @deprecated By default MatTreeNode manages focus using TreeKeyManager instead of tabIndex.
   *   Recommend to avoid setting tabIndex directly to prevent TreeKeyManager form getting into
   *   an unexpected state. Tabindex to be removed in a future version.
   * @breaking-change 21.0.0 Remove this attribute.
   */
  get tabIndexInputBinding() {
    return this._tabIndexInputBinding;
  }
  set tabIndexInputBinding(value) {
    this._tabIndexInputBinding = value;
  }
  _getTabindexAttribute() {
    if (isNoopTreeKeyManager(this._tree._keyManager)) {
      return this.tabIndexInputBinding;
    }
    return this._tabindex;
  }
  /**
   * Whether the component is disabled.
   *
   * @deprecated This is an alias for `isDisabled`.
   * @breaking-change 21.0.0 Remove this input
   */
  get disabled() {
    return this.isDisabled;
  }
  set disabled(value) {
    this.isDisabled = value;
  }
  constructor(elementRef, tree, tabIndex) {
    super(elementRef, tree);
    this.defaultTabIndex = 0;
    this.tabIndexInputBinding = Number(tabIndex) || this.defaultTabIndex;
  }
  // This is a workaround for https://github.com/angular/angular/issues/23091
  // In aot mode, the lifecycle hooks from parent class are not called.
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.ɵfac = function MatTreeNode_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTreeNode)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CdkTree), ɵɵinjectAttribute("tabindex"));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MatTreeNode,
      selectors: [["mat-tree-node"]],
      hostAttrs: [1, "mat-tree-node"],
      hostVars: 5,
      hostBindings: function MatTreeNode_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function MatTreeNode_click_HostBindingHandler() {
            return ctx._focusItem();
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("tabindex", ctx._getTabindexAttribute());
          ɵɵattribute("aria-expanded", ctx._getAriaExpanded())("aria-level", ctx.level + 1)("aria-posinset", ctx._getPositionInSet())("aria-setsize", ctx._getSetSize());
        }
      },
      inputs: {
        tabIndexInputBinding: [2, "tabIndex", "tabIndexInputBinding", (value) => value == null ? 0 : numberAttribute(value)],
        disabled: [2, "disabled", "disabled", booleanAttribute]
      },
      outputs: {
        activation: "activation",
        expandedChange: "expandedChange"
      },
      exportAs: ["matTreeNode"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkTreeNode,
        useExisting: _MatTreeNode
      }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeNode, [{
    type: Directive,
    args: [{
      selector: "mat-tree-node",
      exportAs: "matTreeNode",
      outputs: ["activation", "expandedChange"],
      providers: [{
        provide: CdkTreeNode,
        useExisting: MatTreeNode
      }],
      host: {
        "class": "mat-tree-node",
        "[attr.aria-expanded]": "_getAriaExpanded()",
        "[attr.aria-level]": "level + 1",
        "[attr.aria-posinset]": "_getPositionInSet()",
        "[attr.aria-setsize]": "_getSetSize()",
        "(click)": "_focusItem()",
        "[tabindex]": "_getTabindexAttribute()"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: CdkTree
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }], {
    tabIndexInputBinding: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value),
        alias: "tabIndex"
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatTreeNodeDef = class _MatTreeNodeDef extends CdkTreeNodeDef {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵMatTreeNodeDef_BaseFactory;
      return function MatTreeNodeDef_Factory(__ngFactoryType__) {
        return (ɵMatTreeNodeDef_BaseFactory || (ɵMatTreeNodeDef_BaseFactory = ɵɵgetInheritedFactory(_MatTreeNodeDef)))(__ngFactoryType__ || _MatTreeNodeDef);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MatTreeNodeDef,
      selectors: [["", "matTreeNodeDef", ""]],
      inputs: {
        when: [0, "matTreeNodeDefWhen", "when"],
        data: [0, "matTreeNode", "data"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkTreeNodeDef,
        useExisting: _MatTreeNodeDef
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeNodeDef, [{
    type: Directive,
    args: [{
      selector: "[matTreeNodeDef]",
      inputs: [{
        name: "when",
        alias: "matTreeNodeDefWhen"
      }],
      providers: [{
        provide: CdkTreeNodeDef,
        useExisting: MatTreeNodeDef
      }],
      standalone: true
    }]
  }], null, {
    data: [{
      type: Input,
      args: ["matTreeNode"]
    }]
  });
})();
var MatNestedTreeNode = class _MatNestedTreeNode extends CdkNestedTreeNode {
  /**
   * Whether the node is disabled.
   *
   * @deprecated This is an alias for `isDisabled`.
   * @breaking-change 21.0.0 Remove this input
   */
  get disabled() {
    return this.isDisabled;
  }
  set disabled(value) {
    this.isDisabled = value;
  }
  /** Tabindex of the node. */
  get tabIndex() {
    return this.isDisabled ? -1 : this._tabIndex;
  }
  set tabIndex(value) {
    this._tabIndex = value;
  }
  constructor(elementRef, tree, differs, tabIndex) {
    super(elementRef, tree, differs);
  }
  // This is a workaround for https://github.com/angular/angular/issues/19145
  // In aot mode, the lifecycle hooks from parent class are not called.
  // TODO(tinayuangao): Remove when the angular issue #19145 is fixed
  ngOnInit() {
    super.ngOnInit();
  }
  ngAfterContentInit() {
    super.ngAfterContentInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.ɵfac = function MatNestedTreeNode_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatNestedTreeNode)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CdkTree), ɵɵdirectiveInject(IterableDiffers), ɵɵinjectAttribute("tabindex"));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MatNestedTreeNode,
      selectors: [["mat-nested-tree-node"]],
      hostAttrs: [1, "mat-nested-tree-node"],
      inputs: {
        node: [0, "matNestedTreeNode", "node"],
        disabled: [2, "disabled", "disabled", booleanAttribute],
        tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)]
      },
      outputs: {
        activation: "activation",
        expandedChange: "expandedChange"
      },
      exportAs: ["matNestedTreeNode"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkNestedTreeNode,
        useExisting: _MatNestedTreeNode
      }, {
        provide: CdkTreeNode,
        useExisting: _MatNestedTreeNode
      }, {
        provide: CDK_TREE_NODE_OUTLET_NODE,
        useExisting: _MatNestedTreeNode
      }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNestedTreeNode, [{
    type: Directive,
    args: [{
      selector: "mat-nested-tree-node",
      exportAs: "matNestedTreeNode",
      outputs: ["activation", "expandedChange"],
      providers: [{
        provide: CdkNestedTreeNode,
        useExisting: MatNestedTreeNode
      }, {
        provide: CdkTreeNode,
        useExisting: MatNestedTreeNode
      }, {
        provide: CDK_TREE_NODE_OUTLET_NODE,
        useExisting: MatNestedTreeNode
      }],
      host: {
        "class": "mat-nested-tree-node"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: CdkTree
  }, {
    type: IterableDiffers
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }], {
    node: [{
      type: Input,
      args: ["matNestedTreeNode"]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }]
  });
})();
var MatTreeNodePadding = class _MatTreeNodePadding extends CdkTreeNodePadding {
  /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
  get level() {
    return this._level;
  }
  set level(value) {
    this._setLevelInput(value);
  }
  /** The indent for each level. Default number 40px from material design menu sub-menu spec. */
  get indent() {
    return this._indent;
  }
  set indent(indent) {
    this._setIndentInput(indent);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵMatTreeNodePadding_BaseFactory;
      return function MatTreeNodePadding_Factory(__ngFactoryType__) {
        return (ɵMatTreeNodePadding_BaseFactory || (ɵMatTreeNodePadding_BaseFactory = ɵɵgetInheritedFactory(_MatTreeNodePadding)))(__ngFactoryType__ || _MatTreeNodePadding);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MatTreeNodePadding,
      selectors: [["", "matTreeNodePadding", ""]],
      inputs: {
        level: [2, "matTreeNodePadding", "level", numberAttribute],
        indent: [0, "matTreeNodePaddingIndent", "indent"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkTreeNodePadding,
        useExisting: _MatTreeNodePadding
      }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeNodePadding, [{
    type: Directive,
    args: [{
      selector: "[matTreeNodePadding]",
      providers: [{
        provide: CdkTreeNodePadding,
        useExisting: MatTreeNodePadding
      }],
      standalone: true
    }]
  }], null, {
    level: [{
      type: Input,
      args: [{
        alias: "matTreeNodePadding",
        transform: numberAttribute
      }]
    }],
    indent: [{
      type: Input,
      args: ["matTreeNodePaddingIndent"]
    }]
  });
})();
var MatTreeNodeOutlet = class _MatTreeNodeOutlet {
  constructor(viewContainer, _node) {
    this.viewContainer = viewContainer;
    this._node = _node;
  }
  static {
    this.ɵfac = function MatTreeNodeOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTreeNodeOutlet)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(CDK_TREE_NODE_OUTLET_NODE, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MatTreeNodeOutlet,
      selectors: [["", "matTreeNodeOutlet", ""]],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkTreeNodeOutlet,
        useExisting: _MatTreeNodeOutlet
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeNodeOutlet, [{
    type: Directive,
    args: [{
      selector: "[matTreeNodeOutlet]",
      providers: [{
        provide: CdkTreeNodeOutlet,
        useExisting: MatTreeNodeOutlet
      }],
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TREE_NODE_OUTLET_NODE]
    }, {
      type: Optional
    }]
  }], null);
})();
var MatTree = class _MatTree extends CdkTree {
  constructor() {
    super(...arguments);
    this._nodeOutlet = void 0;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵMatTree_BaseFactory;
      return function MatTree_Factory(__ngFactoryType__) {
        return (ɵMatTree_BaseFactory || (ɵMatTree_BaseFactory = ɵɵgetInheritedFactory(_MatTree)))(__ngFactoryType__ || _MatTree);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MatTree,
      selectors: [["mat-tree"]],
      viewQuery: function MatTree_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(MatTreeNodeOutlet, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._nodeOutlet = _t.first);
        }
      },
      hostAttrs: [1, "mat-tree"],
      exportAs: ["matTree"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkTree,
        useExisting: _MatTree
      }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 1,
      vars: 0,
      consts: [["matTreeNodeOutlet", ""]],
      template: function MatTree_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementContainer(0, 0);
        }
      },
      dependencies: [MatTreeNodeOutlet],
      styles: [".mat-tree{display:block;background-color:var(--mat-tree-container-background-color, var(--mat-app-surface))}.mat-tree-node,.mat-nested-tree-node{color:var(--mat-tree-node-text-color, var(--mat-app-on-surface));font-family:var(--mat-tree-node-text-font, var(--mat-app-body-large-font));font-size:var(--mat-tree-node-text-size, var(--mat-app-body-large-size));font-weight:var(--mat-tree-node-text-weight, var(--mat-app-body-large-weight))}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word;min-height:var(--mat-tree-node-min-height)}.mat-nested-tree-node{border-bottom-width:0}"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTree, [{
    type: Component,
    args: [{
      selector: "mat-tree",
      exportAs: "matTree",
      template: `<ng-container matTreeNodeOutlet></ng-container>`,
      host: {
        "class": "mat-tree"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [{
        provide: CdkTree,
        useExisting: MatTree
      }],
      standalone: true,
      imports: [MatTreeNodeOutlet],
      styles: [".mat-tree{display:block;background-color:var(--mat-tree-container-background-color, var(--mat-app-surface))}.mat-tree-node,.mat-nested-tree-node{color:var(--mat-tree-node-text-color, var(--mat-app-on-surface));font-family:var(--mat-tree-node-text-font, var(--mat-app-body-large-font));font-size:var(--mat-tree-node-text-size, var(--mat-app-body-large-size));font-weight:var(--mat-tree-node-text-weight, var(--mat-app-body-large-weight))}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word;min-height:var(--mat-tree-node-min-height)}.mat-nested-tree-node{border-bottom-width:0}"]
    }]
  }], null, {
    _nodeOutlet: [{
      type: ViewChild,
      args: [MatTreeNodeOutlet, {
        static: true
      }]
    }]
  });
})();
var MatTreeNodeToggle = class _MatTreeNodeToggle extends CdkTreeNodeToggle {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵMatTreeNodeToggle_BaseFactory;
      return function MatTreeNodeToggle_Factory(__ngFactoryType__) {
        return (ɵMatTreeNodeToggle_BaseFactory || (ɵMatTreeNodeToggle_BaseFactory = ɵɵgetInheritedFactory(_MatTreeNodeToggle)))(__ngFactoryType__ || _MatTreeNodeToggle);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MatTreeNodeToggle,
      selectors: [["", "matTreeNodeToggle", ""]],
      inputs: {
        recursive: [0, "matTreeNodeToggleRecursive", "recursive"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkTreeNodeToggle,
        useExisting: _MatTreeNodeToggle
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeNodeToggle, [{
    type: Directive,
    args: [{
      selector: "[matTreeNodeToggle]",
      providers: [{
        provide: CdkTreeNodeToggle,
        useExisting: MatTreeNodeToggle
      }],
      inputs: [{
        name: "recursive",
        alias: "matTreeNodeToggleRecursive"
      }],
      standalone: true
    }]
  }], null, null);
})();
var MAT_TREE_DIRECTIVES = [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet];
var MatTreeModule = class _MatTreeModule {
  static {
    this.ɵfac = function MatTreeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTreeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _MatTreeModule,
      imports: [CdkTreeModule, MatCommonModule, MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet],
      exports: [MatCommonModule, MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CdkTreeModule, MatCommonModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeModule, [{
    type: NgModule,
    args: [{
      imports: [CdkTreeModule, MatCommonModule, ...MAT_TREE_DIRECTIVES],
      exports: [MatCommonModule, MAT_TREE_DIRECTIVES]
    }]
  }], null, null);
})();
var MatTreeFlattener = class {
  constructor(transformFunction, getLevel, isExpandable, getChildren) {
    this.transformFunction = transformFunction;
    this.getLevel = getLevel;
    this.isExpandable = isExpandable;
    this.getChildren = getChildren;
  }
  _flattenNode(node, level, resultNodes, parentMap) {
    const flatNode = this.transformFunction(node, level);
    resultNodes.push(flatNode);
    if (this.isExpandable(flatNode)) {
      const childrenNodes = this.getChildren(node);
      if (childrenNodes) {
        if (Array.isArray(childrenNodes)) {
          this._flattenChildren(childrenNodes, level, resultNodes, parentMap);
        } else {
          childrenNodes.pipe(take(1)).subscribe((children) => {
            this._flattenChildren(children, level, resultNodes, parentMap);
          });
        }
      }
    }
    return resultNodes;
  }
  _flattenChildren(children, level, resultNodes, parentMap) {
    children.forEach((child, index) => {
      let childParentMap = parentMap.slice();
      childParentMap.push(index != children.length - 1);
      this._flattenNode(child, level + 1, resultNodes, childParentMap);
    });
  }
  /**
   * Flatten a list of node type T to flattened version of node F.
   * Please note that type T may be nested, and the length of `structuredData` may be different
   * from that of returned list `F[]`.
   */
  flattenNodes(structuredData) {
    let resultNodes = [];
    structuredData.forEach((node) => this._flattenNode(node, 0, resultNodes, []));
    return resultNodes;
  }
  /**
   * Expand flattened node with current expansion status.
   * The returned list may have different length.
   */
  expandFlattenedNodes(nodes, treeControl) {
    let results = [];
    let currentExpand = [];
    currentExpand[0] = true;
    nodes.forEach((node) => {
      let expand = true;
      for (let i = 0; i <= this.getLevel(node); i++) {
        expand = expand && currentExpand[i];
      }
      if (expand) {
        results.push(node);
      }
      if (this.isExpandable(node)) {
        currentExpand[this.getLevel(node) + 1] = treeControl.isExpanded(node);
      }
    });
    return results;
  }
};
var MatTreeFlatDataSource = class extends DataSource {
  get data() {
    return this._data.value;
  }
  set data(value) {
    this._data.next(value);
    this._flattenedData.next(this._treeFlattener.flattenNodes(this.data));
    this._treeControl.dataNodes = this._flattenedData.value;
  }
  constructor(_treeControl, _treeFlattener, initialData) {
    super();
    this._treeControl = _treeControl;
    this._treeFlattener = _treeFlattener;
    this._flattenedData = new BehaviorSubject([]);
    this._expandedData = new BehaviorSubject([]);
    this._data = new BehaviorSubject([]);
    if (initialData) {
      this.data = initialData;
    }
  }
  connect(collectionViewer) {
    return merge(collectionViewer.viewChange, this._treeControl.expansionModel.changed, this._flattenedData).pipe(map(() => {
      this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value, this._treeControl));
      return this._expandedData.value;
    }));
  }
  disconnect() {
  }
};
var MatTreeNestedDataSource = class extends DataSource {
  constructor() {
    super(...arguments);
    this._data = new BehaviorSubject([]);
  }
  /**
   * Data for the nested tree
   */
  get data() {
    return this._data.value;
  }
  set data(value) {
    this._data.next(value);
  }
  connect(collectionViewer) {
    return merge(...[collectionViewer.viewChange, this._data]).pipe(map(() => this.data));
  }
  disconnect() {
  }
};
export {
  MatNestedTreeNode,
  MatTree,
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
  MatTreeNestedDataSource,
  MatTreeNode,
  MatTreeNodeDef,
  MatTreeNodeOutlet,
  MatTreeNodePadding,
  MatTreeNodeToggle
};
//# sourceMappingURL=@angular_material_tree.js.map
