/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoJobCodeRequestBuilder } from './FoJobCodeRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOJobCode" of service "SFOData".
 */
export class FoJobCode extends Entity implements FoJobCodeType {
  /**
   * Technical entity name for FoJobCode.
   */
  static _entityName = 'FOJobCode';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoJobCode.
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
   * Job Level.
   * Maximum length: 128.
   * @nullable
   */
  defaultJobLevel?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  description?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionDeDe?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionDefaultValue?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionEnDebug?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionEnGb?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionEnUs?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionEsEs?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionEsMx?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionFrCa?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionFrFr?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionItIt?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionLocalized?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionNlNl?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionPtBr?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionZhCn?: string;
  /**
   * effectiveEndDate.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Job Code.
   * Maximum length: 32.
   */
  externalCode!: string;
  /**
   * Pay Grade.
   * Maximum length: 32.
   * @nullable
   */
  grade?: string;
  /**
   * Job Family.
   * Maximum length: 128.
   * @nullable
   */
  jobFunction?: string;
  /**
   * Job Level.
   * Maximum length: 128.
   * @nullable
   */
  jobLevel?: string;
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
   * Job Title.
   * Maximum length: 90.
   * @nullable
   */
  name?: string;
  /**
   * Job Title.
   * Maximum length: 90.
   * @nullable
   */
  nameDeDe?: string;
  /**
   * Job Title.
   * Maximum length: 90.
   * @nullable
   */
  nameDefaultValue?: string;
  /**
   * Job Title.
   * Maximum length: 90.
   * @nullable
   */
  nameEnDebug?: string;
  /**
   * Job Title.
   * Maximum length: 90.
   * @nullable
   */
  nameEnGb?: string;
  /**
   * Job Title.
   * Maximum length: 90.
   * @nullable
   */
  nameEnUs?: string;
  /**
   * Job Title.
   * Maximum length: 90.
   * @nullable
   */
  nameEsEs?: string;
  /**
   * Job Title.
   * Maximum length: 90.
   * @nullable
   */
  nameEsMx?: string;
  /**
   * Job Title.
   * Maximum length: 90.
   * @nullable
   */
  nameFrCa?: string;
  /**
   * Job Title.
   * Maximum length: 90.
   * @nullable
   */
  nameFrFr?: string;
  /**
   * Job Title.
   * Maximum length: 90.
   * @nullable
   */
  nameItIt?: string;
  /**
   * Job Title.
   * Maximum length: 90.
   * @nullable
   */
  nameLocalized?: string;
  /**
   * Job Title.
   * Maximum length: 90.
   * @nullable
   */
  nameNlNl?: string;
  /**
   * Job Title.
   * Maximum length: 90.
   * @nullable
   */
  namePtBr?: string;
  /**
   * Job Title.
   * Maximum length: 90.
   * @nullable
   */
  nameZhCn?: string;
  /**
   * Parent Job Classification.
   * Maximum length: 128.
   * @nullable
   */
  parentJobCode?: string;
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
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  defaultJobLevelNav!: PickListValueV2;
  /**
   * One-to-many navigation property to the [[LocalizedData]] entity.
   */
  descriptionTranslationNav!: LocalizedData[];
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  descriptionTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[FoPayGrade]] entity.
   */
  gradeNav!: FoPayGrade;
  /**
   * One-to-one navigation property to the [[FoJobFunction]] entity.
   */
  jobFunctionNav!: FoJobFunction;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  jobLevelNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[FoJobClassLocalAus]] entity.
   */
  localNavAus!: FoJobClassLocalAus;
  /**
   * One-to-one navigation property to the [[FoJobClassLocalBra]] entity.
   */
  localNavBra!: FoJobClassLocalBra;
  /**
   * One-to-one navigation property to the [[FoJobClassLocalCan]] entity.
   */
  localNavCan!: FoJobClassLocalCan;
  /**
   * One-to-one navigation property to the [[FoJobClassLocalDeflt]] entity.
   */
  localNavDeflt!: FoJobClassLocalDeflt;
  /**
   * One-to-one navigation property to the [[FoJobClassLocalFra]] entity.
   */
  localNavFra!: FoJobClassLocalFra;
  /**
   * One-to-one navigation property to the [[FoJobClassLocalGbr]] entity.
   */
  localNavGbr!: FoJobClassLocalGbr;
  /**
   * One-to-one navigation property to the [[FoJobClassLocalIta]] entity.
   */
  localNavIta!: FoJobClassLocalIta;
  /**
   * One-to-one navigation property to the [[FoJobClassLocalUsa]] entity.
   */
  localNavUsa!: FoJobClassLocalUsa;
  /**
   * One-to-many navigation property to the [[LocalizedData]] entity.
   */
  nameTranslationNav!: LocalizedData[];
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  nameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[FoJobCode]] entity.
   */
  parentJobCodeNav!: FoJobCode;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[JobClassificationCountry]] entity.
   */
  toJobClassificationCountry!: JobClassificationCountry[];

  /**
   * Returns an entity builder to construct instances `FoJobCode`.
   * @returns A builder that constructs instances of entity type `FoJobCode`.
   */
  static builder(): EntityBuilderType<FoJobCode, FoJobCodeTypeForceMandatory> {
    return Entity.entityBuilder(FoJobCode);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoJobCode` entity type.
   * @returns A `FoJobCode` request builder.
   */
  static requestBuilder(): FoJobCodeRequestBuilder {
    return new FoJobCodeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobCode`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoJobCode`.
   */
  static customField(fieldName: string): CustomField<FoJobCode> {
    return Entity.customFieldSelector(fieldName, FoJobCode);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { LocalizedData, LocalizedDataType } from './LocalizedData';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { FoPayGrade, FoPayGradeType } from './FoPayGrade';
import { FoJobFunction, FoJobFunctionType } from './FoJobFunction';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { FoJobClassLocalAus, FoJobClassLocalAusType } from './FoJobClassLocalAus';
import { FoJobClassLocalBra, FoJobClassLocalBraType } from './FoJobClassLocalBra';
import { FoJobClassLocalCan, FoJobClassLocalCanType } from './FoJobClassLocalCan';
import { FoJobClassLocalDeflt, FoJobClassLocalDefltType } from './FoJobClassLocalDeflt';
import { FoJobClassLocalFra, FoJobClassLocalFraType } from './FoJobClassLocalFra';
import { FoJobClassLocalGbr, FoJobClassLocalGbrType } from './FoJobClassLocalGbr';
import { FoJobClassLocalIta, FoJobClassLocalItaType } from './FoJobClassLocalIta';
import { FoJobClassLocalUsa, FoJobClassLocalUsaType } from './FoJobClassLocalUsa';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { JobClassificationCountry, JobClassificationCountryType } from './JobClassificationCountry';

export interface FoJobCodeType {
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  defaultJobLevel?: string;
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
  grade?: string;
  jobFunction?: string;
  jobLevel?: string;
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
  parentJobCode?: string;
  startDate: Moment;
  status?: string;
  defaultJobLevelNav: PickListValueV2Type;
  descriptionTranslationNav: LocalizedDataType[];
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  gradeNav: FoPayGradeType;
  jobFunctionNav: FoJobFunctionType;
  jobLevelNav: PicklistOptionType;
  localNavAus: FoJobClassLocalAusType;
  localNavBra: FoJobClassLocalBraType;
  localNavCan: FoJobClassLocalCanType;
  localNavDeflt: FoJobClassLocalDefltType;
  localNavFra: FoJobClassLocalFraType;
  localNavGbr: FoJobClassLocalGbrType;
  localNavIta: FoJobClassLocalItaType;
  localNavUsa: FoJobClassLocalUsaType;
  nameTranslationNav: LocalizedDataType[];
  nameTranslationTextNav: MdfLocalizedValueType[];
  parentJobCodeNav: FoJobCodeType;
  statusNav: MdfEnumValueType;
  toJobClassificationCountry: JobClassificationCountryType[];
}

export interface FoJobCodeTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  defaultJobLevel: string;
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
  grade: string;
  jobFunction: string;
  jobLevel: string;
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
  parentJobCode: string;
  startDate: Moment;
  status: string;
  defaultJobLevelNav: PickListValueV2Type;
  descriptionTranslationNav: LocalizedDataType[];
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  gradeNav: FoPayGradeType;
  jobFunctionNav: FoJobFunctionType;
  jobLevelNav: PicklistOptionType;
  localNavAus: FoJobClassLocalAusType;
  localNavBra: FoJobClassLocalBraType;
  localNavCan: FoJobClassLocalCanType;
  localNavDeflt: FoJobClassLocalDefltType;
  localNavFra: FoJobClassLocalFraType;
  localNavGbr: FoJobClassLocalGbrType;
  localNavIta: FoJobClassLocalItaType;
  localNavUsa: FoJobClassLocalUsaType;
  nameTranslationNav: LocalizedDataType[];
  nameTranslationTextNav: MdfLocalizedValueType[];
  parentJobCodeNav: FoJobCodeType;
  statusNav: MdfEnumValueType;
  toJobClassificationCountry: JobClassificationCountryType[];
}

export namespace FoJobCode {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoJobCode> = new StringField('createdBy', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoJobCode> = new DateField('createdDateTime', FoJobCode, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoJobCode> = new DateField('createdOn', FoJobCode, 'Edm.DateTime');
  /**
   * Static representation of the [[defaultJobLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_JOB_LEVEL: StringField<FoJobCode> = new StringField('defaultJobLevel', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FoJobCode> = new StringField('description', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<FoJobCode> = new StringField('description_de_DE', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<FoJobCode> = new StringField('description_defaultValue', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<FoJobCode> = new StringField('description_en_DEBUG', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<FoJobCode> = new StringField('description_en_GB', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<FoJobCode> = new StringField('description_en_US', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<FoJobCode> = new StringField('description_es_ES', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<FoJobCode> = new StringField('description_es_MX', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<FoJobCode> = new StringField('description_fr_CA', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<FoJobCode> = new StringField('description_fr_FR', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<FoJobCode> = new StringField('description_it_IT', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<FoJobCode> = new StringField('description_localized', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<FoJobCode> = new StringField('description_nl_NL', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<FoJobCode> = new StringField('description_pt_BR', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<FoJobCode> = new StringField('description_zh_CN', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoJobCode> = new DateField('endDate', FoJobCode, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoJobCode> = new StringField('externalCode', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[grade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GRADE: StringField<FoJobCode> = new StringField('grade', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[jobFunction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_FUNCTION: StringField<FoJobCode> = new StringField('jobFunction', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[jobLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_LEVEL: StringField<FoJobCode> = new StringField('jobLevel', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoJobCode> = new StringField('lastModifiedBy', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoJobCode> = new DateField('lastModifiedDateTime', FoJobCode, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoJobCode> = new DateField('lastModifiedOn', FoJobCode, 'Edm.DateTime');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FoJobCode> = new StringField('name', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[nameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DE_DE: StringField<FoJobCode> = new StringField('name_de_DE', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[nameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DEFAULT_VALUE: StringField<FoJobCode> = new StringField('name_defaultValue', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[nameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_DEBUG: StringField<FoJobCode> = new StringField('name_en_DEBUG', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[nameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_GB: StringField<FoJobCode> = new StringField('name_en_GB', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[nameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_US: StringField<FoJobCode> = new StringField('name_en_US', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[nameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_ES: StringField<FoJobCode> = new StringField('name_es_ES', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[nameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_MX: StringField<FoJobCode> = new StringField('name_es_MX', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[nameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_CA: StringField<FoJobCode> = new StringField('name_fr_CA', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[nameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_FR: StringField<FoJobCode> = new StringField('name_fr_FR', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[nameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_IT_IT: StringField<FoJobCode> = new StringField('name_it_IT', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[nameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_LOCALIZED: StringField<FoJobCode> = new StringField('name_localized', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[nameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_NL_NL: StringField<FoJobCode> = new StringField('name_nl_NL', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[namePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_BR: StringField<FoJobCode> = new StringField('name_pt_BR', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[nameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_CN: StringField<FoJobCode> = new StringField('name_zh_CN', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[parentJobCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_JOB_CODE: StringField<FoJobCode> = new StringField('parentJobCode', FoJobCode, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoJobCode> = new DateField('startDate', FoJobCode, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoJobCode> = new StringField('status', FoJobCode, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[defaultJobLevelNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_JOB_LEVEL_NAV: OneToOneLink<FoJobCode, PickListValueV2> = new OneToOneLink('defaultJobLevelNav', FoJobCode, PickListValueV2);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_NAV: Link<FoJobCode, LocalizedData> = new Link('descriptionTranslationNav', FoJobCode, LocalizedData);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<FoJobCode, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', FoJobCode, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[gradeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GRADE_NAV: OneToOneLink<FoJobCode, FoPayGrade> = new OneToOneLink('gradeNav', FoJobCode, FoPayGrade);
  /**
   * Static representation of the one-to-one navigation property [[jobFunctionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_FUNCTION_NAV: OneToOneLink<FoJobCode, FoJobFunction> = new OneToOneLink('jobFunctionNav', FoJobCode, FoJobFunction);
  /**
   * Static representation of the one-to-one navigation property [[jobLevelNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_LEVEL_NAV: OneToOneLink<FoJobCode, PicklistOption> = new OneToOneLink('jobLevelNav', FoJobCode, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[localNavAus]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_AUS: OneToOneLink<FoJobCode, FoJobClassLocalAus> = new OneToOneLink('localNavAUS', FoJobCode, FoJobClassLocalAus);
  /**
   * Static representation of the one-to-one navigation property [[localNavBra]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_BRA: OneToOneLink<FoJobCode, FoJobClassLocalBra> = new OneToOneLink('localNavBRA', FoJobCode, FoJobClassLocalBra);
  /**
   * Static representation of the one-to-one navigation property [[localNavCan]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_CAN: OneToOneLink<FoJobCode, FoJobClassLocalCan> = new OneToOneLink('localNavCAN', FoJobCode, FoJobClassLocalCan);
  /**
   * Static representation of the one-to-one navigation property [[localNavDeflt]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_DEFLT: OneToOneLink<FoJobCode, FoJobClassLocalDeflt> = new OneToOneLink('localNavDEFLT', FoJobCode, FoJobClassLocalDeflt);
  /**
   * Static representation of the one-to-one navigation property [[localNavFra]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_FRA: OneToOneLink<FoJobCode, FoJobClassLocalFra> = new OneToOneLink('localNavFRA', FoJobCode, FoJobClassLocalFra);
  /**
   * Static representation of the one-to-one navigation property [[localNavGbr]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_GBR: OneToOneLink<FoJobCode, FoJobClassLocalGbr> = new OneToOneLink('localNavGBR', FoJobCode, FoJobClassLocalGbr);
  /**
   * Static representation of the one-to-one navigation property [[localNavIta]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_ITA: OneToOneLink<FoJobCode, FoJobClassLocalIta> = new OneToOneLink('localNavITA', FoJobCode, FoJobClassLocalIta);
  /**
   * Static representation of the one-to-one navigation property [[localNavUsa]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_USA: OneToOneLink<FoJobCode, FoJobClassLocalUsa> = new OneToOneLink('localNavUSA', FoJobCode, FoJobClassLocalUsa);
  /**
   * Static representation of the one-to-many navigation property [[nameTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_NAV: Link<FoJobCode, LocalizedData> = new Link('nameTranslationNav', FoJobCode, LocalizedData);
  /**
   * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_TEXT_NAV: Link<FoJobCode, MdfLocalizedValue> = new Link('nameTranslationTextNav', FoJobCode, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[parentJobCodeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_JOB_CODE_NAV: OneToOneLink<FoJobCode, FoJobCode> = new OneToOneLink('parentJobCodeNav', FoJobCode, FoJobCode);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<FoJobCode, MdfEnumValue> = new OneToOneLink('statusNav', FoJobCode, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[toJobClassificationCountry]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_JOB_CLASSIFICATION_COUNTRY: Link<FoJobCode, JobClassificationCountry> = new Link('toJobClassificationCountry', FoJobCode, JobClassificationCountry);
  /**
   * All fields of the FoJobCode entity.
   */
  export const _allFields: Array<StringField<FoJobCode> | DateField<FoJobCode> | OneToOneLink<FoJobCode, PickListValueV2> | Link<FoJobCode, LocalizedData> | Link<FoJobCode, MdfLocalizedValue> | OneToOneLink<FoJobCode, FoPayGrade> | OneToOneLink<FoJobCode, FoJobFunction> | OneToOneLink<FoJobCode, PicklistOption> | OneToOneLink<FoJobCode, FoJobClassLocalAus> | OneToOneLink<FoJobCode, FoJobClassLocalBra> | OneToOneLink<FoJobCode, FoJobClassLocalCan> | OneToOneLink<FoJobCode, FoJobClassLocalDeflt> | OneToOneLink<FoJobCode, FoJobClassLocalFra> | OneToOneLink<FoJobCode, FoJobClassLocalGbr> | OneToOneLink<FoJobCode, FoJobClassLocalIta> | OneToOneLink<FoJobCode, FoJobClassLocalUsa> | OneToOneLink<FoJobCode, FoJobCode> | OneToOneLink<FoJobCode, MdfEnumValue> | Link<FoJobCode, JobClassificationCountry>> = [
    FoJobCode.CREATED_BY,
    FoJobCode.CREATED_DATE_TIME,
    FoJobCode.CREATED_ON,
    FoJobCode.DEFAULT_JOB_LEVEL,
    FoJobCode.DESCRIPTION,
    FoJobCode.DESCRIPTION_DE_DE,
    FoJobCode.DESCRIPTION_DEFAULT_VALUE,
    FoJobCode.DESCRIPTION_EN_DEBUG,
    FoJobCode.DESCRIPTION_EN_GB,
    FoJobCode.DESCRIPTION_EN_US,
    FoJobCode.DESCRIPTION_ES_ES,
    FoJobCode.DESCRIPTION_ES_MX,
    FoJobCode.DESCRIPTION_FR_CA,
    FoJobCode.DESCRIPTION_FR_FR,
    FoJobCode.DESCRIPTION_IT_IT,
    FoJobCode.DESCRIPTION_LOCALIZED,
    FoJobCode.DESCRIPTION_NL_NL,
    FoJobCode.DESCRIPTION_PT_BR,
    FoJobCode.DESCRIPTION_ZH_CN,
    FoJobCode.END_DATE,
    FoJobCode.EXTERNAL_CODE,
    FoJobCode.GRADE,
    FoJobCode.JOB_FUNCTION,
    FoJobCode.JOB_LEVEL,
    FoJobCode.LAST_MODIFIED_BY,
    FoJobCode.LAST_MODIFIED_DATE_TIME,
    FoJobCode.LAST_MODIFIED_ON,
    FoJobCode.NAME,
    FoJobCode.NAME_DE_DE,
    FoJobCode.NAME_DEFAULT_VALUE,
    FoJobCode.NAME_EN_DEBUG,
    FoJobCode.NAME_EN_GB,
    FoJobCode.NAME_EN_US,
    FoJobCode.NAME_ES_ES,
    FoJobCode.NAME_ES_MX,
    FoJobCode.NAME_FR_CA,
    FoJobCode.NAME_FR_FR,
    FoJobCode.NAME_IT_IT,
    FoJobCode.NAME_LOCALIZED,
    FoJobCode.NAME_NL_NL,
    FoJobCode.NAME_PT_BR,
    FoJobCode.NAME_ZH_CN,
    FoJobCode.PARENT_JOB_CODE,
    FoJobCode.START_DATE,
    FoJobCode.STATUS,
    FoJobCode.DEFAULT_JOB_LEVEL_NAV,
    FoJobCode.DESCRIPTION_TRANSLATION_NAV,
    FoJobCode.DESCRIPTION_TRANSLATION_TEXT_NAV,
    FoJobCode.GRADE_NAV,
    FoJobCode.JOB_FUNCTION_NAV,
    FoJobCode.JOB_LEVEL_NAV,
    FoJobCode.LOCAL_NAV_AUS,
    FoJobCode.LOCAL_NAV_BRA,
    FoJobCode.LOCAL_NAV_CAN,
    FoJobCode.LOCAL_NAV_DEFLT,
    FoJobCode.LOCAL_NAV_FRA,
    FoJobCode.LOCAL_NAV_GBR,
    FoJobCode.LOCAL_NAV_ITA,
    FoJobCode.LOCAL_NAV_USA,
    FoJobCode.NAME_TRANSLATION_NAV,
    FoJobCode.NAME_TRANSLATION_TEXT_NAV,
    FoJobCode.PARENT_JOB_CODE_NAV,
    FoJobCode.STATUS_NAV,
    FoJobCode.TO_JOB_CLASSIFICATION_COUNTRY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoJobCode> = new AllFields('*', FoJobCode);
  /**
   * All key fields of the FoJobCode entity.
   */
  export const _keyFields: Array<Selectable<FoJobCode>> = [FoJobCode.EXTERNAL_CODE, FoJobCode.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoJobCode.
   */
  export const _keys: { [keys: string]: Selectable<FoJobCode> } = FoJobCode._keyFields.reduce((acc: { [keys: string]: Selectable<FoJobCode> }, field: Selectable<FoJobCode>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
