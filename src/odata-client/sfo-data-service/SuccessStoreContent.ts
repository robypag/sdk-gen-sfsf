/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SuccessStoreContentRequestBuilder } from './SuccessStoreContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SuccessStoreContent" of service "SFOData".
 */
export class SuccessStoreContent extends Entity implements SuccessStoreContentType {
  /**
   * Technical entity name for SuccessStoreContent.
   */
  static _entityName = 'SuccessStoreContent';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SuccessStoreContent.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * bestPractice.
   * @nullable
   */
  bestPractice?: boolean;
  /**
   * comments.
   * @nullable
   */
  comments?: string;
  /**
   * contentId.
   */
  contentId!: BigNumber;
  /**
   * contentType.
   * @nullable
   */
  contentType?: string;
  /**
   * customField.
   * @nullable
   */
  customField?: string;
  /**
   * defaultContent.
   * @nullable
   */
  defaultContent?: boolean;
  /**
   * defaultContentName.
   * @nullable
   */
  defaultContentName?: string;
  /**
   * domain.
   * @nullable
   */
  domain?: string;
  /**
   * expiryOnDate.
   * @nullable
   */
  expiryOnDate?: Moment;
  /**
   * publishOnDate.
   * @nullable
   */
  publishOnDate?: Moment;
  /**
   * revisionNo.
   * @nullable
   */
  revisionNo?: string;
  /**
   * status.
   * @nullable
   */
  status?: string;
  /**
   * wizardable.
   * @nullable
   */
  wizardable?: boolean;
  /**
   * One-to-one navigation property to the [[SuccessStoreContentBlob]] entity.
   */
  contentData!: SuccessStoreContentBlob;

  /**
   * Returns an entity builder to construct instances `SuccessStoreContent`.
   * @returns A builder that constructs instances of entity type `SuccessStoreContent`.
   */
  static builder(): EntityBuilderType<SuccessStoreContent, SuccessStoreContentTypeForceMandatory> {
    return Entity.entityBuilder(SuccessStoreContent);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SuccessStoreContent` entity type.
   * @returns A `SuccessStoreContent` request builder.
   */
  static requestBuilder(): SuccessStoreContentRequestBuilder {
    return new SuccessStoreContentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SuccessStoreContent`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SuccessStoreContent`.
   */
  static customField(fieldName: string): CustomField<SuccessStoreContent> {
    return Entity.customFieldSelector(fieldName, SuccessStoreContent);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SuccessStoreContentBlob, SuccessStoreContentBlobType } from './SuccessStoreContentBlob';

export interface SuccessStoreContentType {
  bestPractice?: boolean;
  comments?: string;
  contentId: BigNumber;
  contentType?: string;
  customField?: string;
  defaultContent?: boolean;
  defaultContentName?: string;
  domain?: string;
  expiryOnDate?: Moment;
  publishOnDate?: Moment;
  revisionNo?: string;
  status?: string;
  wizardable?: boolean;
  contentData: SuccessStoreContentBlobType;
}

export interface SuccessStoreContentTypeForceMandatory {
  bestPractice: boolean;
  comments: string;
  contentId: BigNumber;
  contentType: string;
  customField: string;
  defaultContent: boolean;
  defaultContentName: string;
  domain: string;
  expiryOnDate: Moment;
  publishOnDate: Moment;
  revisionNo: string;
  status: string;
  wizardable: boolean;
  contentData: SuccessStoreContentBlobType;
}

export namespace SuccessStoreContent {
  /**
   * Static representation of the [[bestPractice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEST_PRACTICE: BooleanField<SuccessStoreContent> = new BooleanField('bestPractice', SuccessStoreContent, 'Edm.Boolean');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<SuccessStoreContent> = new StringField('comments', SuccessStoreContent, 'Edm.String');
  /**
   * Static representation of the [[contentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTENT_ID: BigNumberField<SuccessStoreContent> = new BigNumberField('contentId', SuccessStoreContent, 'Edm.Int64');
  /**
   * Static representation of the [[contentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTENT_TYPE: StringField<SuccessStoreContent> = new StringField('contentType', SuccessStoreContent, 'Edm.String');
  /**
   * Static representation of the [[customField]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_FIELD: StringField<SuccessStoreContent> = new StringField('customField', SuccessStoreContent, 'Edm.String');
  /**
   * Static representation of the [[defaultContent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_CONTENT: BooleanField<SuccessStoreContent> = new BooleanField('defaultContent', SuccessStoreContent, 'Edm.Boolean');
  /**
   * Static representation of the [[defaultContentName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_CONTENT_NAME: StringField<SuccessStoreContent> = new StringField('defaultContentName', SuccessStoreContent, 'Edm.String');
  /**
   * Static representation of the [[domain]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOMAIN: StringField<SuccessStoreContent> = new StringField('domain', SuccessStoreContent, 'Edm.String');
  /**
   * Static representation of the [[expiryOnDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPIRY_ON_DATE: DateField<SuccessStoreContent> = new DateField('expiryOnDate', SuccessStoreContent, 'Edm.DateTime');
  /**
   * Static representation of the [[publishOnDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PUBLISH_ON_DATE: DateField<SuccessStoreContent> = new DateField('publishOnDate', SuccessStoreContent, 'Edm.DateTime');
  /**
   * Static representation of the [[revisionNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVISION_NO: StringField<SuccessStoreContent> = new StringField('revisionNo', SuccessStoreContent, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<SuccessStoreContent> = new StringField('status', SuccessStoreContent, 'Edm.String');
  /**
   * Static representation of the [[wizardable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIZARDABLE: BooleanField<SuccessStoreContent> = new BooleanField('wizardable', SuccessStoreContent, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[contentData]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTENT_DATA: OneToOneLink<SuccessStoreContent, SuccessStoreContentBlob> = new OneToOneLink('contentData', SuccessStoreContent, SuccessStoreContentBlob);
  /**
   * All fields of the SuccessStoreContent entity.
   */
  export const _allFields: Array<BooleanField<SuccessStoreContent> | StringField<SuccessStoreContent> | BigNumberField<SuccessStoreContent> | DateField<SuccessStoreContent> | OneToOneLink<SuccessStoreContent, SuccessStoreContentBlob>> = [
    SuccessStoreContent.BEST_PRACTICE,
    SuccessStoreContent.COMMENTS,
    SuccessStoreContent.CONTENT_ID,
    SuccessStoreContent.CONTENT_TYPE,
    SuccessStoreContent.CUSTOM_FIELD,
    SuccessStoreContent.DEFAULT_CONTENT,
    SuccessStoreContent.DEFAULT_CONTENT_NAME,
    SuccessStoreContent.DOMAIN,
    SuccessStoreContent.EXPIRY_ON_DATE,
    SuccessStoreContent.PUBLISH_ON_DATE,
    SuccessStoreContent.REVISION_NO,
    SuccessStoreContent.STATUS,
    SuccessStoreContent.WIZARDABLE,
    SuccessStoreContent.CONTENT_DATA
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SuccessStoreContent> = new AllFields('*', SuccessStoreContent);
  /**
   * All key fields of the SuccessStoreContent entity.
   */
  export const _keyFields: Array<Selectable<SuccessStoreContent>> = [SuccessStoreContent.CONTENT_ID];
  /**
   * Mapping of all key field names to the respective static field property SuccessStoreContent.
   */
  export const _keys: { [keys: string]: Selectable<SuccessStoreContent> } = SuccessStoreContent._keyFields.reduce((acc: { [keys: string]: Selectable<SuccessStoreContent> }, field: Selectable<SuccessStoreContent>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
