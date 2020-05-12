import { JobApplicationAssessmentReportDetailRequestBuilder } from './JobApplicationAssessmentReportDetailRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplicationAssessmentReportDetail" of service "SFOData".
 */
export declare class JobApplicationAssessmentReportDetail extends Entity implements JobApplicationAssessmentReportDetailType {
    /**
     * Technical entity name for JobApplicationAssessmentReportDetail.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationAssessmentReportDetail.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Assessment Report Detail Id.
     */
    id: BigNumber;
    /**
     * Score Component.
     */
    scoreComponent: string;
    /**
     * Score Value.
     */
    scoreValue: string;
    /**
     * One-to-one navigation property to the [[JobApplicationAssessmentReport]] entity.
     */
    assessmentReport: JobApplicationAssessmentReport;
    /**
     * Returns an entity builder to construct instances `JobApplicationAssessmentReportDetail`.
     * @returns A builder that constructs instances of entity type `JobApplicationAssessmentReportDetail`.
     */
    static builder(): EntityBuilderType<JobApplicationAssessmentReportDetail, JobApplicationAssessmentReportDetailTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationAssessmentReportDetail` entity type.
     * @returns A `JobApplicationAssessmentReportDetail` request builder.
     */
    static requestBuilder(): JobApplicationAssessmentReportDetailRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationAssessmentReportDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationAssessmentReportDetail`.
     */
    static customField(fieldName: string): CustomField<JobApplicationAssessmentReportDetail>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JobApplicationAssessmentReport, JobApplicationAssessmentReportType } from './JobApplicationAssessmentReport';
export interface JobApplicationAssessmentReportDetailType {
    id: BigNumber;
    scoreComponent: string;
    scoreValue: string;
    assessmentReport: JobApplicationAssessmentReportType;
}
export interface JobApplicationAssessmentReportDetailTypeForceMandatory {
    id: BigNumber;
    scoreComponent: string;
    scoreValue: string;
    assessmentReport: JobApplicationAssessmentReportType;
}
export declare namespace JobApplicationAssessmentReportDetail {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<JobApplicationAssessmentReportDetail>;
    /**
     * Static representation of the [[scoreComponent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCORE_COMPONENT: StringField<JobApplicationAssessmentReportDetail>;
    /**
     * Static representation of the [[scoreValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCORE_VALUE: StringField<JobApplicationAssessmentReportDetail>;
    /**
     * Static representation of the one-to-one navigation property [[assessmentReport]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSESSMENT_REPORT: OneToOneLink<JobApplicationAssessmentReportDetail, JobApplicationAssessmentReport>;
    /**
     * All fields of the JobApplicationAssessmentReportDetail entity.
     */
    const _allFields: Array<BigNumberField<JobApplicationAssessmentReportDetail> | StringField<JobApplicationAssessmentReportDetail> | OneToOneLink<JobApplicationAssessmentReportDetail, JobApplicationAssessmentReport>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationAssessmentReportDetail>;
    /**
     * All key fields of the JobApplicationAssessmentReportDetail entity.
     */
    const _keyFields: Array<Selectable<JobApplicationAssessmentReportDetail>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationAssessmentReportDetail.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationAssessmentReportDetail>;
    };
}
//# sourceMappingURL=JobApplicationAssessmentReportDetail.d.ts.map