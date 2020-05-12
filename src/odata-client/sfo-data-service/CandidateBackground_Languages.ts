/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CandidateBackground_LanguagesRequestBuilder } from './CandidateBackground_LanguagesRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CandidateBackground_Languages" of service "SFOData".
 */
export class CandidateBackground_Languages extends Entity implements CandidateBackground_LanguagesType {
  /**
   * Technical entity name for CandidateBackground_Languages.
   */
  static _entityName = 'CandidateBackground_Languages';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CandidateBackground_Languages.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Background Element Id.
   */
  backgroundElementId!: BigNumber;
  /**
   * Background Order Position.
   */
  bgOrderPos!: BigNumber;
  /**
   * Candidate Id.
   */
  candidateId!: BigNumber;
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
   * One-to-one navigation property to the [[Candidate]] entity.
   */
  candidate!: Candidate;
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
   * Returns an entity builder to construct instances `CandidateBackground_Languages`.
   * @returns A builder that constructs instances of entity type `CandidateBackground_Languages`.
   */
  static builder(): EntityBuilderType<CandidateBackground_Languages, CandidateBackground_LanguagesTypeForceMandatory> {
    return Entity.entityBuilder(CandidateBackground_Languages);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CandidateBackground_Languages` entity type.
   * @returns A `CandidateBackground_Languages` request builder.
   */
  static requestBuilder(): CandidateBackground_LanguagesRequestBuilder {
    return new CandidateBackground_LanguagesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_Languages`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CandidateBackground_Languages`.
   */
  static customField(fieldName: string): CustomField<CandidateBackground_Languages> {
    return Entity.customFieldSelector(fieldName, CandidateBackground_Languages);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Candidate, CandidateType } from './Candidate';
import { PicklistOption, PicklistOptionType } from './PicklistOption';

export interface CandidateBackground_LanguagesType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  candidateId: BigNumber;
  language: string;
  lastModifiedDateTime: Moment;
  readingProf: string;
  speakingProf: string;
  variant?: string;
  writingProf: string;
  candidate: CandidateType;
  languageNav: PicklistOptionType;
  readingProfNav: PicklistOptionType;
  speakingProfNav: PicklistOptionType;
  variantNav: PicklistOptionType;
  writingProfNav: PicklistOptionType;
}

export interface CandidateBackground_LanguagesTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  candidateId: BigNumber;
  language: string;
  lastModifiedDateTime: Moment;
  readingProf: string;
  speakingProf: string;
  variant: string;
  writingProf: string;
  candidate: CandidateType;
  languageNav: PicklistOptionType;
  readingProfNav: PicklistOptionType;
  speakingProfNav: PicklistOptionType;
  variantNav: PicklistOptionType;
  writingProfNav: PicklistOptionType;
}

export namespace CandidateBackground_Languages {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<CandidateBackground_Languages> = new BigNumberField('backgroundElementId', CandidateBackground_Languages, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<CandidateBackground_Languages> = new BigNumberField('bgOrderPos', CandidateBackground_Languages, 'Edm.Int64');
  /**
   * Static representation of the [[candidateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_ID: BigNumberField<CandidateBackground_Languages> = new BigNumberField('candidateId', CandidateBackground_Languages, 'Edm.Int64');
  /**
   * Static representation of the [[language]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE: StringField<CandidateBackground_Languages> = new StringField('language', CandidateBackground_Languages, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CandidateBackground_Languages> = new DateField('lastModifiedDateTime', CandidateBackground_Languages, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[readingProf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const READING_PROF: StringField<CandidateBackground_Languages> = new StringField('readingProf', CandidateBackground_Languages, 'Edm.String');
  /**
   * Static representation of the [[speakingProf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPEAKING_PROF: StringField<CandidateBackground_Languages> = new StringField('speakingProf', CandidateBackground_Languages, 'Edm.String');
  /**
   * Static representation of the [[variant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VARIANT: StringField<CandidateBackground_Languages> = new StringField('variant', CandidateBackground_Languages, 'Edm.String');
  /**
   * Static representation of the [[writingProf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WRITING_PROF: StringField<CandidateBackground_Languages> = new StringField('writingProf', CandidateBackground_Languages, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[candidate]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE: OneToOneLink<CandidateBackground_Languages, Candidate> = new OneToOneLink('candidate', CandidateBackground_Languages, Candidate);
  /**
   * Static representation of the one-to-one navigation property [[languageNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE_NAV: OneToOneLink<CandidateBackground_Languages, PicklistOption> = new OneToOneLink('languageNav', CandidateBackground_Languages, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[readingProfNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const READING_PROF_NAV: OneToOneLink<CandidateBackground_Languages, PicklistOption> = new OneToOneLink('readingProfNav', CandidateBackground_Languages, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[speakingProfNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPEAKING_PROF_NAV: OneToOneLink<CandidateBackground_Languages, PicklistOption> = new OneToOneLink('speakingProfNav', CandidateBackground_Languages, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[variantNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VARIANT_NAV: OneToOneLink<CandidateBackground_Languages, PicklistOption> = new OneToOneLink('variantNav', CandidateBackground_Languages, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[writingProfNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WRITING_PROF_NAV: OneToOneLink<CandidateBackground_Languages, PicklistOption> = new OneToOneLink('writingProfNav', CandidateBackground_Languages, PicklistOption);
  /**
   * All fields of the CandidateBackground_Languages entity.
   */
  export const _allFields: Array<BigNumberField<CandidateBackground_Languages> | StringField<CandidateBackground_Languages> | DateField<CandidateBackground_Languages> | OneToOneLink<CandidateBackground_Languages, Candidate> | OneToOneLink<CandidateBackground_Languages, PicklistOption>> = [
    CandidateBackground_Languages.BACKGROUND_ELEMENT_ID,
    CandidateBackground_Languages.BG_ORDER_POS,
    CandidateBackground_Languages.CANDIDATE_ID,
    CandidateBackground_Languages.LANGUAGE,
    CandidateBackground_Languages.LAST_MODIFIED_DATE_TIME,
    CandidateBackground_Languages.READING_PROF,
    CandidateBackground_Languages.SPEAKING_PROF,
    CandidateBackground_Languages.VARIANT,
    CandidateBackground_Languages.WRITING_PROF,
    CandidateBackground_Languages.CANDIDATE,
    CandidateBackground_Languages.LANGUAGE_NAV,
    CandidateBackground_Languages.READING_PROF_NAV,
    CandidateBackground_Languages.SPEAKING_PROF_NAV,
    CandidateBackground_Languages.VARIANT_NAV,
    CandidateBackground_Languages.WRITING_PROF_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CandidateBackground_Languages> = new AllFields('*', CandidateBackground_Languages);
  /**
   * All key fields of the CandidateBackground_Languages entity.
   */
  export const _keyFields: Array<Selectable<CandidateBackground_Languages>> = [CandidateBackground_Languages.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property CandidateBackground_Languages.
   */
  export const _keys: { [keys: string]: Selectable<CandidateBackground_Languages> } = CandidateBackground_Languages._keyFields.reduce((acc: { [keys: string]: Selectable<CandidateBackground_Languages> }, field: Selectable<CandidateBackground_Languages>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
