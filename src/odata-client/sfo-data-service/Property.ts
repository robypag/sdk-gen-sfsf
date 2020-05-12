/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Localstring, LocalstringField } from './Localstring';
import { Type, TypeField } from './Type';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

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
export function createProperty(json: any): Property {
  return Property.build(json);
}

/**
 * PropertyField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PropertyField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[Property.aggregationRole]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aggregationRole: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('aggregationRole', this, 'Edm.String');
  /**
   * Representation of the [[Property.businessKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  businessKey: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('businessKey', this, 'Edm.Boolean');
  /**
   * Representation of the [[Property.defaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultValue: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('defaultValue', this, 'Edm.String');
  /**
   * Representation of the [[Property.displayFormat]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayFormat: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('displayFormat', this, 'Edm.String');
  /**
   * Representation of the [[Property.fieldControl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldControl: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('fieldControl', this, 'Edm.String');
  /**
   * Representation of the [[Property.filterable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  filterable: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('filterable', this, 'Edm.Boolean');
  /**
   * Representation of the [[Property.id]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('id', this, 'Edm.Boolean');
  /**
   * Representation of the [[Property.inlineRequired]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inlineRequired: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('inlineRequired', this, 'Edm.Boolean');
  /**
   * Representation of the [[Property.insertable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  insertable: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('insertable', this, 'Edm.Boolean');
  /**
   * Representation of the [[Property.insertablePath]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  insertablePath: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('insertablePath', this, 'Edm.String');
  /**
   * Representation of the [[Property.label]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  label: LocalstringField<EntityT> = new LocalstringField('label', this);
  /**
   * Representation of the [[Property.maxLength]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxLength: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('maxLength', this, 'Edm.Int32');
  /**
   * Representation of the [[Property.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('name', this, 'Edm.String');
  /**
   * Representation of the [[Property.path]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  path: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('path', this, 'Edm.String');
  /**
   * Representation of the [[Property.picklistOptionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  picklistOptionId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('picklistOptionId', this, 'Edm.String');
  /**
   * Representation of the [[Property.precision]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  precision: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('precision', this, 'Edm.Int32');
  /**
   * Representation of the [[Property.required]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  required: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('required', this, 'Edm.Boolean');
  /**
   * Representation of the [[Property.scale]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  scale: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('scale', this, 'Edm.Int32');
  /**
   * Representation of the [[Property.semantics]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  semantics: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('semantics', this, 'Edm.String');
  /**
   * Representation of the [[Property.sensitive]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sensitive: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('sensitive', this, 'Edm.Boolean');
  /**
   * Representation of the [[Property.sortable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sortable: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('sortable', this, 'Edm.Boolean');
  /**
   * Representation of the [[Property.text]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  text: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('text', this, 'Edm.String');
  /**
   * Representation of the [[Property.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: TypeField<EntityT> = new TypeField('type', this);
  /**
   * Representation of the [[Property.updatable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updatable: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('updatable', this, 'Edm.Boolean');
  /**
   * Representation of the [[Property.upsertable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  upsertable: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('upsertable', this, 'Edm.Boolean');
  /**
   * Representation of the [[Property.viewable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  viewable: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('viewable', this, 'Edm.Boolean');
}

export namespace Property {
  export function build(json: { [keys: string]: FieldType }): Property {
    return createComplexType(json, {
      aggregationRole: (aggregationRole: string) => ({ aggregationRole: edmToTs(aggregationRole, 'Edm.String') }),
      businessKey: (businessKey: boolean) => ({ businessKey: edmToTs(businessKey, 'Edm.Boolean') }),
      defaultValue: (defaultValue: string) => ({ defaultValue: edmToTs(defaultValue, 'Edm.String') }),
      displayFormat: (displayFormat: string) => ({ displayFormat: edmToTs(displayFormat, 'Edm.String') }),
      fieldControl: (fieldControl: string) => ({ fieldControl: edmToTs(fieldControl, 'Edm.String') }),
      filterable: (filterable: boolean) => ({ filterable: edmToTs(filterable, 'Edm.Boolean') }),
      id: (id: boolean) => ({ id: edmToTs(id, 'Edm.Boolean') }),
      inlineRequired: (inlineRequired: boolean) => ({ inlineRequired: edmToTs(inlineRequired, 'Edm.Boolean') }),
      insertable: (insertable: boolean) => ({ insertable: edmToTs(insertable, 'Edm.Boolean') }),
      insertablePath: (insertablePath: string) => ({ insertablePath: edmToTs(insertablePath, 'Edm.String') }),
      label: (label: Localstring) => ({ label: Localstring.build(label) }),
      maxLength: (maxLength: number) => ({ maxLength: edmToTs(maxLength, 'Edm.Int32') }),
      name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      path: (path: string) => ({ path: edmToTs(path, 'Edm.String') }),
      picklistOptionId: (picklistOptionId: string) => ({ picklistOptionId: edmToTs(picklistOptionId, 'Edm.String') }),
      precision: (precision: number) => ({ precision: edmToTs(precision, 'Edm.Int32') }),
      required: (required: boolean) => ({ required: edmToTs(required, 'Edm.Boolean') }),
      scale: (scale: number) => ({ scale: edmToTs(scale, 'Edm.Int32') }),
      semantics: (semantics: string) => ({ semantics: edmToTs(semantics, 'Edm.String') }),
      sensitive: (sensitive: boolean) => ({ sensitive: edmToTs(sensitive, 'Edm.Boolean') }),
      sortable: (sortable: boolean) => ({ sortable: edmToTs(sortable, 'Edm.Boolean') }),
      text: (text: string) => ({ text: edmToTs(text, 'Edm.String') }),
      type: (type: Type) => ({ type: Type.build(type) }),
      updatable: (updatable: boolean) => ({ updatable: edmToTs(updatable, 'Edm.Boolean') }),
      upsertable: (upsertable: boolean) => ({ upsertable: edmToTs(upsertable, 'Edm.Boolean') }),
      viewable: (viewable: boolean) => ({ viewable: edmToTs(viewable, 'Edm.Boolean') })
    });
  }
}
