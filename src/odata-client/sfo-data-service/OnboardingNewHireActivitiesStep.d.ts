import { OnboardingNewHireActivitiesStepRequestBuilder } from './OnboardingNewHireActivitiesStepRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "OnboardingNewHireActivitiesStep" of service "SFOData".
 */
export declare class OnboardingNewHireActivitiesStep extends Entity implements OnboardingNewHireActivitiesStepType {
    /**
     * Technical entity name for OnboardingNewHireActivitiesStep.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingNewHireActivitiesStep.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * OnboardingProcess_onboardingProcessId.
     */
    onboardingProcessOnboardingProcessId: BigNumber;
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
     * processStepId.
     */
    processStepId: BigNumber;
    /**
     * processStepStatus.
     * Maximum length: 255.
     * @nullable
     */
    processStepStatus?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[OnboardingEquipmentActivity]] entity.
     */
    equipmentActivity: OnboardingEquipmentActivity;
    /**
     * One-to-one navigation property to the [[OnboardingGoalActivity]] entity.
     */
    goalActivity: OnboardingGoalActivity;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[OnboardingMeetingActivity]] entity.
     */
    meetingActivity: OnboardingMeetingActivity;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    processStepStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `OnboardingNewHireActivitiesStep`.
     * @returns A builder that constructs instances of entity type `OnboardingNewHireActivitiesStep`.
     */
    static builder(): EntityBuilderType<OnboardingNewHireActivitiesStep, OnboardingNewHireActivitiesStepTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingNewHireActivitiesStep` entity type.
     * @returns A `OnboardingNewHireActivitiesStep` request builder.
     */
    static requestBuilder(): OnboardingNewHireActivitiesStepRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingNewHireActivitiesStep`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingNewHireActivitiesStep`.
     */
    static customField(fieldName: string): CustomField<OnboardingNewHireActivitiesStep>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { OnboardingEquipmentActivity, OnboardingEquipmentActivityType } from './OnboardingEquipmentActivity';
import { OnboardingGoalActivity, OnboardingGoalActivityType } from './OnboardingGoalActivity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { OnboardingMeetingActivity, OnboardingMeetingActivityType } from './OnboardingMeetingActivity';
export interface OnboardingNewHireActivitiesStepType {
    onboardingProcessOnboardingProcessId: BigNumber;
    createdBy?: string;
    createdDateTime?: Moment;
    externalName?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    processStepId: BigNumber;
    processStepStatus?: string;
    createdByNav: UserType;
    equipmentActivity: OnboardingEquipmentActivityType;
    goalActivity: OnboardingGoalActivityType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    meetingActivity: OnboardingMeetingActivityType;
    processStepStatusNav: MdfEnumValueType;
}
export interface OnboardingNewHireActivitiesStepTypeForceMandatory {
    onboardingProcessOnboardingProcessId: BigNumber;
    createdBy: string;
    createdDateTime: Moment;
    externalName: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    processStepId: BigNumber;
    processStepStatus: string;
    createdByNav: UserType;
    equipmentActivity: OnboardingEquipmentActivityType;
    goalActivity: OnboardingGoalActivityType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    meetingActivity: OnboardingMeetingActivityType;
    processStepStatusNav: MdfEnumValueType;
}
export declare namespace OnboardingNewHireActivitiesStep {
    /**
     * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID: BigNumberField<OnboardingNewHireActivitiesStep>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<OnboardingNewHireActivitiesStep>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<OnboardingNewHireActivitiesStep>;
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME: StringField<OnboardingNewHireActivitiesStep>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<OnboardingNewHireActivitiesStep>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<OnboardingNewHireActivitiesStep>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<OnboardingNewHireActivitiesStep>;
    /**
     * Static representation of the [[processStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESS_STEP_ID: BigNumberField<OnboardingNewHireActivitiesStep>;
    /**
     * Static representation of the [[processStepStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESS_STEP_STATUS: StringField<OnboardingNewHireActivitiesStep>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<OnboardingNewHireActivitiesStep, User>;
    /**
     * Static representation of the one-to-one navigation property [[equipmentActivity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EQUIPMENT_ACTIVITY: OneToOneLink<OnboardingNewHireActivitiesStep, OnboardingEquipmentActivity>;
    /**
     * Static representation of the one-to-one navigation property [[goalActivity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_ACTIVITY: OneToOneLink<OnboardingNewHireActivitiesStep, OnboardingGoalActivity>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<OnboardingNewHireActivitiesStep, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OnboardingNewHireActivitiesStep, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[meetingActivity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MEETING_ACTIVITY: OneToOneLink<OnboardingNewHireActivitiesStep, OnboardingMeetingActivity>;
    /**
     * Static representation of the one-to-one navigation property [[processStepStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESS_STEP_STATUS_NAV: OneToOneLink<OnboardingNewHireActivitiesStep, MdfEnumValue>;
    /**
     * All fields of the OnboardingNewHireActivitiesStep entity.
     */
    const _allFields: Array<BigNumberField<OnboardingNewHireActivitiesStep> | StringField<OnboardingNewHireActivitiesStep> | DateField<OnboardingNewHireActivitiesStep> | OneToOneLink<OnboardingNewHireActivitiesStep, User> | OneToOneLink<OnboardingNewHireActivitiesStep, OnboardingEquipmentActivity> | OneToOneLink<OnboardingNewHireActivitiesStep, OnboardingGoalActivity> | OneToOneLink<OnboardingNewHireActivitiesStep, MdfEnumValue> | OneToOneLink<OnboardingNewHireActivitiesStep, OnboardingMeetingActivity>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<OnboardingNewHireActivitiesStep>;
    /**
     * All key fields of the OnboardingNewHireActivitiesStep entity.
     */
    const _keyFields: Array<Selectable<OnboardingNewHireActivitiesStep>>;
    /**
     * Mapping of all key field names to the respective static field property OnboardingNewHireActivitiesStep.
     */
    const _keys: {
        [keys: string]: Selectable<OnboardingNewHireActivitiesStep>;
    };
}
//# sourceMappingURL=OnboardingNewHireActivitiesStep.d.ts.map