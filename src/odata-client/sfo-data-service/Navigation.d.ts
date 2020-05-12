import { AssociationEnd, AssociationEndField } from './AssociationEnd';
import { Localstring, LocalstringField } from './Localstring';
import { Association, AssociationField } from './Association';
import { Type, TypeField } from './Type';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * Navigation
 */
export interface Navigation {
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
     * elmStrength.
     */
    elmStrength: string;
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
     * fromRole.
     * @nullable
     */
    fromRole?: AssociationEnd;
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
     * navigateToPojo.
     * @nullable
     */
    navigateToPojo?: boolean;
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
     * relationship.
     * @nullable
     */
    relationship?: Association;
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
     * toRole.
     * @nullable
     */
    toRole?: AssociationEnd;
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
 * @deprecated since v1.6.0. Use [[Navigation.build]] instead.
 */
export declare function createNavigation(json: any): Navigation;
/**
 * NavigationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class NavigationField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[Navigation.aggregationRole]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    aggregationRole: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.businessKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    businessKey: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.defaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultValue: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.displayFormat]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayFormat: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.elmStrength]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    elmStrength: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.fieldControl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fieldControl: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.filterable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    filterable: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.fromRole]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fromRole: AssociationEndField<EntityT>;
    /**
     * Representation of the [[Navigation.id]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.inlineRequired]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inlineRequired: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.insertable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    insertable: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.insertablePath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    insertablePath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.label]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    label: LocalstringField<EntityT>;
    /**
     * Representation of the [[Navigation.maxLength]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    maxLength: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.navigateToPojo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    navigateToPojo: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.path]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    path: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.picklistOptionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    picklistOptionId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.precision]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    precision: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.relationship]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    relationship: AssociationField<EntityT>;
    /**
     * Representation of the [[Navigation.required]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    required: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.scale]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    scale: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.semantics]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    semantics: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.sensitive]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sensitive: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.sortable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sortable: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.text]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    text: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.toRole]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    toRole: AssociationEndField<EntityT>;
    /**
     * Representation of the [[Navigation.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: TypeField<EntityT>;
    /**
     * Representation of the [[Navigation.updatable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    updatable: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.upsertable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    upsertable: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Navigation.viewable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    viewable: ComplexTypeBooleanPropertyField<EntityT>;
}
export declare namespace Navigation {
    function build(json: {
        [keys: string]: FieldType;
    }): Navigation;
}
//# sourceMappingURL=Navigation.d.ts.map