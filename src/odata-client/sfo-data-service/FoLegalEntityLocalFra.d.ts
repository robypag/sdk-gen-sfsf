import { FoLegalEntityLocalFraRequestBuilder } from './FoLegalEntityLocalFraRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOLegalEntityLocalFRA" of service "SFOData".
 */
export declare class FoLegalEntityLocalFra extends Entity implements FoLegalEntityLocalFraType {
    /**
     * Technical entity name for FoLegalEntityLocalFra.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoLegalEntityLocalFra.
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
     * NAF Code Pre-2008.
     * @nullable
     */
    nafCode?: BigNumber;
    /**
     * NAF Code Post-2008.
     * Maximum length: 45.
     * @nullable
     */
    nafCodePost2008?: string;
    /**
     * Siren Code.
     * @nullable
     */
    sirenCode?: BigNumber;
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
     * Returns an entity builder to construct instances `FoLegalEntityLocalFra`.
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalFra`.
     */
    static builder(): EntityBuilderType<FoLegalEntityLocalFra, FoLegalEntityLocalFraTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoLegalEntityLocalFra` entity type.
     * @returns A `FoLegalEntityLocalFra` request builder.
     */
    static requestBuilder(): FoLegalEntityLocalFraRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLegalEntityLocalFra`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalFra`.
     */
    static customField(fieldName: string): CustomField<FoLegalEntityLocalFra>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Territory, TerritoryType } from './Territory';
export interface FoLegalEntityLocalFraType {
    country: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    endDate?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    nafCode?: BigNumber;
    nafCodePost2008?: string;
    sirenCode?: BigNumber;
    startDate: Moment;
    status?: string;
    countryNav: TerritoryType;
}
export interface FoLegalEntityLocalFraTypeForceMandatory {
    country: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    endDate: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    nafCode: BigNumber;
    nafCodePost2008: string;
    sirenCode: BigNumber;
    startDate: Moment;
    status: string;
    countryNav: TerritoryType;
}
export declare namespace FoLegalEntityLocalFra {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<FoLegalEntityLocalFra>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoLegalEntityLocalFra>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoLegalEntityLocalFra>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoLegalEntityLocalFra>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoLegalEntityLocalFra>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoLegalEntityLocalFra>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoLegalEntityLocalFra>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoLegalEntityLocalFra>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoLegalEntityLocalFra>;
    /**
     * Static representation of the [[nafCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAF_CODE: BigNumberField<FoLegalEntityLocalFra>;
    /**
     * Static representation of the [[nafCodePost2008]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAF_CODE_POST_2008: StringField<FoLegalEntityLocalFra>;
    /**
     * Static representation of the [[sirenCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIREN_CODE: BigNumberField<FoLegalEntityLocalFra>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoLegalEntityLocalFra>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoLegalEntityLocalFra>;
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: OneToOneLink<FoLegalEntityLocalFra, Territory>;
    /**
     * All fields of the FoLegalEntityLocalFra entity.
     */
    const _allFields: Array<StringField<FoLegalEntityLocalFra> | DateField<FoLegalEntityLocalFra> | BigNumberField<FoLegalEntityLocalFra> | OneToOneLink<FoLegalEntityLocalFra, Territory>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoLegalEntityLocalFra>;
    /**
     * All key fields of the FoLegalEntityLocalFra entity.
     */
    const _keyFields: Array<Selectable<FoLegalEntityLocalFra>>;
    /**
     * Mapping of all key field names to the respective static field property FoLegalEntityLocalFra.
     */
    const _keys: {
        [keys: string]: Selectable<FoLegalEntityLocalFra>;
    };
}
//# sourceMappingURL=FoLegalEntityLocalFra.d.ts.map