/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationSnapshot_EducationRequestBuilder } from './JobApplicationSnapshot_EducationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationSnapshot_Education" of service "SFOData".
 */
export class JobApplicationSnapshot_Education extends Entity implements JobApplicationSnapshot_EducationType {
  /**
   * Technical entity name for JobApplicationSnapshot_Education.
   */
  static _entityName = 'JobApplicationSnapshot_Education';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationSnapshot_Education.
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
   * Degree.
   */
  degree!: string;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Last Modified Date.
   */
  lastModifiedDateTime!: Moment;
  /**
   * Major.
   */
  major!: string;
  /**
   * School.
   */
  school!: string;
  /**
   * From Date.
   */
  startDate!: Moment;
  /**
   * One-to-one navigation property to the [[JobApplication]] entity.
   */
  application!: JobApplication;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  degreeNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  majorNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `JobApplicationSnapshot_Education`.
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Education`.
   */
  static builder(): EntityBuilderType<JobApplicationSnapshot_Education, JobApplicationSnapshot_EducationTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationSnapshot_Education);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_Education` entity type.
   * @returns A `JobApplicationSnapshot_Education` request builder.
   */
  static requestBuilder(): JobApplicationSnapshot_EducationRequestBuilder {
    return new JobApplicationSnapshot_EducationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_Education`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Education`.
   */
  static customField(fieldName: string): CustomField<JobApplicationSnapshot_Education> {
    return Entity.customFieldSelector(fieldName, JobApplicationSnapshot_Education);
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

export interface JobApplicationSnapshot_EducationType {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  degree: string;
  endDate?: Moment;
  lastModifiedDateTime: Moment;
  major: string;
  school: string;
  startDate: Moment;
  application: JobApplicationType;
  degreeNav: PicklistOptionType;
  majorNav: PicklistOptionType;
}

export interface JobApplicationSnapshot_EducationTypeForceMandatory {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  degree: string;
  endDate: Moment;
  lastModifiedDateTime: Moment;
  major: string;
  school: string;
  startDate: Moment;
  application: JobApplicationType;
  degreeNav: PicklistOptionType;
  majorNav: PicklistOptionType;
}

export namespace JobApplicationSnapshot_Education {
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: BigNumberField<JobApplicationSnapshot_Education> = new BigNumberField('applicationId', JobApplicationSnapshot_Education, 'Edm.Int64');
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<JobApplicationSnapshot_Education> = new BigNumberField('backgroundElementId', JobApplicationSnapshot_Education, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<JobApplicationSnapshot_Education> = new BigNumberField('bgOrderPos', JobApplicationSnapshot_Education, 'Edm.Int64');
  /**
   * Static representation of the [[degree]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE: StringField<JobApplicationSnapshot_Education> = new StringField('degree', JobApplicationSnapshot_Education, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<JobApplicationSnapshot_Education> = new DateField('endDate', JobApplicationSnapshot_Education, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationSnapshot_Education> = new DateField('lastModifiedDateTime', JobApplicationSnapshot_Education, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[major]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAJOR: StringField<JobApplicationSnapshot_Education> = new StringField('major', JobApplicationSnapshot_Education, 'Edm.String');
  /**
   * Static representation of the [[school]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL: StringField<JobApplicationSnapshot_Education> = new StringField('school', JobApplicationSnapshot_Education, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<JobApplicationSnapshot_Education> = new DateField('startDate', JobApplicationSnapshot_Education, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[application]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION: OneToOneLink<JobApplicationSnapshot_Education, JobApplication> = new OneToOneLink('application', JobApplicationSnapshot_Education, JobApplication);
  /**
   * Static representation of the one-to-one navigation property [[degreeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_NAV: OneToOneLink<JobApplicationSnapshot_Education, PicklistOption> = new OneToOneLink('degreeNav', JobApplicationSnapshot_Education, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[majorNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAJOR_NAV: OneToOneLink<JobApplicationSnapshot_Education, PicklistOption> = new OneToOneLink('majorNav', JobApplicationSnapshot_Education, PicklistOption);
  /**
   * All fields of the JobApplicationSnapshot_Education entity.
   */
  export const _allFields: Array<BigNumberField<JobApplicationSnapshot_Education> | StringField<JobApplicationSnapshot_Education> | DateField<JobApplicationSnapshot_Education> | OneToOneLink<JobApplicationSnapshot_Education, JobApplication> | OneToOneLink<JobApplicationSnapshot_Education, PicklistOption>> = [
    JobApplicationSnapshot_Education.APPLICATION_ID,
    JobApplicationSnapshot_Education.BACKGROUND_ELEMENT_ID,
    JobApplicationSnapshot_Education.BG_ORDER_POS,
    JobApplicationSnapshot_Education.DEGREE,
    JobApplicationSnapshot_Education.END_DATE,
    JobApplicationSnapshot_Education.LAST_MODIFIED_DATE_TIME,
    JobApplicationSnapshot_Education.MAJOR,
    JobApplicationSnapshot_Education.SCHOOL,
    JobApplicationSnapshot_Education.START_DATE,
    JobApplicationSnapshot_Education.APPLICATION,
    JobApplicationSnapshot_Education.DEGREE_NAV,
    JobApplicationSnapshot_Education.MAJOR_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationSnapshot_Education> = new AllFields('*', JobApplicationSnapshot_Education);
  /**
   * All key fields of the JobApplicationSnapshot_Education entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationSnapshot_Education>> = [JobApplicationSnapshot_Education.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationSnapshot_Education.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationSnapshot_Education> } = JobApplicationSnapshot_Education._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationSnapshot_Education> }, field: Selectable<JobApplicationSnapshot_Education>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
