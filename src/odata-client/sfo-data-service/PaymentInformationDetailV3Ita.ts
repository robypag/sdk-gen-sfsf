/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3ItaRequestBuilder } from './PaymentInformationDetailV3ItaRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3ITA" of service "SFOData".
 */
export class PaymentInformationDetailV3Ita extends Entity implements PaymentInformationDetailV3ItaType {
  /**
   * Technical entity name for PaymentInformationDetailV3Ita.
   */
  static _entityName = 'PaymentInformationDetailV3ITA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3Ita.
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
   * Bank Control Key.
   * Maximum length: 1.
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
   * Returns an entity builder to construct instances `PaymentInformationDetailV3Ita`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Ita`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3Ita, PaymentInformationDetailV3ItaTypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3Ita);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Ita` entity type.
   * @returns A `PaymentInformationDetailV3Ita` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3ItaRequestBuilder {
    return new PaymentInformationDetailV3ItaRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Ita`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Ita`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3Ita> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Ita);
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

export interface PaymentInformationDetailV3ItaType {
  paymentInformationDetailV3ExternalCode: BigNumber;
  paymentInformationV3EffectiveStartDate: Moment;
  paymentInformationV3Worker: string;
  checkDigit?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface PaymentInformationDetailV3ItaTypeForceMandatory {
  paymentInformationDetailV3ExternalCode: BigNumber;
  paymentInformationV3EffectiveStartDate: Moment;
  paymentInformationV3Worker: string;
  checkDigit: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace PaymentInformationDetailV3Ita {
  /**
   * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Ita> = new BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Ita, 'Edm.Int64');
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Ita> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Ita, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Ita> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Ita, 'Edm.String');
  /**
   * Static representation of the [[checkDigit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_DIGIT: StringField<PaymentInformationDetailV3Ita> = new StringField('checkDigit', PaymentInformationDetailV3Ita, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3Ita> = new StringField('createdBy', PaymentInformationDetailV3Ita, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Ita> = new DateField('createdDateTime', PaymentInformationDetailV3Ita, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Ita> = new BigNumberField('externalCode', PaymentInformationDetailV3Ita, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Ita> = new StringField('lastModifiedBy', PaymentInformationDetailV3Ita, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Ita> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3Ita, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Ita> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Ita, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Ita, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3Ita, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Ita, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Ita, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Ita, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Ita, MdfEnumValue);
  /**
   * All fields of the PaymentInformationDetailV3Ita entity.
   */
  export const _allFields: Array<BigNumberField<PaymentInformationDetailV3Ita> | DateField<PaymentInformationDetailV3Ita> | StringField<PaymentInformationDetailV3Ita> | OneToOneLink<PaymentInformationDetailV3Ita, User> | OneToOneLink<PaymentInformationDetailV3Ita, MdfEnumValue>> = [
    PaymentInformationDetailV3Ita.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
    PaymentInformationDetailV3Ita.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3Ita.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3Ita.CHECK_DIGIT,
    PaymentInformationDetailV3Ita.CREATED_BY,
    PaymentInformationDetailV3Ita.CREATED_DATE_TIME,
    PaymentInformationDetailV3Ita.EXTERNAL_CODE,
    PaymentInformationDetailV3Ita.LAST_MODIFIED_BY,
    PaymentInformationDetailV3Ita.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3Ita.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3Ita.CREATED_BY_NAV,
    PaymentInformationDetailV3Ita.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3Ita.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3Ita> = new AllFields('*', PaymentInformationDetailV3Ita);
  /**
   * All key fields of the PaymentInformationDetailV3Ita entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3Ita>> = [PaymentInformationDetailV3Ita.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Ita.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Ita.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Ita.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Ita.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3Ita> } = PaymentInformationDetailV3Ita._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3Ita> }, field: Selectable<PaymentInformationDetailV3Ita>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
