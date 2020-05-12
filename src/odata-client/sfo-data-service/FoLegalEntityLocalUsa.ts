/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoLegalEntityLocalUsaRequestBuilder } from './FoLegalEntityLocalUsaRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOLegalEntityLocalUSA" of service "SFOData".
 */
export class FoLegalEntityLocalUsa extends Entity implements FoLegalEntityLocalUsaType {
  /**
   * Technical entity name for FoLegalEntityLocalUsa.
   */
  static _entityName = 'FOLegalEntityLocalUSA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoLegalEntityLocalUsa.
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
   * EEO Company Code.
   * Maximum length: 45.
   * @nullable
   */
  eeoCompanyCode?: string;
  /**
   * Employer ID.
   * Maximum length: 45.
   * @nullable
   */
  employerId?: string;
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
   * Fed Reserve Bank District.
   * Maximum length: 45.
   * @nullable
   */
  fedReserveBankDistrict?: string;
  /**
   * Federal Reserve Bank ID.
   * Maximum length: 45.
   * @nullable
   */
  federalReserveBankId?: string;
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
   * Legal Entity Type.
   * Maximum length: 128.
   * @nullable
   */
  legalEntityType?: string;
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
   * One-to-one navigation property to the [[Territory]] entity.
   */
  countryNav!: Territory;
  /**
   * One-to-many navigation property to the [[PickListValueV2]] entity.
   */
  legalEntityTypeNav!: PickListValueV2[];

  /**
   * Returns an entity builder to construct instances `FoLegalEntityLocalUsa`.
   * @returns A builder that constructs instances of entity type `FoLegalEntityLocalUsa`.
   */
  static builder(): EntityBuilderType<FoLegalEntityLocalUsa, FoLegalEntityLocalUsaTypeForceMandatory> {
    return Entity.entityBuilder(FoLegalEntityLocalUsa);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoLegalEntityLocalUsa` entity type.
   * @returns A `FoLegalEntityLocalUsa` request builder.
   */
  static requestBuilder(): FoLegalEntityLocalUsaRequestBuilder {
    return new FoLegalEntityLocalUsaRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLegalEntityLocalUsa`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoLegalEntityLocalUsa`.
   */
  static customField(fieldName: string): CustomField<FoLegalEntityLocalUsa> {
    return Entity.customFieldSelector(fieldName, FoLegalEntityLocalUsa);
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
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';

export interface FoLegalEntityLocalUsaType {
  country: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  eeoCompanyCode?: string;
  employerId?: string;
  endDate?: Moment;
  externalCode: string;
  fedReserveBankDistrict?: string;
  federalReserveBankId?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  legalEntityType?: string;
  startDate: Moment;
  status?: string;
  countryNav: TerritoryType;
  legalEntityTypeNav: PickListValueV2Type[];
}

export interface FoLegalEntityLocalUsaTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  eeoCompanyCode: string;
  employerId: string;
  endDate: Moment;
  externalCode: string;
  fedReserveBankDistrict: string;
  federalReserveBankId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  legalEntityType: string;
  startDate: Moment;
  status: string;
  countryNav: TerritoryType;
  legalEntityTypeNav: PickListValueV2Type[];
}

export namespace FoLegalEntityLocalUsa {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<FoLegalEntityLocalUsa> = new StringField('country', FoLegalEntityLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoLegalEntityLocalUsa> = new StringField('createdBy', FoLegalEntityLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoLegalEntityLocalUsa> = new DateField('createdDateTime', FoLegalEntityLocalUsa, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoLegalEntityLocalUsa> = new DateField('createdOn', FoLegalEntityLocalUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[eeoCompanyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_COMPANY_CODE: StringField<FoLegalEntityLocalUsa> = new StringField('eeoCompanyCode', FoLegalEntityLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[employerId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYER_ID: StringField<FoLegalEntityLocalUsa> = new StringField('employerID', FoLegalEntityLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoLegalEntityLocalUsa> = new DateField('endDate', FoLegalEntityLocalUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoLegalEntityLocalUsa> = new StringField('externalCode', FoLegalEntityLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[fedReserveBankDistrict]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FED_RESERVE_BANK_DISTRICT: StringField<FoLegalEntityLocalUsa> = new StringField('fedReserveBankDistrict', FoLegalEntityLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[federalReserveBankId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEDERAL_RESERVE_BANK_ID: StringField<FoLegalEntityLocalUsa> = new StringField('federalReserveBankID', FoLegalEntityLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoLegalEntityLocalUsa> = new StringField('lastModifiedBy', FoLegalEntityLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoLegalEntityLocalUsa> = new DateField('lastModifiedDateTime', FoLegalEntityLocalUsa, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoLegalEntityLocalUsa> = new DateField('lastModifiedOn', FoLegalEntityLocalUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[legalEntityType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_TYPE: StringField<FoLegalEntityLocalUsa> = new StringField('legalEntityType', FoLegalEntityLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoLegalEntityLocalUsa> = new DateField('startDate', FoLegalEntityLocalUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoLegalEntityLocalUsa> = new StringField('status', FoLegalEntityLocalUsa, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<FoLegalEntityLocalUsa, Territory> = new OneToOneLink('countryNav', FoLegalEntityLocalUsa, Territory);
  /**
   * Static representation of the one-to-many navigation property [[legalEntityTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_TYPE_NAV: Link<FoLegalEntityLocalUsa, PickListValueV2> = new Link('legalEntityTypeNav', FoLegalEntityLocalUsa, PickListValueV2);
  /**
   * All fields of the FoLegalEntityLocalUsa entity.
   */
  export const _allFields: Array<StringField<FoLegalEntityLocalUsa> | DateField<FoLegalEntityLocalUsa> | OneToOneLink<FoLegalEntityLocalUsa, Territory> | Link<FoLegalEntityLocalUsa, PickListValueV2>> = [
    FoLegalEntityLocalUsa.COUNTRY,
    FoLegalEntityLocalUsa.CREATED_BY,
    FoLegalEntityLocalUsa.CREATED_DATE_TIME,
    FoLegalEntityLocalUsa.CREATED_ON,
    FoLegalEntityLocalUsa.EEO_COMPANY_CODE,
    FoLegalEntityLocalUsa.EMPLOYER_ID,
    FoLegalEntityLocalUsa.END_DATE,
    FoLegalEntityLocalUsa.EXTERNAL_CODE,
    FoLegalEntityLocalUsa.FED_RESERVE_BANK_DISTRICT,
    FoLegalEntityLocalUsa.FEDERAL_RESERVE_BANK_ID,
    FoLegalEntityLocalUsa.LAST_MODIFIED_BY,
    FoLegalEntityLocalUsa.LAST_MODIFIED_DATE_TIME,
    FoLegalEntityLocalUsa.LAST_MODIFIED_ON,
    FoLegalEntityLocalUsa.LEGAL_ENTITY_TYPE,
    FoLegalEntityLocalUsa.START_DATE,
    FoLegalEntityLocalUsa.STATUS,
    FoLegalEntityLocalUsa.COUNTRY_NAV,
    FoLegalEntityLocalUsa.LEGAL_ENTITY_TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoLegalEntityLocalUsa> = new AllFields('*', FoLegalEntityLocalUsa);
  /**
   * All key fields of the FoLegalEntityLocalUsa entity.
   */
  export const _keyFields: Array<Selectable<FoLegalEntityLocalUsa>> = [FoLegalEntityLocalUsa.COUNTRY, FoLegalEntityLocalUsa.EXTERNAL_CODE, FoLegalEntityLocalUsa.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoLegalEntityLocalUsa.
   */
  export const _keys: { [keys: string]: Selectable<FoLegalEntityLocalUsa> } = FoLegalEntityLocalUsa._keyFields.reduce((acc: { [keys: string]: Selectable<FoLegalEntityLocalUsa> }, field: Selectable<FoLegalEntityLocalUsa>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
