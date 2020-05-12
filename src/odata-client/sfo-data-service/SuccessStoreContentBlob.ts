/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SuccessStoreContentBlobRequestBuilder } from './SuccessStoreContentBlobRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SuccessStoreContentBlob" of service "SFOData".
 */
export class SuccessStoreContentBlob extends Entity implements SuccessStoreContentBlobType {
  /**
   * Technical entity name for SuccessStoreContentBlob.
   */
  static _entityName = 'SuccessStoreContentBlob';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SuccessStoreContentBlob.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * contentId.
   */
  contentId!: string;

  /**
   * Returns an entity builder to construct instances `SuccessStoreContentBlob`.
   * @returns A builder that constructs instances of entity type `SuccessStoreContentBlob`.
   */
  static builder(): EntityBuilderType<SuccessStoreContentBlob, SuccessStoreContentBlobTypeForceMandatory> {
    return Entity.entityBuilder(SuccessStoreContentBlob);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SuccessStoreContentBlob` entity type.
   * @returns A `SuccessStoreContentBlob` request builder.
   */
  static requestBuilder(): SuccessStoreContentBlobRequestBuilder {
    return new SuccessStoreContentBlobRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SuccessStoreContentBlob`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SuccessStoreContentBlob`.
   */
  static customField(fieldName: string): CustomField<SuccessStoreContentBlob> {
    return Entity.customFieldSelector(fieldName, SuccessStoreContentBlob);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface SuccessStoreContentBlobType {
  contentId: string;
}

export interface SuccessStoreContentBlobTypeForceMandatory {
  contentId: string;
}

export namespace SuccessStoreContentBlob {
  /**
   * Static representation of the [[contentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTENT_ID: StringField<SuccessStoreContentBlob> = new StringField('contentId', SuccessStoreContentBlob, 'Edm.String');
  /**
   * All fields of the SuccessStoreContentBlob entity.
   */
  export const _allFields: Array<StringField<SuccessStoreContentBlob>> = [
    SuccessStoreContentBlob.CONTENT_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SuccessStoreContentBlob> = new AllFields('*', SuccessStoreContentBlob);
  /**
   * All key fields of the SuccessStoreContentBlob entity.
   */
  export const _keyFields: Array<Selectable<SuccessStoreContentBlob>> = [SuccessStoreContentBlob.CONTENT_ID];
  /**
   * Mapping of all key field names to the respective static field property SuccessStoreContentBlob.
   */
  export const _keys: { [keys: string]: Selectable<SuccessStoreContentBlob> } = SuccessStoreContentBlob._keyFields.reduce((acc: { [keys: string]: Selectable<SuccessStoreContentBlob> }, field: Selectable<SuccessStoreContentBlob>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
