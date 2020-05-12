/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UpsertResultRequestBuilder } from './UpsertResultRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "UpsertResult" of service "SFOData".
 */
export class UpsertResult extends Entity implements UpsertResultType {
  /**
   * Technical entity name for UpsertResult.
   */
  static _entityName = 'UpsertResult';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for UpsertResult.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * editStatus.
   */
  editStatus!: string;
  /**
   * httpCode.
   */
  httpCode!: number;
  /**
   * index.
   * @nullable
   */
  index?: number;
  /**
   * key.
   */
  key!: string;
  /**
   * message.
   * @nullable
   */
  message?: string;
  /**
   * status.
   */
  status!: string;
  /**
   * One-to-many navigation property to the [[InlineResult]] entity.
   */
  inlineResults!: InlineResult[];
  /**
   * One-to-one navigation property to the [[InnerMessage]] entity.
   */
  innermessage!: InnerMessage;

  /**
   * Returns an entity builder to construct instances `UpsertResult`.
   * @returns A builder that constructs instances of entity type `UpsertResult`.
   */
  static builder(): EntityBuilderType<UpsertResult, UpsertResultTypeForceMandatory> {
    return Entity.entityBuilder(UpsertResult);
  }

  /**
   * Returns a request builder to construct requests for operations on the `UpsertResult` entity type.
   * @returns A `UpsertResult` request builder.
   */
  static requestBuilder(): UpsertResultRequestBuilder {
    return new UpsertResultRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `UpsertResult`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `UpsertResult`.
   */
  static customField(fieldName: string): CustomField<UpsertResult> {
    return Entity.customFieldSelector(fieldName, UpsertResult);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { InlineResult, InlineResultType } from './InlineResult';
import { InnerMessage, InnerMessageType } from './InnerMessage';

export interface UpsertResultType {
  editStatus: string;
  httpCode: number;
  index?: number;
  key: string;
  message?: string;
  status: string;
  inlineResults: InlineResultType[];
  innermessage: InnerMessageType;
}

export interface UpsertResultTypeForceMandatory {
  editStatus: string;
  httpCode: number;
  index: number;
  key: string;
  message: string;
  status: string;
  inlineResults: InlineResultType[];
  innermessage: InnerMessageType;
}

export namespace UpsertResult {
  /**
   * Static representation of the [[editStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EDIT_STATUS: StringField<UpsertResult> = new StringField('editStatus', UpsertResult, 'Edm.String');
  /**
   * Static representation of the [[httpCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HTTP_CODE: NumberField<UpsertResult> = new NumberField('httpCode', UpsertResult, 'Edm.Int32');
  /**
   * Static representation of the [[index]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDEX: NumberField<UpsertResult> = new NumberField('index', UpsertResult, 'Edm.Int32');
  /**
   * Static representation of the [[key]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KEY: StringField<UpsertResult> = new StringField('key', UpsertResult, 'Edm.String');
  /**
   * Static representation of the [[message]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MESSAGE: StringField<UpsertResult> = new StringField('message', UpsertResult, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<UpsertResult> = new StringField('status', UpsertResult, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[inlineResults]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INLINE_RESULTS: Link<UpsertResult, InlineResult> = new Link('inlineResults', UpsertResult, InlineResult);
  /**
   * Static representation of the one-to-one navigation property [[innermessage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INNERMESSAGE: OneToOneLink<UpsertResult, InnerMessage> = new OneToOneLink('innermessage', UpsertResult, InnerMessage);
  /**
   * All fields of the UpsertResult entity.
   */
  export const _allFields: Array<StringField<UpsertResult> | NumberField<UpsertResult> | Link<UpsertResult, InlineResult> | OneToOneLink<UpsertResult, InnerMessage>> = [
    UpsertResult.EDIT_STATUS,
    UpsertResult.HTTP_CODE,
    UpsertResult.INDEX,
    UpsertResult.KEY,
    UpsertResult.MESSAGE,
    UpsertResult.STATUS,
    UpsertResult.INLINE_RESULTS,
    UpsertResult.INNERMESSAGE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<UpsertResult> = new AllFields('*', UpsertResult);
  /**
   * All key fields of the UpsertResult entity.
   */
  export const _keyFields: Array<Selectable<UpsertResult>> = [UpsertResult.KEY];
  /**
   * Mapping of all key field names to the respective static field property UpsertResult.
   */
  export const _keys: { [keys: string]: Selectable<UpsertResult> } = UpsertResult._keyFields.reduce((acc: { [keys: string]: Selectable<UpsertResult> }, field: Selectable<UpsertResult>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
