/* * Copyright © 2019-2021 chenwenbin * Released under the MIT License. */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.index = factory());
}(this, function () { 'use strict';

  //
  //
  //
  //
  //
  //
  console.log('======================');
  console.log('file-handle');
  console.log('======================');
  var script = {
    name: 'FileHandle'
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */
  var __vue_script__ = script;
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "file-handle" }, [
      _vm._v("\n  file-handle\n")
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = undefined;
    /* scoped */
    var __vue_scope_id__ = "data-v-7491b567";
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var FileHandle = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  FileHandle.install = function (vue) {
    vue.component(name, FileHandle);
  };

  //
  //
  //
  //
  //
  //
  console.log('======================');
  console.log('test - module');
  console.log('======================');
  var script$1 = {
    name: 'TestModule',
    mounted: function mounted() {}
  };

  /* script */
  var __vue_script__$1 = script$1;
  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "test-module" }, [
      _vm._v("\n  test-module\n")
    ])
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    var __vue_inject_styles__$1 = undefined;
    /* scoped */
    var __vue_scope_id__$1 = "data-v-27cf8f59";
    /* module identifier */
    var __vue_module_identifier__$1 = undefined;
    /* functional template */
    var __vue_is_functional_template__$1 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var TestModule = normalizeComponent_1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      undefined,
      undefined
    );

  TestModule.install = function (vue) {
    vue.component(name, TestModule);
  };

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$2 = {
    name: 'UtilList',
    props: {
      finishText: {
        type: String,
        default: '没有更多了'
      },
      totalCount: {
        type: Number,
        default: 0
      },
      operate: {
        type: String,
        default: ''
      },
      dataObj: {
        type: Object,
        require: true,
        default: function _default() {}
      },
      domShowType: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        curType: 0,
        loading: false,
        finished: false
      };
    },
    computed: {
      infoTextarr: function infoTextarr() {
        return this.dataObj.data.filter(function (v) {
          return v.type !== 'img';
        });
      },
      infoImgarr: function infoImgarr() {
        // this.$nextTick(() => {
        var imgkey = this.dataObj.dataMap.find(function (v) {
          return v.type === 'img';
        });
        var imgs = [];

        if (this.dataObj.dataMap.length !== 0 && imgkey !== undefined) {
          imgs = this.dataObj.data.map(function (v) {
            return v[imgkey.key];
          });
        }

        console.log(imgs);
        return imgs; // })
      }
    },
    mounted: function mounted() {},
    destroyed: function destroyed() {},
    activated: function activated() {},
    methods: {
      onLoad: function onLoad() {
        console.log('进来加载中,总条数为' + this.totalCount);
        this.$emit('loadData');
        this.loading = false;

        if (this.dataObj.data.length > this.totalCount) {
          this.finished = true;
        }
      },
      initConfig: function initConfig() {
        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (val !== '') {
          this[val] = false;
        } else {
          this.loading = false;
          this.finished = false;
        }

        this.$forceUpdate();
      },
      timeJq: function timeJq(time) {
        var arr = time.split(' ')[1];
        return arr.split('');
      },
      toDetail: function toDetail(item, type) {
        console.log(type);
        this.$emit('toDetail', Object.assign(item, {
          clickType: type,
          pageType: 'warning'
        }));
      } // operate (item, type) {
      //   this.$emit('operate', Object.assign(item, { operateType: type }))
      //   console.log(type)
      // }

    }
  };

  /* script */
  var __vue_script__$2 = script$2;
  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "infoList" },
      [
        _c(
          "van-list",
          {
            attrs: {
              finished: _vm.finished,
              "finished-text": _vm.finishText,
              offset: "10",
              "immediate-check": false
            },
            on: { load: _vm.onLoad },
            model: {
              value: _vm.loading,
              callback: function($$v) {
                _vm.loading = $$v;
              },
              expression: "loading"
            }
          },
          [
            _vm.dataObj.data.length != 0
              ? _c(
                  "van-skeleton",
                  {
                    staticClass: "skel",
                    attrs: { row: 4, loading: !_vm.domShowType }
                  },
                  [
                    _vm._l(_vm.dataObj.data, function(v, k) {
                      return _c(
                        "div",
                        {
                          key: k,
                          staticClass: "infoList-main",
                          on: {
                            click: function($event) {
                              return _vm.toDetail(v, "router")
                            }
                          }
                        },
                        [
                          _vm.dataObj.dataType != ""
                            ? _c("div", {
                                staticClass: "ifm-left",
                                class: "ifm-left-" + _vm.dataObj.dataType
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "ifm-right" },
                            [
                              _vm.infoImgarr.length != 0
                                ? _c("img", {
                                    staticClass: "ifm-img",
                                    style: _vm.dataObj.avatarSize,
                                    attrs: {
                                      src: _vm.infoImgarr[k],
                                      alt: "",
                                      srcset: ""
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "ifm-user" },
                                _vm._l(_vm.dataObj.dataMap, function(
                                  item,
                                  index
                                ) {
                                  return _c("div", { key: index }, [
                                    item.type == "title"
                                      ? _c("h3", [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(v[item.key]) +
                                              "\n                "
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    !item.type
                                      ? _c("p", [
                                          _c("span", [
                                            _vm._v(_vm._s(item.label) + "：")
                                          ]),
                                          _vm._v(
                                            _vm._s(v[item.key]) +
                                              "\n                "
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.type == "status"
                                      ? _c(
                                          "span",
                                          {
                                            staticStyle: { position: "absolute" },
                                            style: [
                                              item.style,
                                              {
                                                color: item.map[v[item.key]].color
                                              },
                                              {
                                                background:
                                                  item.map[v[item.key]].background
                                              }
                                            ]
                                          },
                                          [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(
                                                  item.map[v[item.key]].text
                                                ) +
                                                "\n                "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                }),
                                0
                              ),
                              _vm._v(" "),
                              _vm.dataObj.operate
                                ? _c(
                                    "van-button",
                                    {
                                      staticClass: "opreate",
                                      style: _vm.dataObj.operate.style,
                                      attrs: {
                                        type: _vm.dataObj.operate.btnType,
                                        round: _vm.dataObj.operate.round,
                                        size: "small"
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation();
                                          return _vm.$emit(
                                            _vm.item.map[v[_vm.item.key]]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(_vm.dataObj.operate.text) +
                                          "\n            "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.dataObj.data.length === 0 && _vm.domShowType
              ? _c("van-empty")
              : _vm._e()
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    var __vue_inject_styles__$2 = undefined;
    /* scoped */
    var __vue_scope_id__$2 = "data-v-86e176fc";
    /* module identifier */
    var __vue_module_identifier__$2 = undefined;
    /* functional template */
    var __vue_is_functional_template__$2 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var utilForm = normalizeComponent_1(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      undefined,
      undefined
    );

  utilForm.install = function (vue) {
    vue.component(utilForm.name, utilForm);
  };

  var version = "0.0.11";

  var components = [FileHandle, TestModule, utilForm];

  var install = function install(Vue) {
    // 判断是否安装
    if (install.installed) {
      return;
    }

    components.forEach(function (component) {
      Vue.component(component.name, component);
    });
  };

  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var index = {
    version: version,
    install: install,
    FileHandle: FileHandle,
    TestModule: TestModule
  };

  return index;

}));
