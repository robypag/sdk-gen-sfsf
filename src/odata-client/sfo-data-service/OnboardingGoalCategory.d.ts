import { OnboardingGoalCategoryRequestBuilder } from './OnboardingGoalCategoryRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "OnboardingGoalCategory" of service "SFOData".
 */
export declare class OnboardingGoalCategory extends Entity implements OnboardingGoalCategoryType {
    /**
     * Technical entity name for OnboardingGoalCategory.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingGoalCategory.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * OnboardingGoalActivity_activityId.
     */
    onboardingGoalActivityActivityId: BigNumber;
    /**
     * OnboardingNewHireActivitiesStep_processStepId.
     */
    onboardingNewHireActivitiesStepProcessStepId: BigNumber;
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
     * dueDaysAfterStart.
     * @nullable
     */
    dueDaysAfterStart?: BigNumber;
    /**
     * externalCode.
     */
    externalCode: BigNumber;
    /**
     * goalCategoryId.
     * Maximum length: 255.
     * @nullable
     */
    goalCategoryId?: string;
    /**
     * goalCategoryName.
     * Maximum length: 128.
     * @nullable
     */
    goalCategoryName?: string;
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
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[OnboardingGoal]] entity.
     */
    goals: OnboardingGoal[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `OnboardingGoalCategory`.
     * @returns A builder that constructs instances of entity type `OnboardingGoalCategory`.
     */
    static builder(): EntityBuilderType<OnboardingGoalCategory, OnboardingGoalCategoryTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingGoalCategory` entity type.
     * @returns A `OnboardingGoalCategory` request builder.
     */
    static requestBuilder(): OnboardingGoalCategoryRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingGoalCategory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingGoalCategory`.
     */
    static customField(fieldName: string): CustomField<OnboardingGoalCategory>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { OnboardingGoal, OnboardingGoalType } from './OnboardingGoal';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface OnboardingGoalCategoryType {
    onboardingGoalActivityActivityId: BigNumber;
    onboardingNewHireActivitiesStepProcessStepId: BigNumber;
    onboardingProcessOnboardingProcessId: BigNumber;
    createdBy?: string;
    createdDateTime?: Moment;
    dueDaysAfterStart?: BigNumber;
    externalCode: BigNumber;
    goalCategoryId?: string;
    goalCategoryName?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    createdByNav: UserType;
    goals: OnboardingGoalType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface OnboardingGoalCategoryTypeForceMandatory {
    onboardingGoalActivityActivityId: BigNumber;
    onboardingNewHireActivitiesStepProcessStepId: BigNumber;
    onboardingProcessOnboardingProcessId: BigNumber;
    createdBy: string;
    createdDateTime: Moment;
    dueDaysAfterStart: BigNumber;
    externalCode: BigNumber;
    goalCategoryId: string;
    goalCategoryName: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    createdByNav: UserType;
    goals: OnboardingGoalType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace OnboardingGoalCategory {
    /**
     * Static representation of the [[onboardingGoalActivityActivityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_GOAL_ACTIVITY_ACTIVITY_ID: BigNumberField<OnboardingGoalCategory>;
    /**
     * Static representation of the [[onboardingNewHireActivitiesStepProcessStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID: BigNumberField<OnboardingGoalCategory>;
    /**
     * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID: BigNumberField<OnboardingGoalCategory>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<OnboardingGoalCategory>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<OnboardingGoalCategory>;
    /**
     * Static representation of the [[dueDaysAfterStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUE_DAYS_AFTER_START: BigNumberField<OnboardingGoalCategory>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<OnboardingGoalCategory>;
    /**
     * Static representation of the [[goalCategoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_CATEGORY_ID: StringField<OnboardingGoalCategory>;
    /**
     * Static representation of the [[goalCategoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_CATEGORY_NAME: StringField<OnboardingGoalCategory>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<OnboardingGoalCategory>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<OnboardingGoalCategory>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<OnboardingGoalCategory>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<OnboardingGoalCategory, User>;
    /**
     * Static representation of the one-to-many navigation property [[goals]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOALS: Link<OnboardingGoalCategory, OnboardingGoal>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<OnboardingGoalCategory, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OnboardingGoalCategory, MdfEnumValue>;
    /**
     * All fields of the OnboardingGoalCategory entity.
     */
    const _allFields: Array<BigNumberField<OnboardingGoalCategory> | StringField<OnboardingGoalCategory> | DateField<OnboardingGoalCategory> | OneToOneLink<OnboardingGoalCategory, User> | Link<OnboardingGoalCategory, OnboardingGoal> | OneToOneLink<OnboardingGoalCategory, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<OnboardingGoalCategory>;
    /**
     * All key fields of the OnboardingGoalCategory entity.
     */
    const _keyFields: Array<Selectable<OnboardingGoalCategory>>;
    /**
     * Mapping of all key field names to the respective static field property OnboardingGoalCategory.
     */
    const _keys: {
        [keys: string]: Selectable<OnboardingGoalCategory>;
    };
}
//# sourceMappingURL=OnboardingGoalCategory.d.ts.map