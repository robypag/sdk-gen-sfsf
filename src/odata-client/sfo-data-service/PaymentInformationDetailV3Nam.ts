/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3NamRequestBuilder } from './PaymentInformationDetailV3NamRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3NAM" of service "SFOData".
 */
export class PaymentInformationDetailV3Nam extends Entity implements PaymentInformationDetailV3NamType {
  /**
   * Technical entity name for PaymentInformationDetailV3Nam.
   */
  static _entityName = 'PaymentInformationDetailV3NAM';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3Nam.
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
   * checkDigit.
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
   * Returns an entity builder to construct instances `PaymentInformationDetailV3Nam`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Nam`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3Nam, PaymentInformationDetailV3NamTypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3Nam);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Nam` entity type.
   * @returns A `PaymentInformationDetailV3Nam` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3NamRequestBuilder {
    return new PaymentInformationDetailV3NamRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Nam`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Nam`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3Nam> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Nam);
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

export interface PaymentInformationDetailV3NamType {
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

export interface PaymentInformationDetailV3NamTypeForceMandatory {
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

export namespace PaymentInformationDetailV3Nam {
  /**
   * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Nam> = new BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Nam, 'Edm.Int64');
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Nam> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Nam, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Nam> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Nam, 'Edm.String');
  /**
   * Static representation of the [[accountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE: StringField<PaymentInformationDetailV3Nam> = new StringField('accountType', PaymentInformationDetailV3Nam, 'Edm.String');
  /**
   * Static representation of the [[checkDigit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_DIGIT: StringField<PaymentInformationDetailV3Nam> = new StringField('checkDigit', PaymentInformationDetailV3Nam, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3Nam> = new StringField('createdBy', PaymentInformationDetailV3Nam, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Nam> = new DateField('createdDateTime', PaymentInformationDetailV3Nam, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Nam> = new BigNumberField('externalCode', PaymentInformationDetailV3Nam, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Nam> = new StringField('lastModifiedBy', PaymentInformationDetailV3Nam, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Nam> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3Nam, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Nam> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Nam, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE_NAV: OneToOneLink<PaymentInformationDetailV3Nam, MdfEnumValue> = new OneToOneLink('accountTypeNav', PaymentInformationDetailV3Nam, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Nam, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3Nam, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Nam, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Nam, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Nam, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Nam, MdfEnumValue);
  /**
   * All fields of the PaymentInformationDetailV3Nam entity.
   */
  export const _allFields: Array<BigNumberField<PaymentInformationDetailV3Nam> | DateField<PaymentInformationDetailV3Nam> | StringField<PaymentInformationDetailV3Nam> | OneToOneLink<PaymentInformationDetailV3Nam, MdfEnumValue> | OneToOneLink<PaymentInformationDetailV3Nam, User>> = [
    PaymentInformationDetailV3Nam.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
    PaymentInformationDetailV3Nam.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3Nam.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3Nam.ACCOUNT_TYPE,
    PaymentInformationDetailV3Nam.CHECK_DIGIT,
    PaymentInformationDetailV3Nam.CREATED_BY,
    PaymentInformationDetailV3Nam.CREATED_DATE_TIME,
    PaymentInformationDetailV3Nam.EXTERNAL_CODE,
    PaymentInformationDetailV3Nam.LAST_MODIFIED_BY,
    PaymentInformationDetailV3Nam.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3Nam.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3Nam.ACCOUNT_TYPE_NAV,
    PaymentInformationDetailV3Nam.CREATED_BY_NAV,
    PaymentInformationDetailV3Nam.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3Nam.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3Nam> = new AllFields('*', PaymentInformationDetailV3Nam);
  /**
   * All key fields of the PaymentInformationDetailV3Nam entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3Nam>> = [PaymentInformationDetailV3Nam.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Nam.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Nam.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Nam.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Nam.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3Nam> } = PaymentInformationDetailV3Nam._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3Nam> }, field: Selectable<PaymentInformationDetailV3Nam>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
