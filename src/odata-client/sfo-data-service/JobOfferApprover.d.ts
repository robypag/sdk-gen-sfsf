import { JobOfferApproverRequestBuilder } from './JobOfferApproverRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobOfferApprover" of service "SFOData".
 */
export declare class JobOfferApprover extends Entity implements JobOfferApproverType {
    /**
     * Technical entity name for JobOfferApprover.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobOfferApprover.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Approval Step Id.
     * @nullable
     */
    approvalStepId?: string;
    /**
     * Approver Action.
     * @nullable
     */
    approverAction?: string;
    /**
     * approverActionDate.
     * @nullable
     */
    approverActionDate?: Moment;
    /**
     * Approver First Name.
     */
    approverFirstName: string;
    /**
     * Approver Last Name.
     */
    approverLastName: string;
    /**
     * Approver Order.
     */
    approverOrder: BigNumber;
    /**
     * Comment.
     * @nullable
     */
    comment?: string;
    /**
     * Created By.
     */
    createdBy: string;
    /**
     * Created Date.
     */
    createdDate: Moment;
    /**
     * Last Modified By.
     */
    lastModifiedBy: string;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * Offer Approver Id.
     */
    offerApprovalId: BigNumber;
    /**
     * Offer Approver Id.
     */
    offerApproverId: BigNumber;
    /**
     * Username.
     */
    username: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[JobOffer]] entity.
     */
    offerApproval: JobOffer;
    /**
     * Returns an entity builder to construct instances `JobOfferApprover`.
     * @returns A builder that constructs instances of entity type `JobOfferApprover`.
     */
    static builder(): EntityBuilderType<JobOfferApprover, JobOfferApproverTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobOfferApprover` entity type.
     * @returns A `JobOfferApprover` request builder.
     */
    static requestBuilder(): JobOfferApproverRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobOfferApprover`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobOfferApprover`.
     */
    static customField(fieldName: string): CustomField<JobOfferApprover>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { JobOffer, JobOfferType } from './JobOffer';
export interface JobOfferApproverType {
    approvalStepId?: string;
    approverAction?: string;
    approverActionDate?: Moment;
    approverFirstName: string;
    approverLastName: string;
    approverOrder: BigNumber;
    comment?: string;
    createdBy: string;
    createdDate: Moment;
    lastModifiedBy: string;
    lastModifiedDate: Moment;
    offerApprovalId: BigNumber;
    offerApproverId: BigNumber;
    username: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    offerApproval: JobOfferType;
}
export interface JobOfferApproverTypeForceMandatory {
    approvalStepId: string;
    approverAction: string;
    approverActionDate: Moment;
    approverFirstName: string;
    approverLastName: string;
    approverOrder: BigNumber;
    comment: string;
    createdBy: string;
    createdDate: Moment;
    lastModifiedBy: string;
    lastModifiedDate: Moment;
    offerApprovalId: BigNumber;
    offerApproverId: BigNumber;
    username: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    offerApproval: JobOfferType;
}
export declare namespace JobOfferApprover {
    /**
     * Static representation of the [[approvalStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_STEP_ID: StringField<JobOfferApprover>;
    /**
     * Static representation of the [[approverAction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER_ACTION: StringField<JobOfferApprover>;
    /**
     * Static representation of the [[approverActionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER_ACTION_DATE: DateField<JobOfferApprover>;
    /**
     * Static representation of the [[approverFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER_FIRST_NAME: StringField<JobOfferApprover>;
    /**
     * Static representation of the [[approverLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER_LAST_NAME: StringField<JobOfferApprover>;
    /**
     * Static representation of the [[approverOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER_ORDER: BigNumberField<JobOfferApprover>;
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT: StringField<JobOfferApprover>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<JobOfferApprover>;
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE: DateField<JobOfferApprover>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<JobOfferApprover>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<JobOfferApprover>;
    /**
     * Static representation of the [[offerApprovalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFER_APPROVAL_ID: BigNumberField<JobOfferApprover>;
    /**
     * Static representation of the [[offerApproverId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFER_APPROVER_ID: BigNumberField<JobOfferApprover>;
    /**
     * Static representation of the [[username]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERNAME: StringField<JobOfferApprover>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<JobOfferApprover, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<JobOfferApprover, User>;
    /**
     * Static representation of the one-to-one navigation property [[offerApproval]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFER_APPROVAL: OneToOneLink<JobOfferApprover, JobOffer>;
    /**
     * All fields of the JobOfferApprover entity.
     */
    const _allFields: Array<StringField<JobOfferApprover> | DateField<JobOfferApprover> | BigNumberField<JobOfferApprover> | OneToOneLink<JobOfferApprover, User> | OneToOneLink<JobOfferApprover, JobOffer>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobOfferApprover>;
    /**
     * All key fields of the JobOfferApprover entity.
     */
    const _keyFields: Array<Selectable<JobOfferApprover>>;
    /**
     * Mapping of all key field names to the respective static field property JobOfferApprover.
     */
    const _keys: {
        [keys: string]: Selectable<JobOfferApprover>;
    };
}
//# sourceMappingURL=JobOfferApprover.d.ts.map