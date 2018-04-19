"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var browser_util_1 = require("./browser_util");
var environment = require("./environment");
exports.environment = environment;
var environment_1 = require("./environment");
var test_util = require("./test_util");
exports.test_util = test_util;
var util = require("./util");
exports.util = util;
var version_1 = require("./version");
exports.version_core = version_1.version;
var adadelta_optimizer_1 = require("./optimizers/adadelta_optimizer");
exports.AdadeltaOptimizer = adadelta_optimizer_1.AdadeltaOptimizer;
var adagrad_optimizer_1 = require("./optimizers/adagrad_optimizer");
exports.AdagradOptimizer = adagrad_optimizer_1.AdagradOptimizer;
var adam_optimizer_1 = require("./optimizers/adam_optimizer");
exports.AdamOptimizer = adam_optimizer_1.AdamOptimizer;
var adamax_optimizer_1 = require("./optimizers/adamax_optimizer");
exports.AdamaxOptimizer = adamax_optimizer_1.AdamaxOptimizer;
var momentum_optimizer_1 = require("./optimizers/momentum_optimizer");
exports.MomentumOptimizer = momentum_optimizer_1.MomentumOptimizer;
var optimizer_1 = require("./optimizers/optimizer");
exports.Optimizer = optimizer_1.Optimizer;
var rmsprop_optimizer_1 = require("./optimizers/rmsprop_optimizer");
exports.RMSPropOptimizer = rmsprop_optimizer_1.RMSPropOptimizer;
var sgd_optimizer_1 = require("./optimizers/sgd_optimizer");
exports.SGDOptimizer = sgd_optimizer_1.SGDOptimizer;
var tensor_1 = require("./tensor");
exports.Tensor = tensor_1.Tensor;
exports.TensorBuffer = tensor_1.TensorBuffer;
exports.variable = tensor_1.variable;
exports.Variable = tensor_1.Variable;
var types_1 = require("./types");
exports.Rank = types_1.Rank;
var weights_loader_1 = require("./weights_loader");
exports.loadWeights = weights_loader_1.loadWeights;
__export(require("./ops/ops"));
__export(require("./train"));
__export(require("./globals"));
var environment_2 = require("./environment");
exports.ENV = environment_2.ENV;
exports.Environment = environment_2.Environment;
exports.setBackend = environment_1.Environment.setBackend;
exports.getBackend = environment_1.Environment.getBackend;
exports.memory = environment_1.Environment.memory;
var doc_1 = require("./doc");
exports.doc = doc_1.doc;
exports.nextFrame = browser_util_1.BrowserUtil.nextFrame;