import { Background_MembershipsRequestBuilder } from './Background_MembershipsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_Memberships" of service "SFOData".
 */
export declare class Background_Memberships extends Entity implements Background_MembershipsType {
    /**
     * Technical entity name for Background_Memberships.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Memberships.
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
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * Organization.
     */
    organization: string;
    /**
     * Position/Role.
     * @nullable
     */
    role?: string;
    /**
     * From Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * userId.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * Returns an entity builder to construct instances `Background_Memberships`.
     * @returns A builder that constructs instances of entity type `Background_Memberships`.
     */
    static builder(): EntityBuilderType<Background_Memberships, Background_MembershipsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_Memberships` entity type.
     * @returns A `Background_Memberships` request builder.
     */
    static requestBuilder(): Background_MembershipsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Memberships`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Memberships`.
     */
    static customField(fieldName: string): CustomField<Background_Memberships>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface Background_MembershipsType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    endDate?: Moment;
    lastModifiedDate: Moment;
    organization: string;
    role?: string;
    startDate?: Moment;
    userId: string;
    userIdNav: UserType;
}
export interface Background_MembershipsTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    endDate: Moment;
    lastModifiedDate: Moment;
    organization: string;
    role: string;
    startDate: Moment;
    userId: string;
    userIdNav: UserType;
}
export declare namespace Background_Memberships {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Memberships>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_Memberships>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<Background_Memberships>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_Memberships>;
    /**
     * Static representation of the [[organization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION: StringField<Background_Memberships>;
    /**
     * Static representation of the [[role]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE: StringField<Background_Memberships>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<Background_Memberships>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_Memberships>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_Memberships, User>;
    /**
     * All fields of the Background_Memberships entity.
     */
    const _allFields: Array<BigNumberField<Background_Memberships> | DateField<Background_Memberships> | StringField<Background_Memberships> | OneToOneLink<Background_Memberships, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_Memberships>;
    /**
     * All key fields of the Background_Memberships entity.
     */
    const _keyFields: Array<Selectable<Background_Memberships>>;
    /**
     * Mapping of all key field names to the respective static field property Background_Memberships.
     */
    const _keys: {
        [keys: string]: Selectable<Background_Memberships>;
    };
}
//# sourceMappingURL=Background_Memberships.d.ts.map