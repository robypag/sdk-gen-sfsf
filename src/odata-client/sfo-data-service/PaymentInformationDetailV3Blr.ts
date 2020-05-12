/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3BlrRequestBuilder } from './PaymentInformationDetailV3BlrRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3BLR" of service "SFOData".
 */
export class PaymentInformationDetailV3Blr extends Entity implements PaymentInformationDetailV3BlrType {
  /**
   * Technical entity name for PaymentInformationDetailV3Blr.
   */
  static _entityName = 'PaymentInformationDetailV3BLR';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3Blr.
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
   * Returns an entity builder to construct instances `PaymentInformationDetailV3Blr`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Blr`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3Blr, PaymentInformationDetailV3BlrTypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3Blr);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Blr` entity type.
   * @returns A `PaymentInformationDetailV3Blr` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3BlrRequestBuilder {
    return new PaymentInformationDetailV3BlrRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Blr`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Blr`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3Blr> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Blr);
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

export interface PaymentInformationDetailV3BlrType {
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

export interface PaymentInformationDetailV3BlrTypeForceMandatory {
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

export namespace PaymentInformationDetailV3Blr {
  /**
   * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Blr> = new BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Blr, 'Edm.Int64');
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Blr> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Blr, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Blr> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Blr, 'Edm.String');
  /**
   * Static representation of the [[accountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE: StringField<PaymentInformationDetailV3Blr> = new StringField('accountType', PaymentInformationDetailV3Blr, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3Blr> = new StringField('createdBy', PaymentInformationDetailV3Blr, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Blr> = new DateField('createdDateTime', PaymentInformationDetailV3Blr, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Blr> = new BigNumberField('externalCode', PaymentInformationDetailV3Blr, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Blr> = new StringField('lastModifiedBy', PaymentInformationDetailV3Blr, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Blr> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3Blr, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Blr> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Blr, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE_NAV: OneToOneLink<PaymentInformationDetailV3Blr, MdfEnumValue> = new OneToOneLink('accountTypeNav', PaymentInformationDetailV3Blr, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Blr, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3Blr, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Blr, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Blr, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Blr, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Blr, MdfEnumValue);
  /**
   * All fields of the PaymentInformationDetailV3Blr entity.
   */
  export const _allFields: Array<BigNumberField<PaymentInformationDetailV3Blr> | DateField<PaymentInformationDetailV3Blr> | StringField<PaymentInformationDetailV3Blr> | OneToOneLink<PaymentInformationDetailV3Blr, MdfEnumValue> | OneToOneLink<PaymentInformationDetailV3Blr, User>> = [
    PaymentInformationDetailV3Blr.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
    PaymentInformationDetailV3Blr.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3Blr.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3Blr.ACCOUNT_TYPE,
    PaymentInformationDetailV3Blr.CREATED_BY,
    PaymentInformationDetailV3Blr.CREATED_DATE_TIME,
    PaymentInformationDetailV3Blr.EXTERNAL_CODE,
    PaymentInformationDetailV3Blr.LAST_MODIFIED_BY,
    PaymentInformationDetailV3Blr.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3Blr.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3Blr.ACCOUNT_TYPE_NAV,
    PaymentInformationDetailV3Blr.CREATED_BY_NAV,
    PaymentInformationDetailV3Blr.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3Blr.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3Blr> = new AllFields('*', PaymentInformationDetailV3Blr);
  /**
   * All key fields of the PaymentInformationDetailV3Blr entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3Blr>> = [PaymentInformationDetailV3Blr.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Blr.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Blr.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Blr.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Blr.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3Blr> } = PaymentInformationDetailV3Blr._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3Blr> }, field: Selectable<PaymentInformationDetailV3Blr>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
