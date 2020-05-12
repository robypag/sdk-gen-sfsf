import { Localstring, LocalstringField } from './Localstring';
import { Type, TypeField } from './Type';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * Property
 */
export interface Property {
    /**
     * aggregationRole.
     * @nullable
     */
    aggregationRole?: string;
    /**
     * businessKey.
     * @nullable
     */
    businessKey?: boolean;
    /**
     * defaultValue.
     * @nullable
     */
    defaultValue?: string;
    /**
     * displayFormat.
     * @nullable
     */
    displayFormat?: string;
    /**
     * fieldControl.
     * @nullable
     */
    fieldControl?: string;
    /**
     * filterable.
     * @nullable
     */
    filterable?: boolean;
    /**
     * id.
     * @nullable
     */
    id?: boolean;
    /**
     * inlineRequired.
     * @nullable
     */
    inlineRequired?: boolean;
    /**
     * insertable.
     * @nullable
     */
    insertable?: boolean;
    /**
     * insertablePath.
     * @nullable
     */
    insertablePath?: string;
    /**
     * label.
     * @nullable
     */
    label?: Localstring;
    /**
     * maxLength.
     * @nullable
     */
    maxLength?: number;
    /**
     * name.
     * @nullable
     */
    name?: string;
    /**
     * path.
     */
    path: string;
    /**
     * picklistOptionId.
     * @nullable
     */
    picklistOptionId?: string;
    /**
     * precision.
     * @nullable
     */
    precision?: number;
    /**
     * required.
     * @nullable
     */
    required?: boolean;
    /**
     * scale.
     * @nullable
     */
    scale?: number;
    /**
     * semantics.
     * @nullable
     */
    semantics?: string;
    /**
     * sensitive.
     * @nullable
     */
    sensitive?: boolean;
    /**
     * sortable.
     * @nullable
     */
    sortable?: boolean;
    /**
     * text.
     * @nullable
     */
    text?: string;
    /**
     * type.
     * @nullable
     */
    type?: Type;
    /**
     * updatable.
     * @nullable
     */
    updatable?: boolean;
    /**
     * upsertable.
     * @nullable
     */
    upsertable?: boolean;
    /**
     * viewable.
     * @nullable
     */
    viewable?: boolean;
}
/**
 * @deprecated since v1.6.0. Use [[Property.build]] instead.
 */
export declare function createProperty(json: any): Property;
/**
 * PropertyField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PropertyField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[Property.aggregationRole]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    aggregationRole: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Property.businessKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    businessKey: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Property.defaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultValue: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Property.displayFormat]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayFormat: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Property.fieldControl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fieldControl: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Property.filterable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    filterable: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Property.id]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Property.inlineRequired]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inlineRequired: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Property.insertable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    insertable: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Property.insertablePath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    insertablePath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Property.label]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    label: LocalstringField<EntityT>;
    /**
     * Representation of the [[Property.maxLength]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    maxLength: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[Property.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Property.path]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    path: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Property.picklistOptionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    picklistOptionId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Property.precision]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    precision: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[Property.required]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    required: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Property.scale]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    scale: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[Property.semantics]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    semantics: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Property.sensitive]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sensitive: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Property.sortable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sortable: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Property.text]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    text: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Property.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: TypeField<EntityT>;
    /**
     * Representation of the [[Property.updatable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    updatable: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Property.upsertable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    upsertable: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Property.viewable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    viewable: ComplexTypeBooleanPropertyField<EntityT>;
}
export declare namespace Property {
    function build(json: {
        [keys: string]: FieldType;
    }): Property;
}
//# sourceMappingURL=Property.d.ts.map