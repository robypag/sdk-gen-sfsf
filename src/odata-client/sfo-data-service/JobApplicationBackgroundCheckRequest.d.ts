import { JobApplicationBackgroundCheckRequestRequestBuilder } from './JobApplicationBackgroundCheckRequestRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplicationBackgroundCheckRequest" of service "SFOData".
 */
export declare class JobApplicationBackgroundCheckRequest extends Entity implements JobApplicationBackgroundCheckRequestType {
    /**
     * Technical entity name for JobApplicationBackgroundCheckRequest.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationBackgroundCheckRequest.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Application ID.
     */
    applicationId: BigNumber;
    /**
     * Created By.
     */
    createdByUser: string;
    /**
     * Created Date.
     */
    createdDateTime: Moment;
    /**
     * Last Modified Date.
     */
    lastModifiedDateTime: Moment;
    /**
     * Order Status.
     * @nullable
     */
    orderStatus?: string;
    /**
     * Background Check Request ID.
     */
    requestId: BigNumber;
    /**
     * Response Code.
     * @nullable
     */
    responseCode?: string;
    /**
     * Response Detail.
     * @nullable
     */
    responseDetail?: string;
    /**
     * Vendor Code.
     */
    vendorCode: string;
    /**
     * Vendor Order Number.
     * @nullable
     */
    vendorOrderNo?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByUserNav: User;
    /**
     * One-to-one navigation property to the [[JobApplication]] entity.
     */
    jobApplication: JobApplication;
    /**
     * Returns an entity builder to construct instances `JobApplicationBackgroundCheckRequest`.
     * @returns A builder that constructs instances of entity type `JobApplicationBackgroundCheckRequest`.
     */
    static builder(): EntityBuilderType<JobApplicationBackgroundCheckRequest, JobApplicationBackgroundCheckRequestTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationBackgroundCheckRequest` entity type.
     * @returns A `JobApplicationBackgroundCheckRequest` request builder.
     */
    static requestBuilder(): JobApplicationBackgroundCheckRequestRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationBackgroundCheckRequest`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationBackgroundCheckRequest`.
     */
    static customField(fieldName: string): CustomField<JobApplicationBackgroundCheckRequest>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { JobApplication, JobApplicationType } from './JobApplication';
export interface JobApplicationBackgroundCheckRequestType {
    applicationId: BigNumber;
    createdByUser: string;
    createdDateTime: Moment;
    lastModifiedDateTime: Moment;
    orderStatus?: string;
    requestId: BigNumber;
    responseCode?: string;
    responseDetail?: string;
    vendorCode: string;
    vendorOrderNo?: string;
    createdByUserNav: UserType;
    jobApplication: JobApplicationType;
}
export interface JobApplicationBackgroundCheckRequestTypeForceMandatory {
    applicationId: BigNumber;
    createdByUser: string;
    createdDateTime: Moment;
    lastModifiedDateTime: Moment;
    orderStatus: string;
    requestId: BigNumber;
    responseCode: string;
    responseDetail: string;
    vendorCode: string;
    vendorOrderNo: string;
    createdByUserNav: UserType;
    jobApplication: JobApplicationType;
}
export declare namespace JobApplicationBackgroundCheckRequest {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: BigNumberField<JobApplicationBackgroundCheckRequest>;
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER: StringField<JobApplicationBackgroundCheckRequest>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<JobApplicationBackgroundCheckRequest>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationBackgroundCheckRequest>;
    /**
     * Static representation of the [[orderStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER_STATUS: StringField<JobApplicationBackgroundCheckRequest>;
    /**
     * Static representation of the [[requestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUEST_ID: BigNumberField<JobApplicationBackgroundCheckRequest>;
    /**
     * Static representation of the [[responseCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSE_CODE: StringField<JobApplicationBackgroundCheckRequest>;
    /**
     * Static representation of the [[responseDetail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSE_DETAIL: StringField<JobApplicationBackgroundCheckRequest>;
    /**
     * Static representation of the [[vendorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_CODE: StringField<JobApplicationBackgroundCheckRequest>;
    /**
     * Static representation of the [[vendorOrderNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_ORDER_NO: StringField<JobApplicationBackgroundCheckRequest>;
    /**
     * Static representation of the one-to-one navigation property [[createdByUserNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER_NAV: OneToOneLink<JobApplicationBackgroundCheckRequest, User>;
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION: OneToOneLink<JobApplicationBackgroundCheckRequest, JobApplication>;
    /**
     * All fields of the JobApplicationBackgroundCheckRequest entity.
     */
    const _allFields: Array<BigNumberField<JobApplicationBackgroundCheckRequest> | StringField<JobApplicationBackgroundCheckRequest> | DateField<JobApplicationBackgroundCheckRequest> | OneToOneLink<JobApplicationBackgroundCheckRequest, User> | OneToOneLink<JobApplicationBackgroundCheckRequest, JobApplication>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationBackgroundCheckRequest>;
    /**
     * All key fields of the JobApplicationBackgroundCheckRequest entity.
     */
    const _keyFields: Array<Selectable<JobApplicationBackgroundCheckRequest>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationBackgroundCheckRequest.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationBackgroundCheckRequest>;
    };
}
//# sourceMappingURL=JobApplicationBackgroundCheckRequest.d.ts.map