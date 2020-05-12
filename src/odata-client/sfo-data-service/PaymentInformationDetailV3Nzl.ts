/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3NzlRequestBuilder } from './PaymentInformationDetailV3NzlRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3NZL" of service "SFOData".
 */
export class PaymentInformationDetailV3Nzl extends Entity implements PaymentInformationDetailV3NzlType {
  /**
   * Technical entity name for PaymentInformationDetailV3Nzl.
   */
  static _entityName = 'PaymentInformationDetailV3NZL';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3Nzl.
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
   * Returns an entity builder to construct instances `PaymentInformationDetailV3Nzl`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Nzl`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3Nzl, PaymentInformationDetailV3NzlTypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3Nzl);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Nzl` entity type.
   * @returns A `PaymentInformationDetailV3Nzl` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3NzlRequestBuilder {
    return new PaymentInformationDetailV3NzlRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Nzl`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Nzl`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3Nzl> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Nzl);
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

export interface PaymentInformationDetailV3NzlType {
  paymentInformationDetailV3ExternalCode: BigNumber;
  paymentInformationV3EffectiveStartDate: Moment;
  paymentInformationV3Worker: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  paymentReference?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface PaymentInformationDetailV3NzlTypeForceMandatory {
  paymentInformationDetailV3ExternalCode: BigNumber;
  paymentInformationV3EffectiveStartDate: Moment;
  paymentInformationV3Worker: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  paymentReference: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace PaymentInformationDetailV3Nzl {
  /**
   * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Nzl> = new BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Nzl, 'Edm.Int64');
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Nzl> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Nzl, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Nzl> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Nzl, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3Nzl> = new StringField('createdBy', PaymentInformationDetailV3Nzl, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Nzl> = new DateField('createdDateTime', PaymentInformationDetailV3Nzl, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Nzl> = new BigNumberField('externalCode', PaymentInformationDetailV3Nzl, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Nzl> = new StringField('lastModifiedBy', PaymentInformationDetailV3Nzl, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Nzl> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3Nzl, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Nzl> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Nzl, 'Edm.String');
  /**
   * Static representation of the [[paymentReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_REFERENCE: StringField<PaymentInformationDetailV3Nzl> = new StringField('paymentReference', PaymentInformationDetailV3Nzl, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Nzl, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3Nzl, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Nzl, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Nzl, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Nzl, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Nzl, MdfEnumValue);
  /**
   * All fields of the PaymentInformationDetailV3Nzl entity.
   */
  export const _allFields: Array<BigNumberField<PaymentInformationDetailV3Nzl> | DateField<PaymentInformationDetailV3Nzl> | StringField<PaymentInformationDetailV3Nzl> | OneToOneLink<PaymentInformationDetailV3Nzl, User> | OneToOneLink<PaymentInformationDetailV3Nzl, MdfEnumValue>> = [
    PaymentInformationDetailV3Nzl.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
    PaymentInformationDetailV3Nzl.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3Nzl.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3Nzl.CREATED_BY,
    PaymentInformationDetailV3Nzl.CREATED_DATE_TIME,
    PaymentInformationDetailV3Nzl.EXTERNAL_CODE,
    PaymentInformationDetailV3Nzl.LAST_MODIFIED_BY,
    PaymentInformationDetailV3Nzl.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3Nzl.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3Nzl.PAYMENT_REFERENCE,
    PaymentInformationDetailV3Nzl.CREATED_BY_NAV,
    PaymentInformationDetailV3Nzl.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3Nzl.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3Nzl> = new AllFields('*', PaymentInformationDetailV3Nzl);
  /**
   * All key fields of the PaymentInformationDetailV3Nzl entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3Nzl>> = [PaymentInformationDetailV3Nzl.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Nzl.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Nzl.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Nzl.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Nzl.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3Nzl> } = PaymentInformationDetailV3Nzl._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3Nzl> }, field: Selectable<PaymentInformationDetailV3Nzl>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
