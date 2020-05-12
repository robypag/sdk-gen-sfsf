import { FoLocationRequestBuilder } from './FoLocationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOLocation" of service "SFOData".
 */
export declare class FoLocation extends Entity implements FoLocationType {
    /**
     * Technical entity name for FoLocation.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoLocation.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    externalCode: string;
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
    startDate: Moment;
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
    addressNavDeflt: FoCorporateAddressDeflt;
    /**
     * One-to-many navigation property to the [[FoCompany]] entity.
     */
    companyFlxNav: FoCompany[];
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    descriptionTranslationNav: FoTranslation;
    /**
     * One-to-one navigation property to the [[FoGeozone]] entity.
     */
    geozoneFlxNav: FoGeozone;
    /**
     * One-to-one navigation property to the [[FoLocationGroup]] entity.
     */
    locationGroupNav: FoLocationGroup;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    nameTranslationNav: FoTranslation;
    /**
     * Returns an entity builder to construct instances `FoLocation`.
     * @returns A builder that constructs instances of entity type `FoLocation`.
     */
    static builder(): EntityBuilderType<FoLocation, FoLocationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoLocation` entity type.
     * @returns A `FoLocation` request builder.
     */
    static requestBuilder(): FoLocationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLocation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoLocation`.
     */
    static customField(fieldName: string): CustomField<FoLocation>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace FoLocation {
    /**
     * Static representation of the [[addressAddress1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ADDRESS_1: StringField<FoLocation>;
    /**
     * Static representation of the [[addressAddress10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ADDRESS_10: StringField<FoLocation>;
    /**
     * Static representation of the [[addressAddress11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ADDRESS_11: StringField<FoLocation>;
    /**
     * Static representation of the [[addressAddress2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ADDRESS_2: StringField<FoLocation>;
    /**
     * Static representation of the [[addressAddress3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ADDRESS_3: StringField<FoLocation>;
    /**
     * Static representation of the [[addressAddress4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ADDRESS_4: StringField<FoLocation>;
    /**
     * Static representation of the [[addressAddress5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ADDRESS_5: StringField<FoLocation>;
    /**
     * Static representation of the [[addressAddress6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ADDRESS_6: StringField<FoLocation>;
    /**
     * Static representation of the [[addressAddress7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ADDRESS_7: StringField<FoLocation>;
    /**
     * Static representation of the [[addressAddress8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ADDRESS_8: StringField<FoLocation>;
    /**
     * Static representation of the [[addressAddress9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ADDRESS_9: StringField<FoLocation>;
    /**
     * Static representation of the [[addressCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_CITY: StringField<FoLocation>;
    /**
     * Static representation of the [[addressCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_COUNTRY: StringField<FoLocation>;
    /**
     * Static representation of the [[addressCounty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_COUNTY: StringField<FoLocation>;
    /**
     * Static representation of the [[addressProvince]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_PROVINCE: StringField<FoLocation>;
    /**
     * Static representation of the [[addressState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_STATE: StringField<FoLocation>;
    /**
     * Static representation of the [[addressZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ZIP_CODE: StringField<FoLocation>;
    /**
     * Static representation of the [[companyFlx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_FLX: StringField<FoLocation>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoLocation>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoLocation>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoLocation>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FoLocation>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoLocation>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoLocation>;
    /**
     * Static representation of the [[geozoneFlx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GEOZONE_FLX: StringField<FoLocation>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoLocation>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoLocation>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoLocation>;
    /**
     * Static representation of the [[locationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_GROUP: StringField<FoLocation>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FoLocation>;
    /**
     * Static representation of the [[standardHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STANDARD_HOURS: NumberField<FoLocation>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoLocation>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoLocation>;
    /**
     * Static representation of the [[timezone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIMEZONE: StringField<FoLocation>;
    /**
     * Static representation of the one-to-one navigation property [[addressNavDeflt]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_NAV_DEFLT: OneToOneLink<FoLocation, FoCorporateAddressDeflt>;
    /**
     * Static representation of the one-to-many navigation property [[companyFlxNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_FLX_NAV: Link<FoLocation, FoCompany>;
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoLocation, FoTranslation>;
    /**
     * Static representation of the one-to-one navigation property [[geozoneFlxNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GEOZONE_FLX_NAV: OneToOneLink<FoLocation, FoGeozone>;
    /**
     * Static representation of the one-to-one navigation property [[locationGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_GROUP_NAV: OneToOneLink<FoLocation, FoLocationGroup>;
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_NAV: OneToOneLink<FoLocation, FoTranslation>;
    /**
     * All fields of the FoLocation entity.
     */
    const _allFields: Array<StringField<FoLocation> | DateField<FoLocation> | NumberField<FoLocation> | OneToOneLink<FoLocation, FoCorporateAddressDeflt> | Link<FoLocation, FoCompany> | OneToOneLink<FoLocation, FoTranslation> | OneToOneLink<FoLocation, FoGeozone> | OneToOneLink<FoLocation, FoLocationGroup>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoLocation>;
    /**
     * All key fields of the FoLocation entity.
     */
    const _keyFields: Array<Selectable<FoLocation>>;
    /**
     * Mapping of all key field names to the respective static field property FoLocation.
     */
    const _keys: {
        [keys: string]: Selectable<FoLocation>;
    };
}
//# sourceMappingURL=FoLocation.d.ts.map