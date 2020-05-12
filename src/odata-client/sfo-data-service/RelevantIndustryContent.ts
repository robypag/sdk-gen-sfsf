/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RelevantIndustryContentRequestBuilder } from './RelevantIndustryContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "RelevantIndustryContent" of service "SFOData".
 */
export class RelevantIndustryContent extends Entity implements RelevantIndustryContentType {
  /**
   * Technical entity name for RelevantIndustryContent.
   */
  static _entityName = 'RelevantIndustryContent';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for RelevantIndustryContent.
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
   * Relevant Industry.
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
   * One-to-one navigation property to the [[RelevantIndustryEntity]] entity.
   */
  entityNav!: RelevantIndustryEntity;
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
   * Returns an entity builder to construct instances `RelevantIndustryContent`.
   * @returns A builder that constructs instances of entity type `RelevantIndustryContent`.
   */
  static builder(): EntityBuilderType<RelevantIndustryContent, RelevantIndustryContentTypeForceMandatory> {
    return Entity.entityBuilder(RelevantIndustryContent);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RelevantIndustryContent` entity type.
   * @returns A `RelevantIndustryContent` request builder.
   */
  static requestBuilder(): RelevantIndustryContentRequestBuilder {
    return new RelevantIndustryContentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RelevantIndustryContent`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RelevantIndustryContent`.
   */
  static customField(fieldName: string): CustomField<RelevantIndustryContent> {
    return Entity.customFieldSelector(fieldName, RelevantIndustryContent);
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
import { RelevantIndustryEntity, RelevantIndustryEntityType } from './RelevantIndustryEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface RelevantIndustryContentType {
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
  entityNav: RelevantIndustryEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export interface RelevantIndustryContentTypeForceMandatory {
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
  entityNav: RelevantIndustryEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export namespace RelevantIndustryContent {
  /**
   * Static representation of the [[jobProfileExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_EXTERNAL_CODE: StringField<RelevantIndustryContent> = new StringField('JobProfile_externalCode', RelevantIndustryContent, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<RelevantIndustryContent> = new StringField('createdBy', RelevantIndustryContent, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<RelevantIndustryContent> = new DateField('createdDateTime', RelevantIndustryContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[entity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY: StringField<RelevantIndustryContent> = new StringField('entity', RelevantIndustryContent, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<RelevantIndustryContent> = new StringField('externalCode', RelevantIndustryContent, 'Edm.String');
  /**
   * Static representation of the [[jobProfileId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_ID: StringField<RelevantIndustryContent> = new StringField('jobProfileId', RelevantIndustryContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<RelevantIndustryContent> = new StringField('lastModifiedBy', RelevantIndustryContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<RelevantIndustryContent> = new DateField('lastModifiedDateTime', RelevantIndustryContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<RelevantIndustryContent> = new StringField('mdfSystemRecordStatus', RelevantIndustryContent, 'Edm.String');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: BigNumberField<RelevantIndustryContent> = new BigNumberField('order', RelevantIndustryContent, 'Edm.Int64');
  /**
   * Static representation of the [[sectionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_ID: StringField<RelevantIndustryContent> = new StringField('sectionId', RelevantIndustryContent, 'Edm.String');
  /**
   * Static representation of the [[sectionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_TYPE: StringField<RelevantIndustryContent> = new StringField('sectionType', RelevantIndustryContent, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<RelevantIndustryContent> = new StringField('status', RelevantIndustryContent, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<RelevantIndustryContent> = new StringField('subModule', RelevantIndustryContent, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<RelevantIndustryContent, User> = new OneToOneLink('createdByNav', RelevantIndustryContent, User);
  /**
   * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY_NAV: OneToOneLink<RelevantIndustryContent, RelevantIndustryEntity> = new OneToOneLink('entityNav', RelevantIndustryContent, RelevantIndustryEntity);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<RelevantIndustryContent, User> = new OneToOneLink('lastModifiedByNav', RelevantIndustryContent, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RelevantIndustryContent, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', RelevantIndustryContent, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<RelevantIndustryContent, MdfEnumValue> = new OneToOneLink('statusNav', RelevantIndustryContent, MdfEnumValue);
  /**
   * All fields of the RelevantIndustryContent entity.
   */
  export const _allFields: Array<StringField<RelevantIndustryContent> | DateField<RelevantIndustryContent> | BigNumberField<RelevantIndustryContent> | OneToOneLink<RelevantIndustryContent, User> | OneToOneLink<RelevantIndustryContent, RelevantIndustryEntity> | OneToOneLink<RelevantIndustryContent, MdfEnumValue>> = [
    RelevantIndustryContent.JOB_PROFILE_EXTERNAL_CODE,
    RelevantIndustryContent.CREATED_BY,
    RelevantIndustryContent.CREATED_DATE_TIME,
    RelevantIndustryContent.ENTITY,
    RelevantIndustryContent.EXTERNAL_CODE,
    RelevantIndustryContent.JOB_PROFILE_ID,
    RelevantIndustryContent.LAST_MODIFIED_BY,
    RelevantIndustryContent.LAST_MODIFIED_DATE_TIME,
    RelevantIndustryContent.MDF_SYSTEM_RECORD_STATUS,
    RelevantIndustryContent.ORDER,
    RelevantIndustryContent.SECTION_ID,
    RelevantIndustryContent.SECTION_TYPE,
    RelevantIndustryContent.STATUS,
    RelevantIndustryContent.SUB_MODULE,
    RelevantIndustryContent.CREATED_BY_NAV,
    RelevantIndustryContent.ENTITY_NAV,
    RelevantIndustryContent.LAST_MODIFIED_BY_NAV,
    RelevantIndustryContent.MDF_SYSTEM_RECORD_STATUS_NAV,
    RelevantIndustryContent.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RelevantIndustryContent> = new AllFields('*', RelevantIndustryContent);
  /**
   * All key fields of the RelevantIndustryContent entity.
   */
  export const _keyFields: Array<Selectable<RelevantIndustryContent>> = [RelevantIndustryContent.JOB_PROFILE_EXTERNAL_CODE, RelevantIndustryContent.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property RelevantIndustryContent.
   */
  export const _keys: { [keys: string]: Selectable<RelevantIndustryContent> } = RelevantIndustryContent._keyFields.reduce((acc: { [keys: string]: Selectable<RelevantIndustryContent> }, field: Selectable<RelevantIndustryContent>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
