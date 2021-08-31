/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 139:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.action = void 0;
const to_vfile_1 = __nccwpck_require__(993);
const retext_1 = __nccwpck_require__(499);
const vfile_reporter_1 = __nccwpck_require__(836);
// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const googlestyleguide = __nccwpck_require__(420);
async function action(core) {
    retext_1.retext()
        .use(googlestyleguide)
        .process(to_vfile_1.readSync('README.md'), function (err, file) {
        core.error(vfile_reporter_1.reporter(err || file));
    });
}
exports.action = action;


/***/ }),

/***/ 109:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(186));
const action_1 = __nccwpck_require__(139);
async function run() {
    try {
        await action_1.action(core);
    }
    catch (error) {
        core.setFailed(error.message);
    }
}
void run();


/***/ }),

/***/ 351:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(87));
const utils_1 = __nccwpck_require__(278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 186:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(351);
const file_command_1 = __nccwpck_require__(717);
const utils_1 = __nccwpck_require__(278);
const os = __importStar(__nccwpck_require__(87));
const path = __importStar(__nccwpck_require__(622));
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    return inputs;
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 */
function error(message) {
    command_1.issue('error', message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds an warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 */
function warning(message) {
    command_1.issue('warning', message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issueCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__nccwpck_require__(747));
const os = __importStar(__nccwpck_require__(87));
const utils_1 = __nccwpck_require__(278);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 122:
/***/ ((module) => {

"use strict";


module.exports = iterate

var own = {}.hasOwnProperty

function iterate(values, callback, context) {
  var index = -1
  var result

  if (!values) {
    throw new Error('Iterate requires that |this| not be ' + values)
  }

  if (!own.call(values, 'length')) {
    throw new Error('Iterate requires that |this| has a `length`')
  }

  if (typeof callback !== 'function') {
    throw new Error('`callback` must be a function')
  }

  // The length might change, so we do not cache it.
  while (++index < values.length) {
    // Skip missing values.
    if (!(index in values)) {
      continue
    }

    result = callback.call(context, values[index], index, values)

    // If `callback` returns a `number`, move `index` over to `number`.
    if (typeof result === 'number') {
      // Make sure that negative numbers do not break the loop.
      if (result < 0) {
        index = 0
      }

      index = result - 1
    }
  }
}


/***/ }),

/***/ 171:
/***/ ((module) => {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),

/***/ 625:
/***/ ((module) => {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ 764:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order of result values is determined by the
 * order they occur in the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = difference;


/***/ }),

/***/ 758:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var toString = __nccwpck_require__(304)

module.exports = isLiteral

var single = [
  '-', // Hyphen-minus
  '–', // En dash
  '—', // Em dash
  ':', // Colon
  ';' // Semi-colon
]

// Pair delimiters.
// From common sense, and WikiPedia:
// <https://en.wikipedia.org/wiki/Quotation_mark>.
var pairs = {
  ',': [','],
  '-': ['-'],
  '–': ['–'],
  '—': ['—'],
  '"': ['"'],
  "'": ["'"],
  '‘': ['’'],
  '‚': ['’'],
  '’': ['’', '‚'],
  '“': ['”'],
  '”': ['”'],
  '„': ['”', '“'],
  '«': ['»'],
  '»': ['«'],
  '‹': ['›'],
  '›': ['‹'],
  '(': [')'],
  '[': [']'],
  '{': ['}'],
  '⟨': ['⟩'],
  '「': ['」']
}

var open = []
var key

for (key in pairs) {
  open.push(key)
}

// Check if the node in `parent` at `position` is enclosed by matching
// delimiters.
function isLiteral(parent, index) {
  if (!(parent && parent.children)) {
    throw new Error('Parent must be a node')
  }

  if (index !== null && typeof index === 'object' && 'type' in index) {
    index = parent.children.indexOf(index)

    if (index === -1) {
      throw new Error('Node must be a child of `parent`')
    }
  }

  if (isNaN(index)) {
    throw new Error('Index must be a number')
  }

  return Boolean(
    (!containsWord(parent, -1, index) &&
      siblingDelimiter(parent, index, 1, single)) ||
      (!containsWord(parent, index, parent.children.length) &&
        siblingDelimiter(parent, index, -1, single)) ||
      isWrapped(parent, index)
  )
}

// Check if the node in `parent` at `position` is enclosed by matching
// delimiters.
function isWrapped(parent, position) {
  var previous = siblingDelimiter(parent, position, -1, open)

  if (previous) {
    return siblingDelimiter(parent, position, 1, pairs[toString(previous)])
  }
}

// Find the previous or next delimiter before or after `position` in `parent`.
// Returns the delimiter node when found.
function siblingDelimiter(parent, position, step, delimiters) {
  var index = position + step
  var sibling

  while (index > -1 && index < parent.children.length) {
    sibling = parent.children[index]

    if (sibling.type === 'WordNode' || sibling.type === 'SourceNode') {
      return
    }

    if (sibling.type !== 'WhiteSpaceNode') {
      return delimiters.indexOf(toString(sibling)) > -1 && sibling
    }

    index += step
  }
}

// Check if parent contains word-nodes between `start` and `end` (both
// excluding).
function containsWord(parent, start, end) {
  while (++start < end) {
    if (parent.children[start].type === 'WordNode') {
      return true
    }
  }
}


/***/ }),

/***/ 769:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var toString = __nccwpck_require__(304)

module.exports = normalize

function normalize(node, options) {
  var value = (typeof node === 'string' ? node : toString(node))
    .toLowerCase()
    .replace(/’/g, "'")

  if (!options || !options.allowDashes) {
    value = value.replace(/-/g, '')
  }

  if (!options || !options.allowApostrophes) {
    value = value.replace(/'/g, '')
  }

  return value
}


/***/ }),

/***/ 23:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var visit = __nccwpck_require__(199)
var normalize = __nccwpck_require__(769)
var isLiteral = __nccwpck_require__(758)

var own = {}.hasOwnProperty

module.exports = search

var word = 'WordNode'
var whiteSpace = 'WhiteSpaceNode'

function search(tree, phrases, handler, options) {
  var settings = options || {}
  var apos = settings.allowApostrophes || options
  var dashes = settings.allowDashes || false
  var literals = settings.allowLiterals
  var config = {allowApostrophes: apos, allowDashes: dashes}
  var byWord = {'*': []}
  var length
  var index
  var key

  if (!tree || !tree.type) {
    throw new Error('Expected node')
  }

  if (typeof phrases !== 'object') {
    throw new Error('Expected object for phrases')
  }

  length = phrases.length
  index = -1

  if ('length' in phrases) {
    while (++index < length) {
      handlePhrase(phrases[index])
    }
  } else {
    for (key in phrases) {
      handlePhrase(key)
    }
  }

  // Search the tree.
  visit(tree, word, visitor)

  // Test a phrase.
  function test(phrase, position, parent) {
    var siblings = parent.children
    var node = siblings[position]
    var count = siblings.length
    var queue = [node]
    var expressions = phrase.split(' ').slice(1)
    var length = expressions.length
    var index = -1
    var expression

    // Move one position forward.
    position++

    // Iterate over `expressions`.
    while (++index < length) {
      // Allow joining white-space.
      while (position < count) {
        node = siblings[position]

        if (node.type !== whiteSpace) {
          break
        }

        queue.push(node)
        position++
      }

      node = siblings[position]
      expression = expressions[index]

      // Exit if there are no nodes left, if the current node is not a word, or
      // if the current word does not match the search for value.
      if (
        !node ||
        node.type !== word ||
        (expression !== '*' &&
          normalize(expression, config) !== normalize(node, config))
      ) {
        return
      }

      queue.push(node)
      position++
    }

    return queue
  }

  // Visitor for `WordNode`s.
  function visitor(node, position, parent) {
    var word
    var phrases
    var length
    var index
    var result

    if (!literals && isLiteral(parent, position)) {
      return
    }

    word = normalize(node, config)
    phrases = byWord['*'].concat(own.call(byWord, word) ? byWord[word] : [])
    length = phrases.length
    index = -1

    while (++index < length) {
      result = test(phrases[index], position, parent)

      if (result) {
        handler(result, position, parent, phrases[index])
      }
    }
  }

  // Handle a phrase.
  function handlePhrase(phrase) {
    var firstWord = normalize(phrase.split(' ', 1)[0], config)

    if (own.call(byWord, firstWord)) {
      byWord[firstWord].push(phrase)
    } else {
      byWord[firstWord] = [phrase]
    }
  }
}


/***/ }),

/***/ 304:
/***/ ((module) => {

"use strict";


module.exports = nlcstToString

// Stringify one nlcst node or list of nodes.
function nlcstToString(node, separator) {
  var sep = separator || ''
  var values
  var length
  var children

  if (!node || (!('length' in node) && !node.type)) {
    throw new Error('Expected node, not `' + node + '`')
  }

  if (typeof node.value === 'string') {
    return node.value
  }

  children = 'length' in node ? node : node.children
  length = children.length

  // Shortcut: This is pretty common, and a small performance win.
  if (length === 1 && 'value' in children[0]) {
    return children[0].value
  }

  values = []

  while (length--) {
    values[length] = nlcstToString(children[length], sep)
  }

  return values.join(sep)
}


/***/ }),

/***/ 435:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __nccwpck_require__(362); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ 137:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __nccwpck_require__(362);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __nccwpck_require__(435);

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ 362:
/***/ ((module) => {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ 61:
/***/ ((module) => {

"use strict";


module.exports = quotation

var C_DEFAULT = '"'

function quotation(value, open, close) {
  var result
  var index
  var length

  open = open || C_DEFAULT
  close = close || open

  if (typeof value === 'string') {
    return open + value + close
  }

  if (typeof value !== 'object' || !('length' in value)) {
    throw new Error('Expected string or array of strings')
  }

  result = []
  length = value.length
  index = -1

  while (++index < length) {
    result[index] = quotation(value[index], open, close)
  }

  return result
}


/***/ }),

/***/ 420:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/**
 * @author Gaurav Nelson
 * @copyright 2018 Gaurav Nelson
 * @module googlestyleguide
 * @fileoverview
 *   check input against word list (Google Developer Documentation Style Guide)
 */



/* Dependencies. */
var keys = __nccwpck_require__(137);
var difference = __nccwpck_require__(764);
var nlcstToString = __nccwpck_require__(304);
var search = __nccwpck_require__(23);
var position = __nccwpck_require__(133);
var findBefore = __nccwpck_require__(235);
var findAfter = __nccwpck_require__(364);
var patterns = __nccwpck_require__(399);
var quotation = __nccwpck_require__(61)

/* Expose. */
module.exports = googlestyleguide;

var list = keys(patterns);

//to remove passed values from the array, used to find and remove empty vlaues
function removeA(arr) {
  var what,
    a = arguments,
    L = a.length,
    ax;
  while (L > 1 && arr.length) {
    what = a[--L];
    while ((ax = arr.indexOf(what)) !== -1) {
      arr.splice(ax, 1);
    }
  }
  return arr;
}

// to check number of words in an array
function countWords(s) {
  s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
  s = s.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
  s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
  return s.split(" ").length;
}

//to check if all values in the array are same
var contains = function(needle) {
  // Per spec, the way to identify NaN is that it is not equal to itself
  var findNaN = needle !== needle;
  var indexOf;

  if (!findNaN && typeof Array.prototype.indexOf === "function") {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function(needle) {
      var i = -1,
        index = -1;

      for (i = 0; i < this.length; i++) {
        var item = this[i];

        if ((findNaN && item !== item) || item === needle) {
          index = i;
          break;
        }
      }

      return index;
    };
  }

  return indexOf.call(this, needle) > -1;
};

function googlestyleguide(options) {
  var ignore = (options || {}).ignore || [];
  var phrases = difference(list, ignore);

  return transformer;
  //allow dashes to compare words with hyphen
  function transformer(tree, file) {
    search(tree, phrases, finder, {
      allowDashes: true
    });

    function finder(match, index, parent, phrase) {
      var pattern = patterns[phrase];
      var replace = pattern.replace;
      var value = nlcstToString(match);
      var data = pattern.data;
      var reason;
      var message;
      //dynamic message source
      var convention = pattern.convention;

      var matchedWord = value.toString(); //.toLowerCase().trim(); //this is what triggered the error
      var replaceWord = replace.toString(); //.toLowerCase().trim(); // this is correct value
      //console.log("MATCHED: ", value.toString())
      //console.log("REPALCE wITH: ", replace.toString())

      var fMulti = matchedWord.match(/^.(\w)+/g); //find the first word in matched word
      var LMulti = matchedWord.match(/\s(\w+)$/g); //find the last word in matched word

      //if matched word is a single word, there is no last word (null)
      if (LMulti != null) {
        LMulti = LMulti.toString().trim();
        //console.log("fMULTI: ", fMulti.toString());
        //console.log("LMulti: ", LMulti.toString());
      }

      var finalMatches = [];

      //check if the replace word contains the matched words
      //in this case we need to also lookout for words before and after matched words.
      if (
        replaceWord.includes(matchedWord) &&
        replaceWord.length == matchedWord.length
      ) {
        //console.log("REPLACE wORD InCLUDES MATCHED!")
        //lets get the repace word in an array
        var checkValueArr = [];
        checkValueArr = replaceWord.split(" ");
        //remove empty values
        removeA(checkValueArr, "");

        //remove instances where replace = match and it is a single word
        if (
          countWords(replaceWord) == 1 &&
          replaceWord.length == matchedWord.length
        ) {
          //do nothing, this means matched word and replaced word are same
        } else {
          if (countWords(matchedWord) == 1) {
            //that is lats word is same as the first word, which means we are dealing with just one word
            LMulti = fMulti;
          }

          //find how many words are before the matched word in replace and how many are after that

          //get position of the first word in replace words
          var firstWordIndex = checkValueArr.findIndex(function(x) {
            return x == fMulti;
          });
          //get position of last word in replace words
          var lastWordIndex = checkValueArr.findIndex(function(x) {
            return x == LMulti;
          });

          var noOfWordsAfter;
          var noOfWordsBefore;

          //how many words are before the matched words in replace word
          noOfWordsBefore = firstWordIndex;

          if (lastWordIndex < 0) {
            //for single word there are no words after it.
            noOfWordsAfter = 0;
          } else {
            if (noOfWordsBefore != 0) {
              noOfWordsAfter = checkValueArr.length - lastWordIndex - 1;
            } else {
              noOfWordsAfter = checkValueArr.length - 1;
            }
          }

          //console.log("There are " + noOfWordsBefore + " words before matched word, and " + noOfWordsAfter + " words after it.")

          if (noOfWordsBefore > 0) {
            var sampleSizeArray = checkValueArr.slice(0, noOfWordsBefore);
            sampleSizeArray.reverse();
            //console.log(sampleSizeArray)
            var previousNode = findBefore(parent, match[0], "WordNode");
            for (var i = 0; i < sampleSizeArray.length; i++) {
              if (previousNode != null) {
                var compareValue1 = nlcstToString(previousNode).toLowerCase();
                compareValue1 = compareValue1.replace(/\s+/g, "");
                var compareValue2 = sampleSizeArray[i];
                compareValue2 = compareValue2.replace(/\s+/g, "");
                if (compareValue1 == compareValue2) {
                  finalMatches.push(true);
                } else finalMatches.push(false);
                previousNode = findBefore(parent, previousNode, "WordNode");
              } else {
                //this means it is the first word, we will show error
                finalMatches.push(false);
              }
            }
          }
          if (noOfWordsAfter > 0) {
            var sampleSizeArray = checkValueArr.slice(noOfWordsAfter);
            //console.log(sampleSizeArray)
            var afterNode = findAfter(parent, match[0], "WordNode");
            for (var i = 0; i < sampleSizeArray.length; i++) {
              if (afterNode != null) {
                var compareValue1 = nlcstToString(afterNode).toLowerCase();
                compareValue1 = compareValue1.replace(/\s+/g, "");
                var compareValue2 = sampleSizeArray[i];
                compareValue2 = compareValue2.replace(/\s+/g, "");
                if (compareValue1 == compareValue2) {
                  finalMatches.push(true);
                } else finalMatches.push(false);
                afterNode = findAfter(parent, afterNode, "WordNode");
              }
            }
          }
        }

        var checkifAllTrue = contains.call(finalMatches, false);
        if (!checkifAllTrue) {
          //this means the matched word and the words before or after it are same
          //therefore do nothing
        } else {
          if ((!replace.length) || (replace[0] === "")) {
            reason = data[0];
          } else {
            reason =
              data[0] +
              " Replace with " +
              quotation(replace, "“", "”").join(", ") +
              ".";
          }

          message = file.warn(reason, {
            start: position.start(match[0]),
            end: position.end(match[match.length - 1])
          });

          message.ruleId = phrase.replace(/\s+/g, "-").toLowerCase();
          message.source = convention;
          message.actual = value;
          message.expected = replace;
        }
      } else {
        // replaced words and matched words are different thus do the normal error reporting
        if ((!replace.length) || (replace[0] === "")) {
          reason = data[0];
        } else {
          reason =
            data[0] +
            " Replace with " +
            quotation(replace, "“", "”").join(", ") +
            ".";
        }

        message = file.warn(reason, {
          start: position.start(match[0]),
          end: position.end(match[match.length - 1])
        });

        message.ruleId = phrase.replace(/\s+/g, "-").toLowerCase();
        message.source = "googlestyleguide";
        message.actual = value;
        message.expected = replace;
      }
    }
  }
}


/***/ }),

/***/ 499:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nccwpck_require__) => {

"use strict";
// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

// EXPORTS
__nccwpck_require__.d(__webpack_exports__, {
  "retext": () => (/* binding */ retext)
});

;// CONCATENATED MODULE: ./node_modules/bail/index.js
/**
 * Throw a given error.
 *
 * @param {Error | null | undefined} [error]
 */
function bail(error) {
  if (error) {
    throw error
  }
}

// EXTERNAL MODULE: ./node_modules/is-buffer/index.js
var is_buffer = __nccwpck_require__(625);
// EXTERNAL MODULE: ./node_modules/extend/index.js
var extend = __nccwpck_require__(171);
;// CONCATENATED MODULE: ./node_modules/is-plain-obj/index.js
function isPlainObject(value) {
	if (Object.prototype.toString.call(value) !== '[object Object]') {
		return false;
	}

	const prototype = Object.getPrototypeOf(value);
	return prototype === null || prototype === Object.prototype;
}

;// CONCATENATED MODULE: ./node_modules/trough/index.js
/**
 * @typedef {(error?: Error|null|undefined, ...output: any[]) => void} Callback
 * @typedef {(...input: any[]) => any} Middleware
 *
 * @typedef {(...input: any[]) => void} Run Call all middleware.
 * @typedef {(fn: Middleware) => Pipeline} Use Add `fn` (middleware) to the list.
 * @typedef {{run: Run, use: Use}} Pipeline
 */

/**
 * Create new middleware.
 *
 * @returns {Pipeline}
 */
function trough() {
  /** @type {Middleware[]} */
  const fns = []
  /** @type {Pipeline} */
  const pipeline = {run, use}

  return pipeline

  /** @type {Run} */
  function run(...values) {
    let middlewareIndex = -1
    /** @type {Callback} */
    const callback = values.pop()

    if (typeof callback !== 'function') {
      throw new TypeError('Expected function as last argument, not ' + callback)
    }

    next(null, ...values)

    /**
     * Run the next `fn`, or we’re done.
     *
     * @param {Error|null|undefined} error
     * @param {any[]} output
     */
    function next(error, ...output) {
      const fn = fns[++middlewareIndex]
      let index = -1

      if (error) {
        callback(error)
        return
      }

      // Copy non-nullish input into values.
      while (++index < values.length) {
        if (output[index] === null || output[index] === undefined) {
          output[index] = values[index]
        }
      }

      // Save the newly created `output` for the next call.
      values = output

      // Next or done.
      if (fn) {
        wrap(fn, next)(...output)
      } else {
        callback(null, ...output)
      }
    }
  }

  /** @type {Use} */
  function use(middelware) {
    if (typeof middelware !== 'function') {
      throw new TypeError(
        'Expected `middelware` to be a function, not ' + middelware
      )
    }

    fns.push(middelware)
    return pipeline
  }
}

/**
 * Wrap `middleware`.
 * Can be sync or async; return a promise, receive a callback, or return new
 * values and errors.
 *
 * @param {Middleware} middleware
 * @param {Callback} callback
 */
function wrap(middleware, callback) {
  /** @type {boolean} */
  let called

  return wrapped

  /**
   * Call `middleware`.
   * @param {any[]} parameters
   * @returns {void}
   */
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length
    /** @type {any} */
    let result

    if (fnExpectsCallback) {
      parameters.push(done)
    }

    try {
      result = middleware(...parameters)
    } catch (error) {
      /** @type {Error} */
      const exception = error

      // Well, this is quite the pickle.
      // `middleware` received a callback and called it synchronously, but that
      // threw an error.
      // The only thing left to do is to throw the thing instead.
      if (fnExpectsCallback && called) {
        throw exception
      }

      return done(exception)
    }

    if (!fnExpectsCallback) {
      if (result instanceof Promise) {
        result.then(then, done)
      } else if (result instanceof Error) {
        done(result)
      } else {
        then(result)
      }
    }
  }

  /**
   * Call `callback`, only once.
   * @type {Callback}
   */
  function done(error, ...output) {
    if (!called) {
      called = true
      callback(error, ...output)
    }
  }

  /**
   * Call `done` with one value.
   *
   * @param {any} [value]
   */
  function then(value) {
    done(null, value)
  }
}

// EXTERNAL MODULE: ./node_modules/vfile/lib/index.js + 3 modules
var lib = __nccwpck_require__(567);
;// CONCATENATED MODULE: ./node_modules/unified/lib/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('vfile').VFileCompatible} VFileCompatible
 * @typedef {import('vfile').VFileValue} VFileValue
 * @typedef {import('..').Processor} Processor
 * @typedef {import('..').Plugin} Plugin
 * @typedef {import('..').Preset} Preset
 * @typedef {import('..').Pluggable} Pluggable
 * @typedef {import('..').PluggableList} PluggableList
 * @typedef {import('..').Transformer} Transformer
 * @typedef {import('..').Parser} Parser
 * @typedef {import('..').Compiler} Compiler
 * @typedef {import('..').RunCallback} RunCallback
 * @typedef {import('..').ProcessCallback} ProcessCallback
 *
 * @typedef Context
 * @property {Node} tree
 * @property {VFile} file
 */








// Expose a frozen processor.
const unified = base().freeze()

const own = {}.hasOwnProperty

// Function to create the first processor.
/**
 * @returns {Processor}
 */
function base() {
  const transformers = trough()
  /** @type {Processor['attachers']} */
  const attachers = []
  /** @type {Record<string, unknown>} */
  let namespace = {}
  /** @type {boolean|undefined} */
  let frozen
  let freezeIndex = -1

  // Data management.
  // @ts-expect-error: overloads are handled.
  processor.data = data
  processor.Parser = undefined
  processor.Compiler = undefined

  // Lock.
  processor.freeze = freeze

  // Plugins.
  processor.attachers = attachers
  // @ts-expect-error: overloads are handled.
  processor.use = use

  // API.
  processor.parse = parse
  processor.stringify = stringify
  // @ts-expect-error: overloads are handled.
  processor.run = run
  processor.runSync = runSync
  // @ts-expect-error: overloads are handled.
  processor.process = process
  processor.processSync = processSync

  // Expose.
  return processor

  // Create a new processor based on the processor in the current scope.
  /** @type {Processor} */
  function processor() {
    const destination = base()
    let index = -1

    while (++index < attachers.length) {
      destination.use(...attachers[index])
    }

    destination.data(extend(true, {}, namespace))

    return destination
  }

  /**
   * @param {string|Record<string, unknown>} [key]
   * @param {unknown} [value]
   * @returns {unknown}
   */
  function data(key, value) {
    if (typeof key === 'string') {
      // Set `key`.
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen)
        namespace[key] = value
        return processor
      }

      // Get `key`.
      return (own.call(namespace, key) && namespace[key]) || null
    }

    // Set space.
    if (key) {
      assertUnfrozen('data', frozen)
      namespace = key
      return processor
    }

    // Get space.
    return namespace
  }

  /** @type {Processor['freeze']} */
  function freeze() {
    if (frozen) {
      return processor
    }

    while (++freezeIndex < attachers.length) {
      const [attacher, ...options] = attachers[freezeIndex]

      if (options[0] === false) {
        continue
      }

      if (options[0] === true) {
        options[1] = undefined
      }

      /** @type {Transformer|void} */
      const transformer = attacher.call(processor, ...options)

      if (typeof transformer === 'function') {
        transformers.use(transformer)
      }
    }

    frozen = true
    freezeIndex = Number.POSITIVE_INFINITY

    return processor
  }

  /**
   * @param {Pluggable|null|undefined} [value]
   * @param {...unknown} options
   * @returns {Processor}
   */
  function use(value, ...options) {
    /** @type {Record<string, unknown>|undefined} */
    let settings

    assertUnfrozen('use', frozen)

    if (value === null || value === undefined) {
      // Empty.
    } else if (typeof value === 'function') {
      addPlugin(value, ...options)
    } else if (typeof value === 'object') {
      if (Array.isArray(value)) {
        addList(value)
      } else {
        addPreset(value)
      }
    } else {
      throw new TypeError('Expected usable value, not `' + value + '`')
    }

    if (settings) {
      namespace.settings = Object.assign(namespace.settings || {}, settings)
    }

    return processor

    /**
     * @param {import('..').Pluggable<unknown[]>} value
     * @returns {void}
     */
    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value)
      } else if (typeof value === 'object') {
        if (Array.isArray(value)) {
          const [plugin, ...options] = value
          addPlugin(plugin, ...options)
        } else {
          addPreset(value)
        }
      } else {
        throw new TypeError('Expected usable value, not `' + value + '`')
      }
    }

    /**
     * @param {Preset} result
     * @returns {void}
     */
    function addPreset(result) {
      addList(result.plugins)

      if (result.settings) {
        settings = Object.assign(settings || {}, result.settings)
      }
    }

    /**
     * @param {PluggableList|null|undefined} [plugins]
     * @returns {void}
     */
    function addList(plugins) {
      let index = -1

      if (plugins === null || plugins === undefined) {
        // Empty.
      } else if (Array.isArray(plugins)) {
        while (++index < plugins.length) {
          const thing = plugins[index]
          add(thing)
        }
      } else {
        throw new TypeError('Expected a list of plugins, not `' + plugins + '`')
      }
    }

    /**
     * @param {Plugin} plugin
     * @param {...unknown} [value]
     * @returns {void}
     */
    function addPlugin(plugin, value) {
      let index = -1
      /** @type {Processor['attachers'][number]|undefined} */
      let entry

      while (++index < attachers.length) {
        if (attachers[index][0] === plugin) {
          entry = attachers[index]
          break
        }
      }

      if (entry) {
        if (isPlainObject(entry[1]) && isPlainObject(value)) {
          value = extend(true, entry[1], value)
        }

        entry[1] = value
      } else {
        // @ts-expect-error: fine.
        attachers.push([...arguments])
      }
    }
  }

  /** @type {Processor['parse']} */
  function parse(doc) {
    processor.freeze()
    const file = vfile(doc)
    const Parser = processor.Parser
    assertParser('parse', Parser)

    if (newable(Parser, 'parse')) {
      // @ts-expect-error: `newable` checks this.
      return new Parser(String(file), file).parse()
    }

    // @ts-expect-error: `newable` checks this.
    return Parser(String(file), file) // eslint-disable-line new-cap
  }

  /** @type {Processor['stringify']} */
  function stringify(node, doc) {
    processor.freeze()
    const file = vfile(doc)
    const Compiler = processor.Compiler
    assertCompiler('stringify', Compiler)
    assertNode(node)

    if (newable(Compiler, 'compile')) {
      // @ts-expect-error: `newable` checks this.
      return new Compiler(node, file).compile()
    }

    // @ts-expect-error: `newable` checks this.
    return Compiler(node, file) // eslint-disable-line new-cap
  }

  /**
   * @param {Node} node
   * @param {VFileCompatible|RunCallback} [doc]
   * @param {RunCallback} [callback]
   * @returns {Promise<Node>|void}
   */
  function run(node, doc, callback) {
    assertNode(node)
    processor.freeze()

    if (!callback && typeof doc === 'function') {
      callback = doc
      doc = undefined
    }

    if (!callback) {
      return new Promise(executor)
    }

    executor(null, callback)

    /**
     * @param {null|((node: Node) => void)} resolve
     * @param {(error: Error) => void} reject
     * @returns {void}
     */
    function executor(resolve, reject) {
      // @ts-expect-error: `doc` can’t be a callback anymore, we checked.
      transformers.run(node, vfile(doc), done)

      /**
       * @param {Error|null} error
       * @param {Node} tree
       * @param {VFile} file
       * @returns {void}
       */
      function done(error, tree, file) {
        tree = tree || node
        if (error) {
          reject(error)
        } else if (resolve) {
          resolve(tree)
        } else {
          // @ts-expect-error: `callback` is defined if `resolve` is not.
          callback(null, tree, file)
        }
      }
    }
  }

  /** @type {Processor['runSync']} */
  function runSync(node, file) {
    /** @type {Node|undefined} */
    let result
    /** @type {boolean|undefined} */
    let complete

    processor.run(node, file, done)

    assertDone('runSync', 'run', complete)

    // @ts-expect-error: we either bailed on an error or have a tree.
    return result

    /**
     * @param {Error|null} [error]
     * @param {Node} [tree]
     * @returns {void}
     */
    function done(error, tree) {
      bail(error)
      result = tree
      complete = true
    }
  }

  /**
   * @param {VFileCompatible} doc
   * @param {ProcessCallback} [callback]
   * @returns {Promise<VFile>|undefined}
   */
  function process(doc, callback) {
    processor.freeze()
    assertParser('process', processor.Parser)
    assertCompiler('process', processor.Compiler)

    if (!callback) {
      return new Promise(executor)
    }

    executor(null, callback)

    /**
     * @param {null|((file: VFile) => void)} resolve
     * @param {(error?: Error|null|undefined) => void} reject
     * @returns {void}
     */
    function executor(resolve, reject) {
      const file = vfile(doc)

      processor.run(processor.parse(file), file, (error, tree, file) => {
        if (error || !tree || !file) {
          done(error)
        } else {
          /** @type {unknown} */
          const result = processor.stringify(tree, file)

          if (result === undefined || result === null) {
            // Empty.
          } else if (looksLikeAVFileValue(result)) {
            file.value = result
          } else {
            file.result = result
          }

          done(error, file)
        }
      })

      /**
       * @param {Error|null|undefined} [error]
       * @param {VFile|undefined} [file]
       * @returns {void}
       */
      function done(error, file) {
        if (error || !file) {
          reject(error)
        } else if (resolve) {
          resolve(file)
        } else {
          // @ts-expect-error: `callback` is defined if `resolve` is not.
          callback(null, file)
        }
      }
    }
  }

  /** @type {Processor['processSync']} */
  function processSync(doc) {
    /** @type {boolean|undefined} */
    let complete

    processor.freeze()
    assertParser('processSync', processor.Parser)
    assertCompiler('processSync', processor.Compiler)

    const file = vfile(doc)

    processor.process(file, done)

    assertDone('processSync', 'process', complete)

    return file

    /**
     * @param {Error|null|undefined} [error]
     * @returns {void}
     */
    function done(error) {
      complete = true
      bail(error)
    }
  }
}

/**
 * Check if `value` is a constructor.
 *
 * @param {unknown} value
 * @param {string} name
 * @returns {boolean}
 */
function newable(value, name) {
  return (
    typeof value === 'function' &&
    // Prototypes do exist.
    // type-coverage:ignore-next-line
    value.prototype &&
    // A function with keys in its prototype is probably a constructor.
    // Classes’ prototype methods are not enumerable, so we check if some value
    // exists in the prototype.
    // type-coverage:ignore-next-line
    (keys(value.prototype) || name in value.prototype)
  )
}

/**
 * Check if `value` is an object with keys.
 *
 * @param {Record<string, unknown>} value
 * @returns {boolean}
 */
function keys(value) {
  /** @type {string} */
  let key

  for (key in value) {
    if (own.call(value, key)) {
      return true
    }
  }

  return false
}

/**
 * Assert a parser is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Parser}
 */
function assertParser(name, value) {
  if (typeof value !== 'function') {
    throw new TypeError('Cannot `' + name + '` without `Parser`')
  }
}

/**
 * Assert a compiler is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Compiler}
 */
function assertCompiler(name, value) {
  if (typeof value !== 'function') {
    throw new TypeError('Cannot `' + name + '` without `Compiler`')
  }
}

/**
 * Assert the processor is not frozen.
 *
 * @param {string} name
 * @param {unknown} frozen
 * @returns {asserts frozen is false}
 */
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      'Cannot call `' +
        name +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.'
    )
  }
}

/**
 * Assert `node` is a unist node.
 *
 * @param {unknown} node
 * @returns {asserts node is Node}
 */
function assertNode(node) {
  // `isPlainObj` unfortunately uses `any` instead of `unknown`.
  // type-coverage:ignore-next-line
  if (!isPlainObject(node) || typeof node.type !== 'string') {
    throw new TypeError('Expected node, got `' + node + '`')
    // Fine.
  }
}

/**
 * Assert that `complete` is `true`.
 *
 * @param {string} name
 * @param {string} asyncName
 * @param {unknown} complete
 * @returns {asserts complete is true}
 */
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      '`' + name + '` finished async. Use `' + asyncName + '` instead'
    )
  }
}

/**
 * @param {VFileCompatible} [value]
 * @returns {VFile}
 */
function vfile(value) {
  return looksLikeAVFile(value) ? value : new lib/* VFile */.k(value)
}

/**
 * @param {VFileCompatible} [value]
 * @returns {value is VFile}
 */
function looksLikeAVFile(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      'message' in value &&
      'messages' in value
  )
}

/**
 * @param {unknown} [value]
 * @returns {value is VFileValue}
 */
function looksLikeAVFileValue(value) {
  return typeof value === 'string' || is_buffer(value)
}

;// CONCATENATED MODULE: ./node_modules/unherit/index.js
/**
 * Create a custom constructor which can be modified without affecting the
 * original class.
 *
 * @template {{prototype: object, new (...args: any[]): any}} Class
 * @param {Class} Super
 * @return {Class}
 */
function unherit(Super) {
  const Of = class extends Super {}

  // Clone values.
  const proto = Of.prototype
  /** @type {string} */
  let key

  // We specifically want to get *all* fields, not just own fields.
  // eslint-disable-next-line guard-for-in
  for (key in proto) {
    /** @type {unknown} */
    const value = proto[key]

    if (value && typeof value === 'object') {
      // @ts-expect-error: shallow clone arrays or other values.
      proto[key] = 'concat' in value ? value.concat() : Object.assign({}, value)
    }
  }

  return Of
}

// EXTERNAL MODULE: ./node_modules/nlcst-to-string/index.js
var nlcst_to_string = __nccwpck_require__(304);
// EXTERNAL MODULE: ./node_modules/unist-util-modify-children/index.js
var unist_util_modify_children = __nccwpck_require__(670);
;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/merge-initial-word-symbol.js



// Merge certain punctuation marks into their following words.
var mergeInitialWordSymbol = unist_util_modify_children(function (
  child,
  index,
  parent
) {
  var children
  var next

  if (
    (child.type !== 'SymbolNode' && child.type !== 'PunctuationNode') ||
    nlcst_to_string(child) !== '&'
  ) {
    return
  }

  children = parent.children

  next = children[index + 1]

  // If either a previous word, or no following word, exists, exit early.
  if (
    (index > 0 && children[index - 1].type === 'WordNode') ||
    !(next && next.type === 'WordNode')
  ) {
    return
  }

  // Remove `child` from parent.
  children.splice(index, 1)

  // Add the punctuation mark at the start of the next node.
  next.children.unshift(child)

  // Update position.
  if (next.position && child.position) {
    next.position.start = child.position.start
  }

  // Next, iterate over the node at the previous position, as it's now adjacent
  // to a following word.
  return index - 1
})

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/merge-final-word-symbol.js



// Merge certain punctuation marks into their preceding words.
var mergeFinalWordSymbol = unist_util_modify_children(function (
  child,
  index,
  parent
) {
  var children
  var previous
  var next

  if (
    index > 0 &&
    (child.type === 'SymbolNode' || child.type === 'PunctuationNode') &&
    nlcst_to_string(child) === '-'
  ) {
    children = parent.children
    previous = children[index - 1]
    next = children[index + 1]

    if (
      (!next || next.type !== 'WordNode') &&
      previous &&
      previous.type === 'WordNode'
    ) {
      // Remove `child` from parent.
      children.splice(index, 1)

      // Add the punctuation mark at the end of the previous node.
      previous.children.push(child)

      // Update position.
      if (previous.position && child.position) {
        previous.position.end = child.position.end
      }

      // Next, iterate over the node *now* at the current position (which was
      // the next node).
      return index
    }
  }
})

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/expressions.js
// This module is generated by `script/build-expressions.js`.
var affixSymbol = /^([!"').?\u00BB\u0F3B\u0F3D\u169C\u2019\u201D\u2026\u203A\u203D\u2046\u207E\u208E\u2309\u230B\u232A\u2769\u276B\u276D\u276F\u2771\u2773\u2775\u27C6\u27E7\u27E9\u27EB\u27ED\u27EF\u2984\u2986\u2988\u298A\u298C\u298E\u2990\u2992\u2994\u2996\u2998\u29D9\u29DB\u29FD\u2E03\u2E05\u2E0A\u2E0D\u2E1D\u2E21\u2E23\u2E25\u2E27\u2E29\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E\u301F\uFD3E\uFE18\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE44\uFE48\uFE5A\uFE5C\uFE5E\uFF09\uFF3D\uFF5D\uFF60\uFF63\]}])\1*$/
var newLine = /^[ \t]*((\r?\n|\r)[\t ]*)+$/
var newLineMulti = /^[ \t]*((\r?\n|\r)[\t ]*){2,}$/
var terminalMarker = /^([!.?\u2026\u203D]+)$/
var wordSymbolInner = /^([&'\-.:=?@\u00AD\u00B7\u2010\u2011\u2019\u2027]|_+)$/
var numerical = /^(?:[\d\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9])+$/
var digitStart = /^\d/
var lowerInitial = /^(?:[a-z\u00B5\u00DF-\u00F6\u00F8-\u00FF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C3\uA7C8\uA7CA\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]|\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43])/
var surrogates = /[\uD800-\uDFFF]/
var punctuation = /[!"'-),-/:;?[-\]_{}\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u201F\u2022-\u2027\u2032-\u203A\u203C-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
var word = /[\dA-Za-z\u00AA\u00B2\u00B3\u00B5\u00B9\u00BA\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u17F0-\u17F9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1AC0\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u20D0-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA827\uA82C\uA830-\uA835\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE6\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC52-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF3B]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]|\uDB40[\uDD00-\uDDEF]/
var whiteSpace = /[\t-\r \u0085\u00A0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/merge-inner-word-symbol.js



// Symbols part of surrounding words.


// Merge words joined by certain punctuation marks.
var mergeInnerWordSymbol = unist_util_modify_children(function (
  child,
  index,
  parent
) {
  var siblings
  var sibling
  var previous
  var last
  var position
  var tokens
  var queue

  if (
    index > 0 &&
    (child.type === 'SymbolNode' || child.type === 'PunctuationNode')
  ) {
    siblings = parent.children
    previous = siblings[index - 1]

    if (previous && previous.type === 'WordNode') {
      position = index - 1

      tokens = []
      queue = []

      // -   If a token which is neither word nor inner word symbol is found,
      //     the loop is broken
      // -   If an inner word symbol is found,  it’s queued
      // -   If a word is found, it’s queued (and the queue stored and emptied)
      while (siblings[++position]) {
        sibling = siblings[position]

        if (sibling.type === 'WordNode') {
          tokens = tokens.concat(queue, sibling.children)

          queue = []
        } else if (
          (sibling.type === 'SymbolNode' ||
            sibling.type === 'PunctuationNode') &&
          wordSymbolInner.test(nlcst_to_string(sibling))
        ) {
          queue.push(sibling)
        } else {
          break
        }
      }

      if (tokens.length > 0) {
        // If there is a queue, remove its length from `position`.
        if (queue.length > 0) {
          position -= queue.length
        }

        // Remove every (one or more) inner-word punctuation marks and children
        // of words.
        siblings.splice(index, position - index)

        // Add all found tokens to `prev`s children.
        previous.children = previous.children.concat(tokens)

        last = tokens[tokens.length - 1]

        // Update position.
        if (previous.position && last.position) {
          previous.position.end = last.position.end
        }

        // Next, iterate over the node *now* at the current position.
        return index
      }
    }
  }
})

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/merge-inner-word-slash.js



var slash = '/'

// Merge words joined by certain punctuation marks.
var mergeInnerWordSlash = unist_util_modify_children(function (
  child,
  index,
  parent
) {
  var siblings = parent.children
  var previous
  var next
  var previousValue
  var nextValue
  var queue
  var tail
  var count

  previous = siblings[index - 1]
  next = siblings[index + 1]

  if (
    previous &&
    previous.type === 'WordNode' &&
    (child.type === 'SymbolNode' || child.type === 'PunctuationNode') &&
    nlcst_to_string(child) === slash
  ) {
    previousValue = nlcst_to_string(previous)
    tail = child
    queue = [child]
    count = 1

    if (next && next.type === 'WordNode') {
      nextValue = nlcst_to_string(next)
      tail = next
      queue = queue.concat(next.children)
      count++
    }

    if (previousValue.length < 3 && (!nextValue || nextValue.length < 3)) {
      // Add all found tokens to `prev`s children.
      previous.children = previous.children.concat(queue)

      siblings.splice(index, count)

      // Update position.
      if (previous.position && tail.position) {
        previous.position.end = tail.position.end
      }

      // Next, iterate over the node *now* at the current position.
      return index
    }
  }
})

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/merge-initialisms.js




// Merge initialisms.
var mergeInitialisms = unist_util_modify_children(function (child, index, parent) {
  var siblings
  var previous
  var children
  var position
  var otherChild
  var isAllDigits
  var value

  if (index > 0 && nlcst_to_string(child) === '.') {
    siblings = parent.children

    previous = siblings[index - 1]
    children = previous.children

    if (
      previous.type === 'WordNode' &&
      children &&
      children.length !== 1 &&
      children.length % 2 !== 0
    ) {
      position = children.length
      isAllDigits = true

      while (children[--position]) {
        otherChild = children[position]

        value = nlcst_to_string(otherChild)

        if (position % 2 === 0) {
          // Initialisms consist of one character values.
          if (value.length > 1) {
            return
          }

          if (!numerical.test(value)) {
            isAllDigits = false
          }
        } else if (value !== '.') {
          if (position < children.length - 2) {
            break
          } else {
            return
          }
        }
      }

      if (!isAllDigits) {
        // Remove `child` from parent.
        siblings.splice(index, 1)

        // Add child to the previous children.
        children.push(child)

        // Update position.
        if (previous.position && child.position) {
          previous.position.end = child.position.end
        }

        // Next, iterate over the node *now* at the current position.
        return index
      }
    }
  }
})

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/merge-words.js


// Merge multiple words. This merges the children of adjacent words, something
// which should not occur naturally by parse-latin, but might happen when custom
// tokens were passed in.
var mergeWords = unist_util_modify_children(function (child, index, parent) {
  var siblings = parent.children
  var next

  if (child.type === 'WordNode') {
    next = siblings[index + 1]

    if (next && next.type === 'WordNode') {
      // Remove `next` from parent.
      siblings.splice(index + 1, 1)

      // Add the punctuation mark at the end of the previous node.
      child.children = child.children.concat(next.children)

      // Update position.
      if (next.position && child.position) {
        child.position.end = next.position.end
      }

      // Next, re-iterate the current node.
      return index
    }
  }
})

// EXTERNAL MODULE: ./node_modules/unist-util-visit-children/index.js
var unist_util_visit_children = __nccwpck_require__(104);
;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/patch-position.js


// Patch the position on a parent node based on its first and last child.
var patchPosition = unist_util_visit_children(function (child, index, node) {
  var siblings = node.children

  if (!child.position) {
    return
  }

  if (
    index < 1 &&
    /* c8 ignore next */
    (!node.position || !node.position.start)
  ) {
    patch(node)
    node.position.start = child.position.start
  }

  if (index === siblings.length - 1 && (!node.position || !node.position.end)) {
    patch(node)
    node.position.end = child.position.end
  }
})

// Add a `position` object when it does not yet exist on `node`.
function patch(node) {
  if (!node.position) {
    node.position = {}
  }
}

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/merge-non-word-sentences.js


// Merge a sentence into the following sentence, when the sentence does not
// contain word tokens.
var mergeNonWordSentences = unist_util_modify_children(function (
  child,
  index,
  parent
) {
  var children = child.children
  var position = -1
  var previous
  var next

  while (children[++position]) {
    if (children[position].type === 'WordNode') {
      return
    }
  }

  previous = parent.children[index - 1]

  if (previous) {
    previous.children = previous.children.concat(children)

    // Remove the child.
    parent.children.splice(index, 1)

    // Patch position.
    if (previous.position && child.position) {
      previous.position.end = child.position.end
    }

    // Next, iterate over the node *now* at the current position (which was the
    // next node).
    return index
  }

  next = parent.children[index + 1]

  if (next) {
    next.children = children.concat(next.children)

    // Patch position.
    if (next.position && child.position) {
      next.position.start = child.position.start
    }

    // Remove the child.
    parent.children.splice(index, 1)
  }
})

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/merge-affix-symbol.js



// Closing or final punctuation, or terminal markers that should still be
// included in the previous sentence, even though they follow the sentence’s
// terminal marker.


// Move certain punctuation following a terminal marker (thus in the next
// sentence) to the previous sentence.
var mergeAffixSymbol = unist_util_modify_children(function (child, index, parent) {
  var children = child.children
  var first
  var second
  var previous

  if (children && children.length > 0 && index > 0) {
    first = children[0]
    second = children[1]
    previous = parent.children[index - 1]

    if (
      (first.type === 'SymbolNode' || first.type === 'PunctuationNode') &&
      affixSymbol.test(nlcst_to_string(first))
    ) {
      previous.children.push(children.shift())

      // Update position.
      if (first.position && previous.position) {
        previous.position.end = first.position.end
      }

      if (second && second.position && child.position) {
        child.position.start = second.position.start
      }

      // Next, iterate over the previous node again.
      return index - 1
    }
  }
})

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/merge-initial-lower-case-letter-sentences.js



// Initial lowercase letter.


// Merge a sentence into its previous sentence, when the sentence starts with a
// lower case letter.
var mergeInitialLowerCaseLetterSentences = unist_util_modify_children(function (
  child,
  index,
  parent
) {
  var children = child.children
  var position
  var node
  var siblings
  var previous

  if (children && children.length > 0 && index > 0) {
    position = -1

    while (children[++position]) {
      node = children[position]

      if (node.type === 'WordNode') {
        if (!lowerInitial.test(nlcst_to_string(node))) {
          return
        }

        siblings = parent.children

        previous = siblings[index - 1]

        previous.children = previous.children.concat(children)

        siblings.splice(index, 1)

        // Update position.
        if (previous.position && child.position) {
          previous.position.end = child.position.end
        }

        // Next, iterate over the node *now* at the current position.
        return index
      }

      if (node.type === 'SymbolNode' || node.type === 'PunctuationNode') {
        return
      }
    }
  }
})

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/merge-initial-digit-sentences.js




// Merge a sentence into its previous sentence, when the sentence starts with a
// lower case letter.
var mergeInitialDigitSentences = unist_util_modify_children(function (
  child,
  index,
  parent
) {
  var children = child.children
  var siblings = parent.children
  var previous = siblings[index - 1]
  var head = children[0]

  if (
    previous &&
    head &&
    head.type === 'WordNode' &&
    digitStart.test(nlcst_to_string(head))
  ) {
    previous.children = previous.children.concat(children)
    siblings.splice(index, 1)

    // Update position.
    if (previous.position && child.position) {
      previous.position.end = child.position.end
    }

    // Next, iterate over the node *now* at the current position.
    return index
  }
})

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/merge-prefix-exceptions.js



// Full stop characters that should not be treated as terminal sentence markers:
// A case-insensitive abbreviation.
var abbreviationPrefix = new RegExp(
  '^(' +
    '[0-9]{1,3}|' +
    '[a-z]|' +
    // Common Latin Abbreviations:
    // Based on: <https://en.wikipedia.org/wiki/List_of_Latin_abbreviations>.
    // Where only the abbreviations written without joining full stops,
    // but with a final full stop, were extracted.
    //
    // circa, capitulus, confer, compare, centum weight, eadem, (et) alii,
    // et cetera, floruit, foliis, ibidem, idem, nemine && contradicente,
    // opere && citato, (per) cent, (per) procurationem, (pro) tempore,
    // sic erat scriptum, (et) sequentia, statim, videlicet. */
    'al|ca|cap|cca|cent|cf|cit|con|cp|cwt|ead|etc|ff|' +
    'fl|ibid|id|nem|op|pro|seq|sic|stat|tem|viz' +
    ')$'
)

// Merge a sentence into its next sentence, when the sentence ends with a
// certain word.
var mergePrefixExceptions = unist_util_modify_children(function (
  child,
  index,
  parent
) {
  var children = child.children
  var period
  var node
  var next

  if (children && children.length > 1) {
    period = children[children.length - 1]

    if (period && nlcst_to_string(period) === '.') {
      node = children[children.length - 2]

      if (
        node &&
        node.type === 'WordNode' &&
        abbreviationPrefix.test(nlcst_to_string(node).toLowerCase())
      ) {
        // Merge period into abbreviation.
        node.children.push(period)
        children.pop()

        // Update position.
        if (period.position && node.position) {
          node.position.end = period.position.end
        }

        // Merge sentences.
        next = parent.children[index + 1]

        if (next) {
          child.children = children.concat(next.children)

          parent.children.splice(index + 1, 1)

          // Update position.
          if (next.position && child.position) {
            child.position.end = next.position.end
          }

          // Next, iterate over the current node again.
          return index - 1
        }
      }
    }
  }
})

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/merge-affix-exceptions.js



// Merge a sentence into its previous sentence, when the sentence starts with a
// comma.
var mergeAffixExceptions = unist_util_modify_children(function (
  child,
  index,
  parent
) {
  var children = child.children
  var node
  var position
  var value
  var previousChild

  if (!children || children.length === 0 || index < 1) {
    return
  }

  position = -1

  while (children[++position]) {
    node = children[position]

    if (node.type === 'WordNode') {
      return
    }

    if (node.type === 'SymbolNode' || node.type === 'PunctuationNode') {
      value = nlcst_to_string(node)

      if (value !== ',' && value !== ';') {
        return
      }

      previousChild = parent.children[index - 1]

      previousChild.children = previousChild.children.concat(children)

      // Update position.
      if (previousChild.position && child.position) {
        previousChild.position.end = child.position.end
      }

      parent.children.splice(index, 1)

      // Next, iterate over the node *now* at the current position.
      return index
    }
  }
})

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/merge-remaining-full-stops.js



// Full stop characters that should not be treated as terminal sentence markers:
// A case-insensitive abbreviation.


// Merge non-terminal-marker full stops into the previous word (if available),
// or the next word (if available).
var mergeRemainingFullStops = unist_util_visit_children(function (child) {
  var children = child.children
  var position = children.length
  var hasFoundDelimiter = false
  var grandchild
  var previous
  var next
  var nextNext

  while (children[--position]) {
    grandchild = children[position]

    if (
      grandchild.type !== 'SymbolNode' &&
      grandchild.type !== 'PunctuationNode'
    ) {
      // This is a sentence without terminal marker, so we 'fool' the code to
      // make it think we have found one.
      if (grandchild.type === 'WordNode') {
        hasFoundDelimiter = true
      }

      continue
    }

    // Exit when this token is not a terminal marker.
    if (!terminalMarker.test(nlcst_to_string(grandchild))) {
      continue
    }

    // Ignore the first terminal marker found (starting at the end), as it
    // should not be merged.
    if (!hasFoundDelimiter) {
      hasFoundDelimiter = true

      continue
    }

    // Only merge a single full stop.
    if (nlcst_to_string(grandchild) !== '.') {
      continue
    }

    previous = children[position - 1]
    next = children[position + 1]

    if (previous && previous.type === 'WordNode') {
      nextNext = children[position + 2]

      // Continue when the full stop is followed by a space and another full
      // stop, such as: `{.} .`
      if (
        next &&
        nextNext &&
        next.type === 'WhiteSpaceNode' &&
        nlcst_to_string(nextNext) === '.'
      ) {
        continue
      }

      // Remove `child` from parent.
      children.splice(position, 1)

      // Add the punctuation mark at the end of the previous node.
      previous.children.push(grandchild)

      // Update position.
      if (grandchild.position && previous.position) {
        previous.position.end = grandchild.position.end
      }

      position--
    } else if (next && next.type === 'WordNode') {
      // Remove `child` from parent.
      children.splice(position, 1)

      // Add the punctuation mark at the start of the next node.
      next.children.unshift(grandchild)

      if (grandchild.position && next.position) {
        next.position.start = grandchild.position.start
      }
    }
  }
})

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/make-initial-white-space-siblings.js


// Move white space starting a sentence up, so they are the siblings of
// sentences.
var makeInitialWhiteSpaceSiblings = unist_util_visit_children(function (
  child,
  index,
  parent
) {
  var children = child.children
  var next

  if (
    children &&
    children.length > 0 &&
    children[0].type === 'WhiteSpaceNode'
  ) {
    parent.children.splice(index, 0, children.shift())
    next = children[0]

    if (next && next.position && child.position) {
      child.position.start = next.position.start
    }
  }
})

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/make-final-white-space-siblings.js


// Move white space ending a paragraph up, so they are the siblings of
// paragraphs.
var makeFinalWhiteSpaceSiblings = unist_util_modify_children(function (
  child,
  index,
  parent
) {
  var children = child.children
  var previous

  if (
    children &&
    children.length > 0 &&
    children[children.length - 1].type === 'WhiteSpaceNode'
  ) {
    parent.children.splice(index + 1, 0, child.children.pop())
    previous = children[children.length - 1]

    if (previous && previous.position && child.position) {
      child.position.end = previous.position.end
    }

    // Next, iterate over the current node again.
    return index
  }
})

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/break-implicit-sentences.js



// Two or more new line characters.


// Break a sentence if a white space with more than one new-line is found.
var breakImplicitSentences = unist_util_modify_children(function (
  child,
  index,
  parent
) {
  var children
  var position
  var tail
  var head
  var end
  var insertion
  var node

  if (child.type !== 'SentenceNode') {
    return
  }

  children = child.children

  // Ignore first and last child.
  position = 0

  while (++position < children.length - 1) {
    node = children[position]

    if (node.type !== 'WhiteSpaceNode' || !newLineMulti.test(nlcst_to_string(node))) {
      continue
    }

    child.children = children.slice(0, position)

    insertion = {
      type: 'SentenceNode',
      children: children.slice(position + 1)
    }

    tail = children[position - 1]
    head = children[position + 1]

    parent.children.splice(index + 1, 0, node, insertion)

    if (child.position && tail.position && head.position) {
      end = child.position.end

      child.position.end = tail.position.end

      insertion.position = {start: head.position.start, end}
    }

    return index + 1
  }
})

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/plugin/remove-empty-nodes.js


// Remove empty children.
var removeEmptyNodes = unist_util_modify_children(function (child, index, parent) {
  if ('children' in child && child.children.length === 0) {
    parent.children.splice(index, 1)

    // Next, iterate over the node *now* at the current position (which was the
    // next node).
    return index
  }
})

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/tokenizer.js


// Factory to create a tokenizer based on a given `expression`.
function tokenizerFactory(childType, expression) {
  return tokenizer

  // A function that splits.
  function tokenizer(node) {
    var children = []
    var tokens = node.children
    var type = node.type
    var index = -1
    var lastIndex = tokens.length - 1
    var start = 0
    var first
    var last
    var parent

    while (++index < tokens.length) {
      if (
        index === lastIndex ||
        (tokens[index].type === childType &&
          expression.test(nlcst_to_string(tokens[index])))
      ) {
        first = tokens[start]
        last = tokens[index]

        parent = {type, children: tokens.slice(start, index + 1)}

        if (first.position && last.position) {
          parent.position = {
            start: first.position.start,
            end: last.position.end
          }
        }

        children.push(parent)

        start = index + 1
      }
    }

    return children
  }
}

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/parser.js


// Construct a parser based on `options`.
function parserFactory(options) {
  var type = options.type
  var tokenizerProperty = options.tokenizer
  var delimiter = options.delimiter
  var tokenize = delimiter && tokenizerFactory(options.delimiterType, delimiter)

  return parser

  function parser(value) {
    var children = this[tokenizerProperty](value)

    return {type, children: tokenize ? tokenize(children) : children}
  }
}

;// CONCATENATED MODULE: ./node_modules/parse-latin/lib/index.js





















// PARSE LATIN

// Transform Latin-script natural language into an NLCST-tree.
class lib_ParseLatin {
  constructor(doc, file) {
    var value = file || doc
    this.doc = value ? String(value) : null
  }

  // Run transform plugins for `key` on `nodes`.
  run(key, nodes) {
    var wareKey = key + 'Plugins'
    var plugins = this[wareKey]
    var index = -1

    if (plugins) {
      while (plugins[++index]) {
        plugins[index](nodes)
      }
    }

    return nodes
  }

  // Easy access to the document parser. This additionally supports retext-style
  // invocation: where an instance is created for each file, and the file is given
  // on construction.
  parse(value) {
    return this.tokenizeRoot(value || this.doc)
  }

  // Transform a `value` into a list of `NLCSTNode`s.
  tokenize(value) {
    var parser = this
    var tokens = []
    var index = 0
    var offset = 0
    var line = 1
    var column = 1
    var character
    var queue
    var previous
    var left
    var right
    var eater

    if (value === null || value === undefined) {
      value = ''
    } else if (value instanceof String) {
      value = value.toString()
    }

    if (typeof value !== 'string') {
      // Return the given nodes if this is either an empty array, or an array with
      // a node as a first child.
      if ('length' in value && (!value[0] || value[0].type)) {
        return value
      }

      throw new Error(
        "Illegal invocation: '" +
          value +
          "' is not a valid argument for 'ParseLatin'"
      )
    }

    if (!value) {
      return tokens
    }

    // Eat mechanism to use.
    eater = this.position ? eat : noPositionEat

    previous = ''
    queue = ''

    while (index < value.length) {
      character = value.charAt(index)

      if (whiteSpace.test(character)) {
        right = 'WhiteSpace'
      } else if (punctuation.test(character)) {
        right = 'Punctuation'
      } else if (word.test(character)) {
        right = 'Word'
      } else {
        right = 'Symbol'
      }

      tick()

      previous = character
      character = ''
      left = right
      right = null

      index++
    }

    tick()

    return tokens

    // Check one character.
    function tick() {
      if (
        left === right &&
        (left === 'Word' ||
          left === 'WhiteSpace' ||
          character === previous ||
          surrogates.test(character))
      ) {
        queue += character
      } else {
        // Flush the previous queue.
        if (queue) {
          parser['tokenize' + left](queue, eater)
        }

        queue = character
      }
    }

    // Remove `subvalue` from `value`.
    // Expects `subvalue` to be at the start from `value`, and applies no
    // validation.
    function eat(subvalue) {
      var pos = position()

      update(subvalue)

      return apply

      // Add the given arguments, add `position` to the returned node, and return
      // the node.
      function apply(...input) {
        return pos(add(...input))
      }
    }

    // Remove `subvalue` from `value`.
    // Does not patch positional information.
    function noPositionEat() {
      return add
    }

    // Add mechanism.
    function add(node, parent) {
      if (parent) {
        parent.children.push(node)
      } else {
        tokens.push(node)
      }

      return node
    }

    // Mark position and patch `node.position`.
    function position() {
      var before = now()

      // Add the position to a node.
      function patch(node) {
        node.position = new Position(before)

        return node
      }

      return patch
    }

    // Update line and column based on `value`.
    function update(subvalue) {
      var character = -1
      var lastIndex = -1

      offset += subvalue.length

      while (++character < subvalue.length) {
        if (subvalue.charAt(character) === '\n') {
          lastIndex = character
          line++
        }
      }

      if (lastIndex < 0) {
        column += subvalue.length
      } else {
        column = subvalue.length - lastIndex
      }
    }

    // Store position information for a node.
    function Position(start) {
      this.start = start
      this.end = now()
    }

    // Get the current position.
    function now() {
      return {line, column, offset}
    }
  }
}

// Default position.
lib_ParseLatin.prototype.position = true

// Create text nodes.
lib_ParseLatin.prototype.tokenizeSymbol = createTextFactory('Symbol')
lib_ParseLatin.prototype.tokenizeWhiteSpace = createTextFactory('WhiteSpace')
lib_ParseLatin.prototype.tokenizePunctuation = createTextFactory('Punctuation')
lib_ParseLatin.prototype.tokenizeSource = createTextFactory('Source')
lib_ParseLatin.prototype.tokenizeText = createTextFactory('Text')

// Inject `plugins` to modifiy the result of the method at `key` on the operated
// on context.
lib_ParseLatin.prototype.use = useFactory(function (context, key, plugins) {
  context[key] = context[key].concat(plugins)
})

// Inject `plugins` to modifiy the result of the method at `key` on the operated
// on context, before any other.
lib_ParseLatin.prototype.useFirst = useFactory(function (context, key, plugins) {
  context[key] = plugins.concat(context[key])
})

// PARENT NODES
//
// All these nodes are `pluggable`: they come with a `use` method which accepts
// a plugin (`function(NLCSTNode)`).
// Every time one of these methods are called, the plugin is invoked with the
// node, allowing for easy modification.
//
// In fact, the internal transformation from `tokenize` (a list of words, white
// space, punctuation, and symbols) to `tokenizeRoot` (an NLCST tree), is also
// implemented through this mechanism.

// Create a `WordNode` with its children set to a single `TextNode`, its value
// set to the given `value`.
pluggable(lib_ParseLatin, 'tokenizeWord', function (value, eat) {
  var add = (eat || noopEat)('')
  var parent = {type: 'WordNode', children: []}

  this.tokenizeText(value, eat, parent)

  return add(parent)
})

// Create a `SentenceNode` with its children set to `Node`s, their values set
// to the tokenized given `value`.
//
// Unless plugins add new nodes, the sentence is populated by `WordNode`s,
// `SymbolNode`s, `PunctuationNode`s, and `WhiteSpaceNode`s.
pluggable(
  lib_ParseLatin,
  'tokenizeSentence',
  parserFactory({type: 'SentenceNode', tokenizer: 'tokenize'})
)

// Create a `ParagraphNode` with its children set to `Node`s, their values set
// to the tokenized given `value`.
//
// Unless plugins add new nodes, the paragraph is populated by `SentenceNode`s
// and `WhiteSpaceNode`s.
pluggable(
  lib_ParseLatin,
  'tokenizeParagraph',
  parserFactory({
    type: 'ParagraphNode',
    delimiter: terminalMarker,
    delimiterType: 'PunctuationNode',
    tokenizer: 'tokenizeSentence'
  })
)

// Create a `RootNode` with its children set to `Node`s, their values set to the
// tokenized given `value`.
pluggable(
  lib_ParseLatin,
  'tokenizeRoot',
  parserFactory({
    type: 'RootNode',
    delimiter: newLine,
    delimiterType: 'WhiteSpaceNode',
    tokenizer: 'tokenizeParagraph'
  })
)

// PLUGINS

lib_ParseLatin.prototype.use('tokenizeSentence', [
  mergeInitialWordSymbol,
  mergeFinalWordSymbol,
  mergeInnerWordSymbol,
  mergeInnerWordSlash,
  mergeInitialisms,
  mergeWords,
  patchPosition
])

lib_ParseLatin.prototype.use('tokenizeParagraph', [
  mergeNonWordSentences,
  mergeAffixSymbol,
  mergeInitialLowerCaseLetterSentences,
  mergeInitialDigitSentences,
  mergePrefixExceptions,
  mergeAffixExceptions,
  mergeRemainingFullStops,
  makeInitialWhiteSpaceSiblings,
  makeFinalWhiteSpaceSiblings,
  breakImplicitSentences,
  removeEmptyNodes,
  patchPosition
])

lib_ParseLatin.prototype.use('tokenizeRoot', [
  makeInitialWhiteSpaceSiblings,
  makeFinalWhiteSpaceSiblings,
  removeEmptyNodes,
  patchPosition
])

// TEXT NODES

// Factory to create a `Text`.
function createTextFactory(type) {
  type += 'Node'

  return createText

  // Construct a `Text` from a bound `type`
  function createText(value, eat, parent) {
    if (value === null || value === undefined) {
      value = ''
    }

    return (eat || noopEat)(value)({type, value: String(value)}, parent)
  }
}

// Make a method “pluggable”.
function pluggable(Constructor, key, callback) {
  // Set a pluggable version of `callback` on `Constructor`.
  Constructor.prototype[key] = function (...input) {
    return this.run(key, callback.apply(this, input))
  }
}

// Factory to inject `plugins`. Takes `callback` for the actual inserting.
function useFactory(callback) {
  return use

  // Validate if `plugins` can be inserted.
  // Invokes the bound `callback` to do the actual inserting.
  function use(key, plugins) {
    var wareKey

    // Throw if the method is not pluggable.
    if (!(key in this)) {
      throw new Error(
        'Illegal Invocation: Unsupported `key` for ' +
          '`use(key, plugins)`. Make sure `key` is a ' +
          'supported function'
      )
    }

    // Fail silently when no plugins are given.
    if (!plugins) {
      return
    }

    wareKey = key + 'Plugins'

    // Make sure `plugins` is a list.
    plugins = typeof plugins === 'function' ? [plugins] : plugins.concat()

    // Make sure `wareKey` exists.
    if (!this[wareKey]) {
      this[wareKey] = []
    }

    // Invoke callback with the ware key and plugins.
    callback(this, wareKey, plugins)
  }
}

// Add mechanism used when text-tokenisers are called directly outside of the
// `tokenize` function.
function noopAdd(node, parent) {
  if (parent) {
    parent.children.push(node)
  }

  return node
}

// Eat and add mechanism without adding positional information, used when
// text-tokenisers are called directly outside of the `tokenize` function.
function noopEat() {
  return noopAdd
}

;// CONCATENATED MODULE: ./node_modules/retext-latin/lib/index.js
/**
 * @typedef {import('nlcst').Root} Root
 */


// @ts-expect-error: untyped.


/** @type {import('unified').ParserClass<Root>} */
const Parser = (/* unused pure expression or super */ null && (ParseLatin))

/** @type {import('unified').Plugin<void[], string, Root>} */
function retextLatin() {
  Object.assign(this, {Parser: unherit(lib_ParseLatin)})
}

;// CONCATENATED MODULE: ./node_modules/retext-latin/index.js



/* harmony default export */ const retext_latin = (retextLatin);

;// CONCATENATED MODULE: ./node_modules/retext-stringify/node_modules/nlcst-to-string/index.js
/**
 * @typedef {import('nlcst').Content} Content
 * @typedef {import('nlcst').Root} Root
 */

/**
 * Stringify one nlcst node or list of nodes.
 *
 * @param {Root|Content|Content[]} node
 * @param {string} [separator='']
 * @returns {string}
 */
function nlcst_to_string_toString(node, separator = '') {
  let index = -1

  if (!node || (!Array.isArray(node) && !node.type)) {
    throw new Error('Expected node, not `' + node + '`')
  }

  // @ts-expect-error Looks like a literal.
  if (typeof node.value === 'string') return node.value

  /** @type {Array.<Content|Root>} */
  // @ts-expect-error Looks like a list of nodes or parent.
  const children = (Array.isArray(node) ? node : node.children) || []

  // Shortcut: This is pretty common, and a small performance win.
  if (children.length === 1 && 'value' in children[0]) {
    return children[0].value
  }

  /** @type {Array.<string>} */
  const values = []

  while (++index < children.length) {
    values[index] = nlcst_to_string_toString(children[index], separator)
  }

  return values.join(separator)
}

;// CONCATENATED MODULE: ./node_modules/retext-stringify/lib/index.js
/**
 * @typedef {import('nlcst').Root} Root
 */



/** @type {import('unified').Plugin<void[], Root, string>} */
function retextStringify() {
  Object.assign(this, {Compiler})
}

/** @type {import('unified').CompilerFunction<Root, string>} */
function Compiler(tree) {
  return nlcst_to_string_toString(tree)
}

;// CONCATENATED MODULE: ./node_modules/retext-stringify/index.js


/* harmony default export */ const retext_stringify = (retextStringify);

;// CONCATENATED MODULE: ./node_modules/retext/index.js




const retext = unified().use(retext_latin).use(retext_stringify).freeze()


/***/ }),

/***/ 993:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nccwpck_require__) => {

"use strict";
// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

// EXPORTS
__nccwpck_require__.d(__webpack_exports__, {
  "read": () => (/* reexport */ read),
  "readSync": () => (/* reexport */ readSync),
  "toVFile": () => (/* reexport */ toVFile),
  "write": () => (/* reexport */ write),
  "writeSync": () => (/* reexport */ writeSync)
});

// EXTERNAL MODULE: external "fs"
var external_fs_ = __nccwpck_require__(747);
// EXTERNAL MODULE: external "path"
var external_path_ = __nccwpck_require__(622);
// EXTERNAL MODULE: external "url"
var external_url_ = __nccwpck_require__(835);
// EXTERNAL MODULE: ./node_modules/is-buffer/index.js
var is_buffer = __nccwpck_require__(625);
// EXTERNAL MODULE: ./node_modules/vfile/lib/index.js + 3 modules
var lib = __nccwpck_require__(567);
;// CONCATENATED MODULE: ./node_modules/to-vfile/lib/index.js
/**
 * @typedef {import('vfile').VFileValue} Value
 * @typedef {import('vfile').VFileOptions} Options
 * @typedef {import('vfile').BufferEncoding} BufferEncoding
 *
 * @typedef {number|string} Mode
 * @typedef {BufferEncoding|{encoding?: null|BufferEncoding, flag?: string}} ReadOptions
 * @typedef {BufferEncoding|{encoding?: null|BufferEncoding, mode: Mode?, flag?: string}} WriteOptions
 *
 * @typedef {string|Uint8Array} Path Path of the file.
 * @typedef {Path|URL|Options|VFile} Compatible Things that can be
 *   passed to the function.
 */

/**
 * @callback Callback
 * @param {NodeJS.ErrnoException|null} error
 * @param {VFile|null} file
 */







/**
 * Create a virtual file from a description.
 * If `options` is a string or a buffer, it’s used as the path.
 * If it’s a VFile itself, it’s returned instead.
 * In all other cases, the options are passed through to `vfile()`.
 *
 * @param {Compatible} [options]
 * @returns {VFile}
 */
function toVFile(options) {
  if (typeof options === 'string' || options instanceof external_url_.URL) {
    options = {path: options}
  } else if (is_buffer(options)) {
    options = {path: String(options)}
  }

  return looksLikeAVFile(options) ? options : new lib/* VFile */.k(options)
}

/**
 * Create a virtual file and read it in, synchronously.
 *
 * @param {Compatible} description
 * @param {ReadOptions} [options]
 * @returns {VFile}
 */
function readSync(description, options) {
  const file = toVFile(description)
  file.value = external_fs_.readFileSync(external_path_.resolve(file.cwd, file.path), options)
  return file
}

/**
 * Create a virtual file and write it in, synchronously.
 *
 * @param {Compatible} description
 * @param {WriteOptions} [options]
 * @returns {VFile}
 */
function writeSync(description, options) {
  const file = toVFile(description)
  external_fs_.writeFileSync(external_path_.resolve(file.cwd, file.path), file.value || '', options)
  return file
}

const read =
  /**
   * @type {{
   *   (description: Compatible, options: ReadOptions, callback: Callback): void
   *   (description: Compatible, callback: Callback): void
   *   (description: Compatible, options?: ReadOptions): Promise<VFile>
   * }}
   */
  (
    /**
     * Create a virtual file and read it in, asynchronously.
     *
     * @param {Compatible} description
     * @param {ReadOptions} [options]
     * @param {Callback} [callback]
     */
    function (description, options, callback) {
      const file = toVFile(description)

      if (!callback && typeof options === 'function') {
        callback = options
        options = null
      }

      if (!callback) {
        return new Promise(executor)
      }

      executor(resolve, callback)

      /**
       * @param {VFile} result
       */
      function resolve(result) {
        callback(null, result)
      }

      /**
       * @param {(x: VFile) => void} resolve
       * @param {(x: Error, y?: VFile) => void} reject
       */
      function executor(resolve, reject) {
        /** @type {string} */
        let fp

        try {
          fp = external_path_.resolve(file.cwd, file.path)
        } catch (error) {
          return reject(error)
        }

        external_fs_.readFile(fp, options, done)

        /**
         * @param {Error} error
         * @param {Value} result
         */
        function done(error, result) {
          if (error) {
            reject(error)
          } else {
            file.value = result
            resolve(file)
          }
        }
      }
    }
  )

const write =
  /**
   * @type {{
   *   (description: Compatible, options: WriteOptions, callback: Callback): void
   *   (description: Compatible, callback: Callback): void
   *   (description: Compatible, options?: WriteOptions): Promise<VFile>
   * }}
   */
  (
    /**
     * Create a virtual file and write it in, asynchronously.
     *
     * @param {Compatible} description
     * @param {WriteOptions} [options]
     * @param {Callback} [callback]
     */
    function (description, options, callback) {
      const file = toVFile(description)

      // Weird, right? Otherwise `fs` doesn’t accept it.
      if (!callback && typeof options === 'function') {
        callback = options
        options = undefined
      }

      if (!callback) {
        return new Promise(executor)
      }

      executor(resolve, callback)

      /**
       * @param {VFile} result
       */
      function resolve(result) {
        callback(null, result)
      }

      /**
       * @param {(x: VFile) => void} resolve
       * @param {(x: Error, y?: VFile) => void} reject
       */
      function executor(resolve, reject) {
        /** @type {string} */
        let fp

        try {
          fp = external_path_.resolve(file.cwd, file.path)
        } catch (error) {
          return reject(error)
        }

        external_fs_.writeFile(fp, file.value || '', options, done)

        /**
         * @param {Error} error
         */
        function done(error) {
          if (error) {
            reject(error)
          } else {
            resolve(file)
          }
        }
      }
    }
  )

/**
 * @param {Compatible} value
 * @returns {value is VFile}
 */
function looksLikeAVFile(value) {
  return (
    value &&
    typeof value === 'object' &&
    'message' in value &&
    'messages' in value
  )
}

toVFile.readSync = readSync
toVFile.writeSync = writeSync
toVFile.read = read
toVFile.write = write

;// CONCATENATED MODULE: ./node_modules/to-vfile/index.js
/**
 * @typedef {import('./lib/index.js').Compatible} Compatible
 * @typedef {import('./lib/index.js').Callback} Callback
 * @typedef {import('./lib/index.js').BufferEncoding} BufferEncoding
 * @typedef {import('./lib/index.js').Mode} Mode
 * @typedef {import('./lib/index.js').ReadOptions} ReadOptions
 * @typedef {import('./lib/index.js').WriteOptions} WriteOptions
 */




/***/ }),

