/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmEventPayloadRequestBuilder } from './EmEventPayloadRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BinaryField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EMEventPayload" of service "SFOData".
 */
export class EmEventPayload extends Entity implements EmEventPayloadType {
  /**
   * Technical entity name for EmEventPayload.
   */
  static _entityName = 'EMEventPayload';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmEventPayload.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Payload.
   * @nullable
   */
  fileName?: string;
  /**
   * Payload.
   * @nullable
   */
  fileType?: string;
  /**
   * Id.
   */
  id!: BigNumber;
  /**
   * Mime Type.
   * @nullable
   */
  mimeType?: string;
  /**
   * Payload.
   */
  payload!: string;
  /**
   * Type.
   */
  type!: string;

  /**
   * Returns an entity builder to construct instances `EmEventPayload`.
   * @returns A builder that constructs instances of entity type `EmEventPayload`.
   */
  static builder(): EntityBuilderType<EmEventPayload, EmEventPayloadTypeForceMandatory> {
    return Entity.entityBuilder(EmEventPayload);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmEventPayload` entity type.
   * @returns A `EmEventPayload` request builder.
   */
  static requestBuilder(): EmEventPayloadRequestBuilder {
    return new EmEventPayloadRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmEventPayload`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmEventPayload`.
   */
  static customField(fieldName: string): CustomField<EmEventPayload> {
    return Entity.customFieldSelector(fieldName, EmEventPayload);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface EmEventPayloadType {
  fileName?: string;
  fileType?: string;
  id: BigNumber;
  mimeType?: string;
  payload: string;
  type: string;
}

export interface EmEventPayloadTypeForceMandatory {
  fileName: string;
  fileType: string;
  id: BigNumber;
  mimeType: string;
  payload: string;
  type: string;
}

export namespace EmEventPayload {
  /**
   * Static representation of the [[fileName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILE_NAME: StringField<EmEventPayload> = new StringField('fileName', EmEventPayload, 'Edm.String');
  /**
   * Static representation of the [[fileType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILE_TYPE: StringField<EmEventPayload> = new StringField('fileType', EmEventPayload, 'Edm.String');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<EmEventPayload> = new BigNumberField('id', EmEventPayload, 'Edm.Int64');
  /**
   * Static representation of the [[mimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIME_TYPE: StringField<EmEventPayload> = new StringField('mimeType', EmEventPayload, 'Edm.String');
  /**
   * Static representation of the [[payload]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYLOAD: BinaryField<EmEventPayload> = new BinaryField('payload', EmEventPayload, 'Edm.Binary');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<EmEventPayload> = new StringField('type', EmEventPayload, 'Edm.String');
  /**
   * All fields of the EmEventPayload entity.
   */
  export const _allFields: Array<StringField<EmEventPayload> | BigNumberField<EmEventPayload> | BinaryField<EmEventPayload>> = [
    EmEventPayload.FILE_NAME,
    EmEventPayload.FILE_TYPE,
    EmEventPayload.ID,
    EmEventPayload.MIME_TYPE,
    EmEventPayload.PAYLOAD,
    EmEventPayload.TYPE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmEventPayload> = new AllFields('*', EmEventPayload);
  /**
   * All key fields of the EmEventPayload entity.
   */
  export const _keyFields: Array<Selectable<EmEventPayload>> = [EmEventPayload.ID];
  /**
   * Mapping of all key field names to the respective static field property EmEventPayload.
   */
  export const _keys: { [keys: string]: Selectable<EmEventPayload> } = EmEventPayload._keyFields.reduce((acc: { [keys: string]: Selectable<EmEventPayload> }, field: Selectable<EmEventPayload>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
