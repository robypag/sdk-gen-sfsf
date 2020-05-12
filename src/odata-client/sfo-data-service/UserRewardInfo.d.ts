import { UserRewardInfoRequestBuilder } from './UserRewardInfoRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "UserRewardInfo" of service "SFOData".
 */
export declare class UserRewardInfo extends Entity implements UserRewardInfoType {
    /**
     * Technical entity name for UserRewardInfo.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserRewardInfo.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * availableAmount.
     * @nullable
     */
    availableAmount?: BigNumber;
    /**
     * currency.
     * @nullable
     */
    currency?: string;
    /**
     * userId.
     */
    userId: string;
    /**
     * Returns an entity builder to construct instances `UserRewardInfo`.
     * @returns A builder that constructs instances of entity type `UserRewardInfo`.
     */
    static builder(): EntityBuilderType<UserRewardInfo, UserRewardInfoTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `UserRewardInfo` entity type.
     * @returns A `UserRewardInfo` request builder.
     */
    static requestBuilder(): UserRewardInfoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserRewardInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserRewardInfo`.
     */
    static customField(fieldName: string): CustomField<UserRewardInfo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface UserRewardInfoType {
    availableAmount?: BigNumber;
    currency?: string;
    userId: string;
}
export interface UserRewardInfoTypeForceMandatory {
    availableAmount: BigNumber;
    currency: string;
    userId: string;
}
export declare namespace UserRewardInfo {
    /**
     * Static representation of the [[availableAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AVAILABLE_AMOUNT: BigNumberField<UserRewardInfo>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<UserRewardInfo>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<UserRewardInfo>;
    /**
     * All fields of the UserRewardInfo entity.
     */
    const _allFields: Array<BigNumberField<UserRewardInfo> | StringField<UserRewardInfo>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<UserRewardInfo>;
    /**
     * All key fields of the UserRewardInfo entity.
     */
    const _keyFields: Array<Selectable<UserRewardInfo>>;
    /**
     * Mapping of all key field names to the respective static field property UserRewardInfo.
     */
    const _keys: {
        [keys: string]: Selectable<UserRewardInfo>;
    };
}
//# sourceMappingURL=UserRewardInfo.d.ts.map