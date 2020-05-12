/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TrendData_SysOverallCustom1RequestBuilder } from './TrendData_SysOverallCustom1RequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TrendData_SysOverallCustom1" of service "SFOData".
 */
export class TrendData_SysOverallCustom1 extends Entity implements TrendData_SysOverallCustom1Type {
  /**
   * Technical entity name for TrendData_SysOverallCustom1.
   */
  static _entityName = 'TrendData_SysOverallCustom1';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TrendData_SysOverallCustom1.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * description.
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
   * Maxinum Scale Rating.
   * @nullable
   */
  max?: number;
  /**
   * Mininum Scale Rating.
   * @nullable
   */
  min?: number;
  /**
   * Module.
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
   * Returns an entity builder to construct instances `TrendData_SysOverallCustom1`.
   * @returns A builder that constructs instances of entity type `TrendData_SysOverallCustom1`.
   */
  static builder(): EntityBuilderType<TrendData_SysOverallCustom1, TrendData_SysOverallCustom1TypeForceMandatory> {
    return Entity.entityBuilder(TrendData_SysOverallCustom1);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TrendData_SysOverallCustom1` entity type.
   * @returns A `TrendData_SysOverallCustom1` request builder.
   */
  static requestBuilder(): TrendData_SysOverallCustom1RequestBuilder {
    return new TrendData_SysOverallCustom1RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TrendData_SysOverallCustom1`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TrendData_SysOverallCustom1`.
   */
  static customField(fieldName: string): CustomField<TrendData_SysOverallCustom1> {
    return Entity.customFieldSelector(fieldName, TrendData_SysOverallCustom1);
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

export interface TrendData_SysOverallCustom1Type {
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

export interface TrendData_SysOverallCustom1TypeForceMandatory {
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

export namespace TrendData_SysOverallCustom1 {
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<TrendData_SysOverallCustom1> = new StringField('description', TrendData_SysOverallCustom1, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<TrendData_SysOverallCustom1> = new DateField('endDate', TrendData_SysOverallCustom1, 'Edm.DateTime');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<TrendData_SysOverallCustom1> = new BigNumberField('id', TrendData_SysOverallCustom1, 'Edm.Int64');
  /**
   * Static representation of the [[label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL: StringField<TrendData_SysOverallCustom1> = new StringField('label', TrendData_SysOverallCustom1, 'Edm.String');
  /**
   * Static representation of the [[lastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED: DateField<TrendData_SysOverallCustom1> = new DateField('lastModified', TrendData_SysOverallCustom1, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[max]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX: NumberField<TrendData_SysOverallCustom1> = new NumberField('max', TrendData_SysOverallCustom1, 'Edm.Double');
  /**
   * Static representation of the [[min]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIN: NumberField<TrendData_SysOverallCustom1> = new NumberField('min', TrendData_SysOverallCustom1, 'Edm.Double');
  /**
   * Static representation of the [[module]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODULE: StringField<TrendData_SysOverallCustom1> = new StringField('module', TrendData_SysOverallCustom1, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<TrendData_SysOverallCustom1> = new StringField('name', TrendData_SysOverallCustom1, 'Edm.String');
  /**
   * Static representation of the [[rating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING: NumberField<TrendData_SysOverallCustom1> = new NumberField('rating', TrendData_SysOverallCustom1, 'Edm.Double');
  /**
   * Static representation of the [[source]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE: StringField<TrendData_SysOverallCustom1> = new StringField('source', TrendData_SysOverallCustom1, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<TrendData_SysOverallCustom1> = new DateField('startDate', TrendData_SysOverallCustom1, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<TrendData_SysOverallCustom1> = new StringField('userId', TrendData_SysOverallCustom1, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<TrendData_SysOverallCustom1, User> = new OneToOneLink('userIdNav', TrendData_SysOverallCustom1, User);
  /**
   * All fields of the TrendData_SysOverallCustom1 entity.
   */
  export const _allFields: Array<StringField<TrendData_SysOverallCustom1> | DateField<TrendData_SysOverallCustom1> | BigNumberField<TrendData_SysOverallCustom1> | NumberField<TrendData_SysOverallCustom1> | OneToOneLink<TrendData_SysOverallCustom1, User>> = [
    TrendData_SysOverallCustom1.DESCRIPTION,
    TrendData_SysOverallCustom1.END_DATE,
    TrendData_SysOverallCustom1.ID,
    TrendData_SysOverallCustom1.LABEL,
    TrendData_SysOverallCustom1.LAST_MODIFIED,
    TrendData_SysOverallCustom1.MAX,
    TrendData_SysOverallCustom1.MIN,
    TrendData_SysOverallCustom1.MODULE,
    TrendData_SysOverallCustom1.NAME,
    TrendData_SysOverallCustom1.RATING,
    TrendData_SysOverallCustom1.SOURCE,
    TrendData_SysOverallCustom1.START_DATE,
    TrendData_SysOverallCustom1.USER_ID,
    TrendData_SysOverallCustom1.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TrendData_SysOverallCustom1> = new AllFields('*', TrendData_SysOverallCustom1);
  /**
   * All key fields of the TrendData_SysOverallCustom1 entity.
   */
  export const _keyFields: Array<Selectable<TrendData_SysOverallCustom1>> = [TrendData_SysOverallCustom1.ID];
  /**
   * Mapping of all key field names to the respective static field property TrendData_SysOverallCustom1.
   */
  export const _keys: { [keys: string]: Selectable<TrendData_SysOverallCustom1> } = TrendData_SysOverallCustom1._keyFields.reduce((acc: { [keys: string]: Selectable<TrendData_SysOverallCustom1> }, field: Selectable<TrendData_SysOverallCustom1>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
