/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ContinuousFeedbackRequestRequestBuilder } from './ContinuousFeedbackRequestRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ContinuousFeedbackRequest" of service "SFOData".
 */
export class ContinuousFeedbackRequest extends Entity implements ContinuousFeedbackRequestType {
  /**
   * Technical entity name for ContinuousFeedbackRequest.
   */
  static _entityName = 'ContinuousFeedbackRequest';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ContinuousFeedbackRequest.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * feedbackId.
   * @nullable
   */
  feedbackId?: BigNumber;
  /**
   * requestId.
   */
  requestId!: BigNumber;
  /**
   * requestText.
   * Maximum length: 4000.
   */
  requestText!: string;
  /**
   * requestedDate.
   * @nullable
   */
  requestedDate?: Moment;
  /**
   * requestedForAchievementId.
   */
  requestedForAchievementId!: string;
  /**
   * requestedForActivityId.
   */
  requestedForActivityId!: string;
  /**
   * requesteeId.
   */
  requesteeId!: string;
  /**
   * requesterId.
   */
  requesterId!: string;
  /**
   * subjectUserId.
   */
  subjectUserId!: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  feedbackRequestToFeedbackRequesteeNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  feedbackRequestToFeedbackRequesterNav!: User;
  /**
   * One-to-one navigation property to the [[ContinuousFeedback]] entity.
   */
  feedbackRequestToFeedbackResponseNav!: ContinuousFeedback;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  feedbackRequestToSubjectUserNav!: User;

  /**
   * Returns an entity builder to construct instances `ContinuousFeedbackRequest`.
   * @returns A builder that constructs instances of entity type `ContinuousFeedbackRequest`.
   */
  static builder(): EntityBuilderType<ContinuousFeedbackRequest, ContinuousFeedbackRequestTypeForceMandatory> {
    return Entity.entityBuilder(ContinuousFeedbackRequest);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ContinuousFeedbackRequest` entity type.
   * @returns A `ContinuousFeedbackRequest` request builder.
   */
  static requestBuilder(): ContinuousFeedbackRequestRequestBuilder {
    return new ContinuousFeedbackRequestRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ContinuousFeedbackRequest`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ContinuousFeedbackRequest`.
   */
  static customField(fieldName: string): CustomField<ContinuousFeedbackRequest> {
    return Entity.customFieldSelector(fieldName, ContinuousFeedbackRequest);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { User, UserType } from './User';
import { ContinuousFeedback, ContinuousFeedbackType } from './ContinuousFeedback';

export interface ContinuousFeedbackRequestType {
  feedbackId?: BigNumber;
  requestId: BigNumber;
  requestText: string;
  requestedDate?: Moment;
  requestedForAchievementId: string;
  requestedForActivityId: string;
  requesteeId: string;
  requesterId: string;
  subjectUserId: string;
  feedbackRequestToFeedbackRequesteeNav: UserType;
  feedbackRequestToFeedbackRequesterNav: UserType;
  feedbackRequestToFeedbackResponseNav: ContinuousFeedbackType;
  feedbackRequestToSubjectUserNav: UserType;
}

export interface ContinuousFeedbackRequestTypeForceMandatory {
  feedbackId: BigNumber;
  requestId: BigNumber;
  requestText: string;
  requestedDate: Moment;
  requestedForAchievementId: string;
  requestedForActivityId: string;
  requesteeId: string;
  requesterId: string;
  subjectUserId: string;
  feedbackRequestToFeedbackRequesteeNav: UserType;
  feedbackRequestToFeedbackRequesterNav: UserType;
  feedbackRequestToFeedbackResponseNav: ContinuousFeedbackType;
  feedbackRequestToSubjectUserNav: UserType;
}

export namespace ContinuousFeedbackRequest {
  /**
   * Static representation of the [[feedbackId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEEDBACK_ID: BigNumberField<ContinuousFeedbackRequest> = new BigNumberField('feedbackId', ContinuousFeedbackRequest, 'Edm.Int64');
  /**
   * Static representation of the [[requestId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUEST_ID: BigNumberField<ContinuousFeedbackRequest> = new BigNumberField('requestId', ContinuousFeedbackRequest, 'Edm.Int64');
  /**
   * Static representation of the [[requestText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUEST_TEXT: StringField<ContinuousFeedbackRequest> = new StringField('requestText', ContinuousFeedbackRequest, 'Edm.String');
  /**
   * Static representation of the [[requestedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTED_DATE: DateField<ContinuousFeedbackRequest> = new DateField('requestedDate', ContinuousFeedbackRequest, 'Edm.DateTime');
  /**
   * Static representation of the [[requestedForAchievementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTED_FOR_ACHIEVEMENT_ID: StringField<ContinuousFeedbackRequest> = new StringField('requestedForAchievementId', ContinuousFeedbackRequest, 'Edm.String');
  /**
   * Static representation of the [[requestedForActivityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTED_FOR_ACTIVITY_ID: StringField<ContinuousFeedbackRequest> = new StringField('requestedForActivityId', ContinuousFeedbackRequest, 'Edm.String');
  /**
   * Static representation of the [[requesteeId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTEE_ID: StringField<ContinuousFeedbackRequest> = new StringField('requesteeId', ContinuousFeedbackRequest, 'Edm.String');
  /**
   * Static representation of the [[requesterId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTER_ID: StringField<ContinuousFeedbackRequest> = new StringField('requesterId', ContinuousFeedbackRequest, 'Edm.String');
  /**
   * Static representation of the [[subjectUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER_ID: StringField<ContinuousFeedbackRequest> = new StringField('subjectUserId', ContinuousFeedbackRequest, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[feedbackRequestToFeedbackRequesteeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEEDBACK_REQUEST_TO_FEEDBACK_REQUESTEE_NAV: OneToOneLink<ContinuousFeedbackRequest, User> = new OneToOneLink('feedbackRequestToFeedbackRequesteeNav', ContinuousFeedbackRequest, User);
  /**
   * Static representation of the one-to-one navigation property [[feedbackRequestToFeedbackRequesterNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEEDBACK_REQUEST_TO_FEEDBACK_REQUESTER_NAV: OneToOneLink<ContinuousFeedbackRequest, User> = new OneToOneLink('feedbackRequestToFeedbackRequesterNav', ContinuousFeedbackRequest, User);
  /**
   * Static representation of the one-to-one navigation property [[feedbackRequestToFeedbackResponseNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEEDBACK_REQUEST_TO_FEEDBACK_RESPONSE_NAV: OneToOneLink<ContinuousFeedbackRequest, ContinuousFeedback> = new OneToOneLink('feedbackRequestToFeedbackResponseNav', ContinuousFeedbackRequest, ContinuousFeedback);
  /**
   * Static representation of the one-to-one navigation property [[feedbackRequestToSubjectUserNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEEDBACK_REQUEST_TO_SUBJECT_USER_NAV: OneToOneLink<ContinuousFeedbackRequest, User> = new OneToOneLink('feedbackRequestToSubjectUserNav', ContinuousFeedbackRequest, User);
  /**
   * All fields of the ContinuousFeedbackRequest entity.
   */
  export const _allFields: Array<BigNumberField<ContinuousFeedbackRequest> | StringField<ContinuousFeedbackRequest> | DateField<ContinuousFeedbackRequest> | OneToOneLink<ContinuousFeedbackRequest, User> | OneToOneLink<ContinuousFeedbackRequest, ContinuousFeedback>> = [
    ContinuousFeedbackRequest.FEEDBACK_ID,
    ContinuousFeedbackRequest.REQUEST_ID,
    ContinuousFeedbackRequest.REQUEST_TEXT,
    ContinuousFeedbackRequest.REQUESTED_DATE,
    ContinuousFeedbackRequest.REQUESTED_FOR_ACHIEVEMENT_ID,
    ContinuousFeedbackRequest.REQUESTED_FOR_ACTIVITY_ID,
    ContinuousFeedbackRequest.REQUESTEE_ID,
    ContinuousFeedbackRequest.REQUESTER_ID,
    ContinuousFeedbackRequest.SUBJECT_USER_ID,
    ContinuousFeedbackRequest.FEEDBACK_REQUEST_TO_FEEDBACK_REQUESTEE_NAV,
    ContinuousFeedbackRequest.FEEDBACK_REQUEST_TO_FEEDBACK_REQUESTER_NAV,
    ContinuousFeedbackRequest.FEEDBACK_REQUEST_TO_FEEDBACK_RESPONSE_NAV,
    ContinuousFeedbackRequest.FEEDBACK_REQUEST_TO_SUBJECT_USER_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ContinuousFeedbackRequest> = new AllFields('*', ContinuousFeedbackRequest);
  /**
   * All key fields of the ContinuousFeedbackRequest entity.
   */
  export const _keyFields: Array<Selectable<ContinuousFeedbackRequest>> = [ContinuousFeedbackRequest.REQUEST_ID];
  /**
   * Mapping of all key field names to the respective static field property ContinuousFeedbackRequest.
   */
  export const _keys: { [keys: string]: Selectable<ContinuousFeedbackRequest> } = ContinuousFeedbackRequest._keyFields.reduce((acc: { [keys: string]: Selectable<ContinuousFeedbackRequest> }, field: Selectable<ContinuousFeedbackRequest>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
