/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EducationDegreeContentRequestBuilder } from './EducationDegreeContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EducationDegreeContent" of service "SFOData".
 */
export class EducationDegreeContent extends Entity implements EducationDegreeContentType {
  /**
   * Technical entity name for EducationDegreeContent.
   */
  static _entityName = 'EducationDegreeContent';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EducationDegreeContent.
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
   * Degree.
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
   * One-to-one navigation property to the [[EducationDegreeEntity]] entity.
   */
  entityNav!: EducationDegreeEntity;
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
   * Returns an entity builder to construct instances `EducationDegreeContent`.
   * @returns A builder that constructs instances of entity type `EducationDegreeContent`.
   */
  static builder(): EntityBuilderType<EducationDegreeContent, EducationDegreeContentTypeForceMandatory> {
    return Entity.entityBuilder(EducationDegreeContent);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EducationDegreeContent` entity type.
   * @returns A `EducationDegreeContent` request builder.
   */
  static requestBuilder(): EducationDegreeContentRequestBuilder {
    return new EducationDegreeContentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EducationDegreeContent`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EducationDegreeContent`.
   */
  static customField(fieldName: string): CustomField<EducationDegreeContent> {
    return Entity.customFieldSelector(fieldName, EducationDegreeContent);
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
import { EducationDegreeEntity, EducationDegreeEntityType } from './EducationDegreeEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface EducationDegreeContentType {
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
  entityNav: EducationDegreeEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export interface EducationDegreeContentTypeForceMandatory {
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
  entityNav: EducationDegreeEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export namespace EducationDegreeContent {
  /**
   * Static representation of the [[jobProfileExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_EXTERNAL_CODE: StringField<EducationDegreeContent> = new StringField('JobProfile_externalCode', EducationDegreeContent, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EducationDegreeContent> = new StringField('createdBy', EducationDegreeContent, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EducationDegreeContent> = new DateField('createdDateTime', EducationDegreeContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[entity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY: StringField<EducationDegreeContent> = new StringField('entity', EducationDegreeContent, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<EducationDegreeContent> = new StringField('externalCode', EducationDegreeContent, 'Edm.String');
  /**
   * Static representation of the [[jobProfileId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_ID: StringField<EducationDegreeContent> = new StringField('jobProfileId', EducationDegreeContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EducationDegreeContent> = new StringField('lastModifiedBy', EducationDegreeContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EducationDegreeContent> = new DateField('lastModifiedDateTime', EducationDegreeContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EducationDegreeContent> = new StringField('mdfSystemRecordStatus', EducationDegreeContent, 'Edm.String');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: BigNumberField<EducationDegreeContent> = new BigNumberField('order', EducationDegreeContent, 'Edm.Int64');
  /**
   * Static representation of the [[sectionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_ID: StringField<EducationDegreeContent> = new StringField('sectionId', EducationDegreeContent, 'Edm.String');
  /**
   * Static representation of the [[sectionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_TYPE: StringField<EducationDegreeContent> = new StringField('sectionType', EducationDegreeContent, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<EducationDegreeContent> = new StringField('status', EducationDegreeContent, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<EducationDegreeContent> = new StringField('subModule', EducationDegreeContent, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EducationDegreeContent, User> = new OneToOneLink('createdByNav', EducationDegreeContent, User);
  /**
   * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY_NAV: OneToOneLink<EducationDegreeContent, EducationDegreeEntity> = new OneToOneLink('entityNav', EducationDegreeContent, EducationDegreeEntity);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EducationDegreeContent, User> = new OneToOneLink('lastModifiedByNav', EducationDegreeContent, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EducationDegreeContent, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EducationDegreeContent, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<EducationDegreeContent, MdfEnumValue> = new OneToOneLink('statusNav', EducationDegreeContent, MdfEnumValue);
  /**
   * All fields of the EducationDegreeContent entity.
   */
  export const _allFields: Array<StringField<EducationDegreeContent> | DateField<EducationDegreeContent> | BigNumberField<EducationDegreeContent> | OneToOneLink<EducationDegreeContent, User> | OneToOneLink<EducationDegreeContent, EducationDegreeEntity> | OneToOneLink<EducationDegreeContent, MdfEnumValue>> = [
    EducationDegreeContent.JOB_PROFILE_EXTERNAL_CODE,
    EducationDegreeContent.CREATED_BY,
    EducationDegreeContent.CREATED_DATE_TIME,
    EducationDegreeContent.ENTITY,
    EducationDegreeContent.EXTERNAL_CODE,
    EducationDegreeContent.JOB_PROFILE_ID,
    EducationDegreeContent.LAST_MODIFIED_BY,
    EducationDegreeContent.LAST_MODIFIED_DATE_TIME,
    EducationDegreeContent.MDF_SYSTEM_RECORD_STATUS,
    EducationDegreeContent.ORDER,
    EducationDegreeContent.SECTION_ID,
    EducationDegreeContent.SECTION_TYPE,
    EducationDegreeContent.STATUS,
    EducationDegreeContent.SUB_MODULE,
    EducationDegreeContent.CREATED_BY_NAV,
    EducationDegreeContent.ENTITY_NAV,
    EducationDegreeContent.LAST_MODIFIED_BY_NAV,
    EducationDegreeContent.MDF_SYSTEM_RECORD_STATUS_NAV,
    EducationDegreeContent.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EducationDegreeContent> = new AllFields('*', EducationDegreeContent);
  /**
   * All key fields of the EducationDegreeContent entity.
   */
  export const _keyFields: Array<Selectable<EducationDegreeContent>> = [EducationDegreeContent.JOB_PROFILE_EXTERNAL_CODE, EducationDegreeContent.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EducationDegreeContent.
   */
  export const _keys: { [keys: string]: Selectable<EducationDegreeContent> } = EducationDegreeContent._keyFields.reduce((acc: { [keys: string]: Selectable<EducationDegreeContent> }, field: Selectable<EducationDegreeContent>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
