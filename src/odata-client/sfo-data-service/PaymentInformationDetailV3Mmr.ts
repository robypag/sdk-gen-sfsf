/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3MmrRequestBuilder } from './PaymentInformationDetailV3MmrRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3MMR" of service "SFOData".
 */
export class PaymentInformationDetailV3Mmr extends Entity implements PaymentInformationDetailV3MmrType {
  /**
   * Technical entity name for PaymentInformationDetailV3Mmr.
   */
  static _entityName = 'PaymentInformationDetailV3MMR';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3Mmr.
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
   * Returns an entity builder to construct instances `PaymentInformationDetailV3Mmr`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Mmr`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3Mmr, PaymentInformationDetailV3MmrTypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3Mmr);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Mmr` entity type.
   * @returns A `PaymentInformationDetailV3Mmr` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3MmrRequestBuilder {
    return new PaymentInformationDetailV3MmrRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Mmr`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Mmr`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3Mmr> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Mmr);
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

export interface PaymentInformationDetailV3MmrType {
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

export interface PaymentInformationDetailV3MmrTypeForceMandatory {
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

export namespace PaymentInformationDetailV3Mmr {
  /**
   * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Mmr> = new BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Mmr, 'Edm.Int64');
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Mmr> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Mmr, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Mmr> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Mmr, 'Edm.String');
  /**
   * Static representation of the [[accountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE: StringField<PaymentInformationDetailV3Mmr> = new StringField('accountType', PaymentInformationDetailV3Mmr, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3Mmr> = new StringField('createdBy', PaymentInformationDetailV3Mmr, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Mmr> = new DateField('createdDateTime', PaymentInformationDetailV3Mmr, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Mmr> = new BigNumberField('externalCode', PaymentInformationDetailV3Mmr, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Mmr> = new StringField('lastModifiedBy', PaymentInformationDetailV3Mmr, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Mmr> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3Mmr, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Mmr> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Mmr, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE_NAV: OneToOneLink<PaymentInformationDetailV3Mmr, MdfEnumValue> = new OneToOneLink('accountTypeNav', PaymentInformationDetailV3Mmr, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Mmr, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3Mmr, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Mmr, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Mmr, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Mmr, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Mmr, MdfEnumValue);
  /**
   * All fields of the PaymentInformationDetailV3Mmr entity.
   */
  export const _allFields: Array<BigNumberField<PaymentInformationDetailV3Mmr> | DateField<PaymentInformationDetailV3Mmr> | StringField<PaymentInformationDetailV3Mmr> | OneToOneLink<PaymentInformationDetailV3Mmr, MdfEnumValue> | OneToOneLink<PaymentInformationDetailV3Mmr, User>> = [
    PaymentInformationDetailV3Mmr.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
    PaymentInformationDetailV3Mmr.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3Mmr.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3Mmr.ACCOUNT_TYPE,
    PaymentInformationDetailV3Mmr.CREATED_BY,
    PaymentInformationDetailV3Mmr.CREATED_DATE_TIME,
    PaymentInformationDetailV3Mmr.EXTERNAL_CODE,
    PaymentInformationDetailV3Mmr.LAST_MODIFIED_BY,
    PaymentInformationDetailV3Mmr.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3Mmr.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3Mmr.ACCOUNT_TYPE_NAV,
    PaymentInformationDetailV3Mmr.CREATED_BY_NAV,
    PaymentInformationDetailV3Mmr.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3Mmr.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3Mmr> = new AllFields('*', PaymentInformationDetailV3Mmr);
  /**
   * All key fields of the PaymentInformationDetailV3Mmr entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3Mmr>> = [PaymentInformationDetailV3Mmr.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Mmr.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Mmr.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Mmr.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Mmr.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3Mmr> } = PaymentInformationDetailV3Mmr._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3Mmr> }, field: Selectable<PaymentInformationDetailV3Mmr>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
