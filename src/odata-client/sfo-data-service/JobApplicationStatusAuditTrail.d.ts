import { JobApplicationStatusAuditTrailRequestBuilder } from './JobApplicationStatusAuditTrailRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplicationStatusAuditTrail" of service "SFOData".
 */
export declare class JobApplicationStatusAuditTrail extends Entity implements JobApplicationStatusAuditTrailType {
    /**
     * Technical entity name for JobApplicationStatusAuditTrail.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationStatusAuditTrail.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Created By.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created Date.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Last Modified By.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Last modified proxy user.
     * @nullable
     */
    lastModifiedProxyUser?: string;
    /**
     * Rev Number.
     */
    revNumber: BigNumber;
    /**
     * Rev Type.
     */
    revType: number;
    /**
     * Skipped Status.
     * @nullable
     */
    skippedStatus?: number;
    /**
     * Status Comments.
     * @nullable
     */
    statusComments?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[JobApplicationStatus]] entity.
     */
    jobAppStatus: JobApplicationStatus;
    /**
     * One-to-one navigation property to the [[JobApplication]] entity.
     */
    jobApplication: JobApplication;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedProxyUserNav: User;
    /**
     * Returns an entity builder to construct instances `JobApplicationStatusAuditTrail`.
     * @returns A builder that constructs instances of entity type `JobApplicationStatusAuditTrail`.
     */
    static builder(): EntityBuilderType<JobApplicationStatusAuditTrail, JobApplicationStatusAuditTrailTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationStatusAuditTrail` entity type.
     * @returns A `JobApplicationStatusAuditTrail` request builder.
     */
    static requestBuilder(): JobApplicationStatusAuditTrailRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationStatusAuditTrail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationStatusAuditTrail`.
     */
    static customField(fieldName: string): CustomField<JobApplicationStatusAuditTrail>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { JobApplicationStatus, JobApplicationStatusType } from './JobApplicationStatus';
import { JobApplication, JobApplicationType } from './JobApplication';
export interface JobApplicationStatusAuditTrailType {
    createdBy?: string;
    createdDateTime?: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedProxyUser?: string;
    revNumber: BigNumber;
    revType: number;
    skippedStatus?: number;
    statusComments?: string;
    createdByNav: UserType;
    jobAppStatus: JobApplicationStatusType;
    jobApplication: JobApplicationType;
    lastModifiedByNav: UserType;
    lastModifiedProxyUserNav: UserType;
}
export interface JobApplicationStatusAuditTrailTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedProxyUser: string;
    revNumber: BigNumber;
    revType: number;
    skippedStatus: number;
    statusComments: string;
    createdByNav: UserType;
    jobAppStatus: JobApplicationStatusType;
    jobApplication: JobApplicationType;
    lastModifiedByNav: UserType;
    lastModifiedProxyUserNav: UserType;
}
export declare namespace JobApplicationStatusAuditTrail {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<JobApplicationStatusAuditTrail>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<JobApplicationStatusAuditTrail>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<JobApplicationStatusAuditTrail>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationStatusAuditTrail>;
    /**
     * Static representation of the [[lastModifiedProxyUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_PROXY_USER: StringField<JobApplicationStatusAuditTrail>;
    /**
     * Static representation of the [[revNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REV_NUMBER: BigNumberField<JobApplicationStatusAuditTrail>;
    /**
     * Static representation of the [[revType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REV_TYPE: NumberField<JobApplicationStatusAuditTrail>;
    /**
     * Static representation of the [[skippedStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SKIPPED_STATUS: NumberField<JobApplicationStatusAuditTrail>;
    /**
     * Static representation of the [[statusComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_COMMENTS: StringField<JobApplicationStatusAuditTrail>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<JobApplicationStatusAuditTrail, User>;
    /**
     * Static representation of the one-to-one navigation property [[jobAppStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APP_STATUS: OneToOneLink<JobApplicationStatusAuditTrail, JobApplicationStatus>;
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION: OneToOneLink<JobApplicationStatusAuditTrail, JobApplication>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<JobApplicationStatusAuditTrail, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedProxyUserNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_PROXY_USER_NAV: OneToOneLink<JobApplicationStatusAuditTrail, User>;
    /**
     * All fields of the JobApplicationStatusAuditTrail entity.
     */
    const _allFields: Array<StringField<JobApplicationStatusAuditTrail> | DateField<JobApplicationStatusAuditTrail> | BigNumberField<JobApplicationStatusAuditTrail> | NumberField<JobApplicationStatusAuditTrail> | OneToOneLink<JobApplicationStatusAuditTrail, User> | OneToOneLink<JobApplicationStatusAuditTrail, JobApplicationStatus> | OneToOneLink<JobApplicationStatusAuditTrail, JobApplication>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationStatusAuditTrail>;
    /**
     * All key fields of the JobApplicationStatusAuditTrail entity.
     */
    const _keyFields: Array<Selectable<JobApplicationStatusAuditTrail>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationStatusAuditTrail.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationStatusAuditTrail>;
    };
}
//# sourceMappingURL=JobApplicationStatusAuditTrail.d.ts.map