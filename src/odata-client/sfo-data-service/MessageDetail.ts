/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageDetailRequestBuilder } from './MessageDetailRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "MessageDetail" of service "SFOData".
 */
export class MessageDetail extends Entity implements MessageDetailType {
  /**
   * Technical entity name for MessageDetail.
   */
  static _entityName = 'MessageDetail';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for MessageDetail.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * code.
   */
  code!: string;
  /**
   * message.
   */
  message!: string;
  /**
   * severity.
   */
  severity!: string;
  /**
   * target.
   */
  target!: string;

  /**
   * Returns an entity builder to construct instances `MessageDetail`.
   * @returns A builder that constructs instances of entity type `MessageDetail`.
   */
  static builder(): EntityBuilderType<MessageDetail, MessageDetailTypeForceMandatory> {
    return Entity.entityBuilder(MessageDetail);
  }

  /**
   * Returns a request builder to construct requests for operations on the `MessageDetail` entity type.
   * @returns A `MessageDetail` request builder.
   */
  static requestBuilder(): MessageDetailRequestBuilder {
    return new MessageDetailRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `MessageDetail`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `MessageDetail`.
   */
  static customField(fieldName: string): CustomField<MessageDetail> {
    return Entity.customFieldSelector(fieldName, MessageDetail);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface MessageDetailType {
  code: string;
  message: string;
  severity: string;
  target: string;
}

export interface MessageDetailTypeForceMandatory {
  code: string;
  message: string;
  severity: string;
  target: string;
}

export namespace MessageDetail {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<MessageDetail> = new StringField('code', MessageDetail, 'Edm.String');
  /**
   * Static representation of the [[message]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MESSAGE: StringField<MessageDetail> = new StringField('message', MessageDetail, 'Edm.String');
  /**
   * Static representation of the [[severity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEVERITY: StringField<MessageDetail> = new StringField('severity', MessageDetail, 'Edm.String');
  /**
   * Static representation of the [[target]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET: StringField<MessageDetail> = new StringField('target', MessageDetail, 'Edm.String');
  /**
   * All fields of the MessageDetail entity.
   */
  export const _allFields: Array<StringField<MessageDetail>> = [
    MessageDetail.CODE,
    MessageDetail.MESSAGE,
    MessageDetail.SEVERITY,
    MessageDetail.TARGET
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<MessageDetail> = new AllFields('*', MessageDetail);
  /**
   * All key fields of the MessageDetail entity.
   */
  export const _keyFields: Array<Selectable<MessageDetail>> = [MessageDetail.CODE];
  /**
   * Mapping of all key field names to the respective static field property MessageDetail.
   */
  export const _keys: { [keys: string]: Selectable<MessageDetail> } = MessageDetail._keyFields.reduce((acc: { [keys: string]: Selectable<MessageDetail> }, field: Selectable<MessageDetail>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
