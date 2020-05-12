/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentMethodAssignmentV3RequestBuilder } from './PaymentMethodAssignmentV3RequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentMethodAssignmentV3" of service "SFOData".
 */
export class PaymentMethodAssignmentV3 extends Entity implements PaymentMethodAssignmentV3Type {
  /**
   * Technical entity name for PaymentMethodAssignmentV3.
   */
  static _entityName = 'PaymentMethodAssignmentV3';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentMethodAssignmentV3.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Payment Method_External Code.
   * Maximum length: 128.
   */
  paymentMethodV3ExternalCode!: string;
  /**
   * Country/Region.
   * Maximum length: 128.
   * @nullable
   */
  country?: string;
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
   * One-to-many navigation property to the [[Country]] entity.
   */
  countryNav!: Country[];
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
   * Returns an entity builder to construct instances `PaymentMethodAssignmentV3`.
   * @returns A builder that constructs instances of entity type `PaymentMethodAssignmentV3`.
   */
  static builder(): EntityBuilderType<PaymentMethodAssignmentV3, PaymentMethodAssignmentV3TypeForceMandatory> {
    return Entity.entityBuilder(PaymentMethodAssignmentV3);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentMethodAssignmentV3` entity type.
   * @returns A `PaymentMethodAssignmentV3` request builder.
   */
  static requestBuilder(): PaymentMethodAssignmentV3RequestBuilder {
    return new PaymentMethodAssignmentV3RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentMethodAssignmentV3`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentMethodAssignmentV3`.
   */
  static customField(fieldName: string): CustomField<PaymentMethodAssignmentV3> {
    return Entity.customFieldSelector(fieldName, PaymentMethodAssignmentV3);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Country, CountryType } from './Country';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface PaymentMethodAssignmentV3Type {
  paymentMethodV3ExternalCode: string;
  country?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface PaymentMethodAssignmentV3TypeForceMandatory {
  paymentMethodV3ExternalCode: string;
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace PaymentMethodAssignmentV3 {
  /**
   * Static representation of the [[paymentMethodV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_METHOD_V_3_EXTERNAL_CODE: StringField<PaymentMethodAssignmentV3> = new StringField('PaymentMethodV3_externalCode', PaymentMethodAssignmentV3, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PaymentMethodAssignmentV3> = new StringField('country', PaymentMethodAssignmentV3, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentMethodAssignmentV3> = new StringField('createdBy', PaymentMethodAssignmentV3, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentMethodAssignmentV3> = new DateField('createdDateTime', PaymentMethodAssignmentV3, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentMethodAssignmentV3> = new BigNumberField('externalCode', PaymentMethodAssignmentV3, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentMethodAssignmentV3> = new StringField('lastModifiedBy', PaymentMethodAssignmentV3, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentMethodAssignmentV3> = new DateField('lastModifiedDateTime', PaymentMethodAssignmentV3, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentMethodAssignmentV3> = new StringField('mdfSystemRecordStatus', PaymentMethodAssignmentV3, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: Link<PaymentMethodAssignmentV3, Country> = new Link('countryNav', PaymentMethodAssignmentV3, Country);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentMethodAssignmentV3, User> = new OneToOneLink('createdByNav', PaymentMethodAssignmentV3, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentMethodAssignmentV3, User> = new OneToOneLink('lastModifiedByNav', PaymentMethodAssignmentV3, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentMethodAssignmentV3, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentMethodAssignmentV3, MdfEnumValue);
  /**
   * All fields of the PaymentMethodAssignmentV3 entity.
   */
  export const _allFields: Array<StringField<PaymentMethodAssignmentV3> | DateField<PaymentMethodAssignmentV3> | BigNumberField<PaymentMethodAssignmentV3> | Link<PaymentMethodAssignmentV3, Country> | OneToOneLink<PaymentMethodAssignmentV3, User> | OneToOneLink<PaymentMethodAssignmentV3, MdfEnumValue>> = [
    PaymentMethodAssignmentV3.PAYMENT_METHOD_V_3_EXTERNAL_CODE,
    PaymentMethodAssignmentV3.COUNTRY,
    PaymentMethodAssignmentV3.CREATED_BY,
    PaymentMethodAssignmentV3.CREATED_DATE_TIME,
    PaymentMethodAssignmentV3.EXTERNAL_CODE,
    PaymentMethodAssignmentV3.LAST_MODIFIED_BY,
    PaymentMethodAssignmentV3.LAST_MODIFIED_DATE_TIME,
    PaymentMethodAssignmentV3.MDF_SYSTEM_RECORD_STATUS,
    PaymentMethodAssignmentV3.COUNTRY_NAV,
    PaymentMethodAssignmentV3.CREATED_BY_NAV,
    PaymentMethodAssignmentV3.LAST_MODIFIED_BY_NAV,
    PaymentMethodAssignmentV3.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentMethodAssignmentV3> = new AllFields('*', PaymentMethodAssignmentV3);
  /**
   * All key fields of the PaymentMethodAssignmentV3 entity.
   */
  export const _keyFields: Array<Selectable<PaymentMethodAssignmentV3>> = [PaymentMethodAssignmentV3.PAYMENT_METHOD_V_3_EXTERNAL_CODE, PaymentMethodAssignmentV3.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentMethodAssignmentV3.
   */
  export const _keys: { [keys: string]: Selectable<PaymentMethodAssignmentV3> } = PaymentMethodAssignmentV3._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentMethodAssignmentV3> }, field: Selectable<PaymentMethodAssignmentV3>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
