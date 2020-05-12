/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InterviewIndividualAssessmentRequestBuilder } from './InterviewIndividualAssessmentRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "InterviewIndividualAssessment" of service "SFOData".
 */
export class InterviewIndividualAssessment extends Entity implements InterviewIndividualAssessmentType {
  /**
   * Technical entity name for InterviewIndividualAssessment.
   */
  static _entityName = 'InterviewIndividualAssessment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for InterviewIndividualAssessment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Comments.
   * @nullable
   */
  comments?: string;
  /**
   * Interview Individual Assessment Id.
   */
  interviewIndividualAssessmentId!: BigNumber;
  /**
   * Interview Overall Assessment Id.
   */
  interviewOverallAssessmentId!: BigNumber;
  /**
   * IsDeleted.
   * @nullable
   */
  isDeleted?: string;
  /**
   * Rating.
   */
  rating!: string;
  /**
   * Ref Id.
   */
  refId!: BigNumber;
  /**
   * Type.
   */
  type!: string;
  /**
   * One-to-one navigation property to the [[CompetencyEntity]] entity.
   */
  jobProfileCompetency!: CompetencyEntity;
  /**
   * One-to-many navigation property to the [[RcmCompetency]] entity.
   */
  rcmCompetency!: RcmCompetency[];

  /**
   * Returns an entity builder to construct instances `InterviewIndividualAssessment`.
   * @returns A builder that constructs instances of entity type `InterviewIndividualAssessment`.
   */
  static builder(): EntityBuilderType<InterviewIndividualAssessment, InterviewIndividualAssessmentTypeForceMandatory> {
    return Entity.entityBuilder(InterviewIndividualAssessment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `InterviewIndividualAssessment` entity type.
   * @returns A `InterviewIndividualAssessment` request builder.
   */
  static requestBuilder(): InterviewIndividualAssessmentRequestBuilder {
    return new InterviewIndividualAssessmentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `InterviewIndividualAssessment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `InterviewIndividualAssessment`.
   */
  static customField(fieldName: string): CustomField<InterviewIndividualAssessment> {
    return Entity.customFieldSelector(fieldName, InterviewIndividualAssessment);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { CompetencyEntity, CompetencyEntityType } from './CompetencyEntity';
import { RcmCompetency, RcmCompetencyType } from './RcmCompetency';

export interface InterviewIndividualAssessmentType {
  comments?: string;
  interviewIndividualAssessmentId: BigNumber;
  interviewOverallAssessmentId: BigNumber;
  isDeleted?: string;
  rating: string;
  refId: BigNumber;
  type: string;
  jobProfileCompetency: CompetencyEntityType;
  rcmCompetency: RcmCompetencyType[];
}

export interface InterviewIndividualAssessmentTypeForceMandatory {
  comments: string;
  interviewIndividualAssessmentId: BigNumber;
  interviewOverallAssessmentId: BigNumber;
  isDeleted: string;
  rating: string;
  refId: BigNumber;
  type: string;
  jobProfileCompetency: CompetencyEntityType;
  rcmCompetency: RcmCompetencyType[];
}

export namespace InterviewIndividualAssessment {
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<InterviewIndividualAssessment> = new StringField('comments', InterviewIndividualAssessment, 'Edm.String');
  /**
   * Static representation of the [[interviewIndividualAssessmentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVIEW_INDIVIDUAL_ASSESSMENT_ID: BigNumberField<InterviewIndividualAssessment> = new BigNumberField('interviewIndividualAssessmentId', InterviewIndividualAssessment, 'Edm.Int64');
  /**
   * Static representation of the [[interviewOverallAssessmentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVIEW_OVERALL_ASSESSMENT_ID: BigNumberField<InterviewIndividualAssessment> = new BigNumberField('interviewOverallAssessmentId', InterviewIndividualAssessment, 'Edm.Int64');
  /**
   * Static representation of the [[isDeleted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DELETED: StringField<InterviewIndividualAssessment> = new StringField('isDeleted', InterviewIndividualAssessment, 'Edm.String');
  /**
   * Static representation of the [[rating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING: StringField<InterviewIndividualAssessment> = new StringField('rating', InterviewIndividualAssessment, 'Edm.String');
  /**
   * Static representation of the [[refId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REF_ID: BigNumberField<InterviewIndividualAssessment> = new BigNumberField('refId', InterviewIndividualAssessment, 'Edm.Int64');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<InterviewIndividualAssessment> = new StringField('type', InterviewIndividualAssessment, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[jobProfileCompetency]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_COMPETENCY: OneToOneLink<InterviewIndividualAssessment, CompetencyEntity> = new OneToOneLink('jobProfileCompetency', InterviewIndividualAssessment, CompetencyEntity);
  /**
   * Static representation of the one-to-many navigation property [[rcmCompetency]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RCM_COMPETENCY: Link<InterviewIndividualAssessment, RcmCompetency> = new Link('rcmCompetency', InterviewIndividualAssessment, RcmCompetency);
  /**
   * All fields of the InterviewIndividualAssessment entity.
   */
  export const _allFields: Array<StringField<InterviewIndividualAssessment> | BigNumberField<InterviewIndividualAssessment> | OneToOneLink<InterviewIndividualAssessment, CompetencyEntity> | Link<InterviewIndividualAssessment, RcmCompetency>> = [
    InterviewIndividualAssessment.COMMENTS,
    InterviewIndividualAssessment.INTERVIEW_INDIVIDUAL_ASSESSMENT_ID,
    InterviewIndividualAssessment.INTERVIEW_OVERALL_ASSESSMENT_ID,
    InterviewIndividualAssessment.IS_DELETED,
    InterviewIndividualAssessment.RATING,
    InterviewIndividualAssessment.REF_ID,
    InterviewIndividualAssessment.TYPE,
    InterviewIndividualAssessment.JOB_PROFILE_COMPETENCY,
    InterviewIndividualAssessment.RCM_COMPETENCY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<InterviewIndividualAssessment> = new AllFields('*', InterviewIndividualAssessment);
  /**
   * All key fields of the InterviewIndividualAssessment entity.
   */
  export const _keyFields: Array<Selectable<InterviewIndividualAssessment>> = [InterviewIndividualAssessment.INTERVIEW_INDIVIDUAL_ASSESSMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property InterviewIndividualAssessment.
   */
  export const _keys: { [keys: string]: Selectable<InterviewIndividualAssessment> } = InterviewIndividualAssessment._keyFields.reduce((acc: { [keys: string]: Selectable<InterviewIndividualAssessment> }, field: Selectable<InterviewIndividualAssessment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
