/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LegalEntityDeuRequestBuilder } from './LegalEntityDeuRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "LegalEntityDEU" of service "SFOData".
 */
export class LegalEntityDeu extends Entity implements LegalEntityDeuType {
  /**
   * Technical entity name for LegalEntityDeu.
   */
  static _entityName = 'LegalEntityDEU';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for LegalEntityDeu.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Legal Entity_Effective as of.
   */
  legalEntityEffectiveStartDate!: Moment;
  /**
   * Legal Entity_Code.
   * Maximum length: 32.
   */
  legalEntityExternalCode!: string;
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
   * Social Accident Insurance.
   * Maximum length: 45.
   * @nullable
   */
  socialAccidentInsurance?: string;
  /**
   * Social Accident Insurance Registration Number.
   * Maximum length: 45.
   * @nullable
   */
  socialAccidentInsuranceRegistrationNumber?: string;
  /**
   * Tax Unit.
   * Maximum length: 45.
   * @nullable
   */
  taxUnit?: string;
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
   * Returns an entity builder to construct instances `LegalEntityDeu`.
   * @returns A builder that constructs instances of entity type `LegalEntityDeu`.
   */
  static builder(): EntityBuilderType<LegalEntityDeu, LegalEntityDeuTypeForceMandatory> {
    return Entity.entityBuilder(LegalEntityDeu);
  }

  /**
   * Returns a request builder to construct requests for operations on the `LegalEntityDeu` entity type.
   * @returns A `LegalEntityDeu` request builder.
   */
  static requestBuilder(): LegalEntityDeuRequestBuilder {
    return new LegalEntityDeuRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalEntityDeu`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `LegalEntityDeu`.
   */
  static customField(fieldName: string): CustomField<LegalEntityDeu> {
    return Entity.customFieldSelector(fieldName, LegalEntityDeu);
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

export interface LegalEntityDeuType {
  legalEntityEffectiveStartDate: Moment;
  legalEntityExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  socialAccidentInsurance?: string;
  socialAccidentInsuranceRegistrationNumber?: string;
  taxUnit?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface LegalEntityDeuTypeForceMandatory {
  legalEntityEffectiveStartDate: Moment;
  legalEntityExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  socialAccidentInsurance: string;
  socialAccidentInsuranceRegistrationNumber: string;
  taxUnit: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace LegalEntityDeu {
  /**
   * Static representation of the [[legalEntityEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_EFFECTIVE_START_DATE: DateField<LegalEntityDeu> = new DateField('LegalEntity_effectiveStartDate', LegalEntityDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[legalEntityExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_EXTERNAL_CODE: StringField<LegalEntityDeu> = new StringField('LegalEntity_externalCode', LegalEntityDeu, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<LegalEntityDeu> = new StringField('createdBy', LegalEntityDeu, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<LegalEntityDeu> = new DateField('createdDateTime', LegalEntityDeu, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<LegalEntityDeu> = new BigNumberField('externalCode', LegalEntityDeu, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<LegalEntityDeu> = new StringField('lastModifiedBy', LegalEntityDeu, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<LegalEntityDeu> = new DateField('lastModifiedDateTime', LegalEntityDeu, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<LegalEntityDeu> = new StringField('mdfSystemRecordStatus', LegalEntityDeu, 'Edm.String');
  /**
   * Static representation of the [[socialAccidentInsurance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOCIAL_ACCIDENT_INSURANCE: StringField<LegalEntityDeu> = new StringField('socialAccidentInsurance', LegalEntityDeu, 'Edm.String');
  /**
   * Static representation of the [[socialAccidentInsuranceRegistrationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOCIAL_ACCIDENT_INSURANCE_REGISTRATION_NUMBER: StringField<LegalEntityDeu> = new StringField('socialAccidentInsuranceRegistrationNumber', LegalEntityDeu, 'Edm.String');
  /**
   * Static representation of the [[taxUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_UNIT: StringField<LegalEntityDeu> = new StringField('taxUnit', LegalEntityDeu, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<LegalEntityDeu, User> = new OneToOneLink('createdByNav', LegalEntityDeu, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<LegalEntityDeu, User> = new OneToOneLink('lastModifiedByNav', LegalEntityDeu, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<LegalEntityDeu, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', LegalEntityDeu, MdfEnumValue);
  /**
   * All fields of the LegalEntityDeu entity.
   */
  export const _allFields: Array<DateField<LegalEntityDeu> | StringField<LegalEntityDeu> | BigNumberField<LegalEntityDeu> | OneToOneLink<LegalEntityDeu, User> | OneToOneLink<LegalEntityDeu, MdfEnumValue>> = [
    LegalEntityDeu.LEGAL_ENTITY_EFFECTIVE_START_DATE,
    LegalEntityDeu.LEGAL_ENTITY_EXTERNAL_CODE,
    LegalEntityDeu.CREATED_BY,
    LegalEntityDeu.CREATED_DATE_TIME,
    LegalEntityDeu.EXTERNAL_CODE,
    LegalEntityDeu.LAST_MODIFIED_BY,
    LegalEntityDeu.LAST_MODIFIED_DATE_TIME,
    LegalEntityDeu.MDF_SYSTEM_RECORD_STATUS,
    LegalEntityDeu.SOCIAL_ACCIDENT_INSURANCE,
    LegalEntityDeu.SOCIAL_ACCIDENT_INSURANCE_REGISTRATION_NUMBER,
    LegalEntityDeu.TAX_UNIT,
    LegalEntityDeu.CREATED_BY_NAV,
    LegalEntityDeu.LAST_MODIFIED_BY_NAV,
    LegalEntityDeu.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<LegalEntityDeu> = new AllFields('*', LegalEntityDeu);
  /**
   * All key fields of the LegalEntityDeu entity.
   */
  export const _keyFields: Array<Selectable<LegalEntityDeu>> = [LegalEntityDeu.LEGAL_ENTITY_EFFECTIVE_START_DATE, LegalEntityDeu.LEGAL_ENTITY_EXTERNAL_CODE, LegalEntityDeu.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property LegalEntityDeu.
   */
  export const _keys: { [keys: string]: Selectable<LegalEntityDeu> } = LegalEntityDeu._keyFields.reduce((acc: { [keys: string]: Selectable<LegalEntityDeu> }, field: Selectable<LegalEntityDeu>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
