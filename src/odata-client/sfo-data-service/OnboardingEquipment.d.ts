import { OnboardingEquipmentRequestBuilder } from './OnboardingEquipmentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "OnboardingEquipment" of service "SFOData".
 */
export declare class OnboardingEquipment extends Entity implements OnboardingEquipmentType {
    /**
     * Technical entity name for OnboardingEquipment.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingEquipment.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * OnboardingEquipmentActivity_activityId.
     */
    onboardingEquipmentActivityActivityId: BigNumber;
    /**
     * OnboardingNewHireActivitiesStep_processStepId.
     */
    onboardingNewHireActivitiesStepProcessStepId: BigNumber;
    /**
     * OnboardingProcess_onboardingProcessId.
     */
    onboardingProcessOnboardingProcessId: BigNumber;
    /**
     * comment.
     * Maximum length: 1000.
     * @nullable
     */
    comment?: string;
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
     * equipmentId.
     * Maximum length: 128.
     */
    equipmentId: string;
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
     * type.
     * Maximum length: 128.
     * @nullable
     */
    type?: string;
    /**
     * value.
     * Maximum length: 128.
     * @nullable
     */
    value?: string;
    /**
     * workflow.
     * Maximum length: 128.
     * @nullable
     */
    workflow?: string;
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
     * One-to-one navigation property to the [[OnboardingEquipmentType_1]] entity.
     */
    typeNav: OnboardingEquipmentType_1;
    /**
     * One-to-one navigation property to the [[OnboardingEquipmentTypeValue]] entity.
     */
    valueNav: OnboardingEquipmentTypeValue;
    /**
     * Returns an entity builder to construct instances `OnboardingEquipment`.
     * @returns A builder that constructs instances of entity type `OnboardingEquipment`.
     */
    static builder(): EntityBuilderType<OnboardingEquipment, OnboardingEquipmentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingEquipment` entity type.
     * @returns A `OnboardingEquipment` request builder.
     */
    static requestBuilder(): OnboardingEquipmentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingEquipment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingEquipment`.
     */
    static customField(fieldName: string): CustomField<OnboardingEquipment>;
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
import { OnboardingEquipmentType_1, OnboardingEquipmentType_1Type } from './OnboardingEquipmentType_1';
import { OnboardingEquipmentTypeValue, OnboardingEquipmentTypeValueType } from './OnboardingEquipmentTypeValue';
export interface OnboardingEquipmentType {
    onboardingEquipmentActivityActivityId: BigNumber;
    onboardingNewHireActivitiesStepProcessStepId: BigNumber;
    onboardingProcessOnboardingProcessId: BigNumber;
    comment?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    equipmentId: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    type?: string;
    value?: string;
    workflow?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    typeNav: OnboardingEquipmentType_1Type;
    valueNav: OnboardingEquipmentTypeValueType;
}
export interface OnboardingEquipmentTypeForceMandatory {
    onboardingEquipmentActivityActivityId: BigNumber;
    onboardingNewHireActivitiesStepProcessStepId: BigNumber;
    onboardingProcessOnboardingProcessId: BigNumber;
    comment: string;
    createdBy: string;
    createdDateTime: Moment;
    equipmentId: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    type: string;
    value: string;
    workflow: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    typeNav: OnboardingEquipmentType_1Type;
    valueNav: OnboardingEquipmentTypeValueType;
}
export declare namespace OnboardingEquipment {
    /**
     * Static representation of the [[onboardingEquipmentActivityActivityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_EQUIPMENT_ACTIVITY_ACTIVITY_ID: BigNumberField<OnboardingEquipment>;
    /**
     * Static representation of the [[onboardingNewHireActivitiesStepProcessStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_NEW_HIRE_ACTIVITIES_STEP_PROCESS_STEP_ID: BigNumberField<OnboardingEquipment>;
    /**
     * Static representation of the [[onboardingProcessOnboardingProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_PROCESS_ONBOARDING_PROCESS_ID: BigNumberField<OnboardingEquipment>;
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT: StringField<OnboardingEquipment>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<OnboardingEquipment>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<OnboardingEquipment>;
    /**
     * Static representation of the [[equipmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EQUIPMENT_ID: StringField<OnboardingEquipment>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<OnboardingEquipment>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<OnboardingEquipment>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<OnboardingEquipment>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<OnboardingEquipment>;
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE: StringField<OnboardingEquipment>;
    /**
     * Static representation of the [[workflow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORKFLOW: StringField<OnboardingEquipment>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<OnboardingEquipment, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<OnboardingEquipment, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OnboardingEquipment, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[typeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_NAV: OneToOneLink<OnboardingEquipment, OnboardingEquipmentType_1>;
    /**
     * Static representation of the one-to-one navigation property [[valueNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_NAV: OneToOneLink<OnboardingEquipment, OnboardingEquipmentTypeValue>;
    /**
     * All fields of the OnboardingEquipment entity.
     */
    const _allFields: Array<BigNumberField<OnboardingEquipment> | StringField<OnboardingEquipment> | DateField<OnboardingEquipment> | OneToOneLink<OnboardingEquipment, User> | OneToOneLink<OnboardingEquipment, MdfEnumValue> | OneToOneLink<OnboardingEquipment, OnboardingEquipmentType_1> | OneToOneLink<OnboardingEquipment, OnboardingEquipmentTypeValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<OnboardingEquipment>;
    /**
     * All key fields of the OnboardingEquipment entity.
     */
    const _keyFields: Array<Selectable<OnboardingEquipment>>;
    /**
     * Mapping of all key field names to the respective static field property OnboardingEquipment.
     */
    const _keys: {
        [keys: string]: Selectable<OnboardingEquipment>;
    };
}
//# sourceMappingURL=OnboardingEquipment.d.ts.map