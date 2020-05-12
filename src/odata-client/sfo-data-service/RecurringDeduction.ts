/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RecurringDeductionRequestBuilder } from './RecurringDeductionRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "RecurringDeduction" of service "SFOData".
 */
export class RecurringDeduction extends Entity implements RecurringDeductionType {
  /**
   * Technical entity name for RecurringDeduction.
   */
  static _entityName = 'RecurringDeduction';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for RecurringDeduction.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Effective End Date.
   * @nullable
   */
  effectiveEndDate?: Moment;
  /**
   * Effective Start Date.
   */
  effectiveStartDate!: Moment;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * User.
   * Maximum length: 100.
   */
  userSysId!: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[RecurringDeductionItem]] entity.
   */
  recurringItems!: RecurringDeductionItem[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userSysIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `RecurringDeduction`.
   * @returns A builder that constructs instances of entity type `RecurringDeduction`.
   */
  static builder(): EntityBuilderType<RecurringDeduction, RecurringDeductionTypeForceMandatory> {
    return Entity.entityBuilder(RecurringDeduction);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RecurringDeduction` entity type.
   * @returns A `RecurringDeduction` request builder.
   */
  static requestBuilder(): RecurringDeductionRequestBuilder {
    return new RecurringDeductionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RecurringDeduction`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RecurringDeduction`.
   */
  static customField(fieldName: string): CustomField<RecurringDeduction> {
    return Entity.customFieldSelector(fieldName, RecurringDeduction);
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
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { RecurringDeductionItem, RecurringDeductionItemType } from './RecurringDeductionItem';
import { WfRequest, WfRequestType } from './WfRequest';

export interface RecurringDeductionType {
  createdBy?: string;
  createdDateTime?: Moment;
  effectiveEndDate?: Moment;
  effectiveStartDate: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  userSysId: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  recurringItems: RecurringDeductionItemType[];
  userSysIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface RecurringDeductionTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  effectiveEndDate: Moment;
  effectiveStartDate: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  userSysId: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  recurringItems: RecurringDeductionItemType[];
  userSysIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace RecurringDeduction {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<RecurringDeduction> = new StringField('createdBy', RecurringDeduction, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<RecurringDeduction> = new DateField('createdDateTime', RecurringDeduction, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[effectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_END_DATE: DateField<RecurringDeduction> = new DateField('effectiveEndDate', RecurringDeduction, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_START_DATE: DateField<RecurringDeduction> = new DateField('effectiveStartDate', RecurringDeduction, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<RecurringDeduction> = new StringField('lastModifiedBy', RecurringDeduction, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<RecurringDeduction> = new DateField('lastModifiedDateTime', RecurringDeduction, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<RecurringDeduction> = new StringField('mdfSystemRecordStatus', RecurringDeduction, 'Edm.String');
  /**
   * Static representation of the [[userSysId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SYS_ID: StringField<RecurringDeduction> = new StringField('userSysId', RecurringDeduction, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<RecurringDeduction, User> = new OneToOneLink('createdByNav', RecurringDeduction, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<RecurringDeduction, User> = new OneToOneLink('lastModifiedByNav', RecurringDeduction, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RecurringDeduction, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', RecurringDeduction, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[recurringItems]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECURRING_ITEMS: Link<RecurringDeduction, RecurringDeductionItem> = new Link('recurringItems', RecurringDeduction, RecurringDeductionItem);
  /**
   * Static representation of the one-to-one navigation property [[userSysIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SYS_ID_NAV: OneToOneLink<RecurringDeduction, User> = new OneToOneLink('userSysIdNav', RecurringDeduction, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<RecurringDeduction, WfRequest> = new Link('wfRequestNav', RecurringDeduction, WfRequest);
  /**
   * All fields of the RecurringDeduction entity.
   */
  export const _allFields: Array<StringField<RecurringDeduction> | DateField<RecurringDeduction> | OneToOneLink<RecurringDeduction, User> | OneToOneLink<RecurringDeduction, MdfEnumValue> | Link<RecurringDeduction, RecurringDeductionItem> | Link<RecurringDeduction, WfRequest>> = [
    RecurringDeduction.CREATED_BY,
    RecurringDeduction.CREATED_DATE_TIME,
    RecurringDeduction.EFFECTIVE_END_DATE,
    RecurringDeduction.EFFECTIVE_START_DATE,
    RecurringDeduction.LAST_MODIFIED_BY,
    RecurringDeduction.LAST_MODIFIED_DATE_TIME,
    RecurringDeduction.MDF_SYSTEM_RECORD_STATUS,
    RecurringDeduction.USER_SYS_ID,
    RecurringDeduction.CREATED_BY_NAV,
    RecurringDeduction.LAST_MODIFIED_BY_NAV,
    RecurringDeduction.MDF_SYSTEM_RECORD_STATUS_NAV,
    RecurringDeduction.RECURRING_ITEMS,
    RecurringDeduction.USER_SYS_ID_NAV,
    RecurringDeduction.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RecurringDeduction> = new AllFields('*', RecurringDeduction);
  /**
   * All key fields of the RecurringDeduction entity.
   */
  export const _keyFields: Array<Selectable<RecurringDeduction>> = [RecurringDeduction.EFFECTIVE_START_DATE, RecurringDeduction.USER_SYS_ID];
  /**
   * Mapping of all key field names to the respective static field property RecurringDeduction.
   */
  export const _keys: { [keys: string]: Selectable<RecurringDeduction> } = RecurringDeduction._keyFields.reduce((acc: { [keys: string]: Selectable<RecurringDeduction> }, field: Selectable<RecurringDeduction>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
