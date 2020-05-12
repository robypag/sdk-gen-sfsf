/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SelfReportSkillMappingRequestBuilder } from './SelfReportSkillMappingRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SelfReportSkillMapping" of service "SFOData".
 */
export class SelfReportSkillMapping extends Entity implements SelfReportSkillMappingType {
  /**
   * Technical entity name for SelfReportSkillMapping.
   */
  static _entityName = 'SelfReportSkillMapping';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SelfReportSkillMapping.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Skill Profile_User Id.
   * Maximum length: 100.
   */
  skillProfileExternalCode!: string;
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
   * externalCode.
   * Maximum length: 128.
   */
  externalCode!: string;
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
   * Skill.
   * Maximum length: 128.
   * @nullable
   */
  skill?: string;
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
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[SkillEntity]] entity.
   */
  skillNav!: SkillEntity;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `SelfReportSkillMapping`.
   * @returns A builder that constructs instances of entity type `SelfReportSkillMapping`.
   */
  static builder(): EntityBuilderType<SelfReportSkillMapping, SelfReportSkillMappingTypeForceMandatory> {
    return Entity.entityBuilder(SelfReportSkillMapping);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SelfReportSkillMapping` entity type.
   * @returns A `SelfReportSkillMapping` request builder.
   */
  static requestBuilder(): SelfReportSkillMappingRequestBuilder {
    return new SelfReportSkillMappingRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SelfReportSkillMapping`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SelfReportSkillMapping`.
   */
  static customField(fieldName: string): CustomField<SelfReportSkillMapping> {
    return Entity.customFieldSelector(fieldName, SelfReportSkillMapping);
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
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { SkillEntity, SkillEntityType } from './SkillEntity';

export interface SelfReportSkillMappingType {
  skillProfileExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  skill?: string;
  status?: string;
  subModule?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  skillNav: SkillEntityType;
  statusNav: MdfEnumValueType;
}

export interface SelfReportSkillMappingTypeForceMandatory {
  skillProfileExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  skill: string;
  status: string;
  subModule: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  skillNav: SkillEntityType;
  statusNav: MdfEnumValueType;
}

export namespace SelfReportSkillMapping {
  /**
   * Static representation of the [[skillProfileExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SKILL_PROFILE_EXTERNAL_CODE: StringField<SelfReportSkillMapping> = new StringField('SkillProfile_externalCode', SelfReportSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SelfReportSkillMapping> = new StringField('createdBy', SelfReportSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SelfReportSkillMapping> = new DateField('createdDateTime', SelfReportSkillMapping, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<SelfReportSkillMapping> = new StringField('externalCode', SelfReportSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SelfReportSkillMapping> = new StringField('lastModifiedBy', SelfReportSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SelfReportSkillMapping> = new DateField('lastModifiedDateTime', SelfReportSkillMapping, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SelfReportSkillMapping> = new StringField('mdfSystemRecordStatus', SelfReportSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[skill]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SKILL: StringField<SelfReportSkillMapping> = new StringField('skill', SelfReportSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<SelfReportSkillMapping> = new StringField('status', SelfReportSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<SelfReportSkillMapping> = new StringField('subModule', SelfReportSkillMapping, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SelfReportSkillMapping, User> = new OneToOneLink('createdByNav', SelfReportSkillMapping, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SelfReportSkillMapping, User> = new OneToOneLink('lastModifiedByNav', SelfReportSkillMapping, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SelfReportSkillMapping, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SelfReportSkillMapping, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[skillNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SKILL_NAV: OneToOneLink<SelfReportSkillMapping, SkillEntity> = new OneToOneLink('skillNav', SelfReportSkillMapping, SkillEntity);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<SelfReportSkillMapping, MdfEnumValue> = new OneToOneLink('statusNav', SelfReportSkillMapping, MdfEnumValue);
  /**
   * All fields of the SelfReportSkillMapping entity.
   */
  export const _allFields: Array<StringField<SelfReportSkillMapping> | DateField<SelfReportSkillMapping> | OneToOneLink<SelfReportSkillMapping, User> | OneToOneLink<SelfReportSkillMapping, MdfEnumValue> | OneToOneLink<SelfReportSkillMapping, SkillEntity>> = [
    SelfReportSkillMapping.SKILL_PROFILE_EXTERNAL_CODE,
    SelfReportSkillMapping.CREATED_BY,
    SelfReportSkillMapping.CREATED_DATE_TIME,
    SelfReportSkillMapping.EXTERNAL_CODE,
    SelfReportSkillMapping.LAST_MODIFIED_BY,
    SelfReportSkillMapping.LAST_MODIFIED_DATE_TIME,
    SelfReportSkillMapping.MDF_SYSTEM_RECORD_STATUS,
    SelfReportSkillMapping.SKILL,
    SelfReportSkillMapping.STATUS,
    SelfReportSkillMapping.SUB_MODULE,
    SelfReportSkillMapping.CREATED_BY_NAV,
    SelfReportSkillMapping.LAST_MODIFIED_BY_NAV,
    SelfReportSkillMapping.MDF_SYSTEM_RECORD_STATUS_NAV,
    SelfReportSkillMapping.SKILL_NAV,
    SelfReportSkillMapping.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SelfReportSkillMapping> = new AllFields('*', SelfReportSkillMapping);
  /**
   * All key fields of the SelfReportSkillMapping entity.
   */
  export const _keyFields: Array<Selectable<SelfReportSkillMapping>> = [SelfReportSkillMapping.SKILL_PROFILE_EXTERNAL_CODE, SelfReportSkillMapping.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SelfReportSkillMapping.
   */
  export const _keys: { [keys: string]: Selectable<SelfReportSkillMapping> } = SelfReportSkillMapping._keyFields.reduce((acc: { [keys: string]: Selectable<SelfReportSkillMapping> }, field: Selectable<SelfReportSkillMapping>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
