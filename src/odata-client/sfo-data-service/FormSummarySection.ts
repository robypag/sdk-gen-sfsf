/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormSummarySectionRequestBuilder } from './FormSummarySectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormSummarySection" of service "SFOData".
 */
export class FormSummarySection extends Entity implements FormSummarySectionType {
  /**
   * Technical entity name for FormSummarySection.
   */
  static _entityName = 'FormSummarySection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormSummarySection.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * sectionDescription.
   * @nullable
   */
  sectionDescription?: string;
  /**
   * sectionIndex.
   */
  sectionIndex!: number;
  /**
   * sectionName.
   * @nullable
   */
  sectionName?: string;
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  calculatedFormRating!: FormUserRatingComment;
  /**
   * One-to-many navigation property to the [[FormUserRatingComment]] entity.
   */
  othersRatingComment!: FormUserRatingComment[];
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  overallAdjustedRating!: FormUserRatingComment;
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  overallFormRating!: FormUserRatingComment;
  /**
   * One-to-one navigation property to the [[FormSectionConfiguration]] entity.
   */
  sectionConfiguration!: FormSectionConfiguration;
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  selfRatingComment!: FormUserRatingComment;

  /**
   * Returns an entity builder to construct instances `FormSummarySection`.
   * @returns A builder that constructs instances of entity type `FormSummarySection`.
   */
  static builder(): EntityBuilderType<FormSummarySection, FormSummarySectionTypeForceMandatory> {
    return Entity.entityBuilder(FormSummarySection);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormSummarySection` entity type.
   * @returns A `FormSummarySection` request builder.
   */
  static requestBuilder(): FormSummarySectionRequestBuilder {
    return new FormSummarySectionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormSummarySection`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormSummarySection`.
   */
  static customField(fieldName: string): CustomField<FormSummarySection> {
    return Entity.customFieldSelector(fieldName, FormSummarySection);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormUserRatingComment, FormUserRatingCommentType } from './FormUserRatingComment';
import { FormSectionConfiguration, FormSectionConfigurationType } from './FormSectionConfiguration';

export interface FormSummarySectionType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionDescription?: string;
  sectionIndex: number;
  sectionName?: string;
  calculatedFormRating: FormUserRatingCommentType;
  othersRatingComment: FormUserRatingCommentType[];
  overallAdjustedRating: FormUserRatingCommentType;
  overallFormRating: FormUserRatingCommentType;
  sectionConfiguration: FormSectionConfigurationType;
  selfRatingComment: FormUserRatingCommentType;
}

export interface FormSummarySectionTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
  calculatedFormRating: FormUserRatingCommentType;
  othersRatingComment: FormUserRatingCommentType[];
  overallAdjustedRating: FormUserRatingCommentType;
  overallFormRating: FormUserRatingCommentType;
  sectionConfiguration: FormSectionConfigurationType;
  selfRatingComment: FormUserRatingCommentType;
}

export namespace FormSummarySection {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormSummarySection> = new BigNumberField('formContentId', FormSummarySection, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormSummarySection> = new BigNumberField('formDataId', FormSummarySection, 'Edm.Int64');
  /**
   * Static representation of the [[sectionDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_DESCRIPTION: StringField<FormSummarySection> = new StringField('sectionDescription', FormSummarySection, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormSummarySection> = new NumberField('sectionIndex', FormSummarySection, 'Edm.Int32');
  /**
   * Static representation of the [[sectionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_NAME: StringField<FormSummarySection> = new StringField('sectionName', FormSummarySection, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[calculatedFormRating]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALCULATED_FORM_RATING: OneToOneLink<FormSummarySection, FormUserRatingComment> = new OneToOneLink('calculatedFormRating', FormSummarySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OTHERS_RATING_COMMENT: Link<FormSummarySection, FormUserRatingComment> = new Link('othersRatingComment', FormSummarySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[overallAdjustedRating]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERALL_ADJUSTED_RATING: OneToOneLink<FormSummarySection, FormUserRatingComment> = new OneToOneLink('overallAdjustedRating', FormSummarySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[overallFormRating]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERALL_FORM_RATING: OneToOneLink<FormSummarySection, FormUserRatingComment> = new OneToOneLink('overallFormRating', FormSummarySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[sectionConfiguration]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_CONFIGURATION: OneToOneLink<FormSummarySection, FormSectionConfiguration> = new OneToOneLink('sectionConfiguration', FormSummarySection, FormSectionConfiguration);
  /**
   * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATING_COMMENT: OneToOneLink<FormSummarySection, FormUserRatingComment> = new OneToOneLink('selfRatingComment', FormSummarySection, FormUserRatingComment);
  /**
   * All fields of the FormSummarySection entity.
   */
  export const _allFields: Array<BigNumberField<FormSummarySection> | StringField<FormSummarySection> | NumberField<FormSummarySection> | OneToOneLink<FormSummarySection, FormUserRatingComment> | Link<FormSummarySection, FormUserRatingComment> | OneToOneLink<FormSummarySection, FormSectionConfiguration>> = [
    FormSummarySection.FORM_CONTENT_ID,
    FormSummarySection.FORM_DATA_ID,
    FormSummarySection.SECTION_DESCRIPTION,
    FormSummarySection.SECTION_INDEX,
    FormSummarySection.SECTION_NAME,
    FormSummarySection.CALCULATED_FORM_RATING,
    FormSummarySection.OTHERS_RATING_COMMENT,
    FormSummarySection.OVERALL_ADJUSTED_RATING,
    FormSummarySection.OVERALL_FORM_RATING,
    FormSummarySection.SECTION_CONFIGURATION,
    FormSummarySection.SELF_RATING_COMMENT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormSummarySection> = new AllFields('*', FormSummarySection);
  /**
   * All key fields of the FormSummarySection entity.
   */
  export const _keyFields: Array<Selectable<FormSummarySection>> = [FormSummarySection.FORM_CONTENT_ID, FormSummarySection.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property FormSummarySection.
   */
  export const _keys: { [keys: string]: Selectable<FormSummarySection> } = FormSummarySection._keyFields.reduce((acc: { [keys: string]: Selectable<FormSummarySection> }, field: Selectable<FormSummarySection>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
