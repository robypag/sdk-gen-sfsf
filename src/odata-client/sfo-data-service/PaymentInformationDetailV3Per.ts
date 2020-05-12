/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3PerRequestBuilder } from './PaymentInformationDetailV3PerRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3PER" of service "SFOData".
 */
export class PaymentInformationDetailV3Per extends Entity implements PaymentInformationDetailV3PerType {
  /**
   * Technical entity name for PaymentInformationDetailV3Per.
   */
  static _entityName = 'PaymentInformationDetailV3PER';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3Per.
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
   * Payment Reference.
   * Maximum length: 38.
   * @nullable
   */
  paymentReference?: string;
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
   * Returns an entity builder to construct instances `PaymentInformationDetailV3Per`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Per`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3Per, PaymentInformationDetailV3PerTypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3Per);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Per` entity type.
   * @returns A `PaymentInformationDetailV3Per` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3PerRequestBuilder {
    return new PaymentInformationDetailV3PerRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Per`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Per`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3Per> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Per);
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

export interface PaymentInformationDetailV3PerType {
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
  paymentReference?: string;
  accountTypeNav: MdfEnumValueType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface PaymentInformationDetailV3PerTypeForceMandatory {
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
  paymentReference: string;
  accountTypeNav: MdfEnumValueType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace PaymentInformationDetailV3Per {
  /**
   * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Per> = new BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Per, 'Edm.Int64');
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Per> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Per, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Per> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Per, 'Edm.String');
  /**
   * Static representation of the [[accountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE: StringField<PaymentInformationDetailV3Per> = new StringField('accountType', PaymentInformationDetailV3Per, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3Per> = new StringField('createdBy', PaymentInformationDetailV3Per, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Per> = new DateField('createdDateTime', PaymentInformationDetailV3Per, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Per> = new BigNumberField('externalCode', PaymentInformationDetailV3Per, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Per> = new StringField('lastModifiedBy', PaymentInformationDetailV3Per, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Per> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3Per, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Per> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Per, 'Edm.String');
  /**
   * Static representation of the [[paymentReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_REFERENCE: StringField<PaymentInformationDetailV3Per> = new StringField('paymentReference', PaymentInformationDetailV3Per, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE_NAV: OneToOneLink<PaymentInformationDetailV3Per, MdfEnumValue> = new OneToOneLink('accountTypeNav', PaymentInformationDetailV3Per, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Per, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3Per, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Per, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Per, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Per, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Per, MdfEnumValue);
  /**
   * All fields of the PaymentInformationDetailV3Per entity.
   */
  export const _allFields: Array<BigNumberField<PaymentInformationDetailV3Per> | DateField<PaymentInformationDetailV3Per> | StringField<PaymentInformationDetailV3Per> | OneToOneLink<PaymentInformationDetailV3Per, MdfEnumValue> | OneToOneLink<PaymentInformationDetailV3Per, User>> = [
    PaymentInformationDetailV3Per.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
    PaymentInformationDetailV3Per.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3Per.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3Per.ACCOUNT_TYPE,
    PaymentInformationDetailV3Per.CREATED_BY,
    PaymentInformationDetailV3Per.CREATED_DATE_TIME,
    PaymentInformationDetailV3Per.EXTERNAL_CODE,
    PaymentInformationDetailV3Per.LAST_MODIFIED_BY,
    PaymentInformationDetailV3Per.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3Per.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3Per.PAYMENT_REFERENCE,
    PaymentInformationDetailV3Per.ACCOUNT_TYPE_NAV,
    PaymentInformationDetailV3Per.CREATED_BY_NAV,
    PaymentInformationDetailV3Per.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3Per.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3Per> = new AllFields('*', PaymentInformationDetailV3Per);
  /**
   * All key fields of the PaymentInformationDetailV3Per entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3Per>> = [PaymentInformationDetailV3Per.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Per.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Per.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Per.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Per.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3Per> } = PaymentInformationDetailV3Per._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3Per> }, field: Selectable<PaymentInformationDetailV3Per>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
