import { OnboardingMeetingActivityRequestBuilder } from './OnboardingMeetingActivityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "OnboardingMeetingActivity" of service "SFOData".
 */
export declare class OnboardingMeetingActivity extends Entity implements OnboardingMeetingActivityType {
    /**
     * Technical entity name for OnboardingMeetingActivity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingMeetingActivity.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * OnboardingNewHireActivitiesStep_processStepId.
     */
    onboardingNewHireActivitiesStepProcessStepId: BigNumber;
    /**
     * OnboardingProcess_onboardingProcessId.
     */
    onboardingProcessOnboardingProcessId: BigNumber;
    /**
     * activityId.
     */
    activityId: BigNumber;
    /**
     * activityStatus.
     * Maximum length: 255.
     * @nullable
     */
    activityStatus?: string;
    /**
     * Created By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created On.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * eventTriggered.
     * @nullable
     */
    eventTriggered?: boolean;
    /**
     * externalName.
     * Maximum length: 128.
     * @nullable
     */
    externalName?: string;
    /**
     * Last Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * optional.
     * @nullable
     */
    optional?: boolean;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    activityStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[OnboardingMeetingEvent]] entity.
     */
    meetingEvent: OnboardingMeetingEvent[];
    /**
     * Returns an entity builder to construct instances `OnboardingMeetingActivity`.
     * @returns A builder that constructs instances of entity type `OnboardingMeetingActivity`.
     */
    static builder(): EntityBuilderType<OnboardingMeetingActivity, OnboardingMeetingActivityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingMeetingActivity` entity type.
     * @returns A `OnboardingMeetingActivity` request builder.
     */
    static requestBuilder(): OnboardingMeetingActivityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingMeetingActivity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingMeetingActivity`.
     */
    static customField(fieldName: string): CustomField<OnboardingMeetingActivity>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { User, UserType } from './User';
import { OnboardingMeetingEvent, OnboardingMeetingEventType } from './OnboardingMeetingEvent';
export interface OnboardingMeetingActivityType {
    onboardingNewHireActivitiesStepProcessStepId: BigNumber;
    onboardingProcessOnboardingProcessId: BigNumber;
    activityId: BigNumber;
    activityStatus?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    eventTriggered?: boolean;
    externalName?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    optional?: boolean;
    activityStatusNav: MdfEnumValueType;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    meetingEvent: OnboardingMeetingEventType[];
}
export interface OnboardingMeetingActivityTypeForceMandatory {
    onboardingNewHireActivitiesStepProcessStepId: BigNumber;
    onboardingProcessOnboardingProcessId: BigNumber;
    activityId: BigNumber;
    activityStatus: string;
    createdBy: string;
    createdDateTime: Moment;
    eventTriggered: boolean;
    externalName: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    optional: boolean;
    activityStatusNav: MdfEnumValueType;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    meetingEvent: OnboardingMeetingEventType[];
}
export declare namespace OnboardingMeetingActivity {
    /**
     * Static representation of the [[onboardingNewHireActivitiesStepProcessStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID: BigNumberField<OnboardingMeetingActivity>;
    /**
     * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID: BigNumberField<OnboardingMeetingActivity>;
    /**
     * Static representation of the [[activityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_ID: BigNumberField<OnboardingMeetingActivity>;
    /**
     * Static representation of the [[activityStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_STATUS: StringField<OnboardingMeetingActivity>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<OnboardingMeetingActivity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<OnboardingMeetingActivity>;
    /**
     * Static representation of the [[eventTriggered]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_TRIGGERED: BooleanField<OnboardingMeetingActivity>;
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME: StringField<OnboardingMeetingActivity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<OnboardingMeetingActivity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<OnboardingMeetingActivity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<OnboardingMeetingActivity>;
    /**
     * Static representation of the [[optional]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTIONAL: BooleanField<OnboardingMeetingActivity>;
    /**
     * Static representation of the one-to-one navigation property [[activityStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_STATUS_NAV: OneToOneLink<OnboardingMeetingActivity, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<OnboardingMeetingActivity, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<OnboardingMeetingActivity, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OnboardingMeetingActivity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[meetingEvent]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MEETING_EVENT: Link<OnboardingMeetingActivity, OnboardingMeetingEvent>;
    /**
     * All fields of the OnboardingMeetingActivity entity.
     */
    const _allFields: Array<BigNumberField<OnboardingMeetingActivity> | StringField<OnboardingMeetingActivity> | DateField<OnboardingMeetingActivity> | BooleanField<OnboardingMeetingActivity> | OneToOneLink<OnboardingMeetingActivity, MdfEnumValue> | OneToOneLink<OnboardingMeetingActivity, User> | Link<OnboardingMeetingActivity, OnboardingMeetingEvent>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<OnboardingMeetingActivity>;
    /**
     * All key fields of the OnboardingMeetingActivity entity.
     */
    const _keyFields: Array<Selectable<OnboardingMeetingActivity>>;
    /**
     * Mapping of all key field names to the respective static field property OnboardingMeetingActivity.
     */
    const _keys: {
        [keys: string]: Selectable<OnboardingMeetingActivity>;
    };
}
//# sourceMappingURL=OnboardingMeetingActivity.d.ts.map