import { JobApplicationAuditRequestBuilder } from './JobApplicationAuditRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplicationAudit" of service "SFOData".
 */
export declare class JobApplicationAudit extends Entity implements JobApplicationAuditType {
    /**
     * Technical entity name for JobApplicationAudit.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationAudit.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * changedBy.
     * @nullable
     */
    changedBy?: string;
    /**
     * Clob Field Reference.
     * @nullable
     */
    clobFieldRef?: string;
    /**
     * Clob New Value.
     * @nullable
     */
    clobNewValueXml?: string;
    /**
     * Clob Old Value.
     * @nullable
     */
    clobOldValueXml?: string;
    /**
     * Date New Value.
     * @nullable
     */
    dateNewValue?: Moment;
    /**
     * Date Old value.
     * @nullable
     */
    dateOldValue?: Moment;
    /**
     * Field Id.
     * @nullable
     */
    fieldId?: string;
    /**
     * Field Order Pos.
     */
    fieldOrderPos: BigNumber;
    /**
     * Field type.
     * @nullable
     */
    fieldType?: string;
    /**
     * Job Post End Date.
     * @nullable
     */
    jobPostEndDate?: Moment;
    /**
     * Job Post Start Date.
     * @nullable
     */
    jobPostStartDate?: Moment;
    /**
     * Job Posting Id.
     * @nullable
     */
    jobPostingId?: BigNumber;
    /**
     * Last Modified By.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date.
     * @nullable
     */
    lastModifiedDate?: Moment;
    /**
     * Last Modified External Id.
     * @nullable
     */
    lastModifiedExtId?: BigNumber;
    /**
     * Merge From.
     * @nullable
     */
    mergedFrom?: string;
    /**
     * New Value.
     * @nullable
     */
    newValue?: string;
    /**
     * Old Value.
     * @nullable
     */
    oldValue?: string;
    /**
     * Reference Type.
     * @nullable
     */
    refType?: string;
    /**
     * Rev Number.
     */
    revNumber: BigNumber;
    /**
     * RevType.
     * @nullable
     */
    revType?: number;
    /**
     * Source.
     * @nullable
     */
    source?: string;
    /**
     * One-to-one navigation property to the [[JobApplication]] entity.
     */
    jobApplication: JobApplication;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * Returns an entity builder to construct instances `JobApplicationAudit`.
     * @returns A builder that constructs instances of entity type `JobApplicationAudit`.
     */
    static builder(): EntityBuilderType<JobApplicationAudit, JobApplicationAuditTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationAudit` entity type.
     * @returns A `JobApplicationAudit` request builder.
     */
    static requestBuilder(): JobApplicationAuditRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationAudit`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationAudit`.
     */
    static customField(fieldName: string): CustomField<JobApplicationAudit>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JobApplication, JobApplicationType } from './JobApplication';
import { User, UserType } from './User';
export interface JobApplicationAuditType {
    changedBy?: string;
    clobFieldRef?: string;
    clobNewValueXml?: string;
    clobOldValueXml?: string;
    dateNewValue?: Moment;
    dateOldValue?: Moment;
    fieldId?: string;
    fieldOrderPos: BigNumber;
    fieldType?: string;
    jobPostEndDate?: Moment;
    jobPostStartDate?: Moment;
    jobPostingId?: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDate?: Moment;
    lastModifiedExtId?: BigNumber;
    mergedFrom?: string;
    newValue?: string;
    oldValue?: string;
    refType?: string;
    revNumber: BigNumber;
    revType?: number;
    source?: string;
    jobApplication: JobApplicationType;
    lastModifiedByNav: UserType;
}
export interface JobApplicationAuditTypeForceMandatory {
    changedBy: string;
    clobFieldRef: string;
    clobNewValueXml: string;
    clobOldValueXml: string;
    dateNewValue: Moment;
    dateOldValue: Moment;
    fieldId: string;
    fieldOrderPos: BigNumber;
    fieldType: string;
    jobPostEndDate: Moment;
    jobPostStartDate: Moment;
    jobPostingId: BigNumber;
    lastModifiedBy: string;
    lastModifiedDate: Moment;
    lastModifiedExtId: BigNumber;
    mergedFrom: string;
    newValue: string;
    oldValue: string;
    refType: string;
    revNumber: BigNumber;
    revType: number;
    source: string;
    jobApplication: JobApplicationType;
    lastModifiedByNav: UserType;
}
export declare namespace JobApplicationAudit {
    /**
     * Static representation of the [[changedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHANGED_BY: StringField<JobApplicationAudit>;
    /**
     * Static representation of the [[clobFieldRef]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOB_FIELD_REF: StringField<JobApplicationAudit>;
    /**
     * Static representation of the [[clobNewValueXml]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOB_NEW_VALUE_XML: StringField<JobApplicationAudit>;
    /**
     * Static representation of the [[clobOldValueXml]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOB_OLD_VALUE_XML: StringField<JobApplicationAudit>;
    /**
     * Static representation of the [[dateNewValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_NEW_VALUE: DateField<JobApplicationAudit>;
    /**
     * Static representation of the [[dateOldValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_OLD_VALUE: DateField<JobApplicationAudit>;
    /**
     * Static representation of the [[fieldId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_ID: StringField<JobApplicationAudit>;
    /**
     * Static representation of the [[fieldOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_ORDER_POS: BigNumberField<JobApplicationAudit>;
    /**
     * Static representation of the [[fieldType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_TYPE: StringField<JobApplicationAudit>;
    /**
     * Static representation of the [[jobPostEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_POST_END_DATE: DateField<JobApplicationAudit>;
    /**
     * Static representation of the [[jobPostStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_POST_START_DATE: DateField<JobApplicationAudit>;
    /**
     * Static representation of the [[jobPostingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_POSTING_ID: BigNumberField<JobApplicationAudit>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<JobApplicationAudit>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<JobApplicationAudit>;
    /**
     * Static representation of the [[lastModifiedExtId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_EXT_ID: BigNumberField<JobApplicationAudit>;
    /**
     * Static representation of the [[mergedFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MERGED_FROM: StringField<JobApplicationAudit>;
    /**
     * Static representation of the [[newValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEW_VALUE: StringField<JobApplicationAudit>;
    /**
     * Static representation of the [[oldValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OLD_VALUE: StringField<JobApplicationAudit>;
    /**
     * Static representation of the [[refType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REF_TYPE: StringField<JobApplicationAudit>;
    /**
     * Static representation of the [[revNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REV_NUMBER: BigNumberField<JobApplicationAudit>;
    /**
     * Static representation of the [[revType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REV_TYPE: NumberField<JobApplicationAudit>;
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE: StringField<JobApplicationAudit>;
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION: OneToOneLink<JobApplicationAudit, JobApplication>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<JobApplicationAudit, User>;
    /**
     * All fields of the JobApplicationAudit entity.
     */
    const _allFields: Array<StringField<JobApplicationAudit> | DateField<JobApplicationAudit> | BigNumberField<JobApplicationAudit> | NumberField<JobApplicationAudit> | OneToOneLink<JobApplicationAudit, JobApplication> | OneToOneLink<JobApplicationAudit, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationAudit>;
    /**
     * All key fields of the JobApplicationAudit entity.
     */
    const _keyFields: Array<Selectable<JobApplicationAudit>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationAudit.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationAudit>;
    };
}
//# sourceMappingURL=JobApplicationAudit.d.ts.map