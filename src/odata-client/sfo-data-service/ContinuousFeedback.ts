/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ContinuousFeedbackRequestBuilder } from './ContinuousFeedbackRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ContinuousFeedback" of service "SFOData".
 */
export class ContinuousFeedback extends Entity implements ContinuousFeedbackType {
  /**
   * Technical entity name for ContinuousFeedback.
   */
  static _entityName = 'ContinuousFeedback';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ContinuousFeedback.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * achievementId.
   * @nullable
   */
  achievementId?: string;
  /**
   * activityId.
   * @nullable
   */
  activityId?: string;
  /**
   * dateReceived.
   * @nullable
   */
  dateReceived?: Moment;
  /**
   * feedbackId.
   */
  feedbackId!: BigNumber;
  /**
   * feedbackMessage.
   */
  feedbackMessage!: string;
  /**
   * feedbackRequestId.
   * @nullable
   */
  feedbackRequestId?: BigNumber;
  /**
   * senderUserId.
   */
  senderUserId!: string;
  /**
   * subjectUserId.
   */
  subjectUserId!: string;
  /**
   * visibleToManager.
   * @nullable
   */
  visibleToManager?: boolean;
  /**
   * One-to-one navigation property to the [[ContinuousFeedbackRequest]] entity.
   */
  continuousFeedbackToContinuousFeedbackRequestNav!: ContinuousFeedbackRequest;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  continuousFeedbackToSenderUserNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  continuousFeedbackToSubjectUserNav!: User;

