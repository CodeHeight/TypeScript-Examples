"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocalClass = (function () {
    function LocalClass() {
    }
    return LocalClass;
}());
var localVariable = 123;
var ExportedClass = (function () {
    function ExportedClass() {
    }
    return ExportedClass;
}());
exports.ExportedClass = ExportedClass;
exports.exportedVariable = 12;
var exportedVariableToRename = 'rename me';
exports.renamedExportedVariable = exportedVariableToRename;
