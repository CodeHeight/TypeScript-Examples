interface LocalInterface {
}

class LocalClass {
}

const localVariable = 123;

export interface ExportedInterface {
}

export class ExportedClass {
}

export const exportedVariable = 12;

const exportedVariableToRename = 'rename me';

export { exportedVariableToRename as renamedExportedVariable };