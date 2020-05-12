import { JobReqFwdCandidatesRequestBuilder } from './JobReqFwdCandidatesRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobReqFwdCandidates" of service "SFOData".
 */
export declare class JobReqFwdCandidates extends Entity implements JobReqFwdCandidatesType {
    /**
     * Technical entity name for JobReqFwdCandidates.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobReqFwdCandidates.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Candidate Id.
     */
    candidateId: BigNumber;
    /**
     * Candidate Site Id.
     * @nullable
     */
    candidateSiteid?: BigNumber;
    /**
     * Created Date.
     */
    createdDate: Moment;
    /**
     * Expiration Date.
     * @nullable
     */
    expirationDate?: Moment;
    /**
     * External Recruiter Id.
     * @nullable
     */
    extRecruiterId?: BigNumber;
    /**
     * Job Board Name.
     * @nullable
     */
    jobBoardName?: string;
    /**
     * Job Requisition Id.
     */
    jobReqId: BigNumber;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * RCM App Status Set Item Id.
     * @nullable
     */
    rcmAppStatusSetItemId?: BigNumber;
    /**
     * Referral Id.
     */
    referralId: BigNumber;
    /**
     * Referral key.
     * @nullable
     */
    referralKey?: string;
    /**
     * Referred By.
     * @nullable
     */
    referredBy?: string;
    /**
     * Status.
     * @nullable
     */
    status?: string;
    /**
     * Referral Type.
     */
    type: string;
    /**
     * One-to-many navigation property to the [[Candidate]] entity.
     */
    candidate: Candidate[];
    /**
     * One-to-one navigation property to the [[JobRequisition]] entity.
     */
    jobRequisition: JobRequisition;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    referredByNav: User;
    /**
     * Returns an entity builder to construct instances `JobReqFwdCandidates`.
     * @returns A builder that constructs instances of entity type `JobReqFwdCandidates`.
     */
    static builder(): EntityBuilderType<JobReqFwdCandidates, JobReqFwdCandidatesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobReqFwdCandidates` entity type.
     * @returns A `JobReqFwdCandidates` request builder.
     */
    static requestBuilder(): JobReqFwdCandidatesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqFwdCandidates`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobReqFwdCandidates`.
     */
    static customField(fieldName: string): CustomField<JobReqFwdCandidates>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Candidate, CandidateType } from './Candidate';
import { JobRequisition, JobRequisitionType } from './JobRequisition';
import { User, UserType } from './User';
export interface JobReqFwdCandidatesType {
    candidateId: BigNumber;
    candidateSiteid?: BigNumber;
    createdDate: Moment;
    expirationDate?: Moment;
    extRecruiterId?: BigNumber;
    jobBoardName?: string;
    jobReqId: BigNumber;
    lastModifiedDate: Moment;
    rcmAppStatusSetItemId?: BigNumber;
    referralId: BigNumber;
    referralKey?: string;
    referredBy?: string;
    status?: string;
    type: string;
    candidate: CandidateType[];
    jobRequisition: JobRequisitionType;
    referredByNav: UserType;
}
export interface JobReqFwdCandidatesTypeForceMandatory {
    candidateId: BigNumber;
    candidateSiteid: BigNumber;
    createdDate: Moment;
    expirationDate: Moment;
    extRecruiterId: BigNumber;
    jobBoardName: string;
    jobReqId: BigNumber;
    lastModifiedDate: Moment;
    rcmAppStatusSetItemId: BigNumber;
    referralId: BigNumber;
    referralKey: string;
    referredBy: string;
    status: string;
    type: string;
    candidate: CandidateType[];
    jobRequisition: JobRequisitionType;
    referredByNav: UserType;
}
export declare namespace JobReqFwdCandidates {
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_ID: BigNumberField<JobReqFwdCandidates>;
    /**
     * Static representation of the [[candidateSiteid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_SITEID: BigNumberField<JobReqFwdCandidates>;
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE: DateField<JobReqFwdCandidates>;
    /**
     * Static representation of the [[expirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPIRATION_DATE: DateField<JobReqFwdCandidates>;
    /**
     * Static representation of the [[extRecruiterId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXT_RECRUITER_ID: BigNumberField<JobReqFwdCandidates>;
    /**
     * Static representation of the [[jobBoardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_BOARD_NAME: StringField<JobReqFwdCandidates>;
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_ID: BigNumberField<JobReqFwdCandidates>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<JobReqFwdCandidates>;
    /**
     * Static representation of the [[rcmAppStatusSetItemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RCM_APP_STATUS_SET_ITEM_ID: BigNumberField<JobReqFwdCandidates>;
    /**
     * Static representation of the [[referralId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERRAL_ID: BigNumberField<JobReqFwdCandidates>;
    /**
     * Static representation of the [[referralKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERRAL_KEY: StringField<JobReqFwdCandidates>;
    /**
     * Static representation of the [[referredBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERRED_BY: StringField<JobReqFwdCandidates>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<JobReqFwdCandidates>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<JobReqFwdCandidates>;
    /**
     * Static representation of the one-to-many navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE: Link<JobReqFwdCandidates, Candidate>;
    /**
     * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQUISITION: OneToOneLink<JobReqFwdCandidates, JobRequisition>;
    /**
     * Static representation of the one-to-one navigation property [[referredByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERRED_BY_NAV: OneToOneLink<JobReqFwdCandidates, User>;
    /**
     * All fields of the JobReqFwdCandidates entity.
     */
    const _allFields: Array<BigNumberField<JobReqFwdCandidates> | DateField<JobReqFwdCandidates> | StringField<JobReqFwdCandidates> | Link<JobReqFwdCandidates, Candidate> | OneToOneLink<JobReqFwdCandidates, JobRequisition> | OneToOneLink<JobReqFwdCandidates, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobReqFwdCandidates>;
    /**
     * All key fields of the JobReqFwdCandidates entity.
     */
    const _keyFields: Array<Selectable<JobReqFwdCandidates>>;
    /**
     * Mapping of all key field names to the respective static field property JobReqFwdCandidates.
     */
    const _keys: {
        [keys: string]: Selectable<JobReqFwdCandidates>;
    };
}
//# sourceMappingURL=JobReqFwdCandidates.d.ts.map