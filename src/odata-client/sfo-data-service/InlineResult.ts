/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InlineResultRequestBuilder } from './InlineResultRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "InlineResult" of service "SFOData".
 */
export class InlineResult extends Entity implements InlineResultType {
  /**
   * Technical entity name for InlineResult.
   */
  static _entityName = 'InlineResult';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for InlineResult.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * inlineProperty.
   */
  inlineProperty!: string;
  /**
   * One-to-many navigation property to the [[UpsertResult]] entity.
   */
  results!: UpsertResult[];

  /**
   * Returns an entity builder to construct instances `InlineResult`.
   * @returns A builder that constructs instances of entity type `InlineResult`.
   */
  static builder(): EntityBuilderType<InlineResult, InlineResultTypeForceMandatory> {
    return Entity.entityBuilder(InlineResult);
  }

  /**
   * Returns a request builder to construct requests for operations on the `InlineResult` entity type.
   * @returns A `InlineResult` request builder.
   */
  static requestBuilder(): InlineResultRequestBuilder {
    return new InlineResultRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `InlineResult`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `InlineResult`.
   */
  static customField(fieldName: string): CustomField<InlineResult> {
    return Entity.customFieldSelector(fieldName, InlineResult);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { UpsertResult, UpsertResultType } from './UpsertResult';

export interface InlineResultType {
  inlineProperty: string;
  results: UpsertResultType[];
}

export interface InlineResultTypeForceMandatory {
  inlineProperty: string;
  results: UpsertResultType[];
}

export namespace InlineResult {
  /**
   * Static representation of the [[inlineProperty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INLINE_PROPERTY: StringField<InlineResult> = new StringField('inlineProperty', InlineResult, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[results]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESULTS: Link<InlineResult, UpsertResult> = new Link('results', InlineResult, UpsertResult);
  /**
   * All fields of the InlineResult entity.
   */
  export const _allFields: Array<StringField<InlineResult> | Link<InlineResult, UpsertResult>> = [
    InlineResult.INLINE_PROPERTY,
    InlineResult.RESULTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<InlineResult> = new AllFields('*', InlineResult);
  /**
   * All key fields of the InlineResult entity.
   */
  export const _keyFields: Array<Selectable<InlineResult>> = [InlineResult.INLINE_PROPERTY];
  /**
   * Mapping of all key field names to the respective static field property InlineResult.
   */
  export const _keys: { [keys: string]: Selectable<InlineResult> } = InlineResult._keyFields.reduce((acc: { [keys: string]: Selectable<InlineResult> }, field: Selectable<InlineResult>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
