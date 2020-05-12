/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3GbrRequestBuilder } from './PaymentInformationDetailV3GbrRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3GBR" of service "SFOData".
 */
export class PaymentInformationDetailV3Gbr extends Entity implements PaymentInformationDetailV3GbrType {
  /**
   * Technical entity name for PaymentInformationDetailV3Gbr.
   */
  static _entityName = 'PaymentInformationDetailV3GBR';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3Gbr.
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
   * Building Society Roll Number.
   * Maximum length: 255.
   * @nullable
   */
  buildingSocietyRollNumber?: string;
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
   * Returns an entity builder to construct instances `PaymentInformationDetailV3Gbr`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Gbr`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3Gbr, PaymentInformationDetailV3GbrTypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3Gbr);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Gbr` entity type.
   * @returns A `PaymentInformationDetailV3Gbr` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3GbrRequestBuilder {
    return new PaymentInformationDetailV3GbrRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Gbr`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Gbr`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3Gbr> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Gbr);
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

export interface PaymentInformationDetailV3GbrType {
  paymentInformationDetailV3ExternalCode: BigNumber;
  paymentInformationV3EffectiveStartDate: Moment;
  paymentInformationV3Worker: string;
  buildingSocietyRollNumber?: string;
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

export interface PaymentInformationDetailV3GbrTypeForceMandatory {
  paymentInformationDetailV3ExternalCode: BigNumber;
  paymentInformationV3EffectiveStartDate: Moment;
  paymentInformationV3Worker: string;
  buildingSocietyRollNumber: string;
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

export namespace PaymentInformationDetailV3Gbr {
  /**
   * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Gbr> = new BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Gbr, 'Edm.Int64');
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Gbr> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Gbr, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Gbr> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Gbr, 'Edm.String');
  /**
   * Static representation of the [[buildingSocietyRollNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUILDING_SOCIETY_ROLL_NUMBER: StringField<PaymentInformationDetailV3Gbr> = new StringField('buildingSocietyRollNumber', PaymentInformationDetailV3Gbr, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3Gbr> = new StringField('createdBy', PaymentInformationDetailV3Gbr, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Gbr> = new DateField('createdDateTime', PaymentInformationDetailV3Gbr, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Gbr> = new BigNumberField('externalCode', PaymentInformationDetailV3Gbr, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Gbr> = new StringField('lastModifiedBy', PaymentInformationDetailV3Gbr, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Gbr> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3Gbr, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Gbr> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Gbr, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Gbr, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3Gbr, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Gbr, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Gbr, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Gbr, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Gbr, MdfEnumValue);
  /**
   * All fields of the PaymentInformationDetailV3Gbr entity.
   */
  export const _allFields: Array<BigNumberField<PaymentInformationDetailV3Gbr> | DateField<PaymentInformationDetailV3Gbr> | StringField<PaymentInformationDetailV3Gbr> | OneToOneLink<PaymentInformationDetailV3Gbr, User> | OneToOneLink<PaymentInformationDetailV3Gbr, MdfEnumValue>> = [
    PaymentInformationDetailV3Gbr.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
    PaymentInformationDetailV3Gbr.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3Gbr.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3Gbr.BUILDING_SOCIETY_ROLL_NUMBER,
    PaymentInformationDetailV3Gbr.CREATED_BY,
    PaymentInformationDetailV3Gbr.CREATED_DATE_TIME,
    PaymentInformationDetailV3Gbr.EXTERNAL_CODE,
    PaymentInformationDetailV3Gbr.LAST_MODIFIED_BY,
    PaymentInformationDetailV3Gbr.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3Gbr.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3Gbr.CREATED_BY_NAV,
    PaymentInformationDetailV3Gbr.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3Gbr.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3Gbr> = new AllFields('*', PaymentInformationDetailV3Gbr);
  /**
   * All key fields of the PaymentInformationDetailV3Gbr entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3Gbr>> = [PaymentInformationDetailV3Gbr.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Gbr.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Gbr.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Gbr.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Gbr.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3Gbr> } = PaymentInformationDetailV3Gbr._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3Gbr> }, field: Selectable<PaymentInformationDetailV3Gbr>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
