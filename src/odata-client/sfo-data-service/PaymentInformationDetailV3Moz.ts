/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3MozRequestBuilder } from './PaymentInformationDetailV3MozRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3MOZ" of service "SFOData".
 */
export class PaymentInformationDetailV3Moz extends Entity implements PaymentInformationDetailV3MozType {
  /**
   * Technical entity name for PaymentInformationDetailV3Moz.
   */
  static _entityName = 'PaymentInformationDetailV3MOZ';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3Moz.
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
   * Returns an entity builder to construct instances `PaymentInformationDetailV3Moz`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Moz`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3Moz, PaymentInformationDetailV3MozTypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3Moz);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Moz` entity type.
   * @returns A `PaymentInformationDetailV3Moz` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3MozRequestBuilder {
    return new PaymentInformationDetailV3MozRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Moz`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Moz`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3Moz> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Moz);
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

export interface PaymentInformationDetailV3MozType {
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

export interface PaymentInformationDetailV3MozTypeForceMandatory {
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

export namespace PaymentInformationDetailV3Moz {
  /**
   * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Moz> = new BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Moz, 'Edm.Int64');
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Moz> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Moz, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Moz> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Moz, 'Edm.String');
  /**
   * Static representation of the [[accountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE: StringField<PaymentInformationDetailV3Moz> = new StringField('accountType', PaymentInformationDetailV3Moz, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3Moz> = new StringField('createdBy', PaymentInformationDetailV3Moz, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Moz> = new DateField('createdDateTime', PaymentInformationDetailV3Moz, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Moz> = new BigNumberField('externalCode', PaymentInformationDetailV3Moz, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Moz> = new StringField('lastModifiedBy', PaymentInformationDetailV3Moz, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Moz> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3Moz, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Moz> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Moz, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE_NAV: OneToOneLink<PaymentInformationDetailV3Moz, MdfEnumValue> = new OneToOneLink('accountTypeNav', PaymentInformationDetailV3Moz, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Moz, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3Moz, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Moz, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Moz, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Moz, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Moz, MdfEnumValue);
  /**
   * All fields of the PaymentInformationDetailV3Moz entity.
   */
  export const _allFields: Array<BigNumberField<PaymentInformationDetailV3Moz> | DateField<PaymentInformationDetailV3Moz> | StringField<PaymentInformationDetailV3Moz> | OneToOneLink<PaymentInformationDetailV3Moz, MdfEnumValue> | OneToOneLink<PaymentInformationDetailV3Moz, User>> = [
    PaymentInformationDetailV3Moz.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
    PaymentInformationDetailV3Moz.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3Moz.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3Moz.ACCOUNT_TYPE,
    PaymentInformationDetailV3Moz.CREATED_BY,
    PaymentInformationDetailV3Moz.CREATED_DATE_TIME,
    PaymentInformationDetailV3Moz.EXTERNAL_CODE,
    PaymentInformationDetailV3Moz.LAST_MODIFIED_BY,
    PaymentInformationDetailV3Moz.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3Moz.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3Moz.ACCOUNT_TYPE_NAV,
    PaymentInformationDetailV3Moz.CREATED_BY_NAV,
    PaymentInformationDetailV3Moz.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3Moz.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3Moz> = new AllFields('*', PaymentInformationDetailV3Moz);
  /**
   * All key fields of the PaymentInformationDetailV3Moz entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3Moz>> = [PaymentInformationDetailV3Moz.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Moz.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Moz.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Moz.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Moz.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3Moz> } = PaymentInformationDetailV3Moz._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3Moz> }, field: Selectable<PaymentInformationDetailV3Moz>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
