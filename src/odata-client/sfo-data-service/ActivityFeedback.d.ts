import { ActivityFeedbackRequestBuilder } from './ActivityFeedbackRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ActivityFeedback" of service "SFOData".
 */
export declare class ActivityFeedback extends Entity implements ActivityFeedbackType {
    /**
     * Technical entity name for ActivityFeedback.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ActivityFeedback.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Activity_Activity ID.
     */
    activityActivityId: BigNumber;
    /**
     * Achievement.
     * Maximum length: 128.
     * @nullable
     */
    achievement?: string;
    /**
     * Activity Update ID.
     */
    activityFeedbackId: BigNumber;
    /**
     * Activity Update.
     * Maximum length: 4000.
     * @nullable
     */
    commentContent?: string;
    /**
     * Activity Update Provider.
     * Maximum length: 255.
     * @nullable
     */
    commenter?: string;
    /**
     * Activity Update Created By.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * Activity Update Created Date.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Red Flag.
     * Maximum length: 128.
     * @nullable
     */
    feedbackFlag?: string;
    /**
     * Activity Update Last Modified By.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Activity Update Last Modified Date.
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
     * reviewed.
     * @nullable
     */
    reviewed?: boolean;
    /**
     * snapshot.
     * @nullable
     */
    snapshot?: boolean;
    /**
     * One-to-one navigation property to the [[Achievement]] entity.
     */
    achievementNav: Achievement;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[FeedbackFlag]] entity.
     */
    feedbackFlagNav: FeedbackFlag;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `ActivityFeedback`.
     * @returns A builder that constructs instances of entity type `ActivityFeedback`.
     */
    static builder(): EntityBuilderType<ActivityFeedback, ActivityFeedbackTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ActivityFeedback` entity type.
     * @returns A `ActivityFeedback` request builder.
     */
    static requestBuilder(): ActivityFeedbackRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityFeedback`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ActivityFeedback`.
     */
    static customField(fieldName: string): CustomField<ActivityFeedback>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Achievement, AchievementType } from './Achievement';
import { User, UserType } from './User';
import { FeedbackFlag, FeedbackFlagType } from './FeedbackFlag';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface ActivityFeedbackType {
    activityActivityId: BigNumber;
    achievement?: string;
    activityFeedbackId: BigNumber;
    commentContent?: string;
    commenter?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    feedbackFlag?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    recordId?: string;
    reviewed?: boolean;
    snapshot?: boolean;
    achievementNav: AchievementType;
    createdByNav: UserType;
    feedbackFlagNav: FeedbackFlagType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface ActivityFeedbackTypeForceMandatory {
    activityActivityId: BigNumber;
    achievement: string;
    activityFeedbackId: BigNumber;
    commentContent: string;
    commenter: string;
    createdBy: string;
    createdDateTime: Moment;
    feedbackFlag: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    recordId: string;
    reviewed: boolean;
    snapshot: boolean;
    achievementNav: AchievementType;
    createdByNav: UserType;
    feedbackFlagNav: FeedbackFlagType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace ActivityFeedback {
    /**
     * Static representation of the [[activityActivityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_ACTIVITY_ID: BigNumberField<ActivityFeedback>;
    /**
     * Static representation of the [[achievement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT: StringField<ActivityFeedback>;
    /**
     * Static representation of the [[activityFeedbackId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_FEEDBACK_ID: BigNumberField<ActivityFeedback>;
    /**
     * Static representation of the [[commentContent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT_CONTENT: StringField<ActivityFeedback>;
    /**
     * Static representation of the [[commenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTER: StringField<ActivityFeedback>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<ActivityFeedback>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<ActivityFeedback>;
    /**
     * Static representation of the [[feedbackFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_FLAG: StringField<ActivityFeedback>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<ActivityFeedback>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<ActivityFeedback>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<ActivityFeedback>;
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECORD_ID: StringField<ActivityFeedback>;
    /**
     * Static representation of the [[reviewed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVIEWED: BooleanField<ActivityFeedback>;
    /**
     * Static representation of the [[snapshot]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SNAPSHOT: BooleanField<ActivityFeedback>;
    /**
     * Static representation of the one-to-one navigation property [[achievementNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT_NAV: OneToOneLink<ActivityFeedback, Achievement>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<ActivityFeedback, User>;
    /**
     * Static representation of the one-to-one navigation property [[feedbackFlagNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_FLAG_NAV: OneToOneLink<ActivityFeedback, FeedbackFlag>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<ActivityFeedback, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<ActivityFeedback, MdfEnumValue>;
    /**
     * All fields of the ActivityFeedback entity.
     */
    const _allFields: Array<BigNumberField<ActivityFeedback> | StringField<ActivityFeedback> | DateField<ActivityFeedback> | BooleanField<ActivityFeedback> | OneToOneLink<ActivityFeedback, Achievement> | OneToOneLink<ActivityFeedback, User> | OneToOneLink<ActivityFeedback, FeedbackFlag> | OneToOneLink<ActivityFeedback, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ActivityFeedback>;
    /**
     * All key fields of the ActivityFeedback entity.
     */
    const _keyFields: Array<Selectable<ActivityFeedback>>;
    /**
     * Mapping of all key field names to the respective static field property ActivityFeedback.
     */
    const _keys: {
        [keys: string]: Selectable<ActivityFeedback>;
    };
}
//# sourceMappingURL=ActivityFeedback.d.ts.map