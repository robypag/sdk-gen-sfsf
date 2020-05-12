/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AttachmentRequestBuilder } from './AttachmentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BinaryField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Attachment" of service "SFOData".
 */
export class Attachment extends Entity implements AttachmentType {
  /**
   * Technical entity name for Attachment.
   */
  static _entityName = 'Attachment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Attachment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * attachmentId.
   */
  attachmentId!: BigNumber;
  /**
   * country.
   * Maximum length: 256.
   * @nullable
   */
  country?: string;
  /**
   * createdDate.
   */
  createdDate!: Moment;
  /**
   * deletable.
   */
  deletable!: boolean;
  /**
   * deprecable.
   */
  deprecable!: boolean;
  /**
   * description.
   * Maximum length: 4000.
   * @nullable
   */
  description?: string;
  /**
   * documentCategory.
   * Maximum length: 256.
   * @nullable
   */
  documentCategory?: string;
  /**
   * documentEntityId.
   * Maximum length: 256.
   * @nullable
   */
  documentEntityId?: string;
  /**
   * documentEntityType.
   * Maximum length: 256.
   * @nullable
   */
  documentEntityType?: string;
  /**
   * documentType.
   * Maximum length: 256.
   * @nullable
   */
  documentType?: string;
  /**
   * externalId.
   * @nullable
   */
  externalId?: BigNumber;
  /**
   * fileContent.
   */
  fileContent!: string;
  /**
   * fileExtension.
   * Maximum length: 5.
   */
  fileExtension!: string;
  /**
   * fileName.
   * Maximum length: 256.
   */
  fileName!: string;
  /**
   * fileSize.
   */
  fileSize!: number;
  /**
   * imageConvertInProgress.
   */
  imageConvertInProgress!: boolean;
  /**
   * language.
   * Maximum length: 256.
   * @nullable
   */
  language?: string;
  /**
   * lastAccessed.
   * @nullable
   */
  lastAccessed?: Moment;
  /**
   * lastModifiedDateTime.
   */
  lastModifiedDateTime!: Moment;
  /**
   * mimeType.
   * Maximum length: 256.
   */
  mimeType!: string;
  /**
   * module.
   * Maximum length: 100.
   */
  module!: string;
  /**
   * moduleCategory.
   * Maximum length: 100.
   * @nullable
   */
  moduleCategory?: string;
  /**
   * ownerId.
   * Maximum length: 255.
   * @nullable
   */
  ownerId?: string;
  /**
   * ownerIdType.
   * Maximum length: 100.
   * @nullable
   */
  ownerIdType?: string;
  /**
   * piiFlag.
   * @nullable
   */
  piiFlag?: number;
  /**
   * searchable.
   */
  searchable!: boolean;
  /**
   * softDelete.
   */
  softDelete!: boolean;
  /**
   * userId.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
  /**
   * viewable.
   */
  viewable!: boolean;
  /**
   * One-to-one navigation property to the [[Candidate]] entity.
   */
  candidateNav!: Candidate;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userNav!: User;

  /**
   * Returns an entity builder to construct instances `Attachment`.
   * @returns A builder that constructs instances of entity type `Attachment`.
   */
  static builder(): EntityBuilderType<Attachment, AttachmentTypeForceMandatory> {
    return Entity.entityBuilder(Attachment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Attachment` entity type.
   * @returns A `Attachment` request builder.
   */
  static requestBuilder(): AttachmentRequestBuilder {
    return new AttachmentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Attachment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Attachment`.
   */
  static customField(fieldName: string): CustomField<Attachment> {
    return Entity.customFieldSelector(fieldName, Attachment);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Candidate, CandidateType } from './Candidate';
import { User, UserType } from './User';

export interface AttachmentType {
  attachmentId: BigNumber;
  country?: string;
  createdDate: Moment;
  deletable: boolean;
  deprecable: boolean;
  description?: string;
  documentCategory?: string;
  documentEntityId?: string;
  documentEntityType?: string;
  documentType?: string;
  externalId?: BigNumber;
  fileContent: string;
  fileExtension: string;
  fileName: string;
  fileSize: number;
  imageConvertInProgress: boolean;
  language?: string;
  lastAccessed?: Moment;
  lastModifiedDateTime: Moment;
  mimeType: string;
  module: string;
  moduleCategory?: string;
  ownerId?: string;
  ownerIdType?: string;
  piiFlag?: number;
  searchable: boolean;
  softDelete: boolean;
  userId?: string;
  viewable: boolean;
  candidateNav: CandidateType;
  userNav: UserType;
}

export interface AttachmentTypeForceMandatory {
  attachmentId: BigNumber;
  country: string;
  createdDate: Moment;
  deletable: boolean;
  deprecable: boolean;
  description: string;
  documentCategory: string;
  documentEntityId: string;
  documentEntityType: string;
  documentType: string;
  externalId: BigNumber;
  fileContent: string;
  fileExtension: string;
  fileName: string;
  fileSize: number;
  imageConvertInProgress: boolean;
  language: string;
  lastAccessed: Moment;
  lastModifiedDateTime: Moment;
  mimeType: string;
  module: string;
  moduleCategory: string;
  ownerId: string;
  ownerIdType: string;
  piiFlag: number;
  searchable: boolean;
  softDelete: boolean;
  userId: string;
  viewable: boolean;
  candidateNav: CandidateType;
  userNav: UserType;
}

export namespace Attachment {
  /**
   * Static representation of the [[attachmentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ID: BigNumberField<Attachment> = new BigNumberField('attachmentId', Attachment, 'Edm.Int64');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<Attachment> = new StringField('country', Attachment, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<Attachment> = new DateField('createdDate', Attachment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[deletable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELETABLE: BooleanField<Attachment> = new BooleanField('deletable', Attachment, 'Edm.Boolean');
  /**
   * Static representation of the [[deprecable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECABLE: BooleanField<Attachment> = new BooleanField('deprecable', Attachment, 'Edm.Boolean');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<Attachment> = new StringField('description', Attachment, 'Edm.String');
  /**
   * Static representation of the [[documentCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_CATEGORY: StringField<Attachment> = new StringField('documentCategory', Attachment, 'Edm.String');
  /**
   * Static representation of the [[documentEntityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_ENTITY_ID: StringField<Attachment> = new StringField('documentEntityId', Attachment, 'Edm.String');
  /**
   * Static representation of the [[documentEntityType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_ENTITY_TYPE: StringField<Attachment> = new StringField('documentEntityType', Attachment, 'Edm.String');
  /**
   * Static representation of the [[documentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TYPE: StringField<Attachment> = new StringField('documentType', Attachment, 'Edm.String');
  /**
   * Static representation of the [[externalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_ID: BigNumberField<Attachment> = new BigNumberField('externalId', Attachment, 'Edm.Int64');
  /**
   * Static representation of the [[fileContent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILE_CONTENT: BinaryField<Attachment> = new BinaryField('fileContent', Attachment, 'Edm.Binary');
  /**
   * Static representation of the [[fileExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILE_EXTENSION: StringField<Attachment> = new StringField('fileExtension', Attachment, 'Edm.String');
  /**
   * Static representation of the [[fileName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILE_NAME: StringField<Attachment> = new StringField('fileName', Attachment, 'Edm.String');
  /**
   * Static representation of the [[fileSize]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILE_SIZE: NumberField<Attachment> = new NumberField('fileSize', Attachment, 'Edm.Int32');
  /**
   * Static representation of the [[imageConvertInProgress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMAGE_CONVERT_IN_PROGRESS: BooleanField<Attachment> = new BooleanField('imageConvertInProgress', Attachment, 'Edm.Boolean');
  /**
   * Static representation of the [[language]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE: StringField<Attachment> = new StringField('language', Attachment, 'Edm.String');
  /**
   * Static representation of the [[lastAccessed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_ACCESSED: DateField<Attachment> = new DateField('lastAccessed', Attachment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<Attachment> = new DateField('lastModifiedDateTime', Attachment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIME_TYPE: StringField<Attachment> = new StringField('mimeType', Attachment, 'Edm.String');
  /**
   * Static representation of the [[module]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODULE: StringField<Attachment> = new StringField('module', Attachment, 'Edm.String');
  /**
   * Static representation of the [[moduleCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODULE_CATEGORY: StringField<Attachment> = new StringField('moduleCategory', Attachment, 'Edm.String');
  /**
   * Static representation of the [[ownerId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER_ID: StringField<Attachment> = new StringField('ownerId', Attachment, 'Edm.String');
  /**
   * Static representation of the [[ownerIdType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER_ID_TYPE: StringField<Attachment> = new StringField('ownerIdType', Attachment, 'Edm.String');
  /**
   * Static representation of the [[piiFlag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PII_FLAG: NumberField<Attachment> = new NumberField('piiFlag', Attachment, 'Edm.Int32');
  /**
   * Static representation of the [[searchable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEARCHABLE: BooleanField<Attachment> = new BooleanField('searchable', Attachment, 'Edm.Boolean');
  /**
   * Static representation of the [[softDelete]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOFT_DELETE: BooleanField<Attachment> = new BooleanField('softDelete', Attachment, 'Edm.Boolean');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Attachment> = new StringField('userId', Attachment, 'Edm.String');
  /**
   * Static representation of the [[viewable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VIEWABLE: BooleanField<Attachment> = new BooleanField('viewable', Attachment, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[candidateNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_NAV: OneToOneLink<Attachment, Candidate> = new OneToOneLink('candidateNav', Attachment, Candidate);
  /**
   * Static representation of the one-to-one navigation property [[userNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAV: OneToOneLink<Attachment, User> = new OneToOneLink('userNav', Attachment, User);
  /**
   * All fields of the Attachment entity.
   */
  export const _allFields: Array<BigNumberField<Attachment> | StringField<Attachment> | DateField<Attachment> | BooleanField<Attachment> | BinaryField<Attachment> | NumberField<Attachment> | OneToOneLink<Attachment, Candidate> | OneToOneLink<Attachment, User>> = [
    Attachment.ATTACHMENT_ID,
    Attachment.COUNTRY,
    Attachment.CREATED_DATE,
    Attachment.DELETABLE,
    Attachment.DEPRECABLE,
    Attachment.DESCRIPTION,
    Attachment.DOCUMENT_CATEGORY,
    Attachment.DOCUMENT_ENTITY_ID,
    Attachment.DOCUMENT_ENTITY_TYPE,
    Attachment.DOCUMENT_TYPE,
    Attachment.EXTERNAL_ID,
    Attachment.FILE_CONTENT,
    Attachment.FILE_EXTENSION,
    Attachment.FILE_NAME,
    Attachment.FILE_SIZE,
    Attachment.IMAGE_CONVERT_IN_PROGRESS,
    Attachment.LANGUAGE,
    Attachment.LAST_ACCESSED,
    Attachment.LAST_MODIFIED_DATE_TIME,
    Attachment.MIME_TYPE,
    Attachment.MODULE,
    Attachment.MODULE_CATEGORY,
    Attachment.OWNER_ID,
    Attachment.OWNER_ID_TYPE,
    Attachment.PII_FLAG,
    Attachment.SEARCHABLE,
    Attachment.SOFT_DELETE,
    Attachment.USER_ID,
    Attachment.VIEWABLE,
    Attachment.CANDIDATE_NAV,
    Attachment.USER_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Attachment> = new AllFields('*', Attachment);
  /**
   * All key fields of the Attachment entity.
   */
  export const _keyFields: Array<Selectable<Attachment>> = [Attachment.ATTACHMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property Attachment.
   */
  export const _keys: { [keys: string]: Selectable<Attachment> } = Attachment._keyFields.reduce((acc: { [keys: string]: Selectable<Attachment> }, field: Selectable<Attachment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
