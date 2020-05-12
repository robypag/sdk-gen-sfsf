/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TrendData_SysOverallObjectiveRequestBuilder } from './TrendData_SysOverallObjectiveRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TrendData_SysOverallObjective" of service "SFOData".
 */
export class TrendData_SysOverallObjective extends Entity implements TrendData_SysOverallObjectiveType {
  /**
   * Technical entity name for TrendData_SysOverallObjective.
   */
  static _entityName = 'TrendData_SysOverallObjective';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TrendData_SysOverallObjective.
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
   * label.
   * @nullable
   */
  label?: string;
  /**
   * Last Modified.
   * @nullable
   */
  lastModified?: Moment;
  /**
   * max.
   * @nullable
   */
  max?: number;
  /**
   * min.
   * @nullable
   */
  min?: number;
  /**
   * Module.
   * @nullable
   */
  module?: string;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Rating.
   */
  rating!: number;
  /**
   * Source.
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
   * Returns an entity builder to construct instances `TrendData_SysOverallObjective`.
   * @returns A builder that constructs instances of entity type `TrendData_SysOverallObjective`.
   */
  static builder(): EntityBuilderType<TrendData_SysOverallObjective, TrendData_SysOverallObjectiveTypeForceMandatory> {
    return Entity.entityBuilder(TrendData_SysOverallObjective);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TrendData_SysOverallObjective` entity type.
   * @returns A `TrendData_SysOverallObjective` request builder.
   */
  static requestBuilder(): TrendData_SysOverallObjectiveRequestBuilder {
    return new TrendData_SysOverallObjectiveRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TrendData_SysOverallObjective`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TrendData_SysOverallObjective`.
   */
  static customField(fieldName: string): CustomField<TrendData_SysOverallObjective> {
    return Entity.customFieldSelector(fieldName, TrendData_SysOverallObjective);
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

export interface TrendData_SysOverallObjectiveType {
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

export interface TrendData_SysOverallObjectiveTypeForceMandatory {
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

export namespace TrendData_SysOverallObjective {
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<TrendData_SysOverallObjective> = new StringField('description', TrendData_SysOverallObjective, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<TrendData_SysOverallObjective> = new DateField('endDate', TrendData_SysOverallObjective, 'Edm.DateTime');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<TrendData_SysOverallObjective> = new BigNumberField('id', TrendData_SysOverallObjective, 'Edm.Int64');
  /**
   * Static representation of the [[label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL: StringField<TrendData_SysOverallObjective> = new StringField('label', TrendData_SysOverallObjective, 'Edm.String');
  /**
   * Static representation of the [[lastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED: DateField<TrendData_SysOverallObjective> = new DateField('lastModified', TrendData_SysOverallObjective, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[max]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX: NumberField<TrendData_SysOverallObjective> = new NumberField('max', TrendData_SysOverallObjective, 'Edm.Double');
  /**
   * Static representation of the [[min]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIN: NumberField<TrendData_SysOverallObjective> = new NumberField('min', TrendData_SysOverallObjective, 'Edm.Double');
  /**
   * Static representation of the [[module]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODULE: StringField<TrendData_SysOverallObjective> = new StringField('module', TrendData_SysOverallObjective, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<TrendData_SysOverallObjective> = new StringField('name', TrendData_SysOverallObjective, 'Edm.String');
  /**
   * Static representation of the [[rating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING: NumberField<TrendData_SysOverallObjective> = new NumberField('rating', TrendData_SysOverallObjective, 'Edm.Double');
  /**
   * Static representation of the [[source]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE: StringField<TrendData_SysOverallObjective> = new StringField('source', TrendData_SysOverallObjective, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<TrendData_SysOverallObjective> = new DateField('startDate', TrendData_SysOverallObjective, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<TrendData_SysOverallObjective> = new StringField('userId', TrendData_SysOverallObjective, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<TrendData_SysOverallObjective, User> = new OneToOneLink('userIdNav', TrendData_SysOverallObjective, User);
  /**
   * All fields of the TrendData_SysOverallObjective entity.
   */
  export const _allFields: Array<StringField<TrendData_SysOverallObjective> | DateField<TrendData_SysOverallObjective> | BigNumberField<TrendData_SysOverallObjective> | NumberField<TrendData_SysOverallObjective> | OneToOneLink<TrendData_SysOverallObjective, User>> = [
    TrendData_SysOverallObjective.DESCRIPTION,
    TrendData_SysOverallObjective.END_DATE,
    TrendData_SysOverallObjective.ID,
    TrendData_SysOverallObjective.LABEL,
    TrendData_SysOverallObjective.LAST_MODIFIED,
    TrendData_SysOverallObjective.MAX,
    TrendData_SysOverallObjective.MIN,
    TrendData_SysOverallObjective.MODULE,
    TrendData_SysOverallObjective.NAME,
    TrendData_SysOverallObjective.RATING,
    TrendData_SysOverallObjective.SOURCE,
    TrendData_SysOverallObjective.START_DATE,
    TrendData_SysOverallObjective.USER_ID,
    TrendData_SysOverallObjective.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TrendData_SysOverallObjective> = new AllFields('*', TrendData_SysOverallObjective);
  /**
   * All key fields of the TrendData_SysOverallObjective entity.
   */
  export const _keyFields: Array<Selectable<TrendData_SysOverallObjective>> = [TrendData_SysOverallObjective.ID];
  /**
   * Mapping of all key field names to the respective static field property TrendData_SysOverallObjective.
   */
  export const _keys: { [keys: string]: Selectable<TrendData_SysOverallObjective> } = TrendData_SysOverallObjective._keyFields.reduce((acc: { [keys: string]: Selectable<TrendData_SysOverallObjective> }, field: Selectable<TrendData_SysOverallObjective>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