  /**
   * Returns an entity builder to construct instances `ContinuousFeedback`.
   * @returns A builder that constructs instances of entity type `ContinuousFeedback`.
   */
  static builder(): EntityBuilderType<ContinuousFeedback, ContinuousFeedbackTypeForceMandatory> {
    return Entity.entityBuilder(ContinuousFeedback);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ContinuousFeedback` entity type.
   * @returns A `ContinuousFeedback` request builder.
   */
  static requestBuilder(): ContinuousFeedbackRequestBuilder {
    return new ContinuousFeedbackRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ContinuousFeedback`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ContinuousFeedback`.
   */
  static customField(fieldName: string): CustomField<ContinuousFeedback> {
    return Entity.customFieldSelector(fieldName, ContinuousFeedback);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ContinuousFeedbackRequest, ContinuousFeedbackRequestType } from './ContinuousFeedbackRequest';
import { User, UserType } from './User';

export interface ContinuousFeedbackType {
  achievementId?: string;
  activityId?: string;
  dateReceived?: Moment;
  feedbackId: BigNumber;
  feedbackMessage: string;
  feedbackRequestId?: BigNumber;
  senderUserId: string;
  subjectUserId: string;
  visibleToManager?: boolean;
  continuousFeedbackToContinuousFeedbackRequestNav: ContinuousFeedbackRequestType;
  continuousFeedbackToSenderUserNav: UserType;
  continuousFeedbackToSubjectUserNav: UserType;
}

export interface ContinuousFeedbackTypeForceMandatory {
  achievementId: string;
  activityId: string;
  dateReceived: Moment;
  feedbackId: BigNumber;
  feedbackMessage: string;
  feedbackRequestId: BigNumber;
  senderUserId: string;
  subjectUserId: string;
  visibleToManager: boolean;
  continuousFeedbackToContinuousFeedbackRequestNav: ContinuousFeedbackRequestType;
  continuousFeedbackToSenderUserNav: UserType;
  continuousFeedbackToSubjectUserNav: UserType;
}

export namespace ContinuousFeedback {
  /**
   * Static representation of the [[achievementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_ID: StringField<ContinuousFeedback> = new StringField('achievementId', ContinuousFeedback, 'Edm.String');
  /**
   * Static representation of the [[activityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_ID: StringField<ContinuousFeedback> = new StringField('activityId', ContinuousFeedback, 'Edm.String');
  /**
   * Static representation of the [[dateReceived]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_RECEIVED: DateField<ContinuousFeedback> = new DateField('dateReceived', ContinuousFeedback, 'Edm.DateTime');
  /**
   * Static representation of the [[feedbackId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEEDBACK_ID: BigNumberField<ContinuousFeedback> = new BigNumberField('feedbackId', ContinuousFeedback, 'Edm.Int64');
  /**
   * Static representation of the [[feedbackMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEEDBACK_MESSAGE: StringField<ContinuousFeedback> = new StringField('feedbackMessage', ContinuousFeedback, 'Edm.String');
  /**
   * Static representation of the [[feedbackRequestId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEEDBACK_REQUEST_ID: BigNumberField<ContinuousFeedback> = new BigNumberField('feedbackRequestId', ContinuousFeedback, 'Edm.Int64');
  /**
   * Static representation of the [[senderUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SENDER_USER_ID: StringField<ContinuousFeedback> = new StringField('senderUserId', ContinuousFeedback, 'Edm.String');
  /**
   * Static representation of the [[subjectUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER_ID: StringField<ContinuousFeedback> = new StringField('subjectUserId', ContinuousFeedback, 'Edm.String');
  /**
   * Static representation of the [[visibleToManager]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VISIBLE_TO_MANAGER: BooleanField<ContinuousFeedback> = new BooleanField('visibleToManager', ContinuousFeedback, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[continuousFeedbackToContinuousFeedbackRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTINUOUS_FEEDBACK_TO_CONTINUOUS_FEEDBACK_REQUEST_NAV: OneToOneLink<ContinuousFeedback, ContinuousFeedbackRequest> = new OneToOneLink('continuousFeedbackToContinuousFeedbackRequestNav', ContinuousFeedback, ContinuousFeedbackRequest);
  /**
   * Static representation of the one-to-one navigation property [[continuousFeedbackToSenderUserNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTINUOUS_FEEDBACK_TO_SENDER_USER_NAV: OneToOneLink<ContinuousFeedback, User> = new OneToOneLink('continuousFeedbackToSenderUserNav', ContinuousFeedback, User);
  /**
   * Static representation of the one-to-one navigation property [[continuousFeedbackToSubjectUserNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTINUOUS_FEEDBACK_TO_SUBJECT_USER_NAV: OneToOneLink<ContinuousFeedback, User> = new OneToOneLink('continuousFeedbackToSubjectUserNav', ContinuousFeedback, User);
  /**
   * All fields of the ContinuousFeedback entity.
   */
  export const _allFields: Array<StringField<ContinuousFeedback> | DateField<ContinuousFeedback> | BigNumberField<ContinuousFeedback> | BooleanField<ContinuousFeedback> | OneToOneLink<ContinuousFeedback, ContinuousFeedbackRequest> | OneToOneLink<ContinuousFeedback, User>> = [
    ContinuousFeedback.ACHIEVEMENT_ID,
    ContinuousFeedback.ACTIVITY_ID,
    ContinuousFeedback.DATE_RECEIVED,
    ContinuousFeedback.FEEDBACK_ID,
    ContinuousFeedback.FEEDBACK_MESSAGE,
    ContinuousFeedback.FEEDBACK_REQUEST_ID,
    ContinuousFeedback.SENDER_USER_ID,
    ContinuousFeedback.SUBJECT_USER_ID,
    ContinuousFeedback.VISIBLE_TO_MANAGER,
    ContinuousFeedback.CONTINUOUS_FEEDBACK_TO_CONTINUOUS_FEEDBACK_REQUEST_NAV,
    ContinuousFeedback.CONTINUOUS_FEEDBACK_TO_SENDER_USER_NAV,
    ContinuousFeedback.CONTINUOUS_FEEDBACK_TO_SUBJECT_USER_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ContinuousFeedback> = new AllFields('*', ContinuousFeedback);
  /**
   * All key fields of the ContinuousFeedback entity.
   */
  export const _keyFields: Array<Selectable<ContinuousFeedback>> = [ContinuousFeedback.FEEDBACK_ID];
  /**
   * Mapping of all key field names to the respective static field property ContinuousFeedback.
   */
  export const _keys: { [keys: string]: Selectable<ContinuousFeedback> } = ContinuousFeedback._keyFields.reduce((acc: { [keys: string]: Selectable<ContinuousFeedback> }, field: Selectable<ContinuousFeedback>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
