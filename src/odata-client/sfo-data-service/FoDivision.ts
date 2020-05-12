/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoDivisionRequestBuilder } from './FoDivisionRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FODivision" of service "SFOData".
 */
export class FoDivision extends Entity implements FoDivisionType {
  /**
   * Technical entity name for FoDivision.
   */
  static _entityName = 'FODivision';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoDivision.
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
   * Business Unit.
   * @nullable
   */
  custToBusinessUnitProp?: string;
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
   * effectiveEndDate.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Code.
   * Maximum length: 32.
   */
  externalCode!: string;
  /**
   * Head of Division.
   * Maximum length: 100.
   * @nullable
   */
  headOfUnit?: string;
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
   * One-to-many navigation property to the [[FoBusinessUnit]] entity.
   */
  custToBusinessUnit!: FoBusinessUnit[];
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  descriptionTranslationNav!: FoTranslation;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  descriptionTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  headOfUnitNav!: User;
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  nameTranslationNav!: FoTranslation;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  nameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `FoDivision`.
   * @returns A builder that constructs instances of entity type `FoDivision`.
   */
  static builder(): EntityBuilderType<FoDivision, FoDivisionTypeForceMandatory> {
    return Entity.entityBuilder(FoDivision);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoDivision` entity type.
   * @returns A `FoDivision` request builder.
   */
  static requestBuilder(): FoDivisionRequestBuilder {
    return new FoDivisionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoDivision`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoDivision`.
   */
  static customField(fieldName: string): CustomField<FoDivision> {
    return Entity.customFieldSelector(fieldName, FoDivision);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoBusinessUnit, FoBusinessUnitType } from './FoBusinessUnit';
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface FoDivisionType {
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  custToBusinessUnitProp?: string;
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
  endDate?: Moment;
  externalCode: string;
  headOfUnit?: string;
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
  startDate: Moment;
  status?: string;
  custToBusinessUnit: FoBusinessUnitType[];
  descriptionTranslationNav: FoTranslationType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  headOfUnitNav: UserType;
  nameTranslationNav: FoTranslationType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
}

export interface FoDivisionTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  custToBusinessUnitProp: string;
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
  endDate: Moment;
  externalCode: string;
  headOfUnit: string;
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
  startDate: Moment;
  status: string;
  custToBusinessUnit: FoBusinessUnitType[];
  descriptionTranslationNav: FoTranslationType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  headOfUnitNav: UserType;
  nameTranslationNav: FoTranslationType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
}

export namespace FoDivision {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoDivision> = new StringField('createdBy', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoDivision> = new DateField('createdDateTime', FoDivision, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoDivision> = new DateField('createdOn', FoDivision, 'Edm.DateTime');
  /**
   * Static representation of the [[custToBusinessUnitProp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TO_BUSINESS_UNIT_PROP: StringField<FoDivision> = new StringField('cust_toBusinessUnitProp', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FoDivision> = new StringField('description', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<FoDivision> = new StringField('description_de_DE', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<FoDivision> = new StringField('description_defaultValue', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<FoDivision> = new StringField('description_en_DEBUG', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<FoDivision> = new StringField('description_en_GB', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<FoDivision> = new StringField('description_en_US', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<FoDivision> = new StringField('description_es_ES', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<FoDivision> = new StringField('description_es_MX', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<FoDivision> = new StringField('description_fr_CA', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<FoDivision> = new StringField('description_fr_FR', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<FoDivision> = new StringField('description_it_IT', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<FoDivision> = new StringField('description_localized', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<FoDivision> = new StringField('description_nl_NL', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<FoDivision> = new StringField('description_pt_BR', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<FoDivision> = new StringField('description_zh_CN', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoDivision> = new DateField('endDate', FoDivision, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoDivision> = new StringField('externalCode', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[headOfUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEAD_OF_UNIT: StringField<FoDivision> = new StringField('headOfUnit', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoDivision> = new StringField('lastModifiedBy', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoDivision> = new DateField('lastModifiedDateTime', FoDivision, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoDivision> = new DateField('lastModifiedOn', FoDivision, 'Edm.DateTime');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FoDivision> = new StringField('name', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[nameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DE_DE: StringField<FoDivision> = new StringField('name_de_DE', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[nameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DEFAULT_VALUE: StringField<FoDivision> = new StringField('name_defaultValue', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[nameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_DEBUG: StringField<FoDivision> = new StringField('name_en_DEBUG', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[nameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_GB: StringField<FoDivision> = new StringField('name_en_GB', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[nameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_US: StringField<FoDivision> = new StringField('name_en_US', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[nameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_ES: StringField<FoDivision> = new StringField('name_es_ES', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[nameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_MX: StringField<FoDivision> = new StringField('name_es_MX', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[nameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_CA: StringField<FoDivision> = new StringField('name_fr_CA', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[nameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_FR: StringField<FoDivision> = new StringField('name_fr_FR', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[nameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_IT_IT: StringField<FoDivision> = new StringField('name_it_IT', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[nameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_LOCALIZED: StringField<FoDivision> = new StringField('name_localized', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[nameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_NL_NL: StringField<FoDivision> = new StringField('name_nl_NL', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[namePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_BR: StringField<FoDivision> = new StringField('name_pt_BR', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[nameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_CN: StringField<FoDivision> = new StringField('name_zh_CN', FoDivision, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoDivision> = new DateField('startDate', FoDivision, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoDivision> = new StringField('status', FoDivision, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[custToBusinessUnit]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TO_BUSINESS_UNIT: Link<FoDivision, FoBusinessUnit> = new Link('cust_toBusinessUnit', FoDivision, FoBusinessUnit);
  /**
   * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoDivision, FoTranslation> = new OneToOneLink('descriptionTranslationNav', FoDivision, FoTranslation);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<FoDivision, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', FoDivision, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[headOfUnitNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEAD_OF_UNIT_NAV: OneToOneLink<FoDivision, User> = new OneToOneLink('headOfUnitNav', FoDivision, User);
  /**
   * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_NAV: OneToOneLink<FoDivision, FoTranslation> = new OneToOneLink('nameTranslationNav', FoDivision, FoTranslation);
  /**
   * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_TEXT_NAV: Link<FoDivision, MdfLocalizedValue> = new Link('nameTranslationTextNav', FoDivision, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<FoDivision, MdfEnumValue> = new OneToOneLink('statusNav', FoDivision, MdfEnumValue);
  /**
   * All fields of the FoDivision entity.
   */
  export const _allFields: Array<StringField<FoDivision> | DateField<FoDivision> | Link<FoDivision, FoBusinessUnit> | OneToOneLink<FoDivision, FoTranslation> | Link<FoDivision, MdfLocalizedValue> | OneToOneLink<FoDivision, User> | OneToOneLink<FoDivision, MdfEnumValue>> = [
    FoDivision.CREATED_BY,
    FoDivision.CREATED_DATE_TIME,
    FoDivision.CREATED_ON,
    FoDivision.CUST_TO_BUSINESS_UNIT_PROP,
    FoDivision.DESCRIPTION,
    FoDivision.DESCRIPTION_DE_DE,
    FoDivision.DESCRIPTION_DEFAULT_VALUE,
    FoDivision.DESCRIPTION_EN_DEBUG,
    FoDivision.DESCRIPTION_EN_GB,
    FoDivision.DESCRIPTION_EN_US,
    FoDivision.DESCRIPTION_ES_ES,
    FoDivision.DESCRIPTION_ES_MX,
    FoDivision.DESCRIPTION_FR_CA,
    FoDivision.DESCRIPTION_FR_FR,
    FoDivision.DESCRIPTION_IT_IT,
    FoDivision.DESCRIPTION_LOCALIZED,
    FoDivision.DESCRIPTION_NL_NL,
    FoDivision.DESCRIPTION_PT_BR,
    FoDivision.DESCRIPTION_ZH_CN,
    FoDivision.END_DATE,
    FoDivision.EXTERNAL_CODE,
    FoDivision.HEAD_OF_UNIT,
    FoDivision.LAST_MODIFIED_BY,
    FoDivision.LAST_MODIFIED_DATE_TIME,
    FoDivision.LAST_MODIFIED_ON,
    FoDivision.NAME,
    FoDivision.NAME_DE_DE,
    FoDivision.NAME_DEFAULT_VALUE,
    FoDivision.NAME_EN_DEBUG,
    FoDivision.NAME_EN_GB,
    FoDivision.NAME_EN_US,
    FoDivision.NAME_ES_ES,
    FoDivision.NAME_ES_MX,
    FoDivision.NAME_FR_CA,
    FoDivision.NAME_FR_FR,
    FoDivision.NAME_IT_IT,
    FoDivision.NAME_LOCALIZED,
    FoDivision.NAME_NL_NL,
    FoDivision.NAME_PT_BR,
    FoDivision.NAME_ZH_CN,
    FoDivision.START_DATE,
    FoDivision.STATUS,
    FoDivision.CUST_TO_BUSINESS_UNIT,
    FoDivision.DESCRIPTION_TRANSLATION_NAV,
    FoDivision.DESCRIPTION_TRANSLATION_TEXT_NAV,
    FoDivision.HEAD_OF_UNIT_NAV,
    FoDivision.NAME_TRANSLATION_NAV,
    FoDivision.NAME_TRANSLATION_TEXT_NAV,
    FoDivision.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoDivision> = new AllFields('*', FoDivision);
  /**
   * All key fields of the FoDivision entity.
   */
  export const _keyFields: Array<Selectable<FoDivision>> = [FoDivision.EXTERNAL_CODE, FoDivision.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoDivision.
   */
  export const _keys: { [keys: string]: Selectable<FoDivision> } = FoDivision._keyFields.reduce((acc: { [keys: string]: Selectable<FoDivision> }, field: Selectable<FoDivision>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
