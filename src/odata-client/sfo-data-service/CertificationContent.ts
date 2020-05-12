/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CertificationContentRequestBuilder } from './CertificationContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CertificationContent" of service "SFOData".
 */
export class CertificationContent extends Entity implements CertificationContentType {
  /**
   * Technical entity name for CertificationContent.
   */
  static _entityName = 'CertificationContent';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CertificationContent.
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
   * Certification.
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
   * One-to-one navigation property to the [[CertificationEntity]] entity.
   */
  entityNav!: CertificationEntity;
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
   * Returns an entity builder to construct instances `CertificationContent`.
   * @returns A builder that constructs instances of entity type `CertificationContent`.
   */
  static builder(): EntityBuilderType<CertificationContent, CertificationContentTypeForceMandatory> {
    return Entity.entityBuilder(CertificationContent);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CertificationContent` entity type.
   * @returns A `CertificationContent` request builder.
   */
  static requestBuilder(): CertificationContentRequestBuilder {
    return new CertificationContentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CertificationContent`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CertificationContent`.
   */
  static customField(fieldName: string): CustomField<CertificationContent> {
    return Entity.customFieldSelector(fieldName, CertificationContent);
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
import { CertificationEntity, CertificationEntityType } from './CertificationEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface CertificationContentType {
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
  entityNav: CertificationEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export interface CertificationContentTypeForceMandatory {
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
  entityNav: CertificationEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export namespace CertificationContent {
  /**
   * Static representation of the [[jobProfileExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_EXTERNAL_CODE: StringField<CertificationContent> = new StringField('JobProfile_externalCode', CertificationContent, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<CertificationContent> = new StringField('createdBy', CertificationContent, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<CertificationContent> = new DateField('createdDateTime', CertificationContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[entity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY: StringField<CertificationContent> = new StringField('entity', CertificationContent, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<CertificationContent> = new StringField('externalCode', CertificationContent, 'Edm.String');
  /**
   * Static representation of the [[jobProfileId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_ID: StringField<CertificationContent> = new StringField('jobProfileId', CertificationContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<CertificationContent> = new StringField('lastModifiedBy', CertificationContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CertificationContent> = new DateField('lastModifiedDateTime', CertificationContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<CertificationContent> = new StringField('mdfSystemRecordStatus', CertificationContent, 'Edm.String');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: BigNumberField<CertificationContent> = new BigNumberField('order', CertificationContent, 'Edm.Int64');
  /**
   * Static representation of the [[sectionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_ID: StringField<CertificationContent> = new StringField('sectionId', CertificationContent, 'Edm.String');
  /**
   * Static representation of the [[sectionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_TYPE: StringField<CertificationContent> = new StringField('sectionType', CertificationContent, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<CertificationContent> = new StringField('status', CertificationContent, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<CertificationContent> = new StringField('subModule', CertificationContent, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<CertificationContent, User> = new OneToOneLink('createdByNav', CertificationContent, User);
  /**
   * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY_NAV: OneToOneLink<CertificationContent, CertificationEntity> = new OneToOneLink('entityNav', CertificationContent, CertificationEntity);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<CertificationContent, User> = new OneToOneLink('lastModifiedByNav', CertificationContent, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<CertificationContent, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', CertificationContent, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<CertificationContent, MdfEnumValue> = new OneToOneLink('statusNav', CertificationContent, MdfEnumValue);
  /**
   * All fields of the CertificationContent entity.
   */
  export const _allFields: Array<StringField<CertificationContent> | DateField<CertificationContent> | BigNumberField<CertificationContent> | OneToOneLink<CertificationContent, User> | OneToOneLink<CertificationContent, CertificationEntity> | OneToOneLink<CertificationContent, MdfEnumValue>> = [
    CertificationContent.JOB_PROFILE_EXTERNAL_CODE,
    CertificationContent.CREATED_BY,
    CertificationContent.CREATED_DATE_TIME,
    CertificationContent.ENTITY,
    CertificationContent.EXTERNAL_CODE,
    CertificationContent.JOB_PROFILE_ID,
    CertificationContent.LAST_MODIFIED_BY,
    CertificationContent.LAST_MODIFIED_DATE_TIME,
    CertificationContent.MDF_SYSTEM_RECORD_STATUS,
    CertificationContent.ORDER,
    CertificationContent.SECTION_ID,
    CertificationContent.SECTION_TYPE,
    CertificationContent.STATUS,
    CertificationContent.SUB_MODULE,
    CertificationContent.CREATED_BY_NAV,
    CertificationContent.ENTITY_NAV,
    CertificationContent.LAST_MODIFIED_BY_NAV,
    CertificationContent.MDF_SYSTEM_RECORD_STATUS_NAV,
    CertificationContent.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CertificationContent> = new AllFields('*', CertificationContent);
  /**
   * All key fields of the CertificationContent entity.
   */
  export const _keyFields: Array<Selectable<CertificationContent>> = [CertificationContent.JOB_PROFILE_EXTERNAL_CODE, CertificationContent.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property CertificationContent.
   */
  export const _keys: { [keys: string]: Selectable<CertificationContent> } = CertificationContent._keyFields.reduce((acc: { [keys: string]: Selectable<CertificationContent> }, field: Selectable<CertificationContent>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
