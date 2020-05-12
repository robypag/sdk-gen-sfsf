/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TodoEntryV2RequestBuilder } from './TodoEntryV2RequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TodoEntryV2" of service "SFOData".
 */
export class TodoEntryV2 extends Entity implements TodoEntryV2Type {
  /**
   * Technical entity name for TodoEntryV2.
   */
  static _entityName = 'TodoEntryV2';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TodoEntryV2.
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
   * dueDate.
   * @nullable
   */
  dueDate?: Moment;
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
   * One-to-many navigation property to the [[FormContent]] entity.
   */
  formContentNav!: FormContent[];
  /**
   * One-to-one navigation property to the [[JobOffer]] entity.
   */
  recruitingJobOfferNav!: JobOffer;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userNav!: User;
  /**
   * One-to-one navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest;

  /**
   * Returns an entity builder to construct instances `TodoEntryV2`.
   * @returns A builder that constructs instances of entity type `TodoEntryV2`.
   */
  static builder(): EntityBuilderType<TodoEntryV2, TodoEntryV2TypeForceMandatory> {
    return Entity.entityBuilder(TodoEntryV2);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TodoEntryV2` entity type.
   * @returns A `TodoEntryV2` request builder.
   */
  static requestBuilder(): TodoEntryV2RequestBuilder {
    return new TodoEntryV2RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TodoEntryV2`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TodoEntryV2`.
   */
  static customField(fieldName: string): CustomField<TodoEntryV2> {
    return Entity.customFieldSelector(fieldName, TodoEntryV2);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormContent, FormContentType } from './FormContent';
import { JobOffer, JobOfferType } from './JobOffer';
import { User, UserType } from './User';
import { WfRequest, WfRequestType } from './WfRequest';

export interface TodoEntryV2Type {
  categoryId: string;
  categoryLabel?: string;
  completedDateTime?: Moment;
  createdDate: Moment;
  dueDate?: Moment;
  formDataId?: number;
  lastModifiedDateTime: Moment;
  linkUrl?: string;
  mobileLinkUrl?: string;
  routingStepOrder?: number;
  status: number;
  subjectId?: string;
  todoEntryId: BigNumber;
  todoEntryName: string;
  formContentNav: FormContentType[];
  recruitingJobOfferNav: JobOfferType;
  userNav: UserType;
  wfRequestNav: WfRequestType;
}

export interface TodoEntryV2TypeForceMandatory {
  categoryId: string;
  categoryLabel: string;
  completedDateTime: Moment;
  createdDate: Moment;
  dueDate: Moment;
  formDataId: number;
  lastModifiedDateTime: Moment;
  linkUrl: string;
  mobileLinkUrl: string;
  routingStepOrder: number;
  status: number;
  subjectId: string;
  todoEntryId: BigNumber;
  todoEntryName: string;
  formContentNav: FormContentType[];
  recruitingJobOfferNav: JobOfferType;
  userNav: UserType;
  wfRequestNav: WfRequestType;
}

export namespace TodoEntryV2 {
  /**
   * Static representation of the [[categoryId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_ID: StringField<TodoEntryV2> = new StringField('categoryId', TodoEntryV2, 'Edm.String');
  /**
   * Static representation of the [[categoryLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_LABEL: StringField<TodoEntryV2> = new StringField('categoryLabel', TodoEntryV2, 'Edm.String');
  /**
   * Static representation of the [[completedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPLETED_DATE_TIME: DateField<TodoEntryV2> = new DateField('completedDateTime', TodoEntryV2, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<TodoEntryV2> = new DateField('createdDate', TodoEntryV2, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE: DateField<TodoEntryV2> = new DateField('dueDate', TodoEntryV2, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: NumberField<TodoEntryV2> = new NumberField('formDataId', TodoEntryV2, 'Edm.Int32');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TodoEntryV2> = new DateField('lastModifiedDateTime', TodoEntryV2, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[linkUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LINK_URL: StringField<TodoEntryV2> = new StringField('linkUrl', TodoEntryV2, 'Edm.String');
  /**
   * Static representation of the [[mobileLinkUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MOBILE_LINK_URL: StringField<TodoEntryV2> = new StringField('mobileLinkUrl', TodoEntryV2, 'Edm.String');
  /**
   * Static representation of the [[routingStepOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUTING_STEP_ORDER: NumberField<TodoEntryV2> = new NumberField('routingStepOrder', TodoEntryV2, 'Edm.Int32');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<TodoEntryV2> = new NumberField('status', TodoEntryV2, 'Edm.Int32');
  /**
   * Static representation of the [[subjectId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_ID: StringField<TodoEntryV2> = new StringField('subjectId', TodoEntryV2, 'Edm.String');
  /**
   * Static representation of the [[todoEntryId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TODO_ENTRY_ID: BigNumberField<TodoEntryV2> = new BigNumberField('todoEntryId', TodoEntryV2, 'Edm.Decimal');
  /**
   * Static representation of the [[todoEntryName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TODO_ENTRY_NAME: StringField<TodoEntryV2> = new StringField('todoEntryName', TodoEntryV2, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[formContentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_NAV: Link<TodoEntryV2, FormContent> = new Link('formContentNav', TodoEntryV2, FormContent);
  /**
   * Static representation of the one-to-one navigation property [[recruitingJobOfferNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECRUITING_JOB_OFFER_NAV: OneToOneLink<TodoEntryV2, JobOffer> = new OneToOneLink('recruitingJobOfferNav', TodoEntryV2, JobOffer);
  /**
   * Static representation of the one-to-one navigation property [[userNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAV: OneToOneLink<TodoEntryV2, User> = new OneToOneLink('userNav', TodoEntryV2, User);
  /**
   * Static representation of the one-to-one navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: OneToOneLink<TodoEntryV2, WfRequest> = new OneToOneLink('wfRequestNav', TodoEntryV2, WfRequest);
  /**
   * All fields of the TodoEntryV2 entity.
   */
  export const _allFields: Array<StringField<TodoEntryV2> | DateField<TodoEntryV2> | NumberField<TodoEntryV2> | BigNumberField<TodoEntryV2> | Link<TodoEntryV2, FormContent> | OneToOneLink<TodoEntryV2, JobOffer> | OneToOneLink<TodoEntryV2, User> | OneToOneLink<TodoEntryV2, WfRequest>> = [
    TodoEntryV2.CATEGORY_ID,
    TodoEntryV2.CATEGORY_LABEL,
    TodoEntryV2.COMPLETED_DATE_TIME,
    TodoEntryV2.CREATED_DATE,
    TodoEntryV2.DUE_DATE,
    TodoEntryV2.FORM_DATA_ID,
    TodoEntryV2.LAST_MODIFIED_DATE_TIME,
    TodoEntryV2.LINK_URL,
    TodoEntryV2.MOBILE_LINK_URL,
    TodoEntryV2.ROUTING_STEP_ORDER,
    TodoEntryV2.STATUS,
    TodoEntryV2.SUBJECT_ID,
    TodoEntryV2.TODO_ENTRY_ID,
    TodoEntryV2.TODO_ENTRY_NAME,
    TodoEntryV2.FORM_CONTENT_NAV,
    TodoEntryV2.RECRUITING_JOB_OFFER_NAV,
    TodoEntryV2.USER_NAV,
    TodoEntryV2.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TodoEntryV2> = new AllFields('*', TodoEntryV2);
  /**
   * All key fields of the TodoEntryV2 entity.
   */
  export const _keyFields: Array<Selectable<TodoEntryV2>> = [TodoEntryV2.TODO_ENTRY_ID];
  /**
   * Mapping of all key field names to the respective static field property TodoEntryV2.
   */
  export const _keys: { [keys: string]: Selectable<TodoEntryV2> } = TodoEntryV2._keyFields.reduce((acc: { [keys: string]: Selectable<TodoEntryV2> }, field: Selectable<TodoEntryV2>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
