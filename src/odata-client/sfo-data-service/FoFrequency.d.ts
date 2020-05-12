import { FoFrequencyRequestBuilder } from './FoFrequencyRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOFrequency" of service "SFOData".
 */
export declare class FoFrequency extends Entity implements FoFrequencyType {
    /**
     * Technical entity name for FoFrequency.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoFrequency.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Annualization Factor.
     * @nullable
     */
    annualizationFactor?: number;
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
     * Frequency ID.
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
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    descriptionTranslationNav: FoTranslation;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    nameTranslationNav: FoTranslation;
    /**
     * Returns an entity builder to construct instances `FoFrequency`.
     * @returns A builder that constructs instances of entity type `FoFrequency`.
     */
    static builder(): EntityBuilderType<FoFrequency, FoFrequencyTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoFrequency` entity type.
     * @returns A `FoFrequency` request builder.
     */
    static requestBuilder(): FoFrequencyRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoFrequency`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoFrequency`.
     */
    static customField(fieldName: string): CustomField<FoFrequency>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoTranslation, FoTranslationType } from './FoTranslation';
export interface FoFrequencyType {
    annualizationFactor?: number;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    description?: string;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    name?: string;
    descriptionTranslationNav: FoTranslationType;
    nameTranslationNav: FoTranslationType;
}
export interface FoFrequencyTypeForceMandatory {
    annualizationFactor: number;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    description: string;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    name: string;
    descriptionTranslationNav: FoTranslationType;
    nameTranslationNav: FoTranslationType;
}
export declare namespace FoFrequency {
    /**
     * Static representation of the [[annualizationFactor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ANNUALIZATION_FACTOR: NumberField<FoFrequency>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoFrequency>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoFrequency>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoFrequency>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FoFrequency>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoFrequency>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoFrequency>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoFrequency>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoFrequency>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FoFrequency>;
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoFrequency, FoTranslation>;
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_NAV: OneToOneLink<FoFrequency, FoTranslation>;
    /**
     * All fields of the FoFrequency entity.
     */
    const _allFields: Array<NumberField<FoFrequency> | StringField<FoFrequency> | DateField<FoFrequency> | OneToOneLink<FoFrequency, FoTranslation>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoFrequency>;
    /**
     * All key fields of the FoFrequency entity.
     */
    const _keyFields: Array<Selectable<FoFrequency>>;
    /**
     * Mapping of all key field names to the respective static field property FoFrequency.
     */
    const _keys: {
        [keys: string]: Selectable<FoFrequency>;
    };
}
//# sourceMappingURL=FoFrequency.d.ts.map