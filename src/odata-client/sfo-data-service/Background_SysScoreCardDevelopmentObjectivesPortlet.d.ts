import { Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder } from './Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_SysScoreCardDevelopmentObjectivesPortlet" of service "SFOData".
 */
export declare class Background_SysScoreCardDevelopmentObjectivesPortlet extends Entity implements Background_SysScoreCardDevelopmentObjectivesPortletType {
    /**
     * Technical entity name for Background_SysScoreCardDevelopmentObjectivesPortlet.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_SysScoreCardDevelopmentObjectivesPortlet.
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
     * Development Objective.
     */
    title: string;
    /**
     * userId.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * Returns an entity builder to construct instances `Background_SysScoreCardDevelopmentObjectivesPortlet`.
     * @returns A builder that constructs instances of entity type `Background_SysScoreCardDevelopmentObjectivesPortlet`.
     */
    static builder(): EntityBuilderType<Background_SysScoreCardDevelopmentObjectivesPortlet, Background_SysScoreCardDevelopmentObjectivesPortletTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_SysScoreCardDevelopmentObjectivesPortlet` entity type.
     * @returns A `Background_SysScoreCardDevelopmentObjectivesPortlet` request builder.
     */
    static requestBuilder(): Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_SysScoreCardDevelopmentObjectivesPortlet`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_SysScoreCardDevelopmentObjectivesPortlet`.
     */
    static customField(fieldName: string): CustomField<Background_SysScoreCardDevelopmentObjectivesPortlet>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface Background_SysScoreCardDevelopmentObjectivesPortletType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    lastModifiedDate: Moment;
    title: string;
    userId: string;
    userIdNav: UserType;
}
export interface Background_SysScoreCardDevelopmentObjectivesPortletTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    lastModifiedDate: Moment;
    title: string;
    userId: string;
    userIdNav: UserType;
}
export declare namespace Background_SysScoreCardDevelopmentObjectivesPortlet {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_SysScoreCardDevelopmentObjectivesPortlet>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_SysScoreCardDevelopmentObjectivesPortlet>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_SysScoreCardDevelopmentObjectivesPortlet>;
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE: StringField<Background_SysScoreCardDevelopmentObjectivesPortlet>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_SysScoreCardDevelopmentObjectivesPortlet>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_SysScoreCardDevelopmentObjectivesPortlet, User>;
    /**
     * All fields of the Background_SysScoreCardDevelopmentObjectivesPortlet entity.
     */
    const _allFields: Array<BigNumberField<Background_SysScoreCardDevelopmentObjectivesPortlet> | DateField<Background_SysScoreCardDevelopmentObjectivesPortlet> | StringField<Background_SysScoreCardDevelopmentObjectivesPortlet> | OneToOneLink<Background_SysScoreCardDevelopmentObjectivesPortlet, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_SysScoreCardDevelopmentObjectivesPortlet>;
    /**
     * All key fields of the Background_SysScoreCardDevelopmentObjectivesPortlet entity.
     */
    const _keyFields: Array<Selectable<Background_SysScoreCardDevelopmentObjectivesPortlet>>;
    /**
     * Mapping of all key field names to the respective static field property Background_SysScoreCardDevelopmentObjectivesPortlet.
     */
    const _keys: {
        [keys: string]: Selectable<Background_SysScoreCardDevelopmentObjectivesPortlet>;
    };
}
//# sourceMappingURL=Background_SysScoreCardDevelopmentObjectivesPortlet.d.ts.map