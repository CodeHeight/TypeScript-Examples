import {
    ExportedInterface,
    ExportedClass,
    exportedVariable as renamedImportedVariable,
    renamedExportedVariable
} from './exportingModule';

//similar to namespace:
import * as exportingModule from './exportingModule';

import './moduleWithSideEffects';

import renamedDefaultExportedFunction
    from './defaultExportingModule';

import {
    reExportedVariable,
    reExportedRenamedVariable
} from './reExportingModules';

console.log('Renameed: ', renamedImportedVariable);
renamedDefaultExportedFunction();
console.log('namespace:', exportingModule.exportedVariable);
console.log('Renameed exported: ', renamedExportedVariable);
console.log('ReExported:', reExportedVariable);
console.log('Renamed ReExported:', reExportedRenamedVariable);


