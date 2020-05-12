import { FoGeozoneRequestBuilder } from './FoGeozoneRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOGeozone" of service "SFOData".
 */
export declare class FoGeozone extends Entity implements FoGeozoneType {
    /**
     * Technical entity name for FoGeozone.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoGeozone.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Adjustment Percentage.
     * @nullable
     */
    adjustmentPercentage?: BigNumber;
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
     * Name.
     * Maximum length: 32.
     * @nullable
     */
    name?: string;
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
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    descriptionTranslationNav: FoTranslation;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    nameTranslationNav: FoTranslation;
    /**
     * Returns an entity builder to construct instances `FoGeozone`.
     * @returns A builder that constructs instances of entity type `FoGeozone`.
     */
    static builder(): EntityBuilderType<FoGeozone, FoGeozoneTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoGeozone` entity type.
     * @returns A `FoGeozone` request builder.
     */
    static requestBuilder(): FoGeozoneRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoGeozone`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoGeozone`.
     */
    static customField(fieldName: string): CustomField<FoGeozone>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoTranslation, FoTranslationType } from './FoTranslation';
export interface FoGeozoneType {
    adjustmentPercentage?: BigNumber;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    description?: string;
    endDate?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    name?: string;
    startDate: Moment;
    status?: string;
    descriptionTranslationNav: FoTranslationType;
    nameTranslationNav: FoTranslationType;
}
export interface FoGeozoneTypeForceMandatory {
    adjustmentPercentage: BigNumber;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    description: string;
    endDate: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    name: string;
    startDate: Moment;
    status: string;
    descriptionTranslationNav: FoTranslationType;
    nameTranslationNav: FoTranslationType;
}
export declare namespace FoGeozone {
    /**
     * Static representation of the [[adjustmentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADJUSTMENT_PERCENTAGE: BigNumberField<FoGeozone>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoGeozone>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoGeozone>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoGeozone>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FoGeozone>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoGeozone>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoGeozone>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoGeozone>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoGeozone>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoGeozone>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FoGeozone>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoGeozone>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoGeozone>;
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoGeozone, FoTranslation>;
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_NAV: OneToOneLink<FoGeozone, FoTranslation>;
    /**
     * All fields of the FoGeozone entity.
     */
    const _allFields: Array<BigNumberField<FoGeozone> | StringField<FoGeozone> | DateField<FoGeozone> | OneToOneLink<FoGeozone, FoTranslation>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoGeozone>;
    /**
     * All key fields of the FoGeozone entity.
     */
    const _keyFields: Array<Selectable<FoGeozone>>;
    /**
     * Mapping of all key field names to the respective static field property FoGeozone.
     */
    const _keys: {
        [keys: string]: Selectable<FoGeozone>;
    };
}
//# sourceMappingURL=FoGeozone.d.ts.map