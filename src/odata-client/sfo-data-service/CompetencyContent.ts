/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompetencyContentRequestBuilder } from './CompetencyContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CompetencyContent" of service "SFOData".
 */
export class CompetencyContent extends Entity implements CompetencyContentType {
  /**
   * Technical entity name for CompetencyContent.
   */
  static _entityName = 'CompetencyContent';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CompetencyContent.
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
   * competencyMappingId.
   * Maximum length: 255.
   * @nullable
   */
  competencyMappingId?: string;
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
   * Competency.
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
   * role.
   * Maximum length: 128.
   * @nullable
   */
  role?: string;
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
   * One-to-one navigation property to the [[CompetencyEntity]] entity.
   */
  entityNav!: CompetencyEntity;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[RoleEntity]] entity.
   */
  roleNav!: RoleEntity;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `CompetencyContent`.
   * @returns A builder that constructs instances of entity type `CompetencyContent`.
   */
  static builder(): EntityBuilderType<CompetencyContent, CompetencyContentTypeForceMandatory> {
    return Entity.entityBuilder(CompetencyContent);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CompetencyContent` entity type.
   * @returns A `CompetencyContent` request builder.
   */
  static requestBuilder(): CompetencyContentRequestBuilder {
    return new CompetencyContentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CompetencyContent`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CompetencyContent`.
   */
  static customField(fieldName: string): CustomField<CompetencyContent> {
    return Entity.customFieldSelector(fieldName, CompetencyContent);
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
import { CompetencyEntity, CompetencyEntityType } from './CompetencyEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { RoleEntity, RoleEntityType } from './RoleEntity';

export interface CompetencyContentType {
  jobProfileExternalCode: string;
  competencyMappingId?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  entity?: string;
  externalCode: string;
  jobProfileId?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  order?: BigNumber;
  role?: string;
  sectionId?: string;
  sectionType?: string;
  status?: string;
  subModule?: string;
  createdByNav: UserType;
  entityNav: CompetencyEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  roleNav: RoleEntityType;
  statusNav: MdfEnumValueType;
}

export interface CompetencyContentTypeForceMandatory {
  jobProfileExternalCode: string;
  competencyMappingId: string;
  createdBy: string;
  createdDateTime: Moment;
  entity: string;
  externalCode: string;
  jobProfileId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  order: BigNumber;
  role: string;
  sectionId: string;
  sectionType: string;
  status: string;
  subModule: string;
  createdByNav: UserType;
  entityNav: CompetencyEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  roleNav: RoleEntityType;
  statusNav: MdfEnumValueType;
}

export namespace CompetencyContent {
  /**
   * Static representation of the [[jobProfileExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_EXTERNAL_CODE: StringField<CompetencyContent> = new StringField('JobProfile_externalCode', CompetencyContent, 'Edm.String');
  /**
   * Static representation of the [[competencyMappingId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY_MAPPING_ID: StringField<CompetencyContent> = new StringField('competencyMappingId', CompetencyContent, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<CompetencyContent> = new StringField('createdBy', CompetencyContent, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<CompetencyContent> = new DateField('createdDateTime', CompetencyContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[entity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY: StringField<CompetencyContent> = new StringField('entity', CompetencyContent, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<CompetencyContent> = new StringField('externalCode', CompetencyContent, 'Edm.String');
  /**
   * Static representation of the [[jobProfileId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_ID: StringField<CompetencyContent> = new StringField('jobProfileId', CompetencyContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<CompetencyContent> = new StringField('lastModifiedBy', CompetencyContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CompetencyContent> = new DateField('lastModifiedDateTime', CompetencyContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<CompetencyContent> = new StringField('mdfSystemRecordStatus', CompetencyContent, 'Edm.String');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: BigNumberField<CompetencyContent> = new BigNumberField('order', CompetencyContent, 'Edm.Int64');
  /**
   * Static representation of the [[role]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE: StringField<CompetencyContent> = new StringField('role', CompetencyContent, 'Edm.String');
  /**
   * Static representation of the [[sectionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_ID: StringField<CompetencyContent> = new StringField('sectionId', CompetencyContent, 'Edm.String');
  /**
   * Static representation of the [[sectionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_TYPE: StringField<CompetencyContent> = new StringField('sectionType', CompetencyContent, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<CompetencyContent> = new StringField('status', CompetencyContent, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<CompetencyContent> = new StringField('subModule', CompetencyContent, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<CompetencyContent, User> = new OneToOneLink('createdByNav', CompetencyContent, User);
  /**
   * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY_NAV: OneToOneLink<CompetencyContent, CompetencyEntity> = new OneToOneLink('entityNav', CompetencyContent, CompetencyEntity);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<CompetencyContent, User> = new OneToOneLink('lastModifiedByNav', CompetencyContent, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<CompetencyContent, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', CompetencyContent, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[roleNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_NAV: OneToOneLink<CompetencyContent, RoleEntity> = new OneToOneLink('roleNav', CompetencyContent, RoleEntity);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<CompetencyContent, MdfEnumValue> = new OneToOneLink('statusNav', CompetencyContent, MdfEnumValue);
  /**
   * All fields of the CompetencyContent entity.
   */
  export const _allFields: Array<StringField<CompetencyContent> | DateField<CompetencyContent> | BigNumberField<CompetencyContent> | OneToOneLink<CompetencyContent, User> | OneToOneLink<CompetencyContent, CompetencyEntity> | OneToOneLink<CompetencyContent, MdfEnumValue> | OneToOneLink<CompetencyContent, RoleEntity>> = [
    CompetencyContent.JOB_PROFILE_EXTERNAL_CODE,
    CompetencyContent.COMPETENCY_MAPPING_ID,
    CompetencyContent.CREATED_BY,
    CompetencyContent.CREATED_DATE_TIME,
    CompetencyContent.ENTITY,
    CompetencyContent.EXTERNAL_CODE,
    CompetencyContent.JOB_PROFILE_ID,
    CompetencyContent.LAST_MODIFIED_BY,
    CompetencyContent.LAST_MODIFIED_DATE_TIME,
    CompetencyContent.MDF_SYSTEM_RECORD_STATUS,
    CompetencyContent.ORDER,
    CompetencyContent.ROLE,
    CompetencyContent.SECTION_ID,
    CompetencyContent.SECTION_TYPE,
    CompetencyContent.STATUS,
    CompetencyContent.SUB_MODULE,
    CompetencyContent.CREATED_BY_NAV,
    CompetencyContent.ENTITY_NAV,
    CompetencyContent.LAST_MODIFIED_BY_NAV,
    CompetencyContent.MDF_SYSTEM_RECORD_STATUS_NAV,
    CompetencyContent.ROLE_NAV,
    CompetencyContent.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CompetencyContent> = new AllFields('*', CompetencyContent);
  /**
   * All key fields of the CompetencyContent entity.
   */
  export const _keyFields: Array<Selectable<CompetencyContent>> = [CompetencyContent.JOB_PROFILE_EXTERNAL_CODE, CompetencyContent.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property CompetencyContent.
   */
  export const _keys: { [keys: string]: Selectable<CompetencyContent> } = CompetencyContent._keyFields.reduce((acc: { [keys: string]: Selectable<CompetencyContent> }, field: Selectable<CompetencyContent>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