/***/ 364:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var convert = __nccwpck_require__(70)

module.exports = findAfter

function findAfter(parent, index, test) {
  var is = convert(test)
  var children
  var child
  var length

  if (!parent || !parent.type || !parent.children) {
    throw new Error('Expected parent node')
  }

  children = parent.children
  length = children.length

  if (index && index.type) {
    index = children.indexOf(index)
  }

  if (isNaN(index) || index < 0 || index === Infinity) {
    throw new Error('Expected positive finite index or child node')
  }

  while (++index < length) {
    child = children[index]

    if (is(child, index, parent)) {
      return child
    }
  }

  return null
}


/***/ }),

/***/ 235:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var convert = __nccwpck_require__(668)

module.exports = findBefore

function findBefore(parent, index, test) {
  var is = convert(test)
  var children
  var child

  if (!parent || !parent.type || !parent.children) {
    throw new Error('Expected parent node')
  }

  children = parent.children

  if (index && index.type) {
    index = children.indexOf(index)
  }

  if (isNaN(index) || index < 0 || index === Infinity) {
    throw new Error('Expected positive finite index or child node')
  }

  // Performance.
  if (index > children.length) {
    index = children.length
  }

  while (index--) {
    child = children[index]

    if (is(child, index, parent)) {
      return child
    }
  }

  return null
}


/***/ }),

/***/ 668:
/***/ ((module) => {

"use strict";


module.exports = convert

function convert(test) {
  if (test == null) {
    return ok
  }

  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (typeof test === 'object') {
    return 'length' in test ? anyFactory(test) : allFactory(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

// Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.
function allFactory(test) {
  return all

  function all(node) {
    var key

    for (key in test) {
      if (node[key] !== test[key]) return false
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = []
  var index = -1

  while (++index < tests.length) {
    checks[index] = convert(tests[index])
  }

  return any

  function any() {
    var index = -1

    while (++index < checks.length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

// Utility to convert a string into a function which checks a given node’s type
// for said string.
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

// Utility to return true.
function ok() {
  return true
}


/***/ }),

/***/ 70:
/***/ ((module) => {

"use strict";


module.exports = convert

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (test === null || test === undefined) {
    return ok
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

function convertAll(tests) {
  var results = []
  var length = tests.length
  var index = -1

  while (++index < length) {
    results[index] = convert(tests[index])
  }

  return results
}

// Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.
function matchesFactory(test) {
  return matches

  function matches(node) {
    var key

    for (key in test) {
      if (node[key] !== test[key]) {
        return false
      }
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests)
  var length = checks.length

  return matches

  function matches() {
    var index = -1

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

// Utility to convert a string into a function which checks a given node’s type
// for said string.
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

// Utility to return true.
function ok() {
  return true
}


/***/ }),

/***/ 670:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var iterate = __nccwpck_require__(122)

module.exports = modifierFactory

// Turn `callback` into a child-modifier accepting a parent.  See
// `array-iterate` for more info.
function modifierFactory(callback) {
  return iteratorFactory(wrapperFactory(callback))
}

// Turn `callback` into a `iterator' accepting a parent.
function iteratorFactory(callback) {
  return iterator

  function iterator(parent) {
    var children = parent && parent.children

    if (!children) {
      throw new Error('Missing children in `parent` for `modifier`')
    }

    iterate(children, callback, parent)
  }
}

// Pass the context as the third argument to `callback`.
function wrapperFactory(callback) {
  return wrapper

  function wrapper(value, index) {
    return callback(value, index, this)
  }
}


/***/ }),

/***/ 133:
/***/ ((module) => {

"use strict";


var start = factory('start')
var end = factory('end')

module.exports = position

position.start = start
position.end = end

function position(node) {
  return {start: start(node), end: end(node)}
}

function factory(type) {
  point.displayName = type

  return point

  function point(node) {
    var point = (node && node.position && node.position[type]) || {}

    return {
      line: point.line || null,
      column: point.column || null,
      offset: isNaN(point.offset) ? null : point.offset
    }
  }
}


/***/ }),

/***/ 957:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nccwpck_require__) => {

"use strict";
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ stringifyPosition)
/* harmony export */ });
var own = {}.hasOwnProperty

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 */

/**
 * Stringify one point, a position (start and end points), or a node’s
 * positional information.
 *
 * @param {Node|Position|Point} [value]
 * @returns {string}
 */
function stringifyPosition(value) {
  // Nothing.
  if (!value || typeof value !== 'object') {
    return ''
  }

  // Node.
  if (own.call(value, 'position') || own.call(value, 'type')) {
    // @ts-ignore looks like a node.
    return position(value.position)
  }

  // Position.
  if (own.call(value, 'start') || own.call(value, 'end')) {
    // @ts-ignore looks like a position.
    return position(value)
  }

  // Point.
  if (own.call(value, 'line') || own.call(value, 'column')) {
    // @ts-ignore looks like a point.
    return point(value)
  }

  // ?
  return ''
}

/**
 * @param {Point} point
 * @returns {string}
 */
function point(point) {
  return index(point && point.line) + ':' + index(point && point.column)
}

/**
 * @param {Position} pos
 * @returns {string}
 */
function position(pos) {
  return point(pos && pos.start) + '-' + point(pos && pos.end)
}

/**
 * @param {number} value
 * @returns {number}
 */
function index(value) {
  return value && typeof value === 'number' ? value : 1
}


/***/ }),

/***/ 104:
/***/ ((module) => {

"use strict";


module.exports = visitChildren

function visitChildren(callback) {
  return visitor

  // Visit `parent`, invoking `callback` for each child.
  function visitor(parent) {
    var index = -1
    var children = parent && parent.children

    if (!children) {
      throw new Error('Missing children in `parent` for `visitor`')
    }

    while (++index in children) {
      callback(children[index], index, parent)
    }
  }
}


/***/ }),

/***/ 246:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


module.exports = visitParents

var convert = __nccwpck_require__(70)

var CONTINUE = true
var SKIP = 'skip'
var EXIT = false

visitParents.CONTINUE = CONTINUE
visitParents.SKIP = SKIP
visitParents.EXIT = EXIT

function visitParents(tree, test, visitor, reverse) {
  var is

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  is = convert(test)

  one(tree, null, [])

  // Visit a single node.
  function one(node, index, parents) {
    var result = []
    var subresult

    if (!test || is(node, index, parents[parents.length - 1] || null)) {
      result = toResult(visitor(node, parents))

      if (result[0] === EXIT) {
        return result
      }
    }

    if (node.children && result[0] !== SKIP) {
      subresult = toResult(all(node.children, parents.concat(node)))
      return subresult[0] === EXIT ? subresult : result
    }

    return result
  }

  // Visit children in `parent`.
  function all(children, parents) {
    var min = -1
    var step = reverse ? -1 : 1
    var index = (reverse ? children.length : min) + step
    var result

    while (index > min && index < children.length) {
      result = one(children[index], index, parents)

      if (result[0] === EXIT) {
        return result
      }

      index = typeof result[1] === 'number' ? result[1] : index + step
    }
  }
}

function toResult(value) {
  if (value !== null && typeof value === 'object' && 'length' in value) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE, value]
  }

  return [value]
}


/***/ }),

/***/ 199:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


module.exports = visit

var visitParents = __nccwpck_require__(246)

var CONTINUE = visitParents.CONTINUE
var SKIP = visitParents.SKIP
var EXIT = visitParents.EXIT

visit.CONTINUE = CONTINUE
visit.SKIP = SKIP
visit.EXIT = EXIT

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  visitParents(tree, test, overload, reverse)

  function overload(node, parents) {
    var parent = parents[parents.length - 1]
    var index = parent ? parent.children.indexOf(node) : null
    return visitor(node, index, parent)
  }
}


/***/ }),

/***/ 836:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nccwpck_require__) => {

"use strict";
// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

// EXPORTS
__nccwpck_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ vfile_reporter),
  "reporter": () => (/* binding */ reporter)
});

// EXTERNAL MODULE: external "process"
var external_process_ = __nccwpck_require__(765);
// EXTERNAL MODULE: external "os"
var external_os_ = __nccwpck_require__(87);
;// CONCATENATED MODULE: external "tty"
const external_tty_namespaceObject = require("tty");
;// CONCATENATED MODULE: ./node_modules/vfile-reporter/node_modules/has-flag/index.js
 // eslint-disable-line node/prefer-global/process

function hasFlag(flag, argv = external_process_.argv) {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}

;// CONCATENATED MODULE: ./node_modules/vfile-reporter/node_modules/supports-color/index.js
 // eslint-disable-line node/prefer-global/process




const {env} = external_process_;

let flagForceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	flagForceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	flagForceColor = 1;
}

function envForceColor() {
	if ('FORCE_COLOR' in env) {
		if (env.FORCE_COLOR === 'true') {
			return 1;
		}

		if (env.FORCE_COLOR === 'false') {
			return 0;
		}

		return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function _supportsColor(haveStream, {streamIsTTY, sniffFlags = true} = {}) {
	const noFlagForceColor = envForceColor();
	if (noFlagForceColor !== undefined) {
		flagForceColor = noFlagForceColor;
	}

	const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;

	if (forceColor === 0) {
		return 0;
	}

	if (sniffFlags) {
		if (hasFlag('color=16m') ||
			hasFlag('color=full') ||
			hasFlag('color=truecolor')) {
			return 3;
		}

		if (hasFlag('color=256')) {
			return 2;
		}
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (external_process_.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = external_os_.release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE', 'DRONE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = Number.parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function createSupportsColor(stream, options = {}) {
	const level = _supportsColor(stream, {
		streamIsTTY: stream && stream.isTTY,
		...options
	});

	return translateLevel(level);
}

const supportsColor = {
	stdout: createSupportsColor({isTTY: external_tty_namespaceObject.isatty(1)}),
	stderr: createSupportsColor({isTTY: external_tty_namespaceObject.isatty(2)})
};

/* harmony default export */ const supports_color = (supportsColor);

;// CONCATENATED MODULE: ./node_modules/vfile-reporter/node_modules/ansi-regex/index.js
function ansiRegex({onlyFirst = false} = {}) {
	const pattern = [
		'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
	].join('|');

	return new RegExp(pattern, onlyFirst ? undefined : 'g');
}

;// CONCATENATED MODULE: ./node_modules/vfile-reporter/node_modules/strip-ansi/index.js


function stripAnsi(string) {
	if (typeof string !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
	}

	return string.replace(ansiRegex(), '');
}

;// CONCATENATED MODULE: ./node_modules/vfile-reporter/node_modules/is-fullwidth-code-point/index.js
/* eslint-disable yoda */

function isFullwidthCodePoint(codePoint) {
	if (!Number.isInteger(codePoint)) {
		return false;
	}

	// Code points are derived from:
	// https://unicode.org/Public/UNIDATA/EastAsianWidth.txt
	return codePoint >= 0x1100 && (
		codePoint <= 0x115F || // Hangul Jamo
		codePoint === 0x2329 || // LEFT-POINTING ANGLE BRACKET
		codePoint === 0x232A || // RIGHT-POINTING ANGLE BRACKET
		// CJK Radicals Supplement .. Enclosed CJK Letters and Months
		(0x2E80 <= codePoint && codePoint <= 0x3247 && codePoint !== 0x303F) ||
		// Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
		(0x3250 <= codePoint && codePoint <= 0x4DBF) ||
		// CJK Unified Ideographs .. Yi Radicals
		(0x4E00 <= codePoint && codePoint <= 0xA4C6) ||
		// Hangul Jamo Extended-A
		(0xA960 <= codePoint && codePoint <= 0xA97C) ||
		// Hangul Syllables
		(0xAC00 <= codePoint && codePoint <= 0xD7A3) ||
		// CJK Compatibility Ideographs
		(0xF900 <= codePoint && codePoint <= 0xFAFF) ||
		// Vertical Forms
		(0xFE10 <= codePoint && codePoint <= 0xFE19) ||
		// CJK Compatibility Forms .. Small Form Variants
		(0xFE30 <= codePoint && codePoint <= 0xFE6B) ||
		// Halfwidth and Fullwidth Forms
		(0xFF01 <= codePoint && codePoint <= 0xFF60) ||
		(0xFFE0 <= codePoint && codePoint <= 0xFFE6) ||
		// Kana Supplement
		(0x1B000 <= codePoint && codePoint <= 0x1B001) ||
		// Enclosed Ideographic Supplement
		(0x1F200 <= codePoint && codePoint <= 0x1F251) ||
		// CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
		(0x20000 <= codePoint && codePoint <= 0x3FFFD)
	);
}

// EXTERNAL MODULE: ./node_modules/vfile-reporter/node_modules/emoji-regex/index.js
var emoji_regex = __nccwpck_require__(308);
;// CONCATENATED MODULE: ./node_modules/vfile-reporter/node_modules/string-width/index.js




function stringWidth(string) {
	if (typeof string !== 'string' || string.length === 0) {
		return 0;
	}

	string = stripAnsi(string);

	if (string.length === 0) {
		return 0;
	}

	string = string.replace(emoji_regex(), '  ');

	let width = 0;

	for (let index = 0; index < string.length; index++) {
		const codePoint = string.codePointAt(index);

		// Ignore control characters
		if (codePoint <= 0x1F || (codePoint >= 0x7F && codePoint <= 0x9F)) {
			continue;
		}

		// Ignore combining characters
		if (codePoint >= 0x300 && codePoint <= 0x36F) {
			continue;
		}

		// Surrogates
		if (codePoint > 0xFFFF) {
			index++;
		}

		width += isFullwidthCodePoint(codePoint) ? 2 : 1;
	}

	return width;
}

// EXTERNAL MODULE: ./node_modules/unist-util-stringify-position/index.js
var unist_util_stringify_position = __nccwpck_require__(957);
;// CONCATENATED MODULE: ./node_modules/vfile-statistics/index.js
/**
 * @typedef {import('vfile').VFile} VFile
 * @typedef {import('vfile-message').VFileMessage} VFileMessage
 *
 * @typedef Statistics
 * @property {number} fatal Fatal errors (`fatal: true`)
 * @property {number} warn warning errors (`fatal: false`)
 * @property {number} info informational messages (`fatal: null|undefined`)
 * @property {number} nonfatal warning + info
 * @property {number} total nonfatal + fatal
 */

/**
 * Get stats for a file, list of files, or list of messages.
 *
 * @param {Array.<VFile|VFileMessage>|VFile|VFileMessage} [value]
 * @returns {Statistics}
 */
function statistics(value) {
  var result = {true: 0, false: 0, null: 0}

  if (value) {
    if (Array.isArray(value)) {
      list(value)
    } else {
      one(value)
    }
  }

  return {
    fatal: result.true,
    nonfatal: result.false + result.null,
    warn: result.false,
    info: result.null,
    total: result.true + result.false + result.null
  }

  /**
   * @param {Array.<VFile|VFileMessage>} value
   * @returns {void}
   */
  function list(value) {
    var index = -1

    while (++index < value.length) {
      one(value[index])
    }
  }

  /**
   * @param {VFile|VFileMessage} value
   * @returns {void}
   */
  function one(value) {
    if ('messages' in value) return list(value.messages)

    result[
      value.fatal === undefined || value.fatal === null
        ? null
        : Boolean(value.fatal)
    ]++
  }
}

;// CONCATENATED MODULE: ./node_modules/vfile-sort/index.js
/**
 * @typedef {import('vfile').VFile} VFile
 * @typedef {import('vfile-message').VFileMessage} VFileMessage
 */

var severities = {true: 2, false: 1, null: 0, undefined: 0}

/**
 * @template {VFile} F
 * @param {F} file
 * @returns {F}
 */
function sort(file) {
  file.messages.sort(comparator)
  return file
}

/**
 * @param {VFileMessage} a
 * @param {VFileMessage} b
 * @returns {number}
 */
function comparator(a, b) {
  return (
    check(a, b, 'line') ||
    check(a, b, 'column') ||
    severities[b.fatal] - severities[a.fatal] ||
    compare(a, b, 'source') ||
    compare(a, b, 'ruleId') ||
    compare(a, b, 'reason') ||
    0
  )
}

/**
 * @param {VFileMessage} a
 * @param {VFileMessage} b
 * @param {string} property
 * @returns {number}
 */
function check(a, b, property) {
  return (a[property] || 0) - (b[property] || 0)
}

/**
 * @param {VFileMessage} a
 * @param {VFileMessage} b
 * @param {string} property
 * @returns {number}
 */
function compare(a, b, property) {
  return String(a[property] || '').localeCompare(b[property] || '')
}

;// CONCATENATED MODULE: ./node_modules/vfile-reporter/index.js
/**
 * @typedef {import('vfile').VFile} VFile
 * @typedef {import('vfile-message').VFileMessage} VFileMessage
 * @typedef {import('vfile-statistics').Statistics} Statistics
 *
 * @typedef Options
 * @property {boolean} [color]
 * @property {boolean} [silent=false]
 * @property {boolean} [quiet=false]
 * @property {boolean} [verbose=false]
 * @property {string} [defaultName='<stdin>']
 *
 * @typedef _Row
 * @property {string} place
 * @property {string} label
 * @property {string} reason
 * @property {string} ruleId
 * @property {string} source
 *
 * @typedef _FileRow
 * @property {'file'} type
 * @property {VFile} file
 * @property {Statistics} stats
 *
 * @typedef {{[x: string]: number}} _Sizes
 *
 * @typedef _Info
 * @property {Array.<_FileRow|_Row>} rows
 * @property {Statistics} stats
 * @property {_Sizes} sizes
 */







const own = {}.hasOwnProperty

// @ts-expect-error Types are incorrect.
const supported = supports_color.stderr.hasBasic

// `log-symbols` without chalk, ignored for Windows:
/* c8 ignore next 4 */
const chars =
  process.platform === 'win32'
    ? {error: '×', warning: '‼'}
    : {error: '✖', warning: '⚠'}

const labels = {
  true: 'error',
  false: 'warning',
  null: 'info',
  undefined: 'info'
}

/* harmony default export */ const vfile_reporter = (reporter);

/**
 * Report a file’s messages.
 *
 * @param {Error|VFile|Array.<VFile>} [files]
 * @param {Options} [options]
 * @returns {string}
 */
function reporter(files, options = {}) {
  /** @type {boolean|undefined} */
  let one

  if (!files) {
    return ''
  }

  // Error.
  if ('name' in files && 'message' in files) {
    return String(files.stack || files)
  }

  // One file.
  if (!Array.isArray(files)) {
    one = true
    files = [files]
  }

  return format(transform(files, options), one, options)
}

/**
 * @param {Array.<VFile>} files
 * @param {Options} options
 * @returns {_Info}
 */
function transform(files, options) {
  /** @type {Array.<_FileRow|_Row>} */
  const rows = []
  /** @type {Array.<VFileMessage>} */
  const all = []
  /** @type {_Sizes} */
  const sizes = {}
  let index = -1

  while (++index < files.length) {
    // @ts-expect-error it works fine.
    const messages = sort({messages: [...files[index].messages]}).messages
    /** @type {Array.<_Row>} */
    const messageRows = []
    let offset = -1

    while (++offset < messages.length) {
      const message = messages[offset]

      if (!options.silent || message.fatal) {
        all.push(message)

        const row = {
          place: (0,unist_util_stringify_position/* stringifyPosition */.y)(
            message.position
              ? message.position.end.line && message.position.end.column
                ? message.position
                : message.position.start
              : undefined
          ),
          label: labels[/** @type {keyof labels} */ (String(message.fatal))],
          reason:
            (message.stack || message.message) +
            (options.verbose && message.note ? '\n' + message.note : ''),
          ruleId: message.ruleId || '',
          source: message.source || ''
        }

        /** @type {keyof row} */
        let key

        for (key in row) {
          // eslint-disable-next-line max-depth
          if (own.call(row, key)) {
            sizes[key] = Math.max(size(row[key]), sizes[key] || 0)
          }
        }

        messageRows.push(row)
      }
    }

    if ((!options.quiet && !options.silent) || messageRows.length > 0) {
      rows.push(
        {type: 'file', file: files[index], stats: statistics(messages)},
        ...messageRows
      )
    }
  }

  return {rows, stats: statistics(all), sizes}
}

/**
 * @param {_Info} map
 * @param {boolean|undefined} one
 * @param {Options} options
 */
// eslint-disable-next-line complexity
function format(map, one, options) {
  /** @type {boolean} */
  const enabled =
    options.color === undefined || options.color === null
      ? supported
      : options.color
  /** @type {Array.<string>} */
  const lines = []
  let index = -1

  while (++index < map.rows.length) {
    const row = map.rows[index]

    if ('type' in row) {
      const stats = row.stats
      let line = row.file.history[0] || options.defaultName || '<stdin>'

      line =
        one && !options.defaultName && !row.file.history[0]
          ? ''
          : (enabled
              ? '\u001B[4m' /* Underline. */ +
                (stats.fatal
                  ? '\u001B[31m' /* Red. */
                  : stats.total
                  ? '\u001B[33m' /* Yellow. */
                  : '\u001B[32m') /* Green. */ +
                line +
                '\u001B[39m\u001B[24m'
              : line) +
            (row.file.stored && row.file.path !== row.file.history[0]
              ? ' > ' + row.file.path
              : '')

      if (!stats.total) {
        line =
          (line ? line + ': ' : '') +
          (row.file.stored
            ? enabled
              ? '\u001B[33mwritten\u001B[39m' /* Yellow. */
              : 'written'
            : 'no issues found')
      }

      if (line) {
        if (index && !('type' in map.rows[index - 1])) {
          lines.push('')
        }

        lines.push(line)
      }
    } else {
      let reason = row.reason
      const match = /\r?\n|\r/.exec(reason)
      /** @type {string} */
      let rest

      if (match) {
        rest = reason.slice(match.index)
        reason = reason.slice(0, match.index)
      } else {
        rest = ''
      }

      lines.push(
        (
          '  ' +
          ' '.repeat(map.sizes.place - size(row.place)) +
          row.place +
          '  ' +
          (enabled
            ? (row.label === 'error'
                ? '\u001B[31m' /* Red. */
                : '\u001B[33m') /* Yellow. */ +
              row.label +
              '\u001B[39m'
            : row.label) +
          ' '.repeat(map.sizes.label - size(row.label)) +
          '  ' +
          reason +
          ' '.repeat(map.sizes.reason - size(reason)) +
          '  ' +
          row.ruleId +
          ' '.repeat(map.sizes.ruleId - size(row.ruleId)) +
          '  ' +
          (row.source || '')
        ).replace(/ +$/, '') + rest
      )
    }
  }

  const stats = map.stats

  if (stats.fatal || stats.warn) {
    let line = ''

    if (stats.fatal) {
      line =
        (enabled
          ? '\u001B[31m' /* Red. */ + chars.error + '\u001B[39m'
          : chars.error) +
        ' ' +
        stats.fatal +
        ' ' +
        (labels.true + (stats.fatal === 1 ? '' : 's'))
    }

    if (stats.warn) {
      line =
        (line ? line + ', ' : '') +
        (enabled
          ? '\u001B[33m' /* Yellow. */ + chars.warning + '\u001B[39m'
          : chars.warning) +
        ' ' +
        stats.warn +
        ' ' +
        (labels.false + (stats.warn === 1 ? '' : 's'))
    }

    if (stats.total !== stats.fatal && stats.total !== stats.warn) {
      line = stats.total + ' messages (' + line + ')'
    }

    lines.push('', line)
  }

  return lines.join('\n')
}

/**
 * Get the length of `value`, ignoring ANSI sequences.
 *
 * @param {string} value
 * @returns {number}
 */
function size(value) {
  const match = /\r?\n|\r/.exec(value)
  return stringWidth(match ? value.slice(0, match.index) : value)
}


/***/ }),

/***/ 308:
/***/ ((module) => {

"use strict";


module.exports = function () {
  // https://mths.be/emoji
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};


/***/ }),

/***/ 567:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nccwpck_require__) => {

"use strict";

// EXPORTS
__nccwpck_require__.d(__webpack_exports__, {
  "k": () => (/* binding */ VFile)
});

// EXTERNAL MODULE: ./node_modules/is-buffer/index.js
var is_buffer = __nccwpck_require__(625);
// EXTERNAL MODULE: ./node_modules/unist-util-stringify-position/index.js
var unist_util_stringify_position = __nccwpck_require__(957);
;// CONCATENATED MODULE: ./node_modules/vfile-message/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 */



class VFileMessage extends Error {
  /**
   * Constructor of a message for `reason` at `place` from `origin`.
   * When an error is passed in as `reason`, copies the `stack`.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   */
  constructor(reason, place, origin) {
    /** @type {[string?, string?]} */
    var parts = [null, null]
    /** @type {Position} */
    var position = {
      start: {line: null, column: null},
      end: {line: null, column: null}
    }
    /** @type {number} */
    var index

    super()

    if (typeof place === 'string') {
      origin = place
      place = null
    }

    if (typeof origin === 'string') {
      index = origin.indexOf(':')

      if (index === -1) {
        parts[1] = origin
      } else {
        parts[0] = origin.slice(0, index)
        parts[1] = origin.slice(index + 1)
      }
    }

    if (place) {
      // Node.
      if ('type' in place || 'position' in place) {
        if (place.position) {
          position = place.position
        }
      }
      // Position.
      else if ('start' in place || 'end' in place) {
        // @ts-ignore Looks like a position.
        position = place
      }
      // Point.
      else if ('line' in place || 'column' in place) {
        // @ts-ignore Looks like a point.
        position.start = place
      }
    }

    // Fields from `Error`
    this.name = (0,unist_util_stringify_position/* stringifyPosition */.y)(place) || '1:1'
    this.message = typeof reason === 'object' ? reason.message : reason
    this.stack = typeof reason === 'object' ? reason.stack : ''

    /**
     * Reason for message.
     * @type {string}
     */
    this.reason = this.message
    /**
     * Starting line of error.
     * @type {number?}
     */
    this.line = position.start.line
    /**
     * Starting column of error.
     * @type {number?}
     */
    this.column = position.start.column
    /**
     * Namespace of warning.
     * @type {string?}
     */
    this.source = parts[0]
    /**
     * Category of message.
     * @type {string?}
     */
    this.ruleId = parts[1]
    /**
     * Full range information, when available.
     * Has start and end properties, both set to an object with line and column, set to number?.
     * @type {Position?}
     */
    this.position = position

    // The following fields are “well known”.
    // Not standard.
    // Feel free to add other non-standard fields to your messages.

    /* eslint-disable no-unused-expressions */
    /**
     * You may add a file property with a path of a file (used throughout the VFile ecosystem).
     * @type {string?}
     */
    this.file
    /**
     * If true, marks associated file as no longer processable.
     * @type {boolean?}
     */
    this.fatal
    /**
     * You may add a url property with a link to documentation for the message.
     * @type {string?}
     */
    this.url
    /**
     * You may add a note property with a long form description of the message (supported by vfile-reporter).
     * @type {string?}
     */
    this.note
    /* eslint-enable no-unused-expressions */
  }
}

VFileMessage.prototype.file = ''
VFileMessage.prototype.name = ''
VFileMessage.prototype.reason = ''
VFileMessage.prototype.message = ''
VFileMessage.prototype.stack = ''
VFileMessage.prototype.fatal = null
VFileMessage.prototype.column = null
VFileMessage.prototype.line = null
VFileMessage.prototype.source = null
VFileMessage.prototype.ruleId = null
VFileMessage.prototype.position = null

// EXTERNAL MODULE: external "path"
var external_path_ = __nccwpck_require__(622);
// EXTERNAL MODULE: external "process"
var external_process_ = __nccwpck_require__(765);
;// CONCATENATED MODULE: ./node_modules/vfile/lib/minproc.js


const proc = external_process_

;// CONCATENATED MODULE: ./node_modules/vfile/lib/minurl.shared.js
/**
 * @typedef URL
 * @property {string} hash
 * @property {string} host
 * @property {string} hostname
 * @property {string} href
 * @property {string} origin
 * @property {string} password
 * @property {string} pathname
 * @property {string} port
 * @property {string} protocol
 * @property {string} search
 * @property {any} searchParams
 * @property {string} username
 * @property {() => string} toString
 * @property {() => string} toJSON
 */

/**
 * @param {unknown} fileURLOrPath
 * @returns {fileURLOrPath is URL}
 */
// From: <https://github.com/nodejs/node/blob/fcf8ba4/lib/internal/url.js#L1501>
function isUrl(fileURLOrPath) {
  return (
    fileURLOrPath !== null &&
    typeof fileURLOrPath === 'object' &&
    // @ts-expect-error: indexable.
    fileURLOrPath.href &&
    // @ts-expect-error: indexable.
    fileURLOrPath.origin
  )
}

// EXTERNAL MODULE: external "url"
var external_url_ = __nccwpck_require__(835);
;// CONCATENATED MODULE: ./node_modules/vfile/lib/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 * @typedef {import('./minurl.shared.js').URL} URL
 *
 * @typedef {'ascii'|'utf8'|'utf-8'|'utf16le'|'ucs2'|'ucs-2'|'base64'|'latin1'|'binary'|'hex'} BufferEncoding
 *   Encodings supported by the buffer class.
 *   This is a copy of the typing from Node, copied to prevent Node globals from
 *   being needed.
 *   Copied from: <https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a2bc1d8/types/node/globals.d.ts#L174>
 *
 * @typedef {string|Uint8Array} VFileValue
 *   Contents of the file.
 *   Can either be text, or a Buffer like structure.
 *   This does not directly use type `Buffer`, because it can also be used in a
 *   browser context.
 *   Instead this leverages `Uint8Array` which is the base type for `Buffer`,
 *   and a native JavaScript construct.
 *
 * @typedef {VFileValue|VFileOptions|VFile|URL} VFileCompatible
 *   Things that can be passed to the constructor.
 *
 * @typedef VFileCoreOptions
 * @property {VFileValue} [value]
 * @property {string} [cwd]
 * @property {Array.<string>} [history]
 * @property {string|URL} [path]
 * @property {string} [basename]
 * @property {string} [stem]
 * @property {string} [extname]
 * @property {string} [dirname]
 * @property {Object.<string, unknown>} [data]
 *
 * @typedef {{[key: string]: unknown} & VFileCoreOptions} VFileOptions
 *   Configuration: a bunch of keys that will be shallow copied over to the new
 *   file.
 *
 * @typedef {Object.<string, unknown>} VFileReporterSettings
 * @typedef {<T = VFileReporterSettings>(files: VFile[], options: T) => string} VFileReporter
 */







// Order of setting (least specific to most), we need this because otherwise
// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
// stem can be set.
const order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname']

class VFile {
  /**
   * Create a new virtual file.
   *
   * If `options` is `string` or `Buffer`, treats it as `{value: options}`.
   * If `options` is a `VFile`, shallow copies its data over to the new file.
   * All other given fields are set on the newly created `VFile`.
   *
   * Path related properties are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * It’s not possible to set either `dirname` or `extname` without setting
   * either `history`, `path`, `basename`, or `stem` as well.
   *
   * @param {VFileCompatible} [value]
   */
  constructor(value) {
    /** @type {VFileOptions} */
    let options

    if (!value) {
      options = {}
    } else if (typeof value === 'string' || is_buffer(value)) {
      // @ts-expect-error Looks like a buffer.
      options = {value}
    } else if (isUrl(value)) {
      options = {path: value}
    } else {
      // @ts-expect-error Looks like file or options.
      options = value
    }

    /**
     * Place to store custom information.
     * It’s OK to store custom data directly on the file, moving it to `data`
     * gives a little more privacy.
     * @type {Object.<string, unknown>}
     */
    this.data = {}

    /**
     * List of messages associated with the file.
     * @type {Array.<VFileMessage>}
     */
    this.messages = []

    /**
     * List of file paths the file moved between.
     * @type {Array.<string>}
     */
    this.history = []

    /**
     * Base of `path`.
     * Defaults to `process.cwd()` (`/` in browsers).
     * @type {string}
     */
    this.cwd = proc.cwd()

    /* eslint-disable no-unused-expressions */
    /**
     * Raw value.
     * @type {VFileValue}
     */
    this.value

    // The below are non-standard, they are “well-known”.
    // As in, used in several tools.

    /**
     * Whether a file was saved to disk.
     * This is used by vfile reporters.
     * @type {boolean}
     */
    this.stored

    /**
     * Sometimes files have a non-string representation.
     * This can be stored in the `result` field.
     * One example is when turning markdown into React nodes.
     * This is used by unified to store non-string results.
     * @type {unknown}
     */
    this.result

    /**
     * Sometimes files have a source map associated with them.
     * This can be stored in the `map` field.
     * This should be a `RawSourceMap` type from the `source-map` module.
     * @type {unknown}
     */
    this.map
    /* eslint-enable no-unused-expressions */

    // Set path related properties in the correct order.
    let index = -1

    while (++index < order.length) {
      const prop = order[index]

      // Note: we specifically use `in` instead of `hasOwnProperty` to accept
      // `vfile`s too.
      if (prop in options && options[prop] !== undefined) {
        // @ts-expect-error: TS is confused by the different types for `history`.
        this[prop] = prop === 'history' ? [...options[prop]] : options[prop]
      }
    }

    /** @type {string} */
    let prop

    // Set non-path related properties.
    for (prop in options) {
      // @ts-expect-error: fine to set other things.
      if (!order.includes(prop)) this[prop] = options[prop]
    }
  }

  /**
   * Access full path (`~/index.min.js`).
   *
   * @returns {string}
   */
  get path() {
    return this.history[this.history.length - 1]
  }

  /**
   * Set full path (`~/index.min.js`).
   * Cannot be nullified.
   *
   * @param {string|URL} path
   */
  set path(path) {
    if (isUrl(path)) {
      path = (0,external_url_.fileURLToPath)(path)
    }

    assertNonEmpty(path, 'path')

    if (this.path !== path) {
      this.history.push(path)
    }
  }

  /**
   * Access parent path (`~`).
   */
  get dirname() {
    return typeof this.path === 'string' ? external_path_.dirname(this.path) : undefined
  }

  /**
   * Set parent path (`~`).
   * Cannot be set if there's no `path` yet.
   */
  set dirname(dirname) {
    assertPath(this.basename, 'dirname')
    this.path = external_path_.join(dirname || '', this.basename)
  }

  /**
   * Access basename (including extname) (`index.min.js`).
   */
  get basename() {
    return typeof this.path === 'string' ? external_path_.basename(this.path) : undefined
  }

  /**
   * Set basename (`index.min.js`).
   * Cannot contain path separators.
   * Cannot be nullified either (use `file.path = file.dirname` instead).
   */
  set basename(basename) {
    assertNonEmpty(basename, 'basename')
    assertPart(basename, 'basename')
    this.path = external_path_.join(this.dirname || '', basename)
  }

  /**
   * Access extname (including dot) (`.js`).
   */
  get extname() {
    return typeof this.path === 'string' ? external_path_.extname(this.path) : undefined
  }

  /**
   * Set extname (including dot) (`.js`).
   * Cannot be set if there's no `path` yet and cannot contain path separators.
   */
  set extname(extname) {
    assertPart(extname, 'extname')
    assertPath(this.dirname, 'extname')

    if (extname) {
      if (extname.charCodeAt(0) !== 46 /* `.` */) {
        throw new Error('`extname` must start with `.`')
      }

      if (extname.includes('.', 1)) {
        throw new Error('`extname` cannot contain multiple dots')
      }
    }

    this.path = external_path_.join(this.dirname, this.stem + (extname || ''))
  }

  /**
   * Access stem (w/o extname) (`index.min`).
   */
  get stem() {
    return typeof this.path === 'string'
      ? external_path_.basename(this.path, this.extname)
      : undefined
  }

  /**
   * Set stem (w/o extname) (`index.min`).
   * Cannot be nullified, and cannot contain path separators.
   */
  set stem(stem) {
    assertNonEmpty(stem, 'stem')
    assertPart(stem, 'stem')
    this.path = external_path_.join(this.dirname || '', stem + (this.extname || ''))
  }

  /**
   * Serialize the file.
   *
   * @param {BufferEncoding} [encoding='utf8'] If `file.value` is a buffer, `encoding` is used to serialize buffers.
   * @returns {string}
   */
  toString(encoding) {
    // @ts-expect-error string’s don’t accept the parameter, but buffers do.
    return (this.value || '').toString(encoding)
  }

  /**
   * Create a message and associates it w/ the file.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {VFileMessage}
   */
  message(reason, place, origin) {
    const message = new VFileMessage(reason, place, origin)

    if (this.path) {
      message.name = this.path + ':' + message.name
      message.file = this.path
    }

    message.fatal = false

    this.messages.push(message)

    return message
  }

  /**
   * Info: create a message, associate it with the file, and mark the fatality
   * as `null`.
   * Calls `message()` internally.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {VFileMessage}
   */
  info(reason, place, origin) {
    const message = this.message(reason, place, origin)

    message.fatal = null

    return message
  }

  /**
   * Fail: create a message, associate it with the file, mark the fatality as
   * `true`.
   * Note: fatal errors mean a file is no longer processable.
   * Calls `message()` internally.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {never}
   */
  fail(reason, place, origin) {
    const message = this.message(reason, place, origin)

    message.fatal = true

    throw message
  }
}

/**
 * Assert that `part` is not a path (as in, does not contain `path.sep`).
 *
 * @param {string|undefined} part
 * @param {string} name
 * @returns {void}
 */
function assertPart(part, name) {
  if (part && part.includes(external_path_.sep)) {
    throw new Error(
      '`' + name + '` cannot be a path: did not expect `' + external_path_.sep + '`'
    )
  }
}

/**
 * Assert that `part` is not empty.
 *
 * @param {string|undefined} part
 * @param {string} name
 * @returns {asserts part is string}
 */
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty')
  }
}

/**
 * Assert `path` exists.
 *
 * @param {string|undefined} path
 * @param {string} name
 * @returns {asserts path is string}
 */
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too')
  }
}


