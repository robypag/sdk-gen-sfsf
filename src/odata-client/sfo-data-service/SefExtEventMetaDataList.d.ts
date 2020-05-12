import { SefExtEventMetaData, SefExtEventMetaDataField } from './SefExtEventMetaData';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * SefExtEventMetaDataList
 */
export interface SefExtEventMetaDataList {
    /**
     * data.
     * @nullable
     */
    data?: SefExtEventMetaData;
    /**
     * status.
     * @nullable
     */
    status?: string;
    /**
     * statusMsg.
     * @nullable
     */
    statusMsg?: string;
}
/**
 * @deprecated since v1.6.0. Use [[SefExtEventMetaDataList.build]] instead.
 */
export declare function createSefExtEventMetaDataList(json: any): SefExtEventMetaDataList;
/**
 * SefExtEventMetaDataListField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SefExtEventMetaDataListField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SefExtEventMetaDataList.data]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    data: SefExtEventMetaDataField<EntityT>;
    /**
     * Representation of the [[SefExtEventMetaDataList.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SefExtEventMetaDataList.statusMsg]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    statusMsg: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace SefExtEventMetaDataList {
    function build(json: {
        [keys: string]: FieldType;
    }): SefExtEventMetaDataList;
}
//# sourceMappingURL=SefExtEventMetaDataList.d.ts.map