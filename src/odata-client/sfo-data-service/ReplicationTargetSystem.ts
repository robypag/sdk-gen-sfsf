/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReplicationTargetSystemRequestBuilder } from './ReplicationTargetSystemRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ReplicationTargetSystem" of service "SFOData".
 */
export class ReplicationTargetSystem extends Entity implements ReplicationTargetSystemType {
  /**
   * Technical entity name for ReplicationTargetSystem.
   */
  static _entityName = 'ReplicationTargetSystem';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ReplicationTargetSystem.
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
   * createdDate.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebug?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsMx?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrCa?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameItIt?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhCn?: string;
  /**
   * Relevant for ERP Integration.
   * @nullable
   */
  isOrganizationalManagementIntegration?: boolean;
  /**
   * Relevant for Payroll Integration.
   * @nullable
   */
  isPayrollIntegration?: boolean;
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
   * Replication Time Offset in Minutes.
   * @nullable
   */
  replicationTimeOffsetInMinutes?: BigNumber;
  /**
   * SAP System Configuration.
   * Maximum length: 128.
   * @nullable
   */
  sapSystemConfiguration?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  externalNameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[SapSystemConfiguration]] entity.
   */
  sapSystemConfigurationNav!: SapSystemConfiguration;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `ReplicationTargetSystem`.
   * @returns A builder that constructs instances of entity type `ReplicationTargetSystem`.
   */
  static builder(): EntityBuilderType<ReplicationTargetSystem, ReplicationTargetSystemTypeForceMandatory> {
    return Entity.entityBuilder(ReplicationTargetSystem);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ReplicationTargetSystem` entity type.
   * @returns A `ReplicationTargetSystem` request builder.
   */
  static requestBuilder(): ReplicationTargetSystemRequestBuilder {
    return new ReplicationTargetSystemRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ReplicationTargetSystem`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ReplicationTargetSystem`.
   */
  static customField(fieldName: string): CustomField<ReplicationTargetSystem> {
    return Entity.customFieldSelector(fieldName, ReplicationTargetSystem);
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
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { SapSystemConfiguration, SapSystemConfigurationType } from './SapSystemConfiguration';
import { WfRequest, WfRequestType } from './WfRequest';

export interface ReplicationTargetSystemType {
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  externalNameDeDe?: string;
  externalNameDefaultValue?: string;
  externalNameEnDebug?: string;
  externalNameEnGb?: string;
  externalNameEnUs?: string;
  externalNameEsEs?: string;
  externalNameEsMx?: string;
  externalNameFrCa?: string;
  externalNameFrFr?: string;
  externalNameItIt?: string;
  externalNameLocalized?: string;
  externalNameNlNl?: string;
  externalNamePtBr?: string;
  externalNameZhCn?: string;
  isOrganizationalManagementIntegration?: boolean;
  isPayrollIntegration?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  replicationTimeOffsetInMinutes?: BigNumber;
  sapSystemConfiguration?: string;
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  sapSystemConfigurationNav: SapSystemConfigurationType;
  wfRequestNav: WfRequestType[];
}

export interface ReplicationTargetSystemTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  externalNameDeDe: string;
  externalNameDefaultValue: string;
  externalNameEnDebug: string;
  externalNameEnGb: string;
  externalNameEnUs: string;
  externalNameEsEs: string;
  externalNameEsMx: string;
  externalNameFrCa: string;
  externalNameFrFr: string;
  externalNameItIt: string;
  externalNameLocalized: string;
  externalNameNlNl: string;
  externalNamePtBr: string;
  externalNameZhCn: string;
  isOrganizationalManagementIntegration: boolean;
  isPayrollIntegration: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  replicationTimeOffsetInMinutes: BigNumber;
  sapSystemConfiguration: string;
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  sapSystemConfigurationNav: SapSystemConfigurationType;
  wfRequestNav: WfRequestType[];
}

export namespace ReplicationTargetSystem {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<ReplicationTargetSystem> = new StringField('createdBy', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<ReplicationTargetSystem> = new DateField('createdDateTime', ReplicationTargetSystem, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<ReplicationTargetSystem> = new StringField('externalCode', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<ReplicationTargetSystem> = new StringField('externalName_de_DE', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<ReplicationTargetSystem> = new StringField('externalName_defaultValue', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<ReplicationTargetSystem> = new StringField('externalName_en_DEBUG', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<ReplicationTargetSystem> = new StringField('externalName_en_GB', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<ReplicationTargetSystem> = new StringField('externalName_en_US', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<ReplicationTargetSystem> = new StringField('externalName_es_ES', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<ReplicationTargetSystem> = new StringField('externalName_es_MX', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<ReplicationTargetSystem> = new StringField('externalName_fr_CA', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<ReplicationTargetSystem> = new StringField('externalName_fr_FR', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<ReplicationTargetSystem> = new StringField('externalName_it_IT', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<ReplicationTargetSystem> = new StringField('externalName_localized', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<ReplicationTargetSystem> = new StringField('externalName_nl_NL', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<ReplicationTargetSystem> = new StringField('externalName_pt_BR', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<ReplicationTargetSystem> = new StringField('externalName_zh_CN', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[isOrganizationalManagementIntegration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ORGANIZATIONAL_MANAGEMENT_INTEGRATION: BooleanField<ReplicationTargetSystem> = new BooleanField('isOrganizationalManagementIntegration', ReplicationTargetSystem, 'Edm.Boolean');
  /**
   * Static representation of the [[isPayrollIntegration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PAYROLL_INTEGRATION: BooleanField<ReplicationTargetSystem> = new BooleanField('isPayrollIntegration', ReplicationTargetSystem, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<ReplicationTargetSystem> = new StringField('lastModifiedBy', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<ReplicationTargetSystem> = new DateField('lastModifiedDateTime', ReplicationTargetSystem, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<ReplicationTargetSystem> = new StringField('mdfSystemRecordStatus', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the [[replicationTimeOffsetInMinutes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_TIME_OFFSET_IN_MINUTES: BigNumberField<ReplicationTargetSystem> = new BigNumberField('replicationTimeOffsetInMinutes', ReplicationTargetSystem, 'Edm.Int64');
  /**
   * Static representation of the [[sapSystemConfiguration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SAP_SYSTEM_CONFIGURATION: StringField<ReplicationTargetSystem> = new StringField('sapSystemConfiguration', ReplicationTargetSystem, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<ReplicationTargetSystem, User> = new OneToOneLink('createdByNav', ReplicationTargetSystem, User);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<ReplicationTargetSystem, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', ReplicationTargetSystem, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<ReplicationTargetSystem, User> = new OneToOneLink('lastModifiedByNav', ReplicationTargetSystem, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<ReplicationTargetSystem, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', ReplicationTargetSystem, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[sapSystemConfigurationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SAP_SYSTEM_CONFIGURATION_NAV: OneToOneLink<ReplicationTargetSystem, SapSystemConfiguration> = new OneToOneLink('sapSystemConfigurationNav', ReplicationTargetSystem, SapSystemConfiguration);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<ReplicationTargetSystem, WfRequest> = new Link('wfRequestNav', ReplicationTargetSystem, WfRequest);
  /**
   * All fields of the ReplicationTargetSystem entity.
   */
  export const _allFields: Array<StringField<ReplicationTargetSystem> | DateField<ReplicationTargetSystem> | BooleanField<ReplicationTargetSystem> | BigNumberField<ReplicationTargetSystem> | OneToOneLink<ReplicationTargetSystem, User> | Link<ReplicationTargetSystem, MdfLocalizedValue> | OneToOneLink<ReplicationTargetSystem, MdfEnumValue> | OneToOneLink<ReplicationTargetSystem, SapSystemConfiguration> | Link<ReplicationTargetSystem, WfRequest>> = [
    ReplicationTargetSystem.CREATED_BY,
    ReplicationTargetSystem.CREATED_DATE_TIME,
    ReplicationTargetSystem.EXTERNAL_CODE,
    ReplicationTargetSystem.EXTERNAL_NAME_DE_DE,
    ReplicationTargetSystem.EXTERNAL_NAME_DEFAULT_VALUE,
    ReplicationTargetSystem.EXTERNAL_NAME_EN_DEBUG,
    ReplicationTargetSystem.EXTERNAL_NAME_EN_GB,
    ReplicationTargetSystem.EXTERNAL_NAME_EN_US,
    ReplicationTargetSystem.EXTERNAL_NAME_ES_ES,
    ReplicationTargetSystem.EXTERNAL_NAME_ES_MX,
    ReplicationTargetSystem.EXTERNAL_NAME_FR_CA,
    ReplicationTargetSystem.EXTERNAL_NAME_FR_FR,
    ReplicationTargetSystem.EXTERNAL_NAME_IT_IT,
    ReplicationTargetSystem.EXTERNAL_NAME_LOCALIZED,
    ReplicationTargetSystem.EXTERNAL_NAME_NL_NL,
    ReplicationTargetSystem.EXTERNAL_NAME_PT_BR,
    ReplicationTargetSystem.EXTERNAL_NAME_ZH_CN,
    ReplicationTargetSystem.IS_ORGANIZATIONAL_MANAGEMENT_INTEGRATION,
    ReplicationTargetSystem.IS_PAYROLL_INTEGRATION,
    ReplicationTargetSystem.LAST_MODIFIED_BY,
    ReplicationTargetSystem.LAST_MODIFIED_DATE_TIME,
    ReplicationTargetSystem.MDF_SYSTEM_RECORD_STATUS,
    ReplicationTargetSystem.REPLICATION_TIME_OFFSET_IN_MINUTES,
    ReplicationTargetSystem.SAP_SYSTEM_CONFIGURATION,
    ReplicationTargetSystem.CREATED_BY_NAV,
    ReplicationTargetSystem.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    ReplicationTargetSystem.LAST_MODIFIED_BY_NAV,
    ReplicationTargetSystem.MDF_SYSTEM_RECORD_STATUS_NAV,
    ReplicationTargetSystem.SAP_SYSTEM_CONFIGURATION_NAV,
    ReplicationTargetSystem.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ReplicationTargetSystem> = new AllFields('*', ReplicationTargetSystem);
  /**
   * All key fields of the ReplicationTargetSystem entity.
   */
  export const _keyFields: Array<Selectable<ReplicationTargetSystem>> = [ReplicationTargetSystem.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property ReplicationTargetSystem.
   */
  export const _keys: { [keys: string]: Selectable<ReplicationTargetSystem> } = ReplicationTargetSystem._keyFields.reduce((acc: { [keys: string]: Selectable<ReplicationTargetSystem> }, field: Selectable<ReplicationTargetSystem>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
