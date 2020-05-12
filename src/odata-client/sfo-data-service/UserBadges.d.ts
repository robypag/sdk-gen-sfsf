import { UserBadgesRequestBuilder } from './UserBadgesRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BinaryField, CustomField, DateField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "UserBadges" of service "SFOData".
 */
export declare class UserBadges extends Entity implements UserBadgesType {
    /**
     * Technical entity name for UserBadges.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserBadges.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * badgeCreatorName.
     * @nullable
     */
    badgeCreatorName?: string;
    /**
     * badgeId.
     * @nullable
     */
    badgeId?: number;
    /**
     * badgeInstanceId.
     */
    badgeInstanceId: number;
    /**
     * badgeTitle.
     * @nullable
     */
    badgeTitle?: string;
    /**
     * comment.
     * @nullable
     */
    comment?: string;
    /**
     * creatorUserID.
     * @nullable
     */
    creatorUserId?: string;
    /**
     * lastModified.
     * @nullable
     */
    lastModified?: Moment;
    /**
     * photo.
     * @nullable
     */
    photo?: string;
    /**
     * userId.
     */
    userId: string;
    /**
     * Returns an entity builder to construct instances `UserBadges`.
     * @returns A builder that constructs instances of entity type `UserBadges`.
     */
    static builder(): EntityBuilderType<UserBadges, UserBadgesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `UserBadges` entity type.
     * @returns A `UserBadges` request builder.
     */
    static requestBuilder(): UserBadgesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserBadges`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserBadges`.
     */
    static customField(fieldName: string): CustomField<UserBadges>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface UserBadgesType {
    badgeCreatorName?: string;
    badgeId?: number;
    badgeInstanceId: number;
    badgeTitle?: string;
    comment?: string;
    creatorUserId?: string;
    lastModified?: Moment;
    photo?: string;
    userId: string;
}
export interface UserBadgesTypeForceMandatory {
    badgeCreatorName: string;
    badgeId: number;
    badgeInstanceId: number;
    badgeTitle: string;
    comment: string;
    creatorUserId: string;
    lastModified: Moment;
    photo: string;
    userId: string;
}
export declare namespace UserBadges {
    /**
     * Static representation of the [[badgeCreatorName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BADGE_CREATOR_NAME: StringField<UserBadges>;
    /**
     * Static representation of the [[badgeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BADGE_ID: NumberField<UserBadges>;
    /**
     * Static representation of the [[badgeInstanceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BADGE_INSTANCE_ID: NumberField<UserBadges>;
    /**
     * Static representation of the [[badgeTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BADGE_TITLE: StringField<UserBadges>;
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT: StringField<UserBadges>;
    /**
     * Static representation of the [[creatorUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATOR_USER_ID: StringField<UserBadges>;
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED: DateField<UserBadges>;
    /**
     * Static representation of the [[photo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHOTO: BinaryField<UserBadges>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<UserBadges>;
    /**
     * All fields of the UserBadges entity.
     */
    const _allFields: Array<StringField<UserBadges> | NumberField<UserBadges> | DateField<UserBadges> | BinaryField<UserBadges>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<UserBadges>;
    /**
     * All key fields of the UserBadges entity.
     */
    const _keyFields: Array<Selectable<UserBadges>>;
    /**
     * Mapping of all key field names to the respective static field property UserBadges.
     */
    const _keys: {
        [keys: string]: Selectable<UserBadges>;
    };
}
//# sourceMappingURL=UserBadges.d.ts.map