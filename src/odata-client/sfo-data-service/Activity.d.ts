import { ActivityRequestBuilder } from './ActivityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Activity" of service "SFOData".
 */
export declare class Activity extends Entity implements ActivityType {
    /**
     * Technical entity name for Activity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Activity.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Activity ID.
     */
    activityId: BigNumber;
    /**
     * Activity Name.
     * Maximum length: 4000.
     * @nullable
     */
    activityName?: string;
    /**
     * activityPriority.
     * Maximum length: 128.
     * @nullable
     */
    activityPriority?: string;
    /**
     * activityState.
     * Maximum length: 128.
     * @nullable
     */
    activityState?: string;
    /**
     * Activity Status ID.
     * Maximum length: 128.
     * @nullable
     */
    activityStatus?: string;
    /**
     * Activity Created By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Activity Created Date.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Activity Last Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Activity Last Modified Date.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Record Status.
     * Maximum length: 128.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * mdfSystemRecordId.
     * Maximum length: 255.
     * @nullable
     */
    recordId?: string;
    /**
     * snapshot.
     * @nullable
     */
    snapshot?: boolean;
    /**
     * Activity Owner ID.
     * Maximum length: 100.
     * @nullable
     */
    subjectUserId?: string;
    /**
     * One-to-many navigation property to the [[Achievement]] entity.
     */
    achievements: Achievement[];
    /**
     * One-to-one navigation property to the [[ActivityStatus]] entity.
     */
    activityStatusNav: ActivityStatus;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[DevGoalDetail]] entity.
     */
    devGoalDetailList: DevGoalDetail[];
    /**
     * One-to-many navigation property to the [[ActivityFeedback]] entity.
     */
    feedbacks: ActivityFeedback[];
    /**
     * One-to-many navigation property to the [[GoalDetail]] entity.
     */
    goalDetailList: GoalDetail[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    subjectUserIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `Activity`.
     * @returns A builder that constructs instances of entity type `Activity`.
     */
    static builder(): EntityBuilderType<Activity, ActivityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Activity` entity type.
     * @returns A `Activity` request builder.
     */
    static requestBuilder(): ActivityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Activity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Activity`.
     */
    static customField(fieldName: string): CustomField<Activity>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Achievement, AchievementType } from './Achievement';
import { ActivityStatus, ActivityStatusType } from './ActivityStatus';
import { User, UserType } from './User';
import { DevGoalDetail, DevGoalDetailType } from './DevGoalDetail';
import { ActivityFeedback, ActivityFeedbackType } from './ActivityFeedback';
import { GoalDetail, GoalDetailType } from './GoalDetail';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface ActivityType {
    activityId: BigNumber;
    activityName?: string;
    activityPriority?: string;
    activityState?: string;
    activityStatus?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    recordId?: string;
    snapshot?: boolean;
    subjectUserId?: string;
    achievements: AchievementType[];
    activityStatusNav: ActivityStatusType;
    createdByNav: UserType;
    devGoalDetailList: DevGoalDetailType[];
    feedbacks: ActivityFeedbackType[];
    goalDetailList: GoalDetailType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    subjectUserIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface ActivityTypeForceMandatory {
    activityId: BigNumber;
    activityName: string;
    activityPriority: string;
    activityState: string;
    activityStatus: string;
    createdBy: string;
    createdDateTime: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    recordId: string;
    snapshot: boolean;
    subjectUserId: string;
    achievements: AchievementType[];
    activityStatusNav: ActivityStatusType;
    createdByNav: UserType;
    devGoalDetailList: DevGoalDetailType[];
    feedbacks: ActivityFeedbackType[];
    goalDetailList: GoalDetailType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    subjectUserIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace Activity {
    /**
     * Static representation of the [[activityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_ID: BigNumberField<Activity>;
    /**
     * Static representation of the [[activityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_NAME: StringField<Activity>;
    /**
     * Static representation of the [[activityPriority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_PRIORITY: StringField<Activity>;
    /**
     * Static representation of the [[activityState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_STATE: StringField<Activity>;
    /**
     * Static representation of the [[activityStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_STATUS: StringField<Activity>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<Activity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<Activity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<Activity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<Activity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<Activity>;
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECORD_ID: StringField<Activity>;
    /**
     * Static representation of the [[snapshot]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SNAPSHOT: BooleanField<Activity>;
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_USER_ID: StringField<Activity>;
    /**
     * Static representation of the one-to-many navigation property [[achievements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENTS: Link<Activity, Achievement>;
    /**
     * Static representation of the one-to-one navigation property [[activityStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_STATUS_NAV: OneToOneLink<Activity, ActivityStatus>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<Activity, User>;
    /**
     * Static representation of the one-to-many navigation property [[devGoalDetailList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEV_GOAL_DETAIL_LIST: Link<Activity, DevGoalDetail>;
    /**
     * Static representation of the one-to-many navigation property [[feedbacks]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACKS: Link<Activity, ActivityFeedback>;
    /**
     * Static representation of the one-to-many navigation property [[goalDetailList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_DETAIL_LIST: Link<Activity, GoalDetail>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<Activity, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<Activity, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[subjectUserIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_USER_ID_NAV: OneToOneLink<Activity, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<Activity, WfRequest>;
    /**
     * All fields of the Activity entity.
     */
    const _allFields: Array<BigNumberField<Activity> | StringField<Activity> | DateField<Activity> | BooleanField<Activity> | Link<Activity, Achievement> | OneToOneLink<Activity, ActivityStatus> | OneToOneLink<Activity, User> | Link<Activity, DevGoalDetail> | Link<Activity, ActivityFeedback> | Link<Activity, GoalDetail> | OneToOneLink<Activity, MdfEnumValue> | Link<Activity, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Activity>;
    /**
     * All key fields of the Activity entity.
     */
    const _keyFields: Array<Selectable<Activity>>;
    /**
     * Mapping of all key field names to the respective static field property Activity.
     */
    const _keys: {
        [keys: string]: Selectable<Activity>;
    };
}
//# sourceMappingURL=Activity.d.ts.map