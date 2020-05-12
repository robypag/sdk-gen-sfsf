import { FormReviewFeedbackRequestBuilder } from './FormReviewFeedbackRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormReviewFeedback" of service "SFOData".
 */
export declare class FormReviewFeedback extends Entity implements FormReviewFeedbackType {
    /**
     * Technical entity name for FormReviewFeedback.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormReviewFeedback.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * appraiserUserEmail.
     * @nullable
     */
    appraiserUserEmail?: string;
    /**
     * appraiserUserId.
     * @nullable
     */
    appraiserUserId?: string;
    /**
     * companyId.
     * @nullable
     */
    companyId?: string;
    /**
     * digiCode.
     * @nullable
     */
    digiCode?: string;
    /**
     * feedbackId.
     */
    feedbackId: BigNumber;
    /**
     * formDataId.
     * @nullable
     */
    formDataId?: BigNumber;
    /**
     * pmFeedback.
     * @nullable
     */
    pmFeedback?: string;
    /**
     * requestDate.
     * @nullable
     */
    requestDate?: Moment;
    /**
     * requestUserEmail.
     * @nullable
     */
    requestUserEmail?: string;
    /**
     * requestUserId.
     * @nullable
     */
    requestUserId?: string;
    /**
     * requestUserRole.
     * @nullable
     */
    requestUserRole?: string;
    /**
     * responseDate.
     * @nullable
     */
    responseDate?: Moment;
    /**
     * responseId.
     * @nullable
     */
    responseId?: string;
    /**
     * subjectUserEmail.
     * @nullable
     */
    subjectUserEmail?: string;
    /**
     * subjectUserId.
     * @nullable
     */
    subjectUserId?: string;
    /**
     * Returns an entity builder to construct instances `FormReviewFeedback`.
     * @returns A builder that constructs instances of entity type `FormReviewFeedback`.
     */
    static builder(): EntityBuilderType<FormReviewFeedback, FormReviewFeedbackTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormReviewFeedback` entity type.
     * @returns A `FormReviewFeedback` request builder.
     */
    static requestBuilder(): FormReviewFeedbackRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormReviewFeedback`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormReviewFeedback`.
     */
    static customField(fieldName: string): CustomField<FormReviewFeedback>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface FormReviewFeedbackType {
    appraiserUserEmail?: string;
    appraiserUserId?: string;
    companyId?: string;
    digiCode?: string;
    feedbackId: BigNumber;
    formDataId?: BigNumber;
    pmFeedback?: string;
    requestDate?: Moment;
    requestUserEmail?: string;
    requestUserId?: string;
    requestUserRole?: string;
    responseDate?: Moment;
    responseId?: string;
    subjectUserEmail?: string;
    subjectUserId?: string;
}
export interface FormReviewFeedbackTypeForceMandatory {
    appraiserUserEmail: string;
    appraiserUserId: string;
    companyId: string;
    digiCode: string;
    feedbackId: BigNumber;
    formDataId: BigNumber;
    pmFeedback: string;
    requestDate: Moment;
    requestUserEmail: string;
    requestUserId: string;
    requestUserRole: string;
    responseDate: Moment;
    responseId: string;
    subjectUserEmail: string;
    subjectUserId: string;
}
export declare namespace FormReviewFeedback {
    /**
     * Static representation of the [[appraiserUserEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPRAISER_USER_EMAIL: StringField<FormReviewFeedback>;
    /**
     * Static representation of the [[appraiserUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPRAISER_USER_ID: StringField<FormReviewFeedback>;
    /**
     * Static representation of the [[companyId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_ID: StringField<FormReviewFeedback>;
    /**
     * Static representation of the [[digiCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIGI_CODE: StringField<FormReviewFeedback>;
    /**
     * Static representation of the [[feedbackId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_ID: BigNumberField<FormReviewFeedback>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormReviewFeedback>;
    /**
     * Static representation of the [[pmFeedback]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PM_FEEDBACK: StringField<FormReviewFeedback>;
    /**
     * Static representation of the [[requestDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUEST_DATE: DateField<FormReviewFeedback>;
    /**
     * Static representation of the [[requestUserEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUEST_USER_EMAIL: StringField<FormReviewFeedback>;
    /**
     * Static representation of the [[requestUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUEST_USER_ID: StringField<FormReviewFeedback>;
    /**
     * Static representation of the [[requestUserRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUEST_USER_ROLE: StringField<FormReviewFeedback>;
    /**
     * Static representation of the [[responseDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSE_DATE: DateField<FormReviewFeedback>;
    /**
     * Static representation of the [[responseId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSE_ID: StringField<FormReviewFeedback>;
    /**
     * Static representation of the [[subjectUserEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_USER_EMAIL: StringField<FormReviewFeedback>;
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_USER_ID: StringField<FormReviewFeedback>;
    /**
     * All fields of the FormReviewFeedback entity.
     */
    const _allFields: Array<StringField<FormReviewFeedback> | BigNumberField<FormReviewFeedback> | DateField<FormReviewFeedback>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormReviewFeedback>;
    /**
     * All key fields of the FormReviewFeedback entity.
     */
    const _keyFields: Array<Selectable<FormReviewFeedback>>;
    /**
     * Mapping of all key field names to the respective static field property FormReviewFeedback.
     */
    const _keys: {
        [keys: string]: Selectable<FormReviewFeedback>;
    };
}
//# sourceMappingURL=FormReviewFeedback.d.ts.map