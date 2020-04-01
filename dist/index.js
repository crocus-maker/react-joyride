Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex.default : ex;
}

const React = require('react');

const React__default = _interopDefault(React);
require('prop-types');
const treeChanges = _interopDefault(require('tree-changes'));
const is = _interopDefault(require('is-lite'));
const ReactDOM = require('react-dom');

const ReactDOM__default = _interopDefault(ReactDOM);
const ExecutionEnvironment = _interopDefault(require('exenv'));
const scroll = _interopDefault(require('scroll'));
const scrollParent = _interopDefault(require('scrollparent'));
const reactIs = require('react-is');
const deepmerge = _interopDefault(require('deepmerge'));
const Floater = _interopDefault(require('react-floater'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (let i = 0; i < props.length; i++) {
    const descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (let i = 1; i < arguments.length; i++) {
        const source = arguments[i];

        for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  const keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    let symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (let i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  const target = {};
  const sourceKeys = Object.keys(source);
  let key;
  let i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  const target = _objectWithoutPropertiesLoose(source, excluded);

  let key;
  let i;

  if (Object.getOwnPropertySymbols) {
    const sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  return function() {
    const Super = _getPrototypeOf(Derived);
    let result;

    if (_isNativeReflectConstruct()) {
      const NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

const ACTIONS = {
  INIT: 'init',
  START: 'start',
  STOP: 'stop',
  RESET: 'reset',
  PREV: 'prev',
  NEXT: 'next',
  GO: 'go',
  CLOSE: 'close',
  SKIP: 'skip',
  UPDATE: 'update',
};

const EVENTS = {
  TOUR_START: 'tour:start',
  STEP_BEFORE: 'step:before',
  BEACON: 'beacon',
  TOOLTIP: 'tooltip',
  STEP_AFTER: 'step:after',
  TOUR_END: 'tour:end',
  TOUR_STATUS: 'tour:status',
  TARGET_NOT_FOUND: 'error:target_not_found',
  ERROR: 'error',
};

const LIFECYCLE = {
  INIT: 'init',
  READY: 'ready',
  BEACON: 'beacon',
  TOOLTIP: 'tooltip',
  COMPLETE: 'complete',
  ERROR: 'error',
};

const STATUS = {
  IDLE: 'idle',
  READY: 'ready',
  WAITING: 'waiting',
  RUNNING: 'running',
  PAUSED: 'paused',
  SKIPPED: 'skipped',
  FINISHED: 'finished',
  ERROR: 'error',
};

const { canUseDOM } = ExecutionEnvironment;
const isReact16 = ReactDOM.createPortal !== undefined;
/**
 * Get the current browser
 *
 * @param {string} userAgent
 *
 * @returns {String}
 */

function getBrowser() {
  const userAgent =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;
  let browser = userAgent;

  if (typeof window === 'undefined') {
    browser = 'node';
  } else if (document.documentMode) {
    browser = 'ie';
  } else if (/Edge/.test(userAgent)) {
    browser = 'edge';
  } // Opera 8.0+
  else if (Boolean(window.opera) || userAgent.indexOf(' OPR/') >= 0) {
    browser = 'opera';
  } // Firefox 1.0+
  else if (typeof window.InstallTrigger !== 'undefined') {
    browser = 'firefox';
  } // Chrome 1+
  else if (window.chrome) {
    browser = 'chrome';
  } // Safari (and Chrome iOS, Firefox iOS)
  else if (/(Version\/([0-9._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(userAgent)) {
    browser = 'safari';
  }

  return browser;
}
/**
 * Get the toString Object type
 * @param {*} value
 * @returns {string}
 */

function getObjectType(value) {
  return Object.prototype.toString
    .call(value)
    .slice(8, -1)
    .toLowerCase();
}
/**
 * Get text from React components
 *
 * @param {*} root
 *
 * @returns {string}
 */

function getText(root) {
  const content = [];

  const recurse = function recurse(child) {
    /* istanbul ignore else */
    if (typeof child === 'string' || typeof child === 'number') {
      content.push(child);
    } else if (Array.isArray(child)) {
      child.forEach(function(c) {
        return recurse(c);
      });
    } else if (child && child.props) {
      const { children } = child.props;

      if (Array.isArray(children)) {
        children.forEach(function(c) {
          return recurse(c);
        });
      } else {
        recurse(children);
      }
    }
  };

  recurse(root);
  return content.join(' ').trim();
}
function hasOwnProperty(value, key) {
  return Object.prototype.hasOwnProperty.call(value, key);
}
function hasValidKeys(value, keys) {
  if (!is.plainObject(value) || !is.array(keys)) {
    return false;
  }

  return Object.keys(value).every(function(d) {
    return keys.indexOf(d) !== -1;
  });
}
/**
 * Convert hex to RGB
 *
 * @param {string} hex
 * @returns {Array}
 */

function hexToRGB(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const properHex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(properHex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [];
}
/**
 * Decide if the step shouldn't skip the beacon
 * @param {Object} step
 *
 * @returns {boolean}
 */

function hideBeacon(step) {
  return step.disableBeacon || step.placement === 'center';
}
/**
 * Compare if two variables are equal
 *
 * @param {*} left
 * @param {*} right
 *
 * @returns {boolean}
 */

function isEqual(left, right) {
  let type;
  const hasReactElement = React.isValidElement(left) || React.isValidElement(right);
  const hasUndefined = is.undefined(left) || is.undefined(right);

  if (getObjectType(left) !== getObjectType(right) || hasReactElement || hasUndefined) {
    return false;
  }

  if (is.domElement(left)) {
    return left.isSameNode(right);
  }

  if (is.number(left)) {
    return left === right;
  }

  if (is.function(left)) {
    return left.toString() === right.toString();
  }

  for (const key in left) {
    /* istanbul ignore else */
    if (hasOwnProperty(left, key)) {
      if (typeof left[key] === 'undefined' || typeof right[key] === 'undefined') {
        return false;
      }

      type = getObjectType(left[key]);

      if (['object', 'array'].indexOf(type) !== -1 && isEqual(left[key], right[key])) {
        continue;
      }

      if (type === 'function' && isEqual(left[key], right[key])) {
        continue;
      }

      if (left[key] !== right[key]) {
        return false;
      }
    }
  }

  for (const p in right) {
    /* istanbul ignore else */
    if (hasOwnProperty(right, p)) {
      if (typeof left[p] === 'undefined') {
        return false;
      }
    }
  }

  return true;
}
/**
 * Detect legacy browsers
 *
 * @returns {boolean}
 */

function isLegacy() {
  return !(['chrome', 'safari', 'firefox', 'opera'].indexOf(getBrowser()) !== -1);
}
/**
 * Log method calls if debug is enabled
 *
 * @private
 * @param {Object}       arg
 * @param {string}       arg.title    - The title the logger was called from
 * @param {Object|Array} [arg.data]   - The data to be logged
 * @param {boolean}      [arg.warn]  - If true, the message will be a warning
 * @param {boolean}      [arg.debug] - Nothing will be logged unless debug is true
 */

function log(_ref) {
  const { title } = _ref;
  const { data } = _ref;
  const _ref$warn = _ref.warn;
  const warn = _ref$warn === void 0 ? false : _ref$warn;
  const _ref$debug = _ref.debug;
  const debug = _ref$debug === void 0 ? false : _ref$debug;

  /* eslint-disable no-console */
  const logFn = warn ? console.warn || console.error : console.log;

  if (debug) {
    if (title && data) {
      console.groupCollapsed(
        '%creact-joyride: '.concat(title),
        'color: #ff0044; font-weight: bold; font-size: 12px;',
      );

      if (Array.isArray(data)) {
        data.forEach(function(d) {
          if (is.plainObject(d) && d.key) {
            logFn.apply(console, [d.key, d.value]);
          } else {
            logFn.apply(console, [d]);
          }
        });
      } else {
        logFn.apply(console, [data]);
      }

      console.groupEnd();
    } else {
      console.error('Missing title or data props');
    }
  }
  /* eslint-enable */
}

const defaultState = {
  action: '',
  controlled: false,
  index: 0,
  lifecycle: LIFECYCLE.INIT,
  size: 0,
  status: STATUS.IDLE,
};
const validKeys = ['action', 'index', 'lifecycle', 'status'];
function createStore(props) {
  const store = new Map();
  const data = new Map();

  const Store = /* #__PURE__*/ (function() {
    function Store() {
      const _this = this;

      const _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      const _ref$continuous = _ref.continuous;
      const continuous = _ref$continuous === void 0 ? false : _ref$continuous;
      const { stepIndex } = _ref;
      const _ref$steps = _ref.steps;
      const _steps = _ref$steps === void 0 ? [] : _ref$steps;

      _classCallCheck(this, Store);

      _defineProperty(this, 'listener', void 0);

      _defineProperty(this, 'setSteps', function(steps) {
        const _this$getState = _this.getState();
        const { size } = _this$getState;
        const { status } = _this$getState;

        const state = {
          size: steps.length,
          status,
        };
        data.set('steps', steps);

        if (status === STATUS.WAITING && !size && steps.length) {
          state.status = STATUS.RUNNING;
        }

        _this.setState(state);
      });

      _defineProperty(this, 'addListener', function(listener) {
        _this.listener = listener;
      });

      _defineProperty(this, 'update', function(state) {
        if (!hasValidKeys(state, validKeys)) {
          throw new Error('State is not valid. Valid keys: '.concat(validKeys.join(', ')));
        }

        _this.setState(
          _objectSpread2(
            {},
            _this.getNextState(
              _objectSpread2({}, _this.getState(), {}, state, {
                action: state.action || ACTIONS.UPDATE,
              }),
              true,
            ),
          ),
        );
      });

      _defineProperty(this, 'start', function(nextIndex) {
        const _this$getState2 = _this.getState();
        const { index } = _this$getState2;
        const { size } = _this$getState2;

        _this.setState(
          _objectSpread2(
            {},
            _this.getNextState(
              {
                action: ACTIONS.START,
                index: is.number(nextIndex) ? nextIndex : index,
              },
              true,
            ),
            {
              status: size ? STATUS.RUNNING : STATUS.WAITING,
            },
          ),
        );
      });

      _defineProperty(this, 'stop', function() {
        const advance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        const _this$getState3 = _this.getState();
        const { index } = _this$getState3;
        const { status } = _this$getState3;

        if ([STATUS.FINISHED, STATUS.SKIPPED].indexOf(status) !== -1) return;

        _this.setState(
          _objectSpread2(
            {},
            _this.getNextState({
              action: ACTIONS.STOP,
              index: index + (advance ? 1 : 0),
            }),
            {
              status: STATUS.PAUSED,
            },
          ),
        );
      });

      _defineProperty(this, 'close', function() {
        const _this$getState4 = _this.getState();
        const { index } = _this$getState4;
        const { status } = _this$getState4;

        if (status !== STATUS.RUNNING) return;

        _this.setState(
          _objectSpread2(
            {},
            _this.getNextState({
              action: ACTIONS.CLOSE,
              index: index + 1,
            }),
          ),
        );
      });

      _defineProperty(this, 'go', function(nextIndex) {
        const _this$getState5 = _this.getState();
        const { controlled } = _this$getState5;
        const { status } = _this$getState5;

        if (controlled || status !== STATUS.RUNNING) return;

        const step = _this.getSteps()[nextIndex];

        _this.setState(
          _objectSpread2(
            {},
            _this.getNextState({
              action: ACTIONS.GO,
              index: nextIndex,
            }),
            {
              status: step ? status : STATUS.FINISHED,
            },
          ),
        );
      });

      _defineProperty(this, 'info', function() {
        return _this.getState();
      });

      _defineProperty(this, 'next', function() {
        const _this$getState6 = _this.getState();
        const { index } = _this$getState6;
        const { status } = _this$getState6;

        if (status !== STATUS.RUNNING) return;

        _this.setState(
          _this.getNextState({
            action: ACTIONS.NEXT,
            index: index + 1,
          }),
        );
      });

      _defineProperty(this, 'open', function() {
        const _this$getState7 = _this.getState();
        const { status } = _this$getState7;

        if (status !== STATUS.RUNNING) return;

        _this.setState(
          _objectSpread2(
            {},
            _this.getNextState({
              action: ACTIONS.UPDATE,
              lifecycle: LIFECYCLE.TOOLTIP,
            }),
          ),
        );
      });

      _defineProperty(this, 'prev', function() {
        const _this$getState8 = _this.getState();
        const { index } = _this$getState8;
        const { status } = _this$getState8;

        if (status !== STATUS.RUNNING) return;

        _this.setState(
          _objectSpread2(
            {},
            _this.getNextState({
              action: ACTIONS.PREV,
              index: index - 1,
            }),
          ),
        );
      });

      _defineProperty(this, 'reset', function() {
        const restart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        const _this$getState9 = _this.getState();
        const { controlled } = _this$getState9;

        if (controlled) return;

        _this.setState(
          _objectSpread2(
            {},
            _this.getNextState({
              action: ACTIONS.RESET,
              index: 0,
            }),
            {
              status: restart ? STATUS.RUNNING : STATUS.READY,
            },
          ),
        );
      });

      _defineProperty(this, 'skip', function() {
        const _this$getState10 = _this.getState();
        const { status } = _this$getState10;

        if (status !== STATUS.RUNNING) return;

        _this.setState({
          action: ACTIONS.SKIP,
          lifecycle: LIFECYCLE.INIT,
          status: STATUS.SKIPPED,
        });
      });

      this.setState(
        {
          action: ACTIONS.INIT,
          controlled: is.number(stepIndex),
          continuous,
          index: is.number(stepIndex) ? stepIndex : 0,
          lifecycle: LIFECYCLE.INIT,
          status: _steps.length ? STATUS.READY : STATUS.IDLE,
        },
        true,
      );
      this.setSteps(_steps);
    }

    _createClass(Store, [
      {
        key: 'setState',
        value: function setState(nextState) {
          const initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          const state = this.getState();

          const _state$nextState = _objectSpread2({}, state, {}, nextState);
          const { action } = _state$nextState;
          const { index } = _state$nextState;
          const { lifecycle } = _state$nextState;
          const { size } = _state$nextState;
          const { status } = _state$nextState;

          store.set('action', action);
          store.set('index', index);
          store.set('lifecycle', lifecycle);
          store.set('size', size);
          store.set('status', status);

          if (initial) {
            store.set('controlled', nextState.controlled);
            store.set('continuous', nextState.continuous);
          }
          /* istanbul ignore else */

          if (this.listener && this.hasUpdatedState(state)) {
            // console.log('▶ ▶ ▶ NEW STATE', this.getState());
            this.listener(this.getState());
          }
        },
      },
      {
        key: 'getState',
        value: function getState() {
          if (!store.size) {
            return _objectSpread2({}, defaultState);
          }

          return {
            action: store.get('action') || '',
            controlled: store.get('controlled') || false,
            index: parseInt(store.get('index'), 10),
            lifecycle: store.get('lifecycle') || '',
            size: store.get('size') || 0,
            status: store.get('status') || '',
          };
        },
      },
      {
        key: 'getNextState',
        value: function getNextState(state) {
          const force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          const _this$getState11 = this.getState();
          const { action } = _this$getState11;
          const { controlled } = _this$getState11;
          const { index } = _this$getState11;
          const { size } = _this$getState11;
          const { status } = _this$getState11;

          const newIndex = is.number(state.index) ? state.index : index;
          const nextIndex = controlled && !force ? index : Math.min(Math.max(newIndex, 0), size);
          return {
            action: state.action || action,
            controlled,
            index: nextIndex,
            lifecycle: state.lifecycle || LIFECYCLE.INIT,
            size: state.size || size,
            status: nextIndex === size ? STATUS.FINISHED : state.status || status,
          };
        },
      },
      {
        key: 'hasUpdatedState',
        value: function hasUpdatedState(oldState) {
          const before = JSON.stringify(oldState);
          const after = JSON.stringify(this.getState());
          return before !== after;
        },
      },
      {
        key: 'getSteps',
        value: function getSteps() {
          const steps = data.get('steps');
          return Array.isArray(steps) ? steps : [];
        },
      },
      {
        key: 'getHelpers',
        value: function getHelpers() {
          return {
            close: this.close,
            go: this.go,
            info: this.info,
            next: this.next,
            open: this.open,
            prev: this.prev,
            reset: this.reset,
            skip: this.skip,
          };
        },
      },
    ]);

    return Store;
  })();

  return new Store(props);
}

function scrollDoc() {
  return document.scrollingElement || document.createElement('body');
}
/**
 * Find the bounding client rect
 *
 * @private
 * @param {HTMLElement} element - The target element
 * @returns {Object}
 */

function getClientRect(element) {
  if (!element) {
    return {};
  }

  return element.getBoundingClientRect();
}
/**
 * Helper function to get the browser-normalized "document height"
 * @returns {Number}
 */

function getDocumentHeight() {
  const _document = document;
  const { body } = _document;
  const html = _document.documentElement;

  if (!body || !html) {
    return 0;
  }

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight,
  );
}
/**
 * Find and return the target DOM element based on a step's 'target'.
 *
 * @private
 * @param {string|HTMLElement} element
 *
 * @returns {HTMLElement|null}
 */

function getElement(element) {
  /* istanbul ignore else */
  if (typeof element === 'string') {
    return document.querySelector(element);
  }

  return element;
}
/**
 *  Get computed style property
 *
 * @param {HTMLElement} el
 *
 * @returns {Object}
 */

function getStyleComputedProperty(el) {
  if (!el || el.nodeType !== 1) {
    return {};
  }

  return getComputedStyle(el);
}
/**
 * Get scroll parent with fix
 *
 * @param {HTMLElement} element
 * @param {boolean} skipFix
 * @param {boolean} [forListener]
 *
 * @returns {*}
 */

function getScrollParent(element, skipFix, forListener) {
  const parent = scrollParent(element);

  if (parent.isSameNode(scrollDoc())) {
    if (forListener) {
      return document;
    }

    return scrollDoc();
  }

  const hasScrolling = parent.scrollHeight > parent.offsetHeight;
  /* istanbul ignore else */

  if (!hasScrolling && !skipFix) {
    parent.style.overflow = 'initial';
    return scrollDoc();
  }

  return parent;
}
/**
 * Check if the element has custom scroll parent
 *
 * @param {HTMLElement} element
 * @param {boolean} skipFix
 *
 * @returns {boolean}
 */

function hasCustomScrollParent(element, skipFix) {
  if (!element) return false;
  const parent = getScrollParent(element, skipFix);
  return !parent.isSameNode(scrollDoc());
}
/**
 * Check if the element has custom offset parent
 *
 * @param {HTMLElement} element
 *
 * @returns {boolean}
 */

function hasCustomOffsetParent(element) {
  return element.offsetParent !== document.body;
}
/**
 * Check if an element has fixed/sticky position
 * @param {HTMLElement|Node} el
 * @param {string} [type]
 *
 * @returns {boolean}
 */

function hasPosition(el) {
  const type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fixed';

  if (!el || !(el instanceof HTMLElement)) {
    return false;
  }

  const { nodeName } = el;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(el).position === type) {
    return true;
  }

  return hasPosition(el.parentNode, type);
}
/**
 * Check if the element is visible
 *
 * @param {HTMLElement} element
 *
 * @returns {boolean}
 */

function isElementVisible(element) {
  if (!element) return false;
  let parentElement = element;

  while (parentElement) {
    if (parentElement === document.body) break;
    /* istanbul ignore else */

    if (parentElement instanceof HTMLElement) {
      const _getComputedStyle = getComputedStyle(parentElement);
      const { display } = _getComputedStyle;
      const { visibility } = _getComputedStyle;

      if (display === 'none' || visibility === 'hidden') {
        return false;
      }
    }

    parentElement = parentElement.parentNode;
  }

  return true;
}
/**
 * Find and return the target DOM element based on a step's 'target'.
 *
 * @private
 * @param {string|HTMLElement} element
 * @param {number} offset
 * @param {boolean} skipFix
 *
 * @returns {HTMLElement|undefined}
 */

function getElementPosition(element, offset, skipFix) {
  const elementRect = getClientRect(element);
  const parent = getScrollParent(element, skipFix);
  const hasScrollParent = hasCustomScrollParent(element, skipFix);
  let parentTop = 0;
  /* istanbul ignore else */

  if (parent instanceof HTMLElement) {
    parentTop = parent.scrollTop;
  }

  const top = elementRect.top + (!hasScrollParent && !hasPosition(element) ? parentTop : 0);
  return Math.floor(top - offset);
}
/**
 * Get the scrollTop position
 *
 * @param {HTMLElement} element
 * @param {number} offset
 * @param {boolean} skipFix
 *
 * @returns {number}
 */

function getScrollTo(element, offset, skipFix) {
  if (!element) {
    return 0;
  }

  const parent = scrollParent(element);
  let top = element.offsetTop;

  if (hasCustomScrollParent(element, skipFix) && !hasCustomOffsetParent(element)) {
    top -= parent.offsetTop;
  }

  return Math.floor(top - offset);
}
/**
 * Scroll to position
 * @param {number} value
 * @param {HTMLElement} element
 * @param {number} scrollDuration
 * @returns {Promise<*>}
 */

function scrollTo(value) {
  const element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scrollDoc();
  const scrollDuration = arguments.length > 2 ? arguments[2] : undefined;
  return new Promise(function(resolve, reject) {
    const { scrollTop } = element;
    const limit = value > scrollTop ? value - scrollTop : scrollTop - value;
    scroll.top(
      element,
      value,
      {
        duration: limit < 100 ? 50 : scrollDuration,
      },
      function(error) {
        if (error && error.message !== 'Element already at target scroll position') {
          return reject(error);
        }

        return resolve();
      },
    );
  });
}

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    const componentNameSafe = componentName || '<<anonymous>>';
    const propFullNameSafe = propFullName || propName;
    /* istanbul ignore else */

    if (props[propName] == null) {
      if (isRequired) {
        return new Error(
          'Required '
            .concat(location, ' `')
            .concat(propFullNameSafe, '` was not specified in `')
            .concat(componentNameSafe, '`.'),
        );
      }

      return null;
    }

    for (
      var _len = arguments.length, args = new Array(_len > 6 ? _len - 6 : 0), _key = 6;
      _key < _len;
      _key++
    ) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(
      void 0,
      [props, propName, componentNameSafe, location, propFullNameSafe].concat(args),
    );
  }

  const chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
}

const componentTypeWithRefs = createChainableTypeChecker(function(
  props,
  propName,
  componentName,
  location,
  propFullName,
) {
  const propValue = props[propName];
  let Component = propValue;

  if (!React__default.isValidElement(propValue) && reactIs.isValidElementType(propValue)) {
    const ownProps = {
      ref: function ref() {},
      step: {},
    };
    Component = /* #__PURE__*/ React__default.createElement(Component, ownProps);
  }

  if (
    is.string(propValue) ||
    is.number(propValue) ||
    !reactIs.isValidElementType(propValue) ||
    !([reactIs.Element, reactIs.ForwardRef].indexOf(reactIs.typeOf(Component)) !== -1)
  ) {
    return new Error(
      'Invalid '
        .concat(location, ' `')
        .concat(propFullName, '` supplied to `')
        .concat(componentName, '`. Expected a React class or forwardRef.'),
    );
  }

  return undefined;
});

const defaultOptions = {
  arrowColor: '#fff',
  backgroundColor: '#fff',
  beaconSize: 36,
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  primaryColor: '#f04',
  spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
  textColor: '#333',
  zIndex: 100,
};
const buttonBase = {
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: 0,
  color: '#555',
  cursor: 'pointer',
  fontSize: 16,
  lineHeight: 1,
  padding: 8,
  WebkitAppearance: 'none',
};
const spotlight = {
  borderRadius: 4,
  position: 'absolute',
};
function getStyles() {
  const stepStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const options = deepmerge(defaultOptions, stepStyles.options || {});
  let width = 290;

  if (window.innerWidth > 480) {
    width = 380;
  }

  if (options.width) {
    if (window.innerWidth < options.width) {
      width = window.innerWidth - 30;
    } else {
      width = options.width; //eslint-disable-line prefer-destructuring
    }
  }

  const overlay = {
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: options.zIndex,
  };
  const defaultStyles = {
    beacon: _objectSpread2({}, buttonBase, {
      display: 'inline-block',
      height: options.beaconSize,
      position: 'relative',
      width: options.beaconSize,
      zIndex: options.zIndex,
    }),
    beaconInner: {
      animation: 'joyride-beacon-inner 1.2s infinite ease-in-out',
      backgroundColor: options.primaryColor,
      borderRadius: '50%',
      display: 'block',
      height: '50%',
      left: '50%',
      opacity: 0.7,
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
    },
    beaconOuter: {
      animation: 'joyride-beacon-outer 1.2s infinite ease-in-out',
      backgroundColor: 'rgba('.concat(hexToRGB(options.primaryColor).join(','), ', 0.2)'),
      border: '2px solid '.concat(options.primaryColor),
      borderRadius: '50%',
      boxSizing: 'border-box',
      display: 'block',
      height: '100%',
      left: 0,
      opacity: 0.9,
      position: 'absolute',
      top: 0,
      transformOrigin: 'center',
      width: '100%',
    },
    tooltip: {
      backgroundColor: options.backgroundColor,
      borderRadius: 5,
      boxSizing: 'border-box',
      color: options.textColor,
      fontSize: 16,
      maxWidth: '100%',
      padding: 15,
      position: 'relative',
      width,
    },
    tooltipContainer: {
      lineHeight: 1.4,
      textAlign: 'center',
    },
    tooltipTitle: {
      fontSize: 18,
      margin: 0,
    },
    tooltipContent: {
      padding: '20px 10px',
    },
    tooltipFooter: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 15,
    },
    tooltipFooterSpacer: {
      flex: 1,
    },
    buttonNext: _objectSpread2({}, buttonBase, {
      backgroundColor: options.primaryColor,
      borderRadius: 4,
      color: '#fff',
    }),
    buttonBack: _objectSpread2({}, buttonBase, {
      color: options.primaryColor,
      marginLeft: 'auto',
      marginRight: 5,
    }),
    buttonClose: _objectSpread2({}, buttonBase, {
      color: options.textColor,
      height: 14,
      padding: 15,
      position: 'absolute',
      right: 0,
      top: 0,
      width: 14,
    }),
    buttonSkip: _objectSpread2({}, buttonBase, {
      color: options.textColor,
      fontSize: 14,
    }),
    overlay: _objectSpread2({}, overlay, {
      backgroundColor: options.overlayColor,
      mixBlendMode: 'hard-light',
    }),
    overlayLegacy: _objectSpread2({}, overlay),
    overlayLegacyCenter: _objectSpread2({}, overlay, {
      backgroundColor: options.overlayColor,
    }),
    spotlight: _objectSpread2({}, spotlight, {
      backgroundColor: 'gray',
    }),
    spotlightLegacy: _objectSpread2({}, spotlight, {
      boxShadow: '0 0 0 9999px '.concat(options.overlayColor, ', ').concat(options.spotlightShadow),
    }),
    floaterStyles: {
      arrow: {
        color: options.arrowColor,
      },
      options: {
        zIndex: options.zIndex,
      },
    },
    options,
  };
  return deepmerge(defaultStyles, stepStyles);
}

const DEFAULTS = {
  floaterProps: {
    options: {
      preventOverflow: {
        boundariesElement: 'scrollParent',
      },
    },
    wrapperOptions: {
      offset: -18,
      position: true,
    },
  },
  locale: {
    back: 'Back',
    close: 'Close',
    last: 'Last',
    next: 'Next',
    open: 'Open the dialog',
    skip: 'Skip',
  },
  step: {
    event: 'click',
    placement: 'bottom',
    offset: 10,
  },
};

function getTourProps(props) {
  const sharedTourProps = [
    'beaconComponent',
    'disableCloseOnEsc',
    'disableOverlay',
    'disableOverlayClose',
    'disableScrolling',
    'disableScrollParentFix',
    'floaterProps',
    'hideBackButton',
    'locale',
    'showProgress',
    'showSkipButton',
    'spotlightClicks',
    'spotlightPadding',
    'styles',
    'tooltipComponent',
  ];
  return Object.keys(props)
    .filter(function(d) {
      return sharedTourProps.indexOf(d) !== -1;
    })
    .reduce(function(acc, i) {
      acc[i] = props[i]; //eslint-disable-line react/destructuring-assignment

      return acc;
    }, {});
}

function getMergedStep(step, props) {
  if (!step) return null;
  const mergedStep = deepmerge.all([getTourProps(props), DEFAULTS.step, step], {
    isMergeableObject: is.plainObject,
  });
  const mergedStyles = getStyles(deepmerge(props.styles || {}, step.styles || {}));
  const scrollParent = hasCustomScrollParent(
    getElement(step.target),
    mergedStep.disableScrollParentFix,
  );
  const floaterProps = deepmerge.all([
    props.floaterProps || {},
    DEFAULTS.floaterProps,
    mergedStep.floaterProps || {},
  ]); // Set react-floater props

  floaterProps.offset = mergedStep.offset;
  floaterProps.styles = deepmerge(floaterProps.styles || {}, mergedStyles.floaterStyles || {});
  delete mergedStyles.floaterStyles;
  floaterProps.offset += props.spotlightPadding || step.spotlightPadding;

  if (step.placementBeacon) {
    floaterProps.wrapperOptions.placement = step.placementBeacon;
  }

  if (scrollParent) {
    floaterProps.options.preventOverflow.boundariesElement = 'window';
  }

  return _objectSpread2({}, mergedStep, {
    locale: deepmerge.all([DEFAULTS.locale, props.locale || {}, mergedStep.locale || {}]),
    floaterProps,
    styles: mergedStyles,
  });
}
/**
 * Validate if a step is valid
 *
 * @param {Object} step - A step object
 * @param {boolean} debug
 *
 * @returns {boolean} - True if the step is valid, false otherwise
 */

function validateStep(step) {
  const debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!is.plainObject(step)) {
    log({
      title: 'validateStep',
      data: 'step must be an object',
      warn: true,
      debug,
    });
    return false;
  }

  if (!step.target) {
    log({
      title: 'validateStep',
      data: 'target is missing from the step',
      warn: true,
      debug,
    });
    return false;
  }

  return true;
}
/**
 * Validate if steps is valid
 *
 * @param {Array} steps - A steps array
 * @param {boolean} debug
 *
 * @returns {boolean} - True if the steps are valid, false otherwise
 */

function validateSteps(steps) {
  const debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!is.array(steps)) {
    log({
      title: 'validateSteps',
      data: 'steps must be an array',
      warn: true,
      debug,
    });
    return false;
  }

  return steps.every(function(d) {
    return validateStep(d, debug);
  });
}

const Scope = function Scope(_element) {
  const _this = this;

  const options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Scope);

  _defineProperty(this, 'element', void 0);

  _defineProperty(this, 'options', void 0);

  _defineProperty(this, 'canBeTabbed', function(element) {
    let { tabIndex } = element;
    if (tabIndex === null || tabIndex < 0) tabIndex = undefined;
    const isTabIndexNaN = isNaN(tabIndex);
    return !isTabIndexNaN && _this.canHaveFocus(element, true);
  });

  _defineProperty(this, 'canHaveFocus', function(element, isTabIndexNotNaN) {
    const validTabNodes = /input|select|textarea|button|object/;
    const nodeName = element.nodeName.toLowerCase();
    const res =
      (validTabNodes.test(nodeName) && !element.getAttribute('disabled')) ||
      (nodeName === 'a' ? element.getAttribute('href') || isTabIndexNotNaN : isTabIndexNotNaN);
    return res && _this.isVisible(element);
  });

  _defineProperty(this, 'findValidTabElements', function() {
    return [].slice.call(_this.element.querySelectorAll('*'), 0).filter(_this.canBeTabbed);
  });

  _defineProperty(this, 'handleKeyDown', function(e) {
    const _this$options$keyCode = _this.options.keyCode;
    const keyCode = _this$options$keyCode === void 0 ? 9 : _this$options$keyCode;
    /* istanbul ignore else */

    if (e.keyCode === keyCode) {
      _this.interceptTab(e);
    }
  });

  _defineProperty(this, 'interceptTab', function(event) {
    event.preventDefault();

    const elements = _this.findValidTabElements();

    const { shiftKey } = event;

    if (!elements.length) {
      return;
    }

    let x = elements.indexOf(document.activeElement);

    if (x === -1 || (!shiftKey && x + 1 === elements.length)) {
      x = 0;
    } else if (shiftKey && x === 0) {
      x = elements.length - 1;
    } else {
      x += shiftKey ? -1 : 1;
    }

    elements[x].focus();
  });

  _defineProperty(this, 'isHidden', function(element) {
    const noSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;
    const style = window.getComputedStyle(element);
    if (noSize && !element.innerHTML) return true;
    return (
      (noSize && style.getPropertyValue('overflow') !== 'visible') ||
      style.getPropertyValue('display') === 'none'
    );
  });

  _defineProperty(this, 'isVisible', function(element) {
    let parentElement = element;

    while (parentElement) {
      /* istanbul ignore else */
      if (parentElement instanceof HTMLElement) {
        if (parentElement === document.body) break;
        /* istanbul ignore else */

        if (_this.isHidden(parentElement)) return false;
        parentElement = parentElement.parentNode;
      }
    }

    return true;
  });

  _defineProperty(this, 'removeScope', function() {
    window.removeEventListener('keydown', _this.handleKeyDown);
  });

  _defineProperty(this, 'checkFocus', function(target) {
    if (document.activeElement !== target) {
      target.focus();
      window.requestAnimationFrame(function() {
        return _this.checkFocus(target);
      });
    }
  });

  _defineProperty(this, 'setFocus', function() {
    const { selector } = _this.options;
    if (!selector) return;

    const target = _this.element.querySelector(selector);
    /* istanbul ignore else */

    if (target) {
      window.requestAnimationFrame(function() {
        return _this.checkFocus(target);
      });
    }
  });

  if (!(_element instanceof HTMLElement)) {
    throw new TypeError('Invalid parameter: element must be an HTMLElement');
  }

  this.element = _element;
  this.options = options;
  window.addEventListener('keydown', this.handleKeyDown, false);
  this.setFocus();
};

const JoyrideBeacon = /* #__PURE__*/ (function(_React$Component) {
  _inherits(JoyrideBeacon, _React$Component);

  const _super = _createSuper(JoyrideBeacon);

  function JoyrideBeacon(props) {
    let _this;

    _classCallCheck(this, JoyrideBeacon);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), 'setBeaconRef', function(c) {
      _this.beacon = c;
    });

    if (!props.beaconComponent) {
      const head = document.head || document.getElementsByTagName('head')[0];
      const style = document.createElement('style');
      const css =
        '\n        @keyframes joyride-beacon-inner {\n          20% {\n            opacity: 0.9;\n          }\n        \n          90% {\n            opacity: 0.7;\n          }\n        }\n        \n        @keyframes joyride-beacon-outer {\n          0% {\n            transform: scale(1);\n          }\n        \n          45% {\n            opacity: 0.7;\n            transform: scale(0.75);\n          }\n        \n          100% {\n            opacity: 0.9;\n            transform: scale(1);\n          }\n        }\n      ';
      style.type = 'text/css';
      style.id = 'joyride-beacon-animation';
      style.appendChild(document.createTextNode(css));
      head.appendChild(style);
    }

    return _this;
  }

  _createClass(JoyrideBeacon, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        const _this2 = this;

        const { shouldFocus } = this.props;

        setTimeout(function() {
          if (is.domElement(_this2.beacon) && shouldFocus) {
            _this2.beacon.focus();
          }
        }, 0);
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        const style = document.getElementById('joyride-beacon-animation');

        if (style) {
          style.parentNode.removeChild(style);
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        const _this$props = this.props;
        const { beaconComponent } = _this$props;
        const { locale } = _this$props;
        const { onClickOrHover } = _this$props;
        const { styles } = _this$props;
        const props = {
          'aria-label': locale.open,
          onClick: onClickOrHover,
          onMouseEnter: onClickOrHover,
          ref: this.setBeaconRef,
          title: locale.open,
        };
        let component;

        if (beaconComponent) {
          const BeaconComponent = beaconComponent;
          component = /* #__PURE__*/ React__default.createElement(BeaconComponent, props);
        } else {
          component = /* #__PURE__*/ React__default.createElement(
            'button',
            {
              key: 'JoyrideBeacon',
              className: 'react-joyride__beacon',
              style: styles.beacon,
              type: 'button',
              ...props,
            },
            /* #__PURE__*/ React__default.createElement('span', {
              style: styles.beaconInner,
            }),
            /* #__PURE__*/ React__default.createElement('span', {
              style: styles.beaconOuter,
            }),
          );
        }

        return component;
      },
    },
  ]);

  return JoyrideBeacon;
})(React__default.Component);

const JoyrideSpotlight = function JoyrideSpotlight(_ref) {
  const { styles } = _ref;
  return /* #__PURE__*/ React__default.createElement('div', {
    key: 'JoyrideSpotlight',
    className: 'react-joyride__spotlight',
    style: styles,
  });
};

const JoyrideOverlay = /* #__PURE__*/ (function(_React$Component) {
  _inherits(JoyrideOverlay, _React$Component);

  const _super = _createSuper(JoyrideOverlay);

  function JoyrideOverlay() {
    let _this;

    _classCallCheck(this, JoyrideOverlay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), '_isMounted', false);

    _defineProperty(_assertThisInitialized(_this), 'state', {
      mouseOverSpotlight: false,
      isScrolling: false,
      showSpotlight: true,
    });

    _defineProperty(_assertThisInitialized(_this), 'handleMouseMove', function(e) {
      const { mouseOverSpotlight } = _this.state;
      const _this$spotlightStyles = _this.spotlightStyles;
      const { height } = _this$spotlightStyles;
      const { left } = _this$spotlightStyles;
      const { position } = _this$spotlightStyles;
      const { top } = _this$spotlightStyles;
      const { width } = _this$spotlightStyles;
      const offsetY = position === 'fixed' ? e.clientY : e.pageY;
      const offsetX = position === 'fixed' ? e.clientX : e.pageX;
      const inSpotlightHeight = offsetY >= top && offsetY <= top + height;
      const inSpotlightWidth = offsetX >= left && offsetX <= left + width;
      const inSpotlight = inSpotlightWidth && inSpotlightHeight;

      if (inSpotlight !== mouseOverSpotlight) {
        _this.updateState({
          mouseOverSpotlight: inSpotlight,
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), 'handleScroll', function() {
      const { target } = _this.props;
      const element = getElement(target);

      if (_this.scrollParent !== document) {
        const { isScrolling } = _this.state;

        if (!isScrolling) {
          _this.updateState({
            isScrolling: true,
            showSpotlight: false,
          });
        }

        clearTimeout(_this.scrollTimeout);
        _this.scrollTimeout = setTimeout(function() {
          _this.updateState({
            isScrolling: false,
            showSpotlight: true,
          });
        }, 50);
      } else if (hasPosition(element, 'sticky')) {
        _this.updateState({});
      }
    });

    _defineProperty(_assertThisInitialized(_this), 'handleResize', function() {
      clearTimeout(_this.resizeTimeout);
      _this.resizeTimeout = setTimeout(function() {
        if (!_this._isMounted) {
          return;
        }

        _this.forceUpdate();
      }, 100);
    });

    return _this;
  }

  _createClass(JoyrideOverlay, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        const _this$props = this.props;
        const { debug } = _this$props;
        const { disableScrolling } = _this$props;
        const { disableScrollParentFix } = _this$props;
        const { target } = _this$props;
        const element = getElement(target);
        this.scrollParent = getScrollParent(element, disableScrollParentFix, true);
        this._isMounted = true;

        window.addEventListener('resize', this.handleResize);
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        const _this2 = this;

        const _this$props2 = this.props;
        const { lifecycle } = _this$props2;
        const { spotlightClicks } = _this$props2;

        const _treeChanges = treeChanges(prevProps, this.props);
        const { changed } = _treeChanges;
        const { changedTo } = _treeChanges;
        /* istanbul ignore else */

        if (changedTo('lifecycle', LIFECYCLE.TOOLTIP)) {
          this.scrollParent.addEventListener('scroll', this.handleScroll, {
            passive: true,
          });
          setTimeout(function() {
            const { isScrolling } = _this2.state;

            if (!isScrolling) {
              _this2.updateState({
                showSpotlight: true,
              });
            }
          }, 100);
        }

        if (changed('spotlightClicks') || changed('disableOverlay') || changed('lifecycle')) {
          if (spotlightClicks && lifecycle === LIFECYCLE.TOOLTIP) {
            window.addEventListener('mousemove', this.handleMouseMove, false);
          } else if (lifecycle !== LIFECYCLE.TOOLTIP) {
            window.removeEventListener('mousemove', this.handleMouseMove);
          }
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('resize', this.handleResize);
        clearTimeout(this.resizeTimeout);
        clearTimeout(this.scrollTimeout);
        this.scrollParent.removeEventListener('scroll', this.handleScroll);
      },
    },
    {
      key: 'updateState',
      value: function updateState(state) {
        if (!this._isMounted) {
          return;
        }

        this.setState(state);
      },
    },
    {
      key: 'render',
      value: function render() {
        const _this$state = this.state;
        const { mouseOverSpotlight } = _this$state;
        const { showSpotlight } = _this$state;
        const _this$props3 = this.props;
        const { disableOverlay } = _this$props3;
        const { disableOverlayClose } = _this$props3;
        const { lifecycle } = _this$props3;
        const { onClickOverlay } = _this$props3;
        const { placement } = _this$props3;
        const { styles } = _this$props3;

        if (disableOverlay || lifecycle !== LIFECYCLE.TOOLTIP) {
          return null;
        }

        let baseStyles = styles.overlay;
        /* istanbul ignore else */

        if (isLegacy()) {
          baseStyles = placement === 'center' ? styles.overlayLegacyCenter : styles.overlayLegacy;
        }

        const stylesOverlay = _objectSpread2(
          {
            cursor: disableOverlayClose ? 'default' : 'pointer',
            height: getDocumentHeight(),
            pointerEvents: mouseOverSpotlight ? 'none' : 'auto',
          },
          baseStyles,
        );

        let spotlight =
          placement !== 'center' &&
          showSpotlight &&
          /* #__PURE__*/ React__default.createElement(JoyrideSpotlight, {
            styles: this.spotlightStyles,
          }); // Hack for Safari bug with mix-blend-mode with z-index

        if (getBrowser() === 'safari') {
          const { mixBlendMode } = stylesOverlay;
          const { zIndex } = stylesOverlay;
          const safarOverlay = _objectWithoutProperties(stylesOverlay, ['mixBlendMode', 'zIndex']);

          spotlight = /* #__PURE__*/ React__default.createElement(
            'div',
            {
              style: _objectSpread2({}, safarOverlay),
            },
            spotlight,
          );
          delete stylesOverlay.backgroundColor;
        }

        return /* #__PURE__*/ React__default.createElement(
          'div',
          {
            className: 'react-joyride__overlay',
            style: stylesOverlay,
            onClick: onClickOverlay,
          },
          spotlight,
        );
      },
    },
    {
      key: 'spotlightStyles',
      get: function get() {
        const { showSpotlight } = this.state;
        const _this$props4 = this.props;
        const { disableScrollParentFix } = _this$props4;
        const { spotlightClicks } = _this$props4;
        const { spotlightPadding } = _this$props4;
        const { styles } = _this$props4;
        const { target } = _this$props4;
        const element = getElement(target);
        const elementRect = getClientRect(element);
        const isFixedTarget = hasPosition(element);
        const top = getElementPosition(element, spotlightPadding, disableScrollParentFix);
        return _objectSpread2({}, isLegacy() ? styles.spotlightLegacy : styles.spotlight, {
          height: Math.round(elementRect.height + spotlightPadding * 2),
          left: Math.round(elementRect.left - spotlightPadding),
          opacity: showSpotlight ? 1 : 0,
          pointerEvents: spotlightClicks ? 'none' : 'auto',
          position: isFixedTarget ? 'fixed' : 'absolute',
          top,
          transition: 'opacity 0.2s',
          width: Math.round(elementRect.width + spotlightPadding * 2),
        });
      },
    },
  ]);

  return JoyrideOverlay;
})(React__default.Component);

const JoyrideTooltipCloseBtn = function JoyrideTooltipCloseBtn(_ref) {
  const { styles } = _ref;
  const props = _objectWithoutProperties(_ref, ['styles']);

  const { color } = styles;
  const { height } = styles;
  const { width } = styles;
  const style = _objectWithoutProperties(styles, ['color', 'height', 'width']);

  return /* #__PURE__*/ React__default.createElement(
    'button',
    {
      style,
      type: 'button',
      ...props,
    },
    /* #__PURE__*/ React__default.createElement(
      'svg',
      {
        width: typeof width === 'number' ? ''.concat(width, 'px') : width,
        height: typeof height === 'number' ? ''.concat(height, 'px') : height,
        viewBox: '0 0 18 18',
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg',
        preserveAspectRatio: 'xMidYMid',
      },
      /* #__PURE__*/ React__default.createElement(
        'g',
        null,
        /* #__PURE__*/ React__default.createElement('path', {
          d:
            'M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z',
          fill: color,
        }),
      ),
    ),
  );
};

const JoyrideTooltipContainer = /* #__PURE__*/ (function(_React$Component) {
  _inherits(JoyrideTooltipContainer, _React$Component);

  const _super = _createSuper(JoyrideTooltipContainer);

  function JoyrideTooltipContainer() {
    _classCallCheck(this, JoyrideTooltipContainer);

    return _super.apply(this, arguments);
  }

  _createClass(JoyrideTooltipContainer, [
    {
      key: 'render',
      value: function render() {
        const _this$props = this.props;
        const { backProps } = _this$props;
        const { closeProps } = _this$props;
        const { continuous } = _this$props;
        const { index } = _this$props;
        const { isLastStep } = _this$props;
        const { primaryProps } = _this$props;
        const { size } = _this$props;
        const { skipProps } = _this$props;
        const { step } = _this$props;
        const { tooltipProps } = _this$props;
        const { content } = step;
        const { hideBackButton } = step;
        const { hideCloseButton } = step;
        const { hideFooter } = step;
        const { showProgress } = step;
        const { showSkipButton } = step;
        const { title } = step;
        const { styles } = step;
        const _step$locale = step.locale;
        const { back } = _step$locale;
        const { close } = _step$locale;
        const { last } = _step$locale;
        const { next } = _step$locale;
        const { skip } = _step$locale;
        const output = {
          primary: close,
        };

        if (continuous) {
          output.primary = isLastStep ? last : next;

          if (showProgress) {
            output.primary = /* #__PURE__*/ React__default.createElement(
              'span',
              null,
              output.primary,
              ' (',
              index + 1,
              '/',
              size,
              ')',
            );
          }
        }

        if (showSkipButton && !isLastStep) {
          output.skip = /* #__PURE__*/ React__default.createElement(
            'button',
            {
              style: styles.buttonSkip,
              type: 'button',
              'aria-live': 'off',
              ...skipProps,
            },
            skip,
          );
        }

        if (!hideBackButton && index > 0) {
          output.back = /* #__PURE__*/ React__default.createElement(
            'button',
            {
              style: styles.buttonBack,
              type: 'button',
              ...backProps,
            },
            back,
          );
        }

        output.close =
          !hideCloseButton &&
          /* #__PURE__*/ React__default.createElement(JoyrideTooltipCloseBtn, {
            styles: styles.buttonClose,
            ...closeProps,
          });
        return /* #__PURE__*/ React__default.createElement(
          'div',
          {
            key: 'JoyrideTooltip',
            className: 'react-joyride__tooltip',
            style: styles.tooltip,
            ...tooltipProps,
          },
          /* #__PURE__*/ React__default.createElement(
            'div',
            {
              style: styles.tooltipContainer,
            },
            title &&
              /* #__PURE__*/ React__default.createElement(
                'h4',
                {
                  style: styles.tooltipTitle,
                  'aria-label': title,
                },
                title,
              ),
            /* #__PURE__*/ React__default.createElement(
              'div',
              {
                style: styles.tooltipContent,
              },
              content,
            ),
          ),
          !hideFooter &&
            /* #__PURE__*/ React__default.createElement(
              'div',
              {
                style: styles.tooltipFooter,
              },
              /* #__PURE__*/ React__default.createElement(
                'div',
                {
                  style: styles.tooltipFooterSpacer,
                },
                output.skip,
              ),
              output.back,
              /* #__PURE__*/ React__default.createElement(
                'button',
                {
                  style: styles.buttonNext,
                  type: 'button',
                  ...primaryProps,
                },
                output.primary,
              ),
            ),
          output.close,
        );
      },
    },
  ]);

  return JoyrideTooltipContainer;
})(React__default.Component);

const JoyrideTooltip = /* #__PURE__*/ (function(_React$Component) {
  _inherits(JoyrideTooltip, _React$Component);

  const _super = _createSuper(JoyrideTooltip);

  function JoyrideTooltip() {
    let _this;

    _classCallCheck(this, JoyrideTooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), 'handleClickBack', function(e) {
      e.preventDefault();
      const { helpers } = _this.props;
      helpers.prev();
    });

    _defineProperty(_assertThisInitialized(_this), 'handleClickClose', function(e) {
      e.preventDefault();
      const { helpers } = _this.props;
      helpers.close();
    });

    _defineProperty(_assertThisInitialized(_this), 'handleClickPrimary', function(e) {
      e.preventDefault();
      const _this$props = _this.props;
      const { continuous } = _this$props;
      const { helpers } = _this$props;

      if (!continuous) {
        helpers.close();
        return;
      }

      helpers.next();
    });

    _defineProperty(_assertThisInitialized(_this), 'handleClickSkip', function(e) {
      e.preventDefault();
      const { helpers } = _this.props;
      helpers.skip();
    });

    _defineProperty(_assertThisInitialized(_this), 'getElementsProps', function() {
      const _this$props2 = _this.props;
      const { continuous } = _this$props2;
      const { isLastStep } = _this$props2;
      const { setTooltipRef } = _this$props2;
      const { step } = _this$props2;
      const back = getText(step.locale.back);
      const close = getText(step.locale.close);
      const last = getText(step.locale.last);
      const next = getText(step.locale.next);
      const skip = getText(step.locale.skip);
      let primaryText = continuous ? next : close;

      if (isLastStep) {
        primaryText = last;
      }

      return {
        backProps: {
          'aria-label': back,
          'data-action': 'back',
          onClick: _this.handleClickBack,
          role: 'button',
          title: back,
        },
        closeProps: {
          'aria-label': close,
          'data-action': 'close',
          onClick: _this.handleClickClose,
          role: 'button',
          title: close,
        },
        primaryProps: {
          'aria-label': primaryText,
          'data-action': 'primary',
          onClick: _this.handleClickPrimary,
          role: 'button',
          title: primaryText,
        },
        skipProps: {
          'aria-label': skip,
          'data-action': 'skip',
          onClick: _this.handleClickSkip,
          role: 'button',
          title: skip,
        },
        tooltipProps: {
          'aria-modal': true,
          ref: setTooltipRef,
          role: 'alertdialog',
        },
      };
    });

    return _this;
  }

  _createClass(JoyrideTooltip, [
    {
      key: 'render',
      value: function render() {
        const _this$props3 = this.props;
        const { continuous } = _this$props3;
        const { index } = _this$props3;
        const { isLastStep } = _this$props3;
        const { size } = _this$props3;
        const { step } = _this$props3;

        const { beaconComponent } = step;
        const { tooltipComponent } = step;
        const cleanStep = _objectWithoutProperties(step, ['beaconComponent', 'tooltipComponent']);

        let component;

        if (tooltipComponent) {
          const renderProps = _objectSpread2({}, this.getElementsProps(), {
            continuous,
            index,
            isLastStep,
            size,
            step: cleanStep,
          });

          const TooltipComponent = tooltipComponent;
          component = /* #__PURE__*/ React__default.createElement(TooltipComponent, renderProps);
        } else {
          component = /* #__PURE__*/ React__default.createElement(JoyrideTooltipContainer, {
            ...this.getElementsProps(),
            continuous,
            index,
            isLastStep,
            size,
            step,
          });
        }

        return component;
      },
    },
  ]);

  return JoyrideTooltip;
})(React__default.Component);

const JoyridePortal = /* #__PURE__*/ (function(_React$Component) {
  _inherits(JoyridePortal, _React$Component);

  const _super = _createSuper(JoyridePortal);

  function JoyridePortal(props) {
    let _this;

    _classCallCheck(this, JoyridePortal);

    _this = _super.call(this, props);
    if (!canUseDOM) return _possibleConstructorReturn(_this);
    _this.node = document.createElement('div');
    /* istanbul ignore else */

    if (props.id) {
      _this.node.id = props.id;
    }

    document.body.appendChild(_this.node);
    return _this;
  }

  _createClass(JoyridePortal, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (!canUseDOM) return;

        if (!isReact16) {
          this.renderReact15();
        }
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if (!canUseDOM) return;

        if (!isReact16) {
          this.renderReact15();
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (!canUseDOM || !this.node) return;

        if (!isReact16) {
          ReactDOM__default.unmountComponentAtNode(this.node);
        }

        document.body.removeChild(this.node);
      },
    },
    {
      key: 'renderReact15',
      value: function renderReact15() {
        if (!canUseDOM) return null;
        const { children } = this.props;
        ReactDOM__default.unstable_renderSubtreeIntoContainer(this, children, this.node);
        return null;
      },
    },
    {
      key: 'renderReact16',
      value: function renderReact16() {
        if (!canUseDOM || !isReact16) return null;
        const { children } = this.props;
        return ReactDOM__default.createPortal(children, this.node);
      },
    },
    {
      key: 'render',
      value: function render() {
        if (!isReact16) {
          return null;
        }

        return this.renderReact16();
      },
    },
  ]);

  return JoyridePortal;
})(React__default.Component);

const JoyrideStep = /* #__PURE__*/ (function(_React$Component) {
  _inherits(JoyrideStep, _React$Component);

  const _super = _createSuper(JoyrideStep);

  function JoyrideStep() {
    let _this;

    _classCallCheck(this, JoyrideStep);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), 'scope', {
      removeScope: function removeScope() {},
    });

    _defineProperty(_assertThisInitialized(_this), 'handleClickHoverBeacon', function(e) {
      const _this$props = _this.props;
      const { step } = _this$props;
      const { update } = _this$props;

      if (e.type === 'mouseenter' && step.event !== 'hover') {
        return;
      }

      update({
        lifecycle: LIFECYCLE.TOOLTIP,
      });
    });

    _defineProperty(_assertThisInitialized(_this), 'handleClickOverlay', function() {
      const _this$props2 = _this.props;
      const { helpers } = _this$props2;
      const { step } = _this$props2;

      if (!step.disableOverlayClose) {
        helpers.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), 'setTooltipRef', function(c) {
      _this.tooltip = c;
    });

    _defineProperty(_assertThisInitialized(_this), 'setPopper', function(popper, type) {
      const _this$props3 = _this.props;
      const { action } = _this$props3;
      const { setPopper } = _this$props3;
      const { update } = _this$props3;

      if (type === 'wrapper') {
        _this.beaconPopper = popper;
      } else {
        _this.tooltipPopper = popper;
      }

      setPopper(popper, type);

      if (_this.beaconPopper && _this.tooltipPopper) {
        update({
          action: action === ACTIONS.CLOSE ? ACTIONS.CLOSE : action,
          lifecycle: LIFECYCLE.READY,
        });
      }
    });

    return _this;
  }

  _createClass(JoyrideStep, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        const _this$props4 = this.props;
        const { debug } = _this$props4;
        const { index } = _this$props4;
        log({
          title: 'step:'.concat(index),
          data: [
            {
              key: 'props',
              value: this.props,
            },
          ],
          debug,
        });
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        const _this$props5 = this.props;
        const { action } = _this$props5;
        const { callback } = _this$props5;
        const { continuous } = _this$props5;
        const { controlled } = _this$props5;
        const { debug } = _this$props5;
        const { index } = _this$props5;
        const { lifecycle } = _this$props5;
        const { size } = _this$props5;
        const { status } = _this$props5;
        const { step } = _this$props5;
        const { update } = _this$props5;

        const _treeChanges = treeChanges(prevProps, this.props);
        const { changed } = _treeChanges;
        const { changedTo } = _treeChanges;
        const { changedFrom } = _treeChanges;

        const state = {
          action,
          controlled,
          index,
          lifecycle,
          size,
          status,
        };
        const skipBeacon =
          continuous && action !== ACTIONS.CLOSE && (index > 0 || action === ACTIONS.PREV);
        const hasStoreChanged =
          changed('action') || changed('index') || changed('lifecycle') || changed('status');
        const hasStarted = changedFrom(
          'lifecycle',
          [LIFECYCLE.TOOLTIP, LIFECYCLE.INIT],
          LIFECYCLE.INIT,
        );
        const isAfterAction = changedTo('action', [
          ACTIONS.NEXT,
          ACTIONS.PREV,
          ACTIONS.SKIP,
          ACTIONS.CLOSE,
        ]);

        if (isAfterAction && (hasStarted || controlled)) {
          callback(
            _objectSpread2({}, state, {
              index: prevProps.index,
              lifecycle: LIFECYCLE.COMPLETE,
              step: prevProps.step,
              type: EVENTS.STEP_AFTER,
            }),
          );
        } // There's a step to use, but there's no target in the DOM

        if (hasStoreChanged && step) {
          const element = getElement(step.target);
          const elementExists = !!element;
          const hasRenderedTarget = elementExists && isElementVisible(element);

          if (hasRenderedTarget) {
            if (
              changedFrom('status', STATUS.READY, STATUS.RUNNING) ||
              changedFrom('lifecycle', LIFECYCLE.INIT, LIFECYCLE.READY)
            ) {
              callback(
                _objectSpread2({}, state, {
                  step,
                  type: EVENTS.STEP_BEFORE,
                }),
              );
            }
          } else {
            console.warn(elementExists ? 'Target not visible' : 'Target not mounted', step); //eslint-disable-line no-console

            callback(
              _objectSpread2({}, state, {
                type: EVENTS.TARGET_NOT_FOUND,
                step,
              }),
            );

            if (!controlled) {
              update({
                index: index + ([ACTIONS.PREV].indexOf(action) !== -1 ? -1 : 1),
              });
            }
          }
        }

        if (changedFrom('lifecycle', LIFECYCLE.INIT, LIFECYCLE.READY)) {
          update({
            lifecycle: hideBeacon(step) || skipBeacon ? LIFECYCLE.TOOLTIP : LIFECYCLE.BEACON,
          });
        }

        if (changed('index')) {
          log({
            title: 'step:'.concat(lifecycle),
            data: [
              {
                key: 'props',
                value: this.props,
              },
            ],
            debug,
          });
        }
        /* istanbul ignore else */

        if (changedTo('lifecycle', LIFECYCLE.BEACON)) {
          callback(
            _objectSpread2({}, state, {
              step,
              type: EVENTS.BEACON,
            }),
          );
        }

        if (changedTo('lifecycle', LIFECYCLE.TOOLTIP)) {
          callback(
            _objectSpread2({}, state, {
              step,
              type: EVENTS.TOOLTIP,
            }),
          );
          this.scope = new Scope(this.tooltip, {
            selector: '[data-action=primary]',
          });
          this.scope.setFocus();
        }

        if (changedFrom('lifecycle', [LIFECYCLE.TOOLTIP, LIFECYCLE.INIT], LIFECYCLE.INIT)) {
          this.scope.removeScope();
          delete this.beaconPopper;
          delete this.tooltipPopper;
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.scope.removeScope();
      },
      /**
       * Beacon click/hover event listener
       *
       * @param {Event} e
       */
    },
    {
      key: 'render',
      value: function render() {
        const _this$props6 = this.props;
        const { continuous } = _this$props6;
        const { debug } = _this$props6;
        const { helpers } = _this$props6;
        const { index } = _this$props6;
        const { lifecycle } = _this$props6;
        const { shouldScroll } = _this$props6;
        const { size } = _this$props6;
        const { step } = _this$props6;
        const target = getElement(step.target);

        if (!validateStep(step) || !is.domElement(target)) {
          return null;
        }

        return /* #__PURE__*/ React__default.createElement(
          'div',
          {
            key: 'JoyrideStep-'.concat(index),
            className: 'react-joyride__step',
          },
          /* #__PURE__*/ React__default.createElement(
            JoyridePortal,
            {
              id: 'react-joyride-portal',
            },
            /* #__PURE__*/ React__default.createElement(JoyrideOverlay, {
              ...step,
              debug,
              lifecycle,
              onClickOverlay: this.handleClickOverlay,
            }),
          ),
          /* #__PURE__*/ React__default.createElement(
            Floater,
            {
              component: /* #__PURE__*/ React__default.createElement(JoyrideTooltip, {
                continuous,
                helpers,
                index,
                isLastStep: index + 1 === size,
                setTooltipRef: this.setTooltipRef,
                size,
                step,
              }),
              debug,
              getPopper: this.setPopper,
              id: 'react-joyride-step-'.concat(index),
              isPositioned: step.isFixed || hasPosition(target),
              open: this.open,
              placement: step.placement,
              target: step.target,
              ...step.floaterProps,
            },
            /* #__PURE__*/ React__default.createElement(JoyrideBeacon, {
              beaconComponent: step.beaconComponent,
              locale: step.locale,
              onClickOrHover: this.handleClickHoverBeacon,
              shouldFocus: shouldScroll,
              styles: step.styles,
            }),
          ),
        );
      },
    },
    {
      key: 'open',
      get: function get() {
        const _this$props7 = this.props;
        const { step } = _this$props7;
        const { lifecycle } = _this$props7;
        return !!(hideBeacon(step) || lifecycle === LIFECYCLE.TOOLTIP);
      },
    },
  ]);

  return JoyrideStep;
})(React__default.Component);

const Joyride = /* #__PURE__*/ (function(_React$Component) {
  _inherits(Joyride, _React$Component);

  const _super = _createSuper(Joyride);

  function Joyride(props) {
    let _this;

    _classCallCheck(this, Joyride);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), 'initStore', function() {
      const _this$props = _this.props;
      const { debug } = _this$props;
      const { getHelpers } = _this$props;
      const { run } = _this$props;
      const { stepIndex } = _this$props;
      _this.store = new createStore(
        _objectSpread2({}, _this.props, {
          controlled: run && is.number(stepIndex),
        }),
      );
      _this.helpers = _this.store.getHelpers();
      const { addListener } = _this.store;
      log({
        title: 'init',
        data: [
          {
            key: 'props',
            value: _this.props,
          },
          {
            key: 'state',
            value: _this.state,
          },
        ],
        debug,
      }); // Sync the store to this component's state.

      addListener(_this.syncState);
      getHelpers(_this.helpers);
      return _this.store.getState();
    });

    _defineProperty(_assertThisInitialized(_this), 'callback', function(data) {
      const { callback } = _this.props;
      /* istanbul ignore else */

      if (is.function(callback)) {
        callback(data);
      }
    });

    _defineProperty(_assertThisInitialized(_this), 'handleKeyboard', function(e) {
      const _this$state = _this.state;
      const { index } = _this$state;
      const { lifecycle } = _this$state;
      const { steps } = _this.props;
      const step = steps[index];
      const intKey = window.Event ? e.which : e.keyCode;

      if (lifecycle === LIFECYCLE.TOOLTIP) {
        if (intKey === 27 && step && !step.disableCloseOnEsc) {
          _this.store.close();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), 'syncState', function(state) {
      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), 'setPopper', function(popper, type) {
      if (type === 'wrapper') {
        _this.beaconPopper = popper;
      } else {
        _this.tooltipPopper = popper;
      }
    });

    _defineProperty(_assertThisInitialized(_this), 'shouldScroll', function(
      disableScrolling,
      index,
      scrollToFirstStep,
      lifecycle,
      step,
      target,
      prevState,
    ) {
      return (
        !disableScrolling &&
        (index !== 0 || scrollToFirstStep || lifecycle === LIFECYCLE.TOOLTIP) &&
        step.placement !== 'center' &&
        (!step.isFixed || !hasPosition(target)) && // fixed steps don't need to scroll
        prevState.lifecycle !== lifecycle &&
        [LIFECYCLE.BEACON, LIFECYCLE.TOOLTIP].indexOf(lifecycle) !== -1
      );
    });

    _this.state = _this.initStore();
    return _this;
  }

  _createClass(Joyride, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (!canUseDOM) return;
        const _this$props2 = this.props;
        const { disableCloseOnEsc } = _this$props2;
        const { debug } = _this$props2;
        const { run } = _this$props2;
        const { steps } = _this$props2;
        const { start } = this.store;

        if (validateSteps(steps, debug) && run) {
          start();
        }
        /* istanbul ignore else */

        if (!disableCloseOnEsc) {
          document.body.addEventListener('keydown', this.handleKeyboard, {
            passive: true,
          });
        }
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        if (!canUseDOM) return;
        const _this$state2 = this.state;
        const { action } = _this$state2;
        const { controlled } = _this$state2;
        const { index } = _this$state2;
        const { lifecycle } = _this$state2;
        const { status } = _this$state2;
        const _this$props3 = this.props;
        const { debug } = _this$props3;
        const { run } = _this$props3;
        const { stepIndex } = _this$props3;
        const { steps } = _this$props3;
        const prevSteps = prevProps.steps;
        const prevStepIndex = prevProps.stepIndex;
        const _this$store = this.store;
        const { setSteps } = _this$store;
        const { reset } = _this$store;
        const { start } = _this$store;
        const { stop } = _this$store;
        const { update } = _this$store;

        const _treeChanges = treeChanges(prevProps, this.props);
        const changedProps = _treeChanges.changed;

        const _treeChanges2 = treeChanges(prevState, this.state);
        const { changed } = _treeChanges2;
        const { changedFrom } = _treeChanges2;
        const { changedTo } = _treeChanges2;

        const step = getMergedStep(steps[index], this.props);
        const stepsChanged = !isEqual(prevSteps, steps);
        const stepIndexChanged = is.number(stepIndex) && changedProps('stepIndex');

        if (stepsChanged) {
          if (validateSteps(steps, debug)) {
            setSteps(steps);
          } else {
            console.warn('Steps are not valid', steps); //eslint-disable-line no-console
          }
        }
        /* istanbul ignore else */

        if (changedProps('run')) {
          if (run) {
            start(stepIndex);
          } else {
            stop();
          }
        }
        /* istanbul ignore else */

        if (stepIndexChanged) {
          let nextAction = prevStepIndex < stepIndex ? ACTIONS.NEXT : ACTIONS.PREV;

          if (action === ACTIONS.STOP) {
            nextAction = ACTIONS.START;
          }

          if (!([STATUS.FINISHED, STATUS.SKIPPED].indexOf(status) !== -1)) {
            update({
              action: action === ACTIONS.CLOSE ? ACTIONS.CLOSE : nextAction,
              index: stepIndex,
              lifecycle: LIFECYCLE.INIT,
            });
          }
        }

        const callbackData = _objectSpread2({}, this.state, {
          index,
          step,
        });

        const isAfterAction = changedTo('action', [
          ACTIONS.NEXT,
          ACTIONS.PREV,
          ACTIONS.SKIP,
          ACTIONS.CLOSE,
        ]);

        if (isAfterAction && changedTo('status', STATUS.PAUSED)) {
          const prevStep = getMergedStep(steps[prevState.index], this.props);
          this.callback(
            _objectSpread2({}, callbackData, {
              index: prevState.index,
              lifecycle: LIFECYCLE.COMPLETE,
              step: prevStep,
              type: EVENTS.STEP_AFTER,
            }),
          );
        }

        if (changedTo('status', [STATUS.FINISHED, STATUS.SKIPPED])) {
          const _prevStep = getMergedStep(steps[prevState.index], this.props);

          if (!controlled) {
            this.callback(
              _objectSpread2({}, callbackData, {
                index: prevState.index,
                lifecycle: LIFECYCLE.COMPLETE,
                step: _prevStep,
                type: EVENTS.STEP_AFTER,
              }),
            );
          }

          this.callback(
            _objectSpread2({}, callbackData, {
              type: EVENTS.TOUR_END,
              // Return the last step when the tour is finished
              step: _prevStep,
              index: prevState.index,
            }),
          );
          reset();
        } else if (changedFrom('status', [STATUS.IDLE, STATUS.READY], STATUS.RUNNING)) {
          this.callback(
            _objectSpread2({}, callbackData, {
              type: EVENTS.TOUR_START,
            }),
          );
        } else if (changed('status')) {
          this.callback(
            _objectSpread2({}, callbackData, {
              type: EVENTS.TOUR_STATUS,
            }),
          );
        } else if (changedTo('action', ACTIONS.RESET)) {
          this.callback(
            _objectSpread2({}, callbackData, {
              type: EVENTS.TOUR_STATUS,
            }),
          );
        }

        if (step) {
          this.scrollToStep(prevState);

          if (
            step.placement === 'center' &&
            status === STATUS.RUNNING &&
            lifecycle === LIFECYCLE.INIT
          ) {
            this.store.update({
              lifecycle: LIFECYCLE.READY,
            });
          }
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        const { disableCloseOnEsc } = this.props;
        /* istanbul ignore else */

        if (!disableCloseOnEsc) {
          document.body.removeEventListener('keydown', this.handleKeyboard);
        }
      },
    },
    {
      key: 'scrollToStep',
      value: function scrollToStep(prevState) {
        const _this$state3 = this.state;
        const { index } = _this$state3;
        const { lifecycle } = _this$state3;
        const { status } = _this$state3;
        const _this$props4 = this.props;
        const { debug } = _this$props4;
        const { disableScrolling } = _this$props4;
        const { disableScrollParentFix } = _this$props4;
        const { scrollToFirstStep } = _this$props4;
        const { scrollOffset } = _this$props4;
        const { scrollDuration } = _this$props4;
        const { steps } = _this$props4;
        const step = getMergedStep(steps[index], this.props);
        /* istanbul ignore else */

        if (step) {
          const target = getElement(step.target);
          const shouldScroll = this.shouldScroll(
            disableScrolling,
            index,
            scrollToFirstStep,
            lifecycle,
            step,
            target,
            prevState,
          );

          if (status === STATUS.RUNNING && shouldScroll) {
            const hasCustomScroll = hasCustomScrollParent(target, disableScrollParentFix);
            const scrollParent = getScrollParent(target, disableScrollParentFix);
            let scrollY =
              Math.floor(getScrollTo(target, scrollOffset, disableScrollParentFix)) || 0;
            log({
              title: 'scrollToStep',
              data: [
                {
                  key: 'index',
                  value: index,
                },
                {
                  key: 'lifecycle',
                  value: lifecycle,
                },
                {
                  key: 'status',
                  value: status,
                },
              ],
              debug,
            });
            /* istanbul ignore else */

            if (lifecycle === LIFECYCLE.BEACON && this.beaconPopper) {
              const _this$beaconPopper = this.beaconPopper;
              const { placement } = _this$beaconPopper;
              const { popper } = _this$beaconPopper;
              /* istanbul ignore else */

              if (!(['bottom'].indexOf(placement) !== -1) && !hasCustomScroll) {
                scrollY = Math.floor(popper.top - scrollOffset);
              }
            } else if (lifecycle === LIFECYCLE.TOOLTIP && this.tooltipPopper) {
              const _this$tooltipPopper = this.tooltipPopper;
              const { flipped } = _this$tooltipPopper;
              const _placement = _this$tooltipPopper.placement;
              const _popper = _this$tooltipPopper.popper;

              if (
                ['top', 'right', 'left'].indexOf(_placement) !== -1 &&
                !flipped &&
                !hasCustomScroll
              ) {
                scrollY = Math.floor(_popper.top - scrollOffset);
              } else {
                scrollY -= step.spotlightPadding;
              }
            }

            scrollY = scrollY >= 0 ? scrollY : 0;
            /* istanbul ignore else */

            if (status === STATUS.RUNNING) {
              scrollTo(scrollY, scrollParent, scrollDuration);
            }
          }
        }
      },
      /**
       * Trigger the callback.
       *
       * @private
       * @param {Object} data
       */
    },
    {
      key: 'render',
      value: function render() {
        if (!canUseDOM) return null;
        const _this$state4 = this.state;
        const { index } = _this$state4;
        const { status } = _this$state4;
        const _this$props5 = this.props;
        const { continuous } = _this$props5;
        const { debug } = _this$props5;
        const { disableScrolling } = _this$props5;
        const { scrollToFirstStep } = _this$props5;
        const { steps } = _this$props5;
        const step = getMergedStep(steps[index], this.props);
        let output;

        if (status === STATUS.RUNNING && step) {
          output = /* #__PURE__*/ React__default.createElement(JoyrideStep, {
            ...this.state,
            callback: this.callback,
            continuous,
            debug,
            setPopper: this.setPopper,
            helpers: this.helpers,
            shouldScroll: !disableScrolling && (index !== 0 || scrollToFirstStep),
            step,
            update: this.store.update,
          });
        }

        return /* #__PURE__*/ React__default.createElement(
          'div',
          {
            className: 'react-joyride',
          },
          output,
        );
      },
    },
  ]);

  return Joyride;
})(React__default.Component);

_defineProperty(Joyride, 'defaultProps', {
  continuous: false,
  debug: false,
  disableCloseOnEsc: false,
  disableOverlay: false,
  disableOverlayClose: false,
  disableScrolling: false,
  disableScrollParentFix: false,
  getHelpers: function getHelpers() {},
  hideBackButton: false,
  run: true,
  scrollOffset: 20,
  scrollDuration: 300,
  scrollToFirstStep: false,
  showSkipButton: false,
  showProgress: false,
  spotlightClicks: false,
  spotlightPadding: 10,
  steps: [],
});

exports.ACTIONS = ACTIONS;
exports.EVENTS = EVENTS;
exports.LIFECYCLE = LIFECYCLE;
exports.STATUS = STATUS;
exports.default = Joyride;
