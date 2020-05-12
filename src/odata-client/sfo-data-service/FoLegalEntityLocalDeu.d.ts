import { FoLegalEntityLocalDeuRequestBuilder } from './FoLegalEntityLocalDeuRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOLegalEntityLocalDEU" of service "SFOData".
 */
export declare class FoLegalEntityLocalDeu extends Entity implements FoLegalEntityLocalDeuType {
    /**
     * Technical entity name for FoLegalEntityLocalDeu.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoLegalEntityLocalDeu.
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
    startDate: Moment;
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
    countryNav: Territory;
    /**
     * Returns an entity builder to construct instances `FoLegalEntityLocalDeu`.
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalDeu`.
     */
    static builder(): EntityBuilderType<FoLegalEntityLocalDeu, FoLegalEntityLocalDeuTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoLegalEntityLocalDeu` entity type.
     * @returns A `FoLegalEntityLocalDeu` request builder.
     */
    static requestBuilder(): FoLegalEntityLocalDeuRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLegalEntityLocalDeu`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalDeu`.
     */
    static customField(fieldName: string): CustomField<FoLegalEntityLocalDeu>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace FoLegalEntityLocalDeu {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<FoLegalEntityLocalDeu>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoLegalEntityLocalDeu>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoLegalEntityLocalDeu>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoLegalEntityLocalDeu>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoLegalEntityLocalDeu>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoLegalEntityLocalDeu>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoLegalEntityLocalDeu>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoLegalEntityLocalDeu>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoLegalEntityLocalDeu>;
    /**
     * Static representation of the [[socialAccidentInsurance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOCIAL_ACCIDENT_INSURANCE: StringField<FoLegalEntityLocalDeu>;
    /**
     * Static representation of the [[socialAccidentInsuranceRegistrationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOCIAL_ACCIDENT_INSURANCE_REGISTRATION_NUMBER: StringField<FoLegalEntityLocalDeu>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoLegalEntityLocalDeu>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoLegalEntityLocalDeu>;
    /**
     * Static representation of the [[taxUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_UNIT: StringField<FoLegalEntityLocalDeu>;
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: OneToOneLink<FoLegalEntityLocalDeu, Territory>;
    /**
     * All fields of the FoLegalEntityLocalDeu entity.
     */
    const _allFields: Array<StringField<FoLegalEntityLocalDeu> | DateField<FoLegalEntityLocalDeu> | OneToOneLink<FoLegalEntityLocalDeu, Territory>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoLegalEntityLocalDeu>;
    /**
     * All key fields of the FoLegalEntityLocalDeu entity.
     */
    const _keyFields: Array<Selectable<FoLegalEntityLocalDeu>>;
    /**
     * Mapping of all key field names to the respective static field property FoLegalEntityLocalDeu.
     */
    const _keys: {
        [keys: string]: Selectable<FoLegalEntityLocalDeu>;
    };
}
//# sourceMappingURL=FoLegalEntityLocalDeu.d.ts.map