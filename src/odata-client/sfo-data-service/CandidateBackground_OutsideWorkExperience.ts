/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CandidateBackground_OutsideWorkExperienceRequestBuilder } from './CandidateBackground_OutsideWorkExperienceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CandidateBackground_OutsideWorkExperience" of service "SFOData".
 */
export class CandidateBackground_OutsideWorkExperience extends Entity implements CandidateBackground_OutsideWorkExperienceType {
  /**
   * Technical entity name for CandidateBackground_OutsideWorkExperience.
   */
  static _entityName = 'CandidateBackground_OutsideWorkExperience';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CandidateBackground_OutsideWorkExperience.
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
   * Type of Business.
   */
  businessType!: string;
  /**
   * Candidate Id.
   */
  candidateId!: BigNumber;
  /**
   * Country.
   */
  country!: string;
  /**
   * Company Name.
   */
  employer!: string;
  /**
   * End Date.
   */
  endDate!: Moment;
  /**
   * Last Modified Date.
   */
  lastModifiedDateTime!: Moment;
  /**
   * Present Employer.
   */
  presentEmployer!: string;
  /**
   * From Date.
   */
  startDate!: Moment;
  /**
   * Title.
   */
  startTitle!: string;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  businessTypeNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[Candidate]] entity.
   */
  candidate!: Candidate;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  countryNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  presentEmployerNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `CandidateBackground_OutsideWorkExperience`.
   * @returns A builder that constructs instances of entity type `CandidateBackground_OutsideWorkExperience`.
   */
  static builder(): EntityBuilderType<CandidateBackground_OutsideWorkExperience, CandidateBackground_OutsideWorkExperienceTypeForceMandatory> {
    return Entity.entityBuilder(CandidateBackground_OutsideWorkExperience);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CandidateBackground_OutsideWorkExperience` entity type.
   * @returns A `CandidateBackground_OutsideWorkExperience` request builder.
   */
  static requestBuilder(): CandidateBackground_OutsideWorkExperienceRequestBuilder {
    return new CandidateBackground_OutsideWorkExperienceRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_OutsideWorkExperience`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CandidateBackground_OutsideWorkExperience`.
   */
  static customField(fieldName: string): CustomField<CandidateBackground_OutsideWorkExperience> {
    return Entity.customFieldSelector(fieldName, CandidateBackground_OutsideWorkExperience);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { Candidate, CandidateType } from './Candidate';

export interface CandidateBackground_OutsideWorkExperienceType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  businessType: string;
  candidateId: BigNumber;
  country: string;
  employer: string;
  endDate: Moment;
  lastModifiedDateTime: Moment;
  presentEmployer: string;
  startDate: Moment;
  startTitle: string;
  businessTypeNav: PicklistOptionType;
  candidate: CandidateType;
  countryNav: PicklistOptionType;
  presentEmployerNav: PicklistOptionType;
}

export interface CandidateBackground_OutsideWorkExperienceTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  businessType: string;
  candidateId: BigNumber;
  country: string;
  employer: string;
  endDate: Moment;
  lastModifiedDateTime: Moment;
  presentEmployer: string;
  startDate: Moment;
  startTitle: string;
  businessTypeNav: PicklistOptionType;
  candidate: CandidateType;
  countryNav: PicklistOptionType;
  presentEmployerNav: PicklistOptionType;
}

export namespace CandidateBackground_OutsideWorkExperience {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<CandidateBackground_OutsideWorkExperience> = new BigNumberField('backgroundElementId', CandidateBackground_OutsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<CandidateBackground_OutsideWorkExperience> = new BigNumberField('bgOrderPos', CandidateBackground_OutsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[businessType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_TYPE: StringField<CandidateBackground_OutsideWorkExperience> = new StringField('businessType', CandidateBackground_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[candidateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_ID: BigNumberField<CandidateBackground_OutsideWorkExperience> = new BigNumberField('candidateId', CandidateBackground_OutsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<CandidateBackground_OutsideWorkExperience> = new StringField('country', CandidateBackground_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[employer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYER: StringField<CandidateBackground_OutsideWorkExperience> = new StringField('employer', CandidateBackground_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<CandidateBackground_OutsideWorkExperience> = new DateField('endDate', CandidateBackground_OutsideWorkExperience, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CandidateBackground_OutsideWorkExperience> = new DateField('lastModifiedDateTime', CandidateBackground_OutsideWorkExperience, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[presentEmployer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRESENT_EMPLOYER: StringField<CandidateBackground_OutsideWorkExperience> = new StringField('presentEmployer', CandidateBackground_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<CandidateBackground_OutsideWorkExperience> = new DateField('startDate', CandidateBackground_OutsideWorkExperience, 'Edm.DateTime');
  /**
   * Static representation of the [[startTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_TITLE: StringField<CandidateBackground_OutsideWorkExperience> = new StringField('startTitle', CandidateBackground_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[businessTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_TYPE_NAV: OneToOneLink<CandidateBackground_OutsideWorkExperience, PicklistOption> = new OneToOneLink('businessTypeNav', CandidateBackground_OutsideWorkExperience, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[candidate]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE: OneToOneLink<CandidateBackground_OutsideWorkExperience, Candidate> = new OneToOneLink('candidate', CandidateBackground_OutsideWorkExperience, Candidate);
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<CandidateBackground_OutsideWorkExperience, PicklistOption> = new OneToOneLink('countryNav', CandidateBackground_OutsideWorkExperience, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[presentEmployerNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRESENT_EMPLOYER_NAV: OneToOneLink<CandidateBackground_OutsideWorkExperience, PicklistOption> = new OneToOneLink('presentEmployerNav', CandidateBackground_OutsideWorkExperience, PicklistOption);
  /**
   * All fields of the CandidateBackground_OutsideWorkExperience entity.
   */
  export const _allFields: Array<BigNumberField<CandidateBackground_OutsideWorkExperience> | StringField<CandidateBackground_OutsideWorkExperience> | DateField<CandidateBackground_OutsideWorkExperience> | OneToOneLink<CandidateBackground_OutsideWorkExperience, PicklistOption> | OneToOneLink<CandidateBackground_OutsideWorkExperience, Candidate>> = [
    CandidateBackground_OutsideWorkExperience.BACKGROUND_ELEMENT_ID,
    CandidateBackground_OutsideWorkExperience.BG_ORDER_POS,
    CandidateBackground_OutsideWorkExperience.BUSINESS_TYPE,
    CandidateBackground_OutsideWorkExperience.CANDIDATE_ID,
    CandidateBackground_OutsideWorkExperience.COUNTRY,
    CandidateBackground_OutsideWorkExperience.EMPLOYER,
    CandidateBackground_OutsideWorkExperience.END_DATE,
    CandidateBackground_OutsideWorkExperience.LAST_MODIFIED_DATE_TIME,
    CandidateBackground_OutsideWorkExperience.PRESENT_EMPLOYER,
    CandidateBackground_OutsideWorkExperience.START_DATE,
    CandidateBackground_OutsideWorkExperience.START_TITLE,
    CandidateBackground_OutsideWorkExperience.BUSINESS_TYPE_NAV,
    CandidateBackground_OutsideWorkExperience.CANDIDATE,
    CandidateBackground_OutsideWorkExperience.COUNTRY_NAV,
    CandidateBackground_OutsideWorkExperience.PRESENT_EMPLOYER_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CandidateBackground_OutsideWorkExperience> = new AllFields('*', CandidateBackground_OutsideWorkExperience);
  /**
   * All key fields of the CandidateBackground_OutsideWorkExperience entity.
   */
  export const _keyFields: Array<Selectable<CandidateBackground_OutsideWorkExperience>> = [CandidateBackground_OutsideWorkExperience.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property CandidateBackground_OutsideWorkExperience.
   */
  export const _keys: { [keys: string]: Selectable<CandidateBackground_OutsideWorkExperience> } = CandidateBackground_OutsideWorkExperience._keyFields.reduce((acc: { [keys: string]: Selectable<CandidateBackground_OutsideWorkExperience> }, field: Selectable<CandidateBackground_OutsideWorkExperience>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
