/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoPayGroupRequestBuilder } from './FoPayGroupRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOPayGroup" of service "SFOData".
 */
export class FoPayGroup extends Entity implements FoPayGroupType {
  /**
   * Technical entity name for FoPayGroup.
   */
  static _entityName = 'FOPayGroup';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoPayGroup.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * createdBy.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * createdDate.
   * @nullable
   */
  createdOn?: Moment;
  /**
   * Legal Entity.
   * @nullable
   */
  custToLegalEntityProp?: string;
  /**
   * Data Delimiter.
   * Maximum length: 32.
   * @nullable
   */
  dataDelimiter?: string;
  /**
   * Decimal Point.
   * Maximum length: 32.
   * @nullable
   */
  decimalPoint?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  description?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionDeDe?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionDefaultValue?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEnDebug?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEnGb?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEnUs?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEsEs?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEsMx?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionFrCa?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionFrFr?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionItIt?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionLocalized?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionNlNl?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionPtBr?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionZhCn?: string;
  /**
   * earliestChangeDate.
   * @nullable
   */
  earliestChangeDate?: Moment;
  /**
   * effectiveEndDate.
   * @nullable
   */
  endDate?: Moment;
  /**
   * externalCode.
   * Maximum length: 32.
   */
  externalCode!: string;
  /**
   * Lag.
   * @nullable
   */
  lag?: BigNumber;
  /**
   * lastModifiedBy.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedOn?: Moment;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  name?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameDeDe?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameDefaultValue?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameEnDebug?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameEnGb?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameEnUs?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameEsEs?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameEsMx?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameFrCa?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameFrFr?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameItIt?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameLocalized?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameNlNl?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  namePtBr?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameZhCn?: string;
  /**
   * paymentFrequency.
   * Maximum length: 128.
   * @nullable
   */
  payFrequency?: string;
  /**
   * paymentFrequency.
   * Maximum length: 128.
   * @nullable
   */
  paymentFrequency?: string;
  /**
   * Payroll Vendor ID.
   * Maximum length: 32.
   * @nullable
   */
  payrollVendorId?: string;
  /**
   * Primary Contact Email.
   * Maximum length: 255.
   * @nullable
   */
  primaryContactEmail?: string;
  /**
   * Primary Contact ID.
   * Maximum length: 255.
   * @nullable
   */
  primaryContactId?: string;
  /**
   * Primary Contact Name.
   * Maximum length: 255.
   * @nullable
   */
  primaryContactName?: string;
  /**
   * Secondary Contact Email.
   * Maximum length: 255.
   * @nullable
   */
  secondaryContactEmail?: string;
  /**
   * Secondary Contact ID.
   * Maximum length: 255.
   * @nullable
   */
  secondaryContactId?: string;
  /**
   * Secondary Contact Name.
   * Maximum length: 255.
   * @nullable
   */
  secondaryContactName?: string;
  /**
   * Effective as of.
   */
  startDate!: Moment;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * Weeks In PayPeriod.
   * @nullable
   */
  weeksInPayPeriod?: BigNumber;
  /**
   * One-to-many navigation property to the [[FoCompany]] entity.
   */
  custToLegalEntity!: FoCompany[];
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  descriptionTranslationNav!: FoTranslation;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  descriptionTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  nameTranslationNav!: FoTranslation;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  nameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  payFrequencyNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  paymentFrequencyNav!: PickListValueV2;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `FoPayGroup`.
   * @returns A builder that constructs instances of entity type `FoPayGroup`.
   */
  static builder(): EntityBuilderType<FoPayGroup, FoPayGroupTypeForceMandatory> {
    return Entity.entityBuilder(FoPayGroup);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoPayGroup` entity type.
   * @returns A `FoPayGroup` request builder.
   */
  static requestBuilder(): FoPayGroupRequestBuilder {
    return new FoPayGroupRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoPayGroup`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoPayGroup`.
   */
  static customField(fieldName: string): CustomField<FoPayGroup> {
    return Entity.customFieldSelector(fieldName, FoPayGroup);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoCompany, FoCompanyType } from './FoCompany';
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface FoPayGroupType {
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  custToLegalEntityProp?: string;
  dataDelimiter?: string;
  decimalPoint?: string;
  description?: string;
  descriptionDeDe?: string;
  descriptionDefaultValue?: string;
  descriptionEnDebug?: string;
  descriptionEnGb?: string;
  descriptionEnUs?: string;
  descriptionEsEs?: string;
  descriptionEsMx?: string;
  descriptionFrCa?: string;
  descriptionFrFr?: string;
  descriptionItIt?: string;
  descriptionLocalized?: string;
  descriptionNlNl?: string;
  descriptionPtBr?: string;
  descriptionZhCn?: string;
  earliestChangeDate?: Moment;
  endDate?: Moment;
  externalCode: string;
  lag?: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  name?: string;
  nameDeDe?: string;
  nameDefaultValue?: string;
  nameEnDebug?: string;
  nameEnGb?: string;
  nameEnUs?: string;
  nameEsEs?: string;
  nameEsMx?: string;
  nameFrCa?: string;
  nameFrFr?: string;
  nameItIt?: string;
  nameLocalized?: string;
  nameNlNl?: string;
  namePtBr?: string;
  nameZhCn?: string;
  payFrequency?: string;
  paymentFrequency?: string;
  payrollVendorId?: string;
  primaryContactEmail?: string;
  primaryContactId?: string;
  primaryContactName?: string;
  secondaryContactEmail?: string;
  secondaryContactId?: string;
  secondaryContactName?: string;
  startDate: Moment;
  status?: string;
  weeksInPayPeriod?: BigNumber;
  custToLegalEntity: FoCompanyType[];
  descriptionTranslationNav: FoTranslationType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  nameTranslationNav: FoTranslationType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  payFrequencyNav: PicklistOptionType;
  paymentFrequencyNav: PickListValueV2Type;
  statusNav: MdfEnumValueType;
}

export interface FoPayGroupTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  custToLegalEntityProp: string;
  dataDelimiter: string;
  decimalPoint: string;
  description: string;
  descriptionDeDe: string;
  descriptionDefaultValue: string;
  descriptionEnDebug: string;
  descriptionEnGb: string;
  descriptionEnUs: string;
  descriptionEsEs: string;
  descriptionEsMx: string;
  descriptionFrCa: string;
  descriptionFrFr: string;
  descriptionItIt: string;
  descriptionLocalized: string;
  descriptionNlNl: string;
  descriptionPtBr: string;
  descriptionZhCn: string;
  earliestChangeDate: Moment;
  endDate: Moment;
  externalCode: string;
  lag: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  name: string;
  nameDeDe: string;
  nameDefaultValue: string;
  nameEnDebug: string;
  nameEnGb: string;
  nameEnUs: string;
  nameEsEs: string;
  nameEsMx: string;
  nameFrCa: string;
  nameFrFr: string;
  nameItIt: string;
  nameLocalized: string;
  nameNlNl: string;
  namePtBr: string;
  nameZhCn: string;
  payFrequency: string;
  paymentFrequency: string;
  payrollVendorId: string;
  primaryContactEmail: string;
  primaryContactId: string;
  primaryContactName: string;
  secondaryContactEmail: string;
  secondaryContactId: string;
  secondaryContactName: string;
  startDate: Moment;
  status: string;
  weeksInPayPeriod: BigNumber;
  custToLegalEntity: FoCompanyType[];
  descriptionTranslationNav: FoTranslationType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  nameTranslationNav: FoTranslationType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  payFrequencyNav: PicklistOptionType;
  paymentFrequencyNav: PickListValueV2Type;
  statusNav: MdfEnumValueType;
}

export namespace FoPayGroup {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoPayGroup> = new StringField('createdBy', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoPayGroup> = new DateField('createdDateTime', FoPayGroup, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoPayGroup> = new DateField('createdOn', FoPayGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[custToLegalEntityProp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TO_LEGAL_ENTITY_PROP: StringField<FoPayGroup> = new StringField('cust_toLegalEntityProp', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[dataDelimiter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_DELIMITER: StringField<FoPayGroup> = new StringField('dataDelimiter', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[decimalPoint]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DECIMAL_POINT: StringField<FoPayGroup> = new StringField('decimalPoint', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FoPayGroup> = new StringField('description', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<FoPayGroup> = new StringField('description_de_DE', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<FoPayGroup> = new StringField('description_defaultValue', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<FoPayGroup> = new StringField('description_en_DEBUG', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<FoPayGroup> = new StringField('description_en_GB', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<FoPayGroup> = new StringField('description_en_US', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<FoPayGroup> = new StringField('description_es_ES', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<FoPayGroup> = new StringField('description_es_MX', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<FoPayGroup> = new StringField('description_fr_CA', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<FoPayGroup> = new StringField('description_fr_FR', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<FoPayGroup> = new StringField('description_it_IT', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<FoPayGroup> = new StringField('description_localized', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<FoPayGroup> = new StringField('description_nl_NL', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<FoPayGroup> = new StringField('description_pt_BR', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<FoPayGroup> = new StringField('description_zh_CN', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[earliestChangeDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EARLIEST_CHANGE_DATE: DateField<FoPayGroup> = new DateField('earliestChangeDate', FoPayGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoPayGroup> = new DateField('endDate', FoPayGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoPayGroup> = new StringField('externalCode', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[lag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAG: BigNumberField<FoPayGroup> = new BigNumberField('lag', FoPayGroup, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoPayGroup> = new StringField('lastModifiedBy', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoPayGroup> = new DateField('lastModifiedDateTime', FoPayGroup, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoPayGroup> = new DateField('lastModifiedOn', FoPayGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FoPayGroup> = new StringField('name', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[nameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DE_DE: StringField<FoPayGroup> = new StringField('name_de_DE', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[nameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DEFAULT_VALUE: StringField<FoPayGroup> = new StringField('name_defaultValue', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[nameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_DEBUG: StringField<FoPayGroup> = new StringField('name_en_DEBUG', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[nameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_GB: StringField<FoPayGroup> = new StringField('name_en_GB', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[nameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_US: StringField<FoPayGroup> = new StringField('name_en_US', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[nameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_ES: StringField<FoPayGroup> = new StringField('name_es_ES', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[nameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_MX: StringField<FoPayGroup> = new StringField('name_es_MX', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[nameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_CA: StringField<FoPayGroup> = new StringField('name_fr_CA', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[nameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_FR: StringField<FoPayGroup> = new StringField('name_fr_FR', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[nameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_IT_IT: StringField<FoPayGroup> = new StringField('name_it_IT', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[nameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_LOCALIZED: StringField<FoPayGroup> = new StringField('name_localized', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[nameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_NL_NL: StringField<FoPayGroup> = new StringField('name_nl_NL', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[namePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_BR: StringField<FoPayGroup> = new StringField('name_pt_BR', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[nameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_CN: StringField<FoPayGroup> = new StringField('name_zh_CN', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[payFrequency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_FREQUENCY: StringField<FoPayGroup> = new StringField('payFrequency', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[paymentFrequency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_FREQUENCY: StringField<FoPayGroup> = new StringField('paymentFrequency', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[payrollVendorId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_VENDOR_ID: StringField<FoPayGroup> = new StringField('payrollVendorId', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[primaryContactEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIMARY_CONTACT_EMAIL: StringField<FoPayGroup> = new StringField('primaryContactEmail', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[primaryContactId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIMARY_CONTACT_ID: StringField<FoPayGroup> = new StringField('primaryContactID', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[primaryContactName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIMARY_CONTACT_NAME: StringField<FoPayGroup> = new StringField('primaryContactName', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[secondaryContactEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECONDARY_CONTACT_EMAIL: StringField<FoPayGroup> = new StringField('secondaryContactEmail', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[secondaryContactId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECONDARY_CONTACT_ID: StringField<FoPayGroup> = new StringField('secondaryContactID', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[secondaryContactName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECONDARY_CONTACT_NAME: StringField<FoPayGroup> = new StringField('secondaryContactName', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoPayGroup> = new DateField('startDate', FoPayGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoPayGroup> = new StringField('status', FoPayGroup, 'Edm.String');
  /**
   * Static representation of the [[weeksInPayPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEEKS_IN_PAY_PERIOD: BigNumberField<FoPayGroup> = new BigNumberField('weeksInPayPeriod', FoPayGroup, 'Edm.Int64');
  /**
   * Static representation of the one-to-many navigation property [[custToLegalEntity]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TO_LEGAL_ENTITY: Link<FoPayGroup, FoCompany> = new Link('cust_toLegalEntity', FoPayGroup, FoCompany);
  /**
   * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoPayGroup, FoTranslation> = new OneToOneLink('descriptionTranslationNav', FoPayGroup, FoTranslation);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<FoPayGroup, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', FoPayGroup, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_NAV: OneToOneLink<FoPayGroup, FoTranslation> = new OneToOneLink('nameTranslationNav', FoPayGroup, FoTranslation);
  /**
   * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_TEXT_NAV: Link<FoPayGroup, MdfLocalizedValue> = new Link('nameTranslationTextNav', FoPayGroup, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[payFrequencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_FREQUENCY_NAV: OneToOneLink<FoPayGroup, PicklistOption> = new OneToOneLink('payFrequencyNav', FoPayGroup, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[paymentFrequencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_FREQUENCY_NAV: OneToOneLink<FoPayGroup, PickListValueV2> = new OneToOneLink('paymentFrequencyNav', FoPayGroup, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<FoPayGroup, MdfEnumValue> = new OneToOneLink('statusNav', FoPayGroup, MdfEnumValue);
  /**
   * All fields of the FoPayGroup entity.
   */
  export const _allFields: Array<StringField<FoPayGroup> | DateField<FoPayGroup> | BigNumberField<FoPayGroup> | Link<FoPayGroup, FoCompany> | OneToOneLink<FoPayGroup, FoTranslation> | Link<FoPayGroup, MdfLocalizedValue> | OneToOneLink<FoPayGroup, PicklistOption> | OneToOneLink<FoPayGroup, PickListValueV2> | OneToOneLink<FoPayGroup, MdfEnumValue>> = [
    FoPayGroup.CREATED_BY,
    FoPayGroup.CREATED_DATE_TIME,
    FoPayGroup.CREATED_ON,
    FoPayGroup.CUST_TO_LEGAL_ENTITY_PROP,
    FoPayGroup.DATA_DELIMITER,
    FoPayGroup.DECIMAL_POINT,
    FoPayGroup.DESCRIPTION,
    FoPayGroup.DESCRIPTION_DE_DE,
    FoPayGroup.DESCRIPTION_DEFAULT_VALUE,
    FoPayGroup.DESCRIPTION_EN_DEBUG,
    FoPayGroup.DESCRIPTION_EN_GB,
    FoPayGroup.DESCRIPTION_EN_US,
    FoPayGroup.DESCRIPTION_ES_ES,
    FoPayGroup.DESCRIPTION_ES_MX,
    FoPayGroup.DESCRIPTION_FR_CA,
    FoPayGroup.DESCRIPTION_FR_FR,
    FoPayGroup.DESCRIPTION_IT_IT,
    FoPayGroup.DESCRIPTION_LOCALIZED,
    FoPayGroup.DESCRIPTION_NL_NL,
    FoPayGroup.DESCRIPTION_PT_BR,
    FoPayGroup.DESCRIPTION_ZH_CN,
    FoPayGroup.EARLIEST_CHANGE_DATE,
    FoPayGroup.END_DATE,
    FoPayGroup.EXTERNAL_CODE,
    FoPayGroup.LAG,
    FoPayGroup.LAST_MODIFIED_BY,
    FoPayGroup.LAST_MODIFIED_DATE_TIME,
    FoPayGroup.LAST_MODIFIED_ON,
    FoPayGroup.NAME,
    FoPayGroup.NAME_DE_DE,
    FoPayGroup.NAME_DEFAULT_VALUE,
    FoPayGroup.NAME_EN_DEBUG,
    FoPayGroup.NAME_EN_GB,
    FoPayGroup.NAME_EN_US,
    FoPayGroup.NAME_ES_ES,
    FoPayGroup.NAME_ES_MX,
    FoPayGroup.NAME_FR_CA,
    FoPayGroup.NAME_FR_FR,
    FoPayGroup.NAME_IT_IT,
    FoPayGroup.NAME_LOCALIZED,
    FoPayGroup.NAME_NL_NL,
    FoPayGroup.NAME_PT_BR,
    FoPayGroup.NAME_ZH_CN,
    FoPayGroup.PAY_FREQUENCY,
    FoPayGroup.PAYMENT_FREQUENCY,
    FoPayGroup.PAYROLL_VENDOR_ID,
    FoPayGroup.PRIMARY_CONTACT_EMAIL,
    FoPayGroup.PRIMARY_CONTACT_ID,
    FoPayGroup.PRIMARY_CONTACT_NAME,
    FoPayGroup.SECONDARY_CONTACT_EMAIL,
    FoPayGroup.SECONDARY_CONTACT_ID,
    FoPayGroup.SECONDARY_CONTACT_NAME,
    FoPayGroup.START_DATE,
    FoPayGroup.STATUS,
    FoPayGroup.WEEKS_IN_PAY_PERIOD,
    FoPayGroup.CUST_TO_LEGAL_ENTITY,
    FoPayGroup.DESCRIPTION_TRANSLATION_NAV,
    FoPayGroup.DESCRIPTION_TRANSLATION_TEXT_NAV,
    FoPayGroup.NAME_TRANSLATION_NAV,
    FoPayGroup.NAME_TRANSLATION_TEXT_NAV,
    FoPayGroup.PAY_FREQUENCY_NAV,
    FoPayGroup.PAYMENT_FREQUENCY_NAV,
    FoPayGroup.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoPayGroup> = new AllFields('*', FoPayGroup);
  /**
   * All key fields of the FoPayGroup entity.
   */
  export const _keyFields: Array<Selectable<FoPayGroup>> = [FoPayGroup.EXTERNAL_CODE, FoPayGroup.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoPayGroup.
   */
  export const _keys: { [keys: string]: Selectable<FoPayGroup> } = FoPayGroup._keyFields.reduce((acc: { [keys: string]: Selectable<FoPayGroup> }, field: Selectable<FoPayGroup>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
