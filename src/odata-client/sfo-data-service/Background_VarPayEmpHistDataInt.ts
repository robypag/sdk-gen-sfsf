/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_VarPayEmpHistDataIntRequestBuilder } from './Background_VarPayEmpHistDataIntRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_VarPayEmpHistDataInt" of service "SFOData".
 */
export class Background_VarPayEmpHistDataInt extends Entity implements Background_VarPayEmpHistDataIntType {
  /**
   * Technical entity name for Background_VarPayEmpHistDataInt.
   */
  static _entityName = 'Background_VarPayEmpHistDataInt';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_VarPayEmpHistDataInt.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * backgroundElementId.
   */
  backgroundElementId!: BigNumber;
  /**
   * Target Amount.
   * @nullable
   */
  basis?: number;
  /**
   * Country.
   * @nullable
   */
  country?: string;
  /**
   * End Date.
   */
  endDate!: Moment;
  /**
   * Incentive Plan.
   * @nullable
   */
  incentivePlan?: string;
  /**
   * Job Grade.
   * @nullable
   */
  jobGrade?: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * Currency.
   * @nullable
   */
  localCurrencyCode?: string;
  /**
   * Record Type.
   * @nullable
   */
  recordType?: string;
  /**
   * Salary.
   * @nullable
   */
  salary?: number;
  /**
   * Start Date.
   */
  startDate!: Moment;
  /**
   * userId.
   */
  userId!: string;
  /**
   * Variable Pay Program Name.
   */
  varPayProgramName!: number;

  /**
   * Returns an entity builder to construct instances `Background_VarPayEmpHistDataInt`.
   * @returns A builder that constructs instances of entity type `Background_VarPayEmpHistDataInt`.
   */
  static builder(): EntityBuilderType<Background_VarPayEmpHistDataInt, Background_VarPayEmpHistDataIntTypeForceMandatory> {
    return Entity.entityBuilder(Background_VarPayEmpHistDataInt);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_VarPayEmpHistDataInt` entity type.
   * @returns A `Background_VarPayEmpHistDataInt` request builder.
   */
  static requestBuilder(): Background_VarPayEmpHistDataIntRequestBuilder {
    return new Background_VarPayEmpHistDataIntRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_VarPayEmpHistDataInt`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_VarPayEmpHistDataInt`.
   */
  static customField(fieldName: string): CustomField<Background_VarPayEmpHistDataInt> {
    return Entity.customFieldSelector(fieldName, Background_VarPayEmpHistDataInt);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Background_VarPayEmpHistDataIntType {
  backgroundElementId: BigNumber;
  basis?: number;
  country?: string;
  endDate: Moment;
  incentivePlan?: string;
  jobGrade?: string;
  lastModifiedDate: Moment;
  localCurrencyCode?: string;
  recordType?: string;
  salary?: number;
  startDate: Moment;
  userId: string;
  varPayProgramName: number;
}

export interface Background_VarPayEmpHistDataIntTypeForceMandatory {
  backgroundElementId: BigNumber;
  basis: number;
  country: string;
  endDate: Moment;
  incentivePlan: string;
  jobGrade: string;
  lastModifiedDate: Moment;
  localCurrencyCode: string;
  recordType: string;
  salary: number;
  startDate: Moment;
  userId: string;
  varPayProgramName: number;
}

export namespace Background_VarPayEmpHistDataInt {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_VarPayEmpHistDataInt> = new BigNumberField('backgroundElementId', Background_VarPayEmpHistDataInt, 'Edm.Int64');
  /**
   * Static representation of the [[basis]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASIS: NumberField<Background_VarPayEmpHistDataInt> = new NumberField('basis', Background_VarPayEmpHistDataInt, 'Edm.Double');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<Background_VarPayEmpHistDataInt> = new StringField('country', Background_VarPayEmpHistDataInt, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<Background_VarPayEmpHistDataInt> = new DateField('endDate', Background_VarPayEmpHistDataInt, 'Edm.DateTime');
  /**
   * Static representation of the [[incentivePlan]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCENTIVE_PLAN: StringField<Background_VarPayEmpHistDataInt> = new StringField('incentivePlan', Background_VarPayEmpHistDataInt, 'Edm.String');
  /**
   * Static representation of the [[jobGrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_GRADE: StringField<Background_VarPayEmpHistDataInt> = new StringField('jobGrade', Background_VarPayEmpHistDataInt, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_VarPayEmpHistDataInt> = new DateField('lastModifiedDate', Background_VarPayEmpHistDataInt, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[localCurrencyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_CURRENCY_CODE: StringField<Background_VarPayEmpHistDataInt> = new StringField('localCurrencyCode', Background_VarPayEmpHistDataInt, 'Edm.String');
  /**
   * Static representation of the [[recordType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_TYPE: StringField<Background_VarPayEmpHistDataInt> = new StringField('recordType', Background_VarPayEmpHistDataInt, 'Edm.String');
  /**
   * Static representation of the [[salary]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALARY: NumberField<Background_VarPayEmpHistDataInt> = new NumberField('salary', Background_VarPayEmpHistDataInt, 'Edm.Double');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<Background_VarPayEmpHistDataInt> = new DateField('startDate', Background_VarPayEmpHistDataInt, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_VarPayEmpHistDataInt> = new StringField('userId', Background_VarPayEmpHistDataInt, 'Edm.String');
  /**
   * Static representation of the [[varPayProgramName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAR_PAY_PROGRAM_NAME: NumberField<Background_VarPayEmpHistDataInt> = new NumberField('varPayProgramName', Background_VarPayEmpHistDataInt, 'Edm.Int32');
  /**
   * All fields of the Background_VarPayEmpHistDataInt entity.
   */
  export const _allFields: Array<BigNumberField<Background_VarPayEmpHistDataInt> | NumberField<Background_VarPayEmpHistDataInt> | StringField<Background_VarPayEmpHistDataInt> | DateField<Background_VarPayEmpHistDataInt>> = [
    Background_VarPayEmpHistDataInt.BACKGROUND_ELEMENT_ID,
    Background_VarPayEmpHistDataInt.BASIS,
    Background_VarPayEmpHistDataInt.COUNTRY,
    Background_VarPayEmpHistDataInt.END_DATE,
    Background_VarPayEmpHistDataInt.INCENTIVE_PLAN,
    Background_VarPayEmpHistDataInt.JOB_GRADE,
    Background_VarPayEmpHistDataInt.LAST_MODIFIED_DATE,
    Background_VarPayEmpHistDataInt.LOCAL_CURRENCY_CODE,
    Background_VarPayEmpHistDataInt.RECORD_TYPE,
    Background_VarPayEmpHistDataInt.SALARY,
    Background_VarPayEmpHistDataInt.START_DATE,
    Background_VarPayEmpHistDataInt.USER_ID,
    Background_VarPayEmpHistDataInt.VAR_PAY_PROGRAM_NAME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_VarPayEmpHistDataInt> = new AllFields('*', Background_VarPayEmpHistDataInt);
  /**
   * All key fields of the Background_VarPayEmpHistDataInt entity.
   */
  export const _keyFields: Array<Selectable<Background_VarPayEmpHistDataInt>> = [Background_VarPayEmpHistDataInt.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_VarPayEmpHistDataInt.
   */
  export const _keys: { [keys: string]: Selectable<Background_VarPayEmpHistDataInt> } = Background_VarPayEmpHistDataInt._keyFields.reduce((acc: { [keys: string]: Selectable<Background_VarPayEmpHistDataInt> }, field: Selectable<Background_VarPayEmpHistDataInt>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
