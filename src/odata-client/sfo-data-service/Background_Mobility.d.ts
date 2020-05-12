import { Background_MobilityRequestBuilder } from './Background_MobilityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_Mobility" of service "SFOData".
 */
export declare class Background_Mobility extends Entity implements Background_MobilityType {
    /**
     * Technical entity name for Background_Mobility.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Mobility.
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
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * Location Desired.
     * @nullable
     */
    location?: string;
    /**
     * userId.
     */
    userId: string;
    /**
     * Willing to Relocate.
     */
    willingness: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    willingnessNav: PicklistOption;
    /**
     * Returns an entity builder to construct instances `Background_Mobility`.
     * @returns A builder that constructs instances of entity type `Background_Mobility`.
     */
    static builder(): EntityBuilderType<Background_Mobility, Background_MobilityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_Mobility` entity type.
     * @returns A `Background_Mobility` request builder.
     */
    static requestBuilder(): Background_MobilityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Mobility`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Mobility`.
     */
    static customField(fieldName: string): CustomField<Background_Mobility>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
export interface Background_MobilityType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    lastModifiedDate: Moment;
    location?: string;
    userId: string;
    willingness: string;
    userIdNav: UserType;
    willingnessNav: PicklistOptionType;
}
export interface Background_MobilityTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    lastModifiedDate: Moment;
    location: string;
    userId: string;
    willingness: string;
    userIdNav: UserType;
    willingnessNav: PicklistOptionType;
}
export declare namespace Background_Mobility {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Mobility>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_Mobility>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_Mobility>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: StringField<Background_Mobility>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_Mobility>;
    /**
     * Static representation of the [[willingness]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WILLINGNESS: StringField<Background_Mobility>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_Mobility, User>;
    /**
     * Static representation of the one-to-one navigation property [[willingnessNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WILLINGNESS_NAV: OneToOneLink<Background_Mobility, PicklistOption>;
    /**
     * All fields of the Background_Mobility entity.
     */
    const _allFields: Array<BigNumberField<Background_Mobility> | DateField<Background_Mobility> | StringField<Background_Mobility> | OneToOneLink<Background_Mobility, User> | OneToOneLink<Background_Mobility, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_Mobility>;
    /**
     * All key fields of the Background_Mobility entity.
     */
    const _keyFields: Array<Selectable<Background_Mobility>>;
    /**
     * Mapping of all key field names to the respective static field property Background_Mobility.
     */
    const _keys: {
        [keys: string]: Selectable<Background_Mobility>;
    };
}
//# sourceMappingURL=Background_Mobility.d.ts.map