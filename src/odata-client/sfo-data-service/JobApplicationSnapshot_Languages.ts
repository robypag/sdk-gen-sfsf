/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationSnapshot_LanguagesRequestBuilder } from './JobApplicationSnapshot_LanguagesRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationSnapshot_Languages" of service "SFOData".
 */
export class JobApplicationSnapshot_Languages extends Entity implements JobApplicationSnapshot_LanguagesType {
  /**
   * Technical entity name for JobApplicationSnapshot_Languages.
   */
  static _entityName = 'JobApplicationSnapshot_Languages';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationSnapshot_Languages.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Application Id.
   */
  applicationId!: BigNumber;
  /**
   * Background Element Id.
   */
  backgroundElementId!: BigNumber;
  /**
   * Background Order Position.
   */
  bgOrderPos!: BigNumber;
  /**
   * Language.
   */
  language!: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDateTime!: Moment;
  /**
   * Reading Proficiency.
   */
  readingProf!: string;
  /**
   * Speaking Proficiency.
   */
  speakingProf!: string;
  /**
   * Language Variant.
   * @nullable
   */
  variant?: string;
  /**
   * Writing Proficiency.
   */
  writingProf!: string;
  /**
   * One-to-one navigation property to the [[JobApplication]] entity.
   */
  application!: JobApplication;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  languageNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  readingProfNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  speakingProfNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  variantNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  writingProfNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `JobApplicationSnapshot_Languages`.
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Languages`.
   */
  static builder(): EntityBuilderType<JobApplicationSnapshot_Languages, JobApplicationSnapshot_LanguagesTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationSnapshot_Languages);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_Languages` entity type.
   * @returns A `JobApplicationSnapshot_Languages` request builder.
   */
  static requestBuilder(): JobApplicationSnapshot_LanguagesRequestBuilder {
    return new JobApplicationSnapshot_LanguagesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_Languages`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Languages`.
   */
  static customField(fieldName: string): CustomField<JobApplicationSnapshot_Languages> {
    return Entity.customFieldSelector(fieldName, JobApplicationSnapshot_Languages);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { JobApplication, JobApplicationType } from './JobApplication';
import { PicklistOption, PicklistOptionType } from './PicklistOption';

export interface JobApplicationSnapshot_LanguagesType {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  language: string;
  lastModifiedDateTime: Moment;
  readingProf: string;
  speakingProf: string;
  variant?: string;
  writingProf: string;
  application: JobApplicationType;
  languageNav: PicklistOptionType;
  readingProfNav: PicklistOptionType;
  speakingProfNav: PicklistOptionType;
  variantNav: PicklistOptionType;
  writingProfNav: PicklistOptionType;
}

export interface JobApplicationSnapshot_LanguagesTypeForceMandatory {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  language: string;
  lastModifiedDateTime: Moment;
  readingProf: string;
  speakingProf: string;
  variant: string;
  writingProf: string;
  application: JobApplicationType;
  languageNav: PicklistOptionType;
  readingProfNav: PicklistOptionType;
  speakingProfNav: PicklistOptionType;
  variantNav: PicklistOptionType;
  writingProfNav: PicklistOptionType;
}

export namespace JobApplicationSnapshot_Languages {
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: BigNumberField<JobApplicationSnapshot_Languages> = new BigNumberField('applicationId', JobApplicationSnapshot_Languages, 'Edm.Int64');
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<JobApplicationSnapshot_Languages> = new BigNumberField('backgroundElementId', JobApplicationSnapshot_Languages, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<JobApplicationSnapshot_Languages> = new BigNumberField('bgOrderPos', JobApplicationSnapshot_Languages, 'Edm.Int64');
  /**
   * Static representation of the [[language]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE: StringField<JobApplicationSnapshot_Languages> = new StringField('language', JobApplicationSnapshot_Languages, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationSnapshot_Languages> = new DateField('lastModifiedDateTime', JobApplicationSnapshot_Languages, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[readingProf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const READING_PROF: StringField<JobApplicationSnapshot_Languages> = new StringField('readingProf', JobApplicationSnapshot_Languages, 'Edm.String');
  /**
   * Static representation of the [[speakingProf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPEAKING_PROF: StringField<JobApplicationSnapshot_Languages> = new StringField('speakingProf', JobApplicationSnapshot_Languages, 'Edm.String');
  /**
   * Static representation of the [[variant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VARIANT: StringField<JobApplicationSnapshot_Languages> = new StringField('variant', JobApplicationSnapshot_Languages, 'Edm.String');
  /**
   * Static representation of the [[writingProf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WRITING_PROF: StringField<JobApplicationSnapshot_Languages> = new StringField('writingProf', JobApplicationSnapshot_Languages, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[application]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION: OneToOneLink<JobApplicationSnapshot_Languages, JobApplication> = new OneToOneLink('application', JobApplicationSnapshot_Languages, JobApplication);
  /**
   * Static representation of the one-to-one navigation property [[languageNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE_NAV: OneToOneLink<JobApplicationSnapshot_Languages, PicklistOption> = new OneToOneLink('languageNav', JobApplicationSnapshot_Languages, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[readingProfNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const READING_PROF_NAV: OneToOneLink<JobApplicationSnapshot_Languages, PicklistOption> = new OneToOneLink('readingProfNav', JobApplicationSnapshot_Languages, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[speakingProfNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPEAKING_PROF_NAV: OneToOneLink<JobApplicationSnapshot_Languages, PicklistOption> = new OneToOneLink('speakingProfNav', JobApplicationSnapshot_Languages, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[variantNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VARIANT_NAV: OneToOneLink<JobApplicationSnapshot_Languages, PicklistOption> = new OneToOneLink('variantNav', JobApplicationSnapshot_Languages, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[writingProfNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WRITING_PROF_NAV: OneToOneLink<JobApplicationSnapshot_Languages, PicklistOption> = new OneToOneLink('writingProfNav', JobApplicationSnapshot_Languages, PicklistOption);
  /**
   * All fields of the JobApplicationSnapshot_Languages entity.
   */
  export const _allFields: Array<BigNumberField<JobApplicationSnapshot_Languages> | StringField<JobApplicationSnapshot_Languages> | DateField<JobApplicationSnapshot_Languages> | OneToOneLink<JobApplicationSnapshot_Languages, JobApplication> | OneToOneLink<JobApplicationSnapshot_Languages, PicklistOption>> = [
    JobApplicationSnapshot_Languages.APPLICATION_ID,
    JobApplicationSnapshot_Languages.BACKGROUND_ELEMENT_ID,
    JobApplicationSnapshot_Languages.BG_ORDER_POS,
    JobApplicationSnapshot_Languages.LANGUAGE,
    JobApplicationSnapshot_Languages.LAST_MODIFIED_DATE_TIME,
    JobApplicationSnapshot_Languages.READING_PROF,
    JobApplicationSnapshot_Languages.SPEAKING_PROF,
    JobApplicationSnapshot_Languages.VARIANT,
    JobApplicationSnapshot_Languages.WRITING_PROF,
    JobApplicationSnapshot_Languages.APPLICATION,
    JobApplicationSnapshot_Languages.LANGUAGE_NAV,
    JobApplicationSnapshot_Languages.READING_PROF_NAV,
    JobApplicationSnapshot_Languages.SPEAKING_PROF_NAV,
    JobApplicationSnapshot_Languages.VARIANT_NAV,
    JobApplicationSnapshot_Languages.WRITING_PROF_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationSnapshot_Languages> = new AllFields('*', JobApplicationSnapshot_Languages);
  /**
   * All key fields of the JobApplicationSnapshot_Languages entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationSnapshot_Languages>> = [JobApplicationSnapshot_Languages.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationSnapshot_Languages.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationSnapshot_Languages> } = JobApplicationSnapshot_Languages._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationSnapshot_Languages> }, field: Selectable<JobApplicationSnapshot_Languages>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
