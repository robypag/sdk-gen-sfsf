/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoLocationRequestBuilder } from './FoLocationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOLocation" of service "SFOData".
 */
export class FoLocation extends Entity implements FoLocationType {
  /**
   * Technical entity name for FoLocation.
   */
  static _entityName = 'FOLocation';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoLocation.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Address Line 1.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress1?: string;
  /**
   * Apartment.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress10?: string;
  /**
   * Bed Number.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress11?: string;
  /**
   * Address Line 2.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress2?: string;
  /**
   * Address Line 3.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress3?: string;
  /**
   * Apartment.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress4?: string;
  /**
   * Second Address Line.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress5?: string;
  /**
   * Town.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress6?: string;
  /**
   * District.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress7?: string;
  /**
   * Building Number.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress8?: string;
  /**
   * Building.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress9?: string;
  /**
   * City.
   * Maximum length: 256.
   * @nullable
   */
  addressCity?: string;
  /**
   * Country.
   * Maximum length: 256.
   * @nullable
   */
  addressCountry?: string;
  /**
   * County.
   * Maximum length: 256.
   * @nullable
   */
  addressCounty?: string;
  /**
   * Province.
   * Maximum length: 256.
   * @nullable
   */
  addressProvince?: string;
  /**
   * State.
   * Maximum length: 256.
   * @nullable
   */
  addressState?: string;
  /**
   * ZIP.
   * Maximum length: 256.
   * @nullable
   */
  addressZipCode?: string;
  /**
   * companyFlx.
   * @nullable
   */
  companyFlx?: string;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created Date Time.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Created On.
   * @nullable
   */
  createdOn?: Moment;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  description?: string;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Code.
   * Maximum length: 32.
   */
  externalCode!: string;
  /**
   * geozoneFlx.
   * Maximum length: 32.
   * @nullable
   */
  geozoneFlx?: string;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date Time.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedOn?: Moment;
  /**
   * Location Group.
   * @nullable
   */
  locationGroup?: string;
  /**
   * Name.
   * Maximum length: 32.
   * @nullable
   */
  name?: string;
  /**
   * Standard Weekly Hours.
   * @nullable
   */
  standardHours?: number;
  /**
   * Start Date.
   */
  startDate!: Moment;
  /**
   * Status.
   * @nullable
   */
  status?: string;
  /**
   * Timezone.
   * @nullable
   */
  timezone?: string;
  /**
   * One-to-one navigation property to the [[FoCorporateAddressDeflt]] entity.
   */
  addressNavDeflt!: FoCorporateAddressDeflt;
  /**
   * One-to-many navigation property to the [[FoCompany]] entity.
   */
  companyFlxNav!: FoCompany[];
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  descriptionTranslationNav!: FoTranslation;
  /**
   * One-to-one navigation property to the [[FoGeozone]] entity.
   */
  geozoneFlxNav!: FoGeozone;
  /**
   * One-to-one navigation property to the [[FoLocationGroup]] entity.
   */
  locationGroupNav!: FoLocationGroup;
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  nameTranslationNav!: FoTranslation;

  /**
   * Returns an entity builder to construct instances `FoLocation`.
   * @returns A builder that constructs instances of entity type `FoLocation`.
   */
  static builder(): EntityBuilderType<FoLocation, FoLocationTypeForceMandatory> {
    return Entity.entityBuilder(FoLocation);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoLocation` entity type.
   * @returns A `FoLocation` request builder.
   */
  static requestBuilder(): FoLocationRequestBuilder {
    return new FoLocationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLocation`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoLocation`.
   */
  static customField(fieldName: string): CustomField<FoLocation> {
    return Entity.customFieldSelector(fieldName, FoLocation);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoCorporateAddressDeflt, FoCorporateAddressDefltType } from './FoCorporateAddressDeflt';
import { FoCompany, FoCompanyType } from './FoCompany';
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { FoGeozone, FoGeozoneType } from './FoGeozone';
import { FoLocationGroup, FoLocationGroupType } from './FoLocationGroup';

export interface FoLocationType {
  addressAddress1?: string;
  addressAddress10?: string;
  addressAddress11?: string;
  addressAddress2?: string;
  addressAddress3?: string;
  addressAddress4?: string;
  addressAddress5?: string;
  addressAddress6?: string;
  addressAddress7?: string;
  addressAddress8?: string;
  addressAddress9?: string;
  addressCity?: string;
  addressCountry?: string;
  addressCounty?: string;
  addressProvince?: string;
  addressState?: string;
  addressZipCode?: string;
  companyFlx?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  description?: string;
  endDate?: Moment;
  externalCode: string;
  geozoneFlx?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  locationGroup?: string;
  name?: string;
  standardHours?: number;
  startDate: Moment;
  status?: string;
  timezone?: string;
  addressNavDeflt: FoCorporateAddressDefltType;
  companyFlxNav: FoCompanyType[];
  descriptionTranslationNav: FoTranslationType;
  geozoneFlxNav: FoGeozoneType;
  locationGroupNav: FoLocationGroupType;
  nameTranslationNav: FoTranslationType;
}

export interface FoLocationTypeForceMandatory {
  addressAddress1: string;
  addressAddress10: string;
  addressAddress11: string;
  addressAddress2: string;
  addressAddress3: string;
  addressAddress4: string;
  addressAddress5: string;
  addressAddress6: string;
  addressAddress7: string;
  addressAddress8: string;
  addressAddress9: string;
  addressCity: string;
  addressCountry: string;
  addressCounty: string;
  addressProvince: string;
  addressState: string;
  addressZipCode: string;
  companyFlx: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  description: string;
  endDate: Moment;
  externalCode: string;
  geozoneFlx: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  locationGroup: string;
  name: string;
  standardHours: number;
  startDate: Moment;
  status: string;
  timezone: string;
  addressNavDeflt: FoCorporateAddressDefltType;
  companyFlxNav: FoCompanyType[];
  descriptionTranslationNav: FoTranslationType;
  geozoneFlxNav: FoGeozoneType;
  locationGroupNav: FoLocationGroupType;
  nameTranslationNav: FoTranslationType;
}

export namespace FoLocation {
  /**
   * Static representation of the [[addressAddress1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_1: StringField<FoLocation> = new StringField('addressAddress1', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[addressAddress10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_10: StringField<FoLocation> = new StringField('addressAddress10', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[addressAddress11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_11: StringField<FoLocation> = new StringField('addressAddress11', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[addressAddress2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_2: StringField<FoLocation> = new StringField('addressAddress2', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[addressAddress3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_3: StringField<FoLocation> = new StringField('addressAddress3', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[addressAddress4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_4: StringField<FoLocation> = new StringField('addressAddress4', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[addressAddress5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_5: StringField<FoLocation> = new StringField('addressAddress5', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[addressAddress6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_6: StringField<FoLocation> = new StringField('addressAddress6', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[addressAddress7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_7: StringField<FoLocation> = new StringField('addressAddress7', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[addressAddress8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_8: StringField<FoLocation> = new StringField('addressAddress8', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[addressAddress9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_9: StringField<FoLocation> = new StringField('addressAddress9', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[addressCity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_CITY: StringField<FoLocation> = new StringField('addressCity', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[addressCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_COUNTRY: StringField<FoLocation> = new StringField('addressCountry', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[addressCounty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_COUNTY: StringField<FoLocation> = new StringField('addressCounty', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[addressProvince]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_PROVINCE: StringField<FoLocation> = new StringField('addressProvince', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[addressState]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_STATE: StringField<FoLocation> = new StringField('addressState', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[addressZipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ZIP_CODE: StringField<FoLocation> = new StringField('addressZipCode', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[companyFlx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_FLX: StringField<FoLocation> = new StringField('companyFlx', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoLocation> = new StringField('createdBy', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoLocation> = new DateField('createdDateTime', FoLocation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoLocation> = new DateField('createdOn', FoLocation, 'Edm.DateTime');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FoLocation> = new StringField('description', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoLocation> = new DateField('endDate', FoLocation, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoLocation> = new StringField('externalCode', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[geozoneFlx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GEOZONE_FLX: StringField<FoLocation> = new StringField('geozoneFlx', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoLocation> = new StringField('lastModifiedBy', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoLocation> = new DateField('lastModifiedDateTime', FoLocation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoLocation> = new DateField('lastModifiedOn', FoLocation, 'Edm.DateTime');
  /**
   * Static representation of the [[locationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_GROUP: StringField<FoLocation> = new StringField('locationGroup', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FoLocation> = new StringField('name', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[standardHours]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STANDARD_HOURS: NumberField<FoLocation> = new NumberField('standardHours', FoLocation, 'Edm.Double');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoLocation> = new DateField('startDate', FoLocation, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoLocation> = new StringField('status', FoLocation, 'Edm.String');
  /**
   * Static representation of the [[timezone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIMEZONE: StringField<FoLocation> = new StringField('timezone', FoLocation, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[addressNavDeflt]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_NAV_DEFLT: OneToOneLink<FoLocation, FoCorporateAddressDeflt> = new OneToOneLink('addressNavDEFLT', FoLocation, FoCorporateAddressDeflt);
  /**
   * Static representation of the one-to-many navigation property [[companyFlxNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_FLX_NAV: Link<FoLocation, FoCompany> = new Link('companyFlxNav', FoLocation, FoCompany);
  /**
   * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoLocation, FoTranslation> = new OneToOneLink('descriptionTranslationNav', FoLocation, FoTranslation);
  /**
   * Static representation of the one-to-one navigation property [[geozoneFlxNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GEOZONE_FLX_NAV: OneToOneLink<FoLocation, FoGeozone> = new OneToOneLink('geozoneFlxNav', FoLocation, FoGeozone);
  /**
   * Static representation of the one-to-one navigation property [[locationGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_GROUP_NAV: OneToOneLink<FoLocation, FoLocationGroup> = new OneToOneLink('locationGroupNav', FoLocation, FoLocationGroup);
  /**
   * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_NAV: OneToOneLink<FoLocation, FoTranslation> = new OneToOneLink('nameTranslationNav', FoLocation, FoTranslation);
  /**
   * All fields of the FoLocation entity.
   */
  export const _allFields: Array<StringField<FoLocation> | DateField<FoLocation> | NumberField<FoLocation> | OneToOneLink<FoLocation, FoCorporateAddressDeflt> | Link<FoLocation, FoCompany> | OneToOneLink<FoLocation, FoTranslation> | OneToOneLink<FoLocation, FoGeozone> | OneToOneLink<FoLocation, FoLocationGroup>> = [
    FoLocation.ADDRESS_ADDRESS_1,
    FoLocation.ADDRESS_ADDRESS_10,
    FoLocation.ADDRESS_ADDRESS_11,
    FoLocation.ADDRESS_ADDRESS_2,
    FoLocation.ADDRESS_ADDRESS_3,
    FoLocation.ADDRESS_ADDRESS_4,
    FoLocation.ADDRESS_ADDRESS_5,
    FoLocation.ADDRESS_ADDRESS_6,
    FoLocation.ADDRESS_ADDRESS_7,
    FoLocation.ADDRESS_ADDRESS_8,
    FoLocation.ADDRESS_ADDRESS_9,
    FoLocation.ADDRESS_CITY,
    FoLocation.ADDRESS_COUNTRY,
    FoLocation.ADDRESS_COUNTY,
    FoLocation.ADDRESS_PROVINCE,
    FoLocation.ADDRESS_STATE,
    FoLocation.ADDRESS_ZIP_CODE,
    FoLocation.COMPANY_FLX,
    FoLocation.CREATED_BY,
    FoLocation.CREATED_DATE_TIME,
    FoLocation.CREATED_ON,
    FoLocation.DESCRIPTION,
    FoLocation.END_DATE,
    FoLocation.EXTERNAL_CODE,
    FoLocation.GEOZONE_FLX,
    FoLocation.LAST_MODIFIED_BY,
    FoLocation.LAST_MODIFIED_DATE_TIME,
    FoLocation.LAST_MODIFIED_ON,
    FoLocation.LOCATION_GROUP,
    FoLocation.NAME,
    FoLocation.STANDARD_HOURS,
    FoLocation.START_DATE,
    FoLocation.STATUS,
    FoLocation.TIMEZONE,
    FoLocation.ADDRESS_NAV_DEFLT,
    FoLocation.COMPANY_FLX_NAV,
    FoLocation.DESCRIPTION_TRANSLATION_NAV,
    FoLocation.GEOZONE_FLX_NAV,
    FoLocation.LOCATION_GROUP_NAV,
    FoLocation.NAME_TRANSLATION_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoLocation> = new AllFields('*', FoLocation);
  /**
   * All key fields of the FoLocation entity.
   */
  export const _keyFields: Array<Selectable<FoLocation>> = [FoLocation.EXTERNAL_CODE, FoLocation.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoLocation.
   */
  export const _keys: { [keys: string]: Selectable<FoLocation> } = FoLocation._keyFields.reduce((acc: { [keys: string]: Selectable<FoLocation> }, field: Selectable<FoLocation>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
