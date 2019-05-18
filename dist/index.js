!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.draggableTree = t())
    : (e.draggableTree = t());
})(window, function() {
  return (function(e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function(t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 4))
    );
  })([
    function(e, t, n) {
      "use strict";
      var r = function() {};
      e.exports = r;
    },
    function(e, t, n) {
      var r = n(2);
      "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      (0, n(5).default)("012395d4", r, !1, {});
    },
    function(e, t, n) {
      (e.exports = n(3)(!1)).push([
        e.i,
        '.draggable-tree {\n  font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: 12px;\n  line-height: 1.5;\n  color: fade(#000, 65%);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  user-select: none; }\n  .draggable-tree ul,\n  .draggable-tree ol {\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n  .draggable-tree li {\n    margin: 0;\n    padding: 4px 0;\n    list-style: none;\n    white-space: nowrap;\n    outline: 0; }\n    .draggable-tree li ul {\n      margin: 0;\n      padding: 0 0 0 18px; }\n    .draggable-tree li span[draggable="true"] {\n      user-select: none;\n      border-top: 2px transparent solid;\n      border-bottom: 2px transparent solid;\n      /* Required to make elements draggable in old WebKit */\n      -khtml-user-drag: element;\n      -webkit-user-drag: element;\n      line-height: 20px; }\n    .draggable-tree li.drag-over > span[draggable="true"] {\n      background-color: #1b85ff;\n      color: white;\n      opacity: 0.8; }\n    .draggable-tree li.drag-over-gap-top > span[draggable="true"] {\n      border-top-color: #1b85ff; }\n    .draggable-tree li.drag-over-gap-bottom > span[draggable="true"] {\n      border-bottom-color: #1b85ff; }\n    .draggable-tree li .draggable-tree-node-content-wrapper {\n      display: inline-block;\n      padding: 0 5px;\n      border-radius: 2px;\n      margin: 0;\n      cursor: move;\n      text-decoration: none;\n      vertical-align: top;\n      color: fade(#000, 65%);\n      transition: all 0.3s;\n      height: 24px;\n      line-height: 24px;\n      width: calc(100% - 24px); }\n      .draggable-tree li .draggable-tree-node-content-wrapper:hover {\n        background-color: #e8f7ff; }\n      .draggable-tree li .draggable-tree-node-content-wrapper.draggable-tree-node-selected {\n        background-color: #bfe6ff; }\n    .draggable-tree li span.draggable-tree-switcher {\n      margin: 0;\n      width: 24px;\n      height: 24px;\n      line-height: 24px;\n      display: inline-block;\n      vertical-align: top;\n      border: 0 none;\n      cursor: pointer;\n      outline: none;\n      text-align: center;\n      position: relative; }\n      .draggable-tree li span.draggable-tree-switcher.draggable-tree-switcher-noop {\n        cursor: default; }\n      .draggable-tree li span.draggable-tree-switcher.draggable-tree-switcher_open:after {\n        content: \'\';\n        display: inline-block;\n        font-size: 12px;\n        font-size: "7px/9";\n        border-left: 7px solid transparent;\n        border-top: 7px solid;\n        border-right: 7px solid transparent;\n        transform: scale(0.58333) rotate(0deg);\n        display: inline-block;\n        font-weight: bold;\n        transition: transform 0.3s; }\n      .draggable-tree li span.draggable-tree-switcher.draggable-tree-switcher_close:after {\n        content: \'\';\n        display: inline-block;\n        font-size: 12px;\n        font-size: "7px/9";\n        border-left: 7px solid transparent;\n        border-top: 7px solid;\n        border-right: 7px solid transparent;\n        transform: scale(0.58333) rotate(0deg);\n        display: inline-block;\n        font-weight: bold;\n        transition: transform 0.3s; }\n      .draggable-tree li span.draggable-tree-switcher.draggable-tree-switcher_close:after {\n        transform: rotate(270deg) scale(0.59); }\n  .draggable-tree.is-drop-not-allow .draggable-tree-node-content-wrapper {\n    cursor: not-allowed; }\n  .draggable-tree.is-drop-not-allow li.drag-over > span[draggable="true"] {\n    background-color: white;\n    color: black;\n    opacity: 1; }\n  .draggable-tree > li:first-child {\n    padding-top: 7px; }\n  .draggable-tree > li:last-child {\n    padding-bottom: 7px; }\n  .draggable-tree .c-move-enter-active, .draggable-tree .c-move-leave-active {\n    transition: all 0.3s ease-in-out; }\n',
        ""
      ]);
    },
    function(e, t, n) {
      "use strict";
      e.exports = function(e) {
        var t = [];
        return (
          (t.toString = function() {
            return this.map(function(t) {
              var n = (function(e, t) {
                var n = e[1] || "",
                  r = e[3];
                if (!r) return n;
                if (t && "function" == typeof btoa) {
                  var o = ((i = r),
                    "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                      " */"),
                    a = r.sources.map(function(e) {
                      return "/*# sourceURL=" + r.sourceRoot + e + " */";
                    });
                  return [n]
                    .concat(a)
                    .concat([o])
                    .join("\n");
                }
                var i;
                return [n].join("\n");
              })(t, e);
              return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
            }).join("");
          }),
          (t.i = function(e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var r = {}, o = 0; o < this.length; o++) {
              var a = this[o][0];
              null != a && (r[a] = !0);
            }
            for (o = 0; o < e.length; o++) {
              var i = e[o];
              (null != i[0] && r[i[0]]) ||
                (n && !i[2]
                  ? (i[2] = n)
                  : n && (i[2] = "(" + i[2] + ") and (" + n + ")"),
                t.push(i));
            }
          }),
          t
        );
      };
    },
    function(e, t, n) {
      "use strict";
      n.r(t);
      var r = function() {
        var e = this.$createElement,
          t = this._self._c || e;
        return t(
          "ul",
          { staticClass: "draggable-tree", class: this.getClasses },
          this._l(this.nodes, function(e) {
            return t("tree-Node", { key: e.key, attrs: { "node-data": e } });
          }),
          1
        );
      };
      r._withStripped = !0;
      var o = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "li",
          {
            class: e.classes,
            on: {
              dragover: function(t) {
                return t.stopPropagation(), t.preventDefault(), e.onDragOver(t);
              },
              dragenter: function(t) {
                return (
                  t.preventDefault(), t.stopPropagation(), e.onDragEnter(t)
                );
              },
              dragleave: function(t) {
                return t.stopPropagation(), e.onDragLeave(t);
              },
              drop: function(t) {
                return t.stopPropagation(), e.onDrop(t);
              }
            }
          },
          [
            n("span", { class: e.switcherClasses, on: { click: e.onExpand } }),
            e._v(" "),
            n(
              "span",
              {
                ref: "selector",
                class: e.selectorClasses,
                attrs: { draggable: "true" },
                on: {
                  dragstart: function(t) {
                    return t.stopPropagation(), e.onDragStart(t);
                  },
                  dragend: function(t) {
                    return t.stopPropagation(), e.onDragEnd(t);
                  },
                  click: function(t) {
                    return t.stopPropagation(), e.onSelect(t);
                  }
                }
              },
              [n("node-content", { attrs: { node: e.nodeData } })],
              1
            ),
            e._v(" "),
            n("c-transition", [
              n(
                "ul",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        e.nodeData.isExpanded &&
                        e.nodeData.children &&
                        e.nodeData.children.length,
                      expression:
                        "\n        nodeData.isExpanded && nodeData.children && nodeData.children.length\n      "
                    }
                  ],
                  staticStyle: { overflow: "hidden" }
                },
                e._l(e.nodeData.children, function(e) {
                  return n("tree-node", {
                    key: e.key,
                    attrs: { "node-data": e }
                  });
                }),
                1
              )
            ])
          ],
          1
        );
      };
      o._withStripped = !0;
      var a = function() {
        var e = this.$createElement;
        return (this._self._c || e)(
          "transition",
          {
            attrs: { name: "c-move" },
            on: {
              "before-enter": this.beforeEnter,
              enter: this.enter,
              "after-enter": this.afterEnter,
              "before-leave": this.beforeLeave,
              leave: this.leave,
              "after-leave": this.afterLeave
            }
          },
          [this._t("default")],
          2
        );
      };
      function i(e, t, n, r, o, a, i, s) {
        var d,
          l = "function" == typeof e ? e.options : e;
        if (
          (t && ((l.render = t), (l.staticRenderFns = n), (l._compiled = !0)),
          r && (l.functional = !0),
          a && (l._scopeId = "data-v-" + a),
          i
            ? ((d = function(e) {
                (e =
                  e ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  o && o.call(this, e),
                  e &&
                    e._registeredComponents &&
                    e._registeredComponents.add(i);
              }),
              (l._ssrRegister = d))
            : o &&
              (d = s
                ? function() {
                    o.call(this, this.$root.$options.shadowRoot);
                  }
                : o),
          d)
        )
          if (l.functional) {
            l._injectStyles = d;
            var c = l.render;
            l.render = function(e, t) {
              return d.call(t), c(e, t);
            };
          } else {
            var p = l.beforeCreate;
            l.beforeCreate = p ? [].concat(p, d) : [d];
          }
        return { exports: e, options: l };
      }
      a._withStripped = !0;
      var s = i(
        {
          name: "c-transition",
          data: function() {
            return {};
          },
          methods: {
            beforeEnter: function(e) {
              e.style.height = "";
            },
            enter: function(e) {
              var t = getComputedStyle(e).height;
              (e.style.visibility = ""),
                (e.style.height = 0),
                setTimeout(function() {
                  e.style.height = t;
                }, 0);
            },
            afterEnter: function(e) {
              e.style.height = "";
            },
            beforeLeave: function(e) {
              var t = getComputedStyle(e).height;
              e.style.height = t;
            },
            leave: function(e) {
              setTimeout(function() {
                e.style.height = 0;
              }, 0);
            },
            afterLeave: function(e) {
              e.style.height = "";
            }
          }
        },
        a,
        [],
        !1,
        null,
        null,
        null
      );
      s.options.__file = "src/c-transition.vue";
      var d = s.exports;
      n(1);
      function l(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var c = i(
        {
          name: "tree-node",
          props: {
            nodeData: { required: !0, type: Object },
            isDisabled: { type: Boolean, default: !1 }
          },
          inject: { treeRoot: { default: !1 } },
          components: {
            cTransition: d,
            nodeContent: {
              props: { node: { required: !0 } },
              render: function(e) {
                var t = this.$parent.treeRoot,
                  n = this.node,
                  r = n.originNode;
                return t.renderContent
                  ? t.renderContent({ node: r })
                  : t.$scopedSlots.renderContent
                  ? t.$scopedSlots.renderContent({ node: r })
                  : e("span", { class: "draggable-tree-title" }, [n.title]);
              }
            }
          },
          data: function() {
            return { prefixCls: "draggable-tree" };
          },
          computed: {
            switcherClasses: function() {
              var e,
                t = this.prefixCls,
                n = this.nodeData,
                r = n.isExpanded;
              return n.isParent
                ? (l((e = {}), "".concat(t, "-switcher"), !0),
                  l(
                    e,
                    "".concat(t, "-switcher_").concat(r ? "open" : "close"),
                    !0
                  ),
                  e)
                : l(
                    {},
                    "".concat(t, "-switcher ").concat(t, "-switcher-noop"),
                    !0
                  );
            },
            selectorClasses: function() {
              var e,
                t = this.prefixCls,
                n = this.isDisabled,
                r = this.nodeState,
                o = this.draggable,
                a = this.nodeData.isSelected,
                i = "".concat(t, "-node-content-wrapper");
              return (
                l((e = {}), i, !0),
                l(e, "".concat(i, "-").concat(r || "normal"), !0),
                l(e, "".concat(t, "-node-selected"), !n && a),
                l(e, "draggable", !n && o),
                e
              );
            },
            classes: function() {
              var e = this.nodeData.dragOverGap,
                t = this.isDisabled;
              return {
                "drag-over": !t && "mid" === e,
                "drag-over-gap-top": !t && "top" === e,
                "drag-over-gap-bottom": !t && "bottom" === e
              };
            }
          },
          methods: {
            onSelect: function(e) {
              (this.nodeData.isSelected = !0),
                this.treeRoot.onNodeSelect(e, this.nodeData);
            },
            onExpand: function(e) {
              (this.nodeData.isExpanded = !this.nodeData.isExpanded),
                this.treeRoot.onNodeExpand(e, this.nodeData);
            },
            onDragEnter: function(e) {
              e.preventDefault();
            },
            onDragOver: function(e) {
              this.treeRoot.onNodeDragOver(e, this);
            },
            onDragLeave: function(e) {
              this.treeRoot.onNodeDragLeave(e, this);
            },
            onDrop: function(e) {
              this.treeRoot.onNodeDrop(e, this);
            },
            onDragStart: function(e) {
              this.treeRoot.onNodeDragStart(e, this);
            },
            onDragEnd: function(e) {
              this.treeRoot.onNodeDragEnd(e, this);
            }
          }
        },
        o,
        [],
        !1,
        null,
        "387b92c8",
        null
      );
      c.options.__file = "src/tree-node.vue";
      var p = c.exports,
        u = n(0),
        f = n.n(u);
      function g(e, t, n) {
        var r = e.key;
        if ((t && (r = "function" == typeof t ? t(e) : e[t]), null == r)) {
          f()(
            !1,
            "Each record in dataSource of tree should have a unique `key` prop, or set `rowKey` to an unique primary key"
          );
          var o = n.seed + 1;
          (r = "$$id_".concat(o)), (n.seed = o);
        }
        return r;
      }
      var h = 0.25,
        v = 2;
      function b(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function(t) {
              m(e, t, n[t]);
            });
        }
        return e;
      }
      function m(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var x = i(
        {
          name: "draggable-tree",
          mixins: [
            {
              created: function() {
                this.treeStore = {
                  seed: 0,
                  nodesMap: {},
                  selectedKey: "",
                  expandedKeys: []
                };
              },
              methods: {
                normalizeNode: function(e, t) {
                  var n = this.treeStore,
                    r = this.rowKey,
                    o = this.expandAll,
                    a = n.expandedKeys,
                    i = e.length;
                  if (0 === i) return [];
                  for (var s = [], d = 0; d < i; d++) {
                    var l = e[d],
                      c = g(l, r, n),
                      p = y({}, l, {
                        title: l[this.props.title],
                        key: c,
                        parent: t,
                        originNode: l.originNode || l,
                        isExpanded: a.includes(c) || !!o,
                        isSelected: !1,
                        dragOverGap: "none"
                      }),
                      u = !1,
                      f = void 0;
                    Array.isArray(l[this.props.children]) &&
                      l[this.props.children].length > 0 &&
                      ((f = this.normalizeNode(l[this.props.children], p)),
                      (u = !0)),
                      (p.children = f),
                      (p.isParent = u),
                      this.flattenNode(p),
                      this.addStoreExpandKeys(p),
                      s.push(p);
                  }
                  return s;
                },
                flattenNode: function(e) {
                  this.treeStore.nodesMap[e.key] = e;
                },
                setChildren: function(e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : -1,
                    r = e.children;
                  Array.isArray(r) || (r = []),
                    -1 === n ? r.push(t) : r.splice(n, 0, t),
                    (e.children = r);
                },
                addChildren: function(e, t) {
                  this.setChildren(e, t);
                },
                removeChildren: function(e, t) {
                  var n = e.children;
                  Array.isArray(n) &&
                    (e.children = n.filter(function(e) {
                      return e.key !== t.key;
                    }));
                },
                updateStoreSelectedKeys: function(e) {
                  var t = this.treeStore.selectedKey;
                  t && (this.treeStore.nodesMap[t].isSelected = !1);
                  this.treeStore.selectedKey = e;
                },
                addStoreExpandKeys: function(e) {
                  e.isExpanded &&
                    e.isParent &&
                    this.updateStoreExpandedKeys(e.key, "add");
                },
                updateStoreExpandedKeys: function(e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "add",
                    n = this.treeStore.expandedKeys;
                  "add" === t
                    ? !n.includes(e) && n.push(e)
                    : (this.treeStore.expandedKeys = n.filter(function(t) {
                        return t === e;
                      }));
                },
                clearStoreExpandedKeys: function() {
                  this.treeStore.expandedKeys = [];
                },
                getStoreExpandedKeys: function() {
                  return b(this.treeStore.expandedKeys);
                }
              }
            }
          ],
          provide: function() {
            return { treeRoot: this };
          },
          model: { prop: "list" },
          props: {
            list: { required: !0, type: Array },
            expandAll: { type: Boolean, default: !0 },
            renderContent: { type: Function },
            props: {
              required: !1,
              type: Object,
              default: function() {
                return { title: "title", children: "children" };
              }
            },
            allowDrop: Function
          },
          components: { treeNode: p },
          data: function() {
            return {
              dragState: {
                dragOverNode: null,
                dropPosition: "",
                dragNode: null,
                allowDrop: !0
              },
              nodes: [],
              treeStore: {}
            };
          },
          watch: {
            expandAll: function() {
              this.clearStoreExpandedKeys(),
                (this.nodes = this.normalizeNode(this.list, null, 0));
            }
          },
          created: function() {
            this.nodes = this.normalizeNode(this.list, null, 0);
          },
          computed: {
            getClasses: function() {
              var e = this.dragState;
              return {
                "is-dragging": !!e.dragNode,
                "is-drop-not-allow": !e.allowDrop
              };
            }
          },
          methods: {
            onNodeSelect: function(e, t) {
              this.updateStoreSelectedKeys(t.key, "add"),
                this.$emit("select", t.originNode);
            },
            onNodeExpand: function(e, t) {
              var n = t.key,
                r = t.isExpanded;
              this.updateStoreExpandedKeys(n, r ? "add" : "del"),
                this.$emit("expand", this.getStoreExpandedKeys(), {
                  expanded: r,
                  domEvent: e
                });
            },
            onNodeDragOver: function(e, t) {
              var n = this.dragState.dragNode;
              this.clearDragOverGap(t);
              var r = (function(e, t) {
                  var n = e.clientY,
                    r = t.getBoundingClientRect(),
                    o = r.top,
                    a = r.bottom,
                    i = r.height,
                    s = Math.max(i * h, v),
                    d = "mid";
                  return (
                    n <= o + s ? (d = "top") : n >= a - s && (d = "bottom"), d
                  );
                })(event, t.$refs.selector),
                o = !0;
              "function" == typeof this.allowDrop &&
                (o = this.allowDrop(
                  n.nodeData.originNode,
                  t.nodeData.originNode,
                  r
                )),
                (e.dataTransfer.dropEffect = o ? "move" : "none"),
                (this.dragState.allowDrop = o),
                (this.dragState.dragOverNode = t),
                (this.dragState.dropPosition = r),
                (t.nodeData.dragOverGap = this.dragState.dropPosition);
            },
            onNodeDrop: function(e, t) {
              var n = this.nodes.map(function(e) {
                  return e;
                }),
                r = this.dragState,
                o = r.dragNode,
                a = r.dropPosition,
                i = o.nodeData,
                s = o.nodeData.parent;
              s ||
                Object.defineProperty((s = {}), "children", {
                  get: function() {
                    return n;
                  },
                  set: function(e) {
                    n = e;
                  }
                });
              var d = t.nodeData,
                l = d.parent;
              if (
                (l ||
                  Object.defineProperty((l = {}), "children", {
                    get: function() {
                      return n;
                    },
                    set: function(e) {
                      n = e;
                    }
                  }),
                i.key !== d.key)
              )
                if ((this.removeChildren(s, i), "mid" === a))
                  this.addChildren(d, i);
                else {
                  var c = l.children.indexOf(d);
                  this.setChildren(l, i, "top" === a ? c : c + 1);
                }
              (this.nodes = this.normalizeNode(n, null)),
                this.$emit("drop", {
                  dragNode: i.originNode,
                  dragNodeParent: i.parent,
                  dropNode: d.originNode,
                  dropNodeParent: d.parent
                });
            },
            onNodeDragStart: function(e, t) {
              this.dragState.dragNode = t;
            },
            onNodeDragEnd: function(e) {
              console.log("on end", this.dragState),
                (e.dataTransfer.dropEffect = "move"),
                (this.dragState.dragNode = null),
                (this.dragState.dropPosition = ""),
                (this.dragState.allowDrop = !0);
            },
            onNodeDragLeave: function(e, t) {
              this.clearDragOverGap(t);
            },
            clearDragOverGap: function(e) {
              e.nodeData.dragOverGap = "none";
            }
          }
        },
        r,
        [],
        !1,
        null,
        "e1a1a612",
        null
      );
      x.options.__file = "src/draggable-tree.vue";
      var S = x.exports;
      S.install = function(e) {
        e.component(S.name, S);
      };
      t.default = S;
    },
    function(e, t, n) {
      "use strict";
      function r(e, t) {
        for (var n = [], r = {}, o = 0; o < t.length; o++) {
          var a = t[o],
            i = a[0],
            s = { id: e + ":" + o, css: a[1], media: a[2], sourceMap: a[3] };
          r[i] ? r[i].parts.push(s) : n.push((r[i] = { id: i, parts: [s] }));
        }
        return n;
      }
      n.r(t),
        n.d(t, "default", function() {
          return g;
        });
      var o = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !o)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
        );
      var a = {},
        i = o && (document.head || document.getElementsByTagName("head")[0]),
        s = null,
        d = 0,
        l = !1,
        c = function() {},
        p = null,
        u = "data-vue-ssr-id",
        f =
          "undefined" != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function g(e, t, n, o) {
        (l = n), (p = o || {});
        var i = r(e, t);
        return (
          h(i),
          function(t) {
            for (var n = [], o = 0; o < i.length; o++) {
              var s = i[o];
              (d = a[s.id]).refs--, n.push(d);
            }
            t ? h((i = r(e, t))) : (i = []);
            for (o = 0; o < n.length; o++) {
              var d;
              if (0 === (d = n[o]).refs) {
                for (var l = 0; l < d.parts.length; l++) d.parts[l]();
                delete a[d.id];
              }
            }
          }
        );
      }
      function h(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t],
            r = a[n.id];
          if (r) {
            r.refs++;
            for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
            for (; o < n.parts.length; o++) r.parts.push(b(n.parts[o]));
            r.parts.length > n.parts.length &&
              (r.parts.length = n.parts.length);
          } else {
            var i = [];
            for (o = 0; o < n.parts.length; o++) i.push(b(n.parts[o]));
            a[n.id] = { id: n.id, refs: 1, parts: i };
          }
        }
      }
      function v() {
        var e = document.createElement("style");
        return (e.type = "text/css"), i.appendChild(e), e;
      }
      function b(e) {
        var t,
          n,
          r = document.querySelector("style[" + u + '~="' + e.id + '"]');
        if (r) {
          if (l) return c;
          r.parentNode.removeChild(r);
        }
        if (f) {
          var o = d++;
          (r = s || (s = v())),
            (t = x.bind(null, r, o, !1)),
            (n = x.bind(null, r, o, !0));
        } else
          (r = v()),
            (t = function(e, t) {
              var n = t.css,
                r = t.media,
                o = t.sourceMap;
              r && e.setAttribute("media", r);
              p.ssrId && e.setAttribute(u, t.id);
              o &&
                ((n += "\n/*# sourceURL=" + o.sources[0] + " */"),
                (n +=
                  "\n/*# sourceMappingURL=data:application/json;base64," +
                  btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                  " */"));
              if (e.styleSheet) e.styleSheet.cssText = n;
              else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
              }
            }.bind(null, r)),
            (n = function() {
              r.parentNode.removeChild(r);
            });
        return (
          t(e),
          function(r) {
            if (r) {
              if (
                r.css === e.css &&
                r.media === e.media &&
                r.sourceMap === e.sourceMap
              )
                return;
              t((e = r));
            } else n();
          }
        );
      }
      var y,
        m = ((y = []),
        function(e, t) {
          return (y[e] = t), y.filter(Boolean).join("\n");
        });
      function x(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = m(t, o);
        else {
          var a = document.createTextNode(o),
            i = e.childNodes;
          i[t] && e.removeChild(i[t]),
            i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
        }
      }
    }
  ]);
});
