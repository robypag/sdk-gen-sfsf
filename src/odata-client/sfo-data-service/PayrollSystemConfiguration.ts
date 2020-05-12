/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayrollSystemConfigurationRequestBuilder } from './PayrollSystemConfigurationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PayrollSystemConfiguration" of service "SFOData".
 */
export class PayrollSystemConfiguration extends Entity implements PayrollSystemConfigurationType {
  /**
   * Technical entity name for PayrollSystemConfiguration.
   */
  static _entityName = 'PayrollSystemConfiguration';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PayrollSystemConfiguration.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Country/Region.
   * Maximum length: 128.
   * @nullable
   */
  country?: string;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Enable access to BSI TaxProfileFactory (US only).
   * @nullable
   */
  enableBsi?: boolean;
  /**
   * Enable Enhanced Validations for Production.
   * @nullable
   */
  enableEnhancedValidationsForProduction?: boolean;
  /**
   * Enable Pay Statement.
   * @nullable
   */
  enablePayStatement?: boolean;
  /**
   * Enable Payroll UI Integration.
   * @nullable
   */
  enablePayrollUiIntegration?: boolean;
  /**
   * Enable PDF Download Functionality.
   * @nullable
   */
  enablePaystatementDownloadFunctionality?: boolean;
  /**
   * External Configuration Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Configuration Name.
   * Maximum length: 128.
   * @nullable
   */
  externalName?: string;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date.
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
   * Payroll System Client ID.
   * Maximum length: 255.
   * @nullable
   */
  payrollSystemClientId?: string;
  /**
   * Payroll System URL.
   * Maximum length: 255.
   * @nullable
   */
  payrollSystemUrl?: string;
  /**
   * SAP System Configuration.
   * Maximum length: 128.
   * @nullable
   */
  sapSystemConfiguration?: string;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * Third Party Identity Provider URL for BSI TaxProfileFactory.
   * Maximum length: 255.
   * @nullable
   */
  thirdPartyIdpUrl?: string;
  /**
   * One-to-many navigation property to the [[PayrollConfigurationCategory]] entity.
   */
  categories!: PayrollConfigurationCategory[];
  /**
   * One-to-many navigation property to the [[Country]] entity.
   */
  countryNav!: Country[];
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
   * One-to-one navigation property to the [[SapSystemConfiguration]] entity.
   */
  sapSystemConfigurationNav!: SapSystemConfiguration;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `PayrollSystemConfiguration`.
   * @returns A builder that constructs instances of entity type `PayrollSystemConfiguration`.
   */
  static builder(): EntityBuilderType<PayrollSystemConfiguration, PayrollSystemConfigurationTypeForceMandatory> {
    return Entity.entityBuilder(PayrollSystemConfiguration);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PayrollSystemConfiguration` entity type.
   * @returns A `PayrollSystemConfiguration` request builder.
   */
  static requestBuilder(): PayrollSystemConfigurationRequestBuilder {
    return new PayrollSystemConfigurationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayrollSystemConfiguration`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PayrollSystemConfiguration`.
   */
  static customField(fieldName: string): CustomField<PayrollSystemConfiguration> {
    return Entity.customFieldSelector(fieldName, PayrollSystemConfiguration);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { PayrollConfigurationCategory, PayrollConfigurationCategoryType } from './PayrollConfigurationCategory';
import { Country, CountryType } from './Country';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { SapSystemConfiguration, SapSystemConfigurationType } from './SapSystemConfiguration';
import { WfRequest, WfRequestType } from './WfRequest';

export interface PayrollSystemConfigurationType {
  country?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  enableBsi?: boolean;
  enableEnhancedValidationsForProduction?: boolean;
  enablePayStatement?: boolean;
  enablePayrollUiIntegration?: boolean;
  enablePaystatementDownloadFunctionality?: boolean;
  externalCode: string;
  externalName?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  payrollSystemClientId?: string;
  payrollSystemUrl?: string;
  sapSystemConfiguration?: string;
  status?: string;
  thirdPartyIdpUrl?: string;
  categories: PayrollConfigurationCategoryType[];
  countryNav: CountryType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  sapSystemConfigurationNav: SapSystemConfigurationType;
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface PayrollSystemConfigurationTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  enableBsi: boolean;
  enableEnhancedValidationsForProduction: boolean;
  enablePayStatement: boolean;
  enablePayrollUiIntegration: boolean;
  enablePaystatementDownloadFunctionality: boolean;
  externalCode: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  payrollSystemClientId: string;
  payrollSystemUrl: string;
  sapSystemConfiguration: string;
  status: string;
  thirdPartyIdpUrl: string;
  categories: PayrollConfigurationCategoryType[];
  countryNav: CountryType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  sapSystemConfigurationNav: SapSystemConfigurationType;
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace PayrollSystemConfiguration {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PayrollSystemConfiguration> = new StringField('country', PayrollSystemConfiguration, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PayrollSystemConfiguration> = new StringField('createdBy', PayrollSystemConfiguration, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PayrollSystemConfiguration> = new DateField('createdDateTime', PayrollSystemConfiguration, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[enableBsi]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENABLE_BSI: BooleanField<PayrollSystemConfiguration> = new BooleanField('enableBsi', PayrollSystemConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[enableEnhancedValidationsForProduction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENABLE_ENHANCED_VALIDATIONS_FOR_PRODUCTION: BooleanField<PayrollSystemConfiguration> = new BooleanField('enableEnhancedValidationsForProduction', PayrollSystemConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[enablePayStatement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENABLE_PAY_STATEMENT: BooleanField<PayrollSystemConfiguration> = new BooleanField('enablePayStatement', PayrollSystemConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[enablePayrollUiIntegration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENABLE_PAYROLL_UI_INTEGRATION: BooleanField<PayrollSystemConfiguration> = new BooleanField('enablePayrollUiIntegration', PayrollSystemConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[enablePaystatementDownloadFunctionality]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENABLE_PAYSTATEMENT_DOWNLOAD_FUNCTIONALITY: BooleanField<PayrollSystemConfiguration> = new BooleanField('enablePaystatementDownloadFunctionality', PayrollSystemConfiguration, 'Edm.Boolean');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<PayrollSystemConfiguration> = new StringField('externalCode', PayrollSystemConfiguration, 'Edm.String');
  /**
   * Static representation of the [[externalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME: StringField<PayrollSystemConfiguration> = new StringField('externalName', PayrollSystemConfiguration, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PayrollSystemConfiguration> = new StringField('lastModifiedBy', PayrollSystemConfiguration, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PayrollSystemConfiguration> = new DateField('lastModifiedDateTime', PayrollSystemConfiguration, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PayrollSystemConfiguration> = new StringField('mdfSystemRecordStatus', PayrollSystemConfiguration, 'Edm.String');
  /**
   * Static representation of the [[payrollSystemClientId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_SYSTEM_CLIENT_ID: StringField<PayrollSystemConfiguration> = new StringField('payrollSystemClientId', PayrollSystemConfiguration, 'Edm.String');
  /**
   * Static representation of the [[payrollSystemUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_SYSTEM_URL: StringField<PayrollSystemConfiguration> = new StringField('payrollSystemUrl', PayrollSystemConfiguration, 'Edm.String');
  /**
   * Static representation of the [[sapSystemConfiguration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SAP_SYSTEM_CONFIGURATION: StringField<PayrollSystemConfiguration> = new StringField('sapSystemConfiguration', PayrollSystemConfiguration, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<PayrollSystemConfiguration> = new StringField('status', PayrollSystemConfiguration, 'Edm.String');
  /**
   * Static representation of the [[thirdPartyIdpUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THIRD_PARTY_IDP_URL: StringField<PayrollSystemConfiguration> = new StringField('thirdPartyIdpUrl', PayrollSystemConfiguration, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[categories]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORIES: Link<PayrollSystemConfiguration, PayrollConfigurationCategory> = new Link('categories', PayrollSystemConfiguration, PayrollConfigurationCategory);
  /**
   * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: Link<PayrollSystemConfiguration, Country> = new Link('countryNav', PayrollSystemConfiguration, Country);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PayrollSystemConfiguration, User> = new OneToOneLink('createdByNav', PayrollSystemConfiguration, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PayrollSystemConfiguration, User> = new OneToOneLink('lastModifiedByNav', PayrollSystemConfiguration, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PayrollSystemConfiguration, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PayrollSystemConfiguration, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[sapSystemConfigurationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SAP_SYSTEM_CONFIGURATION_NAV: OneToOneLink<PayrollSystemConfiguration, SapSystemConfiguration> = new OneToOneLink('sapSystemConfigurationNav', PayrollSystemConfiguration, SapSystemConfiguration);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<PayrollSystemConfiguration, MdfEnumValue> = new OneToOneLink('statusNav', PayrollSystemConfiguration, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<PayrollSystemConfiguration, WfRequest> = new Link('wfRequestNav', PayrollSystemConfiguration, WfRequest);
  /**
   * All fields of the PayrollSystemConfiguration entity.
   */
  export const _allFields: Array<StringField<PayrollSystemConfiguration> | DateField<PayrollSystemConfiguration> | BooleanField<PayrollSystemConfiguration> | Link<PayrollSystemConfiguration, PayrollConfigurationCategory> | Link<PayrollSystemConfiguration, Country> | OneToOneLink<PayrollSystemConfiguration, User> | OneToOneLink<PayrollSystemConfiguration, MdfEnumValue> | OneToOneLink<PayrollSystemConfiguration, SapSystemConfiguration> | Link<PayrollSystemConfiguration, WfRequest>> = [
    PayrollSystemConfiguration.COUNTRY,
    PayrollSystemConfiguration.CREATED_BY,
    PayrollSystemConfiguration.CREATED_DATE_TIME,
    PayrollSystemConfiguration.ENABLE_BSI,
    PayrollSystemConfiguration.ENABLE_ENHANCED_VALIDATIONS_FOR_PRODUCTION,
    PayrollSystemConfiguration.ENABLE_PAY_STATEMENT,
    PayrollSystemConfiguration.ENABLE_PAYROLL_UI_INTEGRATION,
    PayrollSystemConfiguration.ENABLE_PAYSTATEMENT_DOWNLOAD_FUNCTIONALITY,
    PayrollSystemConfiguration.EXTERNAL_CODE,
    PayrollSystemConfiguration.EXTERNAL_NAME,
    PayrollSystemConfiguration.LAST_MODIFIED_BY,
    PayrollSystemConfiguration.LAST_MODIFIED_DATE_TIME,
    PayrollSystemConfiguration.MDF_SYSTEM_RECORD_STATUS,
    PayrollSystemConfiguration.PAYROLL_SYSTEM_CLIENT_ID,
    PayrollSystemConfiguration.PAYROLL_SYSTEM_URL,
    PayrollSystemConfiguration.SAP_SYSTEM_CONFIGURATION,
    PayrollSystemConfiguration.STATUS,
    PayrollSystemConfiguration.THIRD_PARTY_IDP_URL,
    PayrollSystemConfiguration.CATEGORIES,
    PayrollSystemConfiguration.COUNTRY_NAV,
    PayrollSystemConfiguration.CREATED_BY_NAV,
    PayrollSystemConfiguration.LAST_MODIFIED_BY_NAV,
    PayrollSystemConfiguration.MDF_SYSTEM_RECORD_STATUS_NAV,
    PayrollSystemConfiguration.SAP_SYSTEM_CONFIGURATION_NAV,
    PayrollSystemConfiguration.STATUS_NAV,
    PayrollSystemConfiguration.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PayrollSystemConfiguration> = new AllFields('*', PayrollSystemConfiguration);
  /**
   * All key fields of the PayrollSystemConfiguration entity.
   */
  export const _keyFields: Array<Selectable<PayrollSystemConfiguration>> = [PayrollSystemConfiguration.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PayrollSystemConfiguration.
   */
  export const _keys: { [keys: string]: Selectable<PayrollSystemConfiguration> } = PayrollSystemConfiguration._keyFields.reduce((acc: { [keys: string]: Selectable<PayrollSystemConfiguration> }, field: Selectable<PayrollSystemConfiguration>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
