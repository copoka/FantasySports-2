// Type definitions for ag-grid v4.2.5
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { Column } from "../entities/column";
export interface IRenderedHeaderElement {
    destroy(): void;
    onIndividualColumnResized(column: Column): void;
    getGui(): HTMLElement;
}
