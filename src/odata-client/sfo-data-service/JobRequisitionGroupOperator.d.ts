import { JobRequisitionGroupOperatorRequestBuilder } from './JobRequisitionGroupOperatorRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobRequisitionGroupOperator" of service "SFOData".
 */
export declare class JobRequisitionGroupOperator extends Entity implements JobRequisitionGroupOperatorType {
    /**
     * Technical entity name for JobRequisitionGroupOperator.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobRequisitionGroupOperator.
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
    adminSelectedGroupToBeRemoved?: boolean;
    /**
     * Is Admin Selected.
     */
    isAdminSelected: boolean;
    /**
     * Is Disabled.
     * @nullable
     */
    isDisabled?: boolean;
    /**
     * Job Requisition Id.
     */
    jobReqId: BigNumber;
    /**
     * Job Requisition Id.
     */
    operatorRole: string;
    /**
     * User Group Id.
     */
    userGroupId: BigNumber;
    /**
     * Operator First Name.
     */
    userGroupName: string;
    /**
     * One-to-one navigation property to the [[JobRequisition]] entity.
     */
    jobRequisition: JobRequisition;
    /**
     * Returns an entity builder to construct instances `JobRequisitionGroupOperator`.
     * @returns A builder that constructs instances of entity type `JobRequisitionGroupOperator`.
     */
    static builder(): EntityBuilderType<JobRequisitionGroupOperator, JobRequisitionGroupOperatorTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobRequisitionGroupOperator` entity type.
     * @returns A `JobRequisitionGroupOperator` request builder.
     */
    static requestBuilder(): JobRequisitionGroupOperatorRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionGroupOperator`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobRequisitionGroupOperator`.
     */
    static customField(fieldName: string): CustomField<JobRequisitionGroupOperator>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JobRequisition, JobRequisitionType } from './JobRequisition';
export interface JobRequisitionGroupOperatorType {
    adminSelectedGroupToBeRemoved?: boolean;
    isAdminSelected: boolean;
    isDisabled?: boolean;
    jobReqId: BigNumber;
    operatorRole: string;
    userGroupId: BigNumber;
    userGroupName: string;
    jobRequisition: JobRequisitionType;
}
export interface JobRequisitionGroupOperatorTypeForceMandatory {
    adminSelectedGroupToBeRemoved: boolean;
    isAdminSelected: boolean;
    isDisabled: boolean;
    jobReqId: BigNumber;
    operatorRole: string;
    userGroupId: BigNumber;
    userGroupName: string;
    jobRequisition: JobRequisitionType;
}
export declare namespace JobRequisitionGroupOperator {
    /**
     * Static representation of the [[adminSelectedGroupToBeRemoved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADMIN_SELECTED_GROUP_TO_BE_REMOVED: BooleanField<JobRequisitionGroupOperator>;
    /**
     * Static representation of the [[isAdminSelected]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ADMIN_SELECTED: BooleanField<JobRequisitionGroupOperator>;
    /**
     * Static representation of the [[isDisabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DISABLED: BooleanField<JobRequisitionGroupOperator>;
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_ID: BigNumberField<JobRequisitionGroupOperator>;
    /**
     * Static representation of the [[operatorRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATOR_ROLE: StringField<JobRequisitionGroupOperator>;
    /**
     * Static representation of the [[userGroupId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_GROUP_ID: BigNumberField<JobRequisitionGroupOperator>;
    /**
     * Static representation of the [[userGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_GROUP_NAME: StringField<JobRequisitionGroupOperator>;
    /**
     * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQUISITION: OneToOneLink<JobRequisitionGroupOperator, JobRequisition>;
    /**
     * All fields of the JobRequisitionGroupOperator entity.
     */
    const _allFields: Array<BooleanField<JobRequisitionGroupOperator> | BigNumberField<JobRequisitionGroupOperator> | StringField<JobRequisitionGroupOperator> | OneToOneLink<JobRequisitionGroupOperator, JobRequisition>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobRequisitionGroupOperator>;
    /**
     * All key fields of the JobRequisitionGroupOperator entity.
     */
    const _keyFields: Array<Selectable<JobRequisitionGroupOperator>>;
    /**
     * Mapping of all key field names to the respective static field property JobRequisitionGroupOperator.
     */
    const _keys: {
        [keys: string]: Selectable<JobRequisitionGroupOperator>;
    };
}
//# sourceMappingURL=JobRequisitionGroupOperator.d.ts.map