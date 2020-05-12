/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EducationMajorContentRequestBuilder } from './EducationMajorContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EducationMajorContent" of service "SFOData".
 */
export class EducationMajorContent extends Entity implements EducationMajorContentType {
  /**
   * Technical entity name for EducationMajorContent.
   */
  static _entityName = 'EducationMajorContent';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EducationMajorContent.
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
   * Major.
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
   * Mapped Degree ID.
   * Maximum length: 128.
   * @nullable
   */
  mappedDegreeId?: string;
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
   * One-to-one navigation property to the [[EducationMajorEntity]] entity.
   */
  entityNav!: EducationMajorEntity;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[EducationDegreeEntity]] entity.
   */
  mappedDegreeIdNav!: EducationDegreeEntity;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `EducationMajorContent`.
   * @returns A builder that constructs instances of entity type `EducationMajorContent`.
   */
  static builder(): EntityBuilderType<EducationMajorContent, EducationMajorContentTypeForceMandatory> {
    return Entity.entityBuilder(EducationMajorContent);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EducationMajorContent` entity type.
   * @returns A `EducationMajorContent` request builder.
   */
  static requestBuilder(): EducationMajorContentRequestBuilder {
    return new EducationMajorContentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EducationMajorContent`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EducationMajorContent`.
   */
  static customField(fieldName: string): CustomField<EducationMajorContent> {
    return Entity.customFieldSelector(fieldName, EducationMajorContent);
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
import { EducationMajorEntity, EducationMajorEntityType } from './EducationMajorEntity';
import { EducationDegreeEntity, EducationDegreeEntityType } from './EducationDegreeEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface EducationMajorContentType {
  jobProfileExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  entity?: string;
  externalCode: string;
  jobProfileId?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mappedDegreeId?: string;
  mdfSystemRecordStatus?: string;
  order?: BigNumber;
  sectionId?: string;
  sectionType?: string;
  status?: string;
  subModule?: string;
  createdByNav: UserType;
  entityNav: EducationMajorEntityType;
  lastModifiedByNav: UserType;
  mappedDegreeIdNav: EducationDegreeEntityType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export interface EducationMajorContentTypeForceMandatory {
  jobProfileExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  entity: string;
  externalCode: string;
  jobProfileId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mappedDegreeId: string;
  mdfSystemRecordStatus: string;
  order: BigNumber;
  sectionId: string;
  sectionType: string;
  status: string;
  subModule: string;
  createdByNav: UserType;
  entityNav: EducationMajorEntityType;
  lastModifiedByNav: UserType;
  mappedDegreeIdNav: EducationDegreeEntityType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export namespace EducationMajorContent {
  /**
   * Static representation of the [[jobProfileExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_EXTERNAL_CODE: StringField<EducationMajorContent> = new StringField('JobProfile_externalCode', EducationMajorContent, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EducationMajorContent> = new StringField('createdBy', EducationMajorContent, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EducationMajorContent> = new DateField('createdDateTime', EducationMajorContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[entity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY: StringField<EducationMajorContent> = new StringField('entity', EducationMajorContent, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<EducationMajorContent> = new StringField('externalCode', EducationMajorContent, 'Edm.String');
  /**
   * Static representation of the [[jobProfileId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_ID: StringField<EducationMajorContent> = new StringField('jobProfileId', EducationMajorContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EducationMajorContent> = new StringField('lastModifiedBy', EducationMajorContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EducationMajorContent> = new DateField('lastModifiedDateTime', EducationMajorContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mappedDegreeId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAPPED_DEGREE_ID: StringField<EducationMajorContent> = new StringField('mappedDegreeId', EducationMajorContent, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EducationMajorContent> = new StringField('mdfSystemRecordStatus', EducationMajorContent, 'Edm.String');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: BigNumberField<EducationMajorContent> = new BigNumberField('order', EducationMajorContent, 'Edm.Int64');
  /**
   * Static representation of the [[sectionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_ID: StringField<EducationMajorContent> = new StringField('sectionId', EducationMajorContent, 'Edm.String');
  /**
   * Static representation of the [[sectionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_TYPE: StringField<EducationMajorContent> = new StringField('sectionType', EducationMajorContent, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<EducationMajorContent> = new StringField('status', EducationMajorContent, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<EducationMajorContent> = new StringField('subModule', EducationMajorContent, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EducationMajorContent, User> = new OneToOneLink('createdByNav', EducationMajorContent, User);
  /**
   * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY_NAV: OneToOneLink<EducationMajorContent, EducationMajorEntity> = new OneToOneLink('entityNav', EducationMajorContent, EducationMajorEntity);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EducationMajorContent, User> = new OneToOneLink('lastModifiedByNav', EducationMajorContent, User);
  /**
   * Static representation of the one-to-one navigation property [[mappedDegreeIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAPPED_DEGREE_ID_NAV: OneToOneLink<EducationMajorContent, EducationDegreeEntity> = new OneToOneLink('mappedDegreeIdNav', EducationMajorContent, EducationDegreeEntity);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EducationMajorContent, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EducationMajorContent, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<EducationMajorContent, MdfEnumValue> = new OneToOneLink('statusNav', EducationMajorContent, MdfEnumValue);
  /**
   * All fields of the EducationMajorContent entity.
   */
  export const _allFields: Array<StringField<EducationMajorContent> | DateField<EducationMajorContent> | BigNumberField<EducationMajorContent> | OneToOneLink<EducationMajorContent, User> | OneToOneLink<EducationMajorContent, EducationMajorEntity> | OneToOneLink<EducationMajorContent, EducationDegreeEntity> | OneToOneLink<EducationMajorContent, MdfEnumValue>> = [
    EducationMajorContent.JOB_PROFILE_EXTERNAL_CODE,
    EducationMajorContent.CREATED_BY,
    EducationMajorContent.CREATED_DATE_TIME,
    EducationMajorContent.ENTITY,
    EducationMajorContent.EXTERNAL_CODE,
    EducationMajorContent.JOB_PROFILE_ID,
    EducationMajorContent.LAST_MODIFIED_BY,
    EducationMajorContent.LAST_MODIFIED_DATE_TIME,
    EducationMajorContent.MAPPED_DEGREE_ID,
    EducationMajorContent.MDF_SYSTEM_RECORD_STATUS,
    EducationMajorContent.ORDER,
    EducationMajorContent.SECTION_ID,
    EducationMajorContent.SECTION_TYPE,
    EducationMajorContent.STATUS,
    EducationMajorContent.SUB_MODULE,
    EducationMajorContent.CREATED_BY_NAV,
    EducationMajorContent.ENTITY_NAV,
    EducationMajorContent.LAST_MODIFIED_BY_NAV,
    EducationMajorContent.MAPPED_DEGREE_ID_NAV,
    EducationMajorContent.MDF_SYSTEM_RECORD_STATUS_NAV,
    EducationMajorContent.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EducationMajorContent> = new AllFields('*', EducationMajorContent);
  /**
   * All key fields of the EducationMajorContent entity.
   */
  export const _keyFields: Array<Selectable<EducationMajorContent>> = [EducationMajorContent.JOB_PROFILE_EXTERNAL_CODE, EducationMajorContent.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EducationMajorContent.
   */
  export const _keys: { [keys: string]: Selectable<EducationMajorContent> } = EducationMajorContent._keyFields.reduce((acc: { [keys: string]: Selectable<EducationMajorContent> }, field: Selectable<EducationMajorContent>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
