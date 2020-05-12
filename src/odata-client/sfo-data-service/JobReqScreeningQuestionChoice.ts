/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobReqScreeningQuestionChoiceRequestBuilder } from './JobReqScreeningQuestionChoiceRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobReqScreeningQuestionChoice" of service "SFOData".
 */
export class JobReqScreeningQuestionChoice extends Entity implements JobReqScreeningQuestionChoiceType {
  /**
   * Technical entity name for JobReqScreeningQuestionChoice.
   */
  static _entityName = 'JobReqScreeningQuestionChoice';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobReqScreeningQuestionChoice.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Option Locale.
   */
  locale!: string;
  /**
   * Option Id.
   */
  optionId!: BigNumber;
  /**
   * Option Label.
   */
  optionLabel!: string;
  /**
   * Option Value.
   */
  optionValue!: number;

  /**
   * Returns an entity builder to construct instances `JobReqScreeningQuestionChoice`.
   * @returns A builder that constructs instances of entity type `JobReqScreeningQuestionChoice`.
   */
  static builder(): EntityBuilderType<JobReqScreeningQuestionChoice, JobReqScreeningQuestionChoiceTypeForceMandatory> {
    return Entity.entityBuilder(JobReqScreeningQuestionChoice);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobReqScreeningQuestionChoice` entity type.
   * @returns A `JobReqScreeningQuestionChoice` request builder.
   */
  static requestBuilder(): JobReqScreeningQuestionChoiceRequestBuilder {
    return new JobReqScreeningQuestionChoiceRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqScreeningQuestionChoice`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobReqScreeningQuestionChoice`.
   */
  static customField(fieldName: string): CustomField<JobReqScreeningQuestionChoice> {
    return Entity.customFieldSelector(fieldName, JobReqScreeningQuestionChoice);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface JobReqScreeningQuestionChoiceType {
  locale: string;
  optionId: BigNumber;
  optionLabel: string;
  optionValue: number;
}

export interface JobReqScreeningQuestionChoiceTypeForceMandatory {
  locale: string;
  optionId: BigNumber;
  optionLabel: string;
  optionValue: number;
}

export namespace JobReqScreeningQuestionChoice {
  /**
   * Static representation of the [[locale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALE: StringField<JobReqScreeningQuestionChoice> = new StringField('locale', JobReqScreeningQuestionChoice, 'Edm.String');
  /**
   * Static representation of the [[optionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTION_ID: BigNumberField<JobReqScreeningQuestionChoice> = new BigNumberField('optionId', JobReqScreeningQuestionChoice, 'Edm.Int64');
  /**
   * Static representation of the [[optionLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTION_LABEL: StringField<JobReqScreeningQuestionChoice> = new StringField('optionLabel', JobReqScreeningQuestionChoice, 'Edm.String');
  /**
   * Static representation of the [[optionValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTION_VALUE: NumberField<JobReqScreeningQuestionChoice> = new NumberField('optionValue', JobReqScreeningQuestionChoice, 'Edm.Double');
  /**
   * All fields of the JobReqScreeningQuestionChoice entity.
   */
  export const _allFields: Array<StringField<JobReqScreeningQuestionChoice> | BigNumberField<JobReqScreeningQuestionChoice> | NumberField<JobReqScreeningQuestionChoice>> = [
    JobReqScreeningQuestionChoice.LOCALE,
    JobReqScreeningQuestionChoice.OPTION_ID,
    JobReqScreeningQuestionChoice.OPTION_LABEL,
    JobReqScreeningQuestionChoice.OPTION_VALUE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobReqScreeningQuestionChoice> = new AllFields('*', JobReqScreeningQuestionChoice);
  /**
   * All key fields of the JobReqScreeningQuestionChoice entity.
   */
  export const _keyFields: Array<Selectable<JobReqScreeningQuestionChoice>> = [JobReqScreeningQuestionChoice.LOCALE, JobReqScreeningQuestionChoice.OPTION_ID, JobReqScreeningQuestionChoice.OPTION_VALUE];
  /**
   * Mapping of all key field names to the respective static field property JobReqScreeningQuestionChoice.
   */
  export const _keys: { [keys: string]: Selectable<JobReqScreeningQuestionChoice> } = JobReqScreeningQuestionChoice._keyFields.reduce((acc: { [keys: string]: Selectable<JobReqScreeningQuestionChoice> }, field: Selectable<JobReqScreeningQuestionChoice>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
