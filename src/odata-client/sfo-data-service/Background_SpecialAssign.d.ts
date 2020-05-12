import { Background_SpecialAssignRequestBuilder } from './Background_SpecialAssignRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_SpecialAssign" of service "SFOData".
 */
export declare class Background_SpecialAssign extends Entity implements Background_SpecialAssignType {
    /**
     * Technical entity name for Background_SpecialAssign.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_SpecialAssign.
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
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * Assignment/Project.
     */
    project: string;
    /**
     * From Date.
     */
    startDate: Moment;
    /**
     * userId.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * Returns an entity builder to construct instances `Background_SpecialAssign`.
     * @returns A builder that constructs instances of entity type `Background_SpecialAssign`.
     */
    static builder(): EntityBuilderType<Background_SpecialAssign, Background_SpecialAssignTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_SpecialAssign` entity type.
     * @returns A `Background_SpecialAssign` request builder.
     */
    static requestBuilder(): Background_SpecialAssignRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_SpecialAssign`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_SpecialAssign`.
     */
    static customField(fieldName: string): CustomField<Background_SpecialAssign>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface Background_SpecialAssignType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    description?: string;
    endDate?: Moment;
    lastModifiedDate: Moment;
    project: string;
    startDate: Moment;
    userId: string;
    userIdNav: UserType;
}
export interface Background_SpecialAssignTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    description: string;
    endDate: Moment;
    lastModifiedDate: Moment;
    project: string;
    startDate: Moment;
    userId: string;
    userIdNav: UserType;
}
export declare namespace Background_SpecialAssign {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_SpecialAssign>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_SpecialAssign>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<Background_SpecialAssign>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<Background_SpecialAssign>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_SpecialAssign>;
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT: StringField<Background_SpecialAssign>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<Background_SpecialAssign>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_SpecialAssign>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_SpecialAssign, User>;
    /**
     * All fields of the Background_SpecialAssign entity.
     */
    const _allFields: Array<BigNumberField<Background_SpecialAssign> | StringField<Background_SpecialAssign> | DateField<Background_SpecialAssign> | OneToOneLink<Background_SpecialAssign, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_SpecialAssign>;
    /**
     * All key fields of the Background_SpecialAssign entity.
     */
    const _keyFields: Array<Selectable<Background_SpecialAssign>>;
    /**
     * Mapping of all key field names to the respective static field property Background_SpecialAssign.
     */
    const _keys: {
        [keys: string]: Selectable<Background_SpecialAssign>;
    };
}
//# sourceMappingURL=Background_SpecialAssign.d.ts.map