/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_DocumentsRequestBuilder } from './Background_DocumentsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_Documents" of service "SFOData".
 */
export class Background_Documents extends Entity implements Background_DocumentsType {
  /**
   * Technical entity name for Background_Documents.
   */
  static _entityName = 'Background_Documents';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_Documents.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Document Name.
   * @nullable
   */
  docName?: string;
  /**
   * Attachment.
   */
  attachment!: number;
  /**
   * backgroundElementId.
   */
  backgroundElementId!: BigNumber;
  /**
   * bgOrderPos.
   */
  bgOrderPos!: BigNumber;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * userId.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  attachmentNav!: Attachment;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;

  /**
   * Returns an entity builder to construct instances `Background_Documents`.
   * @returns A builder that constructs instances of entity type `Background_Documents`.
   */
  static builder(): EntityBuilderType<Background_Documents, Background_DocumentsTypeForceMandatory> {
    return Entity.entityBuilder(Background_Documents);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_Documents` entity type.
   * @returns A `Background_Documents` request builder.
   */
  static requestBuilder(): Background_DocumentsRequestBuilder {
    return new Background_DocumentsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Documents`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_Documents`.
   */
  static customField(fieldName: string): CustomField<Background_Documents> {
    return Entity.customFieldSelector(fieldName, Background_Documents);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Attachment, AttachmentType } from './Attachment';
import { User, UserType } from './User';

export interface Background_DocumentsType {
  docName?: string;
  attachment: number;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  lastModifiedDate: Moment;
  userId: string;
  attachmentNav: AttachmentType;
  userIdNav: UserType;
}

export interface Background_DocumentsTypeForceMandatory {
  docName: string;
  attachment: number;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  lastModifiedDate: Moment;
  userId: string;
  attachmentNav: AttachmentType;
  userIdNav: UserType;
}

export namespace Background_Documents {
  /**
   * Static representation of the [[docName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NAME: StringField<Background_Documents> = new StringField('DocName', Background_Documents, 'Edm.String');
  /**
   * Static representation of the [[attachment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT: NumberField<Background_Documents> = new NumberField('attachment', Background_Documents, 'Edm.Int32');
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Documents> = new BigNumberField('backgroundElementId', Background_Documents, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_Documents> = new BigNumberField('bgOrderPos', Background_Documents, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_Documents> = new DateField('lastModifiedDate', Background_Documents, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_Documents> = new StringField('userId', Background_Documents, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[attachmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_NAV: OneToOneLink<Background_Documents, Attachment> = new OneToOneLink('attachmentNav', Background_Documents, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_Documents, User> = new OneToOneLink('userIdNav', Background_Documents, User);
  /**
   * All fields of the Background_Documents entity.
   */
  export const _allFields: Array<StringField<Background_Documents> | NumberField<Background_Documents> | BigNumberField<Background_Documents> | DateField<Background_Documents> | OneToOneLink<Background_Documents, Attachment> | OneToOneLink<Background_Documents, User>> = [
    Background_Documents.DOC_NAME,
    Background_Documents.ATTACHMENT,
    Background_Documents.BACKGROUND_ELEMENT_ID,
    Background_Documents.BG_ORDER_POS,
    Background_Documents.LAST_MODIFIED_DATE,
    Background_Documents.USER_ID,
    Background_Documents.ATTACHMENT_NAV,
    Background_Documents.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_Documents> = new AllFields('*', Background_Documents);
  /**
   * All key fields of the Background_Documents entity.
   */
  export const _keyFields: Array<Selectable<Background_Documents>> = [Background_Documents.BACKGROUND_ELEMENT_ID, Background_Documents.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_Documents.
   */
  export const _keys: { [keys: string]: Selectable<Background_Documents> } = Background_Documents._keyFields.reduce((acc: { [keys: string]: Selectable<Background_Documents> }, field: Selectable<Background_Documents>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
