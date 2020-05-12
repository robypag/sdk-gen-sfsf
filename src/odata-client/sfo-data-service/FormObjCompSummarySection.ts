/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormObjCompSummarySectionRequestBuilder } from './FormObjCompSummarySectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormObjCompSummarySection" of service "SFOData".
 */
export class FormObjCompSummarySection extends Entity implements FormObjCompSummarySectionType {
  /**
   * Technical entity name for FormObjCompSummarySection.
   */
  static _entityName = 'FormObjCompSummarySection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormObjCompSummarySection.
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
   * sectionCommentsLabel.
   * @nullable
   */
  sectionCommentsLabel?: string;
  /**
   * sectionDescription.
   * @nullable
   */
  sectionDescription?: string;
  /**
   * sectionIndex.
   * @nullable
   */
  sectionIndex?: number;
  /**
   * sectionName.
   * @nullable
   */
  sectionName?: string;
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  adjustedCompRating!: FormUserRatingComment;
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  adjustedObjRating!: FormUserRatingComment;
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  calculatedCompRating!: FormUserRatingComment;
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  calculatedObjRating!: FormUserRatingComment;
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  ococRating!: FormUserRatingComment;
  /**
   * One-to-many navigation property to the [[FormUserRatingComment]] entity.
   */
  othersSectionComments!: FormUserRatingComment[];
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  overallCompRating!: FormUserRatingComment;
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  overallObjRating!: FormUserRatingComment;
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  sectComment!: FormUserRatingComment;
  /**
   * One-to-one navigation property to the [[FormSectionConfiguration]] entity.
   */
  sectionConfiguration!: FormSectionConfiguration;

  /**
   * Returns an entity builder to construct instances `FormObjCompSummarySection`.
   * @returns A builder that constructs instances of entity type `FormObjCompSummarySection`.
   */
  static builder(): EntityBuilderType<FormObjCompSummarySection, FormObjCompSummarySectionTypeForceMandatory> {
    return Entity.entityBuilder(FormObjCompSummarySection);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormObjCompSummarySection` entity type.
   * @returns A `FormObjCompSummarySection` request builder.
   */
  static requestBuilder(): FormObjCompSummarySectionRequestBuilder {
    return new FormObjCompSummarySectionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjCompSummarySection`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormObjCompSummarySection`.
   */
  static customField(fieldName: string): CustomField<FormObjCompSummarySection> {
    return Entity.customFieldSelector(fieldName, FormObjCompSummarySection);
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

export interface FormObjCompSummarySectionType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionCommentsLabel?: string;
  sectionDescription?: string;
  sectionIndex?: number;
  sectionName?: string;
  adjustedCompRating: FormUserRatingCommentType;
  adjustedObjRating: FormUserRatingCommentType;
  calculatedCompRating: FormUserRatingCommentType;
  calculatedObjRating: FormUserRatingCommentType;
  ococRating: FormUserRatingCommentType;
  othersSectionComments: FormUserRatingCommentType[];
  overallCompRating: FormUserRatingCommentType;
  overallObjRating: FormUserRatingCommentType;
  sectComment: FormUserRatingCommentType;
  sectionConfiguration: FormSectionConfigurationType;
}

export interface FormObjCompSummarySectionTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionCommentsLabel: string;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
  adjustedCompRating: FormUserRatingCommentType;
  adjustedObjRating: FormUserRatingCommentType;
  calculatedCompRating: FormUserRatingCommentType;
  calculatedObjRating: FormUserRatingCommentType;
  ococRating: FormUserRatingCommentType;
  othersSectionComments: FormUserRatingCommentType[];
  overallCompRating: FormUserRatingCommentType;
  overallObjRating: FormUserRatingCommentType;
  sectComment: FormUserRatingCommentType;
  sectionConfiguration: FormSectionConfigurationType;
}

export namespace FormObjCompSummarySection {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormObjCompSummarySection> = new BigNumberField('formContentId', FormObjCompSummarySection, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormObjCompSummarySection> = new BigNumberField('formDataId', FormObjCompSummarySection, 'Edm.Int64');
  /**
   * Static representation of the [[sectionCommentsLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_COMMENTS_LABEL: StringField<FormObjCompSummarySection> = new StringField('sectionCommentsLabel', FormObjCompSummarySection, 'Edm.String');
  /**
   * Static representation of the [[sectionDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_DESCRIPTION: StringField<FormObjCompSummarySection> = new StringField('sectionDescription', FormObjCompSummarySection, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormObjCompSummarySection> = new NumberField('sectionIndex', FormObjCompSummarySection, 'Edm.Int32');
  /**
   * Static representation of the [[sectionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_NAME: StringField<FormObjCompSummarySection> = new StringField('sectionName', FormObjCompSummarySection, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[adjustedCompRating]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADJUSTED_COMP_RATING: OneToOneLink<FormObjCompSummarySection, FormUserRatingComment> = new OneToOneLink('adjustedCompRating', FormObjCompSummarySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[adjustedObjRating]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADJUSTED_OBJ_RATING: OneToOneLink<FormObjCompSummarySection, FormUserRatingComment> = new OneToOneLink('adjustedObjRating', FormObjCompSummarySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[calculatedCompRating]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALCULATED_COMP_RATING: OneToOneLink<FormObjCompSummarySection, FormUserRatingComment> = new OneToOneLink('calculatedCompRating', FormObjCompSummarySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[calculatedObjRating]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALCULATED_OBJ_RATING: OneToOneLink<FormObjCompSummarySection, FormUserRatingComment> = new OneToOneLink('calculatedObjRating', FormObjCompSummarySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[ococRating]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OCOC_RATING: OneToOneLink<FormObjCompSummarySection, FormUserRatingComment> = new OneToOneLink('ococRating', FormObjCompSummarySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-many navigation property [[othersSectionComments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OTHERS_SECTION_COMMENTS: Link<FormObjCompSummarySection, FormUserRatingComment> = new Link('othersSectionComments', FormObjCompSummarySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[overallCompRating]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERALL_COMP_RATING: OneToOneLink<FormObjCompSummarySection, FormUserRatingComment> = new OneToOneLink('overallCompRating', FormObjCompSummarySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[overallObjRating]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERALL_OBJ_RATING: OneToOneLink<FormObjCompSummarySection, FormUserRatingComment> = new OneToOneLink('overallObjRating', FormObjCompSummarySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[sectComment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECT_COMMENT: OneToOneLink<FormObjCompSummarySection, FormUserRatingComment> = new OneToOneLink('sectComment', FormObjCompSummarySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[sectionConfiguration]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_CONFIGURATION: OneToOneLink<FormObjCompSummarySection, FormSectionConfiguration> = new OneToOneLink('sectionConfiguration', FormObjCompSummarySection, FormSectionConfiguration);
  /**
   * All fields of the FormObjCompSummarySection entity.
   */
  export const _allFields: Array<BigNumberField<FormObjCompSummarySection> | StringField<FormObjCompSummarySection> | NumberField<FormObjCompSummarySection> | OneToOneLink<FormObjCompSummarySection, FormUserRatingComment> | Link<FormObjCompSummarySection, FormUserRatingComment> | OneToOneLink<FormObjCompSummarySection, FormSectionConfiguration>> = [
    FormObjCompSummarySection.FORM_CONTENT_ID,
    FormObjCompSummarySection.FORM_DATA_ID,
    FormObjCompSummarySection.SECTION_COMMENTS_LABEL,
    FormObjCompSummarySection.SECTION_DESCRIPTION,
    FormObjCompSummarySection.SECTION_INDEX,
    FormObjCompSummarySection.SECTION_NAME,
    FormObjCompSummarySection.ADJUSTED_COMP_RATING,
    FormObjCompSummarySection.ADJUSTED_OBJ_RATING,
    FormObjCompSummarySection.CALCULATED_COMP_RATING,
    FormObjCompSummarySection.CALCULATED_OBJ_RATING,
    FormObjCompSummarySection.OCOC_RATING,
    FormObjCompSummarySection.OTHERS_SECTION_COMMENTS,
    FormObjCompSummarySection.OVERALL_COMP_RATING,
    FormObjCompSummarySection.OVERALL_OBJ_RATING,
    FormObjCompSummarySection.SECT_COMMENT,
    FormObjCompSummarySection.SECTION_CONFIGURATION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormObjCompSummarySection> = new AllFields('*', FormObjCompSummarySection);
  /**
   * All key fields of the FormObjCompSummarySection entity.
   */
  export const _keyFields: Array<Selectable<FormObjCompSummarySection>> = [FormObjCompSummarySection.FORM_CONTENT_ID, FormObjCompSummarySection.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property FormObjCompSummarySection.
   */
  export const _keys: { [keys: string]: Selectable<FormObjCompSummarySection> } = FormObjCompSummarySection._keyFields.reduce((acc: { [keys: string]: Selectable<FormObjCompSummarySection> }, field: Selectable<FormObjCompSummarySection>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
