/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TrendData_SysOverallPerformanceRequestBuilder } from './TrendData_SysOverallPerformanceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TrendData_SysOverallPerformance" of service "SFOData".
 */
export class TrendData_SysOverallPerformance extends Entity implements TrendData_SysOverallPerformanceType {
  /**
   * Technical entity name for TrendData_SysOverallPerformance.
   */
  static _entityName = 'TrendData_SysOverallPerformance';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TrendData_SysOverallPerformance.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * End Date.
   */
  endDate!: Moment;
  /**
   * id.
   */
  id!: BigNumber;
  /**
   * Rating Label.
   * @nullable
   */
  label?: string;
  /**
   * Last Modified.
   * @nullable
   */
  lastModified?: Moment;
  /**
   * Maximum Scale Rating.
   * @nullable
   */
  max?: number;
  /**
   * Minimum Scale Rating.
   * @nullable
   */
  min?: number;
  /**
   * module.
   * @nullable
   */
  module?: string;
  /**
   * name.
   * @nullable
   */
  name?: string;
  /**
   * Rating.
   */
  rating!: number;
  /**
   * source.
   * @nullable
   */
  source?: string;
  /**
   * Start Date.
   */
  startDate!: Moment;
  /**
   * userId.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;

  /**
   * Returns an entity builder to construct instances `TrendData_SysOverallPerformance`.
   * @returns A builder that constructs instances of entity type `TrendData_SysOverallPerformance`.
   */
  static builder(): EntityBuilderType<TrendData_SysOverallPerformance, TrendData_SysOverallPerformanceTypeForceMandatory> {
    return Entity.entityBuilder(TrendData_SysOverallPerformance);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TrendData_SysOverallPerformance` entity type.
   * @returns A `TrendData_SysOverallPerformance` request builder.
   */
  static requestBuilder(): TrendData_SysOverallPerformanceRequestBuilder {
    return new TrendData_SysOverallPerformanceRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TrendData_SysOverallPerformance`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TrendData_SysOverallPerformance`.
   */
  static customField(fieldName: string): CustomField<TrendData_SysOverallPerformance> {
    return Entity.customFieldSelector(fieldName, TrendData_SysOverallPerformance);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { User, UserType } from './User';

export interface TrendData_SysOverallPerformanceType {
  description?: string;
  endDate: Moment;
  id: BigNumber;
  label?: string;
  lastModified?: Moment;
  max?: number;
  min?: number;
  module?: string;
  name?: string;
  rating: number;
  source?: string;
  startDate: Moment;
  userId: string;
  userIdNav: UserType;
}

export interface TrendData_SysOverallPerformanceTypeForceMandatory {
  description: string;
  endDate: Moment;
  id: BigNumber;
  label: string;
  lastModified: Moment;
  max: number;
  min: number;
  module: string;
  name: string;
  rating: number;
  source: string;
  startDate: Moment;
  userId: string;
  userIdNav: UserType;
}

export namespace TrendData_SysOverallPerformance {
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<TrendData_SysOverallPerformance> = new StringField('description', TrendData_SysOverallPerformance, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<TrendData_SysOverallPerformance> = new DateField('endDate', TrendData_SysOverallPerformance, 'Edm.DateTime');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<TrendData_SysOverallPerformance> = new BigNumberField('id', TrendData_SysOverallPerformance, 'Edm.Int64');
  /**
   * Static representation of the [[label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL: StringField<TrendData_SysOverallPerformance> = new StringField('label', TrendData_SysOverallPerformance, 'Edm.String');
  /**
   * Static representation of the [[lastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED: DateField<TrendData_SysOverallPerformance> = new DateField('lastModified', TrendData_SysOverallPerformance, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[max]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX: NumberField<TrendData_SysOverallPerformance> = new NumberField('max', TrendData_SysOverallPerformance, 'Edm.Double');
  /**
   * Static representation of the [[min]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIN: NumberField<TrendData_SysOverallPerformance> = new NumberField('min', TrendData_SysOverallPerformance, 'Edm.Double');
  /**
   * Static representation of the [[module]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODULE: StringField<TrendData_SysOverallPerformance> = new StringField('module', TrendData_SysOverallPerformance, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<TrendData_SysOverallPerformance> = new StringField('name', TrendData_SysOverallPerformance, 'Edm.String');
  /**
   * Static representation of the [[rating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING: NumberField<TrendData_SysOverallPerformance> = new NumberField('rating', TrendData_SysOverallPerformance, 'Edm.Double');
  /**
   * Static representation of the [[source]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE: StringField<TrendData_SysOverallPerformance> = new StringField('source', TrendData_SysOverallPerformance, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<TrendData_SysOverallPerformance> = new DateField('startDate', TrendData_SysOverallPerformance, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<TrendData_SysOverallPerformance> = new StringField('userId', TrendData_SysOverallPerformance, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<TrendData_SysOverallPerformance, User> = new OneToOneLink('userIdNav', TrendData_SysOverallPerformance, User);
  /**
   * All fields of the TrendData_SysOverallPerformance entity.
   */
  export const _allFields: Array<StringField<TrendData_SysOverallPerformance> | DateField<TrendData_SysOverallPerformance> | BigNumberField<TrendData_SysOverallPerformance> | NumberField<TrendData_SysOverallPerformance> | OneToOneLink<TrendData_SysOverallPerformance, User>> = [
    TrendData_SysOverallPerformance.DESCRIPTION,
    TrendData_SysOverallPerformance.END_DATE,
    TrendData_SysOverallPerformance.ID,
    TrendData_SysOverallPerformance.LABEL,
    TrendData_SysOverallPerformance.LAST_MODIFIED,
    TrendData_SysOverallPerformance.MAX,
    TrendData_SysOverallPerformance.MIN,
    TrendData_SysOverallPerformance.MODULE,
    TrendData_SysOverallPerformance.NAME,
    TrendData_SysOverallPerformance.RATING,
    TrendData_SysOverallPerformance.SOURCE,
    TrendData_SysOverallPerformance.START_DATE,
    TrendData_SysOverallPerformance.USER_ID,
    TrendData_SysOverallPerformance.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TrendData_SysOverallPerformance> = new AllFields('*', TrendData_SysOverallPerformance);
  /**
   * All key fields of the TrendData_SysOverallPerformance entity.
   */
  export const _keyFields: Array<Selectable<TrendData_SysOverallPerformance>> = [TrendData_SysOverallPerformance.ID];
  /**
   * Mapping of all key field names to the respective static field property TrendData_SysOverallPerformance.
   */
  export const _keys: { [keys: string]: Selectable<TrendData_SysOverallPerformance> } = TrendData_SysOverallPerformance._keyFields.reduce((acc: { [keys: string]: Selectable<TrendData_SysOverallPerformance> }, field: Selectable<TrendData_SysOverallPerformance>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
