/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Form360RaterRequestBuilder } from './Form360RaterRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Form360Rater" of service "SFOData".
 */
export class Form360Rater extends Entity implements Form360RaterType {
  /**
   * Technical entity name for Form360Rater.
   */
  static _entityName = 'Form360Rater';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Form360Rater.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * category.
   * @nullable
   */
  category?: string;
  /**
   * cellPhone.
   * @nullable
   */
  cellPhone?: string;
  /**
   * company.
   * @nullable
   */
  company?: string;
  /**
   * department.
   * @nullable
   */
  department?: string;
  /**
   * division.
   * @nullable
   */
  division?: string;
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * internalOrExternal.
   * @nullable
   */
  internalOrExternal?: string;
  /**
   * jobCode.
   * @nullable
   */
  jobCode?: string;
  /**
   * jobTitle.
   * @nullable
   */
  jobTitle?: string;
  /**
   * mail.
   * @nullable
   */
  mail?: string;
  /**
   * manager.
   * @nullable
   */
  manager?: string;
  /**
   * participantID.
   * @nullable
   */
  participantId?: string;
  /**
   * participantName.
   * @nullable
   */
  participantName?: string;
  /**
   * participantRating.
   * @nullable
   */
  participantRating?: string;
  /**
   * participantRatingStatus.
   * @nullable
   */
  participantRatingStatus?: string;
  /**
   * One-to-many navigation property to the [[FormCompetencySection]] entity.
   */
  competencySections!: FormCompetencySection[];
  /**
   * One-to-many navigation property to the [[FormCustomSection]] entity.
   */
  customSections!: FormCustomSection[];
  /**
   * One-to-many navigation property to the [[FormObjectiveSection]] entity.
   */
  objectiveSections!: FormObjectiveSection[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  participantUser!: User;
  /**
   * One-to-one navigation property to the [[FormSummarySection]] entity.
   */
  summarySection!: FormSummarySection;

  /**
   * Returns an entity builder to construct instances `Form360Rater`.
   * @returns A builder that constructs instances of entity type `Form360Rater`.
   */
  static builder(): EntityBuilderType<Form360Rater, Form360RaterTypeForceMandatory> {
    return Entity.entityBuilder(Form360Rater);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Form360Rater` entity type.
   * @returns A `Form360Rater` request builder.
   */
  static requestBuilder(): Form360RaterRequestBuilder {
    return new Form360RaterRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360Rater`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Form360Rater`.
   */
  static customField(fieldName: string): CustomField<Form360Rater> {
    return Entity.customFieldSelector(fieldName, Form360Rater);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormCompetencySection, FormCompetencySectionType } from './FormCompetencySection';
import { FormCustomSection, FormCustomSectionType } from './FormCustomSection';
import { FormObjectiveSection, FormObjectiveSectionType } from './FormObjectiveSection';
import { User, UserType } from './User';
import { FormSummarySection, FormSummarySectionType } from './FormSummarySection';

export interface Form360RaterType {
  category?: string;
  cellPhone?: string;
  company?: string;
  department?: string;
  division?: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  internalOrExternal?: string;
  jobCode?: string;
  jobTitle?: string;
  mail?: string;
  manager?: string;
  participantId?: string;
  participantName?: string;
  participantRating?: string;
  participantRatingStatus?: string;
  competencySections: FormCompetencySectionType[];
  customSections: FormCustomSectionType[];
  objectiveSections: FormObjectiveSectionType[];
  participantUser: UserType;
  summarySection: FormSummarySectionType;
}

export interface Form360RaterTypeForceMandatory {
  category: string;
  cellPhone: string;
  company: string;
  department: string;
  division: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  internalOrExternal: string;
  jobCode: string;
  jobTitle: string;
  mail: string;
  manager: string;
  participantId: string;
  participantName: string;
  participantRating: string;
  participantRatingStatus: string;
  competencySections: FormCompetencySectionType[];
  customSections: FormCustomSectionType[];
  objectiveSections: FormObjectiveSectionType[];
  participantUser: UserType;
  summarySection: FormSummarySectionType;
}

export namespace Form360Rater {
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<Form360Rater> = new StringField('category', Form360Rater, 'Edm.String');
  /**
   * Static representation of the [[cellPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CELL_PHONE: StringField<Form360Rater> = new StringField('cellPhone', Form360Rater, 'Edm.String');
  /**
   * Static representation of the [[company]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY: StringField<Form360Rater> = new StringField('company', Form360Rater, 'Edm.String');
  /**
   * Static representation of the [[department]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: StringField<Form360Rater> = new StringField('department', Form360Rater, 'Edm.String');
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION: StringField<Form360Rater> = new StringField('division', Form360Rater, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<Form360Rater> = new BigNumberField('formContentId', Form360Rater, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<Form360Rater> = new BigNumberField('formDataId', Form360Rater, 'Edm.Int64');
  /**
   * Static representation of the [[internalOrExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_OR_EXTERNAL: StringField<Form360Rater> = new StringField('internalOrExternal', Form360Rater, 'Edm.String');
  /**
   * Static representation of the [[jobCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE: StringField<Form360Rater> = new StringField('jobCode', Form360Rater, 'Edm.String');
  /**
   * Static representation of the [[jobTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_TITLE: StringField<Form360Rater> = new StringField('jobTitle', Form360Rater, 'Edm.String');
  /**
   * Static representation of the [[mail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIL: StringField<Form360Rater> = new StringField('mail', Form360Rater, 'Edm.String');
  /**
   * Static representation of the [[manager]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER: StringField<Form360Rater> = new StringField('manager', Form360Rater, 'Edm.String');
  /**
   * Static representation of the [[participantId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_ID: StringField<Form360Rater> = new StringField('participantID', Form360Rater, 'Edm.String');
  /**
   * Static representation of the [[participantName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_NAME: StringField<Form360Rater> = new StringField('participantName', Form360Rater, 'Edm.String');
  /**
   * Static representation of the [[participantRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_RATING: StringField<Form360Rater> = new StringField('participantRating', Form360Rater, 'Edm.String');
  /**
   * Static representation of the [[participantRatingStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_RATING_STATUS: StringField<Form360Rater> = new StringField('participantRatingStatus', Form360Rater, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[competencySections]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY_SECTIONS: Link<Form360Rater, FormCompetencySection> = new Link('competencySections', Form360Rater, FormCompetencySection);
  /**
   * Static representation of the one-to-many navigation property [[customSections]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_SECTIONS: Link<Form360Rater, FormCustomSection> = new Link('customSections', Form360Rater, FormCustomSection);
  /**
   * Static representation of the one-to-many navigation property [[objectiveSections]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECTIVE_SECTIONS: Link<Form360Rater, FormObjectiveSection> = new Link('objectiveSections', Form360Rater, FormObjectiveSection);
  /**
   * Static representation of the one-to-one navigation property [[participantUser]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_USER: OneToOneLink<Form360Rater, User> = new OneToOneLink('participantUser', Form360Rater, User);
  /**
   * Static representation of the one-to-one navigation property [[summarySection]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUMMARY_SECTION: OneToOneLink<Form360Rater, FormSummarySection> = new OneToOneLink('summarySection', Form360Rater, FormSummarySection);
  /**
   * All fields of the Form360Rater entity.
   */
  export const _allFields: Array<StringField<Form360Rater> | BigNumberField<Form360Rater> | Link<Form360Rater, FormCompetencySection> | Link<Form360Rater, FormCustomSection> | Link<Form360Rater, FormObjectiveSection> | OneToOneLink<Form360Rater, User> | OneToOneLink<Form360Rater, FormSummarySection>> = [
    Form360Rater.CATEGORY,
    Form360Rater.CELL_PHONE,
    Form360Rater.COMPANY,
    Form360Rater.DEPARTMENT,
    Form360Rater.DIVISION,
    Form360Rater.FORM_CONTENT_ID,
    Form360Rater.FORM_DATA_ID,
    Form360Rater.INTERNAL_OR_EXTERNAL,
    Form360Rater.JOB_CODE,
    Form360Rater.JOB_TITLE,
    Form360Rater.MAIL,
    Form360Rater.MANAGER,
    Form360Rater.PARTICIPANT_ID,
    Form360Rater.PARTICIPANT_NAME,
    Form360Rater.PARTICIPANT_RATING,
    Form360Rater.PARTICIPANT_RATING_STATUS,
    Form360Rater.COMPETENCY_SECTIONS,
    Form360Rater.CUSTOM_SECTIONS,
    Form360Rater.OBJECTIVE_SECTIONS,
    Form360Rater.PARTICIPANT_USER,
    Form360Rater.SUMMARY_SECTION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Form360Rater> = new AllFields('*', Form360Rater);
  /**
   * All key fields of the Form360Rater entity.
   */
  export const _keyFields: Array<Selectable<Form360Rater>> = [Form360Rater.FORM_CONTENT_ID, Form360Rater.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property Form360Rater.
   */
  export const _keys: { [keys: string]: Selectable<Form360Rater> } = Form360Rater._keyFields.reduce((acc: { [keys: string]: Selectable<Form360Rater> }, field: Selectable<Form360Rater>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
