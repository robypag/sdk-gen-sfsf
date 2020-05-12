/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmploymentConditionContentRequestBuilder } from './EmploymentConditionContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmploymentConditionContent" of service "SFOData".
 */
export class EmploymentConditionContent extends Entity implements EmploymentConditionContentType {
  /**
   * Technical entity name for EmploymentConditionContent.
   */
  static _entityName = 'EmploymentConditionContent';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmploymentConditionContent.
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
   * Employment Condition.
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
   * One-to-one navigation property to the [[EmploymentConditionEntity]] entity.
   */
  entityNav!: EmploymentConditionEntity;
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
   * Returns an entity builder to construct instances `EmploymentConditionContent`.
   * @returns A builder that constructs instances of entity type `EmploymentConditionContent`.
   */
  static builder(): EntityBuilderType<EmploymentConditionContent, EmploymentConditionContentTypeForceMandatory> {
    return Entity.entityBuilder(EmploymentConditionContent);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmploymentConditionContent` entity type.
   * @returns A `EmploymentConditionContent` request builder.
   */
  static requestBuilder(): EmploymentConditionContentRequestBuilder {
    return new EmploymentConditionContentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmploymentConditionContent`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmploymentConditionContent`.
   */
  static customField(fieldName: string): CustomField<EmploymentConditionContent> {
    return Entity.customFieldSelector(fieldName, EmploymentConditionContent);
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
import { EmploymentConditionEntity, EmploymentConditionEntityType } from './EmploymentConditionEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface EmploymentConditionContentType {
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
  entityNav: EmploymentConditionEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export interface EmploymentConditionContentTypeForceMandatory {
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
  entityNav: EmploymentConditionEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export namespace EmploymentConditionContent {
  /**
   * Static representation of the [[jobProfileExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_EXTERNAL_CODE: StringField<EmploymentConditionContent> = new StringField('JobProfile_externalCode', EmploymentConditionContent, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmploymentConditionContent> = new StringField('createdBy', EmploymentConditionContent, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmploymentConditionContent> = new DateField('createdDateTime', EmploymentConditionContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[entity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY: StringField<EmploymentConditionContent> = new StringField('entity', EmploymentConditionContent, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<EmploymentConditionContent> = new StringField('externalCode', EmploymentConditionContent, 'Edm.String');
  /**
   * Static representation of the [[jobProfileId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_ID: StringField<EmploymentConditionContent> = new StringField('jobProfileId', EmploymentConditionContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmploymentConditionContent> = new StringField('lastModifiedBy', EmploymentConditionContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmploymentConditionContent> = new DateField('lastModifiedDateTime', EmploymentConditionContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmploymentConditionContent> = new StringField('mdfSystemRecordStatus', EmploymentConditionContent, 'Edm.String');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: BigNumberField<EmploymentConditionContent> = new BigNumberField('order', EmploymentConditionContent, 'Edm.Int64');
  /**
   * Static representation of the [[sectionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_ID: StringField<EmploymentConditionContent> = new StringField('sectionId', EmploymentConditionContent, 'Edm.String');
  /**
   * Static representation of the [[sectionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_TYPE: StringField<EmploymentConditionContent> = new StringField('sectionType', EmploymentConditionContent, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<EmploymentConditionContent> = new StringField('status', EmploymentConditionContent, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<EmploymentConditionContent> = new StringField('subModule', EmploymentConditionContent, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EmploymentConditionContent, User> = new OneToOneLink('createdByNav', EmploymentConditionContent, User);
  /**
   * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY_NAV: OneToOneLink<EmploymentConditionContent, EmploymentConditionEntity> = new OneToOneLink('entityNav', EmploymentConditionContent, EmploymentConditionEntity);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EmploymentConditionContent, User> = new OneToOneLink('lastModifiedByNav', EmploymentConditionContent, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmploymentConditionContent, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EmploymentConditionContent, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<EmploymentConditionContent, MdfEnumValue> = new OneToOneLink('statusNav', EmploymentConditionContent, MdfEnumValue);
  /**
   * All fields of the EmploymentConditionContent entity.
   */
  export const _allFields: Array<StringField<EmploymentConditionContent> | DateField<EmploymentConditionContent> | BigNumberField<EmploymentConditionContent> | OneToOneLink<EmploymentConditionContent, User> | OneToOneLink<EmploymentConditionContent, EmploymentConditionEntity> | OneToOneLink<EmploymentConditionContent, MdfEnumValue>> = [
    EmploymentConditionContent.JOB_PROFILE_EXTERNAL_CODE,
    EmploymentConditionContent.CREATED_BY,
    EmploymentConditionContent.CREATED_DATE_TIME,
    EmploymentConditionContent.ENTITY,
    EmploymentConditionContent.EXTERNAL_CODE,
    EmploymentConditionContent.JOB_PROFILE_ID,
    EmploymentConditionContent.LAST_MODIFIED_BY,
    EmploymentConditionContent.LAST_MODIFIED_DATE_TIME,
    EmploymentConditionContent.MDF_SYSTEM_RECORD_STATUS,
    EmploymentConditionContent.ORDER,
    EmploymentConditionContent.SECTION_ID,
    EmploymentConditionContent.SECTION_TYPE,
    EmploymentConditionContent.STATUS,
    EmploymentConditionContent.SUB_MODULE,
    EmploymentConditionContent.CREATED_BY_NAV,
    EmploymentConditionContent.ENTITY_NAV,
    EmploymentConditionContent.LAST_MODIFIED_BY_NAV,
    EmploymentConditionContent.MDF_SYSTEM_RECORD_STATUS_NAV,
    EmploymentConditionContent.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmploymentConditionContent> = new AllFields('*', EmploymentConditionContent);
  /**
   * All key fields of the EmploymentConditionContent entity.
   */
  export const _keyFields: Array<Selectable<EmploymentConditionContent>> = [EmploymentConditionContent.JOB_PROFILE_EXTERNAL_CODE, EmploymentConditionContent.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmploymentConditionContent.
   */
  export const _keys: { [keys: string]: Selectable<EmploymentConditionContent> } = EmploymentConditionContent._keyFields.reduce((acc: { [keys: string]: Selectable<EmploymentConditionContent> }, field: Selectable<EmploymentConditionContent>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
