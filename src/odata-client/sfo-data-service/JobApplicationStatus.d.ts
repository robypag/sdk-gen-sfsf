import { JobApplicationStatusRequestBuilder } from './JobApplicationStatusRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplicationStatus" of service "SFOData".
 */
export declare class JobApplicationStatus extends Entity implements JobApplicationStatusType {
    /**
     * Technical entity name for JobApplicationStatus.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationStatus.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Application Status Id.
     * @nullable
     */
    appStatusId?: BigNumber;
    /**
     * Application Status Name.
     */
    appStatusName: string;
    /**
     * Applicaiton Status Set Id.
     */
    appStatusSetId: BigNumber;
    /**
     * One-to-many navigation property to the [[JobApplicationStatusLabel]] entity.
     */
    jobAppStatusLabel: JobApplicationStatusLabel[];
    /**
     * One-to-many navigation property to the [[JobApplication]] entity.
     */
    jobApplications: JobApplication[];
    /**
     * Returns an entity builder to construct instances `JobApplicationStatus`.
     * @returns A builder that constructs instances of entity type `JobApplicationStatus`.
     */
    static builder(): EntityBuilderType<JobApplicationStatus, JobApplicationStatusTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationStatus` entity type.
     * @returns A `JobApplicationStatus` request builder.
     */
    static requestBuilder(): JobApplicationStatusRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationStatus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationStatus`.
     */
    static customField(fieldName: string): CustomField<JobApplicationStatus>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JobApplicationStatusLabel, JobApplicationStatusLabelType } from './JobApplicationStatusLabel';
import { JobApplication, JobApplicationType } from './JobApplication';
export interface JobApplicationStatusType {
    appStatusId?: BigNumber;
    appStatusName: string;
    appStatusSetId: BigNumber;
    jobAppStatusLabel: JobApplicationStatusLabelType[];
    jobApplications: JobApplicationType[];
}
export interface JobApplicationStatusTypeForceMandatory {
    appStatusId: BigNumber;
    appStatusName: string;
    appStatusSetId: BigNumber;
    jobAppStatusLabel: JobApplicationStatusLabelType[];
    jobApplications: JobApplicationType[];
}
export declare namespace JobApplicationStatus {
    /**
     * Static representation of the [[appStatusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APP_STATUS_ID: BigNumberField<JobApplicationStatus>;
    /**
     * Static representation of the [[appStatusName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APP_STATUS_NAME: StringField<JobApplicationStatus>;
    /**
     * Static representation of the [[appStatusSetId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APP_STATUS_SET_ID: BigNumberField<JobApplicationStatus>;
    /**
     * Static representation of the one-to-many navigation property [[jobAppStatusLabel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APP_STATUS_LABEL: Link<JobApplicationStatus, JobApplicationStatusLabel>;
    /**
     * Static representation of the one-to-many navigation property [[jobApplications]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATIONS: Link<JobApplicationStatus, JobApplication>;
    /**
     * All fields of the JobApplicationStatus entity.
     */
    const _allFields: Array<BigNumberField<JobApplicationStatus> | StringField<JobApplicationStatus> | Link<JobApplicationStatus, JobApplicationStatusLabel> | Link<JobApplicationStatus, JobApplication>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationStatus>;
    /**
     * All key fields of the JobApplicationStatus entity.
     */
    const _keyFields: Array<Selectable<JobApplicationStatus>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationStatus.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationStatus>;
    };
}
//# sourceMappingURL=JobApplicationStatus.d.ts.map