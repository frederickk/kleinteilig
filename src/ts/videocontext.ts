// @ts-nocheck
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var videocontext = createCommonjsModule(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(window, function() {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, {enumerable: true, get: getter});
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, {value: "Module"});
        }
        Object.defineProperty(exports2, "__esModule", {value: true});
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {enumerable: true, value});
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = "./src/videocontext.js");
    }({
      "./src/Definitions/aaf_video_crop/aaf_video_crop.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float cropLeft;\nuniform float cropRight;\nuniform float cropTop;\nuniform float cropBottom;\nvarying vec2 v_texCoord;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    if (v_texCoord[0] < (cropLeft+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\n    if (v_texCoord[0] > (cropRight+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\n    if (v_texCoord[1] < (-cropBottom+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\n    if (v_texCoord[1] > (-cropTop+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\n    gl_FragColor = color;\n}\n";
      },
      "./src/Definitions/aaf_video_crop/aaf_video_crop.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _aaf_video_crop = __webpack_require__("./src/Definitions/aaf_video_crop/aaf_video_crop.vert");
        var _aaf_video_crop2 = _interopRequireDefault(_aaf_video_crop);
        var _aaf_video_crop3 = __webpack_require__("./src/Definitions/aaf_video_crop/aaf_video_crop.frag");
        var _aaf_video_crop4 = _interopRequireDefault(_aaf_video_crop3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var aaf_video_crop = {
          title: "AAF Video Crop Effect",
          description: "A crop effect based on the AAF spec.",
          vertexShader: _aaf_video_crop2.default,
          fragmentShader: _aaf_video_crop4.default,
          properties: {
            cropLeft: {type: "uniform", value: -1},
            cropRight: {type: "uniform", value: 1},
            cropTop: {type: "uniform", value: -1},
            cropBottom: {type: "uniform", value: 1}
          },
          inputs: ["u_image"]
        };
        exports2.default = aaf_video_crop;
        module2.exports = exports2.default;
      },
      "./src/Definitions/aaf_video_crop/aaf_video_crop.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/aaf_video_flip/aaf_video_flip.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvoid main(){\n    vec2 coord = vec2(v_texCoord[0] ,1.0 - v_texCoord[1]);\n    vec4 color = texture2D(u_image, coord);\n    gl_FragColor = color;\n}\n";
      },
      "./src/Definitions/aaf_video_flip/aaf_video_flip.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _aaf_video_flip = __webpack_require__("./src/Definitions/aaf_video_flip/aaf_video_flip.vert");
        var _aaf_video_flip2 = _interopRequireDefault(_aaf_video_flip);
        var _aaf_video_flip3 = __webpack_require__("./src/Definitions/aaf_video_flip/aaf_video_flip.frag");
        var _aaf_video_flip4 = _interopRequireDefault(_aaf_video_flip3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var aaf_video_flip = {
          title: "AAF Video Flip Effect",
          description: "A flip effect based on the AAF spec. Mirrors the image in the x-axis",
          vertexShader: _aaf_video_flip2.default,
          fragmentShader: _aaf_video_flip4.default,
          properties: {},
          inputs: ["u_image"]
        };
        exports2.default = aaf_video_flip;
        module2.exports = exports2.default;
      },
      "./src/Definitions/aaf_video_flip/aaf_video_flip.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/aaf_video_flop/aaf_video_flop.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvoid main(){\n    vec2 coord = vec2(1.0 - v_texCoord[0] ,v_texCoord[1]);\n    vec4 color = texture2D(u_image, coord);\n    gl_FragColor = color;\n}\n";
      },
      "./src/Definitions/aaf_video_flop/aaf_video_flop.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _aaf_video_flop = __webpack_require__("./src/Definitions/aaf_video_flop/aaf_video_flop.vert");
        var _aaf_video_flop2 = _interopRequireDefault(_aaf_video_flop);
        var _aaf_video_flop3 = __webpack_require__("./src/Definitions/aaf_video_flop/aaf_video_flop.frag");
        var _aaf_video_flop4 = _interopRequireDefault(_aaf_video_flop3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var aaf_video_flop = {
          title: "AAF Video Flop Effect",
          description: "A flop effect based on the AAF spec. Mirrors the image in the y-axis",
          vertexShader: _aaf_video_flop2.default,
          fragmentShader: _aaf_video_flop4.default,
          properties: {},
          inputs: ["u_image"]
        };
        exports2.default = aaf_video_flop;
        module2.exports = exports2.default;
      },
      "./src/Definitions/aaf_video_flop/aaf_video_flop.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/aaf_video_position/aaf_video_position.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float positionOffsetX;\nuniform float positionOffsetY;\nvarying vec2 v_texCoord;\nvarying float v_progress;\nvoid main(){\n    vec2 pos = vec2(v_texCoord[0] - positionOffsetX/2.0, v_texCoord[1] -  positionOffsetY/2.0);\n    vec4 color = texture2D(u_image, pos);\n    if (pos[0] < 0.0 || pos[0] > 1.0 || pos[1] < 0.0 || pos[1] > 1.0){\n        color = vec4(0.0,0.0,0.0,0.0);\n    }\n    gl_FragColor = color;\n}\n";
      },
      "./src/Definitions/aaf_video_position/aaf_video_position.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _aaf_video_position = __webpack_require__("./src/Definitions/aaf_video_position/aaf_video_position.vert");
        var _aaf_video_position2 = _interopRequireDefault(_aaf_video_position);
        var _aaf_video_position3 = __webpack_require__("./src/Definitions/aaf_video_position/aaf_video_position.frag");
        var _aaf_video_position4 = _interopRequireDefault(_aaf_video_position3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var aaf_video_position = {
          title: "AAF Video Position Effect",
          description: "A position effect based on the AAF spec.",
          vertexShader: _aaf_video_position2.default,
          fragmentShader: _aaf_video_position4.default,
          properties: {
            positionOffsetX: {type: "uniform", value: 0},
            positionOffsetY: {type: "uniform", value: 0}
          },
          inputs: ["u_image"]
        };
        exports2.default = aaf_video_position;
        module2.exports = exports2.default;
      },
      "./src/Definitions/aaf_video_position/aaf_video_position.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/aaf_video_scale/aaf_video_scale.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float scaleX;\nuniform float scaleY;\nvarying vec2 v_texCoord;\nvarying float v_progress;\nvoid main(){\n    vec2 pos = vec2(v_texCoord[0]*1.0/scaleX - (1.0/scaleX/2.0 -0.5), v_texCoord[1]*1.0/scaleY - (1.0/scaleY/2.0 -0.5));\n    vec4 color = texture2D(u_image, pos);\n    if (pos[0] < 0.0 || pos[0] > 1.0 || pos[1] < 0.0 || pos[1] > 1.0){\n        color = vec4(0.0,0.0,0.0,0.0);\n    }\n    gl_FragColor = color;\n}\n";
      },
      "./src/Definitions/aaf_video_scale/aaf_video_scale.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _aaf_video_scale = __webpack_require__("./src/Definitions/aaf_video_scale/aaf_video_scale.vert");
        var _aaf_video_scale2 = _interopRequireDefault(_aaf_video_scale);
        var _aaf_video_scale3 = __webpack_require__("./src/Definitions/aaf_video_scale/aaf_video_scale.frag");
        var _aaf_video_scale4 = _interopRequireDefault(_aaf_video_scale3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var aaf_video_scale = {
          title: "AAF Video Scale Effect",
          description: "A scale effect based on the AAF spec.",
          vertexShader: _aaf_video_scale2.default,
          fragmentShader: _aaf_video_scale4.default,
          properties: {
            scaleX: {type: "uniform", value: 1},
            scaleY: {type: "uniform", value: 1}
          },
          inputs: ["u_image"]
        };
        exports2.default = aaf_video_scale;
        module2.exports = exports2.default;
      },
      "./src/Definitions/aaf_video_scale/aaf_video_scale.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/colorThreshold/colorThreshold.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float a;\nuniform vec3 colorAlphaThreshold;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    if (color[0] > colorAlphaThreshold[0] && color[1]> colorAlphaThreshold[1] && color[2]> colorAlphaThreshold[2]){\n        color = vec4(0.0,0.0,0.0,0.0);\n    }\n    gl_FragColor = color;\n}\n";
      },
      "./src/Definitions/colorThreshold/colorThreshold.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _colorThreshold = __webpack_require__("./src/Definitions/colorThreshold/colorThreshold.vert");
        var _colorThreshold2 = _interopRequireDefault(_colorThreshold);
        var _colorThreshold3 = __webpack_require__("./src/Definitions/colorThreshold/colorThreshold.frag");
        var _colorThreshold4 = _interopRequireDefault(_colorThreshold3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var colorThreshold = {
          title: "Color Threshold",
          description: "Turns all pixels with a greater value than the specified threshold transparent.",
          vertexShader: _colorThreshold2.default,
          fragmentShader: _colorThreshold4.default,
          properties: {
            a: {type: "uniform", value: 0},
            colorAlphaThreshold: {type: "uniform", value: [0, 0.55, 0]}
          },
          inputs: ["u_image"]
        };
        exports2.default = colorThreshold;
        module2.exports = exports2.default;
      },
      "./src/Definitions/colorThreshold/colorThreshold.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/combine/combine.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float a;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    gl_FragColor = color;\n}\n";
      },
      "./src/Definitions/combine/combine.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _combine = __webpack_require__("./src/Definitions/combine/combine.vert");
        var _combine2 = _interopRequireDefault(_combine);
        var _combine3 = __webpack_require__("./src/Definitions/combine/combine.frag");
        var _combine4 = _interopRequireDefault(_combine3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var combine = {
          title: "Combine",
          description: "A basic effect which renders the input to the output, Typically used as a combine node for layering up media with alpha transparency.",
          vertexShader: _combine2.default,
          fragmentShader: _combine4.default,
          properties: {
            a: {type: "uniform", value: 0}
          },
          inputs: ["u_image"]
        };
        exports2.default = combine;
        module2.exports = exports2.default;
      },
      "./src/Definitions/combine/combine.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/crop/crop.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float x;\nuniform float y;\nuniform float width;\nuniform float height;\nvarying vec2 v_texCoord;\nvarying float v_progress;\nvoid main(){\n    vec2 pos = (((v_texCoord)*vec2(width, height)) + vec2(0, 1.0-height)) +vec2(x,-y);\n    vec4 color = texture2D(u_image, pos);\n    if (pos[0] < 0.0 || pos[0] > 1.0 || pos[1] < 0.0 || pos[1] > 1.0){\n        color = vec4(0.0,0.0,0.0,0.0);\n    }\n    gl_FragColor = color;\n}\n";
      },
      "./src/Definitions/crop/crop.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _crop = __webpack_require__("./src/Definitions/crop/crop.vert");
        var _crop2 = _interopRequireDefault(_crop);
        var _crop3 = __webpack_require__("./src/Definitions/crop/crop.frag");
        var _crop4 = _interopRequireDefault(_crop3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var crop = {
          title: "Primer Simple Crop",
          description: "A simple crop processors for primer",
          vertexShader: _crop2.default,
          fragmentShader: _crop4.default,
          properties: {
            x: {type: "uniform", value: 0},
            y: {type: "uniform", value: 0},
            width: {type: "uniform", value: 1},
            height: {type: "uniform", value: 1}
          },
          inputs: ["u_image"]
        };
        exports2.default = crop;
        module2.exports = exports2.default;
      },
      "./src/Definitions/crop/crop.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/crossfade/crossfade.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    color_a[0] *= (1.0 - mix);\n    color_a[1] *= (1.0 - mix);\n    color_a[2] *= (1.0 - mix);\n    color_a[3] *= (1.0 - mix);\n    color_b[0] *= mix;\n    color_b[1] *= mix;\n    color_b[2] *= mix;\n    color_b[3] *= mix;\n    gl_FragColor = color_a + color_b;\n}\n";
      },
      "./src/Definitions/crossfade/crossfade.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _crossfade = __webpack_require__("./src/Definitions/crossfade/crossfade.vert");
        var _crossfade2 = _interopRequireDefault(_crossfade);
        var _crossfade3 = __webpack_require__("./src/Definitions/crossfade/crossfade.frag");
        var _crossfade4 = _interopRequireDefault(_crossfade3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var crossfade = {
          title: "Cross-Fade",
          description: "A cross-fade effect. Typically used as a transistion.",
          vertexShader: _crossfade2.default,
          fragmentShader: _crossfade4.default,
          properties: {
            mix: {type: "uniform", value: 0}
          },
          inputs: ["u_image_a", "u_image_b"]
        };
        exports2.default = crossfade;
        module2.exports = exports2.default;
      },
      "./src/Definitions/crossfade/crossfade.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/definitions.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _aaf_video_scale = __webpack_require__("./src/Definitions/aaf_video_scale/aaf_video_scale.js");
        var _aaf_video_scale2 = _interopRequireDefault(_aaf_video_scale);
        var _crossfade = __webpack_require__("./src/Definitions/crossfade/crossfade.js");
        var _crossfade2 = _interopRequireDefault(_crossfade);
        var _horizontalWipe = __webpack_require__("./src/Definitions/horizontalWipe/horizontalWipe.js");
        var _horizontalWipe2 = _interopRequireDefault(_horizontalWipe);
        var _verticalWipe = __webpack_require__("./src/Definitions/verticalWipe/verticalWipe.js");
        var _verticalWipe2 = _interopRequireDefault(_verticalWipe);
        var _randomDissolve = __webpack_require__("./src/Definitions/randomDissolve/randomDissolve.js");
        var _randomDissolve2 = _interopRequireDefault(_randomDissolve);
        var _toColorAndBackFade = __webpack_require__("./src/Definitions/toColorAndBackFade/toColorAndBackFade.js");
        var _toColorAndBackFade2 = _interopRequireDefault(_toColorAndBackFade);
        var _starWipe = __webpack_require__("./src/Definitions/starWipe/starWipe.js");
        var _starWipe2 = _interopRequireDefault(_starWipe);
        var _combine = __webpack_require__("./src/Definitions/combine/combine.js");
        var _combine2 = _interopRequireDefault(_combine);
        var _colorThreshold = __webpack_require__("./src/Definitions/colorThreshold/colorThreshold.js");
        var _colorThreshold2 = _interopRequireDefault(_colorThreshold);
        var _monochrome = __webpack_require__("./src/Definitions/monochrome/monochrome.js");
        var _monochrome2 = _interopRequireDefault(_monochrome);
        var _horizontalBlur = __webpack_require__("./src/Definitions/horizontalBlur/horizontalBlur.js");
        var _horizontalBlur2 = _interopRequireDefault(_horizontalBlur);
        var _verticalBlur = __webpack_require__("./src/Definitions/verticalBlur/verticalBlur.js");
        var _verticalBlur2 = _interopRequireDefault(_verticalBlur);
        var _aaf_video_flop = __webpack_require__("./src/Definitions/aaf_video_flop/aaf_video_flop.js");
        var _aaf_video_flop2 = _interopRequireDefault(_aaf_video_flop);
        var _aaf_video_flip = __webpack_require__("./src/Definitions/aaf_video_flip/aaf_video_flip.js");
        var _aaf_video_flip2 = _interopRequireDefault(_aaf_video_flip);
        var _aaf_video_position = __webpack_require__("./src/Definitions/aaf_video_position/aaf_video_position.js");
        var _aaf_video_position2 = _interopRequireDefault(_aaf_video_position);
        var _aaf_video_crop = __webpack_require__("./src/Definitions/aaf_video_crop/aaf_video_crop.js");
        var _aaf_video_crop2 = _interopRequireDefault(_aaf_video_crop);
        var _staticDissolve = __webpack_require__("./src/Definitions/staticDissolve/staticDissolve.js");
        var _staticDissolve2 = _interopRequireDefault(_staticDissolve);
        var _staticEffect = __webpack_require__("./src/Definitions/staticEffect/staticEffect.js");
        var _staticEffect2 = _interopRequireDefault(_staticEffect);
        var _dreamfade = __webpack_require__("./src/Definitions/dreamfade/dreamfade.js");
        var _dreamfade2 = _interopRequireDefault(_dreamfade);
        var _opacity = __webpack_require__("./src/Definitions/opacity/opacity.js");
        var _opacity2 = _interopRequireDefault(_opacity);
        var _crop = __webpack_require__("./src/Definitions/crop/crop.js");
        var _crop2 = _interopRequireDefault(_crop);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var DEFINITIONS = {
          AAF_VIDEO_SCALE: _aaf_video_scale2.default,
          CROSSFADE: _crossfade2.default,
          DREAMFADE: _dreamfade2.default,
          HORIZONTAL_WIPE: _horizontalWipe2.default,
          VERTICAL_WIPE: _verticalWipe2.default,
          RANDOM_DISSOLVE: _randomDissolve2.default,
          STATIC_DISSOLVE: _staticDissolve2.default,
          STATIC_EFFECT: _staticEffect2.default,
          TO_COLOR_AND_BACK: _toColorAndBackFade2.default,
          STAR_WIPE: _starWipe2.default,
          COMBINE: _combine2.default,
          COLORTHRESHOLD: _colorThreshold2.default,
          MONOCHROME: _monochrome2.default,
          HORIZONTAL_BLUR: _horizontalBlur2.default,
          VERTICAL_BLUR: _verticalBlur2.default,
          AAF_VIDEO_CROP: _aaf_video_crop2.default,
          AAF_VIDEO_POSITION: _aaf_video_position2.default,
          AAF_VIDEO_FLIP: _aaf_video_flip2.default,
          AAF_VIDEO_FLOP: _aaf_video_flop2.default,
          OPACITY: _opacity2.default,
          CROP: _crop2.default
        };
        exports2.default = DEFINITIONS;
        module2.exports = exports2.default;
      },
      "./src/Definitions/dreamfade/dreamfade.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    float wobble = 1.0 - abs((mix*2.0)-1.0);\n    vec2 pos = vec2(v_texCoord[0] + ((sin(v_texCoord[1]*(10.0*wobble*3.14) + wobble*10.0)/13.0)), v_texCoord[1]);\n    vec4 color_a = texture2D(u_image_a, pos);\n    vec4 color_b = texture2D(u_image_b, pos);\n    color_a[0] *= (1.0 - mix);\n    color_a[1] *= (1.0 - mix);\n    color_a[2] *= (1.0 - mix);\n    color_a[3] *= (1.0 - mix);\n    color_b[0] *= mix;\n    color_b[1] *= mix;\n    color_b[2] *= mix;\n    color_b[3] *= mix;\n    gl_FragColor = color_a + color_b;\n}\n";
      },
      "./src/Definitions/dreamfade/dreamfade.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _dreamfade = __webpack_require__("./src/Definitions/dreamfade/dreamfade.vert");
        var _dreamfade2 = _interopRequireDefault(_dreamfade);
        var _dreamfade3 = __webpack_require__("./src/Definitions/dreamfade/dreamfade.frag");
        var _dreamfade4 = _interopRequireDefault(_dreamfade3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var dreamfade = {
          title: "Dream-Fade",
          description: "A wobbly dream effect. Typically used as a transistion.",
          vertexShader: _dreamfade2.default,
          fragmentShader: _dreamfade4.default,
          properties: {
            mix: {type: "uniform", value: 0}
          },
          inputs: ["u_image_a", "u_image_b"]
        };
        exports2.default = dreamfade;
        module2.exports = exports2.default;
      },
      "./src/Definitions/dreamfade/dreamfade.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/horizontalBlur/horizontalBlur.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvarying vec2 v_blurTexCoords[14];\nvoid main(){\n    gl_FragColor = vec4(0.0);\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 0])*0.0044299121055113265;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 1])*0.00895781211794;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 2])*0.0215963866053;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 3])*0.0443683338718;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 4])*0.0776744219933;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 5])*0.115876621105;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 6])*0.147308056121;\n    gl_FragColor += texture2D(u_image, v_texCoord         )*0.159576912161;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 7])*0.147308056121;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 8])*0.115876621105;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 9])*0.0776744219933;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[10])*0.0443683338718;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[11])*0.0215963866053;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[12])*0.00895781211794;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[13])*0.0044299121055113265;\n}\n";
      },
      "./src/Definitions/horizontalBlur/horizontalBlur.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _horizontalBlur = __webpack_require__("./src/Definitions/horizontalBlur/horizontalBlur.vert");
        var _horizontalBlur2 = _interopRequireDefault(_horizontalBlur);
        var _horizontalBlur3 = __webpack_require__("./src/Definitions/horizontalBlur/horizontalBlur.frag");
        var _horizontalBlur4 = _interopRequireDefault(_horizontalBlur3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var horizontal_blur = {
          title: "Horizontal Blur",
          description: "A horizontal blur effect. Adpated from http://xissburg.com/faster-gaussian-blur-in-glsl/",
          vertexShader: _horizontalBlur2.default,
          fragmentShader: _horizontalBlur4.default,
          properties: {
            blurAmount: {type: "uniform", value: 1}
          },
          inputs: ["u_image"]
        };
        exports2.default = horizontal_blur;
        module2.exports = exports2.default;
      },
      "./src/Definitions/horizontalBlur/horizontalBlur.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nuniform float blurAmount;\nvarying vec2 v_texCoord;\nvarying vec2 v_blurTexCoords[14];\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n    v_blurTexCoords[ 0] = v_texCoord + vec2(-0.028 * blurAmount, 0.0);\n    v_blurTexCoords[ 1] = v_texCoord + vec2(-0.024 * blurAmount, 0.0);\n    v_blurTexCoords[ 2] = v_texCoord + vec2(-0.020 * blurAmount, 0.0);\n    v_blurTexCoords[ 3] = v_texCoord + vec2(-0.016 * blurAmount, 0.0);\n    v_blurTexCoords[ 4] = v_texCoord + vec2(-0.012 * blurAmount, 0.0);\n    v_blurTexCoords[ 5] = v_texCoord + vec2(-0.008 * blurAmount, 0.0);\n    v_blurTexCoords[ 6] = v_texCoord + vec2(-0.004 * blurAmount, 0.0);\n    v_blurTexCoords[ 7] = v_texCoord + vec2( 0.004 * blurAmount, 0.0);\n    v_blurTexCoords[ 8] = v_texCoord + vec2( 0.008 * blurAmount, 0.0);\n    v_blurTexCoords[ 9] = v_texCoord + vec2( 0.012 * blurAmount, 0.0);\n    v_blurTexCoords[10] = v_texCoord + vec2( 0.016 * blurAmount, 0.0);\n    v_blurTexCoords[11] = v_texCoord + vec2( 0.020 * blurAmount, 0.0);\n    v_blurTexCoords[12] = v_texCoord + vec2( 0.024 * blurAmount, 0.0);\n    v_blurTexCoords[13] = v_texCoord + vec2( 0.028 * blurAmount, 0.0);\n}\n";
      },
      "./src/Definitions/horizontalWipe/horizontalWipe.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    if (v_texCoord[0] > mix){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n";
      },
      "./src/Definitions/horizontalWipe/horizontalWipe.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _horizontalWipe = __webpack_require__("./src/Definitions/horizontalWipe/horizontalWipe.vert");
        var _horizontalWipe2 = _interopRequireDefault(_horizontalWipe);
        var _horizontalWipe3 = __webpack_require__("./src/Definitions/horizontalWipe/horizontalWipe.frag");
        var _horizontalWipe4 = _interopRequireDefault(_horizontalWipe3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var horizontal_wipe = {
          title: "Horizontal Wipe",
          description: "A horizontal wipe effect. Typically used as a transistion.",
          vertexShader: _horizontalWipe2.default,
          fragmentShader: _horizontalWipe4.default,
          properties: {
            mix: {type: "uniform", value: 0}
          },
          inputs: ["u_image_a", "u_image_b"]
        };
        exports2.default = horizontal_wipe;
        module2.exports = exports2.default;
      },
      "./src/Definitions/horizontalWipe/horizontalWipe.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/monochrome/monochrome.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform vec3 inputMix;\nuniform vec3 outputMix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    float mono = color[0]*inputMix[0] + color[1]*inputMix[1] + color[2]*inputMix[2];\n    color[0] = mono * outputMix[0];\n    color[1] = mono * outputMix[1];\n    color[2] = mono * outputMix[2];\n    gl_FragColor = color;\n}\n";
      },
      "./src/Definitions/monochrome/monochrome.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _monochrome = __webpack_require__("./src/Definitions/monochrome/monochrome.vert");
        var _monochrome2 = _interopRequireDefault(_monochrome);
        var _monochrome3 = __webpack_require__("./src/Definitions/monochrome/monochrome.frag");
        var _monochrome4 = _interopRequireDefault(_monochrome3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var monochrome = {
          title: "Monochrome",
          description: "Change images to a single chroma (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
          vertexShader: _monochrome2.default,
          fragmentShader: _monochrome4.default,
          properties: {
            inputMix: {type: "uniform", value: [0.4, 0.6, 0.2]},
            outputMix: {type: "uniform", value: [1, 1, 1]}
          },
          inputs: ["u_image"]
        };
        exports2.default = monochrome;
        module2.exports = exports2.default;
      },
      "./src/Definitions/monochrome/monochrome.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/opacity/opacity.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float opacity;\nvarying vec2 v_texCoord;\nvarying float v_opacity;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    color[3] *= opacity;\n    gl_FragColor = color;\n}\n";
      },
      "./src/Definitions/opacity/opacity.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _opacity = __webpack_require__("./src/Definitions/opacity/opacity.vert");
        var _opacity2 = _interopRequireDefault(_opacity);
        var _opacity3 = __webpack_require__("./src/Definitions/opacity/opacity.frag");
        var _opacity4 = _interopRequireDefault(_opacity3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var opacity = {
          title: "Opacity",
          description: "Sets the opacity of an input.",
          vertexShader: _opacity2.default,
          fragmentShader: _opacity4.default,
          properties: {
            opacity: {type: "uniform", value: 0.7}
          },
          inputs: ["u_image"]
        };
        exports2.default = opacity;
        module2.exports = exports2.default;
      },
      "./src/Definitions/opacity/opacity.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/randomDissolve/randomDissolve.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nfloat rand(vec2 co){\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    if (clamp(rand(v_texCoord),  0.01, 1.001) > mix){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n";
      },
      "./src/Definitions/randomDissolve/randomDissolve.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _randomDissolve = __webpack_require__("./src/Definitions/randomDissolve/randomDissolve.vert");
        var _randomDissolve2 = _interopRequireDefault(_randomDissolve);
        var _randomDissolve3 = __webpack_require__("./src/Definitions/randomDissolve/randomDissolve.frag");
        var _randomDissolve4 = _interopRequireDefault(_randomDissolve3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var randomDissolve = {
          title: "Random Dissolve",
          description: "A random dissolve effect. Typically used as a transistion.",
          vertexShader: _randomDissolve2.default,
          fragmentShader: _randomDissolve4.default,
          properties: {
            mix: {type: "uniform", value: 0}
          },
          inputs: ["u_image_a", "u_image_b"]
        };
        exports2.default = randomDissolve;
        module2.exports = exports2.default;
      },
      "./src/Definitions/randomDissolve/randomDissolve.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/starWipe/starWipe.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nfloat sign (vec2 p1, vec2 p2, vec2 p3){\n    return (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1]);\n}\nbool pointInTriangle(vec2 pt, vec2 v1, vec2 v2, vec2 v3){\n    bool b1, b2, b3;\n    b1 = sign(pt, v1, v2) < 0.0;\n    b2 = sign(pt, v2, v3) < 0.0;\n    b3 = sign(pt, v3, v1) < 0.0;\n    return ((b1 == b2) && (b2 == b3));\n}\nvec2 rotatePointAboutPoint(vec2 point, vec2 pivot, float angle){\n    float s = sin(angle);\n    float c = cos(angle);\n    float x = point[0] - pivot[0];\n    float y = point[1] - pivot[1];\n    float new_x = x * c - y * s;\n    float new_y = x * s + y * c;\n    return vec2(new_x + pivot[0], new_y+pivot[1]);\n}\n\nvoid main(){\n    vec4 color_a = texture2D(u_image_b, v_texCoord);\n    vec4 color_b = texture2D(u_image_a, v_texCoord);\n    vec2 t0_p0,t0_p1,t0_p2,t1_p0,t1_p1,t1_p2,t2_p0,t2_p1,t2_p2,t3_p0,t3_p1,t3_p2;\n    vec2 t4_p0,t4_p1,t4_p2,t5_p0,t5_p1,t5_p2,t6_p0,t6_p1,t6_p2,t7_p0,t7_p1,t7_p2;\n\n\n    t0_p0 = vec2(0.0, 0.25) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\n    t0_p1 = vec2(0.0, -0.25) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\n    t0_p2 = vec2(1.0, 0.0) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\n\n    t1_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854);\n    t1_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854);\n    t1_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854);\n\n    t2_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 2.0);\n    t2_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 2.0);\n    t2_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 2.0);\n\n    t3_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 3.0);\n    t3_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 3.0);\n    t3_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 3.0);\n\n    t4_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 4.0);\n    t4_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 4.0);\n    t4_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 4.0);\n\n    t5_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 5.0);\n    t5_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 5.0);\n    t5_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 5.0);\n\n    t6_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 6.0);\n    t6_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 6.0);\n    t6_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 6.0);\n\n    t7_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 7.0);\n    t7_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 7.0);\n    t7_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 7.0);\n\n    if(mix > 0.99){\n        gl_FragColor = color_a;\n        return;\n    }\n    if(mix < 0.01){\n        gl_FragColor = color_b;\n        return;\n    }\n    if(pointInTriangle(v_texCoord, t0_p0, t0_p1, t0_p2) || pointInTriangle(v_texCoord, t1_p0, t1_p1, t1_p2) || pointInTriangle(v_texCoord, t2_p0, t2_p1, t2_p2) || pointInTriangle(v_texCoord, t3_p0, t3_p1, t3_p2) || pointInTriangle(v_texCoord, t4_p0, t4_p1, t4_p2) || pointInTriangle(v_texCoord, t5_p0, t5_p1, t5_p2) || pointInTriangle(v_texCoord, t6_p0, t6_p1, t6_p2) || pointInTriangle(v_texCoord, t7_p0, t7_p1, t7_p2)){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n";
      },
      "./src/Definitions/starWipe/starWipe.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _starWipe = __webpack_require__("./src/Definitions/starWipe/starWipe.vert");
        var _starWipe2 = _interopRequireDefault(_starWipe);
        var _starWipe3 = __webpack_require__("./src/Definitions/starWipe/starWipe.frag");
        var _starWipe4 = _interopRequireDefault(_starWipe3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var starWipe = {
          title: "Star Wipe Fade",
          description: "A classic star wipe transistion. Typically used as a transistion.",
          vertexShader: _starWipe2.default,
          fragmentShader: _starWipe4.default,
          properties: {
            mix: {type: "uniform", value: 1}
          },
          inputs: ["u_image_a", "u_image_b"]
        };
        exports2.default = starWipe;
        module2.exports = exports2.default;
      },
      "./src/Definitions/starWipe/starWipe.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/staticDissolve/staticDissolve.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nuniform float currentTime;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nfloat rand(vec2 co, float currentTime){\n    return fract(sin(dot(co.xy,vec2(12.9898,78.233))+currentTime) * 43758.5453);\n}\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    if (clamp(rand(v_texCoord, currentTime),  0.01, 1.001) > mix){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n";
      },
      "./src/Definitions/staticDissolve/staticDissolve.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _staticDissolve = __webpack_require__("./src/Definitions/staticDissolve/staticDissolve.vert");
        var _staticDissolve2 = _interopRequireDefault(_staticDissolve);
        var _staticDissolve3 = __webpack_require__("./src/Definitions/staticDissolve/staticDissolve.frag");
        var _staticDissolve4 = _interopRequireDefault(_staticDissolve3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var staticDissolve = {
          title: "Static Dissolve",
          description: "A static dissolve effect. Typically used as a transistion.",
          vertexShader: _staticDissolve2.default,
          fragmentShader: _staticDissolve4.default,
          properties: {
            mix: {type: "uniform", value: 0}
          },
          inputs: ["u_image_a", "u_image_b"]
        };
        exports2.default = staticDissolve;
        module2.exports = exports2.default;
      },
      "./src/Definitions/staticDissolve/staticDissolve.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/staticEffect/staticEffect.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float currentTime;\nuniform float amount;\nvarying vec2 v_texCoord;\nuniform vec3 weight;\nfloat rand(vec2 co, float currentTime){\n    return fract(sin(dot(co.xy,vec2(12.9898,78.233))+currentTime) * 43758.5453);\n}\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    color[0] = color[0] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[0] * amount;\n    color[1] = color[1] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[1] * amount;\n    color[2] = color[2] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[2] *amount;\n    gl_FragColor = color;\n}\n";
      },
      "./src/Definitions/staticEffect/staticEffect.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _staticEffect = __webpack_require__("./src/Definitions/staticEffect/staticEffect.vert");
        var _staticEffect2 = _interopRequireDefault(_staticEffect);
        var _staticEffect3 = __webpack_require__("./src/Definitions/staticEffect/staticEffect.frag");
        var _staticEffect4 = _interopRequireDefault(_staticEffect3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var staticEffect = {
          title: "Static",
          description: "A static effect to add pseudo random noise to a video",
          vertexShader: _staticEffect2.default,
          fragmentShader: _staticEffect4.default,
          properties: {
            weight: {type: "uniform", value: [1, 1, 1]},
            amount: {type: "uniform", value: 1}
          },
          inputs: ["u_image"]
        };
        exports2.default = staticEffect;
        module2.exports = exports2.default;
      },
      "./src/Definitions/staticEffect/staticEffect.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/toColorAndBackFade/toColorAndBackFade.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nuniform vec4 color;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    float mix_amount = (mix *2.0) - 1.0;\n    if(mix_amount < 0.0){\n        gl_FragColor = abs(mix_amount) * color_a + (1.0 - abs(mix_amount)) * color;\n    } else {\n        gl_FragColor = mix_amount * color_b + (1.0 - mix_amount) * color;\n    }\n}\n";
      },
      "./src/Definitions/toColorAndBackFade/toColorAndBackFade.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _toColorAndBackFade = __webpack_require__("./src/Definitions/toColorAndBackFade/toColorAndBackFade.vert");
        var _toColorAndBackFade2 = _interopRequireDefault(_toColorAndBackFade);
        var _toColorAndBackFade3 = __webpack_require__("./src/Definitions/toColorAndBackFade/toColorAndBackFade.frag");
        var _toColorAndBackFade4 = _interopRequireDefault(_toColorAndBackFade3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var toColorAndBackFade = {
          title: "To Color And Back Fade",
          description: "A fade to black and back effect. Setting mix to 0.5 is a fully solid color frame. Typically used as a transistion.",
          vertexShader: _toColorAndBackFade2.default,
          fragmentShader: _toColorAndBackFade4.default,
          properties: {
            mix: {type: "uniform", value: 0},
            color: {type: "uniform", value: [0, 0, 0, 0]}
          },
          inputs: ["u_image_a", "u_image_b"]
        };
        exports2.default = toColorAndBackFade;
        module2.exports = exports2.default;
      },
      "./src/Definitions/toColorAndBackFade/toColorAndBackFade.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/Definitions/verticalBlur/verticalBlur.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvarying vec2 v_blurTexCoords[14];\nvoid main(){\n    gl_FragColor = vec4(0.0);\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 0])*0.0044299121055113265;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 1])*0.00895781211794;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 2])*0.0215963866053;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 3])*0.0443683338718;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 4])*0.0776744219933;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 5])*0.115876621105;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 6])*0.147308056121;\n    gl_FragColor += texture2D(u_image, v_texCoord         )*0.159576912161;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 7])*0.147308056121;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 8])*0.115876621105;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 9])*0.0776744219933;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[10])*0.0443683338718;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[11])*0.0215963866053;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[12])*0.00895781211794;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[13])*0.0044299121055113265;\n}\n";
      },
      "./src/Definitions/verticalBlur/verticalBlur.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _verticalBlur = __webpack_require__("./src/Definitions/verticalBlur/verticalBlur.vert");
        var _verticalBlur2 = _interopRequireDefault(_verticalBlur);
        var _verticalBlur3 = __webpack_require__("./src/Definitions/verticalBlur/verticalBlur.frag");
        var _verticalBlur4 = _interopRequireDefault(_verticalBlur3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var verticalBlur = {
          title: "Vertical Blur",
          description: "A vertical blur effect. Adpated from http://xissburg.com/faster-gaussian-blur-in-glsl/",
          vertexShader: _verticalBlur2.default,
          fragmentShader: _verticalBlur4.default,
          properties: {
            blurAmount: {type: "uniform", value: 1}
          },
          inputs: ["u_image"]
        };
        exports2.default = verticalBlur;
        module2.exports = exports2.default;
      },
      "./src/Definitions/verticalBlur/verticalBlur.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nuniform float blurAmount;\nvarying vec2 v_blurTexCoords[14];\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n    v_blurTexCoords[ 0] = v_texCoord + vec2(0.0,-0.028 * blurAmount);\n    v_blurTexCoords[ 1] = v_texCoord + vec2(0.0,-0.024 * blurAmount);\n    v_blurTexCoords[ 2] = v_texCoord + vec2(0.0,-0.020 * blurAmount);\n    v_blurTexCoords[ 3] = v_texCoord + vec2(0.0,-0.016 * blurAmount);\n    v_blurTexCoords[ 4] = v_texCoord + vec2(0.0,-0.012 * blurAmount);\n    v_blurTexCoords[ 5] = v_texCoord + vec2(0.0,-0.008 * blurAmount);\n    v_blurTexCoords[ 6] = v_texCoord + vec2(0.0,-0.004 * blurAmount);\n    v_blurTexCoords[ 7] = v_texCoord + vec2(0.0, 0.004 * blurAmount);\n    v_blurTexCoords[ 8] = v_texCoord + vec2(0.0, 0.008 * blurAmount);\n    v_blurTexCoords[ 9] = v_texCoord + vec2(0.0, 0.012 * blurAmount);\n    v_blurTexCoords[10] = v_texCoord + vec2(0.0, 0.016 * blurAmount);\n    v_blurTexCoords[11] = v_texCoord + vec2(0.0, 0.020 * blurAmount);\n    v_blurTexCoords[12] = v_texCoord + vec2(0.0, 0.024 * blurAmount);\n    v_blurTexCoords[13] = v_texCoord + vec2(0.0, 0.028 * blurAmount);\n}\n";
      },
      "./src/Definitions/verticalWipe/verticalWipe.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    if (v_texCoord[1] > mix){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n";
      },
      "./src/Definitions/verticalWipe/verticalWipe.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _verticalWipe = __webpack_require__("./src/Definitions/verticalWipe/verticalWipe.vert");
        var _verticalWipe2 = _interopRequireDefault(_verticalWipe);
        var _verticalWipe3 = __webpack_require__("./src/Definitions/verticalWipe/verticalWipe.frag");
        var _verticalWipe4 = _interopRequireDefault(_verticalWipe3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var verticalWipe = {
          title: "vertical Wipe",
          description: "A vertical wipe effect. Typically used as a transistion.",
          vertexShader: _verticalWipe2.default,
          fragmentShader: _verticalWipe4.default,
          properties: {
            mix: {type: "uniform", value: 0}
          },
          inputs: ["u_image_a", "u_image_b"]
        };
        exports2.default = verticalWipe;
        module2.exports = exports2.default;
      },
      "./src/Definitions/verticalWipe/verticalWipe.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/DestinationNode/destinationnode.frag": function(module2, exports2) {
        module2.exports = "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvarying float v_progress;\nvoid main(){\n    gl_FragColor = texture2D(u_image, v_texCoord);\n}\n";
      },
      "./src/DestinationNode/destinationnode.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.DESTINATIONTYPE = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _processingnode = __webpack_require__("./src/ProcessingNodes/processingnode.js");
        var _processingnode2 = _interopRequireDefault(_processingnode);
        var _destinationnode = __webpack_require__("./src/DestinationNode/destinationnode.frag");
        var _destinationnode2 = _interopRequireDefault(_destinationnode);
        var _destinationnode3 = __webpack_require__("./src/DestinationNode/destinationnode.vert");
        var _destinationnode4 = _interopRequireDefault(_destinationnode3);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var TYPE = "DestinationNode";
        var DestinationNode = function(_ProcessingNode) {
          _inherits(DestinationNode2, _ProcessingNode);
          function DestinationNode2(gl, renderGraph) {
            _classCallCheck(this, DestinationNode2);
            var definition = {
              fragmentShader: _destinationnode2.default,
              vertexShader: _destinationnode4.default,
              properties: {},
              inputs: ["u_image"]
            };
            var _this = _possibleConstructorReturn(this, (DestinationNode2.__proto__ || Object.getPrototypeOf(DestinationNode2)).call(this, gl, renderGraph, definition, definition.inputs, false));
            _this._displayName = TYPE;
            return _this;
          }
          _createClass(DestinationNode2, [{
            key: "_render",
            value: function _render() {
              var _this2 = this;
              var gl = this._gl;
              gl.bindFramebuffer(gl.FRAMEBUFFER, null);
              gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
              gl.enable(gl.BLEND);
              gl.clearColor(0, 0, 0, 0);
              gl.clear(gl.COLOR_BUFFER_BIT);
              this.inputs.forEach(function(node) {
                _get(DestinationNode2.prototype.__proto__ || Object.getPrototypeOf(DestinationNode2.prototype), "_render", _this2).call(_this2);
                var texture = node._texture;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = void 0;
                try {
                  for (var _iterator = _this2._shaderInputsTextureUnitMapping[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var mapping = _step.value;
                    gl.activeTexture(mapping.textureUnit);
                    gl.uniform1i(mapping.location, mapping.textureUnitIndex);
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }
                gl.drawArrays(gl.TRIANGLES, 0, 6);
              });
            }
          }]);
          return DestinationNode2;
        }(_processingnode2.default);
        exports2.DESTINATIONTYPE = TYPE;
        exports2.default = DestinationNode;
      },
      "./src/DestinationNode/destinationnode.vert": function(module2, exports2) {
        module2.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n";
      },
      "./src/ProcessingNodes/compositingnode.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.COMPOSITINGTYPE = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _processingnode = __webpack_require__("./src/ProcessingNodes/processingnode.js");
        var _processingnode2 = _interopRequireDefault(_processingnode);
        var _utils = __webpack_require__("./src/utils.js");
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var TYPE = "CompositingNode";
        var CompositingNode = function(_ProcessingNode) {
          _inherits(CompositingNode2, _ProcessingNode);
          function CompositingNode2(gl, renderGraph, definition) {
            _classCallCheck(this, CompositingNode2);
            var placeholderTexture = (0, _utils.createElementTexture)(gl);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
            var _this = _possibleConstructorReturn(this, (CompositingNode2.__proto__ || Object.getPrototypeOf(CompositingNode2)).call(this, gl, renderGraph, definition, definition.inputs, false));
            _this._placeholderTexture = placeholderTexture;
            _this._displayName = TYPE;
            return _this;
          }
          _createClass(CompositingNode2, [{
            key: "_render",
            value: function _render() {
              var _this2 = this;
              var gl = this._gl;
              gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer);
              gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._texture, 0);
              gl.clearColor(0, 0, 0, 0);
              gl.clear(gl.COLOR_BUFFER_BIT);
              gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
              this.inputs.forEach(function(node) {
                if (node === void 0)
                  return;
                _get(CompositingNode2.prototype.__proto__ || Object.getPrototypeOf(CompositingNode2.prototype), "_render", _this2).call(_this2);
                var texture = node._texture;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = void 0;
                try {
                  for (var _iterator = _this2._shaderInputsTextureUnitMapping[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var mapping = _step.value;
                    gl.activeTexture(mapping.textureUnit);
                    gl.uniform1i(mapping.location, mapping.textureUnitIndex);
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }
                gl.drawArrays(gl.TRIANGLES, 0, 6);
              });
              gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            }
          }]);
          return CompositingNode2;
        }(_processingnode2.default);
        exports2.COMPOSITINGTYPE = TYPE;
        exports2.default = CompositingNode;
      },
      "./src/ProcessingNodes/effectnode.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.EFFECTYPE = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _processingnode = __webpack_require__("./src/ProcessingNodes/processingnode.js");
        var _processingnode2 = _interopRequireDefault(_processingnode);
        var _utils = __webpack_require__("./src/utils.js");
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var TYPE = "EffectNode";
        var EffectNode = function(_ProcessingNode) {
          _inherits(EffectNode2, _ProcessingNode);
          function EffectNode2(gl, renderGraph, definition) {
            _classCallCheck(this, EffectNode2);
            var placeholderTexture = (0, _utils.createElementTexture)(gl);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
            var _this = _possibleConstructorReturn(this, (EffectNode2.__proto__ || Object.getPrototypeOf(EffectNode2)).call(this, gl, renderGraph, definition, definition.inputs, true));
            _this._placeholderTexture = placeholderTexture;
            _this._displayName = TYPE;
            return _this;
          }
          _createClass(EffectNode2, [{
            key: "_render",
            value: function _render() {
              var gl = this._gl;
              gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer);
              gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._texture, 0);
              gl.clearColor(0, 0, 0, 0);
              gl.clear(gl.COLOR_BUFFER_BIT);
              gl.blendFunc(gl.ONE, gl.ZERO);
              _get(EffectNode2.prototype.__proto__ || Object.getPrototypeOf(EffectNode2.prototype), "_render", this).call(this);
              var inputs = this._renderGraph.getInputsForNode(this);
              for (var i = 0; i < this._shaderInputsTextureUnitMapping.length; i++) {
                var inputTexture = this._placeholderTexture;
                var textureUnit = this._shaderInputsTextureUnitMapping[i].textureUnit;
                if (i < inputs.length && inputs[i] !== void 0) {
                  inputTexture = inputs[i]._texture;
                }
                gl.activeTexture(textureUnit);
                gl.uniform1i(this._shaderInputsTextureUnitMapping[i].location, this._shaderInputsTextureUnitMapping[i].textureUnitIndex);
                gl.bindTexture(gl.TEXTURE_2D, inputTexture);
              }
              gl.drawArrays(gl.TRIANGLES, 0, 6);
              gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            }
          }]);
          return EffectNode2;
        }(_processingnode2.default);
        exports2.EFFECTYPE = TYPE;
        exports2.default = EffectNode;
      },
      "./src/ProcessingNodes/processingnode.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.PROCESSINGTYPE = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _graphnode = __webpack_require__("./src/graphnode.js");
        var _graphnode2 = _interopRequireDefault(_graphnode);
        var _utils = __webpack_require__("./src/utils.js");
        var _exceptions = __webpack_require__("./src/exceptions.js");
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var TYPE = "ProcessingNode";
        var ProcessingNode = function(_GraphNode) {
          _inherits(ProcessingNode2, _GraphNode);
          function ProcessingNode2(gl, renderGraph, definition, inputNames, limitConnections) {
            _classCallCheck(this, ProcessingNode2);
            var _this = _possibleConstructorReturn(this, (ProcessingNode2.__proto__ || Object.getPrototypeOf(ProcessingNode2)).call(this, gl, renderGraph, inputNames, limitConnections));
            _this._vertexShader = (0, _utils.compileShader)(gl, definition.vertexShader, gl.VERTEX_SHADER);
            _this._fragmentShader = (0, _utils.compileShader)(gl, definition.fragmentShader, gl.FRAGMENT_SHADER);
            _this._definition = definition;
            _this._properties = {};
            for (var propertyName in definition.properties) {
              var propertyValue = definition.properties[propertyName].value;
              if (Object.prototype.toString.call(propertyValue) === "[object Array]") {
                propertyValue = definition.properties[propertyName].value.slice();
              }
              var propertyType = definition.properties[propertyName].type;
              _this._properties[propertyName] = {
                type: propertyType,
                value: propertyValue
              };
            }
            _this._shaderInputsTextureUnitMapping = [];
            _this._maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
            _this._boundTextureUnits = 0;
            _this._texture = (0, _utils.createElementTexture)(gl);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.canvas.width, gl.canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
            _this._program = (0, _utils.createShaderProgram)(gl, _this._vertexShader, _this._fragmentShader);
            _this._framebuffer = gl.createFramebuffer();
            gl.bindFramebuffer(gl.FRAMEBUFFER, _this._framebuffer);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, _this._texture, 0);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            var _loop = function _loop2(_propertyName4) {
              Object.defineProperty(_this, _propertyName4, {
                get: function get() {
                  return this._properties[_propertyName4].value;
                },
                set: function set(passedValue) {
                  this._properties[_propertyName4].value = passedValue;
                }
              });
            };
            for (var _propertyName in _this._properties) {
              _loop(_propertyName);
            }
            for (var _propertyName2 in _this._properties) {
              var _propertyValue = _this._properties[_propertyName2].value;
              if (_propertyValue instanceof Image) {
                _this._properties[_propertyName2].texture = (0, _utils.createElementTexture)(gl);
                _this._properties[_propertyName2].textureUnit = gl.TEXTURE0 + _this._boundTextureUnits;
                _this._properties[_propertyName2].textureUnitIndex = _this._boundTextureUnits;
                _this._boundTextureUnits += 1;
                if (_this._boundTextureUnits > _this._maxTextureUnits) {
                  throw new _exceptions.RenderException("Trying to bind more than available textures units to shader");
                }
              }
            }
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = void 0;
            try {
              for (var _iterator = definition.inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var inputName = _step.value;
                _this._shaderInputsTextureUnitMapping.push({
                  name: inputName,
                  textureUnit: gl.TEXTURE0 + _this._boundTextureUnits,
                  textureUnitIndex: _this._boundTextureUnits,
                  location: gl.getUniformLocation(_this._program, inputName)
                });
                _this._boundTextureUnits += 1;
                if (_this._boundTextureUnits > _this._maxTextureUnits) {
                  throw new _exceptions.RenderException("Trying to bind more than available textures units to shader");
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
            for (var _propertyName3 in _this._properties) {
              if (_this._properties[_propertyName3].type === "uniform") {
                _this._properties[_propertyName3].location = _this._gl.getUniformLocation(_this._program, _propertyName3);
              }
            }
            _this._currentTimeLocation = _this._gl.getUniformLocation(_this._program, "currentTime");
            _this._currentTime = 0;
            var positionLocation = gl.getAttribLocation(_this._program, "a_position");
            var buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0]), gl.STATIC_DRAW);
            var texCoordLocation = gl.getAttribLocation(_this._program, "a_texCoord");
            gl.enableVertexAttribArray(texCoordLocation);
            gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
            _this._displayName = TYPE;
            return _this;
          }
          _createClass(ProcessingNode2, [{
            key: "setProperty",
            value: function setProperty(name, value) {
              this._properties[name].value = value;
            }
          }, {
            key: "getProperty",
            value: function getProperty(name) {
              return this._properties[name].value;
            }
          }, {
            key: "destroy",
            value: function destroy() {
              _get(ProcessingNode2.prototype.__proto__ || Object.getPrototypeOf(ProcessingNode2.prototype), "destroy", this).call(this);
              for (var propertyName in this._properties) {
                var propertyValue = this._properties[propertyName].value;
                if (propertyValue instanceof Image) {
                  this._gl.deleteTexture(this._properties[propertyName].texture);
                  this._texture = void 0;
                }
              }
              this._gl.deleteTexture(this._texture);
              this._texture = void 0;
              this._gl.detachShader(this._program, this._vertexShader);
              this._gl.detachShader(this._program, this._fragmentShader);
              this._gl.deleteShader(this._vertexShader);
              this._gl.deleteShader(this._fragmentShader);
              this._gl.deleteProgram(this._program);
              this._gl.deleteFramebuffer(this._framebuffer);
            }
          }, {
            key: "_update",
            value: function _update(currentTime) {
              this._currentTime = currentTime;
            }
          }, {
            key: "_seek",
            value: function _seek(currentTime) {
              this._currentTime = currentTime;
            }
          }, {
            key: "_render",
            value: function _render() {
              this._rendered = true;
              var gl = this._gl;
              gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
              gl.useProgram(this._program);
              gl.uniform1f(this._currentTimeLocation, parseFloat(this._currentTime));
              for (var propertyName in this._properties) {
                var propertyValue = this._properties[propertyName].value;
                var propertyType = this._properties[propertyName].type;
                var propertyLocation = this._properties[propertyName].location;
                if (propertyType !== "uniform")
                  continue;
                if (typeof propertyValue === "number") {
                  gl.uniform1f(propertyLocation, propertyValue);
                } else if (Object.prototype.toString.call(propertyValue) === "[object Array]") {
                  if (propertyValue.length === 1) {
                    gl.uniform1fv(propertyLocation, propertyValue);
                  } else if (propertyValue.length === 2) {
                    gl.uniform2fv(propertyLocation, propertyValue);
                  } else if (propertyValue.length === 3) {
                    gl.uniform3fv(propertyLocation, propertyValue);
                  } else if (propertyValue.length === 4) {
                    gl.uniform4fv(propertyLocation, propertyValue);
                  } else {
                    console.debug("Shader parameter", propertyName, "is too long an array:", propertyValue);
                  }
                } else if (propertyValue instanceof Image) {
                  var texture = this._properties[propertyName].texture;
                  var textureUnit = this._properties[propertyName].textureUnit;
                  var textureUnitIndex = this._properties[propertyName].textureUnit;
                  (0, _utils.updateTexture)(gl, texture, propertyValue);
                  gl.activeTexture(textureUnit);
                  gl.uniform1i(propertyLocation, textureUnitIndex);
                  gl.bindTexture(gl.TEXTURE_2D, texture);
                } else
                  ;
              }
            }
          }]);
          return ProcessingNode2;
        }(_graphnode2.default);
        exports2.PROCESSINGTYPE = TYPE;
        exports2.default = ProcessingNode;
      },
      "./src/ProcessingNodes/transitionnode.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.TRANSITIONTYPE = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _effectnode = __webpack_require__("./src/ProcessingNodes/effectnode.js");
        var _effectnode2 = _interopRequireDefault(_effectnode);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var TYPE = "TransitionNode";
        var TransitionNode = function(_EffectNode) {
          _inherits(TransitionNode2, _EffectNode);
          function TransitionNode2(gl, renderGraph, definition) {
            _classCallCheck(this, TransitionNode2);
            var _this = _possibleConstructorReturn(this, (TransitionNode2.__proto__ || Object.getPrototypeOf(TransitionNode2)).call(this, gl, renderGraph, definition));
            _this._transitions = {};
            _this._initialPropertyValues = {};
            for (var propertyName in _this._properties) {
              _this._initialPropertyValues[propertyName] = _this._properties[propertyName].value;
            }
            _this._displayName = TYPE;
            return _this;
          }
          _createClass(TransitionNode2, [{
            key: "_doesTransitionFitOnTimeline",
            value: function _doesTransitionFitOnTimeline(testTransition) {
              if (this._transitions[testTransition.property] === void 0)
                return true;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = void 0;
              try {
                for (var _iterator = this._transitions[testTransition.property][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var transition = _step.value;
                  if (testTransition.start > transition.start && testTransition.start < transition.end)
                    return false;
                  if (testTransition.end > transition.start && testTransition.end < transition.end)
                    return false;
                  if (transition.start > testTransition.start && transition.start < testTransition.end)
                    return false;
                  if (transition.end > testTransition.start && transition.end < testTransition.end)
                    return false;
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
              return true;
            }
          }, {
            key: "_insertTransitionInTimeline",
            value: function _insertTransitionInTimeline(transition) {
              if (this._transitions[transition.property] === void 0)
                this._transitions[transition.property] = [];
              this._transitions[transition.property].push(transition);
              this._transitions[transition.property].sort(function(a, b) {
                return a.start - b.start;
              });
            }
          }, {
            key: "transition",
            value: function transition(startTime, endTime, currentValue, targetValue) {
              var propertyName = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "mix";
              var transition2 = {
                start: startTime + this._currentTime,
                end: endTime + this._currentTime,
                current: currentValue,
                target: targetValue,
                property: propertyName
              };
              if (!this._doesTransitionFitOnTimeline(transition2))
                return false;
              this._insertTransitionInTimeline(transition2);
              return true;
            }
          }, {
            key: "transitionAt",
            value: function transitionAt(startTime, endTime, currentValue, targetValue) {
              var propertyName = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "mix";
              var transition = {
                start: startTime,
                end: endTime,
                current: currentValue,
                target: targetValue,
                property: propertyName
              };
              if (!this._doesTransitionFitOnTimeline(transition))
                return false;
              this._insertTransitionInTimeline(transition);
              return true;
            }
          }, {
            key: "clearTransitions",
            value: function clearTransitions(propertyName) {
              if (propertyName === void 0) {
                this._transitions = {};
              } else {
                this._transitions[propertyName] = [];
              }
            }
          }, {
            key: "clearTransition",
            value: function clearTransition(propertyName, time) {
              var transitionIndex = void 0;
              for (var i = 0; i < this._transitions[propertyName].length; i++) {
                var transition = this._transitions[propertyName][i];
                if (time > transition.start && time < transition.end) {
                  transitionIndex = i;
                }
              }
              if (transitionIndex !== void 0) {
                this._transitions[propertyName].splice(transitionIndex, 1);
                return true;
              }
              return false;
            }
          }, {
            key: "_update",
            value: function _update(currentTime) {
              _get(TransitionNode2.prototype.__proto__ || Object.getPrototypeOf(TransitionNode2.prototype), "_update", this).call(this, currentTime);
              for (var propertyName in this._transitions) {
                var value = this[propertyName];
                if (this._transitions[propertyName].length > 0) {
                  value = this._transitions[propertyName][0].current;
                }
                var transitionActive = false;
                for (var i = 0; i < this._transitions[propertyName].length; i++) {
                  var transition = this._transitions[propertyName][i];
                  if (currentTime > transition.end) {
                    value = transition.target;
                    continue;
                  }
                  if (currentTime > transition.start && currentTime < transition.end) {
                    var difference = transition.target - transition.current;
                    var progress = (this._currentTime - transition.start) / (transition.end - transition.start);
                    transitionActive = true;
                    this[propertyName] = transition.current + difference * progress;
                    break;
                  }
                }
                if (!transitionActive)
                  this[propertyName] = value;
              }
            }
          }]);
          return TransitionNode2;
        }(_effectnode2.default);
        exports2.TRANSITIONTYPE = TYPE;
        exports2.default = TransitionNode;
      },
      "./src/SourceNodes/audionode.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.AUDIOTYPE = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _medianode = __webpack_require__("./src/SourceNodes/medianode.js");
        var _medianode2 = _interopRequireDefault(_medianode);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var TYPE = "AudioNode";
        var AudioNode = function(_MediaNode) {
          _inherits(AudioNode2, _MediaNode);
          function AudioNode2() {
            _classCallCheck(this, AudioNode2);
            var _this = _possibleConstructorReturn(this, (AudioNode2.__proto__ || Object.getPrototypeOf(AudioNode2)).apply(this, arguments));
            _this._displayName = TYPE;
            _this._elementType = "audio";
            return _this;
          }
          _createClass(AudioNode2, [{
            key: "_update",
            value: function _update(currentTime) {
              _get(AudioNode2.prototype.__proto__ || Object.getPrototypeOf(AudioNode2.prototype), "_update", this).call(this, currentTime, false);
            }
          }]);
          return AudioNode2;
        }(_medianode2.default);
        exports2.AUDIOTYPE = TYPE;
        exports2.default = AudioNode;
      },
      "./src/SourceNodes/canvasnode.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.CANVASTYPE = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _sourcenode = __webpack_require__("./src/SourceNodes/sourcenode.js");
        var _sourcenode2 = _interopRequireDefault(_sourcenode);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var TYPE = "CanvasNode";
        var CanvasNode = function(_SourceNode) {
          _inherits(CanvasNode2, _SourceNode);
          function CanvasNode2(canvas, gl, renderGraph, currentTime) {
            var preloadTime = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 4;
            _classCallCheck(this, CanvasNode2);
            var _this = _possibleConstructorReturn(this, (CanvasNode2.__proto__ || Object.getPrototypeOf(CanvasNode2)).call(this, canvas, gl, renderGraph, currentTime));
            _this._preloadTime = preloadTime;
            _this._displayName = TYPE;
            return _this;
          }
          _createClass(CanvasNode2, [{
            key: "_load",
            value: function _load() {
              _get(CanvasNode2.prototype.__proto__ || Object.getPrototypeOf(CanvasNode2.prototype), "_load", this).call(this);
              this._ready = true;
              this._triggerCallbacks("loaded");
            }
          }, {
            key: "_unload",
            value: function _unload() {
              _get(CanvasNode2.prototype.__proto__ || Object.getPrototypeOf(CanvasNode2.prototype), "_unload", this).call(this);
              this._ready = false;
            }
          }, {
            key: "_seek",
            value: function _seek(time) {
              _get(CanvasNode2.prototype.__proto__ || Object.getPrototypeOf(CanvasNode2.prototype), "_seek", this).call(this, time);
              if (this.state === _sourcenode.SOURCENODESTATE.playing || this.state === _sourcenode.SOURCENODESTATE.paused) {
                if (this._element === void 0)
                  this._load();
                this._ready = false;
              }
              if ((this._state === _sourcenode.SOURCENODESTATE.sequenced || this._state === _sourcenode.SOURCENODESTATE.ended) && this._element !== void 0) {
                this._unload();
              }
            }
          }, {
            key: "_update",
            value: function _update(currentTime) {
              _get(CanvasNode2.prototype.__proto__ || Object.getPrototypeOf(CanvasNode2.prototype), "_update", this).call(this, currentTime);
              if (this._startTime - this._currentTime <= this._preloadTime && this._state !== _sourcenode.SOURCENODESTATE.waiting && this._state !== _sourcenode.SOURCENODESTATE.ended)
                this._load();
              if (this._state === _sourcenode.SOURCENODESTATE.playing) {
                return true;
              } else if (this._state === _sourcenode.SOURCENODESTATE.paused) {
                return true;
              } else if (this._state === _sourcenode.SOURCENODESTATE.ended && this._element !== void 0) {
                this._unload();
                return false;
              }
            }
          }]);
          return CanvasNode2;
        }(_sourcenode2.default);
        exports2.CANVASTYPE = TYPE;
        exports2.default = CanvasNode;
      },
      "./src/SourceNodes/imagenode.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.IMAGETYPE = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _sourcenode = __webpack_require__("./src/SourceNodes/sourcenode.js");
        var _sourcenode2 = _interopRequireDefault(_sourcenode);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var TYPE = "CanvasNode";
        var ImageNode = function(_SourceNode) {
          _inherits(ImageNode2, _SourceNode);
          function ImageNode2(src, gl, renderGraph, currentTime) {
            var preloadTime = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 4;
            var attributes = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
            _classCallCheck(this, ImageNode2);
            var _this = _possibleConstructorReturn(this, (ImageNode2.__proto__ || Object.getPrototypeOf(ImageNode2)).call(this, src, gl, renderGraph, currentTime));
            _this._preloadTime = preloadTime;
            _this._attributes = attributes;
            _this._textureUploaded = false;
            _this._displayName = TYPE;
            return _this;
          }
          _createClass(ImageNode2, [{
            key: "_load",
            value: function _load() {
              var _this2 = this;
              if (this._image !== void 0) {
                for (var key in this._attributes) {
                  this._image[key] = this._attributes[key];
                }
                return;
              }
              if (this._isResponsibleForElementLifeCycle) {
                _get(ImageNode2.prototype.__proto__ || Object.getPrototypeOf(ImageNode2.prototype), "_load", this).call(this);
                this._image = new Image();
                this._image.setAttribute("crossorigin", "anonymous");
                this._image.onload = function() {
                  _this2._ready = true;
                  if (window.createImageBitmap) {
                    window.createImageBitmap(_this2._image, {imageOrientation: "flipY"}).then(function(imageBitmap) {
                      _this2._element = imageBitmap;
                      _this2._triggerCallbacks("loaded");
                    });
                  } else {
                    _this2._element = _this2._image;
                    _this2._triggerCallbacks("loaded");
                  }
                };
                this._image.src = this._elementURL;
                this._image.onerror = function() {
                  console.error("ImageNode failed to load. url:", _this2._elementURL);
                };
                for (var _key in this._attributes) {
                  this._image[_key] = this._attributes[_key];
                }
              }
              this._image.onerror = function() {
                console.debug("Error with element", _this2._image);
                _this2._state = _sourcenode.SOURCENODESTATE.error;
                _this2._ready = true;
                _this2._triggerCallbacks("error");
              };
            }
          }, {
            key: "_unload",
            value: function _unload() {
              _get(ImageNode2.prototype.__proto__ || Object.getPrototypeOf(ImageNode2.prototype), "_unload", this).call(this);
              if (this._isResponsibleForElementLifeCycle) {
                if (this._image !== void 0) {
                  this._image.src = "";
                  this._image.onerror = void 0;
                  this._image = void 0;
                  delete this._image;
                }
                if (this._element instanceof window.ImageBitmap) {
                  this._element.close();
                }
              }
              this._ready = false;
            }
          }, {
            key: "_seek",
            value: function _seek(time) {
              _get(ImageNode2.prototype.__proto__ || Object.getPrototypeOf(ImageNode2.prototype), "_seek", this).call(this, time);
              if (this.state === _sourcenode.SOURCENODESTATE.playing || this.state === _sourcenode.SOURCENODESTATE.paused) {
                if (this._image === void 0)
                  this._load();
              }
              if ((this._state === _sourcenode.SOURCENODESTATE.sequenced || this._state === _sourcenode.SOURCENODESTATE.ended) && this._element !== void 0) {
                this._unload();
              }
            }
          }, {
            key: "_update",
            value: function _update(currentTime) {
              if (this._textureUploaded) {
                _get(ImageNode2.prototype.__proto__ || Object.getPrototypeOf(ImageNode2.prototype), "_update", this).call(this, currentTime, false);
              } else {
                _get(ImageNode2.prototype.__proto__ || Object.getPrototypeOf(ImageNode2.prototype), "_update", this).call(this, currentTime);
              }
              if (this._startTime - this._currentTime <= this._preloadTime && this._state !== _sourcenode.SOURCENODESTATE.waiting && this._state !== _sourcenode.SOURCENODESTATE.ended)
                this._load();
              if (this._state === _sourcenode.SOURCENODESTATE.playing) {
                return true;
              } else if (this._state === _sourcenode.SOURCENODESTATE.paused) {
                return true;
              } else if (this._state === _sourcenode.SOURCENODESTATE.ended && this._image !== void 0) {
                this._unload();
                return false;
              }
            }
          }, {
            key: "elementURL",
            get: function get() {
              return this._elementURL;
            }
          }]);
          return ImageNode2;
        }(_sourcenode2.default);
        exports2.IMAGETYPE = TYPE;
        exports2.default = ImageNode;
      },
      "./src/SourceNodes/medianode.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _set = function set(object, property, value, receiver) {
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent !== null) {
              set(parent, property, value, receiver);
            }
          } else if ("value" in desc && desc.writable) {
            desc.value = value;
          } else {
            var setter = desc.set;
            if (setter !== void 0) {
              setter.call(receiver, value);
            }
          }
          return value;
        };
        var _sourcenode = __webpack_require__("./src/SourceNodes/sourcenode.js");
        var _sourcenode2 = _interopRequireDefault(_sourcenode);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var MediaNode = function(_SourceNode) {
          _inherits(MediaNode2, _SourceNode);
          function MediaNode2(src, gl, renderGraph, currentTime) {
            var globalPlaybackRate = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1;
            var sourceOffset = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
            var preloadTime = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 4;
            var mediaElementCache = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : void 0;
            var attributes = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : {};
            _classCallCheck(this, MediaNode2);
            var _this = _possibleConstructorReturn(this, (MediaNode2.__proto__ || Object.getPrototypeOf(MediaNode2)).call(this, src, gl, renderGraph, currentTime));
            _this._preloadTime = preloadTime;
            _this._sourceOffset = sourceOffset;
            _this._globalPlaybackRate = globalPlaybackRate;
            _this._mediaElementCache = mediaElementCache;
            _this._playbackRate = 1;
            _this._playbackRateUpdated = true;
            _this._attributes = Object.assign({volume: 1}, attributes);
            _this._loopElement = false;
            _this._isElementPlaying = false;
            if (_this._attributes.loop) {
              _this._loopElement = _this._attributes.loop;
            }
            return _this;
          }
          _createClass(MediaNode2, [{
            key: "_triggerLoad",
            value: function _triggerLoad() {
              var _this2 = this;
              if (this._isResponsibleForElementLifeCycle) {
                if (this._mediaElementCache) {
                  this._element = this._mediaElementCache.getElementAndLinkToNode(this);
                } else {
                  this._element = document.createElement(this._elementType);
                  this._element.setAttribute("crossorigin", "anonymous");
                  this._element.setAttribute("webkit-playsinline", "");
                  this._element.setAttribute("playsinline", "");
                  this._playbackRateUpdated = true;
                }
                this._element.volume = this._attributes.volume;
                if (window.MediaStream !== void 0 && this._elementURL instanceof MediaStream) {
                  this._element.srcObject = this._elementURL;
                } else {
                  this._element.src = this._elementURL;
                }
              }
              if (this._element) {
                for (var key in this._attributes) {
                  this._element[key] = this._attributes[key];
                }
                var currentTimeOffset = 0;
                if (this._currentTime > this._startTime)
                  currentTimeOffset = this._currentTime - this._startTime;
                this._element.currentTime = this._sourceOffset + currentTimeOffset;
                this._element.onerror = function() {
                  if (_this2._element === void 0)
                    return;
                  console.debug("Error with element", _this2._element);
                  _this2._state = _sourcenode.SOURCENODESTATE.error;
                  _this2._ready = true;
                  _this2._triggerCallbacks("error");
                };
              } else {
                this._state = _sourcenode.SOURCENODESTATE.error;
                this._ready = true;
                this._triggerCallbacks("error");
              }
              this._loadTriggered = true;
            }
          }, {
            key: "_load",
            value: function _load() {
              _get(MediaNode2.prototype.__proto__ || Object.getPrototypeOf(MediaNode2.prototype), "_load", this).call(this);
              if (!this._loadTriggered) {
                this._triggerLoad();
              }
              var shouldPollForElementReadyState = this._element !== void 0;
              if (shouldPollForElementReadyState) {
                if (this._element.readyState > 3 && !this._element.seeking) {
                  if (this._loopElement === false) {
                    if (this._stopTime === Infinity || this._stopTime == void 0) {
                      this._stopTime = this._startTime + this._element.duration;
                      this._triggerCallbacks("durationchange", this.duration);
                    }
                  }
                  if (this._ready !== true) {
                    this._triggerCallbacks("loaded");
                    this._playbackRateUpdated = true;
                  }
                  this._ready = true;
                } else {
                  if (this._state !== _sourcenode.SOURCENODESTATE.error) {
                    this._ready = false;
                  }
                }
              }
            }
          }, {
            key: "_unload",
            value: function _unload() {
              _get(MediaNode2.prototype.__proto__ || Object.getPrototypeOf(MediaNode2.prototype), "_unload", this).call(this);
              if (this._isResponsibleForElementLifeCycle && this._element !== void 0) {
                this._element.removeAttribute("src");
                this._element.srcObject = void 0;
                this._element.load();
                for (var key in this._attributes) {
                  this._element.removeAttribute(key);
                }
                if (this._mediaElementCache)
                  this._mediaElementCache.unlinkNodeFromElement(this._element);
                this._element = void 0;
                if (!this._mediaElementCache)
                  delete this._element;
              }
              this._ready = false;
              this._isElementPlaying = false;
              this._loadTriggered = false;
            }
          }, {
            key: "_seek",
            value: function _seek(time) {
              _get(MediaNode2.prototype.__proto__ || Object.getPrototypeOf(MediaNode2.prototype), "_seek", this).call(this, time);
              if (this.state === _sourcenode.SOURCENODESTATE.playing || this.state === _sourcenode.SOURCENODESTATE.paused) {
                if (this._element === void 0)
                  this._load();
                var relativeTime = this._currentTime - this._startTime + this._sourceOffset;
                this._element.currentTime = relativeTime;
                this._ready = false;
              }
              if ((this._state === _sourcenode.SOURCENODESTATE.sequenced || this._state === _sourcenode.SOURCENODESTATE.ended) && this._element !== void 0) {
                this._unload();
              }
            }
          }, {
            key: "_update",
            value: function _update(currentTime) {
              var triggerTextureUpdate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
              _get(MediaNode2.prototype.__proto__ || Object.getPrototypeOf(MediaNode2.prototype), "_update", this).call(this, currentTime, triggerTextureUpdate);
              if (this._element !== void 0) {
                if (this._element.ended) {
                  this._state = _sourcenode.SOURCENODESTATE.ended;
                  this._triggerCallbacks("ended");
                }
              }
              if (this._startTime - this._currentTime <= this._preloadTime && this._state !== _sourcenode.SOURCENODESTATE.waiting && this._state !== _sourcenode.SOURCENODESTATE.ended)
                this._load();
              if (this._state === _sourcenode.SOURCENODESTATE.playing) {
                if (this._playbackRateUpdated) {
                  this._element.playbackRate = this._globalPlaybackRate * this._playbackRate;
                  this._playbackRateUpdated = false;
                }
                if (!this._isElementPlaying) {
                  this._element.play();
                  if (this._stretchPaused) {
                    this._element.pause();
                  }
                  this._isElementPlaying = true;
                }
                return true;
              } else if (this._state === _sourcenode.SOURCENODESTATE.paused) {
                this._element.pause();
                this._isElementPlaying = false;
                return true;
              } else if (this._state === _sourcenode.SOURCENODESTATE.ended && this._element !== void 0) {
                this._element.pause();
                if (this._isElementPlaying) {
                  this._unload();
                }
                return false;
              }
            }
          }, {
            key: "clearTimelineState",
            value: function clearTimelineState() {
              _get(MediaNode2.prototype.__proto__ || Object.getPrototypeOf(MediaNode2.prototype), "clearTimelineState", this).call(this);
              if (this._element !== void 0) {
                this._element.pause();
                this._isElementPlaying = false;
              }
              this._unload();
            }
          }, {
            key: "destroy",
            value: function destroy() {
              if (this._element)
                this._element.pause();
              _get(MediaNode2.prototype.__proto__ || Object.getPrototypeOf(MediaNode2.prototype), "destroy", this).call(this);
            }
          }, {
            key: "playbackRate",
            set: function set(playbackRate) {
              this._playbackRate = playbackRate;
              this._playbackRateUpdated = true;
            },
            get: function get() {
              return this._playbackRate;
            }
          }, {
            key: "stretchPaused",
            set: function set(stretchPaused) {
              _set(MediaNode2.prototype.__proto__ || Object.getPrototypeOf(MediaNode2.prototype), "stretchPaused", stretchPaused, this);
              if (this._element) {
                if (this._stretchPaused) {
                  this._element.pause();
                } else {
                  if (this._state === _sourcenode.SOURCENODESTATE.playing) {
                    this._element.play();
                  }
                }
              }
            },
            get: function get() {
              return this._stretchPaused;
            }
          }, {
            key: "elementURL",
            get: function get() {
              return this._elementURL;
            }
          }, {
            key: "_buffering",
            get: function get() {
              if (this._element) {
                return this._element.readyState < HTMLMediaElement.HAVE_FUTURE_DATA;
              }
              return false;
            }
          }, {
            key: "volume",
            set: function set(volume) {
              this._attributes.volume = volume;
              if (this._element !== void 0)
                this._element.volume = this._attributes.volume;
            }
          }]);
          return MediaNode2;
        }(_sourcenode2.default);
        exports2.default = MediaNode;
        module2.exports = exports2.default;
      },
      "./src/SourceNodes/nodes.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _audionode = __webpack_require__("./src/SourceNodes/audionode.js");
        var _audionode2 = _interopRequireDefault(_audionode);
        var _canvasnode = __webpack_require__("./src/SourceNodes/canvasnode.js");
        var _canvasnode2 = _interopRequireDefault(_canvasnode);
        var _imagenode = __webpack_require__("./src/SourceNodes/imagenode.js");
        var _imagenode2 = _interopRequireDefault(_imagenode);
        var _medianode = __webpack_require__("./src/SourceNodes/medianode.js");
        var _medianode2 = _interopRequireDefault(_medianode);
        var _sourcenode = __webpack_require__("./src/SourceNodes/sourcenode.js");
        var _sourcenode2 = _interopRequireDefault(_sourcenode);
        var _videonode = __webpack_require__("./src/SourceNodes/videonode.js");
        var _videonode2 = _interopRequireDefault(_videonode);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        var NODES = {
          AudioNode: _audionode2.default,
          CanvasNode: _canvasnode2.default,
          ImageNode: _imagenode2.default,
          MediaNode: _medianode2.default,
          SourceNode: _sourcenode2.default,
          VideoNode: _videonode2.default
        };
        exports2.default = NODES;
        module2.exports = exports2.default;
      },
      "./src/SourceNodes/sourcenode.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.SOURCETYPE = exports2.SOURCENODESTATE = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _utils = __webpack_require__("./src/utils.js");
        var _graphnode = __webpack_require__("./src/graphnode.js");
        var _graphnode2 = _interopRequireDefault(_graphnode);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var STATE = {
          waiting: 0,
          sequenced: 1,
          playing: 2,
          paused: 3,
          ended: 4,
          error: 5
        };
        var TYPE = "SourceNode";
        var SourceNode = function(_GraphNode) {
          _inherits(SourceNode2, _GraphNode);
          function SourceNode2(src, gl, renderGraph, currentTime) {
            _classCallCheck(this, SourceNode2);
            var _this = _possibleConstructorReturn(this, (SourceNode2.__proto__ || Object.getPrototypeOf(SourceNode2)).call(this, gl, renderGraph, [], true));
            _this._element = void 0;
            _this._elementURL = void 0;
            _this._isResponsibleForElementLifeCycle = true;
            if (typeof src === "string" || window.MediaStream !== void 0 && src instanceof MediaStream) {
              _this._elementURL = src;
            } else {
              _this._element = src;
              _this._isResponsibleForElementLifeCycle = false;
            }
            _this._state = STATE.waiting;
            _this._currentTime = currentTime;
            _this._startTime = NaN;
            _this._stopTime = Infinity;
            _this._ready = false;
            _this._loadCalled = false;
            _this._stretchPaused = false;
            _this._texture = (0, _utils.createElementTexture)(gl);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
            _this._callbacks = [];
            _this._renderPaused = false;
            _this._displayName = TYPE;
            return _this;
          }
          _createClass(SourceNode2, [{
            key: "_load",
            value: function _load() {
              if (!this._loadCalled) {
                this._triggerCallbacks("load");
                this._loadCalled = true;
              }
            }
          }, {
            key: "_unload",
            value: function _unload() {
              this._triggerCallbacks("destroy");
              this._loadCalled = false;
            }
          }, {
            key: "registerCallback",
            value: function registerCallback(type, func) {
              this._callbacks.push({type, func});
            }
          }, {
            key: "unregisterCallback",
            value: function unregisterCallback(func) {
              var toRemove = [];
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = void 0;
              try {
                for (var _iterator = this._callbacks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var callback = _step.value;
                  if (func === void 0) {
                    toRemove.push(callback);
                  } else if (callback.func === func) {
                    toRemove.push(callback);
                  }
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = void 0;
              try {
                for (var _iterator2 = toRemove[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var _callback = _step2.value;
                  var index = this._callbacks.indexOf(_callback);
                  this._callbacks.splice(index, 1);
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            }
          }, {
            key: "_triggerCallbacks",
            value: function _triggerCallbacks(type, data) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = void 0;
              try {
                for (var _iterator3 = this._callbacks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var callback = _step3.value;
                  if (callback.type === type) {
                    if (data !== void 0) {
                      callback.func(this, data);
                    } else {
                      callback.func(this);
                    }
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            }
          }, {
            key: "start",
            value: function start(time) {
              if (this._state !== STATE.waiting) {
                console.debug("SourceNode is has already been sequenced. Can't sequence twice.");
                return false;
              }
              this._startTime = this._currentTime + time;
              this._state = STATE.sequenced;
              return true;
            }
          }, {
            key: "startAt",
            value: function startAt(time) {
              if (this._state !== STATE.waiting) {
                console.debug("SourceNode is has already been sequenced. Can't sequence twice.");
                return false;
              }
              this._startTime = time;
              this._state = STATE.sequenced;
              return true;
            }
          }, {
            key: "stop",
            value: function stop(time) {
              if (this._state === STATE.ended) {
                console.debug("SourceNode has already ended. Cannot call stop.");
                return false;
              } else if (this._state === STATE.waiting) {
                console.debug("SourceNode must have start called before stop is called");
                return false;
              }
              if (this._currentTime + time <= this._startTime) {
                console.debug("SourceNode must have a stop time after it's start time, not before.");
                return false;
              }
              this._stopTime = this._currentTime + time;
              this._stretchPaused = false;
              this._triggerCallbacks("durationchange", this.duration);
              return true;
            }
          }, {
            key: "stopAt",
            value: function stopAt(time) {
              if (this._state === STATE.ended) {
                console.debug("SourceNode has already ended. Cannot call stop.");
                return false;
              } else if (this._state === STATE.waiting) {
                console.debug("SourceNode must have start called before stop is called");
                return false;
              }
              if (time <= this._startTime) {
                console.debug("SourceNode must have a stop time after it's start time, not before.");
                return false;
              }
              this._stopTime = time;
              this._stretchPaused = false;
              this._triggerCallbacks("durationchange", this.duration);
              return true;
            }
          }, {
            key: "_seek",
            value: function _seek(time) {
              this._renderPaused = false;
              this._triggerCallbacks("seek", time);
              if (this._state === STATE.waiting)
                return;
              if (time < this._startTime) {
                (0, _utils.clearTexture)(this._gl, this._texture);
                this._state = STATE.sequenced;
              }
              if (time >= this._startTime && this._state !== STATE.paused) {
                this._state = STATE.playing;
              }
              if (time >= this._stopTime) {
                (0, _utils.clearTexture)(this._gl, this._texture);
                this._triggerCallbacks("ended");
                this._state = STATE.ended;
              }
              this._currentTime = time;
            }
          }, {
            key: "_pause",
            value: function _pause() {
              if (this._state === STATE.playing || this._currentTime === 0 && this._startTime === 0) {
                this._triggerCallbacks("pause");
                this._state = STATE.paused;
                this._renderPaused = false;
              }
            }
          }, {
            key: "_play",
            value: function _play() {
              if (this._state === STATE.paused) {
                this._triggerCallbacks("play");
                this._state = STATE.playing;
              }
            }
          }, {
            key: "_isReady",
            value: function _isReady() {
              if (this._buffering) {
                return false;
              }
              if (this._state === STATE.playing || this._state === STATE.paused || this._state === STATE.error) {
                return this._ready;
              }
              return true;
            }
          }, {
            key: "_update",
            value: function _update(currentTime) {
              var triggerTextureUpdate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
              this._rendered = true;
              var timeDelta = currentTime - this._currentTime;
              this._currentTime = currentTime;
              if (this._state === STATE.waiting || this._state === STATE.ended || this._state === STATE.error)
                return false;
              this._triggerCallbacks("render", currentTime);
              if (currentTime < this._startTime) {
                (0, _utils.clearTexture)(this._gl, this._texture);
                this._state = STATE.sequenced;
              }
              if (currentTime >= this._startTime && this._state !== STATE.paused && this._state !== STATE.error) {
                if (this._state !== STATE.playing)
                  this._triggerCallbacks("play");
                this._state = STATE.playing;
              }
              if (currentTime >= this._stopTime) {
                (0, _utils.clearTexture)(this._gl, this._texture);
                this._triggerCallbacks("ended");
                this._state = STATE.ended;
              }
              if (this._element === void 0 || this._ready === false)
                return true;
              if (!this._renderPaused && this._state === STATE.paused) {
                if (triggerTextureUpdate)
                  (0, _utils.updateTexture)(this._gl, this._texture, this._element);
                this._renderPaused = true;
              }
              if (this._state === STATE.playing) {
                if (triggerTextureUpdate)
                  (0, _utils.updateTexture)(this._gl, this._texture, this._element);
                if (this._stretchPaused) {
                  this._stopTime += timeDelta;
                }
              }
              return true;
            }
          }, {
            key: "clearTimelineState",
            value: function clearTimelineState() {
              this._startTime = NaN;
              this._stopTime = Infinity;
              this._state = STATE.waiting;
            }
          }, {
            key: "destroy",
            value: function destroy() {
              this._unload();
              _get(SourceNode2.prototype.__proto__ || Object.getPrototypeOf(SourceNode2.prototype), "destroy", this).call(this);
              this.unregisterCallback();
              delete this._element;
              this._elementURL = void 0;
              this._state = STATE.waiting;
              this._currentTime = 0;
              this._startTime = NaN;
              this._stopTime = Infinity;
              this._ready = false;
              this._loadCalled = false;
              this._gl.deleteTexture(this._texture);
              this._texture = void 0;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state;
            }
          }, {
            key: "element",
            get: function get() {
              return this._element;
            }
          }, {
            key: "duration",
            get: function get() {
              if (isNaN(this._startTime))
                return void 0;
              if (this._stopTime === Infinity)
                return Infinity;
              return this._stopTime - this._startTime;
            }
          }, {
            key: "stretchPaused",
            set: function set(stretchPaused) {
              this._stretchPaused = stretchPaused;
            },
            get: function get() {
              return this._stretchPaused;
            }
          }, {
            key: "startTime",
            get: function get() {
              return this._startTime;
            }
          }, {
            key: "stopTime",
            get: function get() {
              return this._stopTime;
            }
          }]);
          return SourceNode2;
        }(_graphnode2.default);
        exports2.SOURCENODESTATE = STATE;
        exports2.SOURCETYPE = TYPE;
        exports2.default = SourceNode;
      },
      "./src/SourceNodes/videonode.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.VIDEOTYPE = void 0;
        var _medianode = __webpack_require__("./src/SourceNodes/medianode.js");
        var _medianode2 = _interopRequireDefault(_medianode);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var TYPE = "VideoNode";
        var VideoNode = function(_MediaNode) {
          _inherits(VideoNode2, _MediaNode);
          function VideoNode2() {
            _classCallCheck(this, VideoNode2);
            var _this = _possibleConstructorReturn(this, (VideoNode2.__proto__ || Object.getPrototypeOf(VideoNode2)).apply(this, arguments));
            _this._displayName = TYPE;
            _this._elementType = "video";
            return _this;
          }
          return VideoNode2;
        }(_medianode2.default);
        exports2.VIDEOTYPE = TYPE;
        exports2.default = VideoNode;
      },
      "./src/exceptions.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.ConnectException = ConnectException2;
        exports2.RenderException = RenderException2;
        function ConnectException2(message) {
          this.message = message;
          this.name = "ConnectionException";
        }
        function RenderException2(message) {
          this.message = message;
          this.name = "RenderException";
        }
      },
      "./src/graphnode.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var TYPE = "GraphNode";
        var GraphNode = function() {
          function GraphNode2(gl, renderGraph, inputNames) {
            var limitConnections = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
            _classCallCheck(this, GraphNode2);
            this._renderGraph = renderGraph;
            this._limitConnections = limitConnections;
            this._inputNames = inputNames;
            this._destroyed = false;
            this._gl = gl;
            this._renderGraph = renderGraph;
            this._rendered = false;
            this._displayName = TYPE;
          }
          _createClass(GraphNode2, [{
            key: "connect",
            value: function connect(targetNode, targetPort) {
              return this._renderGraph.registerConnection(this, targetNode, targetPort);
            }
          }, {
            key: "disconnect",
            value: function disconnect(targetNode) {
              var _this = this;
              if (targetNode === void 0) {
                var toRemove = this._renderGraph.getOutputsForNode(this);
                toRemove.forEach(function(target) {
                  return _this._renderGraph.unregisterConnection(_this, target);
                });
                if (toRemove.length > 0)
                  return true;
                return false;
              }
              return this._renderGraph.unregisterConnection(this, targetNode);
            }
          }, {
            key: "destroy",
            value: function destroy() {
              this.disconnect();
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = void 0;
              try {
                for (var _iterator = this.inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var input = _step.value;
                  input.disconnect(this);
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
              this._destroyed = true;
            }
          }, {
            key: "displayName",
            get: function get() {
              return this._displayName;
            }
          }, {
            key: "inputNames",
            get: function get() {
              return this._inputNames.slice();
            }
          }, {
            key: "maximumConnections",
            get: function get() {
              if (this._limitConnections === false)
                return Infinity;
              return this._inputNames.length;
            }
          }, {
            key: "inputs",
            get: function get() {
              var result = this._renderGraph.getInputsForNode(this);
              result = result.filter(function(n) {
                return n !== void 0;
              });
              return result;
            }
          }, {
            key: "outputs",
            get: function get() {
              return this._renderGraph.getOutputsForNode(this);
            }
          }, {
            key: "destroyed",
            get: function get() {
              return this._destroyed;
            }
          }]);
          return GraphNode2;
        }();
        exports2.GRAPHTYPE = TYPE;
        exports2.default = GraphNode;
      },
      "./src/rendergraph.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _exceptions = __webpack_require__("./src/exceptions.js");
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var RenderGraph = function() {
          function RenderGraph2() {
            _classCallCheck(this, RenderGraph2);
            this.connections = [];
          }
          _createClass(RenderGraph2, [{
            key: "getOutputsForNode",
            value: function getOutputsForNode(node) {
              var results = [];
              this.connections.forEach(function(connection) {
                if (connection.source === node) {
                  results.push(connection.destination);
                }
              });
              return results;
            }
          }, {
            key: "getNamedInputsForNode",
            value: function getNamedInputsForNode(node) {
              var results = [];
              this.connections.forEach(function(connection) {
                if (connection.destination === node && connection.type === "name") {
                  results.push(connection);
                }
              });
              return results;
            }
          }, {
            key: "getZIndexInputsForNode",
            value: function getZIndexInputsForNode(node) {
              var results = [];
              this.connections.forEach(function(connection) {
                if (connection.destination === node && connection.type === "zIndex") {
                  results.push(connection);
                }
              });
              results.sort(function(a, b) {
                return a.zIndex - b.zIndex;
              });
              return results;
            }
          }, {
            key: "getInputsForNode",
            value: function getInputsForNode(node) {
              var inputNames = node.inputNames;
              var results = [];
              var namedInputs = this.getNamedInputsForNode(node);
              var indexedInputs = this.getZIndexInputsForNode(node);
              if (node._limitConnections === true) {
                for (var i = 0; i < inputNames.length; i++) {
                  results[i] = void 0;
                }
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = void 0;
                try {
                  for (var _iterator = namedInputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var connection = _step.value;
                    var index = inputNames.indexOf(connection.name);
                    results[index] = connection.source;
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }
                var indexedInputsIndex = 0;
                for (var _i = 0; _i < results.length; _i++) {
                  if (results[_i] === void 0 && indexedInputs[indexedInputsIndex] !== void 0) {
                    results[_i] = indexedInputs[indexedInputsIndex].source;
                    indexedInputsIndex += 1;
                  }
                }
              } else {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = void 0;
                try {
                  for (var _iterator2 = namedInputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _connection = _step2.value;
                    results.push(_connection.source);
                  }
                } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                      _iterator2.return();
                    }
                  } finally {
                    if (_didIteratorError2) {
                      throw _iteratorError2;
                    }
                  }
                }
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = void 0;
                try {
                  for (var _iterator3 = indexedInputs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _connection2 = _step3.value;
                    results.push(_connection2.source);
                  }
                } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                      _iterator3.return();
                    }
                  } finally {
                    if (_didIteratorError3) {
                      throw _iteratorError3;
                    }
                  }
                }
              }
              return results;
            }
          }, {
            key: "isInputAvailable",
            value: function isInputAvailable(node, inputName) {
              if (node._inputNames.indexOf(inputName) === -1)
                return false;
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = void 0;
              try {
                for (var _iterator4 = this.connections[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var connection = _step4.value;
                  if (connection.type === "name") {
                    if (connection.destination === node && connection.name === inputName) {
                      return false;
                    }
                  }
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }
              return true;
            }
          }, {
            key: "registerConnection",
            value: function registerConnection(sourceNode, destinationNode, target) {
              if (destinationNode.inputs.length >= destinationNode.inputNames.length && destinationNode._limitConnections === true) {
                throw new _exceptions.ConnectException("Node has reached max number of inputs, can't connect");
              }
              if (destinationNode._limitConnections === false) {
                var inputs = this.getInputsForNode(destinationNode);
                if (inputs.includes(sourceNode)) {
                  console.debug("WARNING - node connected mutliple times, removing previous connection");
                  this.unregisterConnection(sourceNode, destinationNode);
                }
              }
              if (typeof target === "number") {
                this.connections.push({
                  source: sourceNode,
                  type: "zIndex",
                  zIndex: target,
                  destination: destinationNode
                });
              } else if (typeof target === "string" && destinationNode._limitConnections) {
                if (this.isInputAvailable(destinationNode, target)) {
                  this.connections.push({
                    source: sourceNode,
                    type: "name",
                    name: target,
                    destination: destinationNode
                  });
                } else {
                  throw new _exceptions.ConnectException("Port " + target + " is already connected to");
                }
              } else {
                var indexedConns = this.getZIndexInputsForNode(destinationNode);
                var index = 0;
                if (indexedConns.length > 0)
                  index = indexedConns[indexedConns.length - 1].zIndex + 1;
                this.connections.push({
                  source: sourceNode,
                  type: "zIndex",
                  zIndex: index,
                  destination: destinationNode
                });
              }
              return true;
            }
          }, {
            key: "unregisterConnection",
            value: function unregisterConnection(sourceNode, destinationNode) {
              var _this = this;
              var toRemove = [];
              this.connections.forEach(function(connection) {
                if (connection.source === sourceNode && connection.destination === destinationNode) {
                  toRemove.push(connection);
                }
              });
              if (toRemove.length === 0)
                return false;
              toRemove.forEach(function(removeNode) {
                var index = _this.connections.indexOf(removeNode);
                _this.connections.splice(index, 1);
              });
              return true;
            }
          }], [{
            key: "outputEdgesFor",
            value: function outputEdgesFor(node, connections) {
              var results = [];
              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = void 0;
              try {
                for (var _iterator5 = connections[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  var conn = _step5.value;
                  if (conn.source === node) {
                    results.push(conn);
                  }
                }
              } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                  }
                } finally {
                  if (_didIteratorError5) {
                    throw _iteratorError5;
                  }
                }
              }
              return results;
            }
          }, {
            key: "inputEdgesFor",
            value: function inputEdgesFor(node, connections) {
              var results = [];
              var _iteratorNormalCompletion6 = true;
              var _didIteratorError6 = false;
              var _iteratorError6 = void 0;
              try {
                for (var _iterator6 = connections[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                  var conn = _step6.value;
                  if (conn.destination === node) {
                    results.push(conn);
                  }
                }
              } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion6 && _iterator6.return) {
                    _iterator6.return();
                  }
                } finally {
                  if (_didIteratorError6) {
                    throw _iteratorError6;
                  }
                }
              }
              return results;
            }
          }, {
            key: "getInputlessNodes",
            value: function getInputlessNodes(connections) {
              var inputLess = [];
              var _iteratorNormalCompletion7 = true;
              var _didIteratorError7 = false;
              var _iteratorError7 = void 0;
              try {
                for (var _iterator7 = connections[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                  var conn = _step7.value;
                  inputLess.push(conn.source);
                }
              } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion7 && _iterator7.return) {
                    _iterator7.return();
                  }
                } finally {
                  if (_didIteratorError7) {
                    throw _iteratorError7;
                  }
                }
              }
              var _iteratorNormalCompletion8 = true;
              var _didIteratorError8 = false;
              var _iteratorError8 = void 0;
              try {
                for (var _iterator8 = connections[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                  var _conn = _step8.value;
                  var index = inputLess.indexOf(_conn.destination);
                  if (index !== -1) {
                    inputLess.splice(index, 1);
                  }
                }
              } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion8 && _iterator8.return) {
                    _iterator8.return();
                  }
                } finally {
                  if (_didIteratorError8) {
                    throw _iteratorError8;
                  }
                }
              }
              return inputLess;
            }
          }]);
          return RenderGraph2;
        }();
        exports2.default = RenderGraph;
        module2.exports = exports2.default;
      },
      "./src/utils.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.UpdateablesManager = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        exports2.compileShader = compileShader2;
        exports2.createShaderProgram = createShaderProgram2;
        exports2.createElementTexture = createElementTexture2;
        exports2.updateTexture = updateTexture2;
        exports2.clearTexture = clearTexture2;
        exports2.generateRandomId = generateRandomId2;
        exports2.exportToJSON = exportToJSON2;
        exports2.snapshot = snapshot2;
        exports2.createControlFormForNode = createControlFormForNode2;
        exports2.visualiseVideoContextGraph = visualiseVideoContextGraph2;
        exports2.createSigmaGraphDataFromRenderGraph = createSigmaGraphDataFromRenderGraph2;
        exports2.importSimpleEDL = importSimpleEDL2;
        exports2.visualiseVideoContextTimeline = visualiseVideoContextTimeline2;
        exports2.mediaElementHasSource = mediaElementHasSource2;
        var _definitions = __webpack_require__("./src/Definitions/definitions.js");
        var _definitions2 = _interopRequireDefault(_definitions);
        var _sourcenode = __webpack_require__("./src/SourceNodes/sourcenode.js");
        var _videonode = __webpack_require__("./src/SourceNodes/videonode.js");
        var _canvasnode = __webpack_require__("./src/SourceNodes/canvasnode.js");
        var _imagenode = __webpack_require__("./src/SourceNodes/imagenode.js");
        var _destinationnode = __webpack_require__("./src/DestinationNode/destinationnode.js");
        var _transitionnode = __webpack_require__("./src/ProcessingNodes/transitionnode.js");
        var _compositingnode = __webpack_require__("./src/ProcessingNodes/compositingnode.js");
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function compileShader2(gl, shaderSource, shaderType) {
          var shader = gl.createShader(shaderType);
          gl.shaderSource(shader, shaderSource);
          gl.compileShader(shader);
          var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
          if (!success) {
            throw "could not compile shader:" + gl.getShaderInfoLog(shader);
          }
          return shader;
        }
        function createShaderProgram2(gl, vertexShader, fragmentShader) {
          var program = gl.createProgram();
          gl.attachShader(program, vertexShader);
          gl.attachShader(program, fragmentShader);
          gl.linkProgram(program);
          if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            throw {
              error: 4,
              msg: "Can't link shader program for track",
              toString: function toString2() {
                return this.msg;
              }
            };
          }
          return program;
        }
        function createElementTexture2(gl) {
          var texture = gl.createTexture();
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
          // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
          return texture;
        }
        function updateTexture2(gl, texture, element) {
          if (element.readyState !== void 0 && element.readyState === 0)
            return;
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, element);
          texture._isTextureCleared = false;
        }
        function clearTexture2(gl, texture) {
          if (!texture._isTextureCleared) {
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
            texture._isTextureCleared = true;
          }
        }
        function generateRandomId2() {
          var appearanceAdjective = ["adorable", "alert", "average", "beautiful", "blonde", "bloody", "blushing", "bright", "clean", "clear", "cloudy", "colourful", "concerned", "crowded", "curious", "cute", "dark", "dirty", "drab", "distinct", "dull", "elegant", "fancy", "filthy", "glamorous", "gleaming", "graceful", "grotesque", "homely", "light", "misty", "motionless", "muddy", "plain", "poised", "quaint", "scary", "shiny", "smoggy", "sparkling", "spotless", "stormy", "strange", "ugly", "unsightly", "unusual"];
          var conditionAdjective = ["alive", "brainy", "broken", "busy", "careful", "cautious", "clever", "crazy", "damaged", "dead", "difficult", "easy", "fake", "false", "famous", "forward", "fragile", "guilty", "helpful", "helpless", "important", "impossible", "infamous", "innocent", "inquisitive", "mad", "modern", "open", "outgoing", "outstanding", "poor", "powerful", "puzzled", "real", "rich", "right", "robust", "sane", "scary", "shy", "sleepy", "stupid", "super", "tame", "thick", "tired", "wild", "wrong"];
          var nounAnimal = ["manatee", "gila monster", "nematode", "seahorse", "slug", "koala bear", "giant tortoise", "garden snail", "starfish", "sloth", "american woodcock", "coral", "swallowtail butterfly", "house sparrow", "sea anemone"];
          function randomChoice(array) {
            return array[Math.floor(Math.random() * array.length)];
          }
          function capitalize(word) {
            word = word.replace(/\b\w/g, function(l) {
              return l.toUpperCase();
            });
            return word;
          }
          var name = randomChoice(appearanceAdjective) + " " + randomChoice(conditionAdjective) + " " + randomChoice(nounAnimal);
          name = capitalize(name);
          name = name.replace(/ /g, "-");
          return name;
        }
        function exportToJSON2(vc) {
          console.warn("VideoContext.exportToJSON has been deprecated. Please use VideoContext.snapshot instead.");
          return JSON.stringify(snapshotNodes(vc));
        }
        function snapshot2(vc) {
          return {
            nodes: snapshotNodes(vc),
            videoContext: snapshotVideoContext(vc)
          };
        }
        function snapshotVideoContext(vc) {
          return {
            currentTime: vc.currentTime,
            duration: vc.duration,
            state: vc.state,
            playbackRate: vc.playbackRate
          };
        }
        var warningExportSourceLogged = false;
        function snapshotNodes(vc) {
          function qualifyURL(url) {
            var a = document.createElement("a");
            a.href = url;
            return a.href;
          }
          function getInputIDs(node2, vc2) {
            var inputs = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = void 0;
            try {
              for (var _iterator = node2.inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var input = _step.value;
                if (input === void 0)
                  continue;
                var inputID = void 0;
                var inputIndex = node2.inputs.indexOf(input);
                var index2 = vc2._processingNodes.indexOf(input);
                if (index2 > -1) {
                  inputID = "processor" + index2;
                } else {
                  var _index = vc2._sourceNodes.indexOf(input);
                  if (_index > -1) {
                    inputID = "source" + _index;
                  } else {
                    console.log("Warning, can't find input", input);
                  }
                }
                inputs.push({id: inputID, index: inputIndex});
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
            return inputs;
          }
          var result = {};
          var sourceNodeStateMapping = [];
          for (var state in _sourcenode.SOURCENODESTATE) {
            sourceNodeStateMapping[_sourcenode.SOURCENODESTATE[state]] = state;
          }
          for (var index in vc._sourceNodes) {
            var source = vc._sourceNodes[index];
            var id = "source" + index;
            var node_url = "";
            if (!source._isResponsibleForElementLifeCycle) {
              if (!warningExportSourceLogged) {
                console.debug("Warning - Trying to export source created from an element not a URL. URL of export will be set to the elements src attribute and may be incorrect", source);
                warningExportSourceLogged = true;
              }
              node_url = source.element.src;
            } else {
              node_url = qualifyURL(source._elementURL);
            }
            var node = {
              type: source.displayName,
              url: node_url,
              start: source.startTime,
              stop: source.stopTime,
              state: sourceNodeStateMapping[source.state]
            };
            if (node.type === _videonode.VIDEOTYPE) {
              node.currentTime = null;
              if (source.element && source.element.currentTime) {
                node.currentTime = source.element.currentTime;
              }
            }
            if (source._sourceOffset) {
              node.sourceOffset = source._sourceOffset;
            }
            result[id] = node;
          }
          for (var _index2 in vc._processingNodes) {
            var processor = vc._processingNodes[_index2];
            var _id = "processor" + _index2;
            var _node = {
              type: processor.displayName,
              definition: processor._definition,
              inputs: getInputIDs(processor, vc),
              properties: {}
            };
            for (var property in _node.definition.properties) {
              _node.properties[property] = processor[property];
            }
            if (_node.type === _transitionnode.TRANSITIONTYPE) {
              _node.transitions = processor._transitions;
            }
            result[_id] = _node;
          }
          result["destination"] = {
            type: "Destination",
            inputs: getInputIDs(vc.destination, vc)
          };
          return result;
        }
        function createControlFormForNode2(node, nodeName) {
          var rootDiv = document.createElement("div");
          if (nodeName !== void 0) {
            var title = document.createElement("h2");
            title.innerHTML = nodeName;
            rootDiv.appendChild(title);
          }
          var _loop = function _loop2(propertyName2) {
            var propertyParagraph = document.createElement("p");
            var propertyTitleHeader = document.createElement("h3");
            propertyTitleHeader.innerHTML = propertyName2;
            propertyParagraph.appendChild(propertyTitleHeader);
            var propertyValue = node._properties[propertyName2].value;
            if (typeof propertyValue === "number") {
              var range = document.createElement("input");
              range.setAttribute("type", "range");
              range.setAttribute("min", "0");
              range.setAttribute("max", "1");
              range.setAttribute("step", "0.01");
              range.setAttribute("value", propertyValue, toString());
              var number = document.createElement("input");
              number.setAttribute("type", "number");
              number.setAttribute("min", "0");
              number.setAttribute("max", "1");
              number.setAttribute("step", "0.01");
              number.setAttribute("value", propertyValue, toString());
              var mouseDown = false;
              range.onmousedown = function() {
                mouseDown = true;
              };
              range.onmouseup = function() {
                mouseDown = false;
              };
              range.onmousemove = function() {
                if (mouseDown) {
                  node[propertyName2] = parseFloat(range.value);
                  number.value = range.value;
                }
              };
              range.onchange = function() {
                node[propertyName2] = parseFloat(range.value);
                number.value = range.value;
              };
              number.onchange = function() {
                node[propertyName2] = parseFloat(number.value);
                range.value = number.value;
              };
              propertyParagraph.appendChild(range);
              propertyParagraph.appendChild(number);
            } else if (Object.prototype.toString.call(propertyValue) === "[object Array]") {
              var _loop22 = function _loop23() {
                var range2 = document.createElement("input");
                range2.setAttribute("type", "range");
                range2.setAttribute("min", "0");
                range2.setAttribute("max", "1");
                range2.setAttribute("step", "0.01");
                range2.setAttribute("value", propertyValue[i], toString());
                var number2 = document.createElement("input");
                number2.setAttribute("type", "number");
                number2.setAttribute("min", "0");
                number2.setAttribute("max", "1");
                number2.setAttribute("step", "0.01");
                number2.setAttribute("value", propertyValue, toString());
                var index = i;
                var mouseDown2 = false;
                range2.onmousedown = function() {
                  mouseDown2 = true;
                };
                range2.onmouseup = function() {
                  mouseDown2 = false;
                };
                range2.onmousemove = function() {
                  if (mouseDown2) {
                    node[propertyName2][index] = parseFloat(range2.value);
                    number2.value = range2.value;
                  }
                };
                range2.onchange = function() {
                  node[propertyName2][index] = parseFloat(range2.value);
                  number2.value = range2.value;
                };
                number2.onchange = function() {
                  node[propertyName2][index] = parseFloat(number2.value);
                  range2.value = number2.value;
                };
                propertyParagraph.appendChild(range2);
                propertyParagraph.appendChild(number2);
              };
              for (i = 0; i < propertyValue.length; i++) {
                _loop22();
              }
            }
            rootDiv.appendChild(propertyParagraph);
          };
          for (var propertyName in node._properties) {
            var i;
            _loop(propertyName);
          }
          return rootDiv;
        }
        function calculateNodeDepthFromDestination(videoContext) {
          var destination = videoContext.destination;
          var depthMap = new Map();
          depthMap.set(destination, 0);
          function itterateBackwards(node) {
            var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = void 0;
            try {
              for (var _iterator2 = node.inputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var n = _step2.value;
                var d = depth + 1;
                if (depthMap.has(n)) {
                  if (d > depthMap.get(n)) {
                    depthMap.set(n, d);
                  }
                } else {
                  depthMap.set(n, d);
                }
                itterateBackwards(n, depthMap.get(n));
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
          itterateBackwards(destination);
          return depthMap;
        }
        function visualiseVideoContextGraph2(videoContext, canvas) {
          var ctx = canvas.getContext("2d");
          var w = canvas.width;
          var h = canvas.height;
          ctx.clearRect(0, 0, w, h);
          var nodeDepths = calculateNodeDepthFromDestination(videoContext);
          var depths = nodeDepths.values();
          depths = Array.from(depths).sort(function(a, b) {
            return b - a;
          });
          var maxDepth = depths[0];
          var xStep = w / (maxDepth + 1);
          var nodeHeight = h / videoContext._sourceNodes.length / 3;
          var nodeWidth = nodeHeight * 1.618;
          function calculateNodePos(node2, nodeDepths2, xStep2, nodeHeight2) {
            var depth = nodeDepths2.get(node2);
            nodeDepths2.values();
            var count = 0;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = void 0;
            try {
              for (var _iterator3 = nodeDepths2[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var nodeDepth = _step3.value;
                if (nodeDepth[0] === node2)
                  break;
                if (nodeDepth[1] === depth)
                  count += 1;
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
            return {
              x: xStep2 * nodeDepths2.get(node2),
              y: nodeHeight2 * 1.5 * count + 50
            };
          }
          for (var i = 0; i < videoContext._renderGraph.connections.length; i++) {
            var conn = videoContext._renderGraph.connections[i];
            var source = calculateNodePos(conn.source, nodeDepths, xStep, nodeHeight);
            var destination = calculateNodePos(conn.destination, nodeDepths, xStep, nodeHeight);
            if (source !== void 0 && destination !== void 0) {
              ctx.beginPath();
              var x1 = source.x + nodeWidth / 2;
              var y1 = source.y + nodeHeight / 2;
              var x2 = destination.x + nodeWidth / 2;
              var y2 = destination.y + nodeHeight / 2;
              var dx = x2 - x1;
              var dy = y2 - y1;
              var angle = Math.PI / 2 - Math.atan2(dx, dy);
              var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
              var midX = Math.min(x1, x2) + (Math.max(x1, x2) - Math.min(x1, x2)) / 2;
              var midY = Math.min(y1, y2) + (Math.max(y1, y2) - Math.min(y1, y2)) / 2;
              var testX = Math.cos(angle + Math.PI / 2) * distance / 1.5 + midX;
              var testY = Math.sin(angle + Math.PI / 2) * distance / 1.5 + midY;
              ctx.arc(testX, testY, distance / 1.2, angle - Math.PI + 0.95, angle - 0.95);
              ctx.stroke();
            }
          }
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = void 0;
          try {
            for (var _iterator4 = nodeDepths.keys()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var node = _step4.value;
              var pos = calculateNodePos(node, nodeDepths, xStep, nodeHeight);
              var color = "#AA9639";
              var text = "";
              if (node.displayName === _compositingnode.COMPOSITINGTYPE) {
                color = "#000000";
              }
              if (node.displayName === _destinationnode.DESTINATIONTYPE) {
                color = "#7D9F35";
                text = "Output";
              }
              if (node.displayName === _videonode.VIDEOTYPE) {
                color = "#572A72";
                text = "Video";
              }
              if (node.displayName === _canvasnode.CANVASTYPE) {
                color = "#572A72";
                text = "Canvas";
              }
              if (node.displayName === _imagenode.IMAGETYPE) {
                color = "#572A72";
                text = "Image";
              }
              ctx.beginPath();
              ctx.fillStyle = color;
              ctx.fillRect(pos.x, pos.y, nodeWidth, nodeHeight);
              ctx.fill();
              ctx.fillStyle = "#000";
              ctx.textAlign = "center";
              ctx.font = "10px Arial";
              ctx.fillText(text, pos.x + nodeWidth / 2, pos.y + nodeHeight / 2 + 2.5);
              ctx.fill();
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
          return;
        }
        function createSigmaGraphDataFromRenderGraph2(videoContext) {
          function idForNode(node) {
            if (videoContext._sourceNodes.indexOf(node) !== -1) {
              var _id2 = "source " + node.displayName + " " + videoContext._sourceNodes.indexOf(node);
              return _id2;
            }
            var id = "processor " + node.displayName + " " + videoContext._processingNodes.indexOf(node);
            return id;
          }
          var graph = {
            nodes: [{
              id: idForNode(videoContext.destination),
              label: "Destination Node",
              x: 2.5,
              y: 0.5,
              size: 2,
              node: videoContext.destination
            }],
            edges: []
          };
          for (var i = 0; i < videoContext._sourceNodes.length; i++) {
            var sourceNode = videoContext._sourceNodes[i];
            var y = i * (1 / videoContext._sourceNodes.length);
            graph.nodes.push({
              id: idForNode(sourceNode),
              label: "Source " + i.toString(),
              x: 0,
              y,
              size: 2,
              color: "#572A72",
              node: sourceNode
            });
          }
          for (var _i = 0; _i < videoContext._processingNodes.length; _i++) {
            var processingNode = videoContext._processingNodes[_i];
            graph.nodes.push({
              id: idForNode(processingNode),
              x: Math.random() * 2.5,
              y: Math.random(),
              size: 2,
              node: processingNode
            });
          }
          for (var _i2 = 0; _i2 < videoContext._renderGraph.connections.length; _i2++) {
            var conn = videoContext._renderGraph.connections[_i2];
            graph.edges.push({
              id: "e" + _i2.toString(),
              source: idForNode(conn.source),
              target: idForNode(conn.destination)
            });
          }
          return graph;
        }
        function importSimpleEDL2(ctx, playlist) {
          var trackNode = ctx.compositor(_definitions2.default.COMBINE);
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = void 0;
          try {
            for (var _iterator5 = playlist[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var clip = _step5.value;
              var node = void 0;
              if (clip.type === "video") {
                node = ctx.video(clip.src, clip.sourceStart);
              } else if (clip.type === "image") {
                node = ctx.image(clip.src, clip.sourceStart);
              } else {
                console.debug("Clip type " + clip.type + " not recognised, skipping.");
                continue;
              }
              node.startAt(clip.start);
              node.stopAt(clip.start + clip.duration);
              node.connect(trackNode);
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
          return trackNode;
        }
        function visualiseVideoContextTimeline2(videoContext, canvas, currentTime) {
          var ctx = canvas.getContext("2d");
          var w = canvas.width;
          var h = canvas.height;
          var trackHeight = h / videoContext._sourceNodes.length;
          var playlistDuration = videoContext.duration;
          if (currentTime > playlistDuration && !videoContext.endOnLastSourceEnd)
            playlistDuration = currentTime;
          if (videoContext.duration === Infinity) {
            var total = 0;
            for (var i = 0; i < videoContext._sourceNodes.length; i++) {
              var sourceNode = videoContext._sourceNodes[i];
              if (sourceNode._stopTime !== Infinity)
                total += sourceNode._stopTime;
            }
            if (total > videoContext.currentTime) {
              playlistDuration = total + 5;
            } else {
              playlistDuration = videoContext.currentTime + 5;
            }
          }
          var pixelsPerSecond = w / playlistDuration;
          var mediaSourceStyle = {
            video: ["#572A72", "#3C1255"],
            image: ["#7D9F35", "#577714"],
            canvas: ["#AA9639", "#806D15"]
          };
          ctx.clearRect(0, 0, w, h);
          ctx.fillStyle = "#999";
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = void 0;
          try {
            for (var _iterator6 = videoContext._processingNodes[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var node = _step6.value;
              if (node.displayName !== _transitionnode.TRANSITIONTYPE)
                continue;
              for (var propertyName in node._transitions) {
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = void 0;
                try {
                  for (var _iterator7 = node._transitions[propertyName][Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var transition = _step7.value;
                    var tW = (transition.end - transition.start) * pixelsPerSecond;
                    var tH = h;
                    var tX = transition.start * pixelsPerSecond;
                    var tY = 0;
                    ctx.fillStyle = "rgba(0,0,0, 0.3)";
                    ctx.fillRect(tX, tY, tW, tH);
                    ctx.fill();
                  }
                } catch (err) {
                  _didIteratorError7 = true;
                  _iteratorError7 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                      _iterator7.return();
                    }
                  } finally {
                    if (_didIteratorError7) {
                      throw _iteratorError7;
                    }
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }
          for (var _i3 = 0; _i3 < videoContext._sourceNodes.length; _i3++) {
            var _sourceNode = videoContext._sourceNodes[_i3];
            var duration = _sourceNode._stopTime - _sourceNode._startTime;
            if (duration === Infinity)
              duration = videoContext.currentTime;
            var start = _sourceNode._startTime;
            var msW = duration * pixelsPerSecond;
            var msH = trackHeight;
            var msX = start * pixelsPerSecond;
            var msY = trackHeight * _i3;
            ctx.fillStyle = mediaSourceStyle.video[_i3 % mediaSourceStyle.video.length];
            ctx.fillRect(msX, msY, msW, msH);
            ctx.fill();
          }
          if (currentTime !== void 0) {
            ctx.fillStyle = "#000";
            ctx.fillRect(currentTime * pixelsPerSecond, 0, 1, h);
          }
        }
        var UpdateablesManager2 = exports2.UpdateablesManager = function() {
          function UpdateablesManager3() {
            _classCallCheck(this, UpdateablesManager3);
            this._updateables = [];
            this._useWebworker = false;
            this._active = false;
            this._previousRAFTime = void 0;
            this._previousWorkerTime = void 0;
            this._webWorkerString = "            var running = false;            function tick(){                postMessage(Date.now());                if (running){                    setTimeout(tick, 1000/20);                }            }            self.addEventListener('message',function(msg){                var data = msg.data;                if (data === 'start'){                    running = true;                    tick();                }                if (data === 'stop') running = false;            });";
            this._webWorker = void 0;
          }
          _createClass(UpdateablesManager3, [{
            key: "_initWebWorker",
            value: function _initWebWorker() {
              var _this = this;
              window.URL = window.URL || window.webkitURL;
              var blob = new Blob([this._webWorkerString], {
                type: "application/javascript"
              });
              this._webWorker = new Worker(URL.createObjectURL(blob));
              this._webWorker.onmessage = function(msg) {
                var time = msg.data;
                _this._updateWorkerTime(time);
              };
            }
          }, {
            key: "_lostVisibility",
            value: function _lostVisibility() {
              this._previousWorkerTime = Date.now();
              this._useWebworker = true;
              if (!this._webWorker) {
                this._initWebWorker();
              }
              this._webWorker.postMessage("start");
            }
          }, {
            key: "_gainedVisibility",
            value: function _gainedVisibility() {
              this._useWebworker = false;
              this._previousRAFTime = void 0;
              if (this._webWorker)
                this._webWorker.postMessage("stop");
              requestAnimationFrame(this._updateRAFTime.bind(this));
            }
          }, {
            key: "_init",
            value: function _init() {
              var _this2 = this;
              if (!window.Worker)
                return;
              if (typeof document.hidden === "undefined") {
                window.addEventListener("focus", this._gainedVisibility.bind(this));
                window.addEventListener("blur", this._lostVisibility.bind(this));
                return;
              }
              document.addEventListener("visibilitychange", function() {
                if (document.hidden === true) {
                  _this2._lostVisibility();
                } else {
                  _this2._gainedVisibility();
                }
              }, false);
              requestAnimationFrame(this._updateRAFTime.bind(this));
            }
          }, {
            key: "_updateWorkerTime",
            value: function _updateWorkerTime(time) {
              var dt = (time - this._previousWorkerTime) / 1e3;
              if (dt !== 0)
                this._update(dt);
              this._previousWorkerTime = time;
            }
          }, {
            key: "_updateRAFTime",
            value: function _updateRAFTime(time) {
              if (this._previousRAFTime === void 0)
                this._previousRAFTime = time;
              var dt = (time - this._previousRAFTime) / 1e3;
              if (dt !== 0)
                this._update(dt);
              this._previousRAFTime = time;
              if (!this._useWebworker)
                requestAnimationFrame(this._updateRAFTime.bind(this));
            }
          }, {
            key: "_update",
            value: function _update(dt) {
              for (var i = 0; i < this._updateables.length; i++) {
                this._updateables[i]._update(parseFloat(dt));
              }
            }
          }, {
            key: "register",
            value: function register(updateable) {
              this._updateables.push(updateable);
              if (this._active === false) {
                this._active = true;
                this._init();
              }
            }
          }]);
          return UpdateablesManager3;
        }();
        function mediaElementHasSource2(_ref) {
          var src = _ref.src, srcObject = _ref.srcObject;
          return !((src === "" || src === void 0) && srcObject == null);
        }
      },
      "./src/videocontext.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _utils = __webpack_require__("./src/utils.js");
        var _nodes = __webpack_require__("./src/SourceNodes/nodes.js");
        var _nodes2 = _interopRequireDefault(_nodes);
        var _videonode = __webpack_require__("./src/SourceNodes/videonode.js");
        var _videonode2 = _interopRequireDefault(_videonode);
        var _audionode = __webpack_require__("./src/SourceNodes/audionode.js");
        var _audionode2 = _interopRequireDefault(_audionode);
        var _imagenode = __webpack_require__("./src/SourceNodes/imagenode.js");
        var _imagenode2 = _interopRequireDefault(_imagenode);
        var _canvasnode = __webpack_require__("./src/SourceNodes/canvasnode.js");
        var _canvasnode2 = _interopRequireDefault(_canvasnode);
        var _sourcenode = __webpack_require__("./src/SourceNodes/sourcenode.js");
        var _compositingnode = __webpack_require__("./src/ProcessingNodes/compositingnode.js");
        var _compositingnode2 = _interopRequireDefault(_compositingnode);
        var _destinationnode = __webpack_require__("./src/DestinationNode/destinationnode.js");
        var _destinationnode2 = _interopRequireDefault(_destinationnode);
        var _effectnode = __webpack_require__("./src/ProcessingNodes/effectnode.js");
        var _effectnode2 = _interopRequireDefault(_effectnode);
        var _transitionnode = __webpack_require__("./src/ProcessingNodes/transitionnode.js");
        var _transitionnode2 = _interopRequireDefault(_transitionnode);
        var _rendergraph = __webpack_require__("./src/rendergraph.js");
        var _rendergraph2 = _interopRequireDefault(_rendergraph);
        var _videoelementcache = __webpack_require__("./src/videoelementcache.js");
        var _videoelementcache2 = _interopRequireDefault(_videoelementcache);
        var _definitions = __webpack_require__("./src/Definitions/definitions.js");
        var _definitions2 = _interopRequireDefault(_definitions);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var updateablesManager = new _utils.UpdateablesManager();
        var VideoContext2 = function() {
          function VideoContext3(canvas, initErrorCallback) {
            var _this = this;
            var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref$manualUpdate = _ref.manualUpdate, manualUpdate = _ref$manualUpdate === void 0 ? false : _ref$manualUpdate, _ref$endOnLastSourceE = _ref.endOnLastSourceEnd, endOnLastSourceEnd = _ref$endOnLastSourceE === void 0 ? true : _ref$endOnLastSourceE, _ref$useVideoElementC = _ref.useVideoElementCache, useVideoElementCache = _ref$useVideoElementC === void 0 ? true : _ref$useVideoElementC, _ref$videoElementCach = _ref.videoElementCacheSize, videoElementCacheSize = _ref$videoElementCach === void 0 ? 6 : _ref$videoElementCach, _ref$webglContextAttr = _ref.webglContextAttributes, webglContextAttributes = _ref$webglContextAttr === void 0 ? {} : _ref$webglContextAttr;
            _classCallCheck(this, VideoContext3);
            this._canvas = canvas;
            this._endOnLastSourceEnd = endOnLastSourceEnd;
            this._gl = canvas.getContext("experimental-webgl", Object.assign({preserveDrawingBuffer: true}, webglContextAttributes, {
              alpha: false
            }));
            if (this._gl === null) {
              console.error("Failed to intialise WebGL.");
              if (initErrorCallback)
                initErrorCallback();
              return;
            }
            this._useVideoElementCache = useVideoElementCache;
            if (this._useVideoElementCache) {
              this._videoElementCache = new _videoelementcache2.default(videoElementCacheSize);
            }
            if (this._canvas.id) {
              if (typeof this._canvas.id === "string" || this._canvas.id instanceof String) {
                this._id = canvas.id;
              }
            }
            if (this._id === void 0)
              this._id = (0, _utils.generateRandomId)();
            if (window.__VIDEOCONTEXT_REFS__ === void 0)
              window.__VIDEOCONTEXT_REFS__ = {};
            window.__VIDEOCONTEXT_REFS__[this._id] = this;
            this._renderGraph = new _rendergraph2.default();
            this._sourceNodes = [];
            this._processingNodes = [];
            this._timeline = [];
            this._currentTime = 0;
            this._state = VideoContext3.STATE.PAUSED;
            this._playbackRate = 1;
            this._volume = 1;
            this._sourcesPlaying = void 0;
            this._destinationNode = new _destinationnode2.default(this._gl, this._renderGraph);
            this._callbacks = new Map();
            Object.keys(VideoContext3.EVENTS).forEach(function(name) {
              return _this._callbacks.set(VideoContext3.EVENTS[name], []);
            });
            this._timelineCallbacks = [];
            if (!manualUpdate) {
              updateablesManager.register(this);
            }
          }
          _createClass(VideoContext3, [{
            key: "registerTimelineCallback",
            value: function registerTimelineCallback(time, func) {
              var ordering = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
              this._timelineCallbacks.push({
                time,
                func,
                ordering
              });
            }
          }, {
            key: "unregisterTimelineCallback",
            value: function unregisterTimelineCallback(func) {
              var toRemove = [];
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = void 0;
              try {
                for (var _iterator = this._timelineCallbacks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var callback = _step.value;
                  if (callback.func === func) {
                    toRemove.push(callback);
                  }
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = void 0;
              try {
                for (var _iterator2 = toRemove[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var _callback = _step2.value;
                  var index = this._timelineCallbacks.indexOf(_callback);
                  this._timelineCallbacks.splice(index, 1);
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            }
          }, {
            key: "registerCallback",
            value: function registerCallback(type, func) {
              if (!this._callbacks.has(type))
                return false;
              this._callbacks.get(type).push(func);
            }
          }, {
            key: "unregisterCallback",
            value: function unregisterCallback(func) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = void 0;
              try {
                for (var _iterator3 = this._callbacks.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var funcArray = _step3.value;
                  var index = funcArray.indexOf(func);
                  if (index !== -1) {
                    funcArray.splice(index, 1);
                    return true;
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
              return false;
            }
          }, {
            key: "_callCallbacks",
            value: function _callCallbacks(type) {
              var funcArray = this._callbacks.get(type);
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = void 0;
              try {
                for (var _iterator4 = funcArray[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var func = _step4.value;
                  func(this._currentTime);
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }
            }
          }, {
            key: "play",
            value: function play() {
              console.debug("VideoContext - playing");
              if (this._videoElementCache)
                this._videoElementCache.init();
              this._state = VideoContext3.STATE.PLAYING;
              return true;
            }
          }, {
            key: "pause",
            value: function pause() {
              console.debug("VideoContext - pausing");
              this._state = VideoContext3.STATE.PAUSED;
              return true;
            }
          }, {
            key: "video",
            value: function video(src) {
              var sourceOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              var preloadTime = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 4;
              var videoElementAttributes = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
              var videoNode = new _videonode2.default(src, this._gl, this._renderGraph, this._currentTime, this._playbackRate, sourceOffset, preloadTime, this._videoElementCache, videoElementAttributes);
              this._sourceNodes.push(videoNode);
              return videoNode;
            }
          }, {
            key: "audio",
            value: function audio(src) {
              var sourceOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              var preloadTime = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 4;
              var audioElementAttributes = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
              var audioNode = new _audionode2.default(src, this._gl, this._renderGraph, this._currentTime, this._playbackRate, sourceOffset, preloadTime, this._audioElementCache, audioElementAttributes);
              this._sourceNodes.push(audioNode);
              return audioNode;
            }
          }, {
            key: "createVideoSourceNode",
            value: function createVideoSourceNode(src) {
              var sourceOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              var preloadTime = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 4;
              var videoElementAttributes = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
              this._deprecate("Warning: createVideoSourceNode will be deprecated in v1.0, please switch to using VideoContext.video()");
              return this.video(src, sourceOffset, preloadTime, videoElementAttributes);
            }
          }, {
            key: "image",
            value: function image(src) {
              var preloadTime = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4;
              var imageElementAttributes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              var imageNode = new _imagenode2.default(src, this._gl, this._renderGraph, this._currentTime, preloadTime, imageElementAttributes);
              this._sourceNodes.push(imageNode);
              return imageNode;
            }
          }, {
            key: "createImageSourceNode",
            value: function createImageSourceNode(src) {
              var sourceOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              var preloadTime = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 4;
              var imageElementAttributes = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
              this._deprecate("Warning: createImageSourceNode will be deprecated in v1.0, please switch to using VideoContext.image()");
              return this.image(src, sourceOffset, preloadTime, imageElementAttributes);
            }
          }, {
            key: "canvas",
            value: function canvas(_canvas) {
              var canvasNode = new _canvasnode2.default(_canvas, this._gl, this._renderGraph, this._currentTime);
              this._sourceNodes.push(canvasNode);
              return canvasNode;
            }
          }, {
            key: "createCanvasSourceNode",
            value: function createCanvasSourceNode(canvas) {
              var sourceOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              var preloadTime = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 4;
              this._deprecate("Warning: createCanvasSourceNode will be deprecated in v1.0, please switch to using VideoContext.canvas()");
              return this.canvas(canvas, sourceOffset, preloadTime);
            }
          }, {
            key: "effect",
            value: function effect(definition) {
              var effectNode = new _effectnode2.default(this._gl, this._renderGraph, definition);
              this._processingNodes.push(effectNode);
              return effectNode;
            }
          }, {
            key: "createEffectNode",
            value: function createEffectNode(definition) {
              this._deprecate("Warning: createEffectNode will be deprecated in v1.0, please switch to using VideoContext.effect()");
              return this.effect(definition);
            }
          }, {
            key: "compositor",
            value: function compositor(definition) {
              var compositingNode = new _compositingnode2.default(this._gl, this._renderGraph, definition);
              this._processingNodes.push(compositingNode);
              return compositingNode;
            }
          }, {
            key: "customSourceNode",
            value: function customSourceNode(CustomSourceNode, src) {
              for (var _len = arguments.length, options = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                options[_key - 2] = arguments[_key];
              }
              var customSourceNode2 = new (Function.prototype.bind.apply(CustomSourceNode, [null].concat([src, this._gl, this._renderGraph, this._currentTime], options)))();
              this._sourceNodes.push(customSourceNode2);
              return customSourceNode2;
            }
          }, {
            key: "createCompositingNode",
            value: function createCompositingNode(definition) {
              this._deprecate("Warning: createCompositingNode will be deprecated in v1.0, please switch to using VideoContext.compositor()");
              return this.compositor(definition);
            }
          }, {
            key: "transition",
            value: function transition(definition) {
              var transitionNode = new _transitionnode2.default(this._gl, this._renderGraph, definition);
              this._processingNodes.push(transitionNode);
              return transitionNode;
            }
          }, {
            key: "createTransitionNode",
            value: function createTransitionNode(definition) {
              this._deprecate("Warning: createTransitionNode will be deprecated in v1.0, please switch to using VideoContext.transition()");
              return this.transition(definition);
            }
          }, {
            key: "_isStalled",
            value: function _isStalled() {
              for (var i = 0; i < this._sourceNodes.length; i++) {
                var sourceNode = this._sourceNodes[i];
                if (!sourceNode._isReady()) {
                  return true;
                }
              }
              return false;
            }
          }, {
            key: "update",
            value: function update(dt) {
              this._update(dt);
            }
          }, {
            key: "_update",
            value: function _update(dt) {
              this._sourceNodes = this._sourceNodes.filter(function(sourceNode2) {
                if (!sourceNode2.destroyed)
                  return sourceNode2;
              });
              this._processingNodes = this._processingNodes.filter(function(processingNode) {
                if (!processingNode.destroyed)
                  return processingNode;
              });
              if (this._state === VideoContext3.STATE.PLAYING || this._state === VideoContext3.STATE.STALLED || this._state === VideoContext3.STATE.PAUSED) {
                this._callCallbacks(VideoContext3.EVENTS.UPDATE);
                if (this._state !== VideoContext3.STATE.PAUSED) {
                  if (this._isStalled()) {
                    this._callCallbacks(VideoContext3.EVENTS.STALLED);
                    this._state = VideoContext3.STATE.STALLED;
                  } else {
                    this._state = VideoContext3.STATE.PLAYING;
                  }
                }
                if (this._state === VideoContext3.STATE.PLAYING) {
                  var activeCallbacks = new Map();
                  var _iteratorNormalCompletion5 = true;
                  var _didIteratorError5 = false;
                  var _iteratorError5 = void 0;
                  try {
                    for (var _iterator5 = this._timelineCallbacks[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                      var callback = _step5.value;
                      if (callback.time >= this.currentTime && callback.time < this._currentTime + dt * this._playbackRate) {
                        if (!activeCallbacks.has(callback.time))
                          activeCallbacks.set(callback.time, []);
                        activeCallbacks.get(callback.time).push(callback);
                      }
                    }
                  } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                      }
                    } finally {
                      if (_didIteratorError5) {
                        throw _iteratorError5;
                      }
                    }
                  }
                  var timeIntervals = Array.from(activeCallbacks.keys());
                  timeIntervals.sort(function(a, b) {
                    return a - b;
                  });
                  var _iteratorNormalCompletion6 = true;
                  var _didIteratorError6 = false;
                  var _iteratorError6 = void 0;
                  try {
                    for (var _iterator6 = timeIntervals[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                      var t = _step6.value;
                      var callbacks = activeCallbacks.get(t);
                      callbacks.sort(function(a, b) {
                        return a.ordering - b.ordering;
                      });
                      var _iteratorNormalCompletion7 = true;
                      var _didIteratorError7 = false;
                      var _iteratorError7 = void 0;
                      try {
                        for (var _iterator7 = callbacks[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                          var _callback2 = _step7.value;
                          _callback2.func();
                        }
                      } catch (err) {
                        _didIteratorError7 = true;
                        _iteratorError7 = err;
                      } finally {
                        try {
                          if (!_iteratorNormalCompletion7 && _iterator7.return) {
                            _iterator7.return();
                          }
                        } finally {
                          if (_didIteratorError7) {
                            throw _iteratorError7;
                          }
                        }
                      }
                    }
                  } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                      }
                    } finally {
                      if (_didIteratorError6) {
                        throw _iteratorError6;
                      }
                    }
                  }
                  this._currentTime += dt * this._playbackRate;
                  if (this._currentTime > this.duration && this._endOnLastSourceEnd) {
                    for (var i = 0; i < this._sourceNodes.length; i++) {
                      this._sourceNodes[i]._update(this._currentTime);
                    }
                    this._state = VideoContext3.STATE.ENDED;
                    this._callCallbacks(VideoContext3.EVENTS.ENDED);
                  }
                }
                var sourcesPlaying = false;
                for (var _i = 0; _i < this._sourceNodes.length; _i++) {
                  var sourceNode = this._sourceNodes[_i];
                  if (this._state === VideoContext3.STATE.STALLED) {
                    if (sourceNode._isReady() && sourceNode._state === _sourcenode.SOURCENODESTATE.playing)
                      sourceNode._pause();
                  }
                  if (this._state === VideoContext3.STATE.PAUSED) {
                    sourceNode._pause();
                  }
                  if (this._state === VideoContext3.STATE.PLAYING) {
                    sourceNode._play();
                  }
                  sourceNode._update(this._currentTime);
                  if (sourceNode._state === _sourcenode.SOURCENODESTATE.paused || sourceNode._state === _sourcenode.SOURCENODESTATE.playing) {
                    sourcesPlaying = true;
                  }
                }
                if (sourcesPlaying !== this._sourcesPlaying && this._state === VideoContext3.STATE.PLAYING) {
                  if (sourcesPlaying === true) {
                    this._callCallbacks(VideoContext3.EVENTS.CONTENT);
                  } else {
                    this._callCallbacks(VideoContext3.EVENTS.NOCONTENT);
                  }
                  this._sourcesPlaying = sourcesPlaying;
                }
                var sortedNodes = [];
                var connections = this._renderGraph.connections.slice();
                var nodes = _rendergraph2.default.getInputlessNodes(connections);
                while (nodes.length > 0) {
                  var node = nodes.pop();
                  sortedNodes.push(node);
                  var _iteratorNormalCompletion8 = true;
                  var _didIteratorError8 = false;
                  var _iteratorError8 = void 0;
                  try {
                    for (var _iterator8 = _rendergraph2.default.outputEdgesFor(node, connections)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                      var edge = _step8.value;
                      var index = connections.indexOf(edge);
                      if (index > -1)
                        connections.splice(index, 1);
                      if (_rendergraph2.default.inputEdgesFor(edge.destination, connections).length === 0) {
                        nodes.push(edge.destination);
                      }
                    }
                  } catch (err) {
                    _didIteratorError8 = true;
                    _iteratorError8 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                      }
                    } finally {
                      if (_didIteratorError8) {
                        throw _iteratorError8;
                      }
                    }
                  }
                }
                var _iteratorNormalCompletion9 = true;
                var _didIteratorError9 = false;
                var _iteratorError9 = void 0;
                try {
                  for (var _iterator9 = sortedNodes[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var _node = _step9.value;
                    if (this._sourceNodes.indexOf(_node) === -1) {
                      _node._update(this._currentTime);
                      _node._render();
                    }
                  }
                } catch (err) {
                  _didIteratorError9 = true;
                  _iteratorError9 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                      _iterator9.return();
                    }
                  } finally {
                    if (_didIteratorError9) {
                      throw _iteratorError9;
                    }
                  }
                }
              }
            }
          }, {
            key: "reset",
            value: function reset() {
              var _this2 = this;
              var _iteratorNormalCompletion10 = true;
              var _didIteratorError10 = false;
              var _iteratorError10 = void 0;
              try {
                for (var _iterator10 = this._callbacks[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                  var callback = _step10.value;
                  this.unregisterCallback(callback);
                }
              } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion10 && _iterator10.return) {
                    _iterator10.return();
                  }
                } finally {
                  if (_didIteratorError10) {
                    throw _iteratorError10;
                  }
                }
              }
              var _iteratorNormalCompletion11 = true;
              var _didIteratorError11 = false;
              var _iteratorError11 = void 0;
              try {
                for (var _iterator11 = this._sourceNodes[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                  var node = _step11.value;
                  node.destroy();
                }
              } catch (err) {
                _didIteratorError11 = true;
                _iteratorError11 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion11 && _iterator11.return) {
                    _iterator11.return();
                  }
                } finally {
                  if (_didIteratorError11) {
                    throw _iteratorError11;
                  }
                }
              }
              var _iteratorNormalCompletion12 = true;
              var _didIteratorError12 = false;
              var _iteratorError12 = void 0;
              try {
                for (var _iterator12 = this._processingNodes[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                  var _node2 = _step12.value;
                  _node2.destroy();
                }
              } catch (err) {
                _didIteratorError12 = true;
                _iteratorError12 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion12 && _iterator12.return) {
                    _iterator12.return();
                  }
                } finally {
                  if (_didIteratorError12) {
                    throw _iteratorError12;
                  }
                }
              }
              this._update(0);
              this._sourceNodes = [];
              this._processingNodes = [];
              this._timeline = [];
              this._currentTime = 0;
              this._state = VideoContext3.STATE.PAUSED;
              this._playbackRate = 1;
              this._sourcesPlaying = void 0;
              Object.keys(VideoContext3.EVENTS).forEach(function(name) {
                return _this2._callbacks.set(VideoContext3.EVENTS[name], []);
              });
              this._timelineCallbacks = [];
            }
          }, {
            key: "_deprecate",
            value: function _deprecate(msg) {
              console.log(msg);
            }
          }, {
            key: "snapshot",
            value: function snapshot2() {
              return (0, _utils.snapshot)(this);
            }
          }, {
            key: "id",
            get: function get() {
              return this._id;
            },
            set: function set(newID) {
              delete window.__VIDEOCONTEXT_REFS__[this._id];
              if (window.__VIDEOCONTEXT_REFS__[newID] !== void 0)
                console.warn("Warning; setting id to that of an existing VideoContext instance.");
              window.__VIDEOCONTEXT_REFS__[newID] = this;
              this._id = newID;
            }
          }, {
            key: "element",
            get: function get() {
              return this._canvas;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state;
            }
          }, {
            key: "currentTime",
            set: function set(currentTime) {
              if (currentTime < this.duration && this._state === VideoContext3.STATE.ENDED)
                this._state = VideoContext3.STATE.PAUSED;
              if (typeof currentTime === "string" || currentTime instanceof String) {
                currentTime = parseFloat(currentTime);
              }
              for (var i = 0; i < this._sourceNodes.length; i++) {
                this._sourceNodes[i]._seek(currentTime);
              }
              for (var _i2 = 0; _i2 < this._processingNodes.length; _i2++) {
                this._processingNodes[_i2]._seek(currentTime);
              }
              this._currentTime = currentTime;
            },
            get: function get() {
              return this._currentTime;
            }
          }, {
            key: "duration",
            get: function get() {
              var maxTime = 0;
              for (var i = 0; i < this._sourceNodes.length; i++) {
                if (this._sourceNodes[i].state !== _sourcenode.SOURCENODESTATE.waiting && this._sourceNodes[i]._stopTime > maxTime) {
                  maxTime = this._sourceNodes[i]._stopTime;
                }
              }
              return maxTime;
            }
          }, {
            key: "destination",
            get: function get() {
              return this._destinationNode;
            }
          }, {
            key: "playbackRate",
            set: function set(rate) {
              if (rate <= 0) {
                throw new RangeError("playbackRate must be greater than 0");
              }
              var _iteratorNormalCompletion13 = true;
              var _didIteratorError13 = false;
              var _iteratorError13 = void 0;
              try {
                for (var _iterator13 = this._sourceNodes[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                  var node = _step13.value;
                  if (node.constructor.name === _videonode.VIDEOTYPE) {
                    node._globalPlaybackRate = rate;
                    node._playbackRateUpdated = true;
                  }
                }
              } catch (err) {
                _didIteratorError13 = true;
                _iteratorError13 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion13 && _iterator13.return) {
                    _iterator13.return();
                  }
                } finally {
                  if (_didIteratorError13) {
                    throw _iteratorError13;
                  }
                }
              }
              this._playbackRate = rate;
            },
            get: function get() {
              return this._playbackRate;
            }
          }, {
            key: "volume",
            set: function set(vol) {
              var _iteratorNormalCompletion14 = true;
              var _didIteratorError14 = false;
              var _iteratorError14 = void 0;
              try {
                for (var _iterator14 = this._sourceNodes[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                  var node = _step14.value;
                  if (node instanceof _videonode2.default || node instanceof _audionode2.default) {
                    node.volume = vol;
                  }
                }
              } catch (err) {
                _didIteratorError14 = true;
                _iteratorError14 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion14 && _iterator14.return) {
                    _iterator14.return();
                  }
                } finally {
                  if (_didIteratorError14) {
                    throw _iteratorError14;
                  }
                }
              }
              this._volume = vol;
            },
            get: function get() {
              return this._volume;
            }
          }], [{
            key: "DEFINITIONS",
            get: function get() {
              return _definitions2.default;
            }
          }, {
            key: "NODES",
            get: function get() {
              return _nodes2.default;
            }
          }]);
          return VideoContext3;
        }();
        exports2.default = VideoContext2;
        var STATE = Object.freeze({
          PLAYING: 0,
          PAUSED: 1,
          STALLED: 2,
          ENDED: 3,
          BROKEN: 4
        });
        VideoContext2.STATE = STATE;
        var EVENTS = Object.freeze({
          UPDATE: "update",
          STALLED: "stalled",
          ENDED: "ended",
          CONTENT: "content",
          NOCONTENT: "nocontent"
        });
        VideoContext2.EVENTS = EVENTS;
        VideoContext2.visualiseVideoContextTimeline = _utils.visualiseVideoContextTimeline;
        VideoContext2.visualiseVideoContextGraph = _utils.visualiseVideoContextGraph;
        VideoContext2.createControlFormForNode = _utils.createControlFormForNode;
        VideoContext2.createSigmaGraphDataFromRenderGraph = _utils.createSigmaGraphDataFromRenderGraph;
        VideoContext2.exportToJSON = _utils.exportToJSON;
        VideoContext2.updateablesManager = updateablesManager;
        VideoContext2.importSimpleEDL = _utils.importSimpleEDL;
        module2.exports = exports2.default;
      },
      "./src/videoelementcache.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _videoelementcacheitem = __webpack_require__("./src/videoelementcacheitem.js");
        var _videoelementcacheitem2 = _interopRequireDefault(_videoelementcacheitem);
        var _utils = __webpack_require__("./src/utils.js");
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {default: obj};
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var VideoElementCache = function() {
          function VideoElementCache2() {
            var cache_size = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 3;
            _classCallCheck(this, VideoElementCache2);
            this._cacheItems = [];
            this._cacheItemsInitialised = false;
            for (var i = 0; i < cache_size; i++) {
              this._cacheItems.push(new _videoelementcacheitem2.default());
            }
          }
          _createClass(VideoElementCache2, [{
            key: "init",
            value: function init() {
              if (!this._cacheItemsInitialised) {
                var _loop = function _loop2(cacheItem2) {
                  try {
                    cacheItem2.element.play().then(function() {
                      if (!cacheItem2.isPlaying()) {
                        cacheItem2.element.pause();
                      }
                    }, function(e) {
                      if (e.name !== "NotSupportedError")
                        throw e;
                    });
                  } catch (e) {
                  }
                };
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = void 0;
                try {
                  for (var _iterator = this._cacheItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var cacheItem = _step.value;
                    _loop(cacheItem);
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }
              }
              this._cacheItemsInitialised = true;
            }
          }, {
            key: "getElementAndLinkToNode",
            value: function getElementAndLinkToNode(mediaNode) {
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = void 0;
              try {
                for (var _iterator2 = this._cacheItems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var _cacheItem = _step2.value;
                  if (!(0, _utils.mediaElementHasSource)(_cacheItem.element)) {
                    _cacheItem.linkNode(mediaNode);
                    return _cacheItem.element;
                  }
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
              console.debug("No available video element in the cache, creating a new one. This may break mobile, make your initial cache larger.");
              var cacheItem = new _videoelementcacheitem2.default(mediaNode);
              this._cacheItems.push(cacheItem);
              this._cacheItemsInitialised = false;
              return cacheItem.element;
            }
          }, {
            key: "unlinkNodeFromElement",
            value: function unlinkNodeFromElement(element) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = void 0;
              try {
                for (var _iterator3 = this._cacheItems[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var cacheItem = _step3.value;
                  if (element === cacheItem._element) {
                    cacheItem.unlinkNode();
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            }
          }, {
            key: "length",
            get: function get() {
              return this._cacheItems.length;
            }
          }, {
            key: "unused",
            get: function get() {
              var count = 0;
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = void 0;
              try {
                for (var _iterator4 = this._cacheItems[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var cacheItem = _step4.value;
                  if (!(0, _utils.mediaElementHasSource)(cacheItem.element))
                    count += 1;
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }
              return count;
            }
          }]);
          return VideoElementCache2;
        }();
        exports2.default = VideoElementCache;
        module2.exports = exports2.default;
      },
      "./src/videoelementcacheitem.js": function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _sourcenode = __webpack_require__("./src/SourceNodes/sourcenode.js");
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var VideoElementCacheItem = function() {
          function VideoElementCacheItem2() {
            var node = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            _classCallCheck(this, VideoElementCacheItem2);
            this._element = this._createElement();
            this._node = node;
          }
          _createClass(VideoElementCacheItem2, [{
            key: "_createElement",
            value: function _createElement() {
              var videoElement = document.createElement("video");
              videoElement.setAttribute("crossorigin", "anonymous");
              videoElement.setAttribute("webkit-playsinline", "");
              videoElement.setAttribute("playsinline", "");
              return videoElement;
            }
          }, {
            key: "linkNode",
            value: function linkNode(node) {
              this._node = node;
            }
          }, {
            key: "unlinkNode",
            value: function unlinkNode() {
              this._node = null;
            }
          }, {
            key: "isPlaying",
            value: function isPlaying() {
              return this._node && this._node._state === _sourcenode.SOURCENODESTATE.playing;
            }
          }, {
            key: "element",
            get: function get() {
              return this._element;
            },
            set: function set(element) {
              this._element = element;
            }
          }]);
          return VideoElementCacheItem2;
        }();
        exports2.default = VideoElementCacheItem;
        module2.exports = exports2.default;
      }
    });
  });
});
var __pika_web_default_export_for_treeshaking__ = /* @__PURE__ */ getDefaultExportFromCjs(videocontext);
var AUDIOTYPE = videocontext.AUDIOTYPE;
var CANVASTYPE = videocontext.CANVASTYPE;
var COMPOSITINGTYPE = videocontext.COMPOSITINGTYPE;
var ConnectException = videocontext.ConnectException;
var DESTINATIONTYPE = videocontext.DESTINATIONTYPE;
var EFFECTYPE = videocontext.EFFECTYPE;
var GRAPHTYPE = videocontext.GRAPHTYPE;
var IMAGETYPE = videocontext.IMAGETYPE;
var PROCESSINGTYPE = videocontext.PROCESSINGTYPE;
var RenderException = videocontext.RenderException;
var SOURCENODESTATE = videocontext.SOURCENODESTATE;
var SOURCETYPE = videocontext.SOURCETYPE;
var TRANSITIONTYPE = videocontext.TRANSITIONTYPE;
var UpdateablesManager = videocontext.UpdateablesManager;
var VIDEOTYPE = videocontext.VIDEOTYPE;
var VideoContext = videocontext.VideoContext;
var clearTexture = videocontext.clearTexture;
var compileShader = videocontext.compileShader;
var createControlFormForNode = videocontext.createControlFormForNode;
var createElementTexture = videocontext.createElementTexture;
var createShaderProgram = videocontext.createShaderProgram;
var createSigmaGraphDataFromRenderGraph = videocontext.createSigmaGraphDataFromRenderGraph;
export default __pika_web_default_export_for_treeshaking__;
var exportToJSON = videocontext.exportToJSON;
var generateRandomId = videocontext.generateRandomId;
var importSimpleEDL = videocontext.importSimpleEDL;
var mediaElementHasSource = videocontext.mediaElementHasSource;
var snapshot = videocontext.snapshot;
var updateTexture = videocontext.updateTexture;
var visualiseVideoContextGraph = videocontext.visualiseVideoContextGraph;
var visualiseVideoContextTimeline = videocontext.visualiseVideoContextTimeline;
export {AUDIOTYPE, CANVASTYPE, COMPOSITINGTYPE, ConnectException, DESTINATIONTYPE, EFFECTYPE, GRAPHTYPE, IMAGETYPE, PROCESSINGTYPE, RenderException, SOURCENODESTATE, SOURCETYPE, TRANSITIONTYPE, UpdateablesManager, VIDEOTYPE, VideoContext, videocontext as __moduleExports, clearTexture, compileShader, createControlFormForNode, createElementTexture, createShaderProgram, createSigmaGraphDataFromRenderGraph, exportToJSON, generateRandomId, importSimpleEDL, mediaElementHasSource, snapshot, updateTexture, visualiseVideoContextGraph, visualiseVideoContextTimeline};