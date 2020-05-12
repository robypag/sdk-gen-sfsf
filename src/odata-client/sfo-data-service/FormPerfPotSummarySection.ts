/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormPerfPotSummarySectionRequestBuilder } from './FormPerfPotSummarySectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormPerfPotSummarySection" of service "SFOData".
 */
export class FormPerfPotSummarySection extends Entity implements FormPerfPotSummarySectionType {
  /**
   * Technical entity name for FormPerfPotSummarySection.
   */
  static _entityName = 'FormPerfPotSummarySection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormPerfPotSummarySection.
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
   * One-to-many navigation property to the [[FormUserRatingComment]] entity.
   */
  othersSectionComments!: FormUserRatingComment[];
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  performanceRating!: FormUserRatingComment;
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  potentialRating!: FormUserRatingComment;
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  sectionComment!: FormUserRatingComment;
  /**
   * One-to-one navigation property to the [[FormSectionConfiguration]] entity.
   */
  sectionConfiguration!: FormSectionConfiguration;

  /**
   * Returns an entity builder to construct instances `FormPerfPotSummarySection`.
   * @returns A builder that constructs instances of entity type `FormPerfPotSummarySection`.
   */
  static builder(): EntityBuilderType<FormPerfPotSummarySection, FormPerfPotSummarySectionTypeForceMandatory> {
    return Entity.entityBuilder(FormPerfPotSummarySection);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormPerfPotSummarySection` entity type.
   * @returns A `FormPerfPotSummarySection` request builder.
   */
  static requestBuilder(): FormPerfPotSummarySectionRequestBuilder {
    return new FormPerfPotSummarySectionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormPerfPotSummarySection`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormPerfPotSummarySection`.
   */
  static customField(fieldName: string): CustomField<FormPerfPotSummarySection> {
    return Entity.customFieldSelector(fieldName, FormPerfPotSummarySection);
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

export interface FormPerfPotSummarySectionType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionDescription?: string;
  sectionIndex: number;
  sectionName?: string;
  othersSectionComments: FormUserRatingCommentType[];
  performanceRating: FormUserRatingCommentType;
  potentialRating: FormUserRatingCommentType;
  sectionComment: FormUserRatingCommentType;
  sectionConfiguration: FormSectionConfigurationType;
}

export interface FormPerfPotSummarySectionTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
  othersSectionComments: FormUserRatingCommentType[];
  performanceRating: FormUserRatingCommentType;
  potentialRating: FormUserRatingCommentType;
  sectionComment: FormUserRatingCommentType;
  sectionConfiguration: FormSectionConfigurationType;
}

export namespace FormPerfPotSummarySection {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormPerfPotSummarySection> = new BigNumberField('formContentId', FormPerfPotSummarySection, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormPerfPotSummarySection> = new BigNumberField('formDataId', FormPerfPotSummarySection, 'Edm.Int64');
  /**
   * Static representation of the [[sectionDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_DESCRIPTION: StringField<FormPerfPotSummarySection> = new StringField('sectionDescription', FormPerfPotSummarySection, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormPerfPotSummarySection> = new NumberField('sectionIndex', FormPerfPotSummarySection, 'Edm.Int32');
  /**
   * Static representation of the [[sectionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_NAME: StringField<FormPerfPotSummarySection> = new StringField('sectionName', FormPerfPotSummarySection, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[othersSectionComments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OTHERS_SECTION_COMMENTS: Link<FormPerfPotSummarySection, FormUserRatingComment> = new Link('othersSectionComments', FormPerfPotSummarySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[performanceRating]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERFORMANCE_RATING: OneToOneLink<FormPerfPotSummarySection, FormUserRatingComment> = new OneToOneLink('performanceRating', FormPerfPotSummarySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[potentialRating]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POTENTIAL_RATING: OneToOneLink<FormPerfPotSummarySection, FormUserRatingComment> = new OneToOneLink('potentialRating', FormPerfPotSummarySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[sectionComment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_COMMENT: OneToOneLink<FormPerfPotSummarySection, FormUserRatingComment> = new OneToOneLink('sectionComment', FormPerfPotSummarySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[sectionConfiguration]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_CONFIGURATION: OneToOneLink<FormPerfPotSummarySection, FormSectionConfiguration> = new OneToOneLink('sectionConfiguration', FormPerfPotSummarySection, FormSectionConfiguration);
  /**
   * All fields of the FormPerfPotSummarySection entity.
   */
  export const _allFields: Array<BigNumberField<FormPerfPotSummarySection> | StringField<FormPerfPotSummarySection> | NumberField<FormPerfPotSummarySection> | Link<FormPerfPotSummarySection, FormUserRatingComment> | OneToOneLink<FormPerfPotSummarySection, FormUserRatingComment> | OneToOneLink<FormPerfPotSummarySection, FormSectionConfiguration>> = [
    FormPerfPotSummarySection.FORM_CONTENT_ID,
    FormPerfPotSummarySection.FORM_DATA_ID,
    FormPerfPotSummarySection.SECTION_DESCRIPTION,
    FormPerfPotSummarySection.SECTION_INDEX,
    FormPerfPotSummarySection.SECTION_NAME,
    FormPerfPotSummarySection.OTHERS_SECTION_COMMENTS,
    FormPerfPotSummarySection.PERFORMANCE_RATING,
    FormPerfPotSummarySection.POTENTIAL_RATING,
    FormPerfPotSummarySection.SECTION_COMMENT,
    FormPerfPotSummarySection.SECTION_CONFIGURATION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormPerfPotSummarySection> = new AllFields('*', FormPerfPotSummarySection);
  /**
   * All key fields of the FormPerfPotSummarySection entity.
   */
  export const _keyFields: Array<Selectable<FormPerfPotSummarySection>> = [FormPerfPotSummarySection.FORM_CONTENT_ID, FormPerfPotSummarySection.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property FormPerfPotSummarySection.
   */
  export const _keys: { [keys: string]: Selectable<FormPerfPotSummarySection> } = FormPerfPotSummarySection._keyFields.reduce((acc: { [keys: string]: Selectable<FormPerfPotSummarySection> }, field: Selectable<FormPerfPotSummarySection>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
