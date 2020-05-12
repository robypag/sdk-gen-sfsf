import { Background_LeadExperienceRequestBuilder } from './Background_LeadExperienceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_LeadExperience" of service "SFOData".
 */
export declare class Background_LeadExperience extends Entity implements Background_LeadExperienceType {
    /**
     * Technical entity name for Background_LeadExperience.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_LeadExperience.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * backgroundElementId.
     */
    backgroundElementId: BigNumber;
    /**
     * bgOrderPos.
     */
    bgOrderPos: BigNumber;
    /**
     * Comments.
     * @nullable
     */
    comments?: string;
    /**
     * Dollars Managed (M).
     * @nullable
     */
    dollars?: number;
    /**
     * Area of Leadership.
     */
    experience: string;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * # of People Managed.
     * @nullable
     */
    people?: number;
    /**
     * userId.
     */
    userId: string;
    /**
     * Years of Experience.
     */
    years: number;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    experienceNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * Returns an entity builder to construct instances `Background_LeadExperience`.
     * @returns A builder that constructs instances of entity type `Background_LeadExperience`.
     */
    static builder(): EntityBuilderType<Background_LeadExperience, Background_LeadExperienceTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_LeadExperience` entity type.
     * @returns A `Background_LeadExperience` request builder.
     */
    static requestBuilder(): Background_LeadExperienceRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_LeadExperience`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_LeadExperience`.
     */
    static customField(fieldName: string): CustomField<Background_LeadExperience>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { User, UserType } from './User';
export interface Background_LeadExperienceType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    comments?: string;
    dollars?: number;
    experience: string;
    lastModifiedDate: Moment;
    people?: number;
    userId: string;
    years: number;
    experienceNav: PicklistOptionType;
    userIdNav: UserType;
}
export interface Background_LeadExperienceTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    comments: string;
    dollars: number;
    experience: string;
    lastModifiedDate: Moment;
    people: number;
    userId: string;
    years: number;
    experienceNav: PicklistOptionType;
    userIdNav: UserType;
}
export declare namespace Background_LeadExperience {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_LeadExperience>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_LeadExperience>;
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTS: StringField<Background_LeadExperience>;
    /**
     * Static representation of the [[dollars]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOLLARS: NumberField<Background_LeadExperience>;
    /**
     * Static representation of the [[experience]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPERIENCE: StringField<Background_LeadExperience>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_LeadExperience>;
    /**
     * Static representation of the [[people]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PEOPLE: NumberField<Background_LeadExperience>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_LeadExperience>;
    /**
     * Static representation of the [[years]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const YEARS: NumberField<Background_LeadExperience>;
    /**
     * Static representation of the one-to-one navigation property [[experienceNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPERIENCE_NAV: OneToOneLink<Background_LeadExperience, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_LeadExperience, User>;
    /**
     * All fields of the Background_LeadExperience entity.
     */
    const _allFields: Array<BigNumberField<Background_LeadExperience> | StringField<Background_LeadExperience> | NumberField<Background_LeadExperience> | DateField<Background_LeadExperience> | OneToOneLink<Background_LeadExperience, PicklistOption> | OneToOneLink<Background_LeadExperience, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_LeadExperience>;
    /**
     * All key fields of the Background_LeadExperience entity.
     */
    const _keyFields: Array<Selectable<Background_LeadExperience>>;
    /**
     * Mapping of all key field names to the respective static field property Background_LeadExperience.
     */
    const _keys: {
        [keys: string]: Selectable<Background_LeadExperience>;
    };
}
//# sourceMappingURL=Background_LeadExperience.d.ts.map