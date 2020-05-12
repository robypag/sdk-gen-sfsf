import { GoalAchievementsListRequestBuilder } from './GoalAchievementsListRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "GoalAchievementsList" of service "SFOData".
 */
export declare class GoalAchievementsList extends Entity implements GoalAchievementsListType {
    /**
     * Technical entity name for GoalAchievementsList.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GoalAchievementsList.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * achievementCreatedBy.
     */
    achievementCreatedBy: string;
    /**
     * achievementCreatedDate.
     */
    achievementCreatedDate: Moment;
    /**
     * achievementDate.
     */
    achievementDate: Moment;
    /**
     * achievementId.
     */
    achievementId: string;
    /**
     * achievementLastModifiedBy.
     */
    achievementLastModifiedBy: string;
    /**
     * achievementLastModifiedDate.
     */
    achievementLastModifiedDate: Moment;
    /**
     * achievementName.
     */
    achievementName: string;
    /**
     * achievementParentExternalId.
     */
    achievementParentExternalId: BigNumber;
    /**
     * achievementParentType.
     */
    achievementParentType: string;
    /**
     * goalId.
     */
    goalId: string;
    /**
     * subjectUserId.
     */
    subjectUserId: string;
    /**
     * Returns an entity builder to construct instances `GoalAchievementsList`.
     * @returns A builder that constructs instances of entity type `GoalAchievementsList`.
     */
    static builder(): EntityBuilderType<GoalAchievementsList, GoalAchievementsListTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `GoalAchievementsList` entity type.
     * @returns A `GoalAchievementsList` request builder.
     */
    static requestBuilder(): GoalAchievementsListRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalAchievementsList`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GoalAchievementsList`.
     */
    static customField(fieldName: string): CustomField<GoalAchievementsList>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface GoalAchievementsListType {
    achievementCreatedBy: string;
    achievementCreatedDate: Moment;
    achievementDate: Moment;
    achievementId: string;
    achievementLastModifiedBy: string;
    achievementLastModifiedDate: Moment;
    achievementName: string;
    achievementParentExternalId: BigNumber;
    achievementParentType: string;
    goalId: string;
    subjectUserId: string;
}
export interface GoalAchievementsListTypeForceMandatory {
    achievementCreatedBy: string;
    achievementCreatedDate: Moment;
    achievementDate: Moment;
    achievementId: string;
    achievementLastModifiedBy: string;
    achievementLastModifiedDate: Moment;
    achievementName: string;
    achievementParentExternalId: BigNumber;
    achievementParentType: string;
    goalId: string;
    subjectUserId: string;
}
export declare namespace GoalAchievementsList {
    /**
     * Static representation of the [[achievementCreatedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT_CREATED_BY: StringField<GoalAchievementsList>;
    /**
     * Static representation of the [[achievementCreatedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT_CREATED_DATE: DateField<GoalAchievementsList>;
    /**
     * Static representation of the [[achievementDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT_DATE: DateField<GoalAchievementsList>;
    /**
     * Static representation of the [[achievementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT_ID: StringField<GoalAchievementsList>;
    /**
     * Static representation of the [[achievementLastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT_LAST_MODIFIED_BY: StringField<GoalAchievementsList>;
    /**
     * Static representation of the [[achievementLastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT_LAST_MODIFIED_DATE: DateField<GoalAchievementsList>;
    /**
     * Static representation of the [[achievementName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT_NAME: StringField<GoalAchievementsList>;
    /**
     * Static representation of the [[achievementParentExternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT_PARENT_EXTERNAL_ID: BigNumberField<GoalAchievementsList>;
    /**
     * Static representation of the [[achievementParentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT_PARENT_TYPE: StringField<GoalAchievementsList>;
    /**
     * Static representation of the [[goalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_ID: StringField<GoalAchievementsList>;
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_USER_ID: StringField<GoalAchievementsList>;
    /**
     * All fields of the GoalAchievementsList entity.
     */
    const _allFields: Array<StringField<GoalAchievementsList> | DateField<GoalAchievementsList> | BigNumberField<GoalAchievementsList>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<GoalAchievementsList>;
    /**
     * All key fields of the GoalAchievementsList entity.
     */
    const _keyFields: Array<Selectable<GoalAchievementsList>>;
    /**
     * Mapping of all key field names to the respective static field property GoalAchievementsList.
     */
    const _keys: {
        [keys: string]: Selectable<GoalAchievementsList>;
    };
}
//# sourceMappingURL=GoalAchievementsList.d.ts.map