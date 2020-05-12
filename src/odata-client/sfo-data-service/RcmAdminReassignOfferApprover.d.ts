import { RcmAdminReassignOfferApproverRequestBuilder } from './RcmAdminReassignOfferApproverRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "RCMAdminReassignOfferApprover" of service "SFOData".
 */
export declare class RcmAdminReassignOfferApprover extends Entity implements RcmAdminReassignOfferApproverType {
    /**
     * Technical entity name for RcmAdminReassignOfferApprover.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RcmAdminReassignOfferApprover.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * applicationId.
     */
    applicationId: BigNumber;
    /**
     * candidateName.
     * @nullable
     */
    candidateName?: string;
    /**
     * currUserId.
     */
    currUserId: string;
    /**
     * jobReqId.
     * @nullable
     */
    jobReqId?: BigNumber;
    /**
     * jobReqTitle.
     * @nullable
     */
    jobReqTitle?: string;
    /**
     * offerDetailId.
     */
    offerDetailId: BigNumber;
    /**
     * targetUserId.
     * @nullable
     */
    targetUserId?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    currUser: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    targetUser: User;
    /**
     * Returns an entity builder to construct instances `RcmAdminReassignOfferApprover`.
     * @returns A builder that constructs instances of entity type `RcmAdminReassignOfferApprover`.
     */
    static builder(): EntityBuilderType<RcmAdminReassignOfferApprover, RcmAdminReassignOfferApproverTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `RcmAdminReassignOfferApprover` entity type.
     * @returns A `RcmAdminReassignOfferApprover` request builder.
     */
    static requestBuilder(): RcmAdminReassignOfferApproverRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RcmAdminReassignOfferApprover`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RcmAdminReassignOfferApprover`.
     */
    static customField(fieldName: string): CustomField<RcmAdminReassignOfferApprover>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface RcmAdminReassignOfferApproverType {
    applicationId: BigNumber;
    candidateName?: string;
    currUserId: string;
    jobReqId?: BigNumber;
    jobReqTitle?: string;
    offerDetailId: BigNumber;
    targetUserId?: string;
    currUser: UserType;
    targetUser: UserType;
}
export interface RcmAdminReassignOfferApproverTypeForceMandatory {
    applicationId: BigNumber;
    candidateName: string;
    currUserId: string;
    jobReqId: BigNumber;
    jobReqTitle: string;
    offerDetailId: BigNumber;
    targetUserId: string;
    currUser: UserType;
    targetUser: UserType;
}
export declare namespace RcmAdminReassignOfferApprover {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: BigNumberField<RcmAdminReassignOfferApprover>;
    /**
     * Static representation of the [[candidateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_NAME: StringField<RcmAdminReassignOfferApprover>;
    /**
     * Static representation of the [[currUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURR_USER_ID: StringField<RcmAdminReassignOfferApprover>;
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_ID: BigNumberField<RcmAdminReassignOfferApprover>;
    /**
     * Static representation of the [[jobReqTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_TITLE: StringField<RcmAdminReassignOfferApprover>;
    /**
     * Static representation of the [[offerDetailId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFER_DETAIL_ID: BigNumberField<RcmAdminReassignOfferApprover>;
    /**
     * Static representation of the [[targetUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGET_USER_ID: StringField<RcmAdminReassignOfferApprover>;
    /**
     * Static representation of the one-to-one navigation property [[currUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURR_USER: OneToOneLink<RcmAdminReassignOfferApprover, User>;
    /**
     * Static representation of the one-to-one navigation property [[targetUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGET_USER: OneToOneLink<RcmAdminReassignOfferApprover, User>;
    /**
     * All fields of the RcmAdminReassignOfferApprover entity.
     */
    const _allFields: Array<BigNumberField<RcmAdminReassignOfferApprover> | StringField<RcmAdminReassignOfferApprover> | OneToOneLink<RcmAdminReassignOfferApprover, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<RcmAdminReassignOfferApprover>;
    /**
     * All key fields of the RcmAdminReassignOfferApprover entity.
     */
    const _keyFields: Array<Selectable<RcmAdminReassignOfferApprover>>;
    /**
     * Mapping of all key field names to the respective static field property RcmAdminReassignOfferApprover.
     */
    const _keys: {
        [keys: string]: Selectable<RcmAdminReassignOfferApprover>;
    };
}
//# sourceMappingURL=RcmAdminReassignOfferApprover.d.ts.map