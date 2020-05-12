/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpCompensationGroupSumCalculatedRequestBuilder } from './EmpCompensationGroupSumCalculatedRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmpCompensationGroupSumCalculated" of service "SFOData".
 */
export class EmpCompensationGroupSumCalculated extends Entity implements EmpCompensationGroupSumCalculatedType {
  /**
   * Technical entity name for EmpCompensationGroupSumCalculated.
   */
  static _entityName = 'EmpCompensationGroupSumCalculated';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmpCompensationGroupSumCalculated.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * amount.
   * @nullable
   */
  amount?: number;
  /**
   * currencyCode.
   * @nullable
   */
  currencyCode?: string;
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
   * payComponentGroupId.
   * @nullable
   */
  payComponentGroupId?: string;
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
   * Returns an entity builder to construct instances `EmpCompensationGroupSumCalculated`.
   * @returns A builder that constructs instances of entity type `EmpCompensationGroupSumCalculated`.
   */
  static builder(): EntityBuilderType<EmpCompensationGroupSumCalculated, EmpCompensationGroupSumCalculatedTypeForceMandatory> {
    return Entity.entityBuilder(EmpCompensationGroupSumCalculated);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmpCompensationGroupSumCalculated` entity type.
   * @returns A `EmpCompensationGroupSumCalculated` request builder.
   */
  static requestBuilder(): EmpCompensationGroupSumCalculatedRequestBuilder {
    return new EmpCompensationGroupSumCalculatedRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpCompensationGroupSumCalculated`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmpCompensationGroupSumCalculated`.
   */
  static customField(fieldName: string): CustomField<EmpCompensationGroupSumCalculated> {
    return Entity.customFieldSelector(fieldName, EmpCompensationGroupSumCalculated);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface EmpCompensationGroupSumCalculatedType {
  amount?: number;
  currencyCode?: string;
  errorCode?: string;
  errorMessage?: string;
  payComponentGroupId?: string;
  seqNumber: BigNumber;
  startDate: Moment;
  userId: string;
}

export interface EmpCompensationGroupSumCalculatedTypeForceMandatory {
  amount: number;
  currencyCode: string;
  errorCode: string;
  errorMessage: string;
  payComponentGroupId: string;
  seqNumber: BigNumber;
  startDate: Moment;
  userId: string;
}

export namespace EmpCompensationGroupSumCalculated {
  /**
   * Static representation of the [[amount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT: NumberField<EmpCompensationGroupSumCalculated> = new NumberField('amount', EmpCompensationGroupSumCalculated, 'Edm.Double');
  /**
   * Static representation of the [[currencyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_CODE: StringField<EmpCompensationGroupSumCalculated> = new StringField('currencyCode', EmpCompensationGroupSumCalculated, 'Edm.String');
  /**
   * Static representation of the [[errorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ERROR_CODE: StringField<EmpCompensationGroupSumCalculated> = new StringField('errorCode', EmpCompensationGroupSumCalculated, 'Edm.String');
  /**
   * Static representation of the [[errorMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ERROR_MESSAGE: StringField<EmpCompensationGroupSumCalculated> = new StringField('errorMessage', EmpCompensationGroupSumCalculated, 'Edm.String');
  /**
   * Static representation of the [[payComponentGroupId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_GROUP_ID: StringField<EmpCompensationGroupSumCalculated> = new StringField('payComponentGroupId', EmpCompensationGroupSumCalculated, 'Edm.String');
  /**
   * Static representation of the [[seqNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQ_NUMBER: BigNumberField<EmpCompensationGroupSumCalculated> = new BigNumberField('seqNumber', EmpCompensationGroupSumCalculated, 'Edm.Int64');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<EmpCompensationGroupSumCalculated> = new DateField('startDate', EmpCompensationGroupSumCalculated, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmpCompensationGroupSumCalculated> = new StringField('userId', EmpCompensationGroupSumCalculated, 'Edm.String');
  /**
   * All fields of the EmpCompensationGroupSumCalculated entity.
   */
  export const _allFields: Array<NumberField<EmpCompensationGroupSumCalculated> | StringField<EmpCompensationGroupSumCalculated> | BigNumberField<EmpCompensationGroupSumCalculated> | DateField<EmpCompensationGroupSumCalculated>> = [
    EmpCompensationGroupSumCalculated.AMOUNT,
    EmpCompensationGroupSumCalculated.CURRENCY_CODE,
    EmpCompensationGroupSumCalculated.ERROR_CODE,
    EmpCompensationGroupSumCalculated.ERROR_MESSAGE,
    EmpCompensationGroupSumCalculated.PAY_COMPONENT_GROUP_ID,
    EmpCompensationGroupSumCalculated.SEQ_NUMBER,
    EmpCompensationGroupSumCalculated.START_DATE,
    EmpCompensationGroupSumCalculated.USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmpCompensationGroupSumCalculated> = new AllFields('*', EmpCompensationGroupSumCalculated);
  /**
   * All key fields of the EmpCompensationGroupSumCalculated entity.
   */
  export const _keyFields: Array<Selectable<EmpCompensationGroupSumCalculated>> = [EmpCompensationGroupSumCalculated.SEQ_NUMBER, EmpCompensationGroupSumCalculated.START_DATE, EmpCompensationGroupSumCalculated.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property EmpCompensationGroupSumCalculated.
   */
  export const _keys: { [keys: string]: Selectable<EmpCompensationGroupSumCalculated> } = EmpCompensationGroupSumCalculated._keyFields.reduce((acc: { [keys: string]: Selectable<EmpCompensationGroupSumCalculated> }, field: Selectable<EmpCompensationGroupSumCalculated>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
