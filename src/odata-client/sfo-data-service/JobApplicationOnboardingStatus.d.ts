import { JobApplicationOnboardingStatusRequestBuilder } from './JobApplicationOnboardingStatusRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplicationOnboardingStatus" of service "SFOData".
 */
export declare class JobApplicationOnboardingStatus extends Entity implements JobApplicationOnboardingStatusType {
    /**
     * Technical entity name for JobApplicationOnboardingStatus.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationOnboardingStatus.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Report url.
     */
    createdDate: Moment;
    /**
     * Report url.
     */
    lastModifiedDate: Moment;
    /**
     * Status message.
     */
    message: string;
    /**
     * Name.
     */
    name: string;
    /**
     * Onboarding request ID.
     */
    onboardingId: BigNumber;
    /**
     * Onboarding status ID.
     */
    onboardingStatusId: BigNumber;
    /**
     * Status.
     */
    status: string;
    /**
     * Status type.
     */
    statusType: string;
    /**
     * Type.
     */
    type: string;
    /**
     * Report url.
     */
    url: string;
    /**
     * One-to-one navigation property to the [[JobApplicationOnboardingData]] entity.
     */
    onboardingData: JobApplicationOnboardingData;
    /**
     * Returns an entity builder to construct instances `JobApplicationOnboardingStatus`.
     * @returns A builder that constructs instances of entity type `JobApplicationOnboardingStatus`.
     */
    static builder(): EntityBuilderType<JobApplicationOnboardingStatus, JobApplicationOnboardingStatusTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationOnboardingStatus` entity type.
     * @returns A `JobApplicationOnboardingStatus` request builder.
     */
    static requestBuilder(): JobApplicationOnboardingStatusRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationOnboardingStatus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationOnboardingStatus`.
     */
    static customField(fieldName: string): CustomField<JobApplicationOnboardingStatus>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JobApplicationOnboardingData, JobApplicationOnboardingDataType } from './JobApplicationOnboardingData';
export interface JobApplicationOnboardingStatusType {
    createdDate: Moment;
    lastModifiedDate: Moment;
    message: string;
    name: string;
    onboardingId: BigNumber;
    onboardingStatusId: BigNumber;
    status: string;
    statusType: string;
    type: string;
    url: string;
    onboardingData: JobApplicationOnboardingDataType;
}
export interface JobApplicationOnboardingStatusTypeForceMandatory {
    createdDate: Moment;
    lastModifiedDate: Moment;
    message: string;
    name: string;
    onboardingId: BigNumber;
    onboardingStatusId: BigNumber;
    status: string;
    statusType: string;
    type: string;
    url: string;
    onboardingData: JobApplicationOnboardingDataType;
}
export declare namespace JobApplicationOnboardingStatus {
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE: DateField<JobApplicationOnboardingStatus>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<JobApplicationOnboardingStatus>;
    /**
     * Static representation of the [[message]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MESSAGE: StringField<JobApplicationOnboardingStatus>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<JobApplicationOnboardingStatus>;
    /**
     * Static representation of the [[onboardingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_ID: BigNumberField<JobApplicationOnboardingStatus>;
    /**
     * Static representation of the [[onboardingStatusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_STATUS_ID: BigNumberField<JobApplicationOnboardingStatus>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<JobApplicationOnboardingStatus>;
    /**
     * Static representation of the [[statusType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_TYPE: StringField<JobApplicationOnboardingStatus>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<JobApplicationOnboardingStatus>;
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const URL: StringField<JobApplicationOnboardingStatus>;
    /**
     * Static representation of the one-to-one navigation property [[onboardingData]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_DATA: OneToOneLink<JobApplicationOnboardingStatus, JobApplicationOnboardingData>;
    /**
     * All fields of the JobApplicationOnboardingStatus entity.
     */
    const _allFields: Array<DateField<JobApplicationOnboardingStatus> | StringField<JobApplicationOnboardingStatus> | BigNumberField<JobApplicationOnboardingStatus> | OneToOneLink<JobApplicationOnboardingStatus, JobApplicationOnboardingData>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationOnboardingStatus>;
    /**
     * All key fields of the JobApplicationOnboardingStatus entity.
     */
    const _keyFields: Array<Selectable<JobApplicationOnboardingStatus>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationOnboardingStatus.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationOnboardingStatus>;
    };
}
//# sourceMappingURL=JobApplicationOnboardingStatus.d.ts.map