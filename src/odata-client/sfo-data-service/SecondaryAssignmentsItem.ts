/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SecondaryAssignmentsItemRequestBuilder } from './SecondaryAssignmentsItemRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SecondaryAssignmentsItem" of service "SFOData".
 */
export class SecondaryAssignmentsItem extends Entity implements SecondaryAssignmentsItemType {
  /**
   * Technical entity name for SecondaryAssignmentsItem.
   */
  static _entityName = 'SecondaryAssignmentsItem';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SecondaryAssignmentsItem.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Secondary Assignments_Effective Start Date.
   */
  secondaryAssignmentsEffectiveStartDate!: Moment;
  /**
   * Secondary Assignments_Person ID External.
   * Maximum length: 128.
   */
  secondaryAssignmentsExternalCode!: string;
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
   * External Code.
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
   * Employment / User ID.
   * Maximum length: 100.
   * @nullable
   */
  usersSysId?: string;
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
   * One-to-one navigation property to the [[User]] entity.
   */
  usersSysIdNav!: User;

  /**
   * Returns an entity builder to construct instances `SecondaryAssignmentsItem`.
   * @returns A builder that constructs instances of entity type `SecondaryAssignmentsItem`.
   */
  static builder(): EntityBuilderType<SecondaryAssignmentsItem, SecondaryAssignmentsItemTypeForceMandatory> {
    return Entity.entityBuilder(SecondaryAssignmentsItem);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SecondaryAssignmentsItem` entity type.
   * @returns A `SecondaryAssignmentsItem` request builder.
   */
  static requestBuilder(): SecondaryAssignmentsItemRequestBuilder {
    return new SecondaryAssignmentsItemRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SecondaryAssignmentsItem`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SecondaryAssignmentsItem`.
   */
  static customField(fieldName: string): CustomField<SecondaryAssignmentsItem> {
    return Entity.customFieldSelector(fieldName, SecondaryAssignmentsItem);
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

export interface SecondaryAssignmentsItemType {
  secondaryAssignmentsEffectiveStartDate: Moment;
  secondaryAssignmentsExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  usersSysId?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  usersSysIdNav: UserType;
}

export interface SecondaryAssignmentsItemTypeForceMandatory {
  secondaryAssignmentsEffectiveStartDate: Moment;
  secondaryAssignmentsExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  usersSysId: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  usersSysIdNav: UserType;
}

export namespace SecondaryAssignmentsItem {
  /**
   * Static representation of the [[secondaryAssignmentsEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECONDARY_ASSIGNMENTS_EFFECTIVE_START_DATE: DateField<SecondaryAssignmentsItem> = new DateField('SecondaryAssignments_effectiveStartDate', SecondaryAssignmentsItem, 'Edm.DateTime');
  /**
   * Static representation of the [[secondaryAssignmentsExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECONDARY_ASSIGNMENTS_EXTERNAL_CODE: StringField<SecondaryAssignmentsItem> = new StringField('SecondaryAssignments_externalCode', SecondaryAssignmentsItem, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SecondaryAssignmentsItem> = new StringField('createdBy', SecondaryAssignmentsItem, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SecondaryAssignmentsItem> = new DateField('createdDateTime', SecondaryAssignmentsItem, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<SecondaryAssignmentsItem> = new StringField('externalCode', SecondaryAssignmentsItem, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SecondaryAssignmentsItem> = new StringField('lastModifiedBy', SecondaryAssignmentsItem, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SecondaryAssignmentsItem> = new DateField('lastModifiedDateTime', SecondaryAssignmentsItem, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SecondaryAssignmentsItem> = new StringField('mdfSystemRecordStatus', SecondaryAssignmentsItem, 'Edm.String');
  /**
   * Static representation of the [[usersSysId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID: StringField<SecondaryAssignmentsItem> = new StringField('usersSysId', SecondaryAssignmentsItem, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SecondaryAssignmentsItem, User> = new OneToOneLink('createdByNav', SecondaryAssignmentsItem, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SecondaryAssignmentsItem, User> = new OneToOneLink('lastModifiedByNav', SecondaryAssignmentsItem, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SecondaryAssignmentsItem, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SecondaryAssignmentsItem, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[usersSysIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID_NAV: OneToOneLink<SecondaryAssignmentsItem, User> = new OneToOneLink('usersSysIdNav', SecondaryAssignmentsItem, User);
  /**
   * All fields of the SecondaryAssignmentsItem entity.
   */
  export const _allFields: Array<DateField<SecondaryAssignmentsItem> | StringField<SecondaryAssignmentsItem> | OneToOneLink<SecondaryAssignmentsItem, User> | OneToOneLink<SecondaryAssignmentsItem, MdfEnumValue>> = [
    SecondaryAssignmentsItem.SECONDARY_ASSIGNMENTS_EFFECTIVE_START_DATE,
    SecondaryAssignmentsItem.SECONDARY_ASSIGNMENTS_EXTERNAL_CODE,
    SecondaryAssignmentsItem.CREATED_BY,
    SecondaryAssignmentsItem.CREATED_DATE_TIME,
    SecondaryAssignmentsItem.EXTERNAL_CODE,
    SecondaryAssignmentsItem.LAST_MODIFIED_BY,
    SecondaryAssignmentsItem.LAST_MODIFIED_DATE_TIME,
    SecondaryAssignmentsItem.MDF_SYSTEM_RECORD_STATUS,
    SecondaryAssignmentsItem.USERS_SYS_ID,
    SecondaryAssignmentsItem.CREATED_BY_NAV,
    SecondaryAssignmentsItem.LAST_MODIFIED_BY_NAV,
    SecondaryAssignmentsItem.MDF_SYSTEM_RECORD_STATUS_NAV,
    SecondaryAssignmentsItem.USERS_SYS_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SecondaryAssignmentsItem> = new AllFields('*', SecondaryAssignmentsItem);
  /**
   * All key fields of the SecondaryAssignmentsItem entity.
   */
  export const _keyFields: Array<Selectable<SecondaryAssignmentsItem>> = [SecondaryAssignmentsItem.SECONDARY_ASSIGNMENTS_EFFECTIVE_START_DATE, SecondaryAssignmentsItem.SECONDARY_ASSIGNMENTS_EXTERNAL_CODE, SecondaryAssignmentsItem.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SecondaryAssignmentsItem.
   */
  export const _keys: { [keys: string]: Selectable<SecondaryAssignmentsItem> } = SecondaryAssignmentsItem._keyFields.reduce((acc: { [keys: string]: Selectable<SecondaryAssignmentsItem> }, field: Selectable<SecondaryAssignmentsItem>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
