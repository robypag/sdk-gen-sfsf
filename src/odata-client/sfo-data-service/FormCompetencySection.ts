/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormCompetencySectionRequestBuilder } from './FormCompetencySectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormCompetencySection" of service "SFOData".
 */
export class FormCompetencySection extends Entity implements FormCompetencySectionType {
  /**
   * Technical entity name for FormCompetencySection.
   */
  static _entityName = 'FormCompetencySection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormCompetencySection.
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
   * sectionWeight.
   * @nullable
   */
  sectionWeight?: string;
  /**
   * sectionWeightKey.
   * @nullable
   */
  sectionWeightKey?: string;
  /**
   * One-to-many navigation property to the [[FormCompetency]] entity.
   */
  competencies!: FormCompetency[];
  /**
   * One-to-many navigation property to the [[FormUserRatingComment]] entity.
   */
  othersRatingComment!: FormUserRatingComment[];
  /**
   * One-to-one navigation property to the [[FormSectionConfiguration]] entity.
   */
  sectionConfiguration!: FormSectionConfiguration;
  /**
   * One-to-one navigation property to the [[FormUserRatingComment]] entity.
   */
  selfRatingComment!: FormUserRatingComment;

  /**
   * Returns an entity builder to construct instances `FormCompetencySection`.
   * @returns A builder that constructs instances of entity type `FormCompetencySection`.
   */
  static builder(): EntityBuilderType<FormCompetencySection, FormCompetencySectionTypeForceMandatory> {
    return Entity.entityBuilder(FormCompetencySection);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormCompetencySection` entity type.
   * @returns A `FormCompetencySection` request builder.
   */
  static requestBuilder(): FormCompetencySectionRequestBuilder {
    return new FormCompetencySectionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormCompetencySection`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormCompetencySection`.
   */
  static customField(fieldName: string): CustomField<FormCompetencySection> {
    return Entity.customFieldSelector(fieldName, FormCompetencySection);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormCompetency, FormCompetencyType } from './FormCompetency';
import { FormUserRatingComment, FormUserRatingCommentType } from './FormUserRatingComment';
import { FormSectionConfiguration, FormSectionConfigurationType } from './FormSectionConfiguration';

export interface FormCompetencySectionType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionDescription?: string;
  sectionIndex: number;
  sectionName?: string;
  sectionWeight?: string;
  sectionWeightKey?: string;
  competencies: FormCompetencyType[];
  othersRatingComment: FormUserRatingCommentType[];
  sectionConfiguration: FormSectionConfigurationType;
  selfRatingComment: FormUserRatingCommentType;
}

export interface FormCompetencySectionTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
  sectionWeight: string;
  sectionWeightKey: string;
  competencies: FormCompetencyType[];
  othersRatingComment: FormUserRatingCommentType[];
  sectionConfiguration: FormSectionConfigurationType;
  selfRatingComment: FormUserRatingCommentType;
}

export namespace FormCompetencySection {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormCompetencySection> = new BigNumberField('formContentId', FormCompetencySection, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormCompetencySection> = new BigNumberField('formDataId', FormCompetencySection, 'Edm.Int64');
  /**
   * Static representation of the [[sectionDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_DESCRIPTION: StringField<FormCompetencySection> = new StringField('sectionDescription', FormCompetencySection, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormCompetencySection> = new NumberField('sectionIndex', FormCompetencySection, 'Edm.Int32');
  /**
   * Static representation of the [[sectionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_NAME: StringField<FormCompetencySection> = new StringField('sectionName', FormCompetencySection, 'Edm.String');
  /**
   * Static representation of the [[sectionWeight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_WEIGHT: StringField<FormCompetencySection> = new StringField('sectionWeight', FormCompetencySection, 'Edm.String');
  /**
   * Static representation of the [[sectionWeightKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_WEIGHT_KEY: StringField<FormCompetencySection> = new StringField('sectionWeightKey', FormCompetencySection, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[competencies]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCIES: Link<FormCompetencySection, FormCompetency> = new Link('competencies', FormCompetencySection, FormCompetency);
  /**
   * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OTHERS_RATING_COMMENT: Link<FormCompetencySection, FormUserRatingComment> = new Link('othersRatingComment', FormCompetencySection, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[sectionConfiguration]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_CONFIGURATION: OneToOneLink<FormCompetencySection, FormSectionConfiguration> = new OneToOneLink('sectionConfiguration', FormCompetencySection, FormSectionConfiguration);
  /**
   * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATING_COMMENT: OneToOneLink<FormCompetencySection, FormUserRatingComment> = new OneToOneLink('selfRatingComment', FormCompetencySection, FormUserRatingComment);
  /**
   * All fields of the FormCompetencySection entity.
   */
  export const _allFields: Array<BigNumberField<FormCompetencySection> | StringField<FormCompetencySection> | NumberField<FormCompetencySection> | Link<FormCompetencySection, FormCompetency> | Link<FormCompetencySection, FormUserRatingComment> | OneToOneLink<FormCompetencySection, FormSectionConfiguration> | OneToOneLink<FormCompetencySection, FormUserRatingComment>> = [
    FormCompetencySection.FORM_CONTENT_ID,
    FormCompetencySection.FORM_DATA_ID,
    FormCompetencySection.SECTION_DESCRIPTION,
    FormCompetencySection.SECTION_INDEX,
    FormCompetencySection.SECTION_NAME,
    FormCompetencySection.SECTION_WEIGHT,
    FormCompetencySection.SECTION_WEIGHT_KEY,
    FormCompetencySection.COMPETENCIES,
    FormCompetencySection.OTHERS_RATING_COMMENT,
    FormCompetencySection.SECTION_CONFIGURATION,
    FormCompetencySection.SELF_RATING_COMMENT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormCompetencySection> = new AllFields('*', FormCompetencySection);
  /**
   * All key fields of the FormCompetencySection entity.
   */
  export const _keyFields: Array<Selectable<FormCompetencySection>> = [FormCompetencySection.FORM_CONTENT_ID, FormCompetencySection.FORM_DATA_ID, FormCompetencySection.SECTION_INDEX];
  /**
   * Mapping of all key field names to the respective static field property FormCompetencySection.
   */
  export const _keys: { [keys: string]: Selectable<FormCompetencySection> } = FormCompetencySection._keyFields.reduce((acc: { [keys: string]: Selectable<FormCompetencySection> }, field: Selectable<FormCompetencySection>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
