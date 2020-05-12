import { JobRequisitionLocaleFieldControlsRequestBuilder } from './JobRequisitionLocaleFieldControlsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobRequisitionLocaleFieldControls" of service "SFOData".
 */
export declare class JobRequisitionLocaleFieldControls extends Entity implements JobRequisitionLocaleFieldControlsType {
    /**
     * Technical entity name for JobRequisitionLocaleFieldControls.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobRequisitionLocaleFieldControls.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * extJobDescFooter.
     * @nullable
     */
    extJobDescFooter?: number;
    /**
     * extJobDescHeader.
     * @nullable
     */
    extJobDescHeader?: number;
    /**
     * externalJobDescription.
     * @nullable
     */
    externalJobDescription?: number;
    /**
     * externalTitle.
     * @nullable
     */
    externalTitle?: number;
    /**
     * intJobDescFooter.
     * @nullable
     */
    intJobDescFooter?: number;
    /**
     * intJobDescHeader.
     * @nullable
     */
    intJobDescHeader?: number;
    /**
     * jobDescription.
     * @nullable
     */
    jobDescription?: number;
    /**
     * jobReqId.
     * @nullable
     */
    jobReqId?: number;
    /**
     * jobReqLocalId.
     */
    jobReqLocalId: number;
    /**
     * jobReqLocalePermissionsNav.
     * @nullable
     */
    jobReqLocalePermissionsNav?: number;
    /**
     * jobRequisition.
     * @nullable
     */
    jobRequisition?: number;
    /**
     * jobTitle.
     * @nullable
     */
    jobTitle?: number;
    /**
     * locale.
     * @nullable
     */
    locale?: number;
    /**
     * status.
     * @nullable
     */
    status?: number;
    /**
     * templateHeaderFooter.
     * @nullable
     */
    templateHeaderFooter?: number;
    /**
     * Returns an entity builder to construct instances `JobRequisitionLocaleFieldControls`.
     * @returns A builder that constructs instances of entity type `JobRequisitionLocaleFieldControls`.
     */
    static builder(): EntityBuilderType<JobRequisitionLocaleFieldControls, JobRequisitionLocaleFieldControlsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobRequisitionLocaleFieldControls` entity type.
     * @returns A `JobRequisitionLocaleFieldControls` request builder.
     */
    static requestBuilder(): JobRequisitionLocaleFieldControlsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionLocaleFieldControls`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobRequisitionLocaleFieldControls`.
     */
    static customField(fieldName: string): CustomField<JobRequisitionLocaleFieldControls>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface JobRequisitionLocaleFieldControlsType {
    extJobDescFooter?: number;
    extJobDescHeader?: number;
    externalJobDescription?: number;
    externalTitle?: number;
    intJobDescFooter?: number;
    intJobDescHeader?: number;
    jobDescription?: number;
    jobReqId?: number;
    jobReqLocalId: number;
    jobReqLocalePermissionsNav?: number;
    jobRequisition?: number;
    jobTitle?: number;
    locale?: number;
    status?: number;
    templateHeaderFooter?: number;
}
export interface JobRequisitionLocaleFieldControlsTypeForceMandatory {
    extJobDescFooter: number;
    extJobDescHeader: number;
    externalJobDescription: number;
    externalTitle: number;
    intJobDescFooter: number;
    intJobDescHeader: number;
    jobDescription: number;
    jobReqId: number;
    jobReqLocalId: number;
    jobReqLocalePermissionsNav: number;
    jobRequisition: number;
    jobTitle: number;
    locale: number;
    status: number;
    templateHeaderFooter: number;
}
export declare namespace JobRequisitionLocaleFieldControls {
    /**
     * Static representation of the [[extJobDescFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXT_JOB_DESC_FOOTER: NumberField<JobRequisitionLocaleFieldControls>;
    /**
     * Static representation of the [[extJobDescHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXT_JOB_DESC_HEADER: NumberField<JobRequisitionLocaleFieldControls>;
    /**
     * Static representation of the [[externalJobDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_JOB_DESCRIPTION: NumberField<JobRequisitionLocaleFieldControls>;
    /**
     * Static representation of the [[externalTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_TITLE: NumberField<JobRequisitionLocaleFieldControls>;
    /**
     * Static representation of the [[intJobDescFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INT_JOB_DESC_FOOTER: NumberField<JobRequisitionLocaleFieldControls>;
    /**
     * Static representation of the [[intJobDescHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INT_JOB_DESC_HEADER: NumberField<JobRequisitionLocaleFieldControls>;
    /**
     * Static representation of the [[jobDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_DESCRIPTION: NumberField<JobRequisitionLocaleFieldControls>;
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_ID: NumberField<JobRequisitionLocaleFieldControls>;
    /**
     * Static representation of the [[jobReqLocalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_LOCAL_ID: NumberField<JobRequisitionLocaleFieldControls>;
    /**
     * Static representation of the [[jobReqLocalePermissionsNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_LOCALE_PERMISSIONS_NAV: NumberField<JobRequisitionLocaleFieldControls>;
    /**
     * Static representation of the [[jobRequisition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQUISITION: NumberField<JobRequisitionLocaleFieldControls>;
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_TITLE: NumberField<JobRequisitionLocaleFieldControls>;
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALE: NumberField<JobRequisitionLocaleFieldControls>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: NumberField<JobRequisitionLocaleFieldControls>;
    /**
     * Static representation of the [[templateHeaderFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_HEADER_FOOTER: NumberField<JobRequisitionLocaleFieldControls>;
    /**
     * All fields of the JobRequisitionLocaleFieldControls entity.
     */
    const _allFields: Array<NumberField<JobRequisitionLocaleFieldControls>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobRequisitionLocaleFieldControls>;
    /**
     * All key fields of the JobRequisitionLocaleFieldControls entity.
     */
    const _keyFields: Array<Selectable<JobRequisitionLocaleFieldControls>>;
    /**
     * Mapping of all key field names to the respective static field property JobRequisitionLocaleFieldControls.
     */
    const _keys: {
        [keys: string]: Selectable<JobRequisitionLocaleFieldControls>;
    };
}
//# sourceMappingURL=JobRequisitionLocaleFieldControls.d.ts.map