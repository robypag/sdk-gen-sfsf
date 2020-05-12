import { JobApplicationStatusLabelRequestBuilder } from './JobApplicationStatusLabelRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplicationStatusLabel" of service "SFOData".
 */
export declare class JobApplicationStatusLabel extends Entity implements JobApplicationStatusLabelType {
    /**
     * Technical entity name for JobApplicationStatusLabel.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationStatusLabel.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Application Status Id.
     */
    appStatusId: BigNumber;
    /**
     * Candidate Label.
     * @nullable
     */
    candidateLabel?: string;
    /**
     * Locale.
     */
    locale: string;
    /**
     * Application Status Label.
     */
    statusLabel: string;
    /**
     * One-to-one navigation property to the [[JobApplicationStatus]] entity.
     */
    appStatus: JobApplicationStatus;
    /**
     * Returns an entity builder to construct instances `JobApplicationStatusLabel`.
     * @returns A builder that constructs instances of entity type `JobApplicationStatusLabel`.
     */
    static builder(): EntityBuilderType<JobApplicationStatusLabel, JobApplicationStatusLabelTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationStatusLabel` entity type.
     * @returns A `JobApplicationStatusLabel` request builder.
     */
    static requestBuilder(): JobApplicationStatusLabelRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationStatusLabel`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationStatusLabel`.
     */
    static customField(fieldName: string): CustomField<JobApplicationStatusLabel>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JobApplicationStatus, JobApplicationStatusType } from './JobApplicationStatus';
export interface JobApplicationStatusLabelType {
    appStatusId: BigNumber;
    candidateLabel?: string;
    locale: string;
    statusLabel: string;
    appStatus: JobApplicationStatusType;
}
export interface JobApplicationStatusLabelTypeForceMandatory {
    appStatusId: BigNumber;
    candidateLabel: string;
    locale: string;
    statusLabel: string;
    appStatus: JobApplicationStatusType;
}
export declare namespace JobApplicationStatusLabel {
    /**
     * Static representation of the [[appStatusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APP_STATUS_ID: BigNumberField<JobApplicationStatusLabel>;
    /**
     * Static representation of the [[candidateLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_LABEL: StringField<JobApplicationStatusLabel>;
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALE: StringField<JobApplicationStatusLabel>;
    /**
     * Static representation of the [[statusLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_LABEL: StringField<JobApplicationStatusLabel>;
    /**
     * Static representation of the one-to-one navigation property [[appStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APP_STATUS: OneToOneLink<JobApplicationStatusLabel, JobApplicationStatus>;
    /**
     * All fields of the JobApplicationStatusLabel entity.
     */
    const _allFields: Array<BigNumberField<JobApplicationStatusLabel> | StringField<JobApplicationStatusLabel> | OneToOneLink<JobApplicationStatusLabel, JobApplicationStatus>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationStatusLabel>;
    /**
     * All key fields of the JobApplicationStatusLabel entity.
     */
    const _keyFields: Array<Selectable<JobApplicationStatusLabel>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationStatusLabel.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationStatusLabel>;
    };
}
//# sourceMappingURL=JobApplicationStatusLabel.d.ts.map