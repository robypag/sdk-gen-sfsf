import { Form360SummaryViewSectionRequestBuilder } from './Form360SummaryViewSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Form360SummaryViewSection" of service "SFOData".
 */
export declare class Form360SummaryViewSection extends Entity implements Form360SummaryViewSectionType {
    /**
     * Technical entity name for Form360SummaryViewSection.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360SummaryViewSection.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * export360ReportURL.
     * @nullable
     */
    export360ReportUrl?: string;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * isActiveReportLink.
     */
    isActiveReportLink: boolean;
    /**
     * isAddParticipant.
     */
    isAddParticipant: boolean;
    /**
     * isAnonymous.
     */
    isAnonymous: boolean;
    /**
     * isRemoveParticipant.
     */
    isRemoveParticipant: boolean;
    /**
     * isSendAllReminder.
     */
    isSendAllReminder: boolean;
    /**
     * isShow360ReportLink.
     */
    isShow360ReportLink: boolean;
    /**
     * isShowCategory.
     */
    isShowCategory: boolean;
    /**
     * isShowCategoryWeights.
     */
    isShowCategoryWeights: boolean;
    /**
     * isShowComments.
     */
    isShowComments: boolean;
    /**
     * isShowExportBtn.
     */
    isShowExportBtn: boolean;
    /**
     * isShowOverallRating.
     */
    isShowOverallRating: boolean;
    /**
     * isShowRating.
     */
    isShowRating: boolean;
    /**
     * isShowReportLink.
     */
    isShowReportLink: boolean;
    /**
     * isShowSendBackForm.
     */
    isShowSendBackForm: boolean;
    /**
     * maxRating.
     * @nullable
     */
    maxRating?: number;
    /**
     * overallRating.
     * @nullable
     */
    overallRating?: number;
    /**
     * overallRatingDisplayString.
     * @nullable
     */
    overallRatingDisplayString?: string;
    /**
     * show360ReportURL.
     * @nullable
     */
    show360ReportUrl?: string;
    /**
     * One-to-many navigation property to the [[Form360SummaryViewCategory]] entity.
     */
    categoryWeights: Form360SummaryViewCategory[];
    /**
     * One-to-many navigation property to the [[Form360SummaryViewRater]] entity.
     */
    formRaters: Form360SummaryViewRater[];
    /**
     * Returns an entity builder to construct instances `Form360SummaryViewSection`.
     * @returns A builder that constructs instances of entity type `Form360SummaryViewSection`.
     */
    static builder(): EntityBuilderType<Form360SummaryViewSection, Form360SummaryViewSectionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Form360SummaryViewSection` entity type.
     * @returns A `Form360SummaryViewSection` request builder.
     */
    static requestBuilder(): Form360SummaryViewSectionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360SummaryViewSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360SummaryViewSection`.
     */
    static customField(fieldName: string): CustomField<Form360SummaryViewSection>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Form360SummaryViewCategory, Form360SummaryViewCategoryType } from './Form360SummaryViewCategory';
import { Form360SummaryViewRater, Form360SummaryViewRaterType } from './Form360SummaryViewRater';
export interface Form360SummaryViewSectionType {
    export360ReportUrl?: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    isActiveReportLink: boolean;
    isAddParticipant: boolean;
    isAnonymous: boolean;
    isRemoveParticipant: boolean;
    isSendAllReminder: boolean;
    isShow360ReportLink: boolean;
    isShowCategory: boolean;
    isShowCategoryWeights: boolean;
    isShowComments: boolean;
    isShowExportBtn: boolean;
    isShowOverallRating: boolean;
    isShowRating: boolean;
    isShowReportLink: boolean;
    isShowSendBackForm: boolean;
    maxRating?: number;
    overallRating?: number;
    overallRatingDisplayString?: string;
    show360ReportUrl?: string;
    categoryWeights: Form360SummaryViewCategoryType[];
    formRaters: Form360SummaryViewRaterType[];
}
export interface Form360SummaryViewSectionTypeForceMandatory {
    export360ReportUrl: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    isActiveReportLink: boolean;
    isAddParticipant: boolean;
    isAnonymous: boolean;
    isRemoveParticipant: boolean;
    isSendAllReminder: boolean;
    isShow360ReportLink: boolean;
    isShowCategory: boolean;
    isShowCategoryWeights: boolean;
    isShowComments: boolean;
    isShowExportBtn: boolean;
    isShowOverallRating: boolean;
    isShowRating: boolean;
    isShowReportLink: boolean;
    isShowSendBackForm: boolean;
    maxRating: number;
    overallRating: number;
    overallRatingDisplayString: string;
    show360ReportUrl: string;
    categoryWeights: Form360SummaryViewCategoryType[];
    formRaters: Form360SummaryViewRaterType[];
}
export declare namespace Form360SummaryViewSection {
    /**
     * Static representation of the [[export360ReportUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPORT_360_REPORT_URL: StringField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[isActiveReportLink]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ACTIVE_REPORT_LINK: BooleanField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[isAddParticipant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ADD_PARTICIPANT: BooleanField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[isAnonymous]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ANONYMOUS: BooleanField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[isRemoveParticipant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_REMOVE_PARTICIPANT: BooleanField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[isSendAllReminder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_SEND_ALL_REMINDER: BooleanField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[isShow360ReportLink]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_SHOW_360_REPORT_LINK: BooleanField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[isShowCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_SHOW_CATEGORY: BooleanField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[isShowCategoryWeights]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_SHOW_CATEGORY_WEIGHTS: BooleanField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[isShowComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_SHOW_COMMENTS: BooleanField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[isShowExportBtn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_SHOW_EXPORT_BTN: BooleanField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[isShowOverallRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_SHOW_OVERALL_RATING: BooleanField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[isShowRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_SHOW_RATING: BooleanField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[isShowReportLink]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_SHOW_REPORT_LINK: BooleanField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[isShowSendBackForm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_SHOW_SEND_BACK_FORM: BooleanField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[maxRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_RATING: NumberField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[overallRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERALL_RATING: NumberField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[overallRatingDisplayString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERALL_RATING_DISPLAY_STRING: StringField<Form360SummaryViewSection>;
    /**
     * Static representation of the [[show360ReportUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHOW_360_REPORT_URL: StringField<Form360SummaryViewSection>;
    /**
     * Static representation of the one-to-many navigation property [[categoryWeights]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_WEIGHTS: Link<Form360SummaryViewSection, Form360SummaryViewCategory>;
    /**
     * Static representation of the one-to-many navigation property [[formRaters]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_RATERS: Link<Form360SummaryViewSection, Form360SummaryViewRater>;
    /**
     * All fields of the Form360SummaryViewSection entity.
     */
    const _allFields: Array<StringField<Form360SummaryViewSection> | BigNumberField<Form360SummaryViewSection> | BooleanField<Form360SummaryViewSection> | NumberField<Form360SummaryViewSection> | Link<Form360SummaryViewSection, Form360SummaryViewCategory> | Link<Form360SummaryViewSection, Form360SummaryViewRater>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Form360SummaryViewSection>;
    /**
     * All key fields of the Form360SummaryViewSection entity.
     */
    const _keyFields: Array<Selectable<Form360SummaryViewSection>>;
    /**
     * Mapping of all key field names to the respective static field property Form360SummaryViewSection.
     */
    const _keys: {
        [keys: string]: Selectable<Form360SummaryViewSection>;
    };
}
//# sourceMappingURL=Form360SummaryViewSection.d.ts.map