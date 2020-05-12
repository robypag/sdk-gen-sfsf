/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3ZafRequestBuilder } from './PaymentInformationDetailV3ZafRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3ZAF" of service "SFOData".
 */
export class PaymentInformationDetailV3Zaf extends Entity implements PaymentInformationDetailV3ZafType {
  /**
   * Technical entity name for PaymentInformationDetailV3Zaf.
   */
  static _entityName = 'PaymentInformationDetailV3ZAF';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3Zaf.
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
   * Account Holder Relationship.
   * Maximum length: 255.
   * @nullable
   */
  accountHolderRelationship?: string;
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
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  accountHolderRelationshipNav!: MdfEnumValue;
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
   * Returns an entity builder to construct instances `PaymentInformationDetailV3Zaf`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Zaf`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3Zaf, PaymentInformationDetailV3ZafTypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3Zaf);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3Zaf` entity type.
   * @returns A `PaymentInformationDetailV3Zaf` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3ZafRequestBuilder {
    return new PaymentInformationDetailV3ZafRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3Zaf`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3Zaf`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3Zaf> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3Zaf);
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

export interface PaymentInformationDetailV3ZafType {
  paymentInformationDetailV3ExternalCode: BigNumber;
  paymentInformationV3EffectiveStartDate: Moment;
  paymentInformationV3Worker: string;
  accountHolderRelationship?: string;
  accountType?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  accountHolderRelationshipNav: MdfEnumValueType;
  accountTypeNav: MdfEnumValueType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface PaymentInformationDetailV3ZafTypeForceMandatory {
  paymentInformationDetailV3ExternalCode: BigNumber;
  paymentInformationV3EffectiveStartDate: Moment;
  paymentInformationV3Worker: string;
  accountHolderRelationship: string;
  accountType: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  accountHolderRelationshipNav: MdfEnumValueType;
  accountTypeNav: MdfEnumValueType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace PaymentInformationDetailV3Zaf {
  /**
   * Static representation of the [[paymentInformationDetailV3ExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Zaf> = new BigNumberField('PaymentInformationDetailV3_externalCode', PaymentInformationDetailV3Zaf, 'Edm.Int64');
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3Zaf> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3Zaf, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3Zaf> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3Zaf, 'Edm.String');
  /**
   * Static representation of the [[accountHolderRelationship]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_HOLDER_RELATIONSHIP: StringField<PaymentInformationDetailV3Zaf> = new StringField('accountHolderRelationship', PaymentInformationDetailV3Zaf, 'Edm.String');
  /**
   * Static representation of the [[accountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE: StringField<PaymentInformationDetailV3Zaf> = new StringField('accountType', PaymentInformationDetailV3Zaf, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3Zaf> = new StringField('createdBy', PaymentInformationDetailV3Zaf, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3Zaf> = new DateField('createdDateTime', PaymentInformationDetailV3Zaf, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3Zaf> = new BigNumberField('externalCode', PaymentInformationDetailV3Zaf, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3Zaf> = new StringField('lastModifiedBy', PaymentInformationDetailV3Zaf, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3Zaf> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3Zaf, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3Zaf> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3Zaf, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[accountHolderRelationshipNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_HOLDER_RELATIONSHIP_NAV: OneToOneLink<PaymentInformationDetailV3Zaf, MdfEnumValue> = new OneToOneLink('accountHolderRelationshipNav', PaymentInformationDetailV3Zaf, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE_NAV: OneToOneLink<PaymentInformationDetailV3Zaf, MdfEnumValue> = new OneToOneLink('accountTypeNav', PaymentInformationDetailV3Zaf, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Zaf, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3Zaf, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3Zaf, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3Zaf, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3Zaf, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3Zaf, MdfEnumValue);
  /**
   * All fields of the PaymentInformationDetailV3Zaf entity.
   */
  export const _allFields: Array<BigNumberField<PaymentInformationDetailV3Zaf> | DateField<PaymentInformationDetailV3Zaf> | StringField<PaymentInformationDetailV3Zaf> | OneToOneLink<PaymentInformationDetailV3Zaf, MdfEnumValue> | OneToOneLink<PaymentInformationDetailV3Zaf, User>> = [
    PaymentInformationDetailV3Zaf.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE,
    PaymentInformationDetailV3Zaf.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3Zaf.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3Zaf.ACCOUNT_HOLDER_RELATIONSHIP,
    PaymentInformationDetailV3Zaf.ACCOUNT_TYPE,
    PaymentInformationDetailV3Zaf.CREATED_BY,
    PaymentInformationDetailV3Zaf.CREATED_DATE_TIME,
    PaymentInformationDetailV3Zaf.EXTERNAL_CODE,
    PaymentInformationDetailV3Zaf.LAST_MODIFIED_BY,
    PaymentInformationDetailV3Zaf.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3Zaf.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3Zaf.ACCOUNT_HOLDER_RELATIONSHIP_NAV,
    PaymentInformationDetailV3Zaf.ACCOUNT_TYPE_NAV,
    PaymentInformationDetailV3Zaf.CREATED_BY_NAV,
    PaymentInformationDetailV3Zaf.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3Zaf.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3Zaf> = new AllFields('*', PaymentInformationDetailV3Zaf);
  /**
   * All key fields of the PaymentInformationDetailV3Zaf entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3Zaf>> = [PaymentInformationDetailV3Zaf.PAYMENT_INFORMATION_DETAIL_V_3_EXTERNAL_CODE, PaymentInformationDetailV3Zaf.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3Zaf.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3Zaf.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3Zaf.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3Zaf> } = PaymentInformationDetailV3Zaf._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3Zaf> }, field: Selectable<PaymentInformationDetailV3Zaf>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
