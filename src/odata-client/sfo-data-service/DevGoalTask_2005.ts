/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DevGoalTask_2005RequestBuilder } from './DevGoalTask_2005RequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DevGoalTask_2005" of service "SFOData".
 */
export class DevGoalTask_2005 extends Entity implements DevGoalTask_2005Type {
  /**
   * Technical entity name for DevGoalTask_2005.
   */
  static _entityName = 'DevGoalTask_2005';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DevGoalTask_2005.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Development Action.
   * @nullable
   */
  description?: string;
  /**
   * Date.
   * @nullable
   */
  due?: Moment;
  /**
   * flag.
   * @nullable
   */
  flag?: BigNumber;
  /**
   * id.
   */
  id!: BigNumber;
  /**
   * index.
   * @nullable
   */
  index?: number;
  /**
   * lastModified.
   * @nullable
   */
  lastModified?: Moment;
  /**
   * modifier.
   * @nullable
   */
  modifier?: string;
  /**
   * objId.
   * @nullable
   */
  objId?: BigNumber;

  /**
   * Returns an entity builder to construct instances `DevGoalTask_2005`.
   * @returns A builder that constructs instances of entity type `DevGoalTask_2005`.
   */
  static builder(): EntityBuilderType<DevGoalTask_2005, DevGoalTask_2005TypeForceMandatory> {
    return Entity.entityBuilder(DevGoalTask_2005);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DevGoalTask_2005` entity type.
   * @returns A `DevGoalTask_2005` request builder.
   */
  static requestBuilder(): DevGoalTask_2005RequestBuilder {
    return new DevGoalTask_2005RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalTask_2005`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DevGoalTask_2005`.
   */
  static customField(fieldName: string): CustomField<DevGoalTask_2005> {
    return Entity.customFieldSelector(fieldName, DevGoalTask_2005);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface DevGoalTask_2005Type {
  description?: string;
  due?: Moment;
  flag?: BigNumber;
  id: BigNumber;
  index?: number;
  lastModified?: Moment;
  modifier?: string;
  objId?: BigNumber;
}

export interface DevGoalTask_2005TypeForceMandatory {
  description: string;
  due: Moment;
  flag: BigNumber;
  id: BigNumber;
  index: number;
  lastModified: Moment;
  modifier: string;
  objId: BigNumber;
}

export namespace DevGoalTask_2005 {
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<DevGoalTask_2005> = new StringField('description', DevGoalTask_2005, 'Edm.String');
  /**
   * Static representation of the [[due]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE: DateField<DevGoalTask_2005> = new DateField('due', DevGoalTask_2005, 'Edm.DateTime');
  /**
   * Static representation of the [[flag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG: BigNumberField<DevGoalTask_2005> = new BigNumberField('flag', DevGoalTask_2005, 'Edm.Int64');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<DevGoalTask_2005> = new BigNumberField('id', DevGoalTask_2005, 'Edm.Int64');
  /**
   * Static representation of the [[index]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDEX: NumberField<DevGoalTask_2005> = new NumberField('index', DevGoalTask_2005, 'Edm.Int32');
  /**
   * Static representation of the [[lastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED: DateField<DevGoalTask_2005> = new DateField('lastModified', DevGoalTask_2005, 'Edm.DateTime');
  /**
   * Static representation of the [[modifier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODIFIER: StringField<DevGoalTask_2005> = new StringField('modifier', DevGoalTask_2005, 'Edm.String');
  /**
   * Static representation of the [[objId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJ_ID: BigNumberField<DevGoalTask_2005> = new BigNumberField('objId', DevGoalTask_2005, 'Edm.Int64');
  /**
   * All fields of the DevGoalTask_2005 entity.
   */
  export const _allFields: Array<StringField<DevGoalTask_2005> | DateField<DevGoalTask_2005> | BigNumberField<DevGoalTask_2005> | NumberField<DevGoalTask_2005>> = [
    DevGoalTask_2005.DESCRIPTION,
    DevGoalTask_2005.DUE,
    DevGoalTask_2005.FLAG,
    DevGoalTask_2005.ID,
    DevGoalTask_2005.INDEX,
    DevGoalTask_2005.LAST_MODIFIED,
    DevGoalTask_2005.MODIFIER,
    DevGoalTask_2005.OBJ_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DevGoalTask_2005> = new AllFields('*', DevGoalTask_2005);
  /**
   * All key fields of the DevGoalTask_2005 entity.
   */
  export const _keyFields: Array<Selectable<DevGoalTask_2005>> = [DevGoalTask_2005.ID];
  /**
   * Mapping of all key field names to the respective static field property DevGoalTask_2005.
   */
  export const _keys: { [keys: string]: Selectable<DevGoalTask_2005> } = DevGoalTask_2005._keyFields.reduce((acc: { [keys: string]: Selectable<DevGoalTask_2005> }, field: Selectable<DevGoalTask_2005>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
