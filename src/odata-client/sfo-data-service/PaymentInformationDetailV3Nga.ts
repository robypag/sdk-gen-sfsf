/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3NgaRequestBuilder } from './PaymentInformationDetailV3NgaRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3NGA" of service "SFOData".
 */
export class PaymentInformationDetailV3Nga extends Entity implements PaymentInformationDetailV3NgaType {
  /**
   * Technical entity name for PaymentInformationDetailV3Nga.
   */
  static _entityName = 'PaymentInformationDetailV3NGA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3Nga.
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
   * Returns an entity builder to construct instances `PaymentInformationDetailV3Nga`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Nga`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3Nga, PaymentInformationDetailV3NgaTypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3Nga);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Nga` entity type.
   * @returns A `PaymentInformationDetailV3Nga` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3NgaRequestBuilder {
    return new PaymentInformationDetailV3NgaRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Nga`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Nga`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3Nga> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Nga);
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

export interface PaymentInformationDetailV3NgaType {
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

export interface PaymentInformationDetailV3NgaTypeForceMandatory {
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

export namespace PaymentInformationDetailV3Nga {
  /**
   * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Nga> = new BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Nga, 'Edm.Int64');
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Nga> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Nga, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Nga> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Nga, 'Edm.String');
  /**
   * Static representation of the [[accountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE: StringField<PaymentInformationDetailV3Nga> = new StringField('accountType', PaymentInformationDetailV3Nga, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3Nga> = new StringField('createdBy', PaymentInformationDetailV3Nga, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Nga> = new DateField('createdDateTime', PaymentInformationDetailV3Nga, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Nga> = new BigNumberField('externalCode', PaymentInformationDetailV3Nga, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Nga> = new StringField('lastModifiedBy', PaymentInformationDetailV3Nga, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Nga> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3Nga, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Nga> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Nga, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE_NAV: OneToOneLink<PaymentInformationDetailV3Nga, MdfEnumValue> = new OneToOneLink('accountTypeNav', PaymentInformationDetailV3Nga, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Nga, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3Nga, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Nga, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Nga, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Nga, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Nga, MdfEnumValue);
  /**
   * All fields of the PaymentInformationDetailV3Nga entity.
   */
  export const _allFields: Array<BigNumberField<PaymentInformationDetailV3Nga> | DateField<PaymentInformationDetailV3Nga> | StringField<PaymentInformationDetailV3Nga> | OneToOneLink<PaymentInformationDetailV3Nga, MdfEnumValue> | OneToOneLink<PaymentInformationDetailV3Nga, User>> = [
    PaymentInformationDetailV3Nga.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
    PaymentInformationDetailV3Nga.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3Nga.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3Nga.ACCOUNT_TYPE,
    PaymentInformationDetailV3Nga.CREATED_BY,
    PaymentInformationDetailV3Nga.CREATED_DATE_TIME,
    PaymentInformationDetailV3Nga.EXTERNAL_CODE,
    PaymentInformationDetailV3Nga.LAST_MODIFIED_BY,
    PaymentInformationDetailV3Nga.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3Nga.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3Nga.ACCOUNT_TYPE_NAV,
    PaymentInformationDetailV3Nga.CREATED_BY_NAV,
    PaymentInformationDetailV3Nga.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3Nga.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3Nga> = new AllFields('*', PaymentInformationDetailV3Nga);
  /**
   * All key fields of the PaymentInformationDetailV3Nga entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3Nga>> = [PaymentInformationDetailV3Nga.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Nga.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Nga.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Nga.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Nga.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3Nga> } = PaymentInformationDetailV3Nga._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3Nga> }, field: Selectable<PaymentInformationDetailV3Nga>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
