import { JobRequisitionLocaleRequestBuilder } from './JobRequisitionLocaleRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobRequisitionLocale" of service "SFOData".
 */
export declare class JobRequisitionLocale extends Entity implements JobRequisitionLocaleType {
    /**
     * Technical entity name for JobRequisitionLocale.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobRequisitionLocale.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * External Job Description Footer.
     */
    extJobDescFooter: string;
    /**
     * External Job Description Header.
     */
    extJobDescHeader: string;
    /**
     * External Job Description.
     */
    externalJobDescription: string;
    /**
     * External Title.
     */
    externalTitle: string;
    /**
     * Internal Job Description Footer.
     */
    intJobDescFooter: string;
    /**
     * Internal Job Description Header.
     */
    intJobDescHeader: string;
    /**
     * Job Description.
     */
    jobDescription: string;
    /**
     * Job Requisition Id.
     */
    jobReqId: BigNumber;
    /**
     * Job Requisition Local Id.
     */
    jobReqLocalId: BigNumber;
    /**
     * Job Title.
     */
    jobTitle: string;
    /**
     * Locale.
     */
    locale: string;
    /**
     * Status.
     */
    status: string;
    /**
     * Template Header and Footer.
     * @nullable
     */
    templateHeaderFooter?: string;
    /**
     * One-to-one navigation property to the [[JobRequisitionLocaleFieldControls]] entity.
     */
    jobReqLocalePermissionsNav: JobRequisitionLocaleFieldControls;
    /**
     * One-to-one navigation property to the [[JobRequisition]] entity.
     */
    jobRequisition: JobRequisition;
    /**
     * Returns an entity builder to construct instances `JobRequisitionLocale`.
     * @returns A builder that constructs instances of entity type `JobRequisitionLocale`.
     */
    static builder(): EntityBuilderType<JobRequisitionLocale, JobRequisitionLocaleTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobRequisitionLocale` entity type.
     * @returns A `JobRequisitionLocale` request builder.
     */
    static requestBuilder(): JobRequisitionLocaleRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionLocale`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobRequisitionLocale`.
     */
    static customField(fieldName: string): CustomField<JobRequisitionLocale>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JobRequisitionLocaleFieldControls, JobRequisitionLocaleFieldControlsType } from './JobRequisitionLocaleFieldControls';
import { JobRequisition, JobRequisitionType } from './JobRequisition';
export interface JobRequisitionLocaleType {
    extJobDescFooter: string;
    extJobDescHeader: string;
    externalJobDescription: string;
    externalTitle: string;
    intJobDescFooter: string;
    intJobDescHeader: string;
    jobDescription: string;
    jobReqId: BigNumber;
    jobReqLocalId: BigNumber;
    jobTitle: string;
    locale: string;
    status: string;
    templateHeaderFooter?: string;
    jobReqLocalePermissionsNav: JobRequisitionLocaleFieldControlsType;
    jobRequisition: JobRequisitionType;
}
export interface JobRequisitionLocaleTypeForceMandatory {
    extJobDescFooter: string;
    extJobDescHeader: string;
    externalJobDescription: string;
    externalTitle: string;
    intJobDescFooter: string;
    intJobDescHeader: string;
    jobDescription: string;
    jobReqId: BigNumber;
    jobReqLocalId: BigNumber;
    jobTitle: string;
    locale: string;
    status: string;
    templateHeaderFooter: string;
    jobReqLocalePermissionsNav: JobRequisitionLocaleFieldControlsType;
    jobRequisition: JobRequisitionType;
}
export declare namespace JobRequisitionLocale {
    /**
     * Static representation of the [[extJobDescFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXT_JOB_DESC_FOOTER: StringField<JobRequisitionLocale>;
    /**
     * Static representation of the [[extJobDescHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXT_JOB_DESC_HEADER: StringField<JobRequisitionLocale>;
    /**
     * Static representation of the [[externalJobDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_JOB_DESCRIPTION: StringField<JobRequisitionLocale>;
    /**
     * Static representation of the [[externalTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_TITLE: StringField<JobRequisitionLocale>;
    /**
     * Static representation of the [[intJobDescFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INT_JOB_DESC_FOOTER: StringField<JobRequisitionLocale>;
    /**
     * Static representation of the [[intJobDescHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INT_JOB_DESC_HEADER: StringField<JobRequisitionLocale>;
    /**
     * Static representation of the [[jobDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_DESCRIPTION: StringField<JobRequisitionLocale>;
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_ID: BigNumberField<JobRequisitionLocale>;
    /**
     * Static representation of the [[jobReqLocalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_LOCAL_ID: BigNumberField<JobRequisitionLocale>;
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_TITLE: StringField<JobRequisitionLocale>;
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALE: StringField<JobRequisitionLocale>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<JobRequisitionLocale>;
    /**
     * Static representation of the [[templateHeaderFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_HEADER_FOOTER: StringField<JobRequisitionLocale>;
    /**
     * Static representation of the one-to-one navigation property [[jobReqLocalePermissionsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_LOCALE_PERMISSIONS_NAV: OneToOneLink<JobRequisitionLocale, JobRequisitionLocaleFieldControls>;
    /**
     * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQUISITION: OneToOneLink<JobRequisitionLocale, JobRequisition>;
    /**
     * All fields of the JobRequisitionLocale entity.
     */
    const _allFields: Array<StringField<JobRequisitionLocale> | BigNumberField<JobRequisitionLocale> | OneToOneLink<JobRequisitionLocale, JobRequisitionLocaleFieldControls> | OneToOneLink<JobRequisitionLocale, JobRequisition>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobRequisitionLocale>;
    /**
     * All key fields of the JobRequisitionLocale entity.
     */
    const _keyFields: Array<Selectable<JobRequisitionLocale>>;
    /**
     * Mapping of all key field names to the respective static field property JobRequisitionLocale.
     */
    const _keys: {
        [keys: string]: Selectable<JobRequisitionLocale>;
    };
}
//# sourceMappingURL=JobRequisitionLocale.d.ts.map