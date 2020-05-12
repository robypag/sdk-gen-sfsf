/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoLegalEntityLocalDeuRequestBuilder } from './FoLegalEntityLocalDeuRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOLegalEntityLocalDEU" of service "SFOData".
 */
export class FoLegalEntityLocalDeu extends Entity implements FoLegalEntityLocalDeuType {
  /**
   * Technical entity name for FoLegalEntityLocalDeu.
   */
  static _entityName = 'FOLegalEntityLocalDEU';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoLegalEntityLocalDeu.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * countryOfRegistration.
   * Maximum length: 128.
   */
  country!: string;
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
   * createdDate.
   * @nullable
   */
  createdOn?: Moment;
  /**
   * effectiveEndDate.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Legal Entity_Code.
   * Maximum length: 32.
   */
  externalCode!: string;
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
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedOn?: Moment;
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
   * Legal Entity_Effective as of.
   */
  startDate!: Moment;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * Tax Unit.
   * Maximum length: 45.
   * @nullable
   */
  taxUnit?: string;
  /**
   * One-to-one navigation property to the [[Territory]] entity.
   */
  countryNav!: Territory;

  /**
   * Returns an entity builder to construct instances `FoLegalEntityLocalDeu`.
   * @returns A builder that constructs instances of entity type `FoLegalEntityLocalDeu`.
   */
  static builder(): EntityBuilderType<FoLegalEntityLocalDeu, FoLegalEntityLocalDeuTypeForceMandatory> {
    return Entity.entityBuilder(FoLegalEntityLocalDeu);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoLegalEntityLocalDeu` entity type.
   * @returns A `FoLegalEntityLocalDeu` request builder.
   */
  static requestBuilder(): FoLegalEntityLocalDeuRequestBuilder {
    return new FoLegalEntityLocalDeuRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLegalEntityLocalDeu`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoLegalEntityLocalDeu`.
   */
  static customField(fieldName: string): CustomField<FoLegalEntityLocalDeu> {
    return Entity.customFieldSelector(fieldName, FoLegalEntityLocalDeu);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Territory, TerritoryType } from './Territory';

export interface FoLegalEntityLocalDeuType {
  country: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  endDate?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  socialAccidentInsurance?: string;
  socialAccidentInsuranceRegistrationNumber?: string;
  startDate: Moment;
  status?: string;
  taxUnit?: string;
  countryNav: TerritoryType;
}

export interface FoLegalEntityLocalDeuTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  endDate: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  socialAccidentInsurance: string;
  socialAccidentInsuranceRegistrationNumber: string;
  startDate: Moment;
  status: string;
  taxUnit: string;
  countryNav: TerritoryType;
}

export namespace FoLegalEntityLocalDeu {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<FoLegalEntityLocalDeu> = new StringField('country', FoLegalEntityLocalDeu, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoLegalEntityLocalDeu> = new StringField('createdBy', FoLegalEntityLocalDeu, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoLegalEntityLocalDeu> = new DateField('createdDateTime', FoLegalEntityLocalDeu, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoLegalEntityLocalDeu> = new DateField('createdOn', FoLegalEntityLocalDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoLegalEntityLocalDeu> = new DateField('endDate', FoLegalEntityLocalDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoLegalEntityLocalDeu> = new StringField('externalCode', FoLegalEntityLocalDeu, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoLegalEntityLocalDeu> = new StringField('lastModifiedBy', FoLegalEntityLocalDeu, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoLegalEntityLocalDeu> = new DateField('lastModifiedDateTime', FoLegalEntityLocalDeu, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoLegalEntityLocalDeu> = new DateField('lastModifiedOn', FoLegalEntityLocalDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[socialAccidentInsurance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOCIAL_ACCIDENT_INSURANCE: StringField<FoLegalEntityLocalDeu> = new StringField('socialAccidentInsurance', FoLegalEntityLocalDeu, 'Edm.String');
  /**
   * Static representation of the [[socialAccidentInsuranceRegistrationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOCIAL_ACCIDENT_INSURANCE_REGISTRATION_NUMBER: StringField<FoLegalEntityLocalDeu> = new StringField('socialAccidentInsuranceRegistrationNumber', FoLegalEntityLocalDeu, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoLegalEntityLocalDeu> = new DateField('startDate', FoLegalEntityLocalDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoLegalEntityLocalDeu> = new StringField('status', FoLegalEntityLocalDeu, 'Edm.String');
  /**
   * Static representation of the [[taxUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_UNIT: StringField<FoLegalEntityLocalDeu> = new StringField('taxUnit', FoLegalEntityLocalDeu, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<FoLegalEntityLocalDeu, Territory> = new OneToOneLink('countryNav', FoLegalEntityLocalDeu, Territory);
  /**
   * All fields of the FoLegalEntityLocalDeu entity.
   */
  export const _allFields: Array<StringField<FoLegalEntityLocalDeu> | DateField<FoLegalEntityLocalDeu> | OneToOneLink<FoLegalEntityLocalDeu, Territory>> = [
    FoLegalEntityLocalDeu.COUNTRY,
    FoLegalEntityLocalDeu.CREATED_BY,
    FoLegalEntityLocalDeu.CREATED_DATE_TIME,
    FoLegalEntityLocalDeu.CREATED_ON,
    FoLegalEntityLocalDeu.END_DATE,
    FoLegalEntityLocalDeu.EXTERNAL_CODE,
    FoLegalEntityLocalDeu.LAST_MODIFIED_BY,
    FoLegalEntityLocalDeu.LAST_MODIFIED_DATE_TIME,
    FoLegalEntityLocalDeu.LAST_MODIFIED_ON,
    FoLegalEntityLocalDeu.SOCIAL_ACCIDENT_INSURANCE,
    FoLegalEntityLocalDeu.SOCIAL_ACCIDENT_INSURANCE_REGISTRATION_NUMBER,
    FoLegalEntityLocalDeu.START_DATE,
    FoLegalEntityLocalDeu.STATUS,
    FoLegalEntityLocalDeu.TAX_UNIT,
    FoLegalEntityLocalDeu.COUNTRY_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoLegalEntityLocalDeu> = new AllFields('*', FoLegalEntityLocalDeu);
  /**
   * All key fields of the FoLegalEntityLocalDeu entity.
   */
  export const _keyFields: Array<Selectable<FoLegalEntityLocalDeu>> = [FoLegalEntityLocalDeu.COUNTRY, FoLegalEntityLocalDeu.EXTERNAL_CODE, FoLegalEntityLocalDeu.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoLegalEntityLocalDeu.
   */
  export const _keys: { [keys: string]: Selectable<FoLegalEntityLocalDeu> } = FoLegalEntityLocalDeu._keyFields.reduce((acc: { [keys: string]: Selectable<FoLegalEntityLocalDeu> }, field: Selectable<FoLegalEntityLocalDeu>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
