import { FoJobClassLocalDefltRequestBuilder } from './FoJobClassLocalDefltRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOJobClassLocalDEFLT" of service "SFOData".
 */
export declare class FoJobClassLocalDeflt extends Entity implements FoJobClassLocalDefltType {
    /**
     * Technical entity name for FoJobClassLocalDeflt.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoJobClassLocalDeflt.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * country.
     */
    country: string;
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
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * externalCode.
     * Maximum length: 32.
     */
    externalCode: string;
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
     * Start Date.
     */
    startDate: Moment;
    /**
     * status.
     * @nullable
     */
    status?: string;
    /**
     * One-to-one navigation property to the [[Territory]] entity.
     */
    countryNav: Territory;
    /**
     * Returns an entity builder to construct instances `FoJobClassLocalDeflt`.
     * @returns A builder that constructs instances of entity type `FoJobClassLocalDeflt`.
     */
    static builder(): EntityBuilderType<FoJobClassLocalDeflt, FoJobClassLocalDefltTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoJobClassLocalDeflt` entity type.
     * @returns A `FoJobClassLocalDeflt` request builder.
     */
    static requestBuilder(): FoJobClassLocalDefltRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalDeflt`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoJobClassLocalDeflt`.
     */
    static customField(fieldName: string): CustomField<FoJobClassLocalDeflt>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Territory, TerritoryType } from './Territory';
export interface FoJobClassLocalDefltType {
    country: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    endDate?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    startDate: Moment;
    status?: string;
    countryNav: TerritoryType;
}
export interface FoJobClassLocalDefltTypeForceMandatory {
    country: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    endDate: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    startDate: Moment;
    status: string;
    countryNav: TerritoryType;
}
export declare namespace FoJobClassLocalDeflt {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<FoJobClassLocalDeflt>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoJobClassLocalDeflt>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoJobClassLocalDeflt>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoJobClassLocalDeflt>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoJobClassLocalDeflt>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoJobClassLocalDeflt>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoJobClassLocalDeflt>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoJobClassLocalDeflt>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoJobClassLocalDeflt>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoJobClassLocalDeflt>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoJobClassLocalDeflt>;
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: OneToOneLink<FoJobClassLocalDeflt, Territory>;
    /**
     * All fields of the FoJobClassLocalDeflt entity.
     */
    const _allFields: Array<StringField<FoJobClassLocalDeflt> | DateField<FoJobClassLocalDeflt> | OneToOneLink<FoJobClassLocalDeflt, Territory>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoJobClassLocalDeflt>;
    /**
     * All key fields of the FoJobClassLocalDeflt entity.
     */
    const _keyFields: Array<Selectable<FoJobClassLocalDeflt>>;
    /**
     * Mapping of all key field names to the respective static field property FoJobClassLocalDeflt.
     */
    const _keys: {
        [keys: string]: Selectable<FoJobClassLocalDeflt>;
    };
}
//# sourceMappingURL=FoJobClassLocalDeflt.d.ts.map