/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CalibrationSubjectRankRequestBuilder } from './CalibrationSubjectRankRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CalibrationSubjectRank" of service "SFOData".
 */
export class CalibrationSubjectRank extends Entity implements CalibrationSubjectRankType {
  /**
   * Technical entity name for CalibrationSubjectRank.
   */
  static _entityName = 'CalibrationSubjectRank';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CalibrationSubjectRank.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * dataType.
   */
  dataType!: number;
  /**
   * rank.
   */
  rank!: number;
  /**
   * ratingValue.
   */
  ratingValue!: number;
  /**
   * subjectRankId.
   */
  subjectRankId!: BigNumber;
  /**
   * One-to-one navigation property to the [[CalibrationSessionSubject]] entity.
   */
  calSessionSubject!: CalibrationSessionSubject;

  /**
   * Returns an entity builder to construct instances `CalibrationSubjectRank`.
   * @returns A builder that constructs instances of entity type `CalibrationSubjectRank`.
   */
  static builder(): EntityBuilderType<CalibrationSubjectRank, CalibrationSubjectRankTypeForceMandatory> {
    return Entity.entityBuilder(CalibrationSubjectRank);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CalibrationSubjectRank` entity type.
   * @returns A `CalibrationSubjectRank` request builder.
   */
  static requestBuilder(): CalibrationSubjectRankRequestBuilder {
    return new CalibrationSubjectRankRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CalibrationSubjectRank`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CalibrationSubjectRank`.
   */
  static customField(fieldName: string): CustomField<CalibrationSubjectRank> {
    return Entity.customFieldSelector(fieldName, CalibrationSubjectRank);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { CalibrationSessionSubject, CalibrationSessionSubjectType } from './CalibrationSessionSubject';

export interface CalibrationSubjectRankType {
  dataType: number;
  rank: number;
  ratingValue: number;
  subjectRankId: BigNumber;
  calSessionSubject: CalibrationSessionSubjectType;
}

export interface CalibrationSubjectRankTypeForceMandatory {
  dataType: number;
  rank: number;
  ratingValue: number;
  subjectRankId: BigNumber;
  calSessionSubject: CalibrationSessionSubjectType;
}

export namespace CalibrationSubjectRank {
  /**
   * Static representation of the [[dataType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_TYPE: NumberField<CalibrationSubjectRank> = new NumberField('dataType', CalibrationSubjectRank, 'Edm.Int32');
  /**
   * Static representation of the [[rank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RANK: NumberField<CalibrationSubjectRank> = new NumberField('rank', CalibrationSubjectRank, 'Edm.Int32');
  /**
   * Static representation of the [[ratingValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_VALUE: NumberField<CalibrationSubjectRank> = new NumberField('ratingValue', CalibrationSubjectRank, 'Edm.Double');
  /**
   * Static representation of the [[subjectRankId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_RANK_ID: BigNumberField<CalibrationSubjectRank> = new BigNumberField('subjectRankId', CalibrationSubjectRank, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[calSessionSubject]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAL_SESSION_SUBJECT: OneToOneLink<CalibrationSubjectRank, CalibrationSessionSubject> = new OneToOneLink('calSessionSubject', CalibrationSubjectRank, CalibrationSessionSubject);
  /**
   * All fields of the CalibrationSubjectRank entity.
   */
  export const _allFields: Array<NumberField<CalibrationSubjectRank> | BigNumberField<CalibrationSubjectRank> | OneToOneLink<CalibrationSubjectRank, CalibrationSessionSubject>> = [
    CalibrationSubjectRank.DATA_TYPE,
    CalibrationSubjectRank.RANK,
    CalibrationSubjectRank.RATING_VALUE,
    CalibrationSubjectRank.SUBJECT_RANK_ID,
    CalibrationSubjectRank.CAL_SESSION_SUBJECT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CalibrationSubjectRank> = new AllFields('*', CalibrationSubjectRank);
  /**
   * All key fields of the CalibrationSubjectRank entity.
   */
  export const _keyFields: Array<Selectable<CalibrationSubjectRank>> = [CalibrationSubjectRank.SUBJECT_RANK_ID];
  /**
   * Mapping of all key field names to the respective static field property CalibrationSubjectRank.
   */
  export const _keys: { [keys: string]: Selectable<CalibrationSubjectRank> } = CalibrationSubjectRank._keyFields.reduce((acc: { [keys: string]: Selectable<CalibrationSubjectRank> }, field: Selectable<CalibrationSubjectRank>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
