import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { ComplexTypeBigNumberPropertyField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ToDoEntry
 */
export interface ToDoEntry {
    /**
     * completedDate.
     * @nullable
     */
    completedDate?: Moment;
    /**
     * formDataId.
     * @nullable
     */
    formDataId?: BigNumber;
    /**
     * status.
     * @nullable
     */
    status?: number;
    /**
     * statusLabel.
     * @nullable
     */
    statusLabel?: string;
    /**
     * subjectFullName.
     * @nullable
     */
    subjectFullName?: string;
    /**
     * subjectId.
     * @nullable
     */
    subjectId?: string;
    /**
     * url.
     * @nullable
     */
    url?: string;
}
/**
 * @deprecated since v1.6.0. Use [[ToDoEntry.build]] instead.
 */
export declare function createToDoEntry(json: any): ToDoEntry;
/**
 * ToDoEntryField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ToDoEntryField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ToDoEntry.completedDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    completedDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ToDoEntry.formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formDataId: ComplexTypeBigNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ToDoEntry.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ToDoEntry.statusLabel]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    statusLabel: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ToDoEntry.subjectFullName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subjectFullName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ToDoEntry.subjectId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subjectId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ToDoEntry.url]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    url: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ToDoEntry {
    function build(json: {
        [keys: string]: FieldType;
    }): ToDoEntry;
}
//# sourceMappingURL=ToDoEntry.d.ts.map