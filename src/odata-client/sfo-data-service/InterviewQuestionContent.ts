/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InterviewQuestionContentRequestBuilder } from './InterviewQuestionContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "InterviewQuestionContent" of service "SFOData".
 */
export class InterviewQuestionContent extends Entity implements InterviewQuestionContentType {
  /**
   * Technical entity name for InterviewQuestionContent.
   */
  static _entityName = 'InterviewQuestionContent';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for InterviewQuestionContent.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Job Profile_GUID.
   * Maximum length: 128.
   */
  jobProfileExternalCode!: string;
  /**
   * createdBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Interview Question.
   * Maximum length: 128.
   * @nullable
   */
  entity?: string;
  /**
   * externalCode.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * jobProfileId.
   * Maximum length: 255.
   * @nullable
   */
  jobProfileId?: string;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * order.
   * @nullable
   */
  order?: BigNumber;
  /**
   * sectionId.
   * Maximum length: 255.
   * @nullable
   */
  sectionId?: string;
  /**
   * sectionType.
   * Maximum length: 255.
   * @nullable
   */
  sectionType?: string;
  /**
   * status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * subModule.
   * Maximum length: 255.
   * @nullable
   */
  subModule?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[InterviewQuestionEntity]] entity.
   */
  entityNav!: InterviewQuestionEntity;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `InterviewQuestionContent`.
   * @returns A builder that constructs instances of entity type `InterviewQuestionContent`.
   */
  static builder(): EntityBuilderType<InterviewQuestionContent, InterviewQuestionContentTypeForceMandatory> {
    return Entity.entityBuilder(InterviewQuestionContent);
  }

  /**
   * Returns a request builder to construct requests for operations on the `InterviewQuestionContent` entity type.
   * @returns A `InterviewQuestionContent` request builder.
   */
  static requestBuilder(): InterviewQuestionContentRequestBuilder {
    return new InterviewQuestionContentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `InterviewQuestionContent`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `InterviewQuestionContent`.
   */
  static customField(fieldName: string): CustomField<InterviewQuestionContent> {
    return Entity.customFieldSelector(fieldName, InterviewQuestionContent);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { User, UserType } from './User';
import { InterviewQuestionEntity, InterviewQuestionEntityType } from './InterviewQuestionEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface InterviewQuestionContentType {
  jobProfileExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  entity?: string;
  externalCode: string;
  jobProfileId?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  order?: BigNumber;
  sectionId?: string;
  sectionType?: string;
  status?: string;
  subModule?: string;
  createdByNav: UserType;
  entityNav: InterviewQuestionEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export interface InterviewQuestionContentTypeForceMandatory {
  jobProfileExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  entity: string;
  externalCode: string;
  jobProfileId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  order: BigNumber;
  sectionId: string;
  sectionType: string;
  status: string;
  subModule: string;
  createdByNav: UserType;
  entityNav: InterviewQuestionEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export namespace InterviewQuestionContent {
  /**
   * Static representation of the [[jobProfileExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_EXTERNAL_CODE: StringField<InterviewQuestionContent> = new StringField('JobProfile_externalCode', InterviewQuestionContent, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<InterviewQuestionContent> = new StringField('createdBy', InterviewQuestionContent, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<InterviewQuestionContent> = new DateField('createdDateTime', InterviewQuestionContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[entity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY: StringField<InterviewQuestionContent> = new StringField('entity', InterviewQuestionContent, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<InterviewQuestionContent> = new StringField('externalCode', InterviewQuestionContent, 'Edm.String');
  /**
   * Static representation of the [[jobProfileId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_ID: StringField<InterviewQuestionContent> = new StringField('jobProfileId', InterviewQuestionContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<InterviewQuestionContent> = new StringField('lastModifiedBy', InterviewQuestionContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<InterviewQuestionContent> = new DateField('lastModifiedDateTime', InterviewQuestionContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<InterviewQuestionContent> = new StringField('mdfSystemRecordStatus', InterviewQuestionContent, 'Edm.String');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: BigNumberField<InterviewQuestionContent> = new BigNumberField('order', InterviewQuestionContent, 'Edm.Int64');
  /**
   * Static representation of the [[sectionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_ID: StringField<InterviewQuestionContent> = new StringField('sectionId', InterviewQuestionContent, 'Edm.String');
  /**
   * Static representation of the [[sectionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_TYPE: StringField<InterviewQuestionContent> = new StringField('sectionType', InterviewQuestionContent, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<InterviewQuestionContent> = new StringField('status', InterviewQuestionContent, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<InterviewQuestionContent> = new StringField('subModule', InterviewQuestionContent, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<InterviewQuestionContent, User> = new OneToOneLink('createdByNav', InterviewQuestionContent, User);
  /**
   * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY_NAV: OneToOneLink<InterviewQuestionContent, InterviewQuestionEntity> = new OneToOneLink('entityNav', InterviewQuestionContent, InterviewQuestionEntity);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<InterviewQuestionContent, User> = new OneToOneLink('lastModifiedByNav', InterviewQuestionContent, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<InterviewQuestionContent, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', InterviewQuestionContent, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<InterviewQuestionContent, MdfEnumValue> = new OneToOneLink('statusNav', InterviewQuestionContent, MdfEnumValue);
  /**
   * All fields of the InterviewQuestionContent entity.
   */
  export const _allFields: Array<StringField<InterviewQuestionContent> | DateField<InterviewQuestionContent> | BigNumberField<InterviewQuestionContent> | OneToOneLink<InterviewQuestionContent, User> | OneToOneLink<InterviewQuestionContent, InterviewQuestionEntity> | OneToOneLink<InterviewQuestionContent, MdfEnumValue>> = [
    InterviewQuestionContent.JOB_PROFILE_EXTERNAL_CODE,
    InterviewQuestionContent.CREATED_BY,
    InterviewQuestionContent.CREATED_DATE_TIME,
    InterviewQuestionContent.ENTITY,
    InterviewQuestionContent.EXTERNAL_CODE,
    InterviewQuestionContent.JOB_PROFILE_ID,
    InterviewQuestionContent.LAST_MODIFIED_BY,
    InterviewQuestionContent.LAST_MODIFIED_DATE_TIME,
    InterviewQuestionContent.MDF_SYSTEM_RECORD_STATUS,
    InterviewQuestionContent.ORDER,
    InterviewQuestionContent.SECTION_ID,
    InterviewQuestionContent.SECTION_TYPE,
    InterviewQuestionContent.STATUS,
    InterviewQuestionContent.SUB_MODULE,
    InterviewQuestionContent.CREATED_BY_NAV,
    InterviewQuestionContent.ENTITY_NAV,
    InterviewQuestionContent.LAST_MODIFIED_BY_NAV,
    InterviewQuestionContent.MDF_SYSTEM_RECORD_STATUS_NAV,
    InterviewQuestionContent.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<InterviewQuestionContent> = new AllFields('*', InterviewQuestionContent);
  /**
   * All key fields of the InterviewQuestionContent entity.
   */
  export const _keyFields: Array<Selectable<InterviewQuestionContent>> = [InterviewQuestionContent.JOB_PROFILE_EXTERNAL_CODE, InterviewQuestionContent.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property InterviewQuestionContent.
   */
  export const _keys: { [keys: string]: Selectable<InterviewQuestionContent> } = InterviewQuestionContent._keyFields.reduce((acc: { [keys: string]: Selectable<InterviewQuestionContent> }, field: Selectable<InterviewQuestionContent>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
