import { DevGoalAchievementsRequestBuilder } from './DevGoalAchievementsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DevGoalAchievements" of service "SFOData".
 */
export declare class DevGoalAchievements extends Entity implements DevGoalAchievementsType {
    /**
     * Technical entity name for DevGoalAchievements.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DevGoalAchievements.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * goalId.
     */
    goalId: string;
    /**
     * subjectUserId.
     */
    subjectUserId: string;
    /**
     * One-to-many navigation property to the [[DevGoalAchievementsList]] entity.
     */
    achievementList: DevGoalAchievementsList[];
    /**
     * Returns an entity builder to construct instances `DevGoalAchievements`.
     * @returns A builder that constructs instances of entity type `DevGoalAchievements`.
     */
    static builder(): EntityBuilderType<DevGoalAchievements, DevGoalAchievementsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DevGoalAchievements` entity type.
     * @returns A `DevGoalAchievements` request builder.
     */
    static requestBuilder(): DevGoalAchievementsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalAchievements`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DevGoalAchievements`.
     */
    static customField(fieldName: string): CustomField<DevGoalAchievements>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { DevGoalAchievementsList, DevGoalAchievementsListType } from './DevGoalAchievementsList';
export interface DevGoalAchievementsType {
    goalId: string;
    subjectUserId: string;
    achievementList: DevGoalAchievementsListType[];
}
export interface DevGoalAchievementsTypeForceMandatory {
    goalId: string;
    subjectUserId: string;
    achievementList: DevGoalAchievementsListType[];
}
export declare namespace DevGoalAchievements {
    /**
     * Static representation of the [[goalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_ID: StringField<DevGoalAchievements>;
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_USER_ID: StringField<DevGoalAchievements>;
    /**
     * Static representation of the one-to-many navigation property [[achievementList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT_LIST: Link<DevGoalAchievements, DevGoalAchievementsList>;
    /**
     * All fields of the DevGoalAchievements entity.
     */
    const _allFields: Array<StringField<DevGoalAchievements> | Link<DevGoalAchievements, DevGoalAchievementsList>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DevGoalAchievements>;
    /**
     * All key fields of the DevGoalAchievements entity.
     */
    const _keyFields: Array<Selectable<DevGoalAchievements>>;
    /**
     * Mapping of all key field names to the respective static field property DevGoalAchievements.
     */
    const _keys: {
        [keys: string]: Selectable<DevGoalAchievements>;
    };
}
//# sourceMappingURL=DevGoalAchievements.d.ts.map