/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3ColRequestBuilder } from './PaymentInformationDetailV3ColRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3COL" of service "SFOData".
 */
export class PaymentInformationDetailV3Col extends Entity implements PaymentInformationDetailV3ColType {
  /**
   * Technical entity name for PaymentInformationDetailV3Col.
   */
  static _entityName = 'PaymentInformationDetailV3COL';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3Col.
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
   * Proof of Identity.
   * Maximum length: 255.
   * @nullable
   */
  newAccountIdType?: string;
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
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  newAccountIdTypeNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `PaymentInformationDetailV3Col`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Col`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3Col, PaymentInformationDetailV3ColTypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3Col);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Col` entity type.
   * @returns A `PaymentInformationDetailV3Col` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3ColRequestBuilder {
    return new PaymentInformationDetailV3ColRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Col`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Col`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3Col> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Col);
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

export interface PaymentInformationDetailV3ColType {
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
  newAccountIdType?: string;
  accountTypeNav: MdfEnumValueType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  newAccountIdTypeNav: MdfEnumValueType;
}

export interface PaymentInformationDetailV3ColTypeForceMandatory {
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
  newAccountIdType: string;
  accountTypeNav: MdfEnumValueType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  newAccountIdTypeNav: MdfEnumValueType;
}

export namespace PaymentInformationDetailV3Col {
  /**
   * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Col> = new BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Col, 'Edm.Int64');
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Col> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Col, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Col> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Col, 'Edm.String');
  /**
   * Static representation of the [[accountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE: StringField<PaymentInformationDetailV3Col> = new StringField('accountType', PaymentInformationDetailV3Col, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3Col> = new StringField('createdBy', PaymentInformationDetailV3Col, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Col> = new DateField('createdDateTime', PaymentInformationDetailV3Col, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Col> = new BigNumberField('externalCode', PaymentInformationDetailV3Col, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Col> = new StringField('lastModifiedBy', PaymentInformationDetailV3Col, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Col> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3Col, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Col> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Col, 'Edm.String');
  /**
   * Static representation of the [[newAccountIdType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEW_ACCOUNT_ID_TYPE: StringField<PaymentInformationDetailV3Col> = new StringField('newAccountIdType', PaymentInformationDetailV3Col, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE_NAV: OneToOneLink<PaymentInformationDetailV3Col, MdfEnumValue> = new OneToOneLink('accountTypeNav', PaymentInformationDetailV3Col, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Col, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3Col, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Col, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Col, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Col, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Col, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[newAccountIdTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEW_ACCOUNT_ID_TYPE_NAV: OneToOneLink<PaymentInformationDetailV3Col, MdfEnumValue> = new OneToOneLink('newAccountIdTypeNav', PaymentInformationDetailV3Col, MdfEnumValue);
  /**
   * All fields of the PaymentInformationDetailV3Col entity.
   */
  export const _allFields: Array<BigNumberField<PaymentInformationDetailV3Col> | DateField<PaymentInformationDetailV3Col> | StringField<PaymentInformationDetailV3Col> | OneToOneLink<PaymentInformationDetailV3Col, MdfEnumValue> | OneToOneLink<PaymentInformationDetailV3Col, User>> = [
    PaymentInformationDetailV3Col.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
    PaymentInformationDetailV3Col.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3Col.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3Col.ACCOUNT_TYPE,
    PaymentInformationDetailV3Col.CREATED_BY,
    PaymentInformationDetailV3Col.CREATED_DATE_TIME,
    PaymentInformationDetailV3Col.EXTERNAL_CODE,
    PaymentInformationDetailV3Col.LAST_MODIFIED_BY,
    PaymentInformationDetailV3Col.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3Col.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3Col.NEW_ACCOUNT_ID_TYPE,
    PaymentInformationDetailV3Col.ACCOUNT_TYPE_NAV,
    PaymentInformationDetailV3Col.CREATED_BY_NAV,
    PaymentInformationDetailV3Col.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3Col.MDF_SYSTEM_RECORD_STATUS_NAV,
    PaymentInformationDetailV3Col.NEW_ACCOUNT_ID_TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3Col> = new AllFields('*', PaymentInformationDetailV3Col);
  /**
   * All key fields of the PaymentInformationDetailV3Col entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3Col>> = [PaymentInformationDetailV3Col.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Col.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Col.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Col.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Col.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3Col> } = PaymentInformationDetailV3Col._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3Col> }, field: Selectable<PaymentInformationDetailV3Col>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
