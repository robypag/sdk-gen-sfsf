/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DevLearning_4201RequestBuilder } from './DevLearning_4201RequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DevLearning_4201" of service "SFOData".
 */
export class DevLearning_4201 extends Entity implements DevLearning_4201Type {
  /**
   * Technical entity name for DevLearning_4201.
   */
  static _entityName = 'DevLearning_4201';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DevLearning_4201.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Employee.
   * @nullable
   */
  assignee?: string;
  /**
   * Completed Date.
   * @nullable
   */
  completedDate?: Moment;
  /**
   * Learning Activity Type.
   * @nullable
   */
  customtext1?: string;
  /**
   * Learning Description.
   * @nullable
   */
  description?: string;
  /**
   * Development Goals.
   * @nullable
   */
  devGoals?: string;
  /**
   * Product Key.
   * @nullable
   */
  guid?: string;
  /**
   * learningId.
   */
  learningId!: BigNumber;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Learning Nature.
   * @nullable
   */
  sourceType?: string;
  /**
   * Learning Status.
   * @nullable
   */
  status?: string;
  /**
   * Catalog Type.
   * @nullable
   */
  type?: string;
  /**
   * userId.
   * @nullable
   */
  userId?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  learningUserIdNavigation!: User;

  /**
   * Returns an entity builder to construct instances `DevLearning_4201`.
   * @returns A builder that constructs instances of entity type `DevLearning_4201`.
   */
  static builder(): EntityBuilderType<DevLearning_4201, DevLearning_4201TypeForceMandatory> {
    return Entity.entityBuilder(DevLearning_4201);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DevLearning_4201` entity type.
   * @returns A `DevLearning_4201` request builder.
   */
  static requestBuilder(): DevLearning_4201RequestBuilder {
    return new DevLearning_4201RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevLearning_4201`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DevLearning_4201`.
   */
  static customField(fieldName: string): CustomField<DevLearning_4201> {
    return Entity.customFieldSelector(fieldName, DevLearning_4201);
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

export interface DevLearning_4201Type {
  assignee?: string;
  completedDate?: Moment;
  customtext1?: string;
  description?: string;
  devGoals?: string;
  guid?: string;
  learningId: BigNumber;
  name?: string;
  sourceType?: string;
  status?: string;
  type?: string;
  userId?: string;
  learningUserIdNavigation: UserType;
}

export interface DevLearning_4201TypeForceMandatory {
  assignee: string;
  completedDate: Moment;
  customtext1: string;
  description: string;
  devGoals: string;
  guid: string;
  learningId: BigNumber;
  name: string;
  sourceType: string;
  status: string;
  type: string;
  userId: string;
  learningUserIdNavigation: UserType;
}

export namespace DevLearning_4201 {
  /**
   * Static representation of the [[assignee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNEE: StringField<DevLearning_4201> = new StringField('assignee', DevLearning_4201, 'Edm.String');
  /**
   * Static representation of the [[completedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPLETED_DATE: DateField<DevLearning_4201> = new DateField('completed_date', DevLearning_4201, 'Edm.DateTime');
  /**
   * Static representation of the [[customtext1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMTEXT_1: StringField<DevLearning_4201> = new StringField('customtext1', DevLearning_4201, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<DevLearning_4201> = new StringField('description', DevLearning_4201, 'Edm.String');
  /**
   * Static representation of the [[devGoals]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEV_GOALS: StringField<DevLearning_4201> = new StringField('dev_goals', DevLearning_4201, 'Edm.String');
  /**
   * Static representation of the [[guid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GUID: StringField<DevLearning_4201> = new StringField('guid', DevLearning_4201, 'Edm.String');
  /**
   * Static representation of the [[learningId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEARNING_ID: BigNumberField<DevLearning_4201> = new BigNumberField('learningId', DevLearning_4201, 'Edm.Int64');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<DevLearning_4201> = new StringField('name', DevLearning_4201, 'Edm.String');
  /**
   * Static representation of the [[sourceType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_TYPE: StringField<DevLearning_4201> = new StringField('source_type', DevLearning_4201, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<DevLearning_4201> = new StringField('status', DevLearning_4201, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<DevLearning_4201> = new StringField('type', DevLearning_4201, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<DevLearning_4201> = new StringField('userId', DevLearning_4201, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[learningUserIdNavigation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEARNING_USER_ID_NAVIGATION: OneToOneLink<DevLearning_4201, User> = new OneToOneLink('LearningUserIdNavigation', DevLearning_4201, User);
  /**
   * All fields of the DevLearning_4201 entity.
   */
  export const _allFields: Array<StringField<DevLearning_4201> | DateField<DevLearning_4201> | BigNumberField<DevLearning_4201> | OneToOneLink<DevLearning_4201, User>> = [
    DevLearning_4201.ASSIGNEE,
    DevLearning_4201.COMPLETED_DATE,
    DevLearning_4201.CUSTOMTEXT_1,
    DevLearning_4201.DESCRIPTION,
    DevLearning_4201.DEV_GOALS,
    DevLearning_4201.GUID,
    DevLearning_4201.LEARNING_ID,
    DevLearning_4201.NAME,
    DevLearning_4201.SOURCE_TYPE,
    DevLearning_4201.STATUS,
    DevLearning_4201.TYPE,
    DevLearning_4201.USER_ID,
    DevLearning_4201.LEARNING_USER_ID_NAVIGATION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DevLearning_4201> = new AllFields('*', DevLearning_4201);
  /**
   * All key fields of the DevLearning_4201 entity.
   */
  export const _keyFields: Array<Selectable<DevLearning_4201>> = [DevLearning_4201.LEARNING_ID];
  /**
   * Mapping of all key field names to the respective static field property DevLearning_4201.
   */
  export const _keys: { [keys: string]: Selectable<DevLearning_4201> } = DevLearning_4201._keyFields.reduce((acc: { [keys: string]: Selectable<DevLearning_4201> }, field: Selectable<DevLearning_4201>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
