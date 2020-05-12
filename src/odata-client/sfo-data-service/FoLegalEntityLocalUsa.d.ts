import { FoLegalEntityLocalUsaRequestBuilder } from './FoLegalEntityLocalUsaRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOLegalEntityLocalUSA" of service "SFOData".
 */
export declare class FoLegalEntityLocalUsa extends Entity implements FoLegalEntityLocalUsaType {
    /**
     * Technical entity name for FoLegalEntityLocalUsa.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoLegalEntityLocalUsa.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * countryOfRegistration.
     * Maximum length: 128.
     */
    country: string;
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
    externalCode: string;
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
    startDate: Moment;
    /**
     * Status.
     * Maximum length: 255.
     * @nullable
     */
    status?: string;
    /**
     * One-to-one navigation property to the [[Territory]] entity.
     */
    countryNav: Territory;
    /**
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    legalEntityTypeNav: PickListValueV2[];
    /**
     * Returns an entity builder to construct instances `FoLegalEntityLocalUsa`.
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalUsa`.
     */
    static builder(): EntityBuilderType<FoLegalEntityLocalUsa, FoLegalEntityLocalUsaTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoLegalEntityLocalUsa` entity type.
     * @returns A `FoLegalEntityLocalUsa` request builder.
     */
    static requestBuilder(): FoLegalEntityLocalUsaRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLegalEntityLocalUsa`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalUsa`.
     */
    static customField(fieldName: string): CustomField<FoLegalEntityLocalUsa>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace FoLegalEntityLocalUsa {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<FoLegalEntityLocalUsa>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoLegalEntityLocalUsa>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoLegalEntityLocalUsa>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoLegalEntityLocalUsa>;
    /**
     * Static representation of the [[eeoCompanyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EEO_COMPANY_CODE: StringField<FoLegalEntityLocalUsa>;
    /**
     * Static representation of the [[employerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYER_ID: StringField<FoLegalEntityLocalUsa>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoLegalEntityLocalUsa>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoLegalEntityLocalUsa>;
    /**
     * Static representation of the [[fedReserveBankDistrict]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FED_RESERVE_BANK_DISTRICT: StringField<FoLegalEntityLocalUsa>;
    /**
     * Static representation of the [[federalReserveBankId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEDERAL_RESERVE_BANK_ID: StringField<FoLegalEntityLocalUsa>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoLegalEntityLocalUsa>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoLegalEntityLocalUsa>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoLegalEntityLocalUsa>;
    /**
     * Static representation of the [[legalEntityType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_TYPE: StringField<FoLegalEntityLocalUsa>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoLegalEntityLocalUsa>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoLegalEntityLocalUsa>;
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: OneToOneLink<FoLegalEntityLocalUsa, Territory>;
    /**
     * Static representation of the one-to-many navigation property [[legalEntityTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_TYPE_NAV: Link<FoLegalEntityLocalUsa, PickListValueV2>;
    /**
     * All fields of the FoLegalEntityLocalUsa entity.
     */
    const _allFields: Array<StringField<FoLegalEntityLocalUsa> | DateField<FoLegalEntityLocalUsa> | OneToOneLink<FoLegalEntityLocalUsa, Territory> | Link<FoLegalEntityLocalUsa, PickListValueV2>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoLegalEntityLocalUsa>;
    /**
     * All key fields of the FoLegalEntityLocalUsa entity.
     */
    const _keyFields: Array<Selectable<FoLegalEntityLocalUsa>>;
    /**
     * Mapping of all key field names to the respective static field property FoLegalEntityLocalUsa.
     */
    const _keys: {
        [keys: string]: Selectable<FoLegalEntityLocalUsa>;
    };
}
//# sourceMappingURL=FoLegalEntityLocalUsa.d.ts.map