/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DevGoalCompetencyRequestBuilder } from './DevGoalCompetencyRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DevGoalCompetency" of service "SFOData".
 */
export class DevGoalCompetency extends Entity implements DevGoalCompetencyType {
  /**
   * Technical entity name for DevGoalCompetency.
   */
  static _entityName = 'DevGoalCompetency';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DevGoalCompetency.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * category.
   * @nullable
   */
  category?: string;
  /**
   * id.
   */
  id!: BigNumber;
  /**
   * library.
   * @nullable
   */
  library?: string;
  /**
   * name.
   * @nullable
   */
  name?: string;
  /**
   * objId.
   * @nullable
   */
  objId?: BigNumber;
  /**
   * planId.
   * @nullable
   */
  planId?: BigNumber;
  /**
   * userId.
   * @nullable
   */
  userId?: string;

  /**
   * Returns an entity builder to construct instances `DevGoalCompetency`.
   * @returns A builder that constructs instances of entity type `DevGoalCompetency`.
   */
  static builder(): EntityBuilderType<DevGoalCompetency, DevGoalCompetencyTypeForceMandatory> {
    return Entity.entityBuilder(DevGoalCompetency);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DevGoalCompetency` entity type.
   * @returns A `DevGoalCompetency` request builder.
   */
  static requestBuilder(): DevGoalCompetencyRequestBuilder {
    return new DevGoalCompetencyRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalCompetency`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DevGoalCompetency`.
   */
  static customField(fieldName: string): CustomField<DevGoalCompetency> {
    return Entity.customFieldSelector(fieldName, DevGoalCompetency);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface DevGoalCompetencyType {
  category?: string;
  id: BigNumber;
  library?: string;
  name?: string;
  objId?: BigNumber;
  planId?: BigNumber;
  userId?: string;
}

export interface DevGoalCompetencyTypeForceMandatory {
  category: string;
  id: BigNumber;
  library: string;
  name: string;
  objId: BigNumber;
  planId: BigNumber;
  userId: string;
}

export namespace DevGoalCompetency {
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<DevGoalCompetency> = new StringField('category', DevGoalCompetency, 'Edm.String');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<DevGoalCompetency> = new BigNumberField('id', DevGoalCompetency, 'Edm.Int64');
  /**
   * Static representation of the [[library]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIBRARY: StringField<DevGoalCompetency> = new StringField('library', DevGoalCompetency, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<DevGoalCompetency> = new StringField('name', DevGoalCompetency, 'Edm.String');
  /**
   * Static representation of the [[objId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJ_ID: BigNumberField<DevGoalCompetency> = new BigNumberField('objId', DevGoalCompetency, 'Edm.Int64');
  /**
   * Static representation of the [[planId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLAN_ID: BigNumberField<DevGoalCompetency> = new BigNumberField('planId', DevGoalCompetency, 'Edm.Int64');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<DevGoalCompetency> = new StringField('userId', DevGoalCompetency, 'Edm.String');
  /**
   * All fields of the DevGoalCompetency entity.
   */
  export const _allFields: Array<StringField<DevGoalCompetency> | BigNumberField<DevGoalCompetency>> = [
    DevGoalCompetency.CATEGORY,
    DevGoalCompetency.ID,
    DevGoalCompetency.LIBRARY,
    DevGoalCompetency.NAME,
    DevGoalCompetency.OBJ_ID,
    DevGoalCompetency.PLAN_ID,
    DevGoalCompetency.USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DevGoalCompetency> = new AllFields('*', DevGoalCompetency);
  /**
   * All key fields of the DevGoalCompetency entity.
   */
  export const _keyFields: Array<Selectable<DevGoalCompetency>> = [DevGoalCompetency.ID];
  /**
   * Mapping of all key field names to the respective static field property DevGoalCompetency.
   */
  export const _keys: { [keys: string]: Selectable<DevGoalCompetency> } = DevGoalCompetency._keyFields.reduce((acc: { [keys: string]: Selectable<DevGoalCompetency> }, field: Selectable<DevGoalCompetency>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
