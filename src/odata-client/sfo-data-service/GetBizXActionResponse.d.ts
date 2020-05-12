import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * GetBizXActionResponse
 */
export interface GetBizXActionResponse {
    /**
     * actionId.
     * @nullable
     */
    actionId?: string;
    /**
     * actionLabel.
     * @nullable
     */
    actionLabel?: string;
    /**
     * deepLinkUrl.
     * @nullable
     */
    deepLinkUrl?: string;
    /**
     * userId.
     * @nullable
     */
    userId?: string;
}
/**
 * @deprecated since v1.6.0. Use [[GetBizXActionResponse.build]] instead.
 */
export declare function createGetBizXActionResponse(json: any): GetBizXActionResponse;
/**
 * GetBizXActionResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class GetBizXActionResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[GetBizXActionResponse.actionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actionId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GetBizXActionResponse.actionLabel]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actionLabel: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GetBizXActionResponse.deepLinkUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    deepLinkUrl: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GetBizXActionResponse.userId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userId: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace GetBizXActionResponse {
    function build(json: {
        [keys: string]: FieldType;
    }): GetBizXActionResponse;
}
//# sourceMappingURL=GetBizXActionResponse.d.ts.map