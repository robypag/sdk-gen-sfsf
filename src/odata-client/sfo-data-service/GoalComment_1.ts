/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GoalComment_1RequestBuilder } from './GoalComment_1RequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "GoalComment_1" of service "SFOData".
 */
export class GoalComment_1 extends Entity implements GoalComment_1Type {
  /**
   * Technical entity name for GoalComment_1.
   */
  static _entityName = 'GoalComment_1';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for GoalComment_1.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * commentator.
   * @nullable
   */
  commentator?: string;
  /**
   * content.
   * @nullable
   */
  content?: string;
  /**
   * id.
   */
  id!: BigNumber;
  /**
   * lastModified.
   * @nullable
   */
  lastModified?: Moment;
  /**
   * objId.
   * @nullable
   */
  objId?: BigNumber;

  /**
   * Returns an entity builder to construct instances `GoalComment_1`.
   * @returns A builder that constructs instances of entity type `GoalComment_1`.
   */
  static builder(): EntityBuilderType<GoalComment_1, GoalComment_1TypeForceMandatory> {
    return Entity.entityBuilder(GoalComment_1);
  }

  /**
   * Returns a request builder to construct requests for operations on the `GoalComment_1` entity type.
   * @returns A `GoalComment_1` request builder.
   */
  static requestBuilder(): GoalComment_1RequestBuilder {
    return new GoalComment_1RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalComment_1`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `GoalComment_1`.
   */
  static customField(fieldName: string): CustomField<GoalComment_1> {
    return Entity.customFieldSelector(fieldName, GoalComment_1);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface GoalComment_1Type {
  commentator?: string;
  content?: string;
  id: BigNumber;
  lastModified?: Moment;
  objId?: BigNumber;
}

export interface GoalComment_1TypeForceMandatory {
  commentator: string;
  content: string;
  id: BigNumber;
  lastModified: Moment;
  objId: BigNumber;
}

export namespace GoalComment_1 {
  /**
   * Static representation of the [[commentator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTATOR: StringField<GoalComment_1> = new StringField('commentator', GoalComment_1, 'Edm.String');
  /**
   * Static representation of the [[content]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTENT: StringField<GoalComment_1> = new StringField('content', GoalComment_1, 'Edm.String');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<GoalComment_1> = new BigNumberField('id', GoalComment_1, 'Edm.Int64');
  /**
   * Static representation of the [[lastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED: DateField<GoalComment_1> = new DateField('lastModified', GoalComment_1, 'Edm.DateTime');
  /**
   * Static representation of the [[objId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJ_ID: BigNumberField<GoalComment_1> = new BigNumberField('objId', GoalComment_1, 'Edm.Int64');
  /**
   * All fields of the GoalComment_1 entity.
   */
  export const _allFields: Array<StringField<GoalComment_1> | BigNumberField<GoalComment_1> | DateField<GoalComment_1>> = [
    GoalComment_1.COMMENTATOR,
    GoalComment_1.CONTENT,
    GoalComment_1.ID,
    GoalComment_1.LAST_MODIFIED,
    GoalComment_1.OBJ_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<GoalComment_1> = new AllFields('*', GoalComment_1);
  /**
   * All key fields of the GoalComment_1 entity.
   */
  export const _keyFields: Array<Selectable<GoalComment_1>> = [GoalComment_1.ID];
  /**
   * Mapping of all key field names to the respective static field property GoalComment_1.
   */
  export const _keys: { [keys: string]: Selectable<GoalComment_1> } = GoalComment_1._keyFields.reduce((acc: { [keys: string]: Selectable<GoalComment_1> }, field: Selectable<GoalComment_1>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
