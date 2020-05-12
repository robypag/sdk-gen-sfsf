/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SapSystemConfigurationRequestBuilder } from './SapSystemConfigurationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SAPSystemConfiguration" of service "SFOData".
 */
export class SapSystemConfiguration extends Entity implements SapSystemConfigurationType {
  /**
   * Technical entity name for SapSystemConfiguration.
   */
  static _entityName = 'SAPSystemConfiguration';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SapSystemConfiguration.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * System Name.
   * Maximum length: 128.
   */
  externalCode!: string;
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
   * Client.
   * Maximum length: 255.
   * @nullable
   */
  payrollSystemClientId?: string;
  /**
   * System URL.
   * Maximum length: 255.
   * @nullable
   */
  payrollSystemUrl?: string;
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
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `SapSystemConfiguration`.
   * @returns A builder that constructs instances of entity type `SapSystemConfiguration`.
   */
  static builder(): EntityBuilderType<SapSystemConfiguration, SapSystemConfigurationTypeForceMandatory> {
    return Entity.entityBuilder(SapSystemConfiguration);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SapSystemConfiguration` entity type.
   * @returns A `SapSystemConfiguration` request builder.
   */
  static requestBuilder(): SapSystemConfigurationRequestBuilder {
    return new SapSystemConfigurationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SapSystemConfiguration`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SapSystemConfiguration`.
   */
  static customField(fieldName: string): CustomField<SapSystemConfiguration> {
    return Entity.customFieldSelector(fieldName, SapSystemConfiguration);
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
import { WfRequest, WfRequestType } from './WfRequest';

export interface SapSystemConfigurationType {
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  payrollSystemClientId?: string;
  payrollSystemUrl?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface SapSystemConfigurationTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  payrollSystemClientId: string;
  payrollSystemUrl: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace SapSystemConfiguration {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SapSystemConfiguration> = new StringField('createdBy', SapSystemConfiguration, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SapSystemConfiguration> = new DateField('createdDateTime', SapSystemConfiguration, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<SapSystemConfiguration> = new StringField('externalCode', SapSystemConfiguration, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SapSystemConfiguration> = new StringField('lastModifiedBy', SapSystemConfiguration, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SapSystemConfiguration> = new DateField('lastModifiedDateTime', SapSystemConfiguration, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SapSystemConfiguration> = new StringField('mdfSystemRecordStatus', SapSystemConfiguration, 'Edm.String');
  /**
   * Static representation of the [[payrollSystemClientId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_SYSTEM_CLIENT_ID: StringField<SapSystemConfiguration> = new StringField('payrollSystemClientId', SapSystemConfiguration, 'Edm.String');
  /**
   * Static representation of the [[payrollSystemUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_SYSTEM_URL: StringField<SapSystemConfiguration> = new StringField('payrollSystemUrl', SapSystemConfiguration, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SapSystemConfiguration, User> = new OneToOneLink('createdByNav', SapSystemConfiguration, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SapSystemConfiguration, User> = new OneToOneLink('lastModifiedByNav', SapSystemConfiguration, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SapSystemConfiguration, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SapSystemConfiguration, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<SapSystemConfiguration, WfRequest> = new Link('wfRequestNav', SapSystemConfiguration, WfRequest);
  /**
   * All fields of the SapSystemConfiguration entity.
   */
  export const _allFields: Array<StringField<SapSystemConfiguration> | DateField<SapSystemConfiguration> | OneToOneLink<SapSystemConfiguration, User> | OneToOneLink<SapSystemConfiguration, MdfEnumValue> | Link<SapSystemConfiguration, WfRequest>> = [
    SapSystemConfiguration.CREATED_BY,
    SapSystemConfiguration.CREATED_DATE_TIME,
    SapSystemConfiguration.EXTERNAL_CODE,
    SapSystemConfiguration.LAST_MODIFIED_BY,
    SapSystemConfiguration.LAST_MODIFIED_DATE_TIME,
    SapSystemConfiguration.MDF_SYSTEM_RECORD_STATUS,
    SapSystemConfiguration.PAYROLL_SYSTEM_CLIENT_ID,
    SapSystemConfiguration.PAYROLL_SYSTEM_URL,
    SapSystemConfiguration.CREATED_BY_NAV,
    SapSystemConfiguration.LAST_MODIFIED_BY_NAV,
    SapSystemConfiguration.MDF_SYSTEM_RECORD_STATUS_NAV,
    SapSystemConfiguration.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SapSystemConfiguration> = new AllFields('*', SapSystemConfiguration);
  /**
   * All key fields of the SapSystemConfiguration entity.
   */
  export const _keyFields: Array<Selectable<SapSystemConfiguration>> = [SapSystemConfiguration.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SapSystemConfiguration.
   */
  export const _keys: { [keys: string]: Selectable<SapSystemConfiguration> } = SapSystemConfiguration._keyFields.reduce((acc: { [keys: string]: Selectable<SapSystemConfiguration> }, field: Selectable<SapSystemConfiguration>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
