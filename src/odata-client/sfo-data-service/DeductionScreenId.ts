/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DeductionScreenIdRequestBuilder } from './DeductionScreenIdRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DeductionScreenId" of service "SFOData".
 */
export class DeductionScreenId extends Entity implements DeductionScreenIdType {
  /**
   * Technical entity name for DeductionScreenId.
   */
  static _entityName = 'DeductionScreenId';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DeductionScreenId.
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
   * dummyFieldValue.
   * Maximum length: 255.
   * @nullable
   */
  dummyFieldValue?: string;
  /**
   * Code.
   * Maximum length: 128.
   */
  externalCode!: string;
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
   * onetimeDeductionId.
   * Maximum length: 255.
   * @nullable
   */
  onetimeDeductionId?: string;
  /**
   * onetimeDeductionUserGoAdminId.
   * Maximum length: 255.
   * @nullable
   */
  onetimeDeductionUserGoAdminId?: string;
  /**
   * onetimeDeductionUserGoEmployeeEditId.
   * Maximum length: 255.
   * @nullable
   */
  onetimeDeductionUserGoEmployeeEditId?: string;
  /**
   * onetimeDeductionUserGoEmployeeId.
   * Maximum length: 255.
   * @nullable
   */
  onetimeDeductionUserGoEmployeeId?: string;
  /**
   * recurringDeductionId.
   * Maximum length: 255.
   * @nullable
   */
  recurringDeductionId?: string;
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
   * Returns an entity builder to construct instances `DeductionScreenId`.
   * @returns A builder that constructs instances of entity type `DeductionScreenId`.
   */
  static builder(): EntityBuilderType<DeductionScreenId, DeductionScreenIdTypeForceMandatory> {
    return Entity.entityBuilder(DeductionScreenId);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DeductionScreenId` entity type.
   * @returns A `DeductionScreenId` request builder.
   */
  static requestBuilder(): DeductionScreenIdRequestBuilder {
    return new DeductionScreenIdRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeductionScreenId`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DeductionScreenId`.
   */
  static customField(fieldName: string): CustomField<DeductionScreenId> {
    return Entity.customFieldSelector(fieldName, DeductionScreenId);
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
import { WfRequest, WfRequestType } from './WfRequest';

export interface DeductionScreenIdType {
  createdBy?: string;
  createdDateTime?: Moment;
  dummyFieldValue?: string;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  onetimeDeductionId?: string;
  onetimeDeductionUserGoAdminId?: string;
  onetimeDeductionUserGoEmployeeEditId?: string;
  onetimeDeductionUserGoEmployeeId?: string;
  recurringDeductionId?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface DeductionScreenIdTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  dummyFieldValue: string;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  onetimeDeductionId: string;
  onetimeDeductionUserGoAdminId: string;
  onetimeDeductionUserGoEmployeeEditId: string;
  onetimeDeductionUserGoEmployeeId: string;
  recurringDeductionId: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace DeductionScreenId {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<DeductionScreenId> = new StringField('createdBy', DeductionScreenId, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<DeductionScreenId> = new DateField('createdDateTime', DeductionScreenId, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[dummyFieldValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUMMY_FIELD_VALUE: StringField<DeductionScreenId> = new StringField('dummyFieldValue', DeductionScreenId, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<DeductionScreenId> = new StringField('externalCode', DeductionScreenId, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<DeductionScreenId> = new StringField('lastModifiedBy', DeductionScreenId, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<DeductionScreenId> = new DateField('lastModifiedDateTime', DeductionScreenId, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<DeductionScreenId> = new StringField('mdfSystemRecordStatus', DeductionScreenId, 'Edm.String');
  /**
   * Static representation of the [[onetimeDeductionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONETIME_DEDUCTION_ID: StringField<DeductionScreenId> = new StringField('onetimeDeductionId', DeductionScreenId, 'Edm.String');
  /**
   * Static representation of the [[onetimeDeductionUserGoAdminId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONETIME_DEDUCTION_USER_GO_ADMIN_ID: StringField<DeductionScreenId> = new StringField('onetimeDeductionUserGoAdminId', DeductionScreenId, 'Edm.String');
  /**
   * Static representation of the [[onetimeDeductionUserGoEmployeeEditId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONETIME_DEDUCTION_USER_GO_EMPLOYEE_EDIT_ID: StringField<DeductionScreenId> = new StringField('onetimeDeductionUserGoEmployeeEditId', DeductionScreenId, 'Edm.String');
  /**
   * Static representation of the [[onetimeDeductionUserGoEmployeeId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONETIME_DEDUCTION_USER_GO_EMPLOYEE_ID: StringField<DeductionScreenId> = new StringField('onetimeDeductionUserGoEmployeeId', DeductionScreenId, 'Edm.String');
  /**
   * Static representation of the [[recurringDeductionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECURRING_DEDUCTION_ID: StringField<DeductionScreenId> = new StringField('recurringDeductionId', DeductionScreenId, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<DeductionScreenId, User> = new OneToOneLink('createdByNav', DeductionScreenId, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<DeductionScreenId, User> = new OneToOneLink('lastModifiedByNav', DeductionScreenId, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<DeductionScreenId, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', DeductionScreenId, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<DeductionScreenId, WfRequest> = new Link('wfRequestNav', DeductionScreenId, WfRequest);
  /**
   * All fields of the DeductionScreenId entity.
   */
  export const _allFields: Array<StringField<DeductionScreenId> | DateField<DeductionScreenId> | OneToOneLink<DeductionScreenId, User> | OneToOneLink<DeductionScreenId, MdfEnumValue> | Link<DeductionScreenId, WfRequest>> = [
    DeductionScreenId.CREATED_BY,
    DeductionScreenId.CREATED_DATE_TIME,
    DeductionScreenId.DUMMY_FIELD_VALUE,
    DeductionScreenId.EXTERNAL_CODE,
    DeductionScreenId.LAST_MODIFIED_BY,
    DeductionScreenId.LAST_MODIFIED_DATE_TIME,
    DeductionScreenId.MDF_SYSTEM_RECORD_STATUS,
    DeductionScreenId.ONETIME_DEDUCTION_ID,
    DeductionScreenId.ONETIME_DEDUCTION_USER_GO_ADMIN_ID,
    DeductionScreenId.ONETIME_DEDUCTION_USER_GO_EMPLOYEE_EDIT_ID,
    DeductionScreenId.ONETIME_DEDUCTION_USER_GO_EMPLOYEE_ID,
    DeductionScreenId.RECURRING_DEDUCTION_ID,
    DeductionScreenId.CREATED_BY_NAV,
    DeductionScreenId.LAST_MODIFIED_BY_NAV,
    DeductionScreenId.MDF_SYSTEM_RECORD_STATUS_NAV,
    DeductionScreenId.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DeductionScreenId> = new AllFields('*', DeductionScreenId);
  /**
   * All key fields of the DeductionScreenId entity.
   */
  export const _keyFields: Array<Selectable<DeductionScreenId>> = [DeductionScreenId.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property DeductionScreenId.
   */
  export const _keys: { [keys: string]: Selectable<DeductionScreenId> } = DeductionScreenId._keyFields.reduce((acc: { [keys: string]: Selectable<DeductionScreenId> }, field: Selectable<DeductionScreenId>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
