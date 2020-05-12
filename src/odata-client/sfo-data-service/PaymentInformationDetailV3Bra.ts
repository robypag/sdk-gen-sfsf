/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3BraRequestBuilder } from './PaymentInformationDetailV3BraRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3BRA" of service "SFOData".
 */
export class PaymentInformationDetailV3Bra extends Entity implements PaymentInformationDetailV3BraType {
  /**
   * Technical entity name for PaymentInformationDetailV3Bra.
   */
  static _entityName = 'PaymentInformationDetailV3BRA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3Bra.
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
   * Returns an entity builder to construct instances `PaymentInformationDetailV3Bra`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Bra`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3Bra, PaymentInformationDetailV3BraTypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3Bra);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Bra` entity type.
   * @returns A `PaymentInformationDetailV3Bra` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3BraRequestBuilder {
    return new PaymentInformationDetailV3BraRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Bra`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Bra`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3Bra> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Bra);
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

export interface PaymentInformationDetailV3BraType {
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

export interface PaymentInformationDetailV3BraTypeForceMandatory {
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

export namespace PaymentInformationDetailV3Bra {
  /**
   * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Bra> = new BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Bra, 'Edm.Int64');
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Bra> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Bra, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Bra> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Bra, 'Edm.String');
  /**
   * Static representation of the [[checkDigit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_DIGIT: StringField<PaymentInformationDetailV3Bra> = new StringField('checkDigit', PaymentInformationDetailV3Bra, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3Bra> = new StringField('createdBy', PaymentInformationDetailV3Bra, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Bra> = new DateField('createdDateTime', PaymentInformationDetailV3Bra, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Bra> = new BigNumberField('externalCode', PaymentInformationDetailV3Bra, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Bra> = new StringField('lastModifiedBy', PaymentInformationDetailV3Bra, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Bra> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3Bra, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Bra> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Bra, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Bra, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3Bra, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Bra, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Bra, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Bra, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Bra, MdfEnumValue);
  /**
   * All fields of the PaymentInformationDetailV3Bra entity.
   */
  export const _allFields: Array<BigNumberField<PaymentInformationDetailV3Bra> | DateField<PaymentInformationDetailV3Bra> | StringField<PaymentInformationDetailV3Bra> | OneToOneLink<PaymentInformationDetailV3Bra, User> | OneToOneLink<PaymentInformationDetailV3Bra, MdfEnumValue>> = [
    PaymentInformationDetailV3Bra.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
    PaymentInformationDetailV3Bra.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3Bra.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3Bra.CHECK_DIGIT,
    PaymentInformationDetailV3Bra.CREATED_BY,
    PaymentInformationDetailV3Bra.CREATED_DATE_TIME,
    PaymentInformationDetailV3Bra.EXTERNAL_CODE,
    PaymentInformationDetailV3Bra.LAST_MODIFIED_BY,
    PaymentInformationDetailV3Bra.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3Bra.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3Bra.CREATED_BY_NAV,
    PaymentInformationDetailV3Bra.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3Bra.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3Bra> = new AllFields('*', PaymentInformationDetailV3Bra);
  /**
   * All key fields of the PaymentInformationDetailV3Bra entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3Bra>> = [PaymentInformationDetailV3Bra.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Bra.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Bra.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Bra.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Bra.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3Bra> } = PaymentInformationDetailV3Bra._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3Bra> }, field: Selectable<PaymentInformationDetailV3Bra>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
