/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3IsrRequestBuilder } from './PaymentInformationDetailV3IsrRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3ISR" of service "SFOData".
 */
export class PaymentInformationDetailV3Isr extends Entity implements PaymentInformationDetailV3IsrType {
  /**
   * Technical entity name for PaymentInformationDetailV3Isr.
   */
  static _entityName = 'PaymentInformationDetailV3ISR';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3Isr.
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
   * Branch Name.
   * Maximum length: 255.
   * @nullable
   */
  branchName?: string;
  /**
   * Branch Code.
   * Maximum length: 255.
   * @nullable
   */
  branchNumberCode?: string;
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
   * Returns an entity builder to construct instances `PaymentInformationDetailV3Isr`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Isr`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3Isr, PaymentInformationDetailV3IsrTypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3Isr);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Isr` entity type.
   * @returns A `PaymentInformationDetailV3Isr` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3IsrRequestBuilder {
    return new PaymentInformationDetailV3IsrRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Isr`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Isr`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3Isr> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Isr);
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

export interface PaymentInformationDetailV3IsrType {
  paymentInformationDetailV3ExternalCode: BigNumber;
  paymentInformationV3EffectiveStartDate: Moment;
  paymentInformationV3Worker: string;
  branchName?: string;
  branchNumberCode?: string;
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

export interface PaymentInformationDetailV3IsrTypeForceMandatory {
  paymentInformationDetailV3ExternalCode: BigNumber;
  paymentInformationV3EffectiveStartDate: Moment;
  paymentInformationV3Worker: string;
  branchName: string;
  branchNumberCode: string;
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

export namespace PaymentInformationDetailV3Isr {
  /**
   * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Isr> = new BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Isr, 'Edm.Int64');
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Isr> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Isr, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Isr> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Isr, 'Edm.String');
  /**
   * Static representation of the [[branchName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH_NAME: StringField<PaymentInformationDetailV3Isr> = new StringField('branchName', PaymentInformationDetailV3Isr, 'Edm.String');
  /**
   * Static representation of the [[branchNumberCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH_NUMBER_CODE: StringField<PaymentInformationDetailV3Isr> = new StringField('branchNumberCode', PaymentInformationDetailV3Isr, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3Isr> = new StringField('createdBy', PaymentInformationDetailV3Isr, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Isr> = new DateField('createdDateTime', PaymentInformationDetailV3Isr, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Isr> = new BigNumberField('externalCode', PaymentInformationDetailV3Isr, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Isr> = new StringField('lastModifiedBy', PaymentInformationDetailV3Isr, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Isr> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3Isr, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Isr> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Isr, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Isr, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3Isr, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Isr, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Isr, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Isr, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Isr, MdfEnumValue);
  /**
   * All fields of the PaymentInformationDetailV3Isr entity.
   */
  export const _allFields: Array<BigNumberField<PaymentInformationDetailV3Isr> | DateField<PaymentInformationDetailV3Isr> | StringField<PaymentInformationDetailV3Isr> | OneToOneLink<PaymentInformationDetailV3Isr, User> | OneToOneLink<PaymentInformationDetailV3Isr, MdfEnumValue>> = [
    PaymentInformationDetailV3Isr.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
    PaymentInformationDetailV3Isr.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3Isr.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3Isr.BRANCH_NAME,
    PaymentInformationDetailV3Isr.BRANCH_NUMBER_CODE,
    PaymentInformationDetailV3Isr.CREATED_BY,
    PaymentInformationDetailV3Isr.CREATED_DATE_TIME,
    PaymentInformationDetailV3Isr.EXTERNAL_CODE,
    PaymentInformationDetailV3Isr.LAST_MODIFIED_BY,
    PaymentInformationDetailV3Isr.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3Isr.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3Isr.CREATED_BY_NAV,
    PaymentInformationDetailV3Isr.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3Isr.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3Isr> = new AllFields('*', PaymentInformationDetailV3Isr);
  /**
   * All key fields of the PaymentInformationDetailV3Isr entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3Isr>> = [PaymentInformationDetailV3Isr.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Isr.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Isr.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Isr.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Isr.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3Isr> } = PaymentInformationDetailV3Isr._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3Isr> }, field: Selectable<PaymentInformationDetailV3Isr>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
