"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LocalClass {
}
const localVariable = 123;
class ExportedClass {
}
exports.ExportedClass = ExportedClass;
exports.exportedVariable = 12;
const exportedVariableToRename = 'rename me';
exports.renamedExportedVariable = exportedVariableToRename;
