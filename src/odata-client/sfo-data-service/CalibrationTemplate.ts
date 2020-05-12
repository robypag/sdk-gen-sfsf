/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CalibrationTemplateRequestBuilder } from './CalibrationTemplateRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CalibrationTemplate" of service "SFOData".
 */
export class CalibrationTemplate extends Entity implements CalibrationTemplateType {
  /**
   * Technical entity name for CalibrationTemplate.
   */
  static _entityName = 'CalibrationTemplate';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CalibrationTemplate.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * createdBy.
   */
  createdBy!: string;
  /**
   * createdDateTime.
   */
  createdDateTime!: Moment;
  /**
   * endDate.
   */
  endDate!: Moment;
  /**
   * lastModifiedBy.
   */
  lastModifiedBy!: string;
  /**
   * lastModifiedDateTime.
   */
  lastModifiedDateTime!: Moment;
  /**
   * startDate.
   */
  startDate!: Moment;
  /**
   * status.
   */
  status!: number;
  /**
   * templateId.
   */
  templateId!: BigNumber;
  /**
   * templateName.
   */
  templateName!: string;
  /**
   * One-to-many navigation property to the [[User]] entity.
   */
  executiveReviewerList!: User[];

  /**
   * Returns an entity builder to construct instances `CalibrationTemplate`.
   * @returns A builder that constructs instances of entity type `CalibrationTemplate`.
   */
  static builder(): EntityBuilderType<CalibrationTemplate, CalibrationTemplateTypeForceMandatory> {
    return Entity.entityBuilder(CalibrationTemplate);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CalibrationTemplate` entity type.
   * @returns A `CalibrationTemplate` request builder.
   */
  static requestBuilder(): CalibrationTemplateRequestBuilder {
    return new CalibrationTemplateRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CalibrationTemplate`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CalibrationTemplate`.
   */
  static customField(fieldName: string): CustomField<CalibrationTemplate> {
    return Entity.customFieldSelector(fieldName, CalibrationTemplate);
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

export interface CalibrationTemplateType {
  createdBy: string;
  createdDateTime: Moment;
  endDate: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  startDate: Moment;
  status: number;
  templateId: BigNumber;
  templateName: string;
  executiveReviewerList: UserType[];
}

export interface CalibrationTemplateTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  endDate: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  startDate: Moment;
  status: number;
  templateId: BigNumber;
  templateName: string;
  executiveReviewerList: UserType[];
}

export namespace CalibrationTemplate {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<CalibrationTemplate> = new StringField('createdBy', CalibrationTemplate, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<CalibrationTemplate> = new DateField('createdDateTime', CalibrationTemplate, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<CalibrationTemplate> = new DateField('endDate', CalibrationTemplate, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<CalibrationTemplate> = new StringField('lastModifiedBy', CalibrationTemplate, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CalibrationTemplate> = new DateField('lastModifiedDateTime', CalibrationTemplate, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<CalibrationTemplate> = new DateField('startDate', CalibrationTemplate, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<CalibrationTemplate> = new NumberField('status', CalibrationTemplate, 'Edm.Int32');
  /**
   * Static representation of the [[templateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_ID: BigNumberField<CalibrationTemplate> = new BigNumberField('templateId', CalibrationTemplate, 'Edm.Int64');
  /**
   * Static representation of the [[templateName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_NAME: StringField<CalibrationTemplate> = new StringField('templateName', CalibrationTemplate, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[executiveReviewerList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXECUTIVE_REVIEWER_LIST: Link<CalibrationTemplate, User> = new Link('executiveReviewerList', CalibrationTemplate, User);
  /**
   * All fields of the CalibrationTemplate entity.
   */
  export const _allFields: Array<StringField<CalibrationTemplate> | DateField<CalibrationTemplate> | NumberField<CalibrationTemplate> | BigNumberField<CalibrationTemplate> | Link<CalibrationTemplate, User>> = [
    CalibrationTemplate.CREATED_BY,
    CalibrationTemplate.CREATED_DATE_TIME,
    CalibrationTemplate.END_DATE,
    CalibrationTemplate.LAST_MODIFIED_BY,
    CalibrationTemplate.LAST_MODIFIED_DATE_TIME,
    CalibrationTemplate.START_DATE,
    CalibrationTemplate.STATUS,
    CalibrationTemplate.TEMPLATE_ID,
    CalibrationTemplate.TEMPLATE_NAME,
    CalibrationTemplate.EXECUTIVE_REVIEWER_LIST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CalibrationTemplate> = new AllFields('*', CalibrationTemplate);
  /**
   * All key fields of the CalibrationTemplate entity.
   */
  export const _keyFields: Array<Selectable<CalibrationTemplate>> = [CalibrationTemplate.TEMPLATE_ID];
  /**
   * Mapping of all key field names to the respective static field property CalibrationTemplate.
   */
  export const _keys: { [keys: string]: Selectable<CalibrationTemplate> } = CalibrationTemplate._keyFields.reduce((acc: { [keys: string]: Selectable<CalibrationTemplate> }, field: Selectable<CalibrationTemplate>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
