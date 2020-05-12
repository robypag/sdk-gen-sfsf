/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TodoEntryV3RequestBuilder } from './TodoEntryV3RequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TodoEntryV3" of service "SFOData".
 */
export class TodoEntryV3 extends Entity implements TodoEntryV3Type {
  /**
   * Technical entity name for TodoEntryV3.
   */
  static _entityName = 'TodoEntryV3';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TodoEntryV3.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * categoryId.
   */
  categoryId!: string;
  /**
   * categoryLabel.
   * @nullable
   */
  categoryLabel?: string;
  /**
   * completedDateTime.
   * @nullable
   */
  completedDateTime?: Moment;
  /**
   * createDate.
   */
  createdDate!: Moment;
  /**
   * description.
   * @nullable
   */
  description?: string;
  /**
   * displayTitle.
   * @nullable
   */
  displayTitle?: string;
  /**
   * dueDate.
   */
  dueDate!: Moment;
  /**
   * formDataId.
   * @nullable
   */
  formDataId?: number;
  /**
   * lastModifedDateTime.
   */
  lastModifiedDateTime!: Moment;
  /**
   * linkUrl.
   * Maximum length: 2000.
   * @nullable
   */
  linkUrl?: string;
  /**
   * mobileLinkUrl.
   * @nullable
   */
  mobileLinkUrl?: string;
  /**
   * priority.
   * @nullable
   */
  priority?: number;
  /**
   * routingStepOrder.
   * @nullable
   */
  routingStepOrder?: number;
  /**
   * status.
   */
  status!: number;
  /**
   * subjectId.
   * Maximum length: 100.
   * @nullable
   */
  subjectId?: string;
  /**
   * todoEntryId.
   */
  todoEntryId!: BigNumber;
  /**
   * todoEntryName.
   */
  todoEntryName!: string;
  /**
   * One-to-one navigation property to the [[TodoCategory]] entity.
   */
  categoryNav!: TodoCategory;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userNav!: User;

  /**
   * Returns an entity builder to construct instances `TodoEntryV3`.
   * @returns A builder that constructs instances of entity type `TodoEntryV3`.
   */
  static builder(): EntityBuilderType<TodoEntryV3, TodoEntryV3TypeForceMandatory> {
    return Entity.entityBuilder(TodoEntryV3);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TodoEntryV3` entity type.
   * @returns A `TodoEntryV3` request builder.
   */
  static requestBuilder(): TodoEntryV3RequestBuilder {
    return new TodoEntryV3RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TodoEntryV3`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TodoEntryV3`.
   */
  static customField(fieldName: string): CustomField<TodoEntryV3> {
    return Entity.customFieldSelector(fieldName, TodoEntryV3);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { TodoCategory, TodoCategoryType } from './TodoCategory';
import { User, UserType } from './User';

export interface TodoEntryV3Type {
  categoryId: string;
  categoryLabel?: string;
  completedDateTime?: Moment;
  createdDate: Moment;
  description?: string;
  displayTitle?: string;
  dueDate: Moment;
  formDataId?: number;
  lastModifiedDateTime: Moment;
  linkUrl?: string;
  mobileLinkUrl?: string;
  priority?: number;
  routingStepOrder?: number;
  status: number;
  subjectId?: string;
  todoEntryId: BigNumber;
  todoEntryName: string;
  categoryNav: TodoCategoryType;
  userNav: UserType;
}

export interface TodoEntryV3TypeForceMandatory {
  categoryId: string;
  categoryLabel: string;
  completedDateTime: Moment;
  createdDate: Moment;
  description: string;
  displayTitle: string;
  dueDate: Moment;
  formDataId: number;
  lastModifiedDateTime: Moment;
  linkUrl: string;
  mobileLinkUrl: string;
  priority: number;
  routingStepOrder: number;
  status: number;
  subjectId: string;
  todoEntryId: BigNumber;
  todoEntryName: string;
  categoryNav: TodoCategoryType;
  userNav: UserType;
}

export namespace TodoEntryV3 {
  /**
   * Static representation of the [[categoryId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_ID: StringField<TodoEntryV3> = new StringField('categoryId', TodoEntryV3, 'Edm.String');
  /**
   * Static representation of the [[categoryLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_LABEL: StringField<TodoEntryV3> = new StringField('categoryLabel', TodoEntryV3, 'Edm.String');
  /**
   * Static representation of the [[completedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPLETED_DATE_TIME: DateField<TodoEntryV3> = new DateField('completedDateTime', TodoEntryV3, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<TodoEntryV3> = new DateField('createdDate', TodoEntryV3, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<TodoEntryV3> = new StringField('description', TodoEntryV3, 'Edm.String');
  /**
   * Static representation of the [[displayTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISPLAY_TITLE: StringField<TodoEntryV3> = new StringField('displayTitle', TodoEntryV3, 'Edm.String');
  /**
   * Static representation of the [[dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE: DateField<TodoEntryV3> = new DateField('dueDate', TodoEntryV3, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: NumberField<TodoEntryV3> = new NumberField('formDataId', TodoEntryV3, 'Edm.Int32');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TodoEntryV3> = new DateField('lastModifiedDateTime', TodoEntryV3, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[linkUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LINK_URL: StringField<TodoEntryV3> = new StringField('linkUrl', TodoEntryV3, 'Edm.String');
  /**
   * Static representation of the [[mobileLinkUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MOBILE_LINK_URL: StringField<TodoEntryV3> = new StringField('mobileLinkUrl', TodoEntryV3, 'Edm.String');
  /**
   * Static representation of the [[priority]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIORITY: NumberField<TodoEntryV3> = new NumberField('priority', TodoEntryV3, 'Edm.Int32');
  /**
   * Static representation of the [[routingStepOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUTING_STEP_ORDER: NumberField<TodoEntryV3> = new NumberField('routingStepOrder', TodoEntryV3, 'Edm.Int32');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<TodoEntryV3> = new NumberField('status', TodoEntryV3, 'Edm.Int32');
  /**
   * Static representation of the [[subjectId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_ID: StringField<TodoEntryV3> = new StringField('subjectId', TodoEntryV3, 'Edm.String');
  /**
   * Static representation of the [[todoEntryId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TODO_ENTRY_ID: BigNumberField<TodoEntryV3> = new BigNumberField('todoEntryId', TodoEntryV3, 'Edm.Decimal');
  /**
   * Static representation of the [[todoEntryName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TODO_ENTRY_NAME: StringField<TodoEntryV3> = new StringField('todoEntryName', TodoEntryV3, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_NAV: OneToOneLink<TodoEntryV3, TodoCategory> = new OneToOneLink('categoryNav', TodoEntryV3, TodoCategory);
  /**
   * Static representation of the one-to-one navigation property [[userNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAV: OneToOneLink<TodoEntryV3, User> = new OneToOneLink('userNav', TodoEntryV3, User);
  /**
   * All fields of the TodoEntryV3 entity.
   */
  export const _allFields: Array<StringField<TodoEntryV3> | DateField<TodoEntryV3> | NumberField<TodoEntryV3> | BigNumberField<TodoEntryV3> | OneToOneLink<TodoEntryV3, TodoCategory> | OneToOneLink<TodoEntryV3, User>> = [
    TodoEntryV3.CATEGORY_ID,
    TodoEntryV3.CATEGORY_LABEL,
    TodoEntryV3.COMPLETED_DATE_TIME,
    TodoEntryV3.CREATED_DATE,
    TodoEntryV3.DESCRIPTION,
    TodoEntryV3.DISPLAY_TITLE,
    TodoEntryV3.DUE_DATE,
    TodoEntryV3.FORM_DATA_ID,
    TodoEntryV3.LAST_MODIFIED_DATE_TIME,
    TodoEntryV3.LINK_URL,
    TodoEntryV3.MOBILE_LINK_URL,
    TodoEntryV3.PRIORITY,
    TodoEntryV3.ROUTING_STEP_ORDER,
    TodoEntryV3.STATUS,
    TodoEntryV3.SUBJECT_ID,
    TodoEntryV3.TODO_ENTRY_ID,
    TodoEntryV3.TODO_ENTRY_NAME,
    TodoEntryV3.CATEGORY_NAV,
    TodoEntryV3.USER_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TodoEntryV3> = new AllFields('*', TodoEntryV3);
  /**
   * All key fields of the TodoEntryV3 entity.
   */
  export const _keyFields: Array<Selectable<TodoEntryV3>> = [TodoEntryV3.TODO_ENTRY_ID];
  /**
   * Mapping of all key field names to the respective static field property TodoEntryV3.
   */
  export const _keys: { [keys: string]: Selectable<TodoEntryV3> } = TodoEntryV3._keyFields.reduce((acc: { [keys: string]: Selectable<TodoEntryV3> }, field: Selectable<TodoEntryV3>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
