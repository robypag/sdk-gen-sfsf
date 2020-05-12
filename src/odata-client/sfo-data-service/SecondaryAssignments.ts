/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SecondaryAssignmentsRequestBuilder } from './SecondaryAssignmentsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SecondaryAssignments" of service "SFOData".
 */
export class SecondaryAssignments extends Entity implements SecondaryAssignmentsType {
  /**
   * Technical entity name for SecondaryAssignments.
   */
  static _entityName = 'SecondaryAssignments';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SecondaryAssignments.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * effectiveEndDate.
   * @nullable
   */
  effectiveEndDate?: Moment;
  /**
   * Effective Start Date.
   */
  effectiveStartDate!: Moment;
  /**
   * Person ID External.
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
   * One-to-many navigation property to the [[SecondaryAssignmentsItem]] entity.
   */
  allSfProcesses!: SecondaryAssignmentsItem[];
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
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `SecondaryAssignments`.
   * @returns A builder that constructs instances of entity type `SecondaryAssignments`.
   */
  static builder(): EntityBuilderType<SecondaryAssignments, SecondaryAssignmentsTypeForceMandatory> {
    return Entity.entityBuilder(SecondaryAssignments);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SecondaryAssignments` entity type.
   * @returns A `SecondaryAssignments` request builder.
   */
  static requestBuilder(): SecondaryAssignmentsRequestBuilder {
    return new SecondaryAssignmentsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SecondaryAssignments`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SecondaryAssignments`.
   */
  static customField(fieldName: string): CustomField<SecondaryAssignments> {
    return Entity.customFieldSelector(fieldName, SecondaryAssignments);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SecondaryAssignmentsItem, SecondaryAssignmentsItemType } from './SecondaryAssignmentsItem';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface SecondaryAssignmentsType {
  createdBy?: string;
  createdDateTime?: Moment;
  effectiveEndDate?: Moment;
  effectiveStartDate: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  allSfProcesses: SecondaryAssignmentsItemType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface SecondaryAssignmentsTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  effectiveEndDate: Moment;
  effectiveStartDate: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  allSfProcesses: SecondaryAssignmentsItemType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace SecondaryAssignments {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SecondaryAssignments> = new StringField('createdBy', SecondaryAssignments, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SecondaryAssignments> = new DateField('createdDateTime', SecondaryAssignments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[effectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_END_DATE: DateField<SecondaryAssignments> = new DateField('effectiveEndDate', SecondaryAssignments, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_START_DATE: DateField<SecondaryAssignments> = new DateField('effectiveStartDate', SecondaryAssignments, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<SecondaryAssignments> = new StringField('externalCode', SecondaryAssignments, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SecondaryAssignments> = new StringField('lastModifiedBy', SecondaryAssignments, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SecondaryAssignments> = new DateField('lastModifiedDateTime', SecondaryAssignments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SecondaryAssignments> = new StringField('mdfSystemRecordStatus', SecondaryAssignments, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[allSfProcesses]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALL_SF_PROCESSES: Link<SecondaryAssignments, SecondaryAssignmentsItem> = new Link('allSfProcesses', SecondaryAssignments, SecondaryAssignmentsItem);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SecondaryAssignments, User> = new OneToOneLink('createdByNav', SecondaryAssignments, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SecondaryAssignments, User> = new OneToOneLink('lastModifiedByNav', SecondaryAssignments, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SecondaryAssignments, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SecondaryAssignments, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<SecondaryAssignments, WfRequest> = new Link('wfRequestNav', SecondaryAssignments, WfRequest);
  /**
   * All fields of the SecondaryAssignments entity.
   */
  export const _allFields: Array<StringField<SecondaryAssignments> | DateField<SecondaryAssignments> | Link<SecondaryAssignments, SecondaryAssignmentsItem> | OneToOneLink<SecondaryAssignments, User> | OneToOneLink<SecondaryAssignments, MdfEnumValue> | Link<SecondaryAssignments, WfRequest>> = [
    SecondaryAssignments.CREATED_BY,
    SecondaryAssignments.CREATED_DATE_TIME,
    SecondaryAssignments.EFFECTIVE_END_DATE,
    SecondaryAssignments.EFFECTIVE_START_DATE,
    SecondaryAssignments.EXTERNAL_CODE,
    SecondaryAssignments.LAST_MODIFIED_BY,
    SecondaryAssignments.LAST_MODIFIED_DATE_TIME,
    SecondaryAssignments.MDF_SYSTEM_RECORD_STATUS,
    SecondaryAssignments.ALL_SF_PROCESSES,
    SecondaryAssignments.CREATED_BY_NAV,
    SecondaryAssignments.LAST_MODIFIED_BY_NAV,
    SecondaryAssignments.MDF_SYSTEM_RECORD_STATUS_NAV,
    SecondaryAssignments.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SecondaryAssignments> = new AllFields('*', SecondaryAssignments);
  /**
   * All key fields of the SecondaryAssignments entity.
   */
  export const _keyFields: Array<Selectable<SecondaryAssignments>> = [SecondaryAssignments.EFFECTIVE_START_DATE, SecondaryAssignments.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SecondaryAssignments.
   */
  export const _keys: { [keys: string]: Selectable<SecondaryAssignments> } = SecondaryAssignments._keyFields.reduce((acc: { [keys: string]: Selectable<SecondaryAssignments> }, field: Selectable<SecondaryAssignments>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
