/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationSnapshot_MobilityRequestBuilder } from './JobApplicationSnapshot_MobilityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationSnapshot_Mobility" of service "SFOData".
 */
export class JobApplicationSnapshot_Mobility extends Entity implements JobApplicationSnapshot_MobilityType {
  /**
   * Technical entity name for JobApplicationSnapshot_Mobility.
   */
  static _entityName = 'JobApplicationSnapshot_Mobility';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationSnapshot_Mobility.
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
   * Last Modified Date.
   */
  lastModifiedDateTime!: Moment;
  /**
   * Location Desired.
   * @nullable
   */
  location?: string;
  /**
   * Willing to Relocate.
   */
  willingness!: string;
  /**
   * One-to-one navigation property to the [[JobApplication]] entity.
   */
  application!: JobApplication;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  willingnessNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `JobApplicationSnapshot_Mobility`.
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Mobility`.
   */
  static builder(): EntityBuilderType<JobApplicationSnapshot_Mobility, JobApplicationSnapshot_MobilityTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationSnapshot_Mobility);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_Mobility` entity type.
   * @returns A `JobApplicationSnapshot_Mobility` request builder.
   */
  static requestBuilder(): JobApplicationSnapshot_MobilityRequestBuilder {
    return new JobApplicationSnapshot_MobilityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_Mobility`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Mobility`.
   */
  static customField(fieldName: string): CustomField<JobApplicationSnapshot_Mobility> {
    return Entity.customFieldSelector(fieldName, JobApplicationSnapshot_Mobility);
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

export interface JobApplicationSnapshot_MobilityType {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  lastModifiedDateTime: Moment;
  location?: string;
  willingness: string;
  application: JobApplicationType;
  willingnessNav: PicklistOptionType;
}

export interface JobApplicationSnapshot_MobilityTypeForceMandatory {
  applicationId: BigNumber;
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  lastModifiedDateTime: Moment;
  location: string;
  willingness: string;
  application: JobApplicationType;
  willingnessNav: PicklistOptionType;
}

export namespace JobApplicationSnapshot_Mobility {
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: BigNumberField<JobApplicationSnapshot_Mobility> = new BigNumberField('applicationId', JobApplicationSnapshot_Mobility, 'Edm.Int64');
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<JobApplicationSnapshot_Mobility> = new BigNumberField('backgroundElementId', JobApplicationSnapshot_Mobility, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<JobApplicationSnapshot_Mobility> = new BigNumberField('bgOrderPos', JobApplicationSnapshot_Mobility, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationSnapshot_Mobility> = new DateField('lastModifiedDateTime', JobApplicationSnapshot_Mobility, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: StringField<JobApplicationSnapshot_Mobility> = new StringField('location', JobApplicationSnapshot_Mobility, 'Edm.String');
  /**
   * Static representation of the [[willingness]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WILLINGNESS: StringField<JobApplicationSnapshot_Mobility> = new StringField('willingness', JobApplicationSnapshot_Mobility, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[application]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION: OneToOneLink<JobApplicationSnapshot_Mobility, JobApplication> = new OneToOneLink('application', JobApplicationSnapshot_Mobility, JobApplication);
  /**
   * Static representation of the one-to-one navigation property [[willingnessNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WILLINGNESS_NAV: OneToOneLink<JobApplicationSnapshot_Mobility, PicklistOption> = new OneToOneLink('willingnessNav', JobApplicationSnapshot_Mobility, PicklistOption);
  /**
   * All fields of the JobApplicationSnapshot_Mobility entity.
   */
  export const _allFields: Array<BigNumberField<JobApplicationSnapshot_Mobility> | DateField<JobApplicationSnapshot_Mobility> | StringField<JobApplicationSnapshot_Mobility> | OneToOneLink<JobApplicationSnapshot_Mobility, JobApplication> | OneToOneLink<JobApplicationSnapshot_Mobility, PicklistOption>> = [
    JobApplicationSnapshot_Mobility.APPLICATION_ID,
    JobApplicationSnapshot_Mobility.BACKGROUND_ELEMENT_ID,
    JobApplicationSnapshot_Mobility.BG_ORDER_POS,
    JobApplicationSnapshot_Mobility.LAST_MODIFIED_DATE_TIME,
    JobApplicationSnapshot_Mobility.LOCATION,
    JobApplicationSnapshot_Mobility.WILLINGNESS,
    JobApplicationSnapshot_Mobility.APPLICATION,
    JobApplicationSnapshot_Mobility.WILLINGNESS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationSnapshot_Mobility> = new AllFields('*', JobApplicationSnapshot_Mobility);
  /**
   * All key fields of the JobApplicationSnapshot_Mobility entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationSnapshot_Mobility>> = [JobApplicationSnapshot_Mobility.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationSnapshot_Mobility.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationSnapshot_Mobility> } = JobApplicationSnapshot_Mobility._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationSnapshot_Mobility> }, field: Selectable<JobApplicationSnapshot_Mobility>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
