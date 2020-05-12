/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoJobFunctionRequestBuilder } from './FoJobFunctionRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOJobFunction" of service "SFOData".
 */
export class FoJobFunction extends Entity implements FoJobFunctionType {
  /**
   * Technical entity name for FoJobFunction.
   */
  static _entityName = 'FOJobFunction';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoJobFunction.
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
   * Job Family ID.
   * Maximum length: 32.
   */
  externalCode!: string;
  /**
   * Job Family Type.
   * Maximum length: 128.
   * @nullable
   */
  jobFunctionType?: string;
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
   * Parent Job Family.
   * Maximum length: 128.
   * @nullable
   */
  parentFunctionCode?: string;
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
   * Job Family Type.
   * Maximum length: 128.
   * @nullable
   */
  type?: string;
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  descriptionTranslationNav!: FoTranslation;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  descriptionTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  jobFunctionTypeNav!: PickListValueV2;
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  nameTranslationNav!: FoTranslation;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  nameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[FoJobFunction]] entity.
   */
  parentFunctionCodeNav!: FoJobFunction;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  typeNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `FoJobFunction`.
   * @returns A builder that constructs instances of entity type `FoJobFunction`.
   */
  static builder(): EntityBuilderType<FoJobFunction, FoJobFunctionTypeForceMandatory> {
    return Entity.entityBuilder(FoJobFunction);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoJobFunction` entity type.
   * @returns A `FoJobFunction` request builder.
   */
  static requestBuilder(): FoJobFunctionRequestBuilder {
    return new FoJobFunctionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobFunction`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoJobFunction`.
   */
  static customField(fieldName: string): CustomField<FoJobFunction> {
    return Entity.customFieldSelector(fieldName, FoJobFunction);
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
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { PicklistOption, PicklistOptionType } from './PicklistOption';

export interface FoJobFunctionType {
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
  jobFunctionType?: string;
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
  parentFunctionCode?: string;
  startDate: Moment;
  status?: string;
  type?: string;
  descriptionTranslationNav: FoTranslationType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  jobFunctionTypeNav: PickListValueV2Type;
  nameTranslationNav: FoTranslationType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  parentFunctionCodeNav: FoJobFunctionType;
  statusNav: MdfEnumValueType;
  typeNav: PicklistOptionType;
}

export interface FoJobFunctionTypeForceMandatory {
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
  jobFunctionType: string;
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
  parentFunctionCode: string;
  startDate: Moment;
  status: string;
  type: string;
  descriptionTranslationNav: FoTranslationType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  jobFunctionTypeNav: PickListValueV2Type;
  nameTranslationNav: FoTranslationType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  parentFunctionCodeNav: FoJobFunctionType;
  statusNav: MdfEnumValueType;
  typeNav: PicklistOptionType;
}

export namespace FoJobFunction {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoJobFunction> = new StringField('createdBy', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoJobFunction> = new DateField('createdDateTime', FoJobFunction, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoJobFunction> = new DateField('createdOn', FoJobFunction, 'Edm.DateTime');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FoJobFunction> = new StringField('description', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<FoJobFunction> = new StringField('description_de_DE', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<FoJobFunction> = new StringField('description_defaultValue', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<FoJobFunction> = new StringField('description_en_DEBUG', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<FoJobFunction> = new StringField('description_en_GB', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<FoJobFunction> = new StringField('description_en_US', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<FoJobFunction> = new StringField('description_es_ES', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<FoJobFunction> = new StringField('description_es_MX', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<FoJobFunction> = new StringField('description_fr_CA', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<FoJobFunction> = new StringField('description_fr_FR', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<FoJobFunction> = new StringField('description_it_IT', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<FoJobFunction> = new StringField('description_localized', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<FoJobFunction> = new StringField('description_nl_NL', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<FoJobFunction> = new StringField('description_pt_BR', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<FoJobFunction> = new StringField('description_zh_CN', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoJobFunction> = new DateField('endDate', FoJobFunction, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoJobFunction> = new StringField('externalCode', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[jobFunctionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_FUNCTION_TYPE: StringField<FoJobFunction> = new StringField('jobFunctionType', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoJobFunction> = new StringField('lastModifiedBy', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoJobFunction> = new DateField('lastModifiedDateTime', FoJobFunction, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoJobFunction> = new DateField('lastModifiedOn', FoJobFunction, 'Edm.DateTime');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FoJobFunction> = new StringField('name', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[nameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DE_DE: StringField<FoJobFunction> = new StringField('name_de_DE', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[nameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DEFAULT_VALUE: StringField<FoJobFunction> = new StringField('name_defaultValue', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[nameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_DEBUG: StringField<FoJobFunction> = new StringField('name_en_DEBUG', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[nameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_GB: StringField<FoJobFunction> = new StringField('name_en_GB', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[nameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_US: StringField<FoJobFunction> = new StringField('name_en_US', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[nameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_ES: StringField<FoJobFunction> = new StringField('name_es_ES', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[nameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_MX: StringField<FoJobFunction> = new StringField('name_es_MX', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[nameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_CA: StringField<FoJobFunction> = new StringField('name_fr_CA', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[nameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_FR: StringField<FoJobFunction> = new StringField('name_fr_FR', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[nameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_IT_IT: StringField<FoJobFunction> = new StringField('name_it_IT', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[nameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_LOCALIZED: StringField<FoJobFunction> = new StringField('name_localized', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[nameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_NL_NL: StringField<FoJobFunction> = new StringField('name_nl_NL', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[namePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_BR: StringField<FoJobFunction> = new StringField('name_pt_BR', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[nameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_CN: StringField<FoJobFunction> = new StringField('name_zh_CN', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[parentFunctionCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_FUNCTION_CODE: StringField<FoJobFunction> = new StringField('parentFunctionCode', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoJobFunction> = new DateField('startDate', FoJobFunction, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoJobFunction> = new StringField('status', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<FoJobFunction> = new StringField('type', FoJobFunction, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoJobFunction, FoTranslation> = new OneToOneLink('descriptionTranslationNav', FoJobFunction, FoTranslation);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<FoJobFunction, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', FoJobFunction, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[jobFunctionTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_FUNCTION_TYPE_NAV: OneToOneLink<FoJobFunction, PickListValueV2> = new OneToOneLink('jobFunctionTypeNav', FoJobFunction, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_NAV: OneToOneLink<FoJobFunction, FoTranslation> = new OneToOneLink('nameTranslationNav', FoJobFunction, FoTranslation);
  /**
   * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_TEXT_NAV: Link<FoJobFunction, MdfLocalizedValue> = new Link('nameTranslationTextNav', FoJobFunction, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[parentFunctionCodeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_FUNCTION_CODE_NAV: OneToOneLink<FoJobFunction, FoJobFunction> = new OneToOneLink('parentFunctionCodeNav', FoJobFunction, FoJobFunction);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<FoJobFunction, MdfEnumValue> = new OneToOneLink('statusNav', FoJobFunction, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[typeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_NAV: OneToOneLink<FoJobFunction, PicklistOption> = new OneToOneLink('typeNav', FoJobFunction, PicklistOption);
  /**
   * All fields of the FoJobFunction entity.
   */
  export const _allFields: Array<StringField<FoJobFunction> | DateField<FoJobFunction> | OneToOneLink<FoJobFunction, FoTranslation> | Link<FoJobFunction, MdfLocalizedValue> | OneToOneLink<FoJobFunction, PickListValueV2> | OneToOneLink<FoJobFunction, FoJobFunction> | OneToOneLink<FoJobFunction, MdfEnumValue> | OneToOneLink<FoJobFunction, PicklistOption>> = [
    FoJobFunction.CREATED_BY,
    FoJobFunction.CREATED_DATE_TIME,
    FoJobFunction.CREATED_ON,
    FoJobFunction.DESCRIPTION,
    FoJobFunction.DESCRIPTION_DE_DE,
    FoJobFunction.DESCRIPTION_DEFAULT_VALUE,
    FoJobFunction.DESCRIPTION_EN_DEBUG,
    FoJobFunction.DESCRIPTION_EN_GB,
    FoJobFunction.DESCRIPTION_EN_US,
    FoJobFunction.DESCRIPTION_ES_ES,
    FoJobFunction.DESCRIPTION_ES_MX,
    FoJobFunction.DESCRIPTION_FR_CA,
    FoJobFunction.DESCRIPTION_FR_FR,
    FoJobFunction.DESCRIPTION_IT_IT,
    FoJobFunction.DESCRIPTION_LOCALIZED,
    FoJobFunction.DESCRIPTION_NL_NL,
    FoJobFunction.DESCRIPTION_PT_BR,
    FoJobFunction.DESCRIPTION_ZH_CN,
    FoJobFunction.END_DATE,
    FoJobFunction.EXTERNAL_CODE,
    FoJobFunction.JOB_FUNCTION_TYPE,
    FoJobFunction.LAST_MODIFIED_BY,
    FoJobFunction.LAST_MODIFIED_DATE_TIME,
    FoJobFunction.LAST_MODIFIED_ON,
    FoJobFunction.NAME,
    FoJobFunction.NAME_DE_DE,
    FoJobFunction.NAME_DEFAULT_VALUE,
    FoJobFunction.NAME_EN_DEBUG,
    FoJobFunction.NAME_EN_GB,
    FoJobFunction.NAME_EN_US,
    FoJobFunction.NAME_ES_ES,
    FoJobFunction.NAME_ES_MX,
    FoJobFunction.NAME_FR_CA,
    FoJobFunction.NAME_FR_FR,
    FoJobFunction.NAME_IT_IT,
    FoJobFunction.NAME_LOCALIZED,
    FoJobFunction.NAME_NL_NL,
    FoJobFunction.NAME_PT_BR,
    FoJobFunction.NAME_ZH_CN,
    FoJobFunction.PARENT_FUNCTION_CODE,
    FoJobFunction.START_DATE,
    FoJobFunction.STATUS,
    FoJobFunction.TYPE,
    FoJobFunction.DESCRIPTION_TRANSLATION_NAV,
    FoJobFunction.DESCRIPTION_TRANSLATION_TEXT_NAV,
    FoJobFunction.JOB_FUNCTION_TYPE_NAV,
    FoJobFunction.NAME_TRANSLATION_NAV,
    FoJobFunction.NAME_TRANSLATION_TEXT_NAV,
    FoJobFunction.PARENT_FUNCTION_CODE_NAV,
    FoJobFunction.STATUS_NAV,
    FoJobFunction.TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoJobFunction> = new AllFields('*', FoJobFunction);
  /**
   * All key fields of the FoJobFunction entity.
   */
  export const _keyFields: Array<Selectable<FoJobFunction>> = [FoJobFunction.EXTERNAL_CODE, FoJobFunction.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoJobFunction.
   */
  export const _keys: { [keys: string]: Selectable<FoJobFunction> } = FoJobFunction._keyFields.reduce((acc: { [keys: string]: Selectable<FoJobFunction> }, field: Selectable<FoJobFunction>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
