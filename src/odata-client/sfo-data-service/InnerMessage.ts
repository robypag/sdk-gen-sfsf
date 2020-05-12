/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InnerMessageRequestBuilder } from './InnerMessageRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "InnerMessage" of service "SFOData".
 */
export class InnerMessage extends Entity implements InnerMessageType {
  /**
   * Technical entity name for InnerMessage.
   */
  static _entityName = 'InnerMessage';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for InnerMessage.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * key.
   */
  key!: string;
  /**
   * One-to-many navigation property to the [[MessageDetail]] entity.
   */
  messagedetails!: MessageDetail[];

  /**
   * Returns an entity builder to construct instances `InnerMessage`.
   * @returns A builder that constructs instances of entity type `InnerMessage`.
   */
  static builder(): EntityBuilderType<InnerMessage, InnerMessageTypeForceMandatory> {
    return Entity.entityBuilder(InnerMessage);
  }

  /**
   * Returns a request builder to construct requests for operations on the `InnerMessage` entity type.
   * @returns A `InnerMessage` request builder.
   */
  static requestBuilder(): InnerMessageRequestBuilder {
    return new InnerMessageRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `InnerMessage`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `InnerMessage`.
   */
  static customField(fieldName: string): CustomField<InnerMessage> {
    return Entity.customFieldSelector(fieldName, InnerMessage);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { MessageDetail, MessageDetailType } from './MessageDetail';

export interface InnerMessageType {
  key: string;
  messagedetails: MessageDetailType[];
}

export interface InnerMessageTypeForceMandatory {
  key: string;
  messagedetails: MessageDetailType[];
}

export namespace InnerMessage {
  /**
   * Static representation of the [[key]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KEY: StringField<InnerMessage> = new StringField('key', InnerMessage, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[messagedetails]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MESSAGEDETAILS: Link<InnerMessage, MessageDetail> = new Link('messagedetails', InnerMessage, MessageDetail);
  /**
   * All fields of the InnerMessage entity.
   */
  export const _allFields: Array<StringField<InnerMessage> | Link<InnerMessage, MessageDetail>> = [
    InnerMessage.KEY,
    InnerMessage.MESSAGEDETAILS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<InnerMessage> = new AllFields('*', InnerMessage);
  /**
   * All key fields of the InnerMessage entity.
   */
  export const _keyFields: Array<Selectable<InnerMessage>> = [InnerMessage.KEY];
  /**
   * Mapping of all key field names to the respective static field property InnerMessage.
   */
  export const _keys: { [keys: string]: Selectable<InnerMessage> } = InnerMessage._keyFields.reduce((acc: { [keys: string]: Selectable<InnerMessage> }, field: Selectable<InnerMessage>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
