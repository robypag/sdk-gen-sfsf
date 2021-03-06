/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeGroupItemRequestBuilder } from './EmployeeTimeGroupItemRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeTimeGroupItem" of service "SFOData".
 */
export class EmployeeTimeGroupItem extends Entity implements EmployeeTimeGroupItemType {
  /**
   * Technical entity name for EmployeeTimeGroupItem.
   */
  static _entityName = 'EmployeeTimeGroupItem';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeTimeGroupItem.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Employee Time Group_externalCode.
   * Maximum length: 128.
   */
  employeeTimeGroupExternalCode!: string;
  /**
   * Comment.
   * Maximum length: 255.
   * @nullable
   */
  comment?: string;
  /**
   * createdBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Employee Time.
   * Maximum length: 128.
   * @nullable
   */
  employeeTime?: string;
  /**
   * mdfSystemExternalCode.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * lastModifiedDate.
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
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[EmployeeTime]] entity.
   */
  employeeTimeNav!: EmployeeTime;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `EmployeeTimeGroupItem`.
   * @returns A builder that constructs instances of entity type `EmployeeTimeGroupItem`.
   */
  static builder(): EntityBuilderType<EmployeeTimeGroupItem, EmployeeTimeGroupItemTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeTimeGroupItem);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeTimeGroupItem` entity type.
   * @returns A `EmployeeTimeGroupItem` request builder.
   */
  static requestBuilder(): EmployeeTimeGroupItemRequestBuilder {
    return new EmployeeTimeGroupItemRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeGroupItem`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeTimeGroupItem`.
   */
  static customField(fieldName: string): CustomField<EmployeeTimeGroupItem> {
    return Entity.customFieldSelector(fieldName, EmployeeTimeGroupItem);
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
import { EmployeeTime, EmployeeTimeType } from './EmployeeTime';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface EmployeeTimeGroupItemType {
  employeeTimeGroupExternalCode: string;
  comment?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  employeeTime?: string;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  createdByNav: UserType;
  employeeTimeNav: EmployeeTimeType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface EmployeeTimeGroupItemTypeForceMandatory {
  employeeTimeGroupExternalCode: string;
  comment: string;
  createdBy: string;
  createdDateTime: Moment;
  employeeTime: string;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  createdByNav: UserType;
  employeeTimeNav: EmployeeTimeType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace EmployeeTimeGroupItem {
  /**
   * Static representation of the [[employeeTimeGroupExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_GROUP_EXTERNAL_CODE: StringField<EmployeeTimeGroupItem> = new StringField('EmployeeTimeGroup_externalCode', EmployeeTimeGroupItem, 'Edm.String');
  /**
   * Static representation of the [[comment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT: StringField<EmployeeTimeGroupItem> = new StringField('comment', EmployeeTimeGroupItem, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeTimeGroupItem> = new StringField('createdBy', EmployeeTimeGroupItem, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeTimeGroupItem> = new DateField('createdDateTime', EmployeeTimeGroupItem, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[employeeTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME: StringField<EmployeeTimeGroupItem> = new StringField('employeeTime', EmployeeTimeGroupItem, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<EmployeeTimeGroupItem> = new StringField('externalCode', EmployeeTimeGroupItem, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeTimeGroupItem> = new StringField('lastModifiedBy', EmployeeTimeGroupItem, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeGroupItem> = new DateField('lastModifiedDateTime', EmployeeTimeGroupItem, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeGroupItem> = new StringField('mdfSystemRecordStatus', EmployeeTimeGroupItem, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EmployeeTimeGroupItem, User> = new OneToOneLink('createdByNav', EmployeeTimeGroupItem, User);
  /**
   * Static representation of the one-to-one navigation property [[employeeTimeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_NAV: OneToOneLink<EmployeeTimeGroupItem, EmployeeTime> = new OneToOneLink('employeeTimeNav', EmployeeTimeGroupItem, EmployeeTime);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeTimeGroupItem, User> = new OneToOneLink('lastModifiedByNav', EmployeeTimeGroupItem, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeTimeGroupItem, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EmployeeTimeGroupItem, MdfEnumValue);
  /**
   * All fields of the EmployeeTimeGroupItem entity.
   */
  export const _allFields: Array<StringField<EmployeeTimeGroupItem> | DateField<EmployeeTimeGroupItem> | OneToOneLink<EmployeeTimeGroupItem, User> | OneToOneLink<EmployeeTimeGroupItem, EmployeeTime> | OneToOneLink<EmployeeTimeGroupItem, MdfEnumValue>> = [
    EmployeeTimeGroupItem.EMPLOYEE_TIME_GROUP_EXTERNAL_CODE,
    EmployeeTimeGroupItem.COMMENT,
    EmployeeTimeGroupItem.CREATED_BY,
    EmployeeTimeGroupItem.CREATED_DATE_TIME,
    EmployeeTimeGroupItem.EMPLOYEE_TIME,
    EmployeeTimeGroupItem.EXTERNAL_CODE,
    EmployeeTimeGroupItem.LAST_MODIFIED_BY,
    EmployeeTimeGroupItem.LAST_MODIFIED_DATE_TIME,
    EmployeeTimeGroupItem.MDF_SYSTEM_RECORD_STATUS,
    EmployeeTimeGroupItem.CREATED_BY_NAV,
    EmployeeTimeGroupItem.EMPLOYEE_TIME_NAV,
    EmployeeTimeGroupItem.LAST_MODIFIED_BY_NAV,
    EmployeeTimeGroupItem.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeTimeGroupItem> = new AllFields('*', EmployeeTimeGroupItem);
  /**
   * All key fields of the EmployeeTimeGroupItem entity.
   */
  export const _keyFields: Array<Selectable<EmployeeTimeGroupItem>> = [EmployeeTimeGroupItem.EMPLOYEE_TIME_GROUP_EXTERNAL_CODE, EmployeeTimeGroupItem.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeTimeGroupItem.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeTimeGroupItem> } = EmployeeTimeGroupItem._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeTimeGroupItem> }, field: Selectable<EmployeeTimeGroupItem>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
