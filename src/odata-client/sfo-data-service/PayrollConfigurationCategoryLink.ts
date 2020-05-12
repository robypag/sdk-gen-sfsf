/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayrollConfigurationCategoryLinkRequestBuilder } from './PayrollConfigurationCategoryLinkRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PayrollConfigurationCategoryLink" of service "SFOData".
 */
export class PayrollConfigurationCategoryLink extends Entity implements PayrollConfigurationCategoryLinkType {
  /**
   * Technical entity name for PayrollConfigurationCategoryLink.
   */
  static _entityName = 'PayrollConfigurationCategoryLink';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PayrollConfigurationCategoryLink.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Portlets_External Portlet Code.
   * Maximum length: 128.
   */
  payrollConfigurationCategoryExternalCode!: string;
  /**
   * Payroll System Configuration_External Configuration Code.
   * Maximum length: 128.
   */
  payrollSystemConfigurationExternalCode!: string;
  /**
   * Admin Service.
   * @nullable
   */
  adminService?: boolean;
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
   * External Link Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Link Label.
   * Maximum length: 255.
   * @nullable
   */
  externalLinkNameDeDe?: string;
  /**
   * Link Label.
   * Maximum length: 255.
   * @nullable
   */
  externalLinkNameDefaultValue?: string;
  /**
   * Link Label.
   * Maximum length: 255.
   * @nullable
   */
  externalLinkNameEnDebug?: string;
  /**
   * Link Label.
   * Maximum length: 255.
   * @nullable
   */
  externalLinkNameEnGb?: string;
  /**
   * Link Label.
   * Maximum length: 255.
   * @nullable
   */
  externalLinkNameEnUs?: string;
  /**
   * Link Label.
   * Maximum length: 255.
   * @nullable
   */
  externalLinkNameEsEs?: string;
  /**
   * Link Label.
   * Maximum length: 255.
   * @nullable
   */
  externalLinkNameEsMx?: string;
  /**
   * Link Label.
   * Maximum length: 255.
   * @nullable
   */
  externalLinkNameFrCa?: string;
  /**
   * Link Label.
   * Maximum length: 255.
   * @nullable
   */
  externalLinkNameFrFr?: string;
  /**
   * Link Label.
   * Maximum length: 255.
   * @nullable
   */
  externalLinkNameItIt?: string;
  /**
   * Link Label.
   * Maximum length: 255.
   * @nullable
   */
  externalLinkNameLocalized?: string;
  /**
   * Link Label.
   * Maximum length: 255.
   * @nullable
   */
  externalLinkNameNlNl?: string;
  /**
   * Link Label.
   * Maximum length: 255.
   * @nullable
   */
  externalLinkNamePtBr?: string;
  /**
   * Link Label.
   * Maximum length: 255.
   * @nullable
   */
  externalLinkNameZhCn?: string;
  /**
   * Infotype Number.
   * @nullable
   */
  infotypeNumber?: BigNumber;
  /**
   * Required for Payroll.
   * @nullable
   */
  isRequiredForPayroll?: boolean;
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
   * Self Service.
   * @nullable
   */
  selfService?: boolean;
  /**
   * Service.
   * Maximum length: 128.
   * @nullable
   */
  service?: string;
  /**
   * Type of URL.
   * Maximum length: 128.
   * @nullable
   */
  typeOfUrl?: string;
  /**
   * URL.
   * Maximum length: 255.
   * @nullable
   */
  url?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  externalLinkNameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[PickListValueV2]] entity.
   */
  serviceNav!: PickListValueV2[];
  /**
   * One-to-many navigation property to the [[PickListValueV2]] entity.
   */
  typeOfUrlNav!: PickListValueV2[];

  /**
   * Returns an entity builder to construct instances `PayrollConfigurationCategoryLink`.
   * @returns A builder that constructs instances of entity type `PayrollConfigurationCategoryLink`.
   */
  static builder(): EntityBuilderType<PayrollConfigurationCategoryLink, PayrollConfigurationCategoryLinkTypeForceMandatory> {
    return Entity.entityBuilder(PayrollConfigurationCategoryLink);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PayrollConfigurationCategoryLink` entity type.
   * @returns A `PayrollConfigurationCategoryLink` request builder.
   */
  static requestBuilder(): PayrollConfigurationCategoryLinkRequestBuilder {
    return new PayrollConfigurationCategoryLinkRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayrollConfigurationCategoryLink`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PayrollConfigurationCategoryLink`.
   */
  static customField(fieldName: string): CustomField<PayrollConfigurationCategoryLink> {
    return Entity.customFieldSelector(fieldName, PayrollConfigurationCategoryLink);
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
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';

export interface PayrollConfigurationCategoryLinkType {
  payrollConfigurationCategoryExternalCode: string;
  payrollSystemConfigurationExternalCode: string;
  adminService?: boolean;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  externalLinkNameDeDe?: string;
  externalLinkNameDefaultValue?: string;
  externalLinkNameEnDebug?: string;
  externalLinkNameEnGb?: string;
  externalLinkNameEnUs?: string;
  externalLinkNameEsEs?: string;
  externalLinkNameEsMx?: string;
  externalLinkNameFrCa?: string;
  externalLinkNameFrFr?: string;
  externalLinkNameItIt?: string;
  externalLinkNameLocalized?: string;
  externalLinkNameNlNl?: string;
  externalLinkNamePtBr?: string;
  externalLinkNameZhCn?: string;
  infotypeNumber?: BigNumber;
  isRequiredForPayroll?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  selfService?: boolean;
  service?: string;
  typeOfUrl?: string;
  url?: string;
  createdByNav: UserType;
  externalLinkNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  serviceNav: PickListValueV2Type[];
  typeOfUrlNav: PickListValueV2Type[];
}

export interface PayrollConfigurationCategoryLinkTypeForceMandatory {
  payrollConfigurationCategoryExternalCode: string;
  payrollSystemConfigurationExternalCode: string;
  adminService: boolean;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  externalLinkNameDeDe: string;
  externalLinkNameDefaultValue: string;
  externalLinkNameEnDebug: string;
  externalLinkNameEnGb: string;
  externalLinkNameEnUs: string;
  externalLinkNameEsEs: string;
  externalLinkNameEsMx: string;
  externalLinkNameFrCa: string;
  externalLinkNameFrFr: string;
  externalLinkNameItIt: string;
  externalLinkNameLocalized: string;
  externalLinkNameNlNl: string;
  externalLinkNamePtBr: string;
  externalLinkNameZhCn: string;
  infotypeNumber: BigNumber;
  isRequiredForPayroll: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  selfService: boolean;
  service: string;
  typeOfUrl: string;
  url: string;
  createdByNav: UserType;
  externalLinkNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  serviceNav: PickListValueV2Type[];
  typeOfUrlNav: PickListValueV2Type[];
}

export namespace PayrollConfigurationCategoryLink {
  /**
   * Static representation of the [[payrollConfigurationCategoryExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_CONFIGURATION_CATEGORY_EXTERNAL_CODE: StringField<PayrollConfigurationCategoryLink> = new StringField('PayrollConfigurationCategory_externalCode', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[payrollSystemConfigurationExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_SYSTEM_CONFIGURATION_EXTERNAL_CODE: StringField<PayrollConfigurationCategoryLink> = new StringField('PayrollSystemConfiguration_externalCode', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[adminService]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADMIN_SERVICE: BooleanField<PayrollConfigurationCategoryLink> = new BooleanField('adminService', PayrollConfigurationCategoryLink, 'Edm.Boolean');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PayrollConfigurationCategoryLink> = new StringField('createdBy', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PayrollConfigurationCategoryLink> = new DateField('createdDateTime', PayrollConfigurationCategoryLink, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<PayrollConfigurationCategoryLink> = new StringField('externalCode', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[externalLinkNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_LINK_NAME_DE_DE: StringField<PayrollConfigurationCategoryLink> = new StringField('externalLinkName_de_DE', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[externalLinkNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_LINK_NAME_DEFAULT_VALUE: StringField<PayrollConfigurationCategoryLink> = new StringField('externalLinkName_defaultValue', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[externalLinkNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_LINK_NAME_EN_DEBUG: StringField<PayrollConfigurationCategoryLink> = new StringField('externalLinkName_en_DEBUG', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[externalLinkNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_LINK_NAME_EN_GB: StringField<PayrollConfigurationCategoryLink> = new StringField('externalLinkName_en_GB', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[externalLinkNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_LINK_NAME_EN_US: StringField<PayrollConfigurationCategoryLink> = new StringField('externalLinkName_en_US', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[externalLinkNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_LINK_NAME_ES_ES: StringField<PayrollConfigurationCategoryLink> = new StringField('externalLinkName_es_ES', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[externalLinkNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_LINK_NAME_ES_MX: StringField<PayrollConfigurationCategoryLink> = new StringField('externalLinkName_es_MX', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[externalLinkNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_LINK_NAME_FR_CA: StringField<PayrollConfigurationCategoryLink> = new StringField('externalLinkName_fr_CA', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[externalLinkNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_LINK_NAME_FR_FR: StringField<PayrollConfigurationCategoryLink> = new StringField('externalLinkName_fr_FR', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[externalLinkNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_LINK_NAME_IT_IT: StringField<PayrollConfigurationCategoryLink> = new StringField('externalLinkName_it_IT', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[externalLinkNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_LINK_NAME_LOCALIZED: StringField<PayrollConfigurationCategoryLink> = new StringField('externalLinkName_localized', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[externalLinkNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_LINK_NAME_NL_NL: StringField<PayrollConfigurationCategoryLink> = new StringField('externalLinkName_nl_NL', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[externalLinkNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_LINK_NAME_PT_BR: StringField<PayrollConfigurationCategoryLink> = new StringField('externalLinkName_pt_BR', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[externalLinkNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_LINK_NAME_ZH_CN: StringField<PayrollConfigurationCategoryLink> = new StringField('externalLinkName_zh_CN', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[infotypeNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INFOTYPE_NUMBER: BigNumberField<PayrollConfigurationCategoryLink> = new BigNumberField('infotypeNumber', PayrollConfigurationCategoryLink, 'Edm.Int64');
  /**
   * Static representation of the [[isRequiredForPayroll]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_REQUIRED_FOR_PAYROLL: BooleanField<PayrollConfigurationCategoryLink> = new BooleanField('isRequiredForPayroll', PayrollConfigurationCategoryLink, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PayrollConfigurationCategoryLink> = new StringField('lastModifiedBy', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PayrollConfigurationCategoryLink> = new DateField('lastModifiedDateTime', PayrollConfigurationCategoryLink, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PayrollConfigurationCategoryLink> = new StringField('mdfSystemRecordStatus', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[selfService]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_SERVICE: BooleanField<PayrollConfigurationCategoryLink> = new BooleanField('selfService', PayrollConfigurationCategoryLink, 'Edm.Boolean');
  /**
   * Static representation of the [[service]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE: StringField<PayrollConfigurationCategoryLink> = new StringField('service', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[typeOfUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_OF_URL: StringField<PayrollConfigurationCategoryLink> = new StringField('typeOfUrl', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the [[url]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const URL: StringField<PayrollConfigurationCategoryLink> = new StringField('url', PayrollConfigurationCategoryLink, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PayrollConfigurationCategoryLink, User> = new OneToOneLink('createdByNav', PayrollConfigurationCategoryLink, User);
  /**
   * Static representation of the one-to-many navigation property [[externalLinkNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_LINK_NAME_TRANSLATION_TEXT_NAV: Link<PayrollConfigurationCategoryLink, MdfLocalizedValue> = new Link('externalLinkNameTranslationTextNav', PayrollConfigurationCategoryLink, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PayrollConfigurationCategoryLink, User> = new OneToOneLink('lastModifiedByNav', PayrollConfigurationCategoryLink, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PayrollConfigurationCategoryLink, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PayrollConfigurationCategoryLink, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[serviceNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_NAV: Link<PayrollConfigurationCategoryLink, PickListValueV2> = new Link('serviceNav', PayrollConfigurationCategoryLink, PickListValueV2);
  /**
   * Static representation of the one-to-many navigation property [[typeOfUrlNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_OF_URL_NAV: Link<PayrollConfigurationCategoryLink, PickListValueV2> = new Link('typeOfUrlNav', PayrollConfigurationCategoryLink, PickListValueV2);
  /**
   * All fields of the PayrollConfigurationCategoryLink entity.
   */
  export const _allFields: Array<StringField<PayrollConfigurationCategoryLink> | BooleanField<PayrollConfigurationCategoryLink> | DateField<PayrollConfigurationCategoryLink> | BigNumberField<PayrollConfigurationCategoryLink> | OneToOneLink<PayrollConfigurationCategoryLink, User> | Link<PayrollConfigurationCategoryLink, MdfLocalizedValue> | OneToOneLink<PayrollConfigurationCategoryLink, MdfEnumValue> | Link<PayrollConfigurationCategoryLink, PickListValueV2>> = [
    PayrollConfigurationCategoryLink.PAYROLL_CONFIGURATION_CATEGORY_EXTERNAL_CODE,
    PayrollConfigurationCategoryLink.PAYROLL_SYSTEM_CONFIGURATION_EXTERNAL_CODE,
    PayrollConfigurationCategoryLink.ADMIN_SERVICE,
    PayrollConfigurationCategoryLink.CREATED_BY,
    PayrollConfigurationCategoryLink.CREATED_DATE_TIME,
    PayrollConfigurationCategoryLink.EXTERNAL_CODE,
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_DE_DE,
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_DEFAULT_VALUE,
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_EN_DEBUG,
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_EN_GB,
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_EN_US,
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_ES_ES,
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_ES_MX,
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_FR_CA,
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_FR_FR,
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_IT_IT,
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_LOCALIZED,
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_NL_NL,
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_PT_BR,
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_ZH_CN,
    PayrollConfigurationCategoryLink.INFOTYPE_NUMBER,
    PayrollConfigurationCategoryLink.IS_REQUIRED_FOR_PAYROLL,
    PayrollConfigurationCategoryLink.LAST_MODIFIED_BY,
    PayrollConfigurationCategoryLink.LAST_MODIFIED_DATE_TIME,
    PayrollConfigurationCategoryLink.MDF_SYSTEM_RECORD_STATUS,
    PayrollConfigurationCategoryLink.SELF_SERVICE,
    PayrollConfigurationCategoryLink.SERVICE,
    PayrollConfigurationCategoryLink.TYPE_OF_URL,
    PayrollConfigurationCategoryLink.URL,
    PayrollConfigurationCategoryLink.CREATED_BY_NAV,
    PayrollConfigurationCategoryLink.EXTERNAL_LINK_NAME_TRANSLATION_TEXT_NAV,
    PayrollConfigurationCategoryLink.LAST_MODIFIED_BY_NAV,
    PayrollConfigurationCategoryLink.MDF_SYSTEM_RECORD_STATUS_NAV,
    PayrollConfigurationCategoryLink.SERVICE_NAV,
    PayrollConfigurationCategoryLink.TYPE_OF_URL_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PayrollConfigurationCategoryLink> = new AllFields('*', PayrollConfigurationCategoryLink);
  /**
   * All key fields of the PayrollConfigurationCategoryLink entity.
   */
  export const _keyFields: Array<Selectable<PayrollConfigurationCategoryLink>> = [PayrollConfigurationCategoryLink.PAYROLL_CONFIGURATION_CATEGORY_EXTERNAL_CODE, PayrollConfigurationCategoryLink.PAYROLL_SYSTEM_CONFIGURATION_EXTERNAL_CODE, PayrollConfigurationCategoryLink.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PayrollConfigurationCategoryLink.
   */
  export const _keys: { [keys: string]: Selectable<PayrollConfigurationCategoryLink> } = PayrollConfigurationCategoryLink._keyFields.reduce((acc: { [keys: string]: Selectable<PayrollConfigurationCategoryLink> }, field: Selectable<PayrollConfigurationCategoryLink>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