/***/ }),

/***/ 399:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"3-D":{"data":["Do not use."],"replace":["3D"]},"abort":{"data":["Do not use."],"replace":["stop","exit","cancel","end"]},"above":{"data":["OK to use except for printed documentation."],"replace":["preceding"]},"access (verb)":{"data":["Avoid when you can, in favor of other friendlier words."],"replace":["see","edit","find","use","view"]},"account name":{"data":["Do not use."],"replace":["username"]},"actionable":{"data":["Avoid unless it\'s the clearest and simplest phrasing for your audience. If not, then consider options such as leaving it out or replacing it with a phrase like \\"that you can act on\\" or \\"useful.\\" Don\'t use it in the legal sense without consulting a lawyer."],"replace":[""]},"action bar":{"data":["Do not use."],"replace":["app bar"]},"omnibox":{"data":["Use \'address bar\' to refer to the URL bar or the combined URL bar and search box in a browser. Don\'t use \\"omnibox.\\""],"replace":["address bar"]},"admin":{"data":["Do not use."],"replace":["administrator"]},"Ajax":{"data":["Our help site writes the term as \\"AJAX,\\" so that\'s how we currently write it in developer documentation as well."],"replace":["AJAX"]},"Alpha":{"data":["Lowercase except when part of a product name.  Recommended: Product Name Alpha OR Product Name is currently in alpha."],"replace":[""]},"among":{"data":["Use among when you\'re talking about things that are part of a group or things that aren\'t distinct. For example, Recommended:  ... a traditional SQL database that can be shared among multiple apps. OR You can share services among multiple clients."],"replace":[""]},"&":{"data":["In headings or text, don\'t use instead of \\"and\\"; however, it\'s OK to use in tables and UIs. And of course it\'s fine to use & for technical purposes in code."],"replace":[""]},"a.m.":{"data":["To be consistent with Material Design, use all-caps, no periods, and a space before. Recommended: 9:00 AM or 10:30 PM"],"replace":["AM"]},"p.m.":{"data":["To be consistent with Material Design, use all-caps, no periods, and a space before. Recommended: 9:00 AM or 10:30 PM"],"replace":["PM"]},"am":{"data":["To be consistent with Material Design, use all-caps, no periods, and a space before. Recommended: 9:00 AM or 10:30 PM"],"replace":["AM"]},"pm":{"data":["To be consistent with Material Design, use all-caps, no periods, and a space before. Recommended: 9:00 AM or 10:30 PM"],"replace":["PM"]},"and/or":{"data":["Sometimes \\"and/or\\" is the clearest and most efficient way to express something. It\'s worth considering whether there\'s a good way to write around it, but it\'s not worth rewriting so that the text is harder to understand."],"replace":[""]},"android":{"data":["Do not use."],"replace":["Android"]},"Android device":{"data":["Android-powered device; not \\"Android device\\""],"replace":["Android-powered device"]},"API":{"data":["Use \\"API\\" to refer to either a web API or a language-specific API. Don\'t use it when referring to a method or a class. For example, don\'t write \\"This resource has one API\\" when you mean \\"This resource has one method.\\""],"replace":[""]},"dev console":{"data":["API Console; not \\"APIs console\\" or \\"developer console\\" or \\"dev console\\". Short for \\"Google API Console.\\""],"replace":["API console"]},"developer console":{"data":["API Console; not \\"APIs console\\" or \\"developer console\\" or \\"dev console\\". Short for \\"Google API Console.\\""],"replace":["API console"]},"APIs console":{"data":["API Console; not \\"APIs console\\" or \\"developer console\\" or \\"dev console\\". Short for \\"Google API Console.\\""],"replace":["API console"]},"API Console key":{"data":["In most contexts, use \\"API key\\" instead of \\"API Console key.\\" In Apps admin APIs, however, it\'s okay to use \\"API Console key\\" to distinguish from other API keys."],"replace":["API key"]},"dev key":{"data":["API key; not \\"developer key\\" or \\"dev key\\""],"replace":["API key"]},"developer key":{"data":["API key; not \\"developer key\\" or \\"dev key\\""],"replace":["API key"]},"APIs":{"data":["Do not use."],"replace":["APIs"]},"API explorer":{"data":["APIs Explorer; not \\"API explorer\\" or other variants"],"replace":["APIs Explorer"]},".apk":{"data":["Do not use."],"replace":["APK"]},"application":{"data":["Don\'t use. Instead, use \\"app.\\" The industry trend is toward \\"app.\\" It\'s okay to use \\"application\\" where it is part of a common phrase such as \\"application programming interface,\\" but in general usage, \\"app\\" is preferable."],"replace":["app"]},"argument":{"data":["(command-line context)Don\'t use. Instead, use \\"option.\\""],"replace":["option"]},"authN":{"data":["Do not use."],"replace":["authentication"]},"authZ":{"data":["Do not use."],"replace":["authorization"]},"auto-healing":{"data":["autohealing; not \\"auto-healing\\""],"replace":[""]},"auto populate":{"data":["autopopulate; not \\"auto populate\\" or \\"auto-populate\\""],"replace":[""]},"auto-populate":{"data":["autopopulate; not \\"auto populate\\" or \\"auto-populate\\""],"replace":[""]},"auto-scaling":{"data":["autoscaling; not \\"auto-scaling\\""],"replace":[""]},"auto-tagging":{"data":["autotagging; not \\"auto-tagging\\""],"replace":[""]},"autoupdate":{"data":["Do not use."],"replace":["automatically update"]},"backwards compatible":{"data":["backward compatible; not \\"backwards compatible\\""],"replace":[""]},"below":{"data":["OK to use except for printed documentation, in which case use \\"following.\\""],"replace":[""]},"Beta":{"data":["Lowercase except when part of a product name. Recommended: Product Name Beta OR Product Name is currently in beta."],"replace":[""]},"between":{"data":["It\'s fine to use between when talking about more than two things; however, between isn\'t interchangeable with among. In particular, use between when you\'re talking about two or more distinct things: Recommended: JavaScript introduces dependencies between the DOM, the CSSOM, and JavaScript execution."],"replace":[""]},"cell phone":{"data":["Don\'t use. Instead, use \\"mobile\\" or \\"mobile phone\\" or (if you\'re talking about more than just phones) \\"mobile device.\\" Using \\"phone\\" (without \\"mobile\\") is fine when the context is clear."],"replace":["phone","mobile","mobile phone","mobile device"]},"cellular data":{"data":["Do not use."],"replace":["mobile data"]},"cellular network":{"data":["Do not use."],"replace":["mobile network"]},"chapter":{"data":["When referring to documentation that isn\'t in the form of a book, don\'t use the term \\"chapter.\\""],"replace":["documents","pages","sections"]},"check":{"data":["Don\'t use to refer to marking a checkbox. Instead, use \\"select.\\""],"replace":["select"]},"check box":{"data":["Do not use."],"replace":["checkbox"]},"CLI":{"data":["Don\'t use. Instead, use command-line tool or similar noun."],"replace":["command-line tool"]},"click on":{"data":["Use \\"click in\\" when referring to a region (\\"click in the window\\"), but not when referring to a control or a link. For Android apps, don\'t use \\"click\\". Instead, use \\"tap.\\""],"replace":["click in"]},"click here":{"data":["Don\'t use. Instead use the exact title of the linked-to page, capitalized the same way the title is capitalized. OR A description of the linked-to page, capitalized like ordinary text instead of like a title. Don\'t use a URL as link text. Instead, use the page title or a description of the page."],"replace":[""]},"client":{"data":["In REST and RPC API documentation, \\"client\\" is short for \\"client app\\"�that is, the app that the developer is writing. Don\'t use \\"client\\" as an abbreviation for \\"client library\\"; instead, use \\"library.\\""],"replace":[""]},"Cloud":{"data":["Don\'t use as short for Google Cloud Platform. Instead, use Google Cloud Platform on first use, and GCP thereafter."],"replace":["Google Cloud Platform","GCP"]},"Google Cloud Platform SDK":{"data":["Use \\"Cloud SDK\\" instead"],"replace":[""]},"code base":{"data":["Use \\"codebase\\" instead."],"replace":[""]},"code lab":{"data":["Use \\"codelab\\" instead."],"replace":[""]},"co-locate":{"data":["Use \\"colocate\\" instead."],"replace":[""]},"Container Engine":{"data":["Do not use."],"replace":["Kubernetes Engine"]},"content type":{"data":["Don\'t use when referring to types such as \\"application/json\\"; instead, use \\"media type.\\""],"replace":["media type"]},"Ctl-S":{"data":["To refer to a Control character, use Control+character. (In most cases, use an uppercase letter for character.) Note that in macOS, many keyboard commands use the Command key instead of the Control key, and there\'s an Option key instead of an Alt key. If your audience includes macOS users as well as Windows or Linux users, then mention both keyboard commands. Example: \\"Control+S (Command+S on Macintosh)\\"."],"replace":[""]},"Cmd-S":{"data":["To refer to a Control character, use Control+character. (In most cases, use an uppercase letter for character.) Note that in macOS, many keyboard commands use the Command key instead of the Control key, and there\'s an Option key instead of an Alt key. If your audience includes macOS users as well as Windows or Linux users, then mention both keyboard commands. Example: \\"Control+S (Command+S on Macintosh)\\"."],"replace":[""]},"Cloverleaf-S":{"data":["To refer to a Control character, use Control+character. (In most cases, use an uppercase letter for character.) Note that in macOS, many keyboard commands use the Command key instead of the Control key, and there\'s an Option key instead of an Alt key. If your audience includes macOS users as well as Windows or Linux users, then mention both keyboard commands. Example: \\"Control+S (Command+S on Macintosh)\\"."],"replace":[""]},"cpu":{"data":["Use \\"CPU\\", all caps. No need to expand the abbreviation on first mention."],"replace":[""]},"curated roles":{"data":["Do not use."],"replace":["predefined roles"]},"data are":{"data":["In our usage, \\"data\\" is singular, not plural. Say \\"the data is,\\" not \\"the data are.\\" Also, in our usage, data is a mass noun, not a count noun; for example, say \\"less data\\" rather than \\"fewer data.\\""],"replace":["data is"]},"fewer data":{"data":["In our usage, \\"data\\" is singular, not plural. Say \\"the data is,\\" not \\"the data are.\\" Also, in our usage, data is a mass noun, not a count noun; for example, say \\"less data\\" rather than \\"fewer data.\\""],"replace":["less data"]},"datacenter":{"data":["Use \\"data center\\" instead."],"replace":[""]},"data cleansing":{"data":["Use \\"data cleaning\\" instead."],"replace":[""]},"data set":{"data":["Use \\"dataset\\" instead."],"replace":[""]},"datasource":{"data":["Use \\"data source\\" instead."],"replace":[""]},"datatype":{"data":["Use \\"data type\\" instead."],"replace":[""]},"deep-linking":{"data":["Use \\"deep linking\\". However, if it would work to replace with \\"linking,\\" then do that."],"replace":[""]},"deselect":{"data":["Don\'t use to refer to clearing a check mark from a checkbox. Instead, use \\"clear.\\""],"replace":["clear"]},"Developers Console":{"data":["Don\'t use. Instead, use \\"Google API Console\\" or \\"API Console.\\""],"replace":["Google API Console","API Console"]},"Developer\'s Guide":{"data":["Use \'Developer\'s Guide\' instead."],"replace":[""]},"Developers\' Guide":{"data":["Use \'Developer\'s Guide\' instead."],"replace":[""]},"folder":{"data":["If the context you\'re documenting (such as an IDE\'s GUI) uses one term or the other, use that term. If not, then use \\"directory\\" in a command-line context, and \\"folder\\" in a GUI context. When in doubt, default to \\"directory.\\""],"replace":[""]},"directory":{"data":["If the context you\'re documenting (such as an IDE\'s GUI) uses one term or the other, use that term. If not, then use \\"directory\\" in a command-line context, and \\"folder\\" in a GUI context. When in doubt, default to \\"directory.\\""],"replace":[""]},"disabled":{"data":["Do not use."],"replace":["turn off","off"]},"disable":{"data":["Do not use."],"replace":["turn off","off"]},"doc set":{"data":["Use \\"docset\\" instead."],"replace":[""]},"doc":{"data":["Use \\"documentation\\" or \\"document\\" or \\"documents\\", whichever is applicable instead."],"replace":[""]},"docs":{"data":["Use \\"documentation\\" or \\"document\\" or \\"documents\\", whichever is applicable instead."],"replace":[""]},"easy":{"data":["Avoid using phrases like \\"simply\\" or \\"It\'s that simple\\" or \\"It\'s easy\\" in a procedure, unless it\'s an extraordinarily simple/easy procedure"],"replace":[""]},"e-commerce":{"data":["Use \\"ecommerce\\" instead."],"replace":[""]},"e.g.":{"data":["Don\'t use. Instead, use phrases like \\"for example\\" or \\"for instance.\\" Too many people mix up \\"e.g.\\" and \\"i.e.\\""],"replace":["for example","for instance"]},"either":{"data":["Usage note 1: When using \\"either,\\" use parallel syntax�\\"Do either foo or bar\\" is fine, as is \\"Either do foo or do bar,\\" but not \\"Either do foo or bar.\\" Usage note 2: We recommend using \\"either\\" only for a choice between two things, not for a choice among multiple things; however, this is a weak recommendation rather than a firm rule. Saying \\"either A or B or C\\" will annoy and distract some readers, but if it\'s the best phrasing for your situation, then use it."],"replace":[""]},"tag":{"data":["HTML 4 elements are often referred to as \\"tags,\\" but the equivalent items in modern HTML and XML are officially known as \\"elements.\\""],"replace":[""]},"e-mail":{"data":["Use \'email\' instead. As of mid-2017, Merriam-Webster dictionaries still prefer \\"e-mail\\" to \\"email.\\" But the AP style manual switched to \\"email\\" in March 2011, and the New York Times switched to \\"email\\" in October 2013. In some contexts, \\"mail\\" is a better choice."],"replace":["email"]},"Email":{"data":["Use \'email\' instead. As of mid-2017, Merriam-Webster dictionaries still prefer \\"e-mail\\" to \\"email.\\" But the AP style manual switched to \\"email\\" in March 2011, and the New York Times switched to \\"email\\" in October 2013. In some contexts, \\"mail\\" is a better choice."],"replace":["email"]},"E-mail":{"data":["Use \'email\' instead. As of mid-2017, Merriam-Webster dictionaries still prefer \\"e-mail\\" to \\"email.\\" But the AP style manual switched to \\"email\\" in March 2011, and the New York Times switched to \\"email\\" in October 2013. In some contexts, \\"mail\\" is a better choice."],"replace":["email"]},"enable":{"data":["Don\'t use. Instead, use \\"turn on\\" or \\"on.\\" However, in GCP documentation, it\'s fine to use enable."],"replace":[""]},"enabled":{"data":["Don\'t use. Instead, use \\"turn on\\" or \\"on.\\" However, in GCP documentation, it\'s fine to use enable."],"replace":[""]},"end point":{"data":["Use \\"endpoint\\" instead."],"replace":[""]},"end user":{"data":["end user (noun), end-user (adjective). Also consider just \\"user\\"."],"replace":[""]},"end-user":{"data":["end user (noun), end-user (adjective). Also consider just \\"user\\"."],"replace":[""]},"external IP address":{"data":["Do not use \\"static IP address\\" or \\"external IP address\\" to refer to static external IP addresses. Use static external IP address instead."],"replace":[""]},"ephemeral IP address":{"data":["Do not use."],"replace":["ephemeral external IP address"]},"and so on":{"data":["Avoid both \\"etc.\\" and \\"and so on\\" wherever possible, but if you really need to use one, use \\"etc.\\" Always include the period, even if a comma follows immediately after. In GCP documentation, never use \\"etc.\\" under any circumstances."],"replace":[""]},"etc.":{"data":["Avoid both \\"etc.\\" and \\"and so on\\" wherever possible, but if you really need to use one, use \\"etc.\\" Always include the period, even if a comma follows immediately after. In GCP documentation, never use \\"etc.\\" under any circumstances."],"replace":[""]},"ETL":{"data":["OK to use with caution, but write out on first mention: extract, transform, and load (ETL)."],"replace":[""]},"expando":{"data":["The UI element used to expand or collapse a section of navigation or content. We don\'t often refer to these explicitly in documentation, but when we do, use the terms \\"expander arrow\\" and \\"expandable section\\" rather than terms like \\"expando\\" or \\"zippy.\\""],"replace":[""]},"exploit":{"data":["Don\'t use to mean \\"use.\\" Only use in the negative sense."],"replace":[""]},"file name":{"data":["Use \\"filename\\" instead."],"replace":["filename"]},"firewalls":{"data":["Do not use."],"replace":["firewall rules"]},"flag":{"data":["(command line context) Don\'t use. Instead, use \\"option.\\""],"replace":[""]},"functionality":{"data":["On the one hand, everyone knows what this means. On the other hand, it\'s kinda jargony. So where possible, use terms like \\"capabilities\\" and \\"features\\" instead."],"replace":["capability","feature"]},"Cloud Platform":{"data":["Use GCP instead."],"replace":[""]},"Cloud project ID":{"data":["Use GCP project ID instead. You can also shorten to project ID, but be aware that that term is ambiguous in some contexts."],"replace":[""]},"he":{"data":["Don\'t use. Instead, use the singular \\"they\\". If you can\'t stand that, then use \\"he or she,\\" or rewrite to avoid singular gendered pronouns. Don\'t use \\"he/she\\" or \\"(s)he\\" or other such punctuational approaches."],"replace":[""]},"she":{"data":["Don\'t use. Instead, use the singular \\"they\\". If you can\'t stand that, then use \\"he or she,\\" or rewrite to avoid singular gendered pronouns. Don\'t use \\"he/she\\" or \\"(s)he\\" or other such punctuational approaches."],"replace":[""]},"him":{"data":["Don\'t use. Instead, use the singular \\"they\\". If you can\'t stand that, then use \\"he or she,\\" or rewrite to avoid singular gendered pronouns. Don\'t use \\"he/she\\" or \\"(s)he\\" or other such punctuational approaches."],"replace":[""]},"his":{"data":["Don\'t use. Instead, use the singular \\"they\\". If you can\'t stand that, then use \\"he or she,\\" or rewrite to avoid singular gendered pronouns. Don\'t use \\"he/she\\" or \\"(s)he\\" or other such punctuational approaches."],"replace":[""]},"her":{"data":["Don\'t use. Instead, use the singular \\"they\\". If you can\'t stand that, then use \\"he or she,\\" or rewrite to avoid singular gendered pronouns. Don\'t use \\"he/she\\" or \\"(s)he\\" or other such punctuational approaches."],"replace":[""]},"hers":{"data":["Don\'t use. Instead, use the singular \\"they\\". If you can\'t stand that, then use \\"he or she,\\" or rewrite to avoid singular gendered pronouns. Don\'t use \\"he/she\\" or \\"(s)he\\" or other such punctuational approaches."],"replace":[""]},"he/she":{"data":["Don\'t use. Instead, use the singular \\"they\\". If you can\'t stand that, then use \\"he or she,\\" or rewrite to avoid singular gendered pronouns. Don\'t use \\"he/she\\" or \\"(s)he\\" or other such punctuational approaches."],"replace":[""]},"(s)he":{"data":["Don\'t use. Instead, use the singular \\"they\\". If you can\'t stand that, then use \\"he or she,\\" or rewrite to avoid singular gendered pronouns. Don\'t use \\"he/she\\" or \\"(s)he\\" or other such punctuational approaches."],"replace":[""]},".gif":{"data":["Don\'t use a filetype extension to refer to a type of file. For example, use \\"GIF file\\" rather than \\".gif file.\\""],"replace":["GIF file"]},"GIF":{"data":["Don\'t use a filetype extension to refer to a type of file. For example, use \\"GIF file\\" rather than \\".gif file.\\""],"replace":["GIF file"]},"Googling":{"data":["Don\'t use as a verb or gerund. Instead, use \\"search with Google.\\""],"replace":["search with Google"]},"Google accounts":{"data":["Use \\"Google Accounts\\" (capital A)"],"replace":["Google Accounts"]},"Google account":{"data":["Use Google Account (capital A)"],"replace":["Google Account"]},"Google I-O":{"data":["Use Google I/O instead."],"replace":["Google I/O"]},"Google IO":{"data":["Use Google I/O instead."],"replace":["Google I/O"]},"grayed-out":{"data":["Do not use."],"replace":["unavailable"]},"hack-a-thon":{"data":["Use \\"hackathon\\" instead."],"replace":[""]},"hit":{"data":["Don\'t use as a synonym for \\"click.\\""],"replace":[""]},"host name":{"data":["Use \\"hostname\\" instead."],"replace":[""]},"HTTPS; not \\"HTTPs\\"":{"data":["Do not use."],"replace":["HTTPS"]},"IaaS":{"data":["Write out on first mention: infrastructure as a service (IaaS)."],"replace":[""]},"Id":{"data":["Not \\"Id\\" or \\"id,\\" except in string literals or enums. In some contexts, best to spell out as \\"identifier\\" or \\"identification.\\""],"replace":[""]},"id":{"data":["Not \\"Id\\" or \\"id,\\" except in string literals or enums. In some contexts, best to spell out as \\"identifier\\" or \\"identification.\\""],"replace":[""]},"i.e.":{"data":["Don\'t use. Instead, use phrases like \\"that is.\\" Too many people mix up \\"e.g.\\" and \\"i.e.\\""],"replace":["that is"]},"impacts":{"data":["Use only as a noun. Not recommended: This issue impacts user experience. Recommended: This issue affects user experience."],"replace":[""]},"ingest":{"data":["Avoid in most cases when referring to data. Instead, use import or load."],"replace":["import","load"]},"in order to":{"data":["If at all possible, don\'t use \\"in order to\\"; instead, use \\"to.\\" Very occasionally, \\"in order to\\" does clarify meaning or make something easier to read."],"replace":["to"]},"interface":{"data":["OK to use as a noun, but don\'t use as a verb. Instead, try \\"interact,\\" \\"talk,\\" \\"speak,\\" \\"communicate,\\" or other similar terms."],"replace":[""]},"network IP address":{"data":["Do not use"],"replace":["internal IP address"]},"jank":{"data":["Use with caution. Think about whether your audience will understand it."],"replace":[""]},".jpg":{"data":["Don\'t use a filename extension to refer to a type of file. For example, use \\"JPEG file\\" rather than \\".jpg file.\\""],"replace":["JPEG file"]},"k8s":{"data":["Do not use."],"replace":["Kubernetes"]},"key/value":{"data":["Use key-value instead, especially as in \\"key-value pair\\""],"replace":[""]},"kill":{"data":["Do not use."],"replace":["stop","exit","cancel","end"]},"learnings":{"data":["Do not use."],"replace":[""]},"let\'s":{"data":["As a contraction of \\"let us\\". Don\'t use if at all possible."],"replace":[""]},"life cycle":{"data":["Use \\"lifecycle\\" instead."],"replace":[""]},"life-cycle":{"data":["Use \\"lifecycle\\" instead."],"replace":[""]},"live stream":{"data":["Use \\"livestream\\" instead."],"replace":[""]},"long press":{"data":["Don\'t use. Instead, use \\"touch & hold.\\" (Not \\"touch and hold.\\")"],"replace":["touch & hold"]},"meta-data":{"data":["Use \\"metadata\\" instead."],"replace":[""]},"meta-feed":{"data":["Use \\"metafeed\\" instead."],"replace":[""]},"name space":{"data":["Use \\"namespace\\" instead."],"replace":[""]},"NAT-ted":{"data":["To turn into an adjective, use NAT-translated, or rephrase. Don\'t use NATted or NAT-ted."],"replace":[""]},"NATted":{"data":["To turn into an adjective, use NAT-translated, or rephrase. Don\'t use NATted or NAT-ted."],"replace":[""]},"non-fatal":{"data":["Use \\"nonfatal\\" instead."],"replace":[""]},"OAuth 2":{"data":["Do not use."],"replace":["OAuth 2.0"]},"OAuth2":{"data":["Do not use."],"replace":["OAuth 2.0"]},"Oauth":{"data":["Do not use."],"replace":["OAuth 2.0"]},"ok":{"data":["Do not use."],"replace":["OK","okay"]},"Okay":{"data":["Do not use."],"replace":["OK","okay"]},"once":{"data":["If you mean \\"after,\\" then use \\"after\\" instead of \\"once.\\""],"replace":[""]},"on prem":{"data":["on-premises (adjective), on premises (noun). Use to refer to a customer\'s resources that aren\'t part of Google Cloud Platform. Don\'t use peer."],"replace":[""]},"on premise":{"data":["on-premises (adjective), on premises (noun). Use to refer to a customer\'s resources that aren\'t part of Google Cloud Platform. Don\'t use peer."],"replace":[""]},"open-source":{"data":["Use \'open source\' instead.  (no hyphen, not even as an adjective or verb)"],"replace":["open source"]},"overview screen":{"data":["Do not use."],"replace":["recents screen"]},"PaaS":{"data":["Write out on first mention: platform as a service (PaaS)."],"replace":[""]},"parent-child":{"data":["Use parent-child or parent/child instead."],"replace":[""]},"parent - child":{"data":["Use parent-child or parent/child instead."],"replace":[""]},"filepath":{"data":["Use \'path\' instead. Avoid using \\"filepath,\\" \\"file path,\\" \\"pathname,\\" or \\"path name\\" if possible."],"replace":["path"]},"file path":{"data":["Use \'path\' instead. Avoid using \\"filepath,\\" \\"file path,\\" \\"pathname,\\" or \\"path name\\" if possible."],"replace":["path"]},"pathname":{"data":["Use \'path\' instead. Avoid using \\"filepath,\\" \\"file path,\\" \\"pathname,\\" or \\"path name\\" if possible."],"replace":["path"]},"path name":{"data":["Use \'path\' instead. Avoid using \\"filepath,\\" \\"file path,\\" \\"pathname,\\" or \\"path name\\" if possible."],"replace":["path"]},"persist":{"data":["Don\'t use as a transitive verb, and best to avoid using as a verb at all, especially in passive voice. Not recommended: The token is persisted � Not recommended: To persist the token � Recommended: To make the token persistent �"],"replace":[""]},"PD":{"data":["Use \\"persistent disk\\"; not \\"PD\\". Lowercase except at the start of a sentence."],"replace":[""]},"plaintext":{"data":["Use plain text (but \\"plaintext\\" in cryptography context)"],"replace":[""]},"please":{"data":["using \\"please\\" in a set of instructions is overdoing the politeness. Not recommended: To view the document, please click View. Recommended: To view the document, click View."],"replace":[""]},".png":{"data":["Don\'t use a filetype extension to refer to a type of file. For example, use \\"PNG file\\" rather than \\".png file.\\""],"replace":["PNG file"]},"pre-condition":{"data":["Use \\"precondition\\" instead."],"replace":[""]},"pre-defined":{"data":["Use \\"predefined\\" instead."],"replace":[""]},"pre-emptive":{"data":["Use \\"preemptible\\" instead."],"replace":[""]},"pre-emptible":{"data":["Use \\"preemptible\\" instead."],"replace":[""]},"pre-recorded":{"data":["Use \\"prerecorded\\" instead."],"replace":[""]},"press":{"data":["Use for keyboard actions such as pressing a key. Also use for mechanical buttons. Use \\"tap\\" for on-screen and soft (capacitive) buttons."],"replace":[""]},"project":{"data":["In GCP documentation, don\'t use. Instead, use Google Cloud Platform project or GCP project."],"replace":[""]},"RDP":{"data":["Don\'t use as a verb. Instead, use connect using RDP. Or, if it\'s clear from context that they\'re using RDP, then just use connect."],"replace":[""]},"regex":{"data":["Do not use."],"replace":["regular expression"]},"Representational State Transfer":{"data":["Don\'t use. To people unfamiliar with REST, this acronym expansion is meaningless; better to just refer to it as REST and don\'t bother trying to explain what it theoretically stands for."],"replace":[""]},"review":{"data":["If you mean \\"read, potentially for the first time,\\" then use \\"read\\" instead of \\"review.\\" Of course, if you mean \\"read critically, commenting on problems\\" (as in \\"code review\\"), then \\"review\\" is fine; the usage to avoid is phrasing like \\"If you\'ve never heard of OAuth, then review the OAuth documentation.\\""],"replace":[""]},"run book":{"data":["Use \\"runbook\\" instead."],"replace":[""]},"run time":{"data":["Use \\"runtime\\" instead."],"replace":[""]},"SaaS":{"data":["Write out on first mention: software as a service (SaaS)."],"replace":[""]},"screensnap":{"data":["Use \'screenshot\'. Don\'t use as a verb; instead, use take a screenshot."],"replace":[""]},"screen shot":{"data":["Use \'screenshot\'. Don\'t use as a verb; instead, use take a screenshot."],"replace":[""]},"SHA1":{"data":["Use \\"SHA-1,\\" except in string literals/enums and in hyphenated phrases such as \\"HSA-SHA1.\\""],"replace":["SHA-1","HAS-SHA1"]},"should":{"data":["Generally avoid. Better to use \\"must\\" or just leave out the word \\"should.\\""],"replace":[""]},"signin":{"data":["Use sign-in (noun or adjective), sign in (verb) instead."],"replace":[""]},"log in":{"data":["Use sign-in (noun or adjective), sign in (verb) instead."],"replace":[""]},"sign into":{"data":["Don\'t use. Instead, use sign in to."],"replace":["sign in to"]},"sign on":{"data":["Don\'t use. Use the hyphenated version as part of \\"single sign-on.\\""],"replace":["single sign-on"]},"sign-on":{"data":["Don\'t use. Use the hyphenated version as part of \\"single sign-on.\\""],"replace":["single sign-on"]},"signout":{"data":["Use sign-out (noun or adjective), sign out (verb) instead."],"replace":[""]},"log out":{"data":["Use sign-out (noun or adjective), sign out (verb) instead."],"replace":[""]},"simply":{"data":["Avoid using phrases like \\"simply\\" or \\"It\'s that simple\\" or \\"It\'s easy\\" in a procedure, unless it\'s an extraordinarily simple/easy procedure"],"replace":[""]},"simple":{"data":["Avoid using phrases like \\"simply\\" or \\"It\'s that simple\\" or \\"It\'s easy\\" in a procedure, unless it\'s an extraordinarily simple/easy procedure"],"replace":[""]},"since":{"data":["If you mean \\"because,\\" then use \\"because\\" instead of \\"since.\\" \\"Since\\" is ambiguous; it can refer to the passage of time. \\"Because\\" refers to causation or the reason for something."],"replace":[""]},"singlemost":{"data":["Use \\"single most\\" instead."],"replace":[""]},"slave":{"data":["Avoid the word \\"slave\\". Instead, use alternative terms appropriate to your domain. Some possible options include: master/{drone, worker, replica, minion, servant}; primary/{secondary, replicated}. If the command or code you\'re documenting uses the literal word \\"slave,\\" then make it clear that you\'re referring to it. For example, \\"Invoke the secondary (slave) process directly when debugging issues between the primary and secondary processes.\\""],"replace":[""]},"smartphone":{"data":["Do not use."],"replace":["mobile phone","phone"]},"ssh\'ing":{"data":["Use alternatives to \\"ssh\'ing\\" unless there is just no way around it. Recommended: ... connect/connecting via SSH. Recommended: ... use/using SSH to connect/forward/tunnel/log in."],"replace":[""]},"static IP address":{"data":["Do not use \\"static IP address\\" or \\"external IP address\\" to refer to static external IP addresses. "],"replace":["static external IP address"]},"stylesheet":{"data":["Use \'style sheet\'. This is the official spelling, per the World Wide Web Consortium (W3C)."],"replace":["style sheet"]},"sub-class":{"data":["Use \\"subclass\\" instead. (noun or verb)"],"replace":[""]},"subcommand":{"data":["Use \\"sub-command\\" instead."],"replace":[""]},"sub-tree":{"data":["Use \\"subtree\\" instead."],"replace":[""]},"synch":{"data":["Use \'sync\'.  Recommended: in sync Recommended: sync, syncing, synced"],"replace":["sync"]},"tab":{"data":["When referring to the sub-pages of the API Console, use \\"page\\" instead of \\"tab\\"."],"replace":[""]},"tablename":{"data":["Two words. Set specific table names in code font."],"replace":["table name"]},"tablet":{"data":["\\"Tablet\\" is OK. If you don\'t know whether it\'s a tablet or a phone, use \\"device.\\""],"replace":["device"]},"tap & hold":{"data":["Don\'t use. Instead, use \\"touch & hold.\\" (Not \\"touch and hold.\\")"],"replace":["touch & hold"]},"tap and hold":{"data":["Don\'t use. Instead, use \\"touch & hold.\\" (Not \\"touch and hold.\\")"],"replace":["touch & hold"]},"target":{"data":["Avoid using as a verb when possible, especially in reference to people. For some readers, has aggressive connotations. Instead of \\"targeting\\" audiences, we try to attract them or appeal to them or make their lives easier. (Using it as an adjective, as in \\"target audience,\\" is probably fine.) Alternatives include terms such as \\"intended for,\\" \\"looking for,\\" \\"focused on,\\" and \\"interacting with.\\""],"replace":[""]},"terminate":{"data":["Do not use."],"replace":["stop","exit","cancel","end"]},"textbox":{"data":["In GCP documentation, don\'t use. Instead, use field. For example: In the Instance field, specify a value less than 64 characters long."],"replace":[""]},"time frame":{"data":["Use \'timeframe\' instead. Avoid where possible, or use an alternative such as \\"period,\\" \\"schedule,\\" \\"deadline,\\" or \\"when.\\" But if you do use it, write it without a space in the middle."],"replace":[""]},"time stamp":{"data":["Use \\"timestamp\\" instead."],"replace":[""]},"touch":{"data":["Don\'t use. Instead, use \\"tap.\\" However, \\"touch & hold\\" is OK to use."],"replace":["tap"]},"touch and hold":{"data":["Use \\"touch & hold\\" instead."],"replace":["touch & hold"]},"touch screen":{"data":["Use \\"touchscreen\\" instead."],"replace":[""]},"transcompile":{"data":["Use \\"transpile\\" instead."],"replace":[""]},"turn on":{"data":["In GCP documentation, don\'t use turn on. Instead, use enable."],"replace":[""]},"typically":{"data":["Use to describe what is usual or expected under normal circumstances. Don\'t use as the first word in a sentence, as doing so can leave the meaning open to misinterpretation."],"replace":[""]},"uncheck":{"data":["Don\'t use to refer to clearing a check mark from a checkbox. Instead, use \\"clear.\\""],"replace":["clear"]},"unselect":{"data":["Don\'t use. Instead, use clear for checkboxes, and deselect for other UI elements."],"replace":["clear"]},"url":{"data":["All caps. Plural is \\"URLs.\\" Write \\"a URL\\" rather than \\"an URL\\", because the most common pronunciation starts with a consonant sound."],"replace":["URL"]},"userbase":{"data":["Use \'user base\' instead."],"replace":[""]},"user name":{"data":["Use \'username\' instead."],"replace":[""]},"vs.":{"data":["Don\'t use \\"vs.\\" as an abbreviation for \\"versus\\"; instead, use the unabbreviated \\"versus.\\""],"replace":["versus"]},"voila":{"data":["Don\'t use."],"replace":[""]},"walk-through":{"data":["Use \\"walkthrough\\" instead."],"replace":[""]},"webpage":{"data":["Use \\"web page.\\" But where possible, avoid both by using \\"page.\\""],"replace":[""]},"web site":{"data":["Use \\"website\\" (lowercase w) instead."],"replace":[""]},"white space":{"data":["Use \\"whitespace\\" instead."],"replace":[""]},"WiFi":{"data":["Use \'Wi-Fi\'. When possible, instead use \\"wireless.\\""],"replace":["Wi-Fi"]},"wifi":{"data":["Use \'Wi-Fi\'. When possible, instead use \\"wireless.\\""],"replace":["Wi-Fi"]},"wildcard; not \\"wild card\\"":{"data":["Use \\"wildcard\\" instead."],"replace":[""]},"with":{"data":["Don\'t use with when expressing ownership. Not recommended: A handset with 2 GB of RAM. Recommended: A handset that has 2 GB of RAM."],"replace":[""]},"World Wide Web":{"data":["Do not use."],"replace":["web"]},".zip":{"data":["Don\'t use a filename extension to refer to a type of file. For example, use \\"zip file\\" rather than \\".zip file.\\""],"replace":["zip file"]},"zippy":{"data":["Don\'t use to refer to expander arrows, unless you\'re specifically referring to the Zippy widget in Closure."],"replace":[""]}}');

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 87:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 765:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 835:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(109);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;