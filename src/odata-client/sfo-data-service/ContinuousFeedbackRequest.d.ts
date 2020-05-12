import { ContinuousFeedbackRequestRequestBuilder } from './ContinuousFeedbackRequestRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ContinuousFeedbackRequest" of service "SFOData".
 */
export declare class ContinuousFeedbackRequest extends Entity implements ContinuousFeedbackRequestType {
    /**
     * Technical entity name for ContinuousFeedbackRequest.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ContinuousFeedbackRequest.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * feedbackId.
     * @nullable
     */
    feedbackId?: BigNumber;
    /**
     * requestId.
     */
    requestId: BigNumber;
    /**
     * requestText.
     * Maximum length: 4000.
     */
    requestText: string;
    /**
     * requestedDate.
     * @nullable
     */
    requestedDate?: Moment;
    /**
     * requestedForAchievementId.
     */
    requestedForAchievementId: string;
    /**
     * requestedForActivityId.
     */
    requestedForActivityId: string;
    /**
     * requesteeId.
     */
    requesteeId: string;
    /**
     * requesterId.
     */
    requesterId: string;
    /**
     * subjectUserId.
     */
    subjectUserId: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    feedbackRequestToFeedbackRequesteeNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    feedbackRequestToFeedbackRequesterNav: User;
    /**
     * One-to-one navigation property to the [[ContinuousFeedback]] entity.
     */
    feedbackRequestToFeedbackResponseNav: ContinuousFeedback;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    feedbackRequestToSubjectUserNav: User;
    /**
     * Returns an entity builder to construct instances `ContinuousFeedbackRequest`.
     * @returns A builder that constructs instances of entity type `ContinuousFeedbackRequest`.
     */
    static builder(): EntityBuilderType<ContinuousFeedbackRequest, ContinuousFeedbackRequestTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ContinuousFeedbackRequest` entity type.
     * @returns A `ContinuousFeedbackRequest` request builder.
     */
    static requestBuilder(): ContinuousFeedbackRequestRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ContinuousFeedbackRequest`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ContinuousFeedbackRequest`.
     */
    static customField(fieldName: string): CustomField<ContinuousFeedbackRequest>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { ContinuousFeedback, ContinuousFeedbackType } from './ContinuousFeedback';
export interface ContinuousFeedbackRequestType {
    feedbackId?: BigNumber;
    requestId: BigNumber;
    requestText: string;
    requestedDate?: Moment;
    requestedForAchievementId: string;
    requestedForActivityId: string;
    requesteeId: string;
    requesterId: string;
    subjectUserId: string;
    feedbackRequestToFeedbackRequesteeNav: UserType;
    feedbackRequestToFeedbackRequesterNav: UserType;
    feedbackRequestToFeedbackResponseNav: ContinuousFeedbackType;
    feedbackRequestToSubjectUserNav: UserType;
}
export interface ContinuousFeedbackRequestTypeForceMandatory {
    feedbackId: BigNumber;
    requestId: BigNumber;
    requestText: string;
    requestedDate: Moment;
    requestedForAchievementId: string;
    requestedForActivityId: string;
    requesteeId: string;
    requesterId: string;
    subjectUserId: string;
    feedbackRequestToFeedbackRequesteeNav: UserType;
    feedbackRequestToFeedbackRequesterNav: UserType;
    feedbackRequestToFeedbackResponseNav: ContinuousFeedbackType;
    feedbackRequestToSubjectUserNav: UserType;
}
export declare namespace ContinuousFeedbackRequest {
    /**
     * Static representation of the [[feedbackId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_ID: BigNumberField<ContinuousFeedbackRequest>;
    /**
     * Static representation of the [[requestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUEST_ID: BigNumberField<ContinuousFeedbackRequest>;
    /**
     * Static representation of the [[requestText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUEST_TEXT: StringField<ContinuousFeedbackRequest>;
    /**
     * Static representation of the [[requestedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTED_DATE: DateField<ContinuousFeedbackRequest>;
    /**
     * Static representation of the [[requestedForAchievementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTED_FOR_ACHIEVEMENT_ID: StringField<ContinuousFeedbackRequest>;
    /**
     * Static representation of the [[requestedForActivityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTED_FOR_ACTIVITY_ID: StringField<ContinuousFeedbackRequest>;
    /**
     * Static representation of the [[requesteeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTEE_ID: StringField<ContinuousFeedbackRequest>;
    /**
     * Static representation of the [[requesterId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUESTER_ID: StringField<ContinuousFeedbackRequest>;
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_USER_ID: StringField<ContinuousFeedbackRequest>;
    /**
     * Static representation of the one-to-one navigation property [[feedbackRequestToFeedbackRequesteeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_REQUEST_TO_FEEDBACK_REQUESTEE_NAV: OneToOneLink<ContinuousFeedbackRequest, User>;
    /**
     * Static representation of the one-to-one navigation property [[feedbackRequestToFeedbackRequesterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_REQUEST_TO_FEEDBACK_REQUESTER_NAV: OneToOneLink<ContinuousFeedbackRequest, User>;
    /**
     * Static representation of the one-to-one navigation property [[feedbackRequestToFeedbackResponseNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_REQUEST_TO_FEEDBACK_RESPONSE_NAV: OneToOneLink<ContinuousFeedbackRequest, ContinuousFeedback>;
    /**
     * Static representation of the one-to-one navigation property [[feedbackRequestToSubjectUserNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_REQUEST_TO_SUBJECT_USER_NAV: OneToOneLink<ContinuousFeedbackRequest, User>;
    /**
     * All fields of the ContinuousFeedbackRequest entity.
     */
    const _allFields: Array<BigNumberField<ContinuousFeedbackRequest> | StringField<ContinuousFeedbackRequest> | DateField<ContinuousFeedbackRequest> | OneToOneLink<ContinuousFeedbackRequest, User> | OneToOneLink<ContinuousFeedbackRequest, ContinuousFeedback>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ContinuousFeedbackRequest>;
    /**
     * All key fields of the ContinuousFeedbackRequest entity.
     */
    const _keyFields: Array<Selectable<ContinuousFeedbackRequest>>;
    /**
     * Mapping of all key field names to the respective static field property ContinuousFeedbackRequest.
     */
    const _keys: {
        [keys: string]: Selectable<ContinuousFeedbackRequest>;
    };
}
//# sourceMappingURL=ContinuousFeedbackRequest.d.ts.map