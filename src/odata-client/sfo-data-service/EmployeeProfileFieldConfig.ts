/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeProfileFieldConfigRequestBuilder } from './EmployeeProfileFieldConfigRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeProfileFieldConfig" of service "SFOData".
 */
export class EmployeeProfileFieldConfig extends Entity implements EmployeeProfileFieldConfigType {
  /**
   * Technical entity name for EmployeeProfileFieldConfig.
   */
  static _entityName = 'EmployeeProfileFieldConfig';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeProfileFieldConfig.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * EmployeeProfileBlockContent_code.
   * Maximum length: 128.
   */
  employeeProfileBlockContentCode!: string;
  /**
   * EmployeeProfilePageConfig_code.
   * Maximum length: 128.
   */
  employeeProfilePageConfigCode!: string;
  /**
   * EmployeeProfileSectionConfig_code.
   * Maximum length: 128.
   */
  employeeProfileSectionConfigCode!: string;
  /**
   * EmployeeProfileSubSectionConfig_code.
   * Maximum length: 128.
   */
  employeeProfileSubSectionConfigCode!: string;
  /**
   * code.
   * Maximum length: 128.
   */
  code!: string;
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
   * fieldId.
   * Maximum length: 255.
   * @nullable
   */
  fieldId?: string;
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
   * order.
   * @nullable
   */
  order?: BigNumber;
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
   * Returns an entity builder to construct instances `EmployeeProfileFieldConfig`.
   * @returns A builder that constructs instances of entity type `EmployeeProfileFieldConfig`.
   */
  static builder(): EntityBuilderType<EmployeeProfileFieldConfig, EmployeeProfileFieldConfigTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeProfileFieldConfig);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeProfileFieldConfig` entity type.
   * @returns A `EmployeeProfileFieldConfig` request builder.
   */
  static requestBuilder(): EmployeeProfileFieldConfigRequestBuilder {
    return new EmployeeProfileFieldConfigRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfileFieldConfig`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeProfileFieldConfig`.
   */
  static customField(fieldName: string): CustomField<EmployeeProfileFieldConfig> {
    return Entity.customFieldSelector(fieldName, EmployeeProfileFieldConfig);
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

export interface EmployeeProfileFieldConfigType {
  employeeProfileBlockContentCode: string;
  employeeProfilePageConfigCode: string;
  employeeProfileSectionConfigCode: string;
  employeeProfileSubSectionConfigCode: string;
  code: string;
  createdBy?: string;
  createdDateTime?: Moment;
  fieldId?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  order?: BigNumber;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface EmployeeProfileFieldConfigTypeForceMandatory {
  employeeProfileBlockContentCode: string;
  employeeProfilePageConfigCode: string;
  employeeProfileSectionConfigCode: string;
  employeeProfileSubSectionConfigCode: string;
  code: string;
  createdBy: string;
  createdDateTime: Moment;
  fieldId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  order: BigNumber;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace EmployeeProfileFieldConfig {
  /**
   * Static representation of the [[employeeProfileBlockContentCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_PROFILE_BLOCK_CONTENT_CODE: StringField<EmployeeProfileFieldConfig> = new StringField('EmployeeProfileBlockContent_code', EmployeeProfileFieldConfig, 'Edm.String');
  /**
   * Static representation of the [[employeeProfilePageConfigCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_PROFILE_PAGE_CONFIG_CODE: StringField<EmployeeProfileFieldConfig> = new StringField('EmployeeProfilePageConfig_code', EmployeeProfileFieldConfig, 'Edm.String');
  /**
   * Static representation of the [[employeeProfileSectionConfigCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_PROFILE_SECTION_CONFIG_CODE: StringField<EmployeeProfileFieldConfig> = new StringField('EmployeeProfileSectionConfig_code', EmployeeProfileFieldConfig, 'Edm.String');
  /**
   * Static representation of the [[employeeProfileSubSectionConfigCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE: StringField<EmployeeProfileFieldConfig> = new StringField('EmployeeProfileSubSectionConfig_code', EmployeeProfileFieldConfig, 'Edm.String');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<EmployeeProfileFieldConfig> = new StringField('code', EmployeeProfileFieldConfig, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeProfileFieldConfig> = new StringField('createdBy', EmployeeProfileFieldConfig, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeProfileFieldConfig> = new DateField('createdDateTime', EmployeeProfileFieldConfig, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[fieldId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_ID: StringField<EmployeeProfileFieldConfig> = new StringField('fieldId', EmployeeProfileFieldConfig, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeProfileFieldConfig> = new StringField('lastModifiedBy', EmployeeProfileFieldConfig, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeProfileFieldConfig> = new DateField('lastModifiedDateTime', EmployeeProfileFieldConfig, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeProfileFieldConfig> = new StringField('mdfSystemRecordStatus', EmployeeProfileFieldConfig, 'Edm.String');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: BigNumberField<EmployeeProfileFieldConfig> = new BigNumberField('order', EmployeeProfileFieldConfig, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EmployeeProfileFieldConfig, User> = new OneToOneLink('createdByNav', EmployeeProfileFieldConfig, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeProfileFieldConfig, User> = new OneToOneLink('lastModifiedByNav', EmployeeProfileFieldConfig, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeProfileFieldConfig, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EmployeeProfileFieldConfig, MdfEnumValue);
  /**
   * All fields of the EmployeeProfileFieldConfig entity.
   */
  export const _allFields: Array<StringField<EmployeeProfileFieldConfig> | DateField<EmployeeProfileFieldConfig> | BigNumberField<EmployeeProfileFieldConfig> | OneToOneLink<EmployeeProfileFieldConfig, User> | OneToOneLink<EmployeeProfileFieldConfig, MdfEnumValue>> = [
    EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_BLOCK_CONTENT_CODE,
    EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE,
    EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE,
    EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE,
    EmployeeProfileFieldConfig.CODE,
    EmployeeProfileFieldConfig.CREATED_BY,
    EmployeeProfileFieldConfig.CREATED_DATE_TIME,
    EmployeeProfileFieldConfig.FIELD_ID,
    EmployeeProfileFieldConfig.LAST_MODIFIED_BY,
    EmployeeProfileFieldConfig.LAST_MODIFIED_DATE_TIME,
    EmployeeProfileFieldConfig.MDF_SYSTEM_RECORD_STATUS,
    EmployeeProfileFieldConfig.ORDER,
    EmployeeProfileFieldConfig.CREATED_BY_NAV,
    EmployeeProfileFieldConfig.LAST_MODIFIED_BY_NAV,
    EmployeeProfileFieldConfig.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeProfileFieldConfig> = new AllFields('*', EmployeeProfileFieldConfig);
  /**
   * All key fields of the EmployeeProfileFieldConfig entity.
   */
  export const _keyFields: Array<Selectable<EmployeeProfileFieldConfig>> = [EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_BLOCK_CONTENT_CODE, EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE, EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE, EmployeeProfileFieldConfig.EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE, EmployeeProfileFieldConfig.CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeProfileFieldConfig.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeProfileFieldConfig> } = EmployeeProfileFieldConfig._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeProfileFieldConfig> }, field: Selectable<EmployeeProfileFieldConfig>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
