import { ContinuousFeedbackRequestBuilder } from './ContinuousFeedbackRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ContinuousFeedback" of service "SFOData".
 */
export declare class ContinuousFeedback extends Entity implements ContinuousFeedbackType {
    /**
     * Technical entity name for ContinuousFeedback.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ContinuousFeedback.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * achievementId.
     * @nullable
     */
    achievementId?: string;
    /**
     * activityId.
     * @nullable
     */
    activityId?: string;
    /**
     * dateReceived.
     * @nullable
     */
    dateReceived?: Moment;
    /**
     * feedbackId.
     */
    feedbackId: BigNumber;
    /**
     * feedbackMessage.
     */
    feedbackMessage: string;
    /**
     * feedbackRequestId.
     * @nullable
     */
    feedbackRequestId?: BigNumber;
    /**
     * senderUserId.
     */
    senderUserId: string;
    /**
     * subjectUserId.
     */
    subjectUserId: string;
    /**
     * visibleToManager.
     * @nullable
     */
    visibleToManager?: boolean;
    /**
     * One-to-one navigation property to the [[ContinuousFeedbackRequest]] entity.
     */
    continuousFeedbackToContinuousFeedbackRequestNav: ContinuousFeedbackRequest;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    continuousFeedbackToSenderUserNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    continuousFeedbackToSubjectUserNav: User;
    /**
     * Returns an entity builder to construct instances `ContinuousFeedback`.
     * @returns A builder that constructs instances of entity type `ContinuousFeedback`.
     */
    static builder(): EntityBuilderType<ContinuousFeedback, ContinuousFeedbackTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ContinuousFeedback` entity type.
     * @returns A `ContinuousFeedback` request builder.
     */
    static requestBuilder(): ContinuousFeedbackRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ContinuousFeedback`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ContinuousFeedback`.
     */
    static customField(fieldName: string): CustomField<ContinuousFeedback>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ContinuousFeedbackRequest, ContinuousFeedbackRequestType } from './ContinuousFeedbackRequest';
import { User, UserType } from './User';
export interface ContinuousFeedbackType {
    achievementId?: string;
    activityId?: string;
    dateReceived?: Moment;
    feedbackId: BigNumber;
    feedbackMessage: string;
    feedbackRequestId?: BigNumber;
    senderUserId: string;
    subjectUserId: string;
    visibleToManager?: boolean;
    continuousFeedbackToContinuousFeedbackRequestNav: ContinuousFeedbackRequestType;
    continuousFeedbackToSenderUserNav: UserType;
    continuousFeedbackToSubjectUserNav: UserType;
}
export interface ContinuousFeedbackTypeForceMandatory {
    achievementId: string;
    activityId: string;
    dateReceived: Moment;
    feedbackId: BigNumber;
    feedbackMessage: string;
    feedbackRequestId: BigNumber;
    senderUserId: string;
    subjectUserId: string;
    visibleToManager: boolean;
    continuousFeedbackToContinuousFeedbackRequestNav: ContinuousFeedbackRequestType;
    continuousFeedbackToSenderUserNav: UserType;
    continuousFeedbackToSubjectUserNav: UserType;
}
export declare namespace ContinuousFeedback {
    /**
     * Static representation of the [[achievementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT_ID: StringField<ContinuousFeedback>;
    /**
     * Static representation of the [[activityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_ID: StringField<ContinuousFeedback>;
    /**
     * Static representation of the [[dateReceived]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_RECEIVED: DateField<ContinuousFeedback>;
    /**
     * Static representation of the [[feedbackId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_ID: BigNumberField<ContinuousFeedback>;
    /**
     * Static representation of the [[feedbackMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_MESSAGE: StringField<ContinuousFeedback>;
    /**
     * Static representation of the [[feedbackRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_REQUEST_ID: BigNumberField<ContinuousFeedback>;
    /**
     * Static representation of the [[senderUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SENDER_USER_ID: StringField<ContinuousFeedback>;
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_USER_ID: StringField<ContinuousFeedback>;
    /**
     * Static representation of the [[visibleToManager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VISIBLE_TO_MANAGER: BooleanField<ContinuousFeedback>;
    /**
     * Static representation of the one-to-one navigation property [[continuousFeedbackToContinuousFeedbackRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTINUOUS_FEEDBACK_TO_CONTINUOUS_FEEDBACK_REQUEST_NAV: OneToOneLink<ContinuousFeedback, ContinuousFeedbackRequest>;
    /**
     * Static representation of the one-to-one navigation property [[continuousFeedbackToSenderUserNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTINUOUS_FEEDBACK_TO_SENDER_USER_NAV: OneToOneLink<ContinuousFeedback, User>;
    /**
     * Static representation of the one-to-one navigation property [[continuousFeedbackToSubjectUserNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTINUOUS_FEEDBACK_TO_SUBJECT_USER_NAV: OneToOneLink<ContinuousFeedback, User>;
    /**
     * All fields of the ContinuousFeedback entity.
     */
    const _allFields: Array<StringField<ContinuousFeedback> | DateField<ContinuousFeedback> | BigNumberField<ContinuousFeedback> | BooleanField<ContinuousFeedback> | OneToOneLink<ContinuousFeedback, ContinuousFeedbackRequest> | OneToOneLink<ContinuousFeedback, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ContinuousFeedback>;
    /**
     * All key fields of the ContinuousFeedback entity.
     */
    const _keyFields: Array<Selectable<ContinuousFeedback>>;
    /**
     * Mapping of all key field names to the respective static field property ContinuousFeedback.
     */
    const _keys: {
        [keys: string]: Selectable<ContinuousFeedback>;
    };
}
//# sourceMappingURL=ContinuousFeedback.d.ts.map