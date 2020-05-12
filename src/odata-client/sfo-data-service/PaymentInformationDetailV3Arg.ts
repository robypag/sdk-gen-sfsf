/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3ArgRequestBuilder } from './PaymentInformationDetailV3ArgRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3ARG" of service "SFOData".
 */
export class PaymentInformationDetailV3Arg extends Entity implements PaymentInformationDetailV3ArgType {
  /**
   * Technical entity name for PaymentInformationDetailV3Arg.
   */
  static _entityName = 'PaymentInformationDetailV3ARG';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3Arg.
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
   * Returns an entity builder to construct instances `PaymentInformationDetailV3Arg`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Arg`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3Arg, PaymentInformationDetailV3ArgTypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3Arg);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Arg` entity type.
   * @returns A `PaymentInformationDetailV3Arg` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3ArgRequestBuilder {
    return new PaymentInformationDetailV3ArgRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Arg`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Arg`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3Arg> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Arg);
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

export interface PaymentInformationDetailV3ArgType {
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

export interface PaymentInformationDetailV3ArgTypeForceMandatory {
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

export namespace PaymentInformationDetailV3Arg {
  /**
   * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Arg> = new BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Arg, 'Edm.Int64');
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Arg> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Arg, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Arg> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Arg, 'Edm.String');
  /**
   * Static representation of the [[accountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE: StringField<PaymentInformationDetailV3Arg> = new StringField('accountType', PaymentInformationDetailV3Arg, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3Arg> = new StringField('createdBy', PaymentInformationDetailV3Arg, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Arg> = new DateField('createdDateTime', PaymentInformationDetailV3Arg, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Arg> = new BigNumberField('externalCode', PaymentInformationDetailV3Arg, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Arg> = new StringField('lastModifiedBy', PaymentInformationDetailV3Arg, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Arg> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3Arg, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Arg> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Arg, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE_NAV: OneToOneLink<PaymentInformationDetailV3Arg, MdfEnumValue> = new OneToOneLink('accountTypeNav', PaymentInformationDetailV3Arg, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Arg, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3Arg, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Arg, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Arg, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Arg, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Arg, MdfEnumValue);
  /**
   * All fields of the PaymentInformationDetailV3Arg entity.
   */
  export const _allFields: Array<BigNumberField<PaymentInformationDetailV3Arg> | DateField<PaymentInformationDetailV3Arg> | StringField<PaymentInformationDetailV3Arg> | OneToOneLink<PaymentInformationDetailV3Arg, MdfEnumValue> | OneToOneLink<PaymentInformationDetailV3Arg, User>> = [
    PaymentInformationDetailV3Arg.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
    PaymentInformationDetailV3Arg.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3Arg.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3Arg.ACCOUNT_TYPE,
    PaymentInformationDetailV3Arg.CREATED_BY,
    PaymentInformationDetailV3Arg.CREATED_DATE_TIME,
    PaymentInformationDetailV3Arg.EXTERNAL_CODE,
    PaymentInformationDetailV3Arg.LAST_MODIFIED_BY,
    PaymentInformationDetailV3Arg.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3Arg.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3Arg.ACCOUNT_TYPE_NAV,
    PaymentInformationDetailV3Arg.CREATED_BY_NAV,
    PaymentInformationDetailV3Arg.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3Arg.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3Arg> = new AllFields('*', PaymentInformationDetailV3Arg);
  /**
   * All key fields of the PaymentInformationDetailV3Arg entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3Arg>> = [PaymentInformationDetailV3Arg.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Arg.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Arg.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Arg.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Arg.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3Arg> } = PaymentInformationDetailV3Arg._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3Arg> }, field: Selectable<PaymentInformationDetailV3Arg>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
