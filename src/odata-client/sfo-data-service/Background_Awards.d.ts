import { Background_AwardsRequestBuilder } from './Background_AwardsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_Awards" of service "SFOData".
 */
export declare class Background_Awards extends Entity implements Background_AwardsType {
    /**
     * Technical entity name for Background_Awards.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Awards.
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
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Institution.
     * @nullable
     */
    institution?: string;
    /**
     * Issue Date.
     * @nullable
     */
    issueDate?: Moment;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * Honor or Award.
     */
    name: string;
    /**
     * userId.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * Returns an entity builder to construct instances `Background_Awards`.
     * @returns A builder that constructs instances of entity type `Background_Awards`.
     */
    static builder(): EntityBuilderType<Background_Awards, Background_AwardsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_Awards` entity type.
     * @returns A `Background_Awards` request builder.
     */
    static requestBuilder(): Background_AwardsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Awards`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Awards`.
     */
    static customField(fieldName: string): CustomField<Background_Awards>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface Background_AwardsType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    description?: string;
    institution?: string;
    issueDate?: Moment;
    lastModifiedDate: Moment;
    name: string;
    userId: string;
    userIdNav: UserType;
}
export interface Background_AwardsTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    description: string;
    institution: string;
    issueDate: Moment;
    lastModifiedDate: Moment;
    name: string;
    userId: string;
    userIdNav: UserType;
}
export declare namespace Background_Awards {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Awards>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_Awards>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<Background_Awards>;
    /**
     * Static representation of the [[institution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTITUTION: StringField<Background_Awards>;
    /**
     * Static representation of the [[issueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ISSUE_DATE: DateField<Background_Awards>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_Awards>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<Background_Awards>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_Awards>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_Awards, User>;
    /**
     * All fields of the Background_Awards entity.
     */
    const _allFields: Array<BigNumberField<Background_Awards> | StringField<Background_Awards> | DateField<Background_Awards> | OneToOneLink<Background_Awards, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_Awards>;
    /**
     * All key fields of the Background_Awards entity.
     */
    const _keyFields: Array<Selectable<Background_Awards>>;
    /**
     * Mapping of all key field names to the respective static field property Background_Awards.
     */
    const _keys: {
        [keys: string]: Selectable<Background_Awards>;
    };
}
//# sourceMappingURL=Background_Awards.d.ts.map