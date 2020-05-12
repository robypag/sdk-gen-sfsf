import { SefEventEntityKey, SefEventEntityKeyField } from './SefEventEntityKey';
import { SefEventEntityParam, SefEventEntityParamField } from './SefEventEntityParam';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * SefExtEventMetaData
 */
export interface SefExtEventMetaData {
    /**
     * description.
     * @nullable
     */
    description?: string;
    /**
     * effectiveDated.
     * @nullable
     */
    effectiveDated?: boolean;
    /**
     * entity.
     * @nullable
     */
    entity?: string;
    /**
     * entityKeys.
     * @nullable
     */
    entityKeys?: SefEventEntityKey;
    /**
     * name.
     * @nullable
     */
    name?: string;
    /**
     * params.
     * @nullable
     */
    params?: SefEventEntityParam;
    /**
     * publisher.
     * @nullable
     */
    publisher?: string;
    /**
     * topic.
     * @nullable
     */
    topic?: string;
    /**
     * type.
     * @nullable
     */
    type?: string;
}
/**
 * @deprecated since v1.6.0. Use [[SefExtEventMetaData.build]] instead.
 */
export declare function createSefExtEventMetaData(json: any): SefExtEventMetaData;
/**
 * SefExtEventMetaDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SefExtEventMetaDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SefExtEventMetaData.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SefExtEventMetaData.effectiveDated]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveDated: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[SefExtEventMetaData.entity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    entity: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SefExtEventMetaData.entityKeys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    entityKeys: SefEventEntityKeyField<EntityT>;
    /**
     * Representation of the [[SefExtEventMetaData.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SefExtEventMetaData.params]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    params: SefEventEntityParamField<EntityT>;
    /**
     * Representation of the [[SefExtEventMetaData.publisher]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    publisher: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SefExtEventMetaData.topic]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    topic: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SefExtEventMetaData.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace SefExtEventMetaData {
    function build(json: {
        [keys: string]: FieldType;
    }): SefExtEventMetaData;
}
//# sourceMappingURL=SefExtEventMetaData.d.ts.map