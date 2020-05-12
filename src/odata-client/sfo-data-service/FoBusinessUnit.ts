/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoBusinessUnitRequestBuilder } from './FoBusinessUnitRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOBusinessUnit" of service "SFOData".
 */
export class FoBusinessUnit extends Entity implements FoBusinessUnitType {
  /**
   * Technical entity name for FoBusinessUnit.
   */
  static _entityName = 'FOBusinessUnit';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoBusinessUnit.
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
   * Head of Unit.
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
   * Returns an entity builder to construct instances `FoBusinessUnit`.
   * @returns A builder that constructs instances of entity type `FoBusinessUnit`.
   */
  static builder(): EntityBuilderType<FoBusinessUnit, FoBusinessUnitTypeForceMandatory> {
    return Entity.entityBuilder(FoBusinessUnit);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoBusinessUnit` entity type.
   * @returns A `FoBusinessUnit` request builder.
   */
  static requestBuilder(): FoBusinessUnitRequestBuilder {
    return new FoBusinessUnitRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoBusinessUnit`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoBusinessUnit`.
   */
  static customField(fieldName: string): CustomField<FoBusinessUnit> {
    return Entity.customFieldSelector(fieldName, FoBusinessUnit);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoTranslation, FoTranslationType } from './FoTranslation';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface FoBusinessUnitType {
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
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
  descriptionTranslationNav: FoTranslationType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  headOfUnitNav: UserType;
  nameTranslationNav: FoTranslationType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
}

export interface FoBusinessUnitTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
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
  descriptionTranslationNav: FoTranslationType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  headOfUnitNav: UserType;
  nameTranslationNav: FoTranslationType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
}

export namespace FoBusinessUnit {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoBusinessUnit> = new StringField('createdBy', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoBusinessUnit> = new DateField('createdDateTime', FoBusinessUnit, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoBusinessUnit> = new DateField('createdOn', FoBusinessUnit, 'Edm.DateTime');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FoBusinessUnit> = new StringField('description', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<FoBusinessUnit> = new StringField('description_de_DE', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<FoBusinessUnit> = new StringField('description_defaultValue', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<FoBusinessUnit> = new StringField('description_en_DEBUG', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<FoBusinessUnit> = new StringField('description_en_GB', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<FoBusinessUnit> = new StringField('description_en_US', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<FoBusinessUnit> = new StringField('description_es_ES', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<FoBusinessUnit> = new StringField('description_es_MX', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<FoBusinessUnit> = new StringField('description_fr_CA', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<FoBusinessUnit> = new StringField('description_fr_FR', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<FoBusinessUnit> = new StringField('description_it_IT', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<FoBusinessUnit> = new StringField('description_localized', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<FoBusinessUnit> = new StringField('description_nl_NL', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<FoBusinessUnit> = new StringField('description_pt_BR', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<FoBusinessUnit> = new StringField('description_zh_CN', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoBusinessUnit> = new DateField('endDate', FoBusinessUnit, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoBusinessUnit> = new StringField('externalCode', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[headOfUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEAD_OF_UNIT: StringField<FoBusinessUnit> = new StringField('headOfUnit', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoBusinessUnit> = new StringField('lastModifiedBy', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoBusinessUnit> = new DateField('lastModifiedDateTime', FoBusinessUnit, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoBusinessUnit> = new DateField('lastModifiedOn', FoBusinessUnit, 'Edm.DateTime');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FoBusinessUnit> = new StringField('name', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[nameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DE_DE: StringField<FoBusinessUnit> = new StringField('name_de_DE', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[nameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DEFAULT_VALUE: StringField<FoBusinessUnit> = new StringField('name_defaultValue', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[nameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_DEBUG: StringField<FoBusinessUnit> = new StringField('name_en_DEBUG', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[nameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_GB: StringField<FoBusinessUnit> = new StringField('name_en_GB', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[nameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_US: StringField<FoBusinessUnit> = new StringField('name_en_US', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[nameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_ES: StringField<FoBusinessUnit> = new StringField('name_es_ES', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[nameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_MX: StringField<FoBusinessUnit> = new StringField('name_es_MX', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[nameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_CA: StringField<FoBusinessUnit> = new StringField('name_fr_CA', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[nameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_FR: StringField<FoBusinessUnit> = new StringField('name_fr_FR', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[nameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_IT_IT: StringField<FoBusinessUnit> = new StringField('name_it_IT', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[nameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_LOCALIZED: StringField<FoBusinessUnit> = new StringField('name_localized', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[nameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_NL_NL: StringField<FoBusinessUnit> = new StringField('name_nl_NL', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[namePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_BR: StringField<FoBusinessUnit> = new StringField('name_pt_BR', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[nameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_CN: StringField<FoBusinessUnit> = new StringField('name_zh_CN', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoBusinessUnit> = new DateField('startDate', FoBusinessUnit, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoBusinessUnit> = new StringField('status', FoBusinessUnit, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoBusinessUnit, FoTranslation> = new OneToOneLink('descriptionTranslationNav', FoBusinessUnit, FoTranslation);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<FoBusinessUnit, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', FoBusinessUnit, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[headOfUnitNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEAD_OF_UNIT_NAV: OneToOneLink<FoBusinessUnit, User> = new OneToOneLink('headOfUnitNav', FoBusinessUnit, User);
  /**
   * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_NAV: OneToOneLink<FoBusinessUnit, FoTranslation> = new OneToOneLink('nameTranslationNav', FoBusinessUnit, FoTranslation);
  /**
   * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_TEXT_NAV: Link<FoBusinessUnit, MdfLocalizedValue> = new Link('nameTranslationTextNav', FoBusinessUnit, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<FoBusinessUnit, MdfEnumValue> = new OneToOneLink('statusNav', FoBusinessUnit, MdfEnumValue);
  /**
   * All fields of the FoBusinessUnit entity.
   */
  export const _allFields: Array<StringField<FoBusinessUnit> | DateField<FoBusinessUnit> | OneToOneLink<FoBusinessUnit, FoTranslation> | Link<FoBusinessUnit, MdfLocalizedValue> | OneToOneLink<FoBusinessUnit, User> | OneToOneLink<FoBusinessUnit, MdfEnumValue>> = [
    FoBusinessUnit.CREATED_BY,
    FoBusinessUnit.CREATED_DATE_TIME,
    FoBusinessUnit.CREATED_ON,
    FoBusinessUnit.DESCRIPTION,
    FoBusinessUnit.DESCRIPTION_DE_DE,
    FoBusinessUnit.DESCRIPTION_DEFAULT_VALUE,
    FoBusinessUnit.DESCRIPTION_EN_DEBUG,
    FoBusinessUnit.DESCRIPTION_EN_GB,
    FoBusinessUnit.DESCRIPTION_EN_US,
    FoBusinessUnit.DESCRIPTION_ES_ES,
    FoBusinessUnit.DESCRIPTION_ES_MX,
    FoBusinessUnit.DESCRIPTION_FR_CA,
    FoBusinessUnit.DESCRIPTION_FR_FR,
    FoBusinessUnit.DESCRIPTION_IT_IT,
    FoBusinessUnit.DESCRIPTION_LOCALIZED,
    FoBusinessUnit.DESCRIPTION_NL_NL,
    FoBusinessUnit.DESCRIPTION_PT_BR,
    FoBusinessUnit.DESCRIPTION_ZH_CN,
    FoBusinessUnit.END_DATE,
    FoBusinessUnit.EXTERNAL_CODE,
    FoBusinessUnit.HEAD_OF_UNIT,
    FoBusinessUnit.LAST_MODIFIED_BY,
    FoBusinessUnit.LAST_MODIFIED_DATE_TIME,
    FoBusinessUnit.LAST_MODIFIED_ON,
    FoBusinessUnit.NAME,
    FoBusinessUnit.NAME_DE_DE,
    FoBusinessUnit.NAME_DEFAULT_VALUE,
    FoBusinessUnit.NAME_EN_DEBUG,
    FoBusinessUnit.NAME_EN_GB,
    FoBusinessUnit.NAME_EN_US,
    FoBusinessUnit.NAME_ES_ES,
    FoBusinessUnit.NAME_ES_MX,
    FoBusinessUnit.NAME_FR_CA,
    FoBusinessUnit.NAME_FR_FR,
    FoBusinessUnit.NAME_IT_IT,
    FoBusinessUnit.NAME_LOCALIZED,
    FoBusinessUnit.NAME_NL_NL,
    FoBusinessUnit.NAME_PT_BR,
    FoBusinessUnit.NAME_ZH_CN,
    FoBusinessUnit.START_DATE,
    FoBusinessUnit.STATUS,
    FoBusinessUnit.DESCRIPTION_TRANSLATION_NAV,
    FoBusinessUnit.DESCRIPTION_TRANSLATION_TEXT_NAV,
    FoBusinessUnit.HEAD_OF_UNIT_NAV,
    FoBusinessUnit.NAME_TRANSLATION_NAV,
    FoBusinessUnit.NAME_TRANSLATION_TEXT_NAV,
    FoBusinessUnit.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoBusinessUnit> = new AllFields('*', FoBusinessUnit);
  /**
   * All key fields of the FoBusinessUnit entity.
   */
  export const _keyFields: Array<Selectable<FoBusinessUnit>> = [FoBusinessUnit.EXTERNAL_CODE, FoBusinessUnit.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoBusinessUnit.
   */
  export const _keys: { [keys: string]: Selectable<FoBusinessUnit> } = FoBusinessUnit._keyFields.reduce((acc: { [keys: string]: Selectable<FoBusinessUnit> }, field: Selectable<FoBusinessUnit>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
