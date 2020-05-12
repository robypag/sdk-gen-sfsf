/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DgFilterRequestBuilder } from './DgFilterRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DGFilter" of service "SFOData".
 */
export class DgFilter extends Entity implements DgFilterType {
  /**
   * Technical entity name for DgFilter.
   */
  static _entityName = 'DGFilter';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DgFilter.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * filterId.
   * Maximum length: 200.
   */
  filterId!: string;
  /**
   * One-to-many navigation property to the [[DgExpression]] entity.
   */
  expressions!: DgExpression[];
  /**
   * One-to-one navigation property to the [[DgField]] entity.
   */
  field!: DgField;

  /**
   * Returns an entity builder to construct instances `DgFilter`.
   * @returns A builder that constructs instances of entity type `DgFilter`.
   */
  static builder(): EntityBuilderType<DgFilter, DgFilterTypeForceMandatory> {
    return Entity.entityBuilder(DgFilter);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DgFilter` entity type.
   * @returns A `DgFilter` request builder.
   */
  static requestBuilder(): DgFilterRequestBuilder {
    return new DgFilterRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DgFilter`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DgFilter`.
   */
  static customField(fieldName: string): CustomField<DgFilter> {
    return Entity.customFieldSelector(fieldName, DgFilter);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { DgExpression, DgExpressionType } from './DgExpression';
import { DgField, DgFieldType } from './DgField';

export interface DgFilterType {
  filterId: string;
  expressions: DgExpressionType[];
  field: DgFieldType;
}

export interface DgFilterTypeForceMandatory {
  filterId: string;
  expressions: DgExpressionType[];
  field: DgFieldType;
}

export namespace DgFilter {
  /**
   * Static representation of the [[filterId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILTER_ID: StringField<DgFilter> = new StringField('filterId', DgFilter, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[expressions]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPRESSIONS: Link<DgFilter, DgExpression> = new Link('expressions', DgFilter, DgExpression);
  /**
   * Static representation of the one-to-one navigation property [[field]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD: OneToOneLink<DgFilter, DgField> = new OneToOneLink('field', DgFilter, DgField);
  /**
   * All fields of the DgFilter entity.
   */
  export const _allFields: Array<StringField<DgFilter> | Link<DgFilter, DgExpression> | OneToOneLink<DgFilter, DgField>> = [
    DgFilter.FILTER_ID,
    DgFilter.EXPRESSIONS,
    DgFilter.FIELD
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DgFilter> = new AllFields('*', DgFilter);
  /**
   * All key fields of the DgFilter entity.
   */
  export const _keyFields: Array<Selectable<DgFilter>> = [DgFilter.FILTER_ID];
  /**
   * Mapping of all key field names to the respective static field property DgFilter.
   */
  export const _keys: { [keys: string]: Selectable<DgFilter> } = DgFilter._keyFields.reduce((acc: { [keys: string]: Selectable<DgFilter> }, field: Selectable<DgFilter>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
