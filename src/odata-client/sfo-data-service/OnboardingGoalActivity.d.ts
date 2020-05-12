import { OnboardingGoalActivityRequestBuilder } from './OnboardingGoalActivityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "OnboardingGoalActivity" of service "SFOData".
 */
export declare class OnboardingGoalActivity extends Entity implements OnboardingGoalActivityType {
    /**
     * Technical entity name for OnboardingGoalActivity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingGoalActivity.
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
     * goalActivityStatusSetManually.
     * @nullable
     */
    goalActivityStatusSetManually?: boolean;
    /**
     * goalsTransferStatus.
     * Maximum length: 255.
     * @nullable
     */
    goalsTransferStatus?: string;
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
     * One-to-many navigation property to the [[OnboardingGoalCategory]] entity.
     */
    goalCategories: OnboardingGoalCategory[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    goalsTransferStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `OnboardingGoalActivity`.
     * @returns A builder that constructs instances of entity type `OnboardingGoalActivity`.
     */
    static builder(): EntityBuilderType<OnboardingGoalActivity, OnboardingGoalActivityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingGoalActivity` entity type.
     * @returns A `OnboardingGoalActivity` request builder.
     */
    static requestBuilder(): OnboardingGoalActivityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingGoalActivity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingGoalActivity`.
     */
    static customField(fieldName: string): CustomField<OnboardingGoalActivity>;
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
import { OnboardingGoalCategory, OnboardingGoalCategoryType } from './OnboardingGoalCategory';
export interface OnboardingGoalActivityType {
    onboardingNewHireActivitiesStepProcessStepId: BigNumber;
    onboardingProcessOnboardingProcessId: BigNumber;
    activityId: BigNumber;
    activityStatus?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    eventTriggered?: boolean;
    externalName?: string;
    goalActivityStatusSetManually?: boolean;
    goalsTransferStatus?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    optional?: boolean;
    activityStatusNav: MdfEnumValueType;
    createdByNav: UserType;
    goalCategories: OnboardingGoalCategoryType[];
    goalsTransferStatusNav: MdfEnumValueType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface OnboardingGoalActivityTypeForceMandatory {
    onboardingNewHireActivitiesStepProcessStepId: BigNumber;
    onboardingProcessOnboardingProcessId: BigNumber;
    activityId: BigNumber;
    activityStatus: string;
    createdBy: string;
    createdDateTime: Moment;
    eventTriggered: boolean;
    externalName: string;
    goalActivityStatusSetManually: boolean;
    goalsTransferStatus: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    optional: boolean;
    activityStatusNav: MdfEnumValueType;
    createdByNav: UserType;
    goalCategories: OnboardingGoalCategoryType[];
    goalsTransferStatusNav: MdfEnumValueType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace OnboardingGoalActivity {
    /**
     * Static representation of the [[onboardingNewHireActivitiesStepProcessStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID: BigNumberField<OnboardingGoalActivity>;
    /**
     * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID: BigNumberField<OnboardingGoalActivity>;
    /**
     * Static representation of the [[activityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_ID: BigNumberField<OnboardingGoalActivity>;
    /**
     * Static representation of the [[activityStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_STATUS: StringField<OnboardingGoalActivity>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<OnboardingGoalActivity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<OnboardingGoalActivity>;
    /**
     * Static representation of the [[eventTriggered]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_TRIGGERED: BooleanField<OnboardingGoalActivity>;
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME: StringField<OnboardingGoalActivity>;
    /**
     * Static representation of the [[goalActivityStatusSetManually]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_ACTIVITY_STATUS_SET_MANUALLY: BooleanField<OnboardingGoalActivity>;
    /**
     * Static representation of the [[goalsTransferStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOALS_TRANSFER_STATUS: StringField<OnboardingGoalActivity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<OnboardingGoalActivity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<OnboardingGoalActivity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<OnboardingGoalActivity>;
    /**
     * Static representation of the [[optional]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTIONAL: BooleanField<OnboardingGoalActivity>;
    /**
     * Static representation of the one-to-one navigation property [[activityStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_STATUS_NAV: OneToOneLink<OnboardingGoalActivity, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<OnboardingGoalActivity, User>;
    /**
     * Static representation of the one-to-many navigation property [[goalCategories]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_CATEGORIES: Link<OnboardingGoalActivity, OnboardingGoalCategory>;
    /**
     * Static representation of the one-to-one navigation property [[goalsTransferStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOALS_TRANSFER_STATUS_NAV: OneToOneLink<OnboardingGoalActivity, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<OnboardingGoalActivity, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OnboardingGoalActivity, MdfEnumValue>;
    /**
     * All fields of the OnboardingGoalActivity entity.
     */
    const _allFields: Array<BigNumberField<OnboardingGoalActivity> | StringField<OnboardingGoalActivity> | DateField<OnboardingGoalActivity> | BooleanField<OnboardingGoalActivity> | OneToOneLink<OnboardingGoalActivity, MdfEnumValue> | OneToOneLink<OnboardingGoalActivity, User> | Link<OnboardingGoalActivity, OnboardingGoalCategory>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<OnboardingGoalActivity>;
    /**
     * All key fields of the OnboardingGoalActivity entity.
     */
    const _keyFields: Array<Selectable<OnboardingGoalActivity>>;
    /**
     * Mapping of all key field names to the respective static field property OnboardingGoalActivity.
     */
    const _keys: {
        [keys: string]: Selectable<OnboardingGoalActivity>;
    };
}
//# sourceMappingURL=OnboardingGoalActivity.d.ts.map