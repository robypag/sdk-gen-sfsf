import { Background_PromotabilityRequestBuilder } from './Background_PromotabilityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_Promotability" of service "SFOData".
 */
export declare class Background_Promotability extends Entity implements Background_PromotabilityType {
    /**
     * Technical entity name for Background_Promotability.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Promotability.
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
     * Function.
     */
    function: string;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * Level.
     */
    level: string;
    /**
     * Timeframe.
     */
    timeframe: string;
    /**
     * userId.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    functionNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    levelNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    timeframeNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * Returns an entity builder to construct instances `Background_Promotability`.
     * @returns A builder that constructs instances of entity type `Background_Promotability`.
     */
    static builder(): EntityBuilderType<Background_Promotability, Background_PromotabilityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_Promotability` entity type.
     * @returns A `Background_Promotability` request builder.
     */
    static requestBuilder(): Background_PromotabilityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Promotability`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Promotability`.
     */
    static customField(fieldName: string): CustomField<Background_Promotability>;
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
export interface Background_PromotabilityType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    function: string;
    lastModifiedDate: Moment;
    level: string;
    timeframe: string;
    userId: string;
    functionNav: PicklistOptionType;
    levelNav: PicklistOptionType;
    timeframeNav: PicklistOptionType;
    userIdNav: UserType;
}
export interface Background_PromotabilityTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    function: string;
    lastModifiedDate: Moment;
    level: string;
    timeframe: string;
    userId: string;
    functionNav: PicklistOptionType;
    levelNav: PicklistOptionType;
    timeframeNav: PicklistOptionType;
    userIdNav: UserType;
}
export declare namespace Background_Promotability {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Promotability>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_Promotability>;
    /**
     * Static representation of the [[function]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUNCTION: StringField<Background_Promotability>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_Promotability>;
    /**
     * Static representation of the [[level]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEVEL: StringField<Background_Promotability>;
    /**
     * Static representation of the [[timeframe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIMEFRAME: StringField<Background_Promotability>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_Promotability>;
    /**
     * Static representation of the one-to-one navigation property [[functionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUNCTION_NAV: OneToOneLink<Background_Promotability, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[levelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEVEL_NAV: OneToOneLink<Background_Promotability, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[timeframeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIMEFRAME_NAV: OneToOneLink<Background_Promotability, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_Promotability, User>;
    /**
     * All fields of the Background_Promotability entity.
     */
    const _allFields: Array<BigNumberField<Background_Promotability> | StringField<Background_Promotability> | DateField<Background_Promotability> | OneToOneLink<Background_Promotability, PicklistOption> | OneToOneLink<Background_Promotability, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_Promotability>;
    /**
     * All key fields of the Background_Promotability entity.
     */
    const _keyFields: Array<Selectable<Background_Promotability>>;
    /**
     * Mapping of all key field names to the respective static field property Background_Promotability.
     */
    const _keys: {
        [keys: string]: Selectable<Background_Promotability>;
    };
}
//# sourceMappingURL=Background_Promotability.d.ts.map