import { FormHeaderRequestBuilder } from './FormHeaderRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormHeader" of service "SFOData".
 */
export declare class FormHeader extends Entity implements FormHeaderType {
    /**
     * Technical entity name for FormHeader.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormHeader.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * creationDate.
     */
    creationDate: Moment;
    /**
     * Current Step.
     * @nullable
     */
    currentStep?: string;
    /**
     * Data Assigned.
     * @nullable
     */
    dateAssigned?: Moment;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * formDataStatus.
     */
    formDataStatus: BigNumber;
    /**
     * formDataVersion.
     */
    formDataVersion: string;
    /**
     * formLastModifiedDate.
     */
    formLastModifiedDate: Moment;
    /**
     * formOriginator.
     */
    formOriginator: string;
    /**
     * formReviewDueDate.
     */
    formReviewDueDate: Moment;
    /**
     * formReviewEndDate.
     */
    formReviewEndDate: Moment;
    /**
     * formReviewStartDate.
     * @nullable
     */
    formReviewStartDate?: Moment;
    /**
     * formSubjectId.
     */
    formSubjectId: string;
    /**
     * formTemplateId.
     */
    formTemplateId: BigNumber;
    /**
     * formTemplateType.
     */
    formTemplateType: string;
    /**
     * formTitle.
     */
    formTitle: string;
    /**
     * isRated.
     */
    isRated: boolean;
    /**
     * rating.
     */
    rating: BigNumber;
    /**
     * Send From.
     * @nullable
     */
    sender?: string;
    /**
     * Step Due Date.
     * @nullable
     */
    stepDueDate?: Moment;
    /**
     * One-to-many navigation property to the [[Attachment]] entity.
     */
    formAttachments: Attachment[];
    /**
     * One-to-many navigation property to the [[FormAuditTrail]] entity.
     */
    formAuditTrails: FormAuditTrail[];
    /**
     * One-to-many navigation property to the [[FormContent]] entity.
     */
    formContents: FormContent[];
    /**
     * One-to-one navigation property to the [[FormReviewFeedbackList]] entity.
     */
    formFeedbackList: FormReviewFeedbackList;
    /**
     * One-to-one navigation property to the [[FormContent]] entity.
     */
    formLastContent: FormContent;
    /**
     * One-to-one navigation property to the [[FormRouteMap]] entity.
     */
    formRouteMap: FormRouteMap;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    formSender: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    formSubject: User;
    /**
     * One-to-one navigation property to the [[FormTemplate]] entity.
     */
    formTemplate: FormTemplate;
    /**
     * Returns an entity builder to construct instances `FormHeader`.
     * @returns A builder that constructs instances of entity type `FormHeader`.
     */
    static builder(): EntityBuilderType<FormHeader, FormHeaderTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormHeader` entity type.
     * @returns A `FormHeader` request builder.
     */
    static requestBuilder(): FormHeaderRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormHeader`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormHeader`.
     */
    static customField(fieldName: string): CustomField<FormHeader>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Attachment, AttachmentType } from './Attachment';
import { FormAuditTrail, FormAuditTrailType } from './FormAuditTrail';
import { FormContent, FormContentType } from './FormContent';
import { FormReviewFeedbackList, FormReviewFeedbackListType } from './FormReviewFeedbackList';
import { FormRouteMap, FormRouteMapType } from './FormRouteMap';
import { User, UserType } from './User';
import { FormTemplate, FormTemplateType } from './FormTemplate';
export interface FormHeaderType {
    creationDate: Moment;
    currentStep?: string;
    dateAssigned?: Moment;
    formDataId: BigNumber;
    formDataStatus: BigNumber;
    formDataVersion: string;
    formLastModifiedDate: Moment;
    formOriginator: string;
    formReviewDueDate: Moment;
    formReviewEndDate: Moment;
    formReviewStartDate?: Moment;
    formSubjectId: string;
    formTemplateId: BigNumber;
    formTemplateType: string;
    formTitle: string;
    isRated: boolean;
    rating: BigNumber;
    sender?: string;
    stepDueDate?: Moment;
    formAttachments: AttachmentType[];
    formAuditTrails: FormAuditTrailType[];
    formContents: FormContentType[];
    formFeedbackList: FormReviewFeedbackListType;
    formLastContent: FormContentType;
    formRouteMap: FormRouteMapType;
    formSender: UserType;
    formSubject: UserType;
    formTemplate: FormTemplateType;
}
export interface FormHeaderTypeForceMandatory {
    creationDate: Moment;
    currentStep: string;
    dateAssigned: Moment;
    formDataId: BigNumber;
    formDataStatus: BigNumber;
    formDataVersion: string;
    formLastModifiedDate: Moment;
    formOriginator: string;
    formReviewDueDate: Moment;
    formReviewEndDate: Moment;
    formReviewStartDate: Moment;
    formSubjectId: string;
    formTemplateId: BigNumber;
    formTemplateType: string;
    formTitle: string;
    isRated: boolean;
    rating: BigNumber;
    sender: string;
    stepDueDate: Moment;
    formAttachments: AttachmentType[];
    formAuditTrails: FormAuditTrailType[];
    formContents: FormContentType[];
    formFeedbackList: FormReviewFeedbackListType;
    formLastContent: FormContentType;
    formRouteMap: FormRouteMapType;
    formSender: UserType;
    formSubject: UserType;
    formTemplate: FormTemplateType;
}
export declare namespace FormHeader {
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<FormHeader>;
    /**
     * Static representation of the [[currentStep]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENT_STEP: StringField<FormHeader>;
    /**
     * Static representation of the [[dateAssigned]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_ASSIGNED: DateField<FormHeader>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormHeader>;
    /**
     * Static representation of the [[formDataStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_STATUS: BigNumberField<FormHeader>;
    /**
     * Static representation of the [[formDataVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_VERSION: StringField<FormHeader>;
    /**
     * Static representation of the [[formLastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_LAST_MODIFIED_DATE: DateField<FormHeader>;
    /**
     * Static representation of the [[formOriginator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_ORIGINATOR: StringField<FormHeader>;
    /**
     * Static representation of the [[formReviewDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_REVIEW_DUE_DATE: DateField<FormHeader>;
    /**
     * Static representation of the [[formReviewEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_REVIEW_END_DATE: DateField<FormHeader>;
    /**
     * Static representation of the [[formReviewStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_REVIEW_START_DATE: DateField<FormHeader>;
    /**
     * Static representation of the [[formSubjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_SUBJECT_ID: StringField<FormHeader>;
    /**
     * Static representation of the [[formTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_TEMPLATE_ID: BigNumberField<FormHeader>;
    /**
     * Static representation of the [[formTemplateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_TEMPLATE_TYPE: StringField<FormHeader>;
    /**
     * Static representation of the [[formTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_TITLE: StringField<FormHeader>;
    /**
     * Static representation of the [[isRated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_RATED: BooleanField<FormHeader>;
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING: BigNumberField<FormHeader>;
    /**
     * Static representation of the [[sender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SENDER: StringField<FormHeader>;
    /**
     * Static representation of the [[stepDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STEP_DUE_DATE: DateField<FormHeader>;
    /**
     * Static representation of the one-to-many navigation property [[formAttachments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_ATTACHMENTS: Link<FormHeader, Attachment>;
    /**
     * Static representation of the one-to-many navigation property [[formAuditTrails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_AUDIT_TRAILS: Link<FormHeader, FormAuditTrail>;
    /**
     * Static representation of the one-to-many navigation property [[formContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENTS: Link<FormHeader, FormContent>;
    /**
     * Static representation of the one-to-one navigation property [[formFeedbackList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_FEEDBACK_LIST: OneToOneLink<FormHeader, FormReviewFeedbackList>;
    /**
     * Static representation of the one-to-one navigation property [[formLastContent]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_LAST_CONTENT: OneToOneLink<FormHeader, FormContent>;
    /**
     * Static representation of the one-to-one navigation property [[formRouteMap]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_ROUTE_MAP: OneToOneLink<FormHeader, FormRouteMap>;
    /**
     * Static representation of the one-to-one navigation property [[formSender]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_SENDER: OneToOneLink<FormHeader, User>;
    /**
     * Static representation of the one-to-one navigation property [[formSubject]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_SUBJECT: OneToOneLink<FormHeader, User>;
    /**
     * Static representation of the one-to-one navigation property [[formTemplate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_TEMPLATE: OneToOneLink<FormHeader, FormTemplate>;
    /**
     * All fields of the FormHeader entity.
     */
    const _allFields: Array<DateField<FormHeader> | StringField<FormHeader> | BigNumberField<FormHeader> | BooleanField<FormHeader> | Link<FormHeader, Attachment> | Link<FormHeader, FormAuditTrail> | Link<FormHeader, FormContent> | OneToOneLink<FormHeader, FormReviewFeedbackList> | OneToOneLink<FormHeader, FormContent> | OneToOneLink<FormHeader, FormRouteMap> | OneToOneLink<FormHeader, User> | OneToOneLink<FormHeader, FormTemplate>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormHeader>;
    /**
     * All key fields of the FormHeader entity.
     */
    const _keyFields: Array<Selectable<FormHeader>>;
    /**
     * Mapping of all key field names to the respective static field property FormHeader.
     */
    const _keys: {
        [keys: string]: Selectable<FormHeader>;
    };
}
//# sourceMappingURL=FormHeader.d.ts.map