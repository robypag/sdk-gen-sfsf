/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OneTimeDeductionRequestBuilder } from './OneTimeDeductionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "OneTimeDeduction" of service "SFOData".
 */
export class OneTimeDeduction extends Entity implements OneTimeDeductionType {
  /**
   * Technical entity name for OneTimeDeduction.
   */
  static _entityName = 'OneTimeDeduction';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for OneTimeDeduction.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Additional Information.
   * Maximum length: 40.
   * @nullable
   */
  additionalInfo?: string;
  /**
   * Advance.
   * Maximum length: 128.
   * @nullable
   */
  advanceId?: string;
  /**
   * Amount / Percentage / Number of units.
   * @nullable
   */
  amount?: BigNumber;
  /**
   * auditUserSysId.
   * Maximum length: 100.
   * @nullable
   */
  auditUserSysId?: string;
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
   * Currency.
   * Maximum length: 128.
   * @nullable
   */
  currency?: string;
  /**
   * Deduction Date.
   * @nullable
   */
  deductionDate?: Moment;
  /**
   * Equivalent Amount.
   * @nullable
   */
  equivalentAmount?: BigNumber;
  /**
   * Id.
   */
  externalCode!: BigNumber;
  /**
   * Last Modified By.
   * Maximum length: 100.
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
   * Pay Component.
   * Maximum length: 32.
   * @nullable
   */
  payComponentType?: string;
  /**
   * Reference Id.
   * Maximum length: 20.
   * @nullable
   */
  referenceId?: string;
  /**
   * Unit Of Measure.
   * Maximum length: 128.
   * @nullable
   */
  unitOfMeasure?: string;
  /**
   * User.
   * Maximum length: 100.
   * @nullable
   */
  userSysId?: string;
  /**
   * One-to-one navigation property to the [[NonRecurringPayment]] entity.
   */
  advanceIdNav!: NonRecurringPayment;
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  attachmentNav!: Attachment;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  auditUserSysIdNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[Currency]] entity.
   */
  currencyNav!: Currency[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[FoPayComponent]] entity.
   */
  payComponentTypeNav!: FoPayComponent[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userSysIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `OneTimeDeduction`.
   * @returns A builder that constructs instances of entity type `OneTimeDeduction`.
   */
  static builder(): EntityBuilderType<OneTimeDeduction, OneTimeDeductionTypeForceMandatory> {
    return Entity.entityBuilder(OneTimeDeduction);
  }

  /**
   * Returns a request builder to construct requests for operations on the `OneTimeDeduction` entity type.
   * @returns A `OneTimeDeduction` request builder.
   */
  static requestBuilder(): OneTimeDeductionRequestBuilder {
    return new OneTimeDeductionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `OneTimeDeduction`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `OneTimeDeduction`.
   */
  static customField(fieldName: string): CustomField<OneTimeDeduction> {
    return Entity.customFieldSelector(fieldName, OneTimeDeduction);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { NonRecurringPayment, NonRecurringPaymentType } from './NonRecurringPayment';
import { Attachment, AttachmentType } from './Attachment';
import { User, UserType } from './User';
import { Currency, CurrencyType } from './Currency';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { FoPayComponent, FoPayComponentType } from './FoPayComponent';
import { WfRequest, WfRequestType } from './WfRequest';

export interface OneTimeDeductionType {
  additionalInfo?: string;
  advanceId?: string;
  amount?: BigNumber;
  auditUserSysId?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  currency?: string;
  deductionDate?: Moment;
  equivalentAmount?: BigNumber;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  payComponentType?: string;
  referenceId?: string;
  unitOfMeasure?: string;
  userSysId?: string;
  advanceIdNav: NonRecurringPaymentType;
  attachmentNav: AttachmentType;
  auditUserSysIdNav: UserType;
  createdByNav: UserType;
  currencyNav: CurrencyType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  payComponentTypeNav: FoPayComponentType[];
  userSysIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface OneTimeDeductionTypeForceMandatory {
  additionalInfo: string;
  advanceId: string;
  amount: BigNumber;
  auditUserSysId: string;
  createdBy: string;
  createdDateTime: Moment;
  currency: string;
  deductionDate: Moment;
  equivalentAmount: BigNumber;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  payComponentType: string;
  referenceId: string;
  unitOfMeasure: string;
  userSysId: string;
  advanceIdNav: NonRecurringPaymentType;
  attachmentNav: AttachmentType;
  auditUserSysIdNav: UserType;
  createdByNav: UserType;
  currencyNav: CurrencyType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  payComponentTypeNav: FoPayComponentType[];
  userSysIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace OneTimeDeduction {
  /**
   * Static representation of the [[additionalInfo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_INFO: StringField<OneTimeDeduction> = new StringField('additionalInfo', OneTimeDeduction, 'Edm.String');
  /**
   * Static representation of the [[advanceId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCE_ID: StringField<OneTimeDeduction> = new StringField('advanceId', OneTimeDeduction, 'Edm.String');
  /**
   * Static representation of the [[amount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT: BigNumberField<OneTimeDeduction> = new BigNumberField('amount', OneTimeDeduction, 'Edm.Decimal');
  /**
   * Static representation of the [[auditUserSysId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUDIT_USER_SYS_ID: StringField<OneTimeDeduction> = new StringField('auditUserSysId', OneTimeDeduction, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<OneTimeDeduction> = new StringField('createdBy', OneTimeDeduction, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<OneTimeDeduction> = new DateField('createdDateTime', OneTimeDeduction, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<OneTimeDeduction> = new StringField('currency', OneTimeDeduction, 'Edm.String');
  /**
   * Static representation of the [[deductionDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_DATE: DateField<OneTimeDeduction> = new DateField('deductionDate', OneTimeDeduction, 'Edm.DateTime');
  /**
   * Static representation of the [[equivalentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EQUIVALENT_AMOUNT: BigNumberField<OneTimeDeduction> = new BigNumberField('equivalentAmount', OneTimeDeduction, 'Edm.Decimal');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<OneTimeDeduction> = new BigNumberField('externalCode', OneTimeDeduction, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<OneTimeDeduction> = new StringField('lastModifiedBy', OneTimeDeduction, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<OneTimeDeduction> = new DateField('lastModifiedDateTime', OneTimeDeduction, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<OneTimeDeduction> = new StringField('mdfSystemRecordStatus', OneTimeDeduction, 'Edm.String');
  /**
   * Static representation of the [[payComponentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_TYPE: StringField<OneTimeDeduction> = new StringField('payComponentType', OneTimeDeduction, 'Edm.String');
  /**
   * Static representation of the [[referenceId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_ID: StringField<OneTimeDeduction> = new StringField('referenceId', OneTimeDeduction, 'Edm.String');
  /**
   * Static representation of the [[unitOfMeasure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASURE: StringField<OneTimeDeduction> = new StringField('unitOfMeasure', OneTimeDeduction, 'Edm.String');
  /**
   * Static representation of the [[userSysId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SYS_ID: StringField<OneTimeDeduction> = new StringField('userSysId', OneTimeDeduction, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[advanceIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCE_ID_NAV: OneToOneLink<OneTimeDeduction, NonRecurringPayment> = new OneToOneLink('advanceIdNav', OneTimeDeduction, NonRecurringPayment);
  /**
   * Static representation of the one-to-one navigation property [[attachmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_NAV: OneToOneLink<OneTimeDeduction, Attachment> = new OneToOneLink('attachmentNav', OneTimeDeduction, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[auditUserSysIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUDIT_USER_SYS_ID_NAV: OneToOneLink<OneTimeDeduction, User> = new OneToOneLink('auditUserSysIdNav', OneTimeDeduction, User);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<OneTimeDeduction, User> = new OneToOneLink('createdByNav', OneTimeDeduction, User);
  /**
   * Static representation of the one-to-many navigation property [[currencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_NAV: Link<OneTimeDeduction, Currency> = new Link('currencyNav', OneTimeDeduction, Currency);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<OneTimeDeduction, User> = new OneToOneLink('lastModifiedByNav', OneTimeDeduction, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OneTimeDeduction, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', OneTimeDeduction, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[payComponentTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_TYPE_NAV: Link<OneTimeDeduction, FoPayComponent> = new Link('payComponentTypeNav', OneTimeDeduction, FoPayComponent);
  /**
   * Static representation of the one-to-one navigation property [[userSysIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SYS_ID_NAV: OneToOneLink<OneTimeDeduction, User> = new OneToOneLink('userSysIdNav', OneTimeDeduction, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<OneTimeDeduction, WfRequest> = new Link('wfRequestNav', OneTimeDeduction, WfRequest);
  /**
   * All fields of the OneTimeDeduction entity.
   */
  export const _allFields: Array<StringField<OneTimeDeduction> | BigNumberField<OneTimeDeduction> | DateField<OneTimeDeduction> | OneToOneLink<OneTimeDeduction, NonRecurringPayment> | OneToOneLink<OneTimeDeduction, Attachment> | OneToOneLink<OneTimeDeduction, User> | Link<OneTimeDeduction, Currency> | OneToOneLink<OneTimeDeduction, MdfEnumValue> | Link<OneTimeDeduction, FoPayComponent> | Link<OneTimeDeduction, WfRequest>> = [
    OneTimeDeduction.ADDITIONAL_INFO,
    OneTimeDeduction.ADVANCE_ID,
    OneTimeDeduction.AMOUNT,
    OneTimeDeduction.AUDIT_USER_SYS_ID,
    OneTimeDeduction.CREATED_BY,
    OneTimeDeduction.CREATED_DATE_TIME,
    OneTimeDeduction.CURRENCY,
    OneTimeDeduction.DEDUCTION_DATE,
    OneTimeDeduction.EQUIVALENT_AMOUNT,
    OneTimeDeduction.EXTERNAL_CODE,
    OneTimeDeduction.LAST_MODIFIED_BY,
    OneTimeDeduction.LAST_MODIFIED_DATE_TIME,
    OneTimeDeduction.MDF_SYSTEM_RECORD_STATUS,
    OneTimeDeduction.PAY_COMPONENT_TYPE,
    OneTimeDeduction.REFERENCE_ID,
    OneTimeDeduction.UNIT_OF_MEASURE,
    OneTimeDeduction.USER_SYS_ID,
    OneTimeDeduction.ADVANCE_ID_NAV,
    OneTimeDeduction.ATTACHMENT_NAV,
    OneTimeDeduction.AUDIT_USER_SYS_ID_NAV,
    OneTimeDeduction.CREATED_BY_NAV,
    OneTimeDeduction.CURRENCY_NAV,
    OneTimeDeduction.LAST_MODIFIED_BY_NAV,
    OneTimeDeduction.MDF_SYSTEM_RECORD_STATUS_NAV,
    OneTimeDeduction.PAY_COMPONENT_TYPE_NAV,
    OneTimeDeduction.USER_SYS_ID_NAV,
    OneTimeDeduction.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<OneTimeDeduction> = new AllFields('*', OneTimeDeduction);
  /**
   * All key fields of the OneTimeDeduction entity.
   */
  export const _keyFields: Array<Selectable<OneTimeDeduction>> = [OneTimeDeduction.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property OneTimeDeduction.
   */
  export const _keys: { [keys: string]: Selectable<OneTimeDeduction> } = OneTimeDeduction._keyFields.reduce((acc: { [keys: string]: Selectable<OneTimeDeduction> }, field: Selectable<OneTimeDeduction>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
