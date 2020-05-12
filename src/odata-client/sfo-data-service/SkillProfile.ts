/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SkillProfileRequestBuilder } from './SkillProfileRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SkillProfile" of service "SFOData".
 */
export class SkillProfile extends Entity implements SkillProfileType {
  /**
   * Technical entity name for SkillProfile.
   */
  static _entityName = 'SkillProfile';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SkillProfile.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * createdBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * Added.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * User Id.
   * Maximum length: 100.
   */
  externalCode!: string;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified.
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
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  externalCodeNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[RatedSkillMapping]] entity.
   */
  ratedSkills!: RatedSkillMapping[];
  /**
   * One-to-many navigation property to the [[SelfReportSkillMapping]] entity.
   */
  selfReportSkills!: SelfReportSkillMapping[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `SkillProfile`.
   * @returns A builder that constructs instances of entity type `SkillProfile`.
   */
  static builder(): EntityBuilderType<SkillProfile, SkillProfileTypeForceMandatory> {
    return Entity.entityBuilder(SkillProfile);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SkillProfile` entity type.
   * @returns A `SkillProfile` request builder.
   */
  static requestBuilder(): SkillProfileRequestBuilder {
    return new SkillProfileRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SkillProfile`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SkillProfile`.
   */
  static customField(fieldName: string): CustomField<SkillProfile> {
    return Entity.customFieldSelector(fieldName, SkillProfile);
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
import { RatedSkillMapping, RatedSkillMappingType } from './RatedSkillMapping';
import { SelfReportSkillMapping, SelfReportSkillMappingType } from './SelfReportSkillMapping';
import { WfRequest, WfRequestType } from './WfRequest';

export interface SkillProfileType {
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  status?: string;
  createdByNav: UserType;
  externalCodeNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  ratedSkills: RatedSkillMappingType[];
  selfReportSkills: SelfReportSkillMappingType[];
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface SkillProfileTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  status: string;
  createdByNav: UserType;
  externalCodeNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  ratedSkills: RatedSkillMappingType[];
  selfReportSkills: SelfReportSkillMappingType[];
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace SkillProfile {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SkillProfile> = new StringField('createdBy', SkillProfile, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SkillProfile> = new DateField('createdDateTime', SkillProfile, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<SkillProfile> = new StringField('externalCode', SkillProfile, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SkillProfile> = new StringField('lastModifiedBy', SkillProfile, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SkillProfile> = new DateField('lastModifiedDateTime', SkillProfile, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SkillProfile> = new StringField('mdfSystemRecordStatus', SkillProfile, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<SkillProfile> = new StringField('status', SkillProfile, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SkillProfile, User> = new OneToOneLink('createdByNav', SkillProfile, User);
  /**
   * Static representation of the one-to-one navigation property [[externalCodeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE_NAV: OneToOneLink<SkillProfile, User> = new OneToOneLink('externalCodeNav', SkillProfile, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SkillProfile, User> = new OneToOneLink('lastModifiedByNav', SkillProfile, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SkillProfile, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SkillProfile, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[ratedSkills]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATED_SKILLS: Link<SkillProfile, RatedSkillMapping> = new Link('ratedSkills', SkillProfile, RatedSkillMapping);
  /**
   * Static representation of the one-to-many navigation property [[selfReportSkills]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_REPORT_SKILLS: Link<SkillProfile, SelfReportSkillMapping> = new Link('selfReportSkills', SkillProfile, SelfReportSkillMapping);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<SkillProfile, MdfEnumValue> = new OneToOneLink('statusNav', SkillProfile, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<SkillProfile, WfRequest> = new Link('wfRequestNav', SkillProfile, WfRequest);
  /**
   * All fields of the SkillProfile entity.
   */
  export const _allFields: Array<StringField<SkillProfile> | DateField<SkillProfile> | OneToOneLink<SkillProfile, User> | OneToOneLink<SkillProfile, MdfEnumValue> | Link<SkillProfile, RatedSkillMapping> | Link<SkillProfile, SelfReportSkillMapping> | Link<SkillProfile, WfRequest>> = [
    SkillProfile.CREATED_BY,
    SkillProfile.CREATED_DATE_TIME,
    SkillProfile.EXTERNAL_CODE,
    SkillProfile.LAST_MODIFIED_BY,
    SkillProfile.LAST_MODIFIED_DATE_TIME,
    SkillProfile.MDF_SYSTEM_RECORD_STATUS,
    SkillProfile.STATUS,
    SkillProfile.CREATED_BY_NAV,
    SkillProfile.EXTERNAL_CODE_NAV,
    SkillProfile.LAST_MODIFIED_BY_NAV,
    SkillProfile.MDF_SYSTEM_RECORD_STATUS_NAV,
    SkillProfile.RATED_SKILLS,
    SkillProfile.SELF_REPORT_SKILLS,
    SkillProfile.STATUS_NAV,
    SkillProfile.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SkillProfile> = new AllFields('*', SkillProfile);
  /**
   * All key fields of the SkillProfile entity.
   */
  export const _keyFields: Array<Selectable<SkillProfile>> = [SkillProfile.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SkillProfile.
   */
  export const _keys: { [keys: string]: Selectable<SkillProfile> } = SkillProfile._keyFields.reduce((acc: { [keys: string]: Selectable<SkillProfile> }, field: Selectable<SkillProfile>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
