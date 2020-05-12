import { JobApplicationOnboardingDataRequestBuilder } from './JobApplicationOnboardingDataRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplicationOnboardingData" of service "SFOData".
 */
export declare class JobApplicationOnboardingData extends Entity implements JobApplicationOnboardingDataType {
    /**
     * Technical entity name for JobApplicationOnboardingData.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationOnboardingData.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Application Id.
     * @nullable
     */
    applicationId?: BigNumber;
    /**
     * Onboarding request ID.
     */
    onboardingId: BigNumber;
    /**
     * Submission Status.
     */
    status: string;
    /**
     * Submitted By.
     */
    submittedBy: string;
    /**
     * Submitted On.
     */
    submittedOn: Moment;
    /**
     * One-to-one navigation property to the [[JobApplication]] entity.
     */
    jobApplication: JobApplication;
    /**
     * One-to-many navigation property to the [[JobApplicationOnboardingStatus]] entity.
     */
    onboardingStatus: JobApplicationOnboardingStatus[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    submittedByNav: User;
    /**
     * Returns an entity builder to construct instances `JobApplicationOnboardingData`.
     * @returns A builder that constructs instances of entity type `JobApplicationOnboardingData`.
     */
    static builder(): EntityBuilderType<JobApplicationOnboardingData, JobApplicationOnboardingDataTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationOnboardingData` entity type.
     * @returns A `JobApplicationOnboardingData` request builder.
     */
    static requestBuilder(): JobApplicationOnboardingDataRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationOnboardingData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationOnboardingData`.
     */
    static customField(fieldName: string): CustomField<JobApplicationOnboardingData>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JobApplication, JobApplicationType } from './JobApplication';
import { JobApplicationOnboardingStatus, JobApplicationOnboardingStatusType } from './JobApplicationOnboardingStatus';
import { User, UserType } from './User';
export interface JobApplicationOnboardingDataType {
    applicationId?: BigNumber;
    onboardingId: BigNumber;
    status: string;
    submittedBy: string;
    submittedOn: Moment;
    jobApplication: JobApplicationType;
    onboardingStatus: JobApplicationOnboardingStatusType[];
    submittedByNav: UserType;
}
export interface JobApplicationOnboardingDataTypeForceMandatory {
    applicationId: BigNumber;
    onboardingId: BigNumber;
    status: string;
    submittedBy: string;
    submittedOn: Moment;
    jobApplication: JobApplicationType;
    onboardingStatus: JobApplicationOnboardingStatusType[];
    submittedByNav: UserType;
}
export declare namespace JobApplicationOnboardingData {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: BigNumberField<JobApplicationOnboardingData>;
    /**
     * Static representation of the [[onboardingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_ID: BigNumberField<JobApplicationOnboardingData>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<JobApplicationOnboardingData>;
    /**
     * Static representation of the [[submittedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBMITTED_BY: StringField<JobApplicationOnboardingData>;
    /**
     * Static representation of the [[submittedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBMITTED_ON: DateField<JobApplicationOnboardingData>;
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION: OneToOneLink<JobApplicationOnboardingData, JobApplication>;
    /**
     * Static representation of the one-to-many navigation property [[onboardingStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_STATUS: Link<JobApplicationOnboardingData, JobApplicationOnboardingStatus>;
    /**
     * Static representation of the one-to-one navigation property [[submittedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBMITTED_BY_NAV: OneToOneLink<JobApplicationOnboardingData, User>;
    /**
     * All fields of the JobApplicationOnboardingData entity.
     */
    const _allFields: Array<BigNumberField<JobApplicationOnboardingData> | StringField<JobApplicationOnboardingData> | DateField<JobApplicationOnboardingData> | OneToOneLink<JobApplicationOnboardingData, JobApplication> | Link<JobApplicationOnboardingData, JobApplicationOnboardingStatus> | OneToOneLink<JobApplicationOnboardingData, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationOnboardingData>;
    /**
     * All key fields of the JobApplicationOnboardingData entity.
     */
    const _keyFields: Array<Selectable<JobApplicationOnboardingData>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationOnboardingData.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationOnboardingData>;
    };
}
//# sourceMappingURL=JobApplicationOnboardingData.d.ts.map