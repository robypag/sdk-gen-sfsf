/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Form360SummaryViewSectionRequestBuilder } from './Form360SummaryViewSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Form360SummaryViewSection" of service "SFOData".
 */
export class Form360SummaryViewSection extends Entity implements Form360SummaryViewSectionType {
  /**
   * Technical entity name for Form360SummaryViewSection.
   */
  static _entityName = 'Form360SummaryViewSection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Form360SummaryViewSection.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * export360ReportURL.
   * @nullable
   */
  export360ReportUrl?: string;
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * isActiveReportLink.
   */
  isActiveReportLink!: boolean;
  /**
   * isAddParticipant.
   */
  isAddParticipant!: boolean;
  /**
   * isAnonymous.
   */
  isAnonymous!: boolean;
  /**
   * isRemoveParticipant.
   */
  isRemoveParticipant!: boolean;
  /**
   * isSendAllReminder.
   */
  isSendAllReminder!: boolean;
  /**
   * isShow360ReportLink.
   */
  isShow360ReportLink!: boolean;
  /**
   * isShowCategory.
   */
  isShowCategory!: boolean;
  /**
   * isShowCategoryWeights.
   */
  isShowCategoryWeights!: boolean;
  /**
   * isShowComments.
   */
  isShowComments!: boolean;
  /**
   * isShowExportBtn.
   */
  isShowExportBtn!: boolean;
  /**
   * isShowOverallRating.
   */
  isShowOverallRating!: boolean;
  /**
   * isShowRating.
   */
  isShowRating!: boolean;
  /**
   * isShowReportLink.
   */
  isShowReportLink!: boolean;
  /**
   * isShowSendBackForm.
   */
  isShowSendBackForm!: boolean;
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
  categoryWeights!: Form360SummaryViewCategory[];
  /**
   * One-to-many navigation property to the [[Form360SummaryViewRater]] entity.
   */
  formRaters!: Form360SummaryViewRater[];

  /**
   * Returns an entity builder to construct instances `Form360SummaryViewSection`.
   * @returns A builder that constructs instances of entity type `Form360SummaryViewSection`.
   */
  static builder(): EntityBuilderType<Form360SummaryViewSection, Form360SummaryViewSectionTypeForceMandatory> {
    return Entity.entityBuilder(Form360SummaryViewSection);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Form360SummaryViewSection` entity type.
   * @returns A `Form360SummaryViewSection` request builder.
   */
  static requestBuilder(): Form360SummaryViewSectionRequestBuilder {
    return new Form360SummaryViewSectionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360SummaryViewSection`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Form360SummaryViewSection`.
   */
  static customField(fieldName: string): CustomField<Form360SummaryViewSection> {
    return Entity.customFieldSelector(fieldName, Form360SummaryViewSection);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace Form360SummaryViewSection {
  /**
   * Static representation of the [[export360ReportUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPORT_360_REPORT_URL: StringField<Form360SummaryViewSection> = new StringField('export360ReportURL', Form360SummaryViewSection, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<Form360SummaryViewSection> = new BigNumberField('formContentId', Form360SummaryViewSection, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<Form360SummaryViewSection> = new BigNumberField('formDataId', Form360SummaryViewSection, 'Edm.Int64');
  /**
   * Static representation of the [[isActiveReportLink]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ACTIVE_REPORT_LINK: BooleanField<Form360SummaryViewSection> = new BooleanField('isActiveReportLink', Form360SummaryViewSection, 'Edm.Boolean');
  /**
   * Static representation of the [[isAddParticipant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ADD_PARTICIPANT: BooleanField<Form360SummaryViewSection> = new BooleanField('isAddParticipant', Form360SummaryViewSection, 'Edm.Boolean');
  /**
   * Static representation of the [[isAnonymous]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ANONYMOUS: BooleanField<Form360SummaryViewSection> = new BooleanField('isAnonymous', Form360SummaryViewSection, 'Edm.Boolean');
  /**
   * Static representation of the [[isRemoveParticipant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_REMOVE_PARTICIPANT: BooleanField<Form360SummaryViewSection> = new BooleanField('isRemoveParticipant', Form360SummaryViewSection, 'Edm.Boolean');
  /**
   * Static representation of the [[isSendAllReminder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SEND_ALL_REMINDER: BooleanField<Form360SummaryViewSection> = new BooleanField('isSendAllReminder', Form360SummaryViewSection, 'Edm.Boolean');
  /**
   * Static representation of the [[isShow360ReportLink]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SHOW_360_REPORT_LINK: BooleanField<Form360SummaryViewSection> = new BooleanField('isShow360ReportLink', Form360SummaryViewSection, 'Edm.Boolean');
  /**
   * Static representation of the [[isShowCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SHOW_CATEGORY: BooleanField<Form360SummaryViewSection> = new BooleanField('isShowCategory', Form360SummaryViewSection, 'Edm.Boolean');
  /**
   * Static representation of the [[isShowCategoryWeights]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SHOW_CATEGORY_WEIGHTS: BooleanField<Form360SummaryViewSection> = new BooleanField('isShowCategoryWeights', Form360SummaryViewSection, 'Edm.Boolean');
  /**
   * Static representation of the [[isShowComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SHOW_COMMENTS: BooleanField<Form360SummaryViewSection> = new BooleanField('isShowComments', Form360SummaryViewSection, 'Edm.Boolean');
  /**
   * Static representation of the [[isShowExportBtn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SHOW_EXPORT_BTN: BooleanField<Form360SummaryViewSection> = new BooleanField('isShowExportBtn', Form360SummaryViewSection, 'Edm.Boolean');
  /**
   * Static representation of the [[isShowOverallRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SHOW_OVERALL_RATING: BooleanField<Form360SummaryViewSection> = new BooleanField('isShowOverallRating', Form360SummaryViewSection, 'Edm.Boolean');
  /**
   * Static representation of the [[isShowRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SHOW_RATING: BooleanField<Form360SummaryViewSection> = new BooleanField('isShowRating', Form360SummaryViewSection, 'Edm.Boolean');
  /**
   * Static representation of the [[isShowReportLink]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SHOW_REPORT_LINK: BooleanField<Form360SummaryViewSection> = new BooleanField('isShowReportLink', Form360SummaryViewSection, 'Edm.Boolean');
  /**
   * Static representation of the [[isShowSendBackForm]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SHOW_SEND_BACK_FORM: BooleanField<Form360SummaryViewSection> = new BooleanField('isShowSendBackForm', Form360SummaryViewSection, 'Edm.Boolean');
  /**
   * Static representation of the [[maxRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_RATING: NumberField<Form360SummaryViewSection> = new NumberField('maxRating', Form360SummaryViewSection, 'Edm.Double');
  /**
   * Static representation of the [[overallRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERALL_RATING: NumberField<Form360SummaryViewSection> = new NumberField('overallRating', Form360SummaryViewSection, 'Edm.Double');
  /**
   * Static representation of the [[overallRatingDisplayString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERALL_RATING_DISPLAY_STRING: StringField<Form360SummaryViewSection> = new StringField('overallRatingDisplayString', Form360SummaryViewSection, 'Edm.String');
  /**
   * Static representation of the [[show360ReportUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHOW_360_REPORT_URL: StringField<Form360SummaryViewSection> = new StringField('show360ReportURL', Form360SummaryViewSection, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[categoryWeights]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_WEIGHTS: Link<Form360SummaryViewSection, Form360SummaryViewCategory> = new Link('categoryWeights', Form360SummaryViewSection, Form360SummaryViewCategory);
  /**
   * Static representation of the one-to-many navigation property [[formRaters]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_RATERS: Link<Form360SummaryViewSection, Form360SummaryViewRater> = new Link('formRaters', Form360SummaryViewSection, Form360SummaryViewRater);
  /**
   * All fields of the Form360SummaryViewSection entity.
   */
  export const _allFields: Array<StringField<Form360SummaryViewSection> | BigNumberField<Form360SummaryViewSection> | BooleanField<Form360SummaryViewSection> | NumberField<Form360SummaryViewSection> | Link<Form360SummaryViewSection, Form360SummaryViewCategory> | Link<Form360SummaryViewSection, Form360SummaryViewRater>> = [
    Form360SummaryViewSection.EXPORT_360_REPORT_URL,
    Form360SummaryViewSection.FORM_CONTENT_ID,
    Form360SummaryViewSection.FORM_DATA_ID,
    Form360SummaryViewSection.IS_ACTIVE_REPORT_LINK,
    Form360SummaryViewSection.IS_ADD_PARTICIPANT,
    Form360SummaryViewSection.IS_ANONYMOUS,
    Form360SummaryViewSection.IS_REMOVE_PARTICIPANT,
    Form360SummaryViewSection.IS_SEND_ALL_REMINDER,
    Form360SummaryViewSection.IS_SHOW_360_REPORT_LINK,
    Form360SummaryViewSection.IS_SHOW_CATEGORY,
    Form360SummaryViewSection.IS_SHOW_CATEGORY_WEIGHTS,
    Form360SummaryViewSection.IS_SHOW_COMMENTS,
    Form360SummaryViewSection.IS_SHOW_EXPORT_BTN,
    Form360SummaryViewSection.IS_SHOW_OVERALL_RATING,
    Form360SummaryViewSection.IS_SHOW_RATING,
    Form360SummaryViewSection.IS_SHOW_REPORT_LINK,
    Form360SummaryViewSection.IS_SHOW_SEND_BACK_FORM,
    Form360SummaryViewSection.MAX_RATING,
    Form360SummaryViewSection.OVERALL_RATING,
    Form360SummaryViewSection.OVERALL_RATING_DISPLAY_STRING,
    Form360SummaryViewSection.SHOW_360_REPORT_URL,
    Form360SummaryViewSection.CATEGORY_WEIGHTS,
    Form360SummaryViewSection.FORM_RATERS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Form360SummaryViewSection> = new AllFields('*', Form360SummaryViewSection);
  /**
   * All key fields of the Form360SummaryViewSection entity.
   */
  export const _keyFields: Array<Selectable<Form360SummaryViewSection>> = [Form360SummaryViewSection.FORM_CONTENT_ID, Form360SummaryViewSection.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property Form360SummaryViewSection.
   */
  export const _keys: { [keys: string]: Selectable<Form360SummaryViewSection> } = Form360SummaryViewSection._keyFields.reduce((acc: { [keys: string]: Selectable<Form360SummaryViewSection> }, field: Selectable<Form360SummaryViewSection>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
