import { OnboardingGoalRequestBuilder } from './OnboardingGoalRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "OnboardingGoal" of service "SFOData".
 */
export declare class OnboardingGoal extends Entity implements OnboardingGoalType {
    /**
     * Technical entity name for OnboardingGoal.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingGoal.
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
     * OnboardingGoalCategory_externalCode.
     */
    onboardingGoalCategoryExternalCode: BigNumber;
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
     * goalId.
     */
    goalId: BigNumber;
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
     * text.
     * Maximum length: 1000.
     * @nullable
     */
    text?: string;
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
     * Returns an entity builder to construct instances `OnboardingGoal`.
     * @returns A builder that constructs instances of entity type `OnboardingGoal`.
     */
    static builder(): EntityBuilderType<OnboardingGoal, OnboardingGoalTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingGoal` entity type.
     * @returns A `OnboardingGoal` request builder.
     */
    static requestBuilder(): OnboardingGoalRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingGoal`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingGoal`.
     */
    static customField(fieldName: string): CustomField<OnboardingGoal>;
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
export interface OnboardingGoalType {
    onboardingGoalActivityActivityId: BigNumber;
    onboardingGoalCategoryExternalCode: BigNumber;
    onboardingNewHireActivitiesStepProcessStepId: BigNumber;
    onboardingProcessOnboardingProcessId: BigNumber;
    createdBy?: string;
    createdDateTime?: Moment;
    goalId: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    text?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface OnboardingGoalTypeForceMandatory {
    onboardingGoalActivityActivityId: BigNumber;
    onboardingGoalCategoryExternalCode: BigNumber;
    onboardingNewHireActivitiesStepProcessStepId: BigNumber;
    onboardingProcessOnboardingProcessId: BigNumber;
    createdBy: string;
    createdDateTime: Moment;
    goalId: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    text: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace OnboardingGoal {
    /**
     * Static representation of the [[onboardingGoalActivityActivityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_GOAL_ACTIVITY_ACTIVITY_ID: BigNumberField<OnboardingGoal>;
    /**
     * Static representation of the [[onboardingGoalCategoryExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_GOAL_CATEGORY_EXTERNAL_CODE: BigNumberField<OnboardingGoal>;
    /**
     * Static representation of the [[onboardingNewHireActivitiesStepProcessStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID: BigNumberField<OnboardingGoal>;
    /**
     * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID: BigNumberField<OnboardingGoal>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<OnboardingGoal>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<OnboardingGoal>;
    /**
     * Static representation of the [[goalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_ID: BigNumberField<OnboardingGoal>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<OnboardingGoal>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<OnboardingGoal>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<OnboardingGoal>;
    /**
     * Static representation of the [[text]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEXT: StringField<OnboardingGoal>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<OnboardingGoal, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<OnboardingGoal, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OnboardingGoal, MdfEnumValue>;
    /**
     * All fields of the OnboardingGoal entity.
     */
    const _allFields: Array<BigNumberField<OnboardingGoal> | StringField<OnboardingGoal> | DateField<OnboardingGoal> | OneToOneLink<OnboardingGoal, User> | OneToOneLink<OnboardingGoal, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<OnboardingGoal>;
    /**
     * All key fields of the OnboardingGoal entity.
     */
    const _keyFields: Array<Selectable<OnboardingGoal>>;
    /**
     * Mapping of all key field names to the respective static field property OnboardingGoal.
     */
    const _keys: {
        [keys: string]: Selectable<OnboardingGoal>;
    };
}
//# sourceMappingURL=OnboardingGoal.d.ts.map