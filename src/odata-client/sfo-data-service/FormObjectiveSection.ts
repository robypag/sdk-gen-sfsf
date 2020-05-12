/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormObjectiveSectionRequestBuilder } from './FormObjectiveSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormObjectiveSection" of service "SFOData".
 */
export class FormObjectiveSection extends Entity implements FormObjectiveSectionType {
  /**
   * Technical entity name for FormObjectiveSection.
   */
  static _entityName = 'FormObjectiveSection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormObjectiveSection.
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
   * objPlanId.
   * @nullable
   */
  objPlanId?: BigNumber;
  /**
   * objPlanType.
   * @nullable
   */
  objPlanType?: string;
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
   * One-to-many navigation property to the [[FormObjective]] entity.
   */
  objectives!: FormObjective[];
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
   * Returns an entity builder to construct instances `FormObjectiveSection`.
   * @returns A builder that constructs instances of entity type `FormObjectiveSection`.
   */
  static builder(): EntityBuilderType<FormObjectiveSection, FormObjectiveSectionTypeForceMandatory> {
    return Entity.entityBuilder(FormObjectiveSection);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormObjectiveSection` entity type.
   * @returns A `FormObjectiveSection` request builder.
   */
  static requestBuilder(): FormObjectiveSectionRequestBuilder {
    return new FormObjectiveSectionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveSection`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormObjectiveSection`.
   */
  static customField(fieldName: string): CustomField<FormObjectiveSection> {
    return Entity.customFieldSelector(fieldName, FormObjectiveSection);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormObjective, FormObjectiveType } from './FormObjective';
import { FormUserRatingComment, FormUserRatingCommentType } from './FormUserRatingComment';
import { FormSectionConfiguration, FormSectionConfigurationType } from './FormSectionConfiguration';

export interface FormObjectiveSectionType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  objPlanId?: BigNumber;
  objPlanType?: string;
  sectionDescription?: string;
  sectionIndex: number;
  sectionName?: string;
  sectionWeight?: string;
  sectionWeightKey?: string;
  objectives: FormObjectiveType[];
  othersRatingComment: FormUserRatingCommentType[];
  sectionConfiguration: FormSectionConfigurationType;
  selfRatingComment: FormUserRatingCommentType;
}

export interface FormObjectiveSectionTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  objPlanId: BigNumber;
  objPlanType: string;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
  sectionWeight: string;
  sectionWeightKey: string;
  objectives: FormObjectiveType[];
  othersRatingComment: FormUserRatingCommentType[];
  sectionConfiguration: FormSectionConfigurationType;
  selfRatingComment: FormUserRatingCommentType;
}

export namespace FormObjectiveSection {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormObjectiveSection> = new BigNumberField('formContentId', FormObjectiveSection, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormObjectiveSection> = new BigNumberField('formDataId', FormObjectiveSection, 'Edm.Int64');
  /**
   * Static representation of the [[objPlanId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJ_PLAN_ID: BigNumberField<FormObjectiveSection> = new BigNumberField('objPlanId', FormObjectiveSection, 'Edm.Int64');
  /**
   * Static representation of the [[objPlanType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJ_PLAN_TYPE: StringField<FormObjectiveSection> = new StringField('objPlanType', FormObjectiveSection, 'Edm.String');
  /**
   * Static representation of the [[sectionDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_DESCRIPTION: StringField<FormObjectiveSection> = new StringField('sectionDescription', FormObjectiveSection, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormObjectiveSection> = new NumberField('sectionIndex', FormObjectiveSection, 'Edm.Int32');
  /**
   * Static representation of the [[sectionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_NAME: StringField<FormObjectiveSection> = new StringField('sectionName', FormObjectiveSection, 'Edm.String');
  /**
   * Static representation of the [[sectionWeight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_WEIGHT: StringField<FormObjectiveSection> = new StringField('sectionWeight', FormObjectiveSection, 'Edm.String');
  /**
   * Static representation of the [[sectionWeightKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_WEIGHT_KEY: StringField<FormObjectiveSection> = new StringField('sectionWeightKey', FormObjectiveSection, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[objectives]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECTIVES: Link<FormObjectiveSection, FormObjective> = new Link('objectives', FormObjectiveSection, FormObjective);
  /**
   * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OTHERS_RATING_COMMENT: Link<FormObjectiveSection, FormUserRatingComment> = new Link('othersRatingComment', FormObjectiveSection, FormUserRatingComment);
  /**
   * Static representation of the one-to-one navigation property [[sectionConfiguration]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_CONFIGURATION: OneToOneLink<FormObjectiveSection, FormSectionConfiguration> = new OneToOneLink('sectionConfiguration', FormObjectiveSection, FormSectionConfiguration);
  /**
   * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATING_COMMENT: OneToOneLink<FormObjectiveSection, FormUserRatingComment> = new OneToOneLink('selfRatingComment', FormObjectiveSection, FormUserRatingComment);
  /**
   * All fields of the FormObjectiveSection entity.
   */
  export const _allFields: Array<BigNumberField<FormObjectiveSection> | StringField<FormObjectiveSection> | NumberField<FormObjectiveSection> | Link<FormObjectiveSection, FormObjective> | Link<FormObjectiveSection, FormUserRatingComment> | OneToOneLink<FormObjectiveSection, FormSectionConfiguration> | OneToOneLink<FormObjectiveSection, FormUserRatingComment>> = [
    FormObjectiveSection.FORM_CONTENT_ID,
    FormObjectiveSection.FORM_DATA_ID,
    FormObjectiveSection.OBJ_PLAN_ID,
    FormObjectiveSection.OBJ_PLAN_TYPE,
    FormObjectiveSection.SECTION_DESCRIPTION,
    FormObjectiveSection.SECTION_INDEX,
    FormObjectiveSection.SECTION_NAME,
    FormObjectiveSection.SECTION_WEIGHT,
    FormObjectiveSection.SECTION_WEIGHT_KEY,
    FormObjectiveSection.OBJECTIVES,
    FormObjectiveSection.OTHERS_RATING_COMMENT,
    FormObjectiveSection.SECTION_CONFIGURATION,
    FormObjectiveSection.SELF_RATING_COMMENT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormObjectiveSection> = new AllFields('*', FormObjectiveSection);
  /**
   * All key fields of the FormObjectiveSection entity.
   */
  export const _keyFields: Array<Selectable<FormObjectiveSection>> = [FormObjectiveSection.FORM_CONTENT_ID, FormObjectiveSection.FORM_DATA_ID, FormObjectiveSection.SECTION_INDEX];
  /**
   * Mapping of all key field names to the respective static field property FormObjectiveSection.
   */
  export const _keys: { [keys: string]: Selectable<FormObjectiveSection> } = FormObjectiveSection._keyFields.reduce((acc: { [keys: string]: Selectable<FormObjectiveSection> }, field: Selectable<FormObjectiveSection>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
