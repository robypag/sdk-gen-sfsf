/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3JpnRequestBuilder } from './PaymentInformationDetailV3JpnRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3JPN" of service "SFOData".
 */
export class PaymentInformationDetailV3Jpn extends Entity implements PaymentInformationDetailV3JpnType {
  /**
   * Technical entity name for PaymentInformationDetailV3Jpn.
   */
  static _entityName = 'PaymentInformationDetailV3JPN';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3Jpn.
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
   * Maximum length: 255.
   * @nullable
   */
  accountType?: string;
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
   * Returns an entity builder to construct instances `PaymentInformationDetailV3Jpn`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Jpn`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3Jpn, PaymentInformationDetailV3JpnTypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3Jpn);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Jpn` entity type.
   * @returns A `PaymentInformationDetailV3Jpn` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3JpnRequestBuilder {
    return new PaymentInformationDetailV3JpnRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Jpn`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Jpn`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3Jpn> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Jpn);
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

export interface PaymentInformationDetailV3JpnType {
  paymentInformationDetailV3ExternalCode: BigNumber;
  paymentInformationV3EffectiveStartDate: Moment;
  paymentInformationV3Worker: string;
  accountType?: string;
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

export interface PaymentInformationDetailV3JpnTypeForceMandatory {
  paymentInformationDetailV3ExternalCode: BigNumber;
  paymentInformationV3EffectiveStartDate: Moment;
  paymentInformationV3Worker: string;
  accountType: string;
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

export namespace PaymentInformationDetailV3Jpn {
  /**
   * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Jpn> = new BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Jpn, 'Edm.Int64');
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Jpn> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Jpn, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Jpn> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Jpn, 'Edm.String');
  /**
   * Static representation of the [[accountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE: StringField<PaymentInformationDetailV3Jpn> = new StringField('accountType', PaymentInformationDetailV3Jpn, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3Jpn> = new StringField('createdBy', PaymentInformationDetailV3Jpn, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Jpn> = new DateField('createdDateTime', PaymentInformationDetailV3Jpn, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Jpn> = new BigNumberField('externalCode', PaymentInformationDetailV3Jpn, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Jpn> = new StringField('lastModifiedBy', PaymentInformationDetailV3Jpn, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Jpn> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3Jpn, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Jpn> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Jpn, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE_NAV: OneToOneLink<PaymentInformationDetailV3Jpn, MdfEnumValue> = new OneToOneLink('accountTypeNav', PaymentInformationDetailV3Jpn, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Jpn, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3Jpn, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Jpn, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Jpn, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Jpn, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Jpn, MdfEnumValue);
  /**
   * All fields of the PaymentInformationDetailV3Jpn entity.
   */
  export const _allFields: Array<BigNumberField<PaymentInformationDetailV3Jpn> | DateField<PaymentInformationDetailV3Jpn> | StringField<PaymentInformationDetailV3Jpn> | OneToOneLink<PaymentInformationDetailV3Jpn, MdfEnumValue> | OneToOneLink<PaymentInformationDetailV3Jpn, User>> = [
    PaymentInformationDetailV3Jpn.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
    PaymentInformationDetailV3Jpn.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3Jpn.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3Jpn.ACCOUNT_TYPE,
    PaymentInformationDetailV3Jpn.CREATED_BY,
    PaymentInformationDetailV3Jpn.CREATED_DATE_TIME,
    PaymentInformationDetailV3Jpn.EXTERNAL_CODE,
    PaymentInformationDetailV3Jpn.LAST_MODIFIED_BY,
    PaymentInformationDetailV3Jpn.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3Jpn.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3Jpn.ACCOUNT_TYPE_NAV,
    PaymentInformationDetailV3Jpn.CREATED_BY_NAV,
    PaymentInformationDetailV3Jpn.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3Jpn.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3Jpn> = new AllFields('*', PaymentInformationDetailV3Jpn);
  /**
   * All key fields of the PaymentInformationDetailV3Jpn entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3Jpn>> = [PaymentInformationDetailV3Jpn.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Jpn.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Jpn.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Jpn.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Jpn.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3Jpn> } = PaymentInformationDetailV3Jpn._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3Jpn> }, field: Selectable<PaymentInformationDetailV3Jpn>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
