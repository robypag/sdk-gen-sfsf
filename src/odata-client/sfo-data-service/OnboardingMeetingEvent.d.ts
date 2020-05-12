import { OnboardingMeetingEventRequestBuilder } from './OnboardingMeetingEventRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "OnboardingMeetingEvent" of service "SFOData".
 */
export declare class OnboardingMeetingEvent extends Entity implements OnboardingMeetingEventType {
    /**
     * Technical entity name for OnboardingMeetingEvent.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingMeetingEvent.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * OnboardingMeetingActivity_activityId.
     */
    onboardingMeetingActivityActivityId: BigNumber;
    /**
     * OnboardingNewHireActivitiesStep_processStepId.
     */
    onboardingNewHireActivitiesStepProcessStepId: BigNumber;
    /**
     * OnboardingProcess_onboardingProcessId.
     */
    onboardingProcessOnboardingProcessId: BigNumber;
    /**
     * agenda.
     * Maximum length: 1000.
     * @nullable
     */
    agenda?: string;
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
     * endDateTime.
     * @nullable
     */
    endDateTime?: Moment;
    /**
     * externalCode.
     * Maximum length: 128.
     */
    externalCode: string;
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
     * location.
     * Maximum length: 1000.
     * @nullable
     */
    location?: string;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * onboardingProcessMeetingTypeConfig.
     * Maximum length: 128.
     * @nullable
     */
    onboardingProcessMeetingTypeConfig?: string;
    /**
     * participantUserId1.
     * Maximum length: 100.
     * @nullable
     */
    participantUserId1?: string;
    /**
     * participantUserId2.
     * Maximum length: 100.
     * @nullable
     */
    participantUserId2?: string;
    /**
     * participantUserId3.
     * Maximum length: 100.
     * @nullable
     */
    participantUserId3?: string;
    /**
     * participantUserId4.
     * Maximum length: 100.
     * @nullable
     */
    participantUserId4?: string;
    /**
     * participantUserId5.
     * Maximum length: 100.
     * @nullable
     */
    participantUserId5?: string;
    /**
     * send.
     * @nullable
     */
    send?: boolean;
    /**
     * startDateTime.
     * @nullable
     */
    startDateTime?: Moment;
    /**
     * subject.
     * Maximum length: 1000.
     * @nullable
     */
    subject?: string;
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
     * One-to-one navigation property to the [[User]] entity.
     */
    participantUserId1Nav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    participantUserId2Nav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    participantUserId3Nav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    participantUserId4Nav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    participantUserId5Nav: User;
    /**
     * Returns an entity builder to construct instances `OnboardingMeetingEvent`.
     * @returns A builder that constructs instances of entity type `OnboardingMeetingEvent`.
     */
    static builder(): EntityBuilderType<OnboardingMeetingEvent, OnboardingMeetingEventTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingMeetingEvent` entity type.
     * @returns A `OnboardingMeetingEvent` request builder.
     */
    static requestBuilder(): OnboardingMeetingEventRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingMeetingEvent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingMeetingEvent`.
     */
    static customField(fieldName: string): CustomField<OnboardingMeetingEvent>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface OnboardingMeetingEventType {
    onboardingMeetingActivityActivityId: BigNumber;
    onboardingNewHireActivitiesStepProcessStepId: BigNumber;
    onboardingProcessOnboardingProcessId: BigNumber;
    agenda?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    endDateTime?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    location?: string;
    mdfSystemRecordStatus?: string;
    onboardingProcessMeetingTypeConfig?: string;
    participantUserId1?: string;
    participantUserId2?: string;
    participantUserId3?: string;
    participantUserId4?: string;
    participantUserId5?: string;
    send?: boolean;
    startDateTime?: Moment;
    subject?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    participantUserId1Nav: UserType;
    participantUserId2Nav: UserType;
    participantUserId3Nav: UserType;
    participantUserId4Nav: UserType;
    participantUserId5Nav: UserType;
}
export interface OnboardingMeetingEventTypeForceMandatory {
    onboardingMeetingActivityActivityId: BigNumber;
    onboardingNewHireActivitiesStepProcessStepId: BigNumber;
    onboardingProcessOnboardingProcessId: BigNumber;
    agenda: string;
    createdBy: string;
    createdDateTime: Moment;
    endDateTime: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    location: string;
    mdfSystemRecordStatus: string;
    onboardingProcessMeetingTypeConfig: string;
    participantUserId1: string;
    participantUserId2: string;
    participantUserId3: string;
    participantUserId4: string;
    participantUserId5: string;
    send: boolean;
    startDateTime: Moment;
    subject: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    participantUserId1Nav: UserType;
    participantUserId2Nav: UserType;
    participantUserId3Nav: UserType;
    participantUserId4Nav: UserType;
    participantUserId5Nav: UserType;
}
export declare namespace OnboardingMeetingEvent {
    /**
     * Static representation of the [[onboardingMeetingActivityActivityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_MEETING_ACTIVITY_ACTIVITY_ID: BigNumberField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[onboardingNewHireActivitiesStepProcessStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID: BigNumberField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID: BigNumberField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[agenda]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AGENDA: StringField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[endDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE_TIME: DateField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: StringField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[onboardingProcessMeetingTypeConfig]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_PROCESS_MEETING_TYPE_CONFIG: StringField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[participantUserId1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER_ID_1: StringField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[participantUserId2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER_ID_2: StringField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[participantUserId3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER_ID_3: StringField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[participantUserId4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER_ID_4: StringField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[participantUserId5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER_ID_5: StringField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[send]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEND: BooleanField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[startDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE_TIME: DateField<OnboardingMeetingEvent>;
    /**
     * Static representation of the [[subject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT: StringField<OnboardingMeetingEvent>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<OnboardingMeetingEvent, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<OnboardingMeetingEvent, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OnboardingMeetingEvent, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[participantUserId1Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER_ID_1_NAV: OneToOneLink<OnboardingMeetingEvent, User>;
    /**
     * Static representation of the one-to-one navigation property [[participantUserId2Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER_ID_2_NAV: OneToOneLink<OnboardingMeetingEvent, User>;
    /**
     * Static representation of the one-to-one navigation property [[participantUserId3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER_ID_3_NAV: OneToOneLink<OnboardingMeetingEvent, User>;
    /**
     * Static representation of the one-to-one navigation property [[participantUserId4Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER_ID_4_NAV: OneToOneLink<OnboardingMeetingEvent, User>;
    /**
     * Static representation of the one-to-one navigation property [[participantUserId5Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER_ID_5_NAV: OneToOneLink<OnboardingMeetingEvent, User>;
    /**
     * All fields of the OnboardingMeetingEvent entity.
     */
    const _allFields: Array<BigNumberField<OnboardingMeetingEvent> | StringField<OnboardingMeetingEvent> | DateField<OnboardingMeetingEvent> | BooleanField<OnboardingMeetingEvent> | OneToOneLink<OnboardingMeetingEvent, User> | OneToOneLink<OnboardingMeetingEvent, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<OnboardingMeetingEvent>;
    /**
     * All key fields of the OnboardingMeetingEvent entity.
     */
    const _keyFields: Array<Selectable<OnboardingMeetingEvent>>;
    /**
     * Mapping of all key field names to the respective static field property OnboardingMeetingEvent.
     */
    const _keys: {
        [keys: string]: Selectable<OnboardingMeetingEvent>;
    };
}
//# sourceMappingURL=OnboardingMeetingEvent.d.ts.map