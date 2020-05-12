import { OnboardingEquipmentActivityRequestBuilder } from './OnboardingEquipmentActivityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "OnboardingEquipmentActivity" of service "SFOData".
 */
export declare class OnboardingEquipmentActivity extends Entity implements OnboardingEquipmentActivityType {
    /**
     * Technical entity name for OnboardingEquipmentActivity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingEquipmentActivity.
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
     * One-to-many navigation property to the [[OnboardingEquipment]] entity.
     */
    equipment: OnboardingEquipment[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `OnboardingEquipmentActivity`.
     * @returns A builder that constructs instances of entity type `OnboardingEquipmentActivity`.
     */
    static builder(): EntityBuilderType<OnboardingEquipmentActivity, OnboardingEquipmentActivityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingEquipmentActivity` entity type.
     * @returns A `OnboardingEquipmentActivity` request builder.
     */
    static requestBuilder(): OnboardingEquipmentActivityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingEquipmentActivity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingEquipmentActivity`.
     */
    static customField(fieldName: string): CustomField<OnboardingEquipmentActivity>;
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
import { OnboardingEquipment, OnboardingEquipmentType } from './OnboardingEquipment';
export interface OnboardingEquipmentActivityType {
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
    equipment: OnboardingEquipmentType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface OnboardingEquipmentActivityTypeForceMandatory {
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
    equipment: OnboardingEquipmentType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace OnboardingEquipmentActivity {
    /**
     * Static representation of the [[onboardingNewHireActivitiesStepProcessStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID: BigNumberField<OnboardingEquipmentActivity>;
    /**
     * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID: BigNumberField<OnboardingEquipmentActivity>;
    /**
     * Static representation of the [[activityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_ID: BigNumberField<OnboardingEquipmentActivity>;
    /**
     * Static representation of the [[activityStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_STATUS: StringField<OnboardingEquipmentActivity>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<OnboardingEquipmentActivity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<OnboardingEquipmentActivity>;
    /**
     * Static representation of the [[eventTriggered]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_TRIGGERED: BooleanField<OnboardingEquipmentActivity>;
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME: StringField<OnboardingEquipmentActivity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<OnboardingEquipmentActivity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<OnboardingEquipmentActivity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<OnboardingEquipmentActivity>;
    /**
     * Static representation of the [[optional]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTIONAL: BooleanField<OnboardingEquipmentActivity>;
    /**
     * Static representation of the one-to-one navigation property [[activityStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_STATUS_NAV: OneToOneLink<OnboardingEquipmentActivity, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<OnboardingEquipmentActivity, User>;
    /**
     * Static representation of the one-to-many navigation property [[equipment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EQUIPMENT: Link<OnboardingEquipmentActivity, OnboardingEquipment>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<OnboardingEquipmentActivity, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OnboardingEquipmentActivity, MdfEnumValue>;
    /**
     * All fields of the OnboardingEquipmentActivity entity.
     */
    const _allFields: Array<BigNumberField<OnboardingEquipmentActivity> | StringField<OnboardingEquipmentActivity> | DateField<OnboardingEquipmentActivity> | BooleanField<OnboardingEquipmentActivity> | OneToOneLink<OnboardingEquipmentActivity, MdfEnumValue> | OneToOneLink<OnboardingEquipmentActivity, User> | Link<OnboardingEquipmentActivity, OnboardingEquipment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<OnboardingEquipmentActivity>;
    /**
     * All key fields of the OnboardingEquipmentActivity entity.
     */
    const _keyFields: Array<Selectable<OnboardingEquipmentActivity>>;
    /**
     * Mapping of all key field names to the respective static field property OnboardingEquipmentActivity.
     */
    const _keys: {
        [keys: string]: Selectable<OnboardingEquipmentActivity>;
    };
}
//# sourceMappingURL=OnboardingEquipmentActivity.d.ts.map