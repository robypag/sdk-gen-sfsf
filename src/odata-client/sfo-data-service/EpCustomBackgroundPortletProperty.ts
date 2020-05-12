/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

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
export function createEpCustomBackgroundPortletProperty(json: any): EpCustomBackgroundPortletProperty {
  return EpCustomBackgroundPortletProperty.build(json);
}

/**
 * EpCustomBackgroundPortletPropertyField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EpCustomBackgroundPortletPropertyField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EpCustomBackgroundPortletProperty.isPii]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isPii: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('isPII', this, 'Edm.Boolean');
  /**
   * Representation of the [[EpCustomBackgroundPortletProperty.isPicklist]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isPicklist: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('isPicklist', this, 'Edm.Boolean');
  /**
   * Representation of the [[EpCustomBackgroundPortletProperty.isUrlLink]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isUrlLink: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('isUrlLink', this, 'Edm.Boolean');
  /**
   * Representation of the [[EpCustomBackgroundPortletProperty.label]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  label: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('label', this, 'Edm.String');
  /**
   * Representation of the [[EpCustomBackgroundPortletProperty.parentFieldId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  parentFieldId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('parentFieldId', this, 'Edm.String');
  /**
   * Representation of the [[EpCustomBackgroundPortletProperty.picklistId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  picklistId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('picklistId', this, 'Edm.String');
  /**
   * Representation of the [[EpCustomBackgroundPortletProperty.propertyName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  propertyName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('propertyName', this, 'Edm.String');
  /**
   * Representation of the [[EpCustomBackgroundPortletProperty.required]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  required: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('required', this, 'Edm.Boolean');
}

export namespace EpCustomBackgroundPortletProperty {
  export function build(json: { [keys: string]: FieldType }): EpCustomBackgroundPortletProperty {
    return createComplexType(json, {
      isPII: (isPii: boolean) => ({ isPii: edmToTs(isPii, 'Edm.Boolean') }),
      isPicklist: (isPicklist: boolean) => ({ isPicklist: edmToTs(isPicklist, 'Edm.Boolean') }),
      isUrlLink: (isUrlLink: boolean) => ({ isUrlLink: edmToTs(isUrlLink, 'Edm.Boolean') }),
      label: (label: string) => ({ label: edmToTs(label, 'Edm.String') }),
      parentFieldId: (parentFieldId: string) => ({ parentFieldId: edmToTs(parentFieldId, 'Edm.String') }),
      picklistId: (picklistId: string) => ({ picklistId: edmToTs(picklistId, 'Edm.String') }),
      propertyName: (propertyName: string) => ({ propertyName: edmToTs(propertyName, 'Edm.String') }),
      required: (required: boolean) => ({ required: edmToTs(required, 'Edm.Boolean') })
    });
  }
}
