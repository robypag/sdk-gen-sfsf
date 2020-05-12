import { JobRequisitionOperatorRequestBuilder } from './JobRequisitionOperatorRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobRequisitionOperator" of service "SFOData".
 */
export declare class JobRequisitionOperator extends Entity implements JobRequisitionOperatorType {
    /**
     * Technical entity name for JobRequisitionOperator.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobRequisitionOperator.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * AdminSelectedUserToBeRemoved.
     * @nullable
     */
    adminSelectedUserToBeRemoved?: boolean;
    /**
     * Operator email id.
     */
    email: string;
    /**
     * Operator fax.
     */
    fax: string;
    /**
     * Operator First Name.
     */
    firstName: string;
    /**
     * Is Admin Selected.
     */
    isAdminSelected: boolean;
    /**
     * Job Requisition Id.
     */
    jobReqId: BigNumber;
    /**
     * Operator Last Name.
     */
    lastName: string;
    /**
     * Job Requisition Id.
     */
    operatorRole: string;
    /**
     * Operator phone number.
     */
    phone: string;
    /**
     * Operator Username.
     */
    userName: string;
    /**
     * Operator Users Sys.
     */
    usersSysId: string;
    /**
     * One-to-one navigation property to the [[JobRequisition]] entity.
     */
    jobRequisition: JobRequisition;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userNav: User;
    /**
     * Returns an entity builder to construct instances `JobRequisitionOperator`.
     * @returns A builder that constructs instances of entity type `JobRequisitionOperator`.
     */
    static builder(): EntityBuilderType<JobRequisitionOperator, JobRequisitionOperatorTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobRequisitionOperator` entity type.
     * @returns A `JobRequisitionOperator` request builder.
     */
    static requestBuilder(): JobRequisitionOperatorRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionOperator`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobRequisitionOperator`.
     */
    static customField(fieldName: string): CustomField<JobRequisitionOperator>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JobRequisition, JobRequisitionType } from './JobRequisition';
import { User, UserType } from './User';
export interface JobRequisitionOperatorType {
    adminSelectedUserToBeRemoved?: boolean;
    email: string;
    fax: string;
    firstName: string;
    isAdminSelected: boolean;
    jobReqId: BigNumber;
    lastName: string;
    operatorRole: string;
    phone: string;
    userName: string;
    usersSysId: string;
    jobRequisition: JobRequisitionType;
    userNav: UserType;
}
export interface JobRequisitionOperatorTypeForceMandatory {
    adminSelectedUserToBeRemoved: boolean;
    email: string;
    fax: string;
    firstName: string;
    isAdminSelected: boolean;
    jobReqId: BigNumber;
    lastName: string;
    operatorRole: string;
    phone: string;
    userName: string;
    usersSysId: string;
    jobRequisition: JobRequisitionType;
    userNav: UserType;
}
export declare namespace JobRequisitionOperator {
    /**
     * Static representation of the [[adminSelectedUserToBeRemoved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADMIN_SELECTED_USER_TO_BE_REMOVED: BooleanField<JobRequisitionOperator>;
    /**
     * Static representation of the [[email]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL: StringField<JobRequisitionOperator>;
    /**
     * Static representation of the [[fax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX: StringField<JobRequisitionOperator>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: StringField<JobRequisitionOperator>;
    /**
     * Static representation of the [[isAdminSelected]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ADMIN_SELECTED: BooleanField<JobRequisitionOperator>;
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_ID: BigNumberField<JobRequisitionOperator>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: StringField<JobRequisitionOperator>;
    /**
     * Static representation of the [[operatorRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATOR_ROLE: StringField<JobRequisitionOperator>;
    /**
     * Static representation of the [[phone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE: StringField<JobRequisitionOperator>;
    /**
     * Static representation of the [[userName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAME: StringField<JobRequisitionOperator>;
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID: StringField<JobRequisitionOperator>;
    /**
     * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQUISITION: OneToOneLink<JobRequisitionOperator, JobRequisition>;
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAV: OneToOneLink<JobRequisitionOperator, User>;
    /**
     * All fields of the JobRequisitionOperator entity.
     */
    const _allFields: Array<BooleanField<JobRequisitionOperator> | StringField<JobRequisitionOperator> | BigNumberField<JobRequisitionOperator> | OneToOneLink<JobRequisitionOperator, JobRequisition> | OneToOneLink<JobRequisitionOperator, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobRequisitionOperator>;
    /**
     * All key fields of the JobRequisitionOperator entity.
     */
    const _keyFields: Array<Selectable<JobRequisitionOperator>>;
    /**
     * Mapping of all key field names to the respective static field property JobRequisitionOperator.
     */
    const _keys: {
        [keys: string]: Selectable<JobRequisitionOperator>;
    };
}
//# sourceMappingURL=JobRequisitionOperator.d.ts.map