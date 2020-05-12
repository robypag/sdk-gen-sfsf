import { CompetencyRatingRequestBuilder } from './CompetencyRatingRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CompetencyRating" of service "SFOData".
 */
export declare class CompetencyRating extends Entity implements CompetencyRatingType {
    /**
     * Technical entity name for CompetencyRating.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CompetencyRating.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * formContentId.
     * @nullable
     */
    formContentId?: BigNumber;
    /**
     * formDataId.
     * @nullable
     */
    formDataId?: BigNumber;
    /**
     * guid.
     * Maximum length: 128.
     */
    guid: string;
    /**
     * id.
     */
    id: BigNumber;
    /**
     * lastModified.
     * @nullable
     */
    lastModified?: Moment;
    /**
     * lastModifiedDateTime.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * lastModifiedWithTZ.
     * @nullable
     */
    lastModifiedWithTz?: Moment;
    /**
     * module.
     */
    module: number;
    /**
     * rater.
     * Maximum length: 100.
     * @nullable
     */
    rater?: string;
    /**
     * raterCategory.
     * Maximum length: 256.
     * @nullable
     */
    raterCategory?: string;
    /**
     * rating.
     * @nullable
     */
    rating?: number;
    /**
     * scaleMax.
     * @nullable
     */
    scaleMax?: BigNumber;
    /**
     * scaleMin.
     * @nullable
     */
    scaleMin?: BigNumber;
    /**
     * source.
     */
    source: number;
    /**
     * status.
     * @nullable
     */
    status?: BigNumber;
    /**
     * type.
     */
    type: number;
    /**
     * userId.
     * Maximum length: 100.
     */
    userId: string;
    /**
     * validFrom.
     * @nullable
     */
    validFrom?: Moment;
    /**
     * validTo.
     * @nullable
     */
    validTo?: Moment;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userNav: User;
    /**
     * Returns an entity builder to construct instances `CompetencyRating`.
     * @returns A builder that constructs instances of entity type `CompetencyRating`.
     */
    static builder(): EntityBuilderType<CompetencyRating, CompetencyRatingTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CompetencyRating` entity type.
     * @returns A `CompetencyRating` request builder.
     */
    static requestBuilder(): CompetencyRatingRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CompetencyRating`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CompetencyRating`.
     */
    static customField(fieldName: string): CustomField<CompetencyRating>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface CompetencyRatingType {
    formContentId?: BigNumber;
    formDataId?: BigNumber;
    guid: string;
    id: BigNumber;
    lastModified?: Moment;
    lastModifiedDateTime?: Moment;
    lastModifiedWithTz?: Moment;
    module: number;
    rater?: string;
    raterCategory?: string;
    rating?: number;
    scaleMax?: BigNumber;
    scaleMin?: BigNumber;
    source: number;
    status?: BigNumber;
    type: number;
    userId: string;
    validFrom?: Moment;
    validTo?: Moment;
    userNav: UserType;
}
export interface CompetencyRatingTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    guid: string;
    id: BigNumber;
    lastModified: Moment;
    lastModifiedDateTime: Moment;
    lastModifiedWithTz: Moment;
    module: number;
    rater: string;
    raterCategory: string;
    rating: number;
    scaleMax: BigNumber;
    scaleMin: BigNumber;
    source: number;
    status: BigNumber;
    type: number;
    userId: string;
    validFrom: Moment;
    validTo: Moment;
    userNav: UserType;
}
export declare namespace CompetencyRating {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<CompetencyRating>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<CompetencyRating>;
    /**
     * Static representation of the [[guid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GUID: StringField<CompetencyRating>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<CompetencyRating>;
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED: DateField<CompetencyRating>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CompetencyRating>;
    /**
     * Static representation of the [[lastModifiedWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_WITH_TZ: DateField<CompetencyRating>;
    /**
     * Static representation of the [[module]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODULE: NumberField<CompetencyRating>;
    /**
     * Static representation of the [[rater]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATER: StringField<CompetencyRating>;
    /**
     * Static representation of the [[raterCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATER_CATEGORY: StringField<CompetencyRating>;
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING: NumberField<CompetencyRating>;
    /**
     * Static representation of the [[scaleMax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCALE_MAX: BigNumberField<CompetencyRating>;
    /**
     * Static representation of the [[scaleMin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCALE_MIN: BigNumberField<CompetencyRating>;
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE: NumberField<CompetencyRating>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: BigNumberField<CompetencyRating>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: NumberField<CompetencyRating>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<CompetencyRating>;
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_FROM: DateField<CompetencyRating>;
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_TO: DateField<CompetencyRating>;
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAV: OneToOneLink<CompetencyRating, User>;
    /**
     * All fields of the CompetencyRating entity.
     */
    const _allFields: Array<BigNumberField<CompetencyRating> | StringField<CompetencyRating> | DateField<CompetencyRating> | NumberField<CompetencyRating> | OneToOneLink<CompetencyRating, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CompetencyRating>;
    /**
     * All key fields of the CompetencyRating entity.
     */
    const _keyFields: Array<Selectable<CompetencyRating>>;
    /**
     * Mapping of all key field names to the respective static field property CompetencyRating.
     */
    const _keys: {
        [keys: string]: Selectable<CompetencyRating>;
    };
}
//# sourceMappingURL=CompetencyRating.d.ts.map