import { Background_FuncExperienceRequestBuilder } from './Background_FuncExperienceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_FuncExperience" of service "SFOData".
 */
export declare class Background_FuncExperience extends Entity implements Background_FuncExperienceType {
    /**
     * Technical entity name for Background_FuncExperience.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_FuncExperience.
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
     * Function.
     */
    experience: string;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
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
     * Returns an entity builder to construct instances `Background_FuncExperience`.
     * @returns A builder that constructs instances of entity type `Background_FuncExperience`.
     */
    static builder(): EntityBuilderType<Background_FuncExperience, Background_FuncExperienceTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_FuncExperience` entity type.
     * @returns A `Background_FuncExperience` request builder.
     */
    static requestBuilder(): Background_FuncExperienceRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_FuncExperience`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_FuncExperience`.
     */
    static customField(fieldName: string): CustomField<Background_FuncExperience>;
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
export interface Background_FuncExperienceType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    comments?: string;
    experience: string;
    lastModifiedDate: Moment;
    userId: string;
    years: number;
    experienceNav: PicklistOptionType;
    userIdNav: UserType;
}
export interface Background_FuncExperienceTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    comments: string;
    experience: string;
    lastModifiedDate: Moment;
    userId: string;
    years: number;
    experienceNav: PicklistOptionType;
    userIdNav: UserType;
}
export declare namespace Background_FuncExperience {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_FuncExperience>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_FuncExperience>;
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTS: StringField<Background_FuncExperience>;
    /**
     * Static representation of the [[experience]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPERIENCE: StringField<Background_FuncExperience>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_FuncExperience>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_FuncExperience>;
    /**
     * Static representation of the [[years]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const YEARS: NumberField<Background_FuncExperience>;
    /**
     * Static representation of the one-to-one navigation property [[experienceNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPERIENCE_NAV: OneToOneLink<Background_FuncExperience, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_FuncExperience, User>;
    /**
     * All fields of the Background_FuncExperience entity.
     */
    const _allFields: Array<BigNumberField<Background_FuncExperience> | StringField<Background_FuncExperience> | DateField<Background_FuncExperience> | NumberField<Background_FuncExperience> | OneToOneLink<Background_FuncExperience, PicklistOption> | OneToOneLink<Background_FuncExperience, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_FuncExperience>;
    /**
     * All key fields of the Background_FuncExperience entity.
     */
    const _keyFields: Array<Selectable<Background_FuncExperience>>;
    /**
     * Mapping of all key field names to the respective static field property Background_FuncExperience.
     */
    const _keys: {
        [keys: string]: Selectable<Background_FuncExperience>;
    };
}
//# sourceMappingURL=Background_FuncExperience.d.ts.map