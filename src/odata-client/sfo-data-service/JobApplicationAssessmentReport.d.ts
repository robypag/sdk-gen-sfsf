import { JobApplicationAssessmentReportRequestBuilder } from './JobApplicationAssessmentReportRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplicationAssessmentReport" of service "SFOData".
 */
export declare class JobApplicationAssessmentReport extends Entity implements JobApplicationAssessmentReportType {
    /**
     * Technical entity name for JobApplicationAssessmentReport.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationAssessmentReport.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Assessment Report Id.
     */
    id: BigNumber;
    /**
     * Assessment Order ID.
     */
    orderId: BigNumber;
    /**
     * Report URL.
     * @nullable
     */
    reportUrl?: string;
    /**
     * Status.
     */
    status: BigNumber;
    /**
     * Status Date.
     * @nullable
     */
    statusDate?: Moment;
    /**
     * Status Details.
     */
    statusDetails: string;
    /**
     * One-to-many navigation property to the [[JobApplicationAssessmentReportDetail]] entity.
     */
    assessmentReportDetail: JobApplicationAssessmentReportDetail[];
    /**
     * One-to-one navigation property to the [[JobApplicationAssessmentOrder]] entity.
     */
    jobApplicationAssessmentOrder: JobApplicationAssessmentOrder;
    /**
     * Returns an entity builder to construct instances `JobApplicationAssessmentReport`.
     * @returns A builder that constructs instances of entity type `JobApplicationAssessmentReport`.
     */
    static builder(): EntityBuilderType<JobApplicationAssessmentReport, JobApplicationAssessmentReportTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationAssessmentReport` entity type.
     * @returns A `JobApplicationAssessmentReport` request builder.
     */
    static requestBuilder(): JobApplicationAssessmentReportRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationAssessmentReport`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationAssessmentReport`.
     */
    static customField(fieldName: string): CustomField<JobApplicationAssessmentReport>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JobApplicationAssessmentReportDetail, JobApplicationAssessmentReportDetailType } from './JobApplicationAssessmentReportDetail';
import { JobApplicationAssessmentOrder, JobApplicationAssessmentOrderType } from './JobApplicationAssessmentOrder';
export interface JobApplicationAssessmentReportType {
    id: BigNumber;
    orderId: BigNumber;
    reportUrl?: string;
    status: BigNumber;
    statusDate?: Moment;
    statusDetails: string;
    assessmentReportDetail: JobApplicationAssessmentReportDetailType[];
    jobApplicationAssessmentOrder: JobApplicationAssessmentOrderType;
}
export interface JobApplicationAssessmentReportTypeForceMandatory {
    id: BigNumber;
    orderId: BigNumber;
    reportUrl: string;
    status: BigNumber;
    statusDate: Moment;
    statusDetails: string;
    assessmentReportDetail: JobApplicationAssessmentReportDetailType[];
    jobApplicationAssessmentOrder: JobApplicationAssessmentOrderType;
}
export declare namespace JobApplicationAssessmentReport {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<JobApplicationAssessmentReport>;
    /**
     * Static representation of the [[orderId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER_ID: BigNumberField<JobApplicationAssessmentReport>;
    /**
     * Static representation of the [[reportUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPORT_URL: StringField<JobApplicationAssessmentReport>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: BigNumberField<JobApplicationAssessmentReport>;
    /**
     * Static representation of the [[statusDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_DATE: DateField<JobApplicationAssessmentReport>;
    /**
     * Static representation of the [[statusDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_DETAILS: StringField<JobApplicationAssessmentReport>;
    /**
     * Static representation of the one-to-many navigation property [[assessmentReportDetail]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSESSMENT_REPORT_DETAIL: Link<JobApplicationAssessmentReport, JobApplicationAssessmentReportDetail>;
    /**
     * Static representation of the one-to-one navigation property [[jobApplicationAssessmentOrder]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION_ASSESSMENT_ORDER: OneToOneLink<JobApplicationAssessmentReport, JobApplicationAssessmentOrder>;
    /**
     * All fields of the JobApplicationAssessmentReport entity.
     */
    const _allFields: Array<BigNumberField<JobApplicationAssessmentReport> | StringField<JobApplicationAssessmentReport> | DateField<JobApplicationAssessmentReport> | Link<JobApplicationAssessmentReport, JobApplicationAssessmentReportDetail> | OneToOneLink<JobApplicationAssessmentReport, JobApplicationAssessmentOrder>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationAssessmentReport>;
    /**
     * All key fields of the JobApplicationAssessmentReport entity.
     */
    const _keyFields: Array<Selectable<JobApplicationAssessmentReport>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationAssessmentReport.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationAssessmentReport>;
    };
}
//# sourceMappingURL=JobApplicationAssessmentReport.d.ts.map