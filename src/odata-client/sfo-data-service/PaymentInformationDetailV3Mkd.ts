/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3MkdRequestBuilder } from './PaymentInformationDetailV3MkdRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3MKD" of service "SFOData".
 */
export class PaymentInformationDetailV3Mkd extends Entity implements PaymentInformationDetailV3MkdType {
  /**
   * Technical entity name for PaymentInformationDetailV3Mkd.
   */
  static _entityName = 'PaymentInformationDetailV3MKD';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3Mkd.
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
   * Returns an entity builder to construct instances `PaymentInformationDetailV3Mkd`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Mkd`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3Mkd, PaymentInformationDetailV3MkdTypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3Mkd);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Mkd` entity type.
   * @returns A `PaymentInformationDetailV3Mkd` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3MkdRequestBuilder {
    return new PaymentInformationDetailV3MkdRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Mkd`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Mkd`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3Mkd> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Mkd);
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

export interface PaymentInformationDetailV3MkdType {
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

export interface PaymentInformationDetailV3MkdTypeForceMandatory {
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

export namespace PaymentInformationDetailV3Mkd {
  /**
   * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Mkd> = new BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Mkd, 'Edm.Int64');
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Mkd> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Mkd, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Mkd> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Mkd, 'Edm.String');
  /**
   * Static representation of the [[accountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE: StringField<PaymentInformationDetailV3Mkd> = new StringField('accountType', PaymentInformationDetailV3Mkd, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3Mkd> = new StringField('createdBy', PaymentInformationDetailV3Mkd, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Mkd> = new DateField('createdDateTime', PaymentInformationDetailV3Mkd, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Mkd> = new BigNumberField('externalCode', PaymentInformationDetailV3Mkd, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Mkd> = new StringField('lastModifiedBy', PaymentInformationDetailV3Mkd, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Mkd> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3Mkd, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Mkd> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Mkd, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE_NAV: OneToOneLink<PaymentInformationDetailV3Mkd, MdfEnumValue> = new OneToOneLink('accountTypeNav', PaymentInformationDetailV3Mkd, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Mkd, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3Mkd, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Mkd, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Mkd, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Mkd, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Mkd, MdfEnumValue);
  /**
   * All fields of the PaymentInformationDetailV3Mkd entity.
   */
  export const _allFields: Array<BigNumberField<PaymentInformationDetailV3Mkd> | DateField<PaymentInformationDetailV3Mkd> | StringField<PaymentInformationDetailV3Mkd> | OneToOneLink<PaymentInformationDetailV3Mkd, MdfEnumValue> | OneToOneLink<PaymentInformationDetailV3Mkd, User>> = [
    PaymentInformationDetailV3Mkd.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
    PaymentInformationDetailV3Mkd.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3Mkd.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3Mkd.ACCOUNT_TYPE,
    PaymentInformationDetailV3Mkd.CREATED_BY,
    PaymentInformationDetailV3Mkd.CREATED_DATE_TIME,
    PaymentInformationDetailV3Mkd.EXTERNAL_CODE,
    PaymentInformationDetailV3Mkd.LAST_MODIFIED_BY,
    PaymentInformationDetailV3Mkd.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3Mkd.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3Mkd.ACCOUNT_TYPE_NAV,
    PaymentInformationDetailV3Mkd.CREATED_BY_NAV,
    PaymentInformationDetailV3Mkd.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3Mkd.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3Mkd> = new AllFields('*', PaymentInformationDetailV3Mkd);
  /**
   * All key fields of the PaymentInformationDetailV3Mkd entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3Mkd>> = [PaymentInformationDetailV3Mkd.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Mkd.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Mkd.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Mkd.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Mkd.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3Mkd> } = PaymentInformationDetailV3Mkd._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3Mkd> }, field: Selectable<PaymentInformationDetailV3Mkd>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
