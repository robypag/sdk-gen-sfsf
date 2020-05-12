/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3IrqRequestBuilder } from './PaymentInformationDetailV3IrqRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3IRQ" of service "SFOData".
 */
export class PaymentInformationDetailV3Irq extends Entity implements PaymentInformationDetailV3IrqType {
  /**
   * Technical entity name for PaymentInformationDetailV3Irq.
   */
  static _entityName = 'PaymentInformationDetailV3IRQ';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3Irq.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Payment Information Detail_externalCode.
   */
  paymentInformationDetailV3ExternalCode!: BigNumber;
  /**
   * Payment Information _Effective start date.
   */
  paymentInformationV3EffectiveStartDate!: Moment;
  /**
   * Payment Information _Worker.
   * Maximum length: 100.
   */
  paymentInformationV3Worker!: string;
  /**
   * Account Type.
   * Maximum length: 128.
   * @nullable
   */
  accountType?: string;
  /**
   * Bank Control Key.
   * Maximum length: 2.
   * @nullable
   */
  checkDigit?: string;
  /**
   * createdBy.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * externalCode.
   */
  externalCode!: BigNumber;
  /**
   * lastModifiedBy.
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
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  accountTypeNav!: MdfEnumValue;
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
   * Returns an entity builder to construct instances `PaymentInformationDetailV3Irq`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Irq`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3Irq, PaymentInformationDetailV3IrqTypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3Irq);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Irq` entity type.
   * @returns A `PaymentInformationDetailV3Irq` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3IrqRequestBuilder {
    return new PaymentInformationDetailV3IrqRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Irq`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Irq`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3Irq> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Irq);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { User, UserType } from './User';

export interface PaymentInformationDetailV3IrqType {
  paymentInformationDetailV3ExternalCode: BigNumber;
  paymentInformationV3EffectiveStartDate: Moment;
  paymentInformationV3Worker: string;
  accountType?: string;
  checkDigit?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  accountTypeNav: MdfEnumValueType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface PaymentInformationDetailV3IrqTypeForceMandatory {
  paymentInformationDetailV3ExternalCode: BigNumber;
  paymentInformationV3EffectiveStartDate: Moment;
  paymentInformationV3Worker: string;
  accountType: string;
  checkDigit: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  accountTypeNav: MdfEnumValueType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace PaymentInformationDetailV3Irq {
  /**
   * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Irq> = new BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Irq, 'Edm.Int64');
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Irq> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Irq, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Irq> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Irq, 'Edm.String');
  /**
   * Static representation of the [[accountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE: StringField<PaymentInformationDetailV3Irq> = new StringField('accountType', PaymentInformationDetailV3Irq, 'Edm.String');
  /**
   * Static representation of the [[checkDigit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_DIGIT: StringField<PaymentInformationDetailV3Irq> = new StringField('checkDigit', PaymentInformationDetailV3Irq, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3Irq> = new StringField('createdBy', PaymentInformationDetailV3Irq, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Irq> = new DateField('createdDateTime', PaymentInformationDetailV3Irq, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Irq> = new BigNumberField('externalCode', PaymentInformationDetailV3Irq, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Irq> = new StringField('lastModifiedBy', PaymentInformationDetailV3Irq, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Irq> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3Irq, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Irq> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Irq, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE_NAV: OneToOneLink<PaymentInformationDetailV3Irq, MdfEnumValue> = new OneToOneLink('accountTypeNav', PaymentInformationDetailV3Irq, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Irq, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3Irq, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Irq, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Irq, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Irq, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Irq, MdfEnumValue);
  /**
   * All fields of the PaymentInformationDetailV3Irq entity.
   */
  export const _allFields: Array<BigNumberField<PaymentInformationDetailV3Irq> | DateField<PaymentInformationDetailV3Irq> | StringField<PaymentInformationDetailV3Irq> | OneToOneLink<PaymentInformationDetailV3Irq, MdfEnumValue> | OneToOneLink<PaymentInformationDetailV3Irq, User>> = [
    PaymentInformationDetailV3Irq.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
    PaymentInformationDetailV3Irq.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3Irq.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3Irq.ACCOUNT_TYPE,
    PaymentInformationDetailV3Irq.CHECK_DIGIT,
    PaymentInformationDetailV3Irq.CREATED_BY,
    PaymentInformationDetailV3Irq.CREATED_DATE_TIME,
    PaymentInformationDetailV3Irq.EXTERNAL_CODE,
    PaymentInformationDetailV3Irq.LAST_MODIFIED_BY,
    PaymentInformationDetailV3Irq.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3Irq.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3Irq.ACCOUNT_TYPE_NAV,
    PaymentInformationDetailV3Irq.CREATED_BY_NAV,
    PaymentInformationDetailV3Irq.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3Irq.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3Irq> = new AllFields('*', PaymentInformationDetailV3Irq);
  /**
   * All key fields of the PaymentInformationDetailV3Irq entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3Irq>> = [PaymentInformationDetailV3Irq.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Irq.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Irq.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Irq.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Irq.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3Irq> } = PaymentInformationDetailV3Irq._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3Irq> }, field: Selectable<PaymentInformationDetailV3Irq>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
