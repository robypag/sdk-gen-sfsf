/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpCompensationCalculatedRequestBuilder } from './EmpCompensationCalculatedRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmpCompensationCalculated" of service "SFOData".
 */
export class EmpCompensationCalculated extends Entity implements EmpCompensationCalculatedType {
  /**
   * Technical entity name for EmpCompensationCalculated.
   */
  static _entityName = 'EmpCompensationCalculated';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmpCompensationCalculated.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * compaRatio.
   * @nullable
   */
  compaRatio?: number;
  /**
   * errorCode.
   * @nullable
   */
  errorCode?: string;
  /**
   * errorMessage.
   * @nullable
   */
  errorMessage?: string;
  /**
   * rangePenetration.
   * @nullable
   */
  rangePenetration?: number;
  /**
   * seqNumber.
   */
  seqNumber!: BigNumber;
  /**
   * startDate.
   */
  startDate!: Moment;
  /**
   * userId.
   */
  userId!: string;

  /**
   * Returns an entity builder to construct instances `EmpCompensationCalculated`.
   * @returns A builder that constructs instances of entity type `EmpCompensationCalculated`.
   */
  static builder(): EntityBuilderType<EmpCompensationCalculated, EmpCompensationCalculatedTypeForceMandatory> {
    return Entity.entityBuilder(EmpCompensationCalculated);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmpCompensationCalculated` entity type.
   * @returns A `EmpCompensationCalculated` request builder.
   */
  static requestBuilder(): EmpCompensationCalculatedRequestBuilder {
    return new EmpCompensationCalculatedRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpCompensationCalculated`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmpCompensationCalculated`.
   */
  static customField(fieldName: string): CustomField<EmpCompensationCalculated> {
    return Entity.customFieldSelector(fieldName, EmpCompensationCalculated);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface EmpCompensationCalculatedType {
  compaRatio?: number;
  errorCode?: string;
  errorMessage?: string;
  rangePenetration?: number;
  seqNumber: BigNumber;
  startDate: Moment;
  userId: string;
}

export interface EmpCompensationCalculatedTypeForceMandatory {
  compaRatio: number;
  errorCode: string;
  errorMessage: string;
  rangePenetration: number;
  seqNumber: BigNumber;
  startDate: Moment;
  userId: string;
}

export namespace EmpCompensationCalculated {
  /**
   * Static representation of the [[compaRatio]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPA_RATIO: NumberField<EmpCompensationCalculated> = new NumberField('compaRatio', EmpCompensationCalculated, 'Edm.Double');
  /**
   * Static representation of the [[errorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ERROR_CODE: StringField<EmpCompensationCalculated> = new StringField('errorCode', EmpCompensationCalculated, 'Edm.String');
  /**
   * Static representation of the [[errorMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ERROR_MESSAGE: StringField<EmpCompensationCalculated> = new StringField('errorMessage', EmpCompensationCalculated, 'Edm.String');
  /**
   * Static representation of the [[rangePenetration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RANGE_PENETRATION: NumberField<EmpCompensationCalculated> = new NumberField('rangePenetration', EmpCompensationCalculated, 'Edm.Double');
  /**
   * Static representation of the [[seqNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQ_NUMBER: BigNumberField<EmpCompensationCalculated> = new BigNumberField('seqNumber', EmpCompensationCalculated, 'Edm.Int64');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<EmpCompensationCalculated> = new DateField('startDate', EmpCompensationCalculated, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmpCompensationCalculated> = new StringField('userId', EmpCompensationCalculated, 'Edm.String');
  /**
   * All fields of the EmpCompensationCalculated entity.
   */
  export const _allFields: Array<NumberField<EmpCompensationCalculated> | StringField<EmpCompensationCalculated> | BigNumberField<EmpCompensationCalculated> | DateField<EmpCompensationCalculated>> = [
    EmpCompensationCalculated.COMPA_RATIO,
    EmpCompensationCalculated.ERROR_CODE,
    EmpCompensationCalculated.ERROR_MESSAGE,
    EmpCompensationCalculated.RANGE_PENETRATION,
    EmpCompensationCalculated.SEQ_NUMBER,
    EmpCompensationCalculated.START_DATE,
    EmpCompensationCalculated.USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmpCompensationCalculated> = new AllFields('*', EmpCompensationCalculated);
  /**
   * All key fields of the EmpCompensationCalculated entity.
   */
  export const _keyFields: Array<Selectable<EmpCompensationCalculated>> = [EmpCompensationCalculated.SEQ_NUMBER, EmpCompensationCalculated.START_DATE, EmpCompensationCalculated.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property EmpCompensationCalculated.
   */
  export const _keys: { [keys: string]: Selectable<EmpCompensationCalculated> } = EmpCompensationCalculated._keyFields.reduce((acc: { [keys: string]: Selectable<EmpCompensationCalculated> }, field: Selectable<EmpCompensationCalculated>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
