"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exportingModule_1 = require("./exportingModule");
//similar to namespace:
var exportingModule = require("./exportingModule");
require("./moduleWithSideEffects");
var defaultExportingModule_1 = require("./defaultExportingModule");
var reExportingModules_1 = require("./reExportingModules");
console.log('Renameed: ', exportingModule_1.exportedVariable);
defaultExportingModule_1.default();
console.log('namespace:', exportingModule.exportedVariable);
console.log('Renameed exported: ', exportingModule_1.renamedExportedVariable);
console.log('ReExported:', reExportingModules_1.reExportedVariable);
console.log('Renamed ReExported:', reExportingModules_1.reExportedRenamedVariable);
