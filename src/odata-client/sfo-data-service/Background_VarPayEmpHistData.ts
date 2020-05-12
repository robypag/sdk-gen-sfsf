/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_VarPayEmpHistDataRequestBuilder } from './Background_VarPayEmpHistDataRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_VarPayEmpHistData" of service "SFOData".
 */
export class Background_VarPayEmpHistData extends Entity implements Background_VarPayEmpHistDataType {
  /**
   * Technical entity name for Background_VarPayEmpHistData.
   */
  static _entityName = 'Background_VarPayEmpHistData';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_VarPayEmpHistData.
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
   * Job Grade.
   * @nullable
   */
  jobGrade?: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * Location.
   * @nullable
   */
  location?: string;
  /**
   * Salary.
   * @nullable
   */
  salary?: string;
  /**
   * Start Date.
   */
  startDate!: Moment;
  /**
   * Target Percent.
   * @nullable
   */
  tgtPct?: string;
  /**
   * Title.
   * @nullable
   */
  title?: string;
  /**
   * userId.
   */
  userId!: string;
  /**
   * Variable Pay Program Name.
   */
  varPayProgramName!: number;

  /**
   * Returns an entity builder to construct instances `Background_VarPayEmpHistData`.
   * @returns A builder that constructs instances of entity type `Background_VarPayEmpHistData`.
   */
  static builder(): EntityBuilderType<Background_VarPayEmpHistData, Background_VarPayEmpHistDataTypeForceMandatory> {
    return Entity.entityBuilder(Background_VarPayEmpHistData);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_VarPayEmpHistData` entity type.
   * @returns A `Background_VarPayEmpHistData` request builder.
   */
  static requestBuilder(): Background_VarPayEmpHistDataRequestBuilder {
    return new Background_VarPayEmpHistDataRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_VarPayEmpHistData`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_VarPayEmpHistData`.
   */
  static customField(fieldName: string): CustomField<Background_VarPayEmpHistData> {
    return Entity.customFieldSelector(fieldName, Background_VarPayEmpHistData);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Background_VarPayEmpHistDataType {
  backgroundElementId: BigNumber;
  basis?: number;
  country?: string;
  endDate: Moment;
  jobGrade?: string;
  lastModifiedDate: Moment;
  location?: string;
  salary?: string;
  startDate: Moment;
  tgtPct?: string;
  title?: string;
  userId: string;
  varPayProgramName: number;
}

export interface Background_VarPayEmpHistDataTypeForceMandatory {
  backgroundElementId: BigNumber;
  basis: number;
  country: string;
  endDate: Moment;
  jobGrade: string;
  lastModifiedDate: Moment;
  location: string;
  salary: string;
  startDate: Moment;
  tgtPct: string;
  title: string;
  userId: string;
  varPayProgramName: number;
}

export namespace Background_VarPayEmpHistData {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_VarPayEmpHistData> = new BigNumberField('backgroundElementId', Background_VarPayEmpHistData, 'Edm.Int64');
  /**
   * Static representation of the [[basis]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASIS: NumberField<Background_VarPayEmpHistData> = new NumberField('basis', Background_VarPayEmpHistData, 'Edm.Double');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<Background_VarPayEmpHistData> = new StringField('country', Background_VarPayEmpHistData, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<Background_VarPayEmpHistData> = new DateField('endDate', Background_VarPayEmpHistData, 'Edm.DateTime');
  /**
   * Static representation of the [[jobGrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_GRADE: StringField<Background_VarPayEmpHistData> = new StringField('jobGrade', Background_VarPayEmpHistData, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_VarPayEmpHistData> = new DateField('lastModifiedDate', Background_VarPayEmpHistData, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: StringField<Background_VarPayEmpHistData> = new StringField('location', Background_VarPayEmpHistData, 'Edm.String');
  /**
   * Static representation of the [[salary]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALARY: StringField<Background_VarPayEmpHistData> = new StringField('salary', Background_VarPayEmpHistData, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<Background_VarPayEmpHistData> = new DateField('startDate', Background_VarPayEmpHistData, 'Edm.DateTime');
  /**
   * Static representation of the [[tgtPct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TGT_PCT: StringField<Background_VarPayEmpHistData> = new StringField('tgtPct', Background_VarPayEmpHistData, 'Edm.String');
  /**
   * Static representation of the [[title]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE: StringField<Background_VarPayEmpHistData> = new StringField('title', Background_VarPayEmpHistData, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_VarPayEmpHistData> = new StringField('userId', Background_VarPayEmpHistData, 'Edm.String');
  /**
   * Static representation of the [[varPayProgramName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAR_PAY_PROGRAM_NAME: NumberField<Background_VarPayEmpHistData> = new NumberField('varPayProgramName', Background_VarPayEmpHistData, 'Edm.Int32');
  /**
   * All fields of the Background_VarPayEmpHistData entity.
   */
  export const _allFields: Array<BigNumberField<Background_VarPayEmpHistData> | NumberField<Background_VarPayEmpHistData> | StringField<Background_VarPayEmpHistData> | DateField<Background_VarPayEmpHistData>> = [
    Background_VarPayEmpHistData.BACKGROUND_ELEMENT_ID,
    Background_VarPayEmpHistData.BASIS,
    Background_VarPayEmpHistData.COUNTRY,
    Background_VarPayEmpHistData.END_DATE,
    Background_VarPayEmpHistData.JOB_GRADE,
    Background_VarPayEmpHistData.LAST_MODIFIED_DATE,
    Background_VarPayEmpHistData.LOCATION,
    Background_VarPayEmpHistData.SALARY,
    Background_VarPayEmpHistData.START_DATE,
    Background_VarPayEmpHistData.TGT_PCT,
    Background_VarPayEmpHistData.TITLE,
    Background_VarPayEmpHistData.USER_ID,
    Background_VarPayEmpHistData.VAR_PAY_PROGRAM_NAME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_VarPayEmpHistData> = new AllFields('*', Background_VarPayEmpHistData);
  /**
   * All key fields of the Background_VarPayEmpHistData entity.
   */
  export const _keyFields: Array<Selectable<Background_VarPayEmpHistData>> = [Background_VarPayEmpHistData.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_VarPayEmpHistData.
   */
  export const _keys: { [keys: string]: Selectable<Background_VarPayEmpHistData> } = Background_VarPayEmpHistData._keyFields.reduce((acc: { [keys: string]: Selectable<Background_VarPayEmpHistData> }, field: Selectable<Background_VarPayEmpHistData>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
