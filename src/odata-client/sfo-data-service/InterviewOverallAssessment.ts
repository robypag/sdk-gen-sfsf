/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InterviewOverallAssessmentRequestBuilder } from './InterviewOverallAssessmentRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "InterviewOverallAssessment" of service "SFOData".
 */
export class InterviewOverallAssessment extends Entity implements InterviewOverallAssessmentType {
  /**
   * Technical entity name for InterviewOverallAssessment.
   */
  static _entityName = 'InterviewOverallAssessment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for InterviewOverallAssessment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Average Rating.
   * @nullable
   */
  averageRating?: number;
  /**
   * Comments.
   * @nullable
   */
  comments?: string;
  /**
   * Interview Overall Assessment Id.
   */
  interviewOverallAssessmentId!: BigNumber;
  /**
   * Interview Ref Id.
   */
  interviewRefId!: BigNumber;
  /**
   * Overall Rating.
   */
  overallRating!: string;
  /**
   * Type.
   * @nullable
   */
  type?: string;
  /**
   * One-to-many navigation property to the [[InterviewIndividualAssessment]] entity.
   */
  interviewIndividualAssessment!: InterviewIndividualAssessment[];
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  interviewNotes!: Attachment;

  /**
   * Returns an entity builder to construct instances `InterviewOverallAssessment`.
   * @returns A builder that constructs instances of entity type `InterviewOverallAssessment`.
   */
  static builder(): EntityBuilderType<InterviewOverallAssessment, InterviewOverallAssessmentTypeForceMandatory> {
    return Entity.entityBuilder(InterviewOverallAssessment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `InterviewOverallAssessment` entity type.
   * @returns A `InterviewOverallAssessment` request builder.
   */
  static requestBuilder(): InterviewOverallAssessmentRequestBuilder {
    return new InterviewOverallAssessmentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `InterviewOverallAssessment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `InterviewOverallAssessment`.
   */
  static customField(fieldName: string): CustomField<InterviewOverallAssessment> {
    return Entity.customFieldSelector(fieldName, InterviewOverallAssessment);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { InterviewIndividualAssessment, InterviewIndividualAssessmentType } from './InterviewIndividualAssessment';
import { Attachment, AttachmentType } from './Attachment';

export interface InterviewOverallAssessmentType {
  averageRating?: number;
  comments?: string;
  interviewOverallAssessmentId: BigNumber;
  interviewRefId: BigNumber;
  overallRating: string;
  type?: string;
  interviewIndividualAssessment: InterviewIndividualAssessmentType[];
  interviewNotes: AttachmentType;
}

export interface InterviewOverallAssessmentTypeForceMandatory {
  averageRating: number;
  comments: string;
  interviewOverallAssessmentId: BigNumber;
  interviewRefId: BigNumber;
  overallRating: string;
  type: string;
  interviewIndividualAssessment: InterviewIndividualAssessmentType[];
  interviewNotes: AttachmentType;
}

export namespace InterviewOverallAssessment {
  /**
   * Static representation of the [[averageRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AVERAGE_RATING: NumberField<InterviewOverallAssessment> = new NumberField('averageRating', InterviewOverallAssessment, 'Edm.Double');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<InterviewOverallAssessment> = new StringField('comments', InterviewOverallAssessment, 'Edm.String');
  /**
   * Static representation of the [[interviewOverallAssessmentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVIEW_OVERALL_ASSESSMENT_ID: BigNumberField<InterviewOverallAssessment> = new BigNumberField('interviewOverallAssessmentId', InterviewOverallAssessment, 'Edm.Int64');
  /**
   * Static representation of the [[interviewRefId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVIEW_REF_ID: BigNumberField<InterviewOverallAssessment> = new BigNumberField('interviewRefId', InterviewOverallAssessment, 'Edm.Int64');
  /**
   * Static representation of the [[overallRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERALL_RATING: StringField<InterviewOverallAssessment> = new StringField('overallRating', InterviewOverallAssessment, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<InterviewOverallAssessment> = new StringField('type', InterviewOverallAssessment, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[interviewIndividualAssessment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVIEW_INDIVIDUAL_ASSESSMENT: Link<InterviewOverallAssessment, InterviewIndividualAssessment> = new Link('interviewIndividualAssessment', InterviewOverallAssessment, InterviewIndividualAssessment);
  /**
   * Static representation of the one-to-one navigation property [[interviewNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVIEW_NOTES: OneToOneLink<InterviewOverallAssessment, Attachment> = new OneToOneLink('interviewNotes', InterviewOverallAssessment, Attachment);
  /**
   * All fields of the InterviewOverallAssessment entity.
   */
  export const _allFields: Array<NumberField<InterviewOverallAssessment> | StringField<InterviewOverallAssessment> | BigNumberField<InterviewOverallAssessment> | Link<InterviewOverallAssessment, InterviewIndividualAssessment> | OneToOneLink<InterviewOverallAssessment, Attachment>> = [
    InterviewOverallAssessment.AVERAGE_RATING,
    InterviewOverallAssessment.COMMENTS,
    InterviewOverallAssessment.INTERVIEW_OVERALL_ASSESSMENT_ID,
    InterviewOverallAssessment.INTERVIEW_REF_ID,
    InterviewOverallAssessment.OVERALL_RATING,
    InterviewOverallAssessment.TYPE,
    InterviewOverallAssessment.INTERVIEW_INDIVIDUAL_ASSESSMENT,
    InterviewOverallAssessment.INTERVIEW_NOTES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<InterviewOverallAssessment> = new AllFields('*', InterviewOverallAssessment);
  /**
   * All key fields of the InterviewOverallAssessment entity.
   */
  export const _keyFields: Array<Selectable<InterviewOverallAssessment>> = [InterviewOverallAssessment.INTERVIEW_OVERALL_ASSESSMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property InterviewOverallAssessment.
   */
  export const _keys: { [keys: string]: Selectable<InterviewOverallAssessment> } = InterviewOverallAssessment._keyFields.reduce((acc: { [keys: string]: Selectable<InterviewOverallAssessment> }, field: Selectable<InterviewOverallAssessment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
