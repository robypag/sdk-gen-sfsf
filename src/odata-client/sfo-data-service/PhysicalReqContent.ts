/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PhysicalReqContentRequestBuilder } from './PhysicalReqContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PhysicalReqContent" of service "SFOData".
 */
export class PhysicalReqContent extends Entity implements PhysicalReqContentType {
  /**
   * Technical entity name for PhysicalReqContent.
   */
  static _entityName = 'PhysicalReqContent';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PhysicalReqContent.
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
   * Physical Requirement.
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
   * One-to-one navigation property to the [[PhysicalReqEntity]] entity.
   */
  entityNav!: PhysicalReqEntity;
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
   * Returns an entity builder to construct instances `PhysicalReqContent`.
   * @returns A builder that constructs instances of entity type `PhysicalReqContent`.
   */
  static builder(): EntityBuilderType<PhysicalReqContent, PhysicalReqContentTypeForceMandatory> {
    return Entity.entityBuilder(PhysicalReqContent);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PhysicalReqContent` entity type.
   * @returns A `PhysicalReqContent` request builder.
   */
  static requestBuilder(): PhysicalReqContentRequestBuilder {
    return new PhysicalReqContentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PhysicalReqContent`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PhysicalReqContent`.
   */
  static customField(fieldName: string): CustomField<PhysicalReqContent> {
    return Entity.customFieldSelector(fieldName, PhysicalReqContent);
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
import { PhysicalReqEntity, PhysicalReqEntityType } from './PhysicalReqEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface PhysicalReqContentType {
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
  entityNav: PhysicalReqEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export interface PhysicalReqContentTypeForceMandatory {
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
  entityNav: PhysicalReqEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export namespace PhysicalReqContent {
  /**
   * Static representation of the [[jobProfileExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_EXTERNAL_CODE: StringField<PhysicalReqContent> = new StringField('JobProfile_externalCode', PhysicalReqContent, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PhysicalReqContent> = new StringField('createdBy', PhysicalReqContent, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PhysicalReqContent> = new DateField('createdDateTime', PhysicalReqContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[entity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY: StringField<PhysicalReqContent> = new StringField('entity', PhysicalReqContent, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<PhysicalReqContent> = new StringField('externalCode', PhysicalReqContent, 'Edm.String');
  /**
   * Static representation of the [[jobProfileId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_ID: StringField<PhysicalReqContent> = new StringField('jobProfileId', PhysicalReqContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PhysicalReqContent> = new StringField('lastModifiedBy', PhysicalReqContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PhysicalReqContent> = new DateField('lastModifiedDateTime', PhysicalReqContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PhysicalReqContent> = new StringField('mdfSystemRecordStatus', PhysicalReqContent, 'Edm.String');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: BigNumberField<PhysicalReqContent> = new BigNumberField('order', PhysicalReqContent, 'Edm.Int64');
  /**
   * Static representation of the [[sectionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_ID: StringField<PhysicalReqContent> = new StringField('sectionId', PhysicalReqContent, 'Edm.String');
  /**
   * Static representation of the [[sectionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_TYPE: StringField<PhysicalReqContent> = new StringField('sectionType', PhysicalReqContent, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<PhysicalReqContent> = new StringField('status', PhysicalReqContent, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<PhysicalReqContent> = new StringField('subModule', PhysicalReqContent, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PhysicalReqContent, User> = new OneToOneLink('createdByNav', PhysicalReqContent, User);
  /**
   * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY_NAV: OneToOneLink<PhysicalReqContent, PhysicalReqEntity> = new OneToOneLink('entityNav', PhysicalReqContent, PhysicalReqEntity);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PhysicalReqContent, User> = new OneToOneLink('lastModifiedByNav', PhysicalReqContent, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PhysicalReqContent, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PhysicalReqContent, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<PhysicalReqContent, MdfEnumValue> = new OneToOneLink('statusNav', PhysicalReqContent, MdfEnumValue);
  /**
   * All fields of the PhysicalReqContent entity.
   */
  export const _allFields: Array<StringField<PhysicalReqContent> | DateField<PhysicalReqContent> | BigNumberField<PhysicalReqContent> | OneToOneLink<PhysicalReqContent, User> | OneToOneLink<PhysicalReqContent, PhysicalReqEntity> | OneToOneLink<PhysicalReqContent, MdfEnumValue>> = [
    PhysicalReqContent.JOB_PROFILE_EXTERNAL_CODE,
    PhysicalReqContent.CREATED_BY,
    PhysicalReqContent.CREATED_DATE_TIME,
    PhysicalReqContent.ENTITY,
    PhysicalReqContent.EXTERNAL_CODE,
    PhysicalReqContent.JOB_PROFILE_ID,
    PhysicalReqContent.LAST_MODIFIED_BY,
    PhysicalReqContent.LAST_MODIFIED_DATE_TIME,
    PhysicalReqContent.MDF_SYSTEM_RECORD_STATUS,
    PhysicalReqContent.ORDER,
    PhysicalReqContent.SECTION_ID,
    PhysicalReqContent.SECTION_TYPE,
    PhysicalReqContent.STATUS,
    PhysicalReqContent.SUB_MODULE,
    PhysicalReqContent.CREATED_BY_NAV,
    PhysicalReqContent.ENTITY_NAV,
    PhysicalReqContent.LAST_MODIFIED_BY_NAV,
    PhysicalReqContent.MDF_SYSTEM_RECORD_STATUS_NAV,
    PhysicalReqContent.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PhysicalReqContent> = new AllFields('*', PhysicalReqContent);
  /**
   * All key fields of the PhysicalReqContent entity.
   */
  export const _keyFields: Array<Selectable<PhysicalReqContent>> = [PhysicalReqContent.JOB_PROFILE_EXTERNAL_CODE, PhysicalReqContent.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PhysicalReqContent.
   */
  export const _keys: { [keys: string]: Selectable<PhysicalReqContent> } = PhysicalReqContent._keyFields.reduce((acc: { [keys: string]: Selectable<PhysicalReqContent> }, field: Selectable<PhysicalReqContent>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
