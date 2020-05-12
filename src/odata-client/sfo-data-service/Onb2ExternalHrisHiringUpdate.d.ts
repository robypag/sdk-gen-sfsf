import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * Onb2ExternalHrisHiringUpdate
 */
export interface Onb2ExternalHrisHiringUpdate {
    /**
     * assignmentIdExternal.
     * @nullable
     */
    assignmentIdExternal?: string;
    /**
     * personIdExternal.
     * @nullable
     */
    personIdExternal?: string;
    /**
     * processId.
     */
    processId: string;
    /**
     * sourceOfRecord.
     */
    sourceOfRecord: string;
    /**
     * userName.
     * @nullable
     */
    userName?: string;
    /**
     * userStatus.
     */
    userStatus: string;
}
/**
 * @deprecated since v1.6.0. Use [[Onb2ExternalHrisHiringUpdate.build]] instead.
 */
export declare function createOnb2ExternalHrisHiringUpdate(json: any): Onb2ExternalHrisHiringUpdate;
/**
 * Onb2ExternalHrisHiringUpdateField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class Onb2ExternalHrisHiringUpdateField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[Onb2ExternalHrisHiringUpdate.assignmentIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    assignmentIdExternal: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Onb2ExternalHrisHiringUpdate.personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    personIdExternal: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Onb2ExternalHrisHiringUpdate.processId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    processId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Onb2ExternalHrisHiringUpdate.sourceOfRecord]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourceOfRecord: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Onb2ExternalHrisHiringUpdate.userName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Onb2ExternalHrisHiringUpdate.userStatus]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userStatus: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace Onb2ExternalHrisHiringUpdate {
    function build(json: {
        [keys: string]: FieldType;
    }): Onb2ExternalHrisHiringUpdate;
}
//# sourceMappingURL=Onb2ExternalHrisHiringUpdate.d.ts.map