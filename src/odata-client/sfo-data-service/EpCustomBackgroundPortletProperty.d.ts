import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * EpCustomBackgroundPortletProperty
 */
export interface EpCustomBackgroundPortletProperty {
    /**
     * isPII.
     * @nullable
     */
    isPii?: boolean;
    /**
     * isPicklist.
     * @nullable
     */
    isPicklist?: boolean;
    /**
     * isUrlLink.
     * @nullable
     */
    isUrlLink?: boolean;
    /**
     * label.
     * @nullable
     */
    label?: string;
    /**
     * parentFieldId.
     * @nullable
     */
    parentFieldId?: string;
    /**
     * picklistId.
     * @nullable
     */
    picklistId?: string;
    /**
     * propertyName.
     * @nullable
     */
    propertyName?: string;
    /**
     * required.
     * @nullable
     */
    required?: boolean;
}
/**
 * @deprecated since v1.6.0. Use [[EpCustomBackgroundPortletProperty.build]] instead.
 */
export declare function createEpCustomBackgroundPortletProperty(json: any): EpCustomBackgroundPortletProperty;
/**
 * EpCustomBackgroundPortletPropertyField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EpCustomBackgroundPortletPropertyField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EpCustomBackgroundPortletProperty.isPii]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isPii: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[EpCustomBackgroundPortletProperty.isPicklist]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isPicklist: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[EpCustomBackgroundPortletProperty.isUrlLink]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isUrlLink: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[EpCustomBackgroundPortletProperty.label]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    label: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EpCustomBackgroundPortletProperty.parentFieldId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    parentFieldId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EpCustomBackgroundPortletProperty.picklistId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    picklistId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EpCustomBackgroundPortletProperty.propertyName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    propertyName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EpCustomBackgroundPortletProperty.required]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    required: ComplexTypeBooleanPropertyField<EntityT>;
}
export declare namespace EpCustomBackgroundPortletProperty {
    function build(json: {
        [keys: string]: FieldType;
    }): EpCustomBackgroundPortletProperty;
}
//# sourceMappingURL=EpCustomBackgroundPortletProperty.d.ts.map