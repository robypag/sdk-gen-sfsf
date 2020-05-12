/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssociationEnd, AssociationEndField } from './AssociationEnd';
import { Localstring, LocalstringField } from './Localstring';
import { Association, AssociationField } from './Association';
import { Type, TypeField } from './Type';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

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
export function createNavigation(json: any): Navigation {
  return Navigation.build(json);
}

/**
 * NavigationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class NavigationField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[Navigation.aggregationRole]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aggregationRole: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('aggregationRole', this, 'Edm.String');
  /**
   * Representation of the [[Navigation.businessKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  businessKey: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('businessKey', this, 'Edm.Boolean');
  /**
   * Representation of the [[Navigation.defaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultValue: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('defaultValue', this, 'Edm.String');
  /**
   * Representation of the [[Navigation.displayFormat]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayFormat: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('displayFormat', this, 'Edm.String');
  /**
   * Representation of the [[Navigation.elmStrength]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  elmStrength: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('elmStrength', this, 'Edm.String');
  /**
   * Representation of the [[Navigation.fieldControl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldControl: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('fieldControl', this, 'Edm.String');
  /**
   * Representation of the [[Navigation.filterable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  filterable: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('filterable', this, 'Edm.Boolean');
  /**
   * Representation of the [[Navigation.fromRole]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromRole: AssociationEndField<EntityT> = new AssociationEndField('fromRole', this);
  /**
   * Representation of the [[Navigation.id]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('id', this, 'Edm.Boolean');
  /**
   * Representation of the [[Navigation.inlineRequired]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inlineRequired: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('inlineRequired', this, 'Edm.Boolean');
  /**
   * Representation of the [[Navigation.insertable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  insertable: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('insertable', this, 'Edm.Boolean');
  /**
   * Representation of the [[Navigation.insertablePath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  insertablePath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('insertablePath', this, 'Edm.String');
  /**
   * Representation of the [[Navigation.label]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  label: LocalstringField<EntityT> = new LocalstringField('label', this);
  /**
   * Representation of the [[Navigation.maxLength]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxLength: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('maxLength', this, 'Edm.Int32');
  /**
   * Representation of the [[Navigation.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('name', this, 'Edm.String');
  /**
   * Representation of the [[Navigation.navigateToPojo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  navigateToPojo: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('navigateToPojo', this, 'Edm.Boolean');
  /**
   * Representation of the [[Navigation.path]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  path: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('path', this, 'Edm.String');
  /**
   * Representation of the [[Navigation.picklistOptionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  picklistOptionId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('picklistOptionId', this, 'Edm.String');
  /**
   * Representation of the [[Navigation.precision]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  precision: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('precision', this, 'Edm.Int32');
  /**
   * Representation of the [[Navigation.relationship]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relationship: AssociationField<EntityT> = new AssociationField('relationship', this);
  /**
   * Representation of the [[Navigation.required]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  required: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('required', this, 'Edm.Boolean');
  /**
   * Representation of the [[Navigation.scale]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  scale: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('scale', this, 'Edm.Int32');
  /**
   * Representation of the [[Navigation.semantics]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  semantics: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('semantics', this, 'Edm.String');
  /**
   * Representation of the [[Navigation.sensitive]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sensitive: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('sensitive', this, 'Edm.Boolean');
  /**
   * Representation of the [[Navigation.sortable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sortable: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('sortable', this, 'Edm.Boolean');
  /**
   * Representation of the [[Navigation.text]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  text: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('text', this, 'Edm.String');
  /**
   * Representation of the [[Navigation.toRole]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toRole: AssociationEndField<EntityT> = new AssociationEndField('toRole', this);
  /**
   * Representation of the [[Navigation.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: TypeField<EntityT> = new TypeField('type', this);
  /**
   * Representation of the [[Navigation.updatable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updatable: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('updatable', this, 'Edm.Boolean');
  /**
   * Representation of the [[Navigation.upsertable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  upsertable: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('upsertable', this, 'Edm.Boolean');
  /**
   * Representation of the [[Navigation.viewable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  viewable: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('viewable', this, 'Edm.Boolean');
}

export namespace Navigation {
  export function build(json: { [keys: string]: FieldType }): Navigation {
    return createComplexType(json, {
      aggregationRole: (aggregationRole: string) => ({ aggregationRole: edmToTs(aggregationRole, 'Edm.String') }),
      businessKey: (businessKey: boolean) => ({ businessKey: edmToTs(businessKey, 'Edm.Boolean') }),
      defaultValue: (defaultValue: string) => ({ defaultValue: edmToTs(defaultValue, 'Edm.String') }),
      displayFormat: (displayFormat: string) => ({ displayFormat: edmToTs(displayFormat, 'Edm.String') }),
      elmStrength: (elmStrength: string) => ({ elmStrength: edmToTs(elmStrength, 'Edm.String') }),
      fieldControl: (fieldControl: string) => ({ fieldControl: edmToTs(fieldControl, 'Edm.String') }),
      filterable: (filterable: boolean) => ({ filterable: edmToTs(filterable, 'Edm.Boolean') }),
      fromRole: (fromRole: AssociationEnd) => ({ fromRole: AssociationEnd.build(fromRole) }),
      id: (id: boolean) => ({ id: edmToTs(id, 'Edm.Boolean') }),
      inlineRequired: (inlineRequired: boolean) => ({ inlineRequired: edmToTs(inlineRequired, 'Edm.Boolean') }),
      insertable: (insertable: boolean) => ({ insertable: edmToTs(insertable, 'Edm.Boolean') }),
      insertablePath: (insertablePath: string) => ({ insertablePath: edmToTs(insertablePath, 'Edm.String') }),
      label: (label: Localstring) => ({ label: Localstring.build(label) }),
      maxLength: (maxLength: number) => ({ maxLength: edmToTs(maxLength, 'Edm.Int32') }),
      name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      navigateToPojo: (navigateToPojo: boolean) => ({ navigateToPojo: edmToTs(navigateToPojo, 'Edm.Boolean') }),
      path: (path: string) => ({ path: edmToTs(path, 'Edm.String') }),
      picklistOptionId: (picklistOptionId: string) => ({ picklistOptionId: edmToTs(picklistOptionId, 'Edm.String') }),
      precision: (precision: number) => ({ precision: edmToTs(precision, 'Edm.Int32') }),
      relationship: (relationship: Association) => ({ relationship: Association.build(relationship) }),
      required: (required: boolean) => ({ required: edmToTs(required, 'Edm.Boolean') }),
      scale: (scale: number) => ({ scale: edmToTs(scale, 'Edm.Int32') }),
      semantics: (semantics: string) => ({ semantics: edmToTs(semantics, 'Edm.String') }),
      sensitive: (sensitive: boolean) => ({ sensitive: edmToTs(sensitive, 'Edm.Boolean') }),
      sortable: (sortable: boolean) => ({ sortable: edmToTs(sortable, 'Edm.Boolean') }),
      text: (text: string) => ({ text: edmToTs(text, 'Edm.String') }),
      toRole: (toRole: AssociationEnd) => ({ toRole: AssociationEnd.build(toRole) }),
      type: (type: Type) => ({ type: Type.build(type) }),
      updatable: (updatable: boolean) => ({ updatable: edmToTs(updatable, 'Edm.Boolean') }),
      upsertable: (upsertable: boolean) => ({ upsertable: edmToTs(upsertable, 'Edm.Boolean') }),
      viewable: (viewable: boolean) => ({ viewable: edmToTs(viewable, 'Edm.Boolean') })
    });
  }
}
