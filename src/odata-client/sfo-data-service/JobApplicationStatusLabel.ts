/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationStatusLabelRequestBuilder } from './JobApplicationStatusLabelRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationStatusLabel" of service "SFOData".
 */
export class JobApplicationStatusLabel extends Entity implements JobApplicationStatusLabelType {
  /**
   * Technical entity name for JobApplicationStatusLabel.
   */
  static _entityName = 'JobApplicationStatusLabel';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationStatusLabel.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Application Status Id.
   */
  appStatusId!: BigNumber;
  /**
   * Candidate Label.
   * @nullable
   */
  candidateLabel?: string;
  /**
   * Locale.
   */
  locale!: string;
  /**
   * Application Status Label.
   */
  statusLabel!: string;
  /**
   * One-to-one navigation property to the [[JobApplicationStatus]] entity.
   */
  appStatus!: JobApplicationStatus;

  /**
   * Returns an entity builder to construct instances `JobApplicationStatusLabel`.
   * @returns A builder that constructs instances of entity type `JobApplicationStatusLabel`.
   */
  static builder(): EntityBuilderType<JobApplicationStatusLabel, JobApplicationStatusLabelTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationStatusLabel);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationStatusLabel` entity type.
   * @returns A `JobApplicationStatusLabel` request builder.
   */
  static requestBuilder(): JobApplicationStatusLabelRequestBuilder {
    return new JobApplicationStatusLabelRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationStatusLabel`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationStatusLabel`.
   */
  static customField(fieldName: string): CustomField<JobApplicationStatusLabel> {
    return Entity.customFieldSelector(fieldName, JobApplicationStatusLabel);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { JobApplicationStatus, JobApplicationStatusType } from './JobApplicationStatus';

export interface JobApplicationStatusLabelType {
  appStatusId: BigNumber;
  candidateLabel?: string;
  locale: string;
  statusLabel: string;
  appStatus: JobApplicationStatusType;
}

export interface JobApplicationStatusLabelTypeForceMandatory {
  appStatusId: BigNumber;
  candidateLabel: string;
  locale: string;
  statusLabel: string;
  appStatus: JobApplicationStatusType;
}

export namespace JobApplicationStatusLabel {
  /**
   * Static representation of the [[appStatusId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APP_STATUS_ID: BigNumberField<JobApplicationStatusLabel> = new BigNumberField('appStatusId', JobApplicationStatusLabel, 'Edm.Int64');
  /**
   * Static representation of the [[candidateLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_LABEL: StringField<JobApplicationStatusLabel> = new StringField('candidateLabel', JobApplicationStatusLabel, 'Edm.String');
  /**
   * Static representation of the [[locale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALE: StringField<JobApplicationStatusLabel> = new StringField('locale', JobApplicationStatusLabel, 'Edm.String');
  /**
   * Static representation of the [[statusLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_LABEL: StringField<JobApplicationStatusLabel> = new StringField('statusLabel', JobApplicationStatusLabel, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[appStatus]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APP_STATUS: OneToOneLink<JobApplicationStatusLabel, JobApplicationStatus> = new OneToOneLink('appStatus', JobApplicationStatusLabel, JobApplicationStatus);
  /**
   * All fields of the JobApplicationStatusLabel entity.
   */
  export const _allFields: Array<BigNumberField<JobApplicationStatusLabel> | StringField<JobApplicationStatusLabel> | OneToOneLink<JobApplicationStatusLabel, JobApplicationStatus>> = [
    JobApplicationStatusLabel.APP_STATUS_ID,
    JobApplicationStatusLabel.CANDIDATE_LABEL,
    JobApplicationStatusLabel.LOCALE,
    JobApplicationStatusLabel.STATUS_LABEL,
    JobApplicationStatusLabel.APP_STATUS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationStatusLabel> = new AllFields('*', JobApplicationStatusLabel);
  /**
   * All key fields of the JobApplicationStatusLabel entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationStatusLabel>> = [JobApplicationStatusLabel.APP_STATUS_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationStatusLabel.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationStatusLabel> } = JobApplicationStatusLabel._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationStatusLabel> }, field: Selectable<JobApplicationStatusLabel>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
