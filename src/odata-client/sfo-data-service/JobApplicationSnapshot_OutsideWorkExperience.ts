/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationSnapshot_OutsideWorkExperienceRequestBuilder } from './JobApplicationSnapshot_OutsideWorkExperienceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationSnapshot_OutsideWorkExperience" of service "SFOData".
 */
export class JobApplicationSnapshot_OutsideWorkExperience extends Entity implements JobApplicationSnapshot_OutsideWorkExperienceType {
  /**
   * Technical entity name for JobApplicationSnapshot_OutsideWorkExperience.
   */
  static _entityName = 'JobApplicationSnapshot_OutsideWorkExperience';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationSnapshot_OutsideWorkExperience.
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
   * Type of Business.
   */
  businessType!: string;
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
   * One-to-one navigation property to the [[JobApplication]] entity.
   */
  application!: JobApplication;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  businessTypeNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  countryNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  presentEmployerNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `JobApplicationSnapshot_OutsideWorkExperience`.
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_OutsideWorkExperience`.
   */
  static builder(): EntityBuilderType<JobApplicationSnapshot_OutsideWorkExperience, JobApplicationSnapshot_OutsideWorkExperienceTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationSnapshot_OutsideWorkExperience);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_OutsideWorkExperience` entity type.
   * @returns A `JobApplicationSnapshot_OutsideWorkExperience` request builder.
   */
  static requestBuilder(): JobApplicationSnapshot_OutsideWorkExperienceRequestBuilder {
    return new JobApplicationSnapshot_OutsideWorkExperienceRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_OutsideWorkExperience`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_OutsideWorkExperience`.
   */
  static customField(fieldName: string): CustomField<JobApplicationSnapshot_OutsideWorkExperience> {
    return Entity.customFieldSelector(fieldName, JobApplicationSnapshot_OutsideWorkExperience);
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

export interface JobApplicationSnapshot_OutsideWorkExperienceType {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  businessType: string;
  country: string;
  employer: string;
  endDate: Moment;
  lastModifiedDateTime: Moment;
  presentEmployer: string;
  startDate: Moment;
  startTitle: string;
  application: JobApplicationType;
  businessTypeNav: PicklistOptionType;
  countryNav: PicklistOptionType;
  presentEmployerNav: PicklistOptionType;
}

export interface JobApplicationSnapshot_OutsideWorkExperienceTypeForceMandatory {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  businessType: string;
  country: string;
  employer: string;
  endDate: Moment;
  lastModifiedDateTime: Moment;
  presentEmployer: string;
  startDate: Moment;
  startTitle: string;
  application: JobApplicationType;
  businessTypeNav: PicklistOptionType;
  countryNav: PicklistOptionType;
  presentEmployerNav: PicklistOptionType;
}

export namespace JobApplicationSnapshot_OutsideWorkExperience {
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: BigNumberField<JobApplicationSnapshot_OutsideWorkExperience> = new BigNumberField('applicationId', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<JobApplicationSnapshot_OutsideWorkExperience> = new BigNumberField('backgroundElementId', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<JobApplicationSnapshot_OutsideWorkExperience> = new BigNumberField('bgOrderPos', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[businessType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_TYPE: StringField<JobApplicationSnapshot_OutsideWorkExperience> = new StringField('businessType', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<JobApplicationSnapshot_OutsideWorkExperience> = new StringField('country', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[employer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYER: StringField<JobApplicationSnapshot_OutsideWorkExperience> = new StringField('employer', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<JobApplicationSnapshot_OutsideWorkExperience> = new DateField('endDate', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationSnapshot_OutsideWorkExperience> = new DateField('lastModifiedDateTime', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[presentEmployer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRESENT_EMPLOYER: StringField<JobApplicationSnapshot_OutsideWorkExperience> = new StringField('presentEmployer', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<JobApplicationSnapshot_OutsideWorkExperience> = new DateField('startDate', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.DateTime');
  /**
   * Static representation of the [[startTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_TITLE: StringField<JobApplicationSnapshot_OutsideWorkExperience> = new StringField('startTitle', JobApplicationSnapshot_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[application]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION: OneToOneLink<JobApplicationSnapshot_OutsideWorkExperience, JobApplication> = new OneToOneLink('application', JobApplicationSnapshot_OutsideWorkExperience, JobApplication);
  /**
   * Static representation of the one-to-one navigation property [[businessTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_TYPE_NAV: OneToOneLink<JobApplicationSnapshot_OutsideWorkExperience, PicklistOption> = new OneToOneLink('businessTypeNav', JobApplicationSnapshot_OutsideWorkExperience, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<JobApplicationSnapshot_OutsideWorkExperience, PicklistOption> = new OneToOneLink('countryNav', JobApplicationSnapshot_OutsideWorkExperience, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[presentEmployerNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRESENT_EMPLOYER_NAV: OneToOneLink<JobApplicationSnapshot_OutsideWorkExperience, PicklistOption> = new OneToOneLink('presentEmployerNav', JobApplicationSnapshot_OutsideWorkExperience, PicklistOption);
  /**
   * All fields of the JobApplicationSnapshot_OutsideWorkExperience entity.
   */
  export const _allFields: Array<BigNumberField<JobApplicationSnapshot_OutsideWorkExperience> | StringField<JobApplicationSnapshot_OutsideWorkExperience> | DateField<JobApplicationSnapshot_OutsideWorkExperience> | OneToOneLink<JobApplicationSnapshot_OutsideWorkExperience, JobApplication> | OneToOneLink<JobApplicationSnapshot_OutsideWorkExperience, PicklistOption>> = [
    JobApplicationSnapshot_OutsideWorkExperience.APPLICATION_ID,
    JobApplicationSnapshot_OutsideWorkExperience.BACKGROUND_ELEMENT_ID,
    JobApplicationSnapshot_OutsideWorkExperience.BG_ORDER_POS,
    JobApplicationSnapshot_OutsideWorkExperience.BUSINESS_TYPE,
    JobApplicationSnapshot_OutsideWorkExperience.COUNTRY,
    JobApplicationSnapshot_OutsideWorkExperience.EMPLOYER,
    JobApplicationSnapshot_OutsideWorkExperience.END_DATE,
    JobApplicationSnapshot_OutsideWorkExperience.LAST_MODIFIED_DATE_TIME,
    JobApplicationSnapshot_OutsideWorkExperience.PRESENT_EMPLOYER,
    JobApplicationSnapshot_OutsideWorkExperience.START_DATE,
    JobApplicationSnapshot_OutsideWorkExperience.START_TITLE,
    JobApplicationSnapshot_OutsideWorkExperience.APPLICATION,
    JobApplicationSnapshot_OutsideWorkExperience.BUSINESS_TYPE_NAV,
    JobApplicationSnapshot_OutsideWorkExperience.COUNTRY_NAV,
    JobApplicationSnapshot_OutsideWorkExperience.PRESENT_EMPLOYER_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationSnapshot_OutsideWorkExperience> = new AllFields('*', JobApplicationSnapshot_OutsideWorkExperience);
  /**
   * All key fields of the JobApplicationSnapshot_OutsideWorkExperience entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationSnapshot_OutsideWorkExperience>> = [JobApplicationSnapshot_OutsideWorkExperience.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationSnapshot_OutsideWorkExperience.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationSnapshot_OutsideWorkExperience> } = JobApplicationSnapshot_OutsideWorkExperience._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationSnapshot_OutsideWorkExperience> }, field: Selectable<JobApplicationSnapshot_OutsideWorkExperience>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
