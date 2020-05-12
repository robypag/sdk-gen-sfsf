/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GoalAchievementsListRequestBuilder } from './GoalAchievementsListRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "GoalAchievementsList" of service "SFOData".
 */
export class GoalAchievementsList extends Entity implements GoalAchievementsListType {
  /**
   * Technical entity name for GoalAchievementsList.
   */
  static _entityName = 'GoalAchievementsList';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for GoalAchievementsList.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * achievementCreatedBy.
   */
  achievementCreatedBy!: string;
  /**
   * achievementCreatedDate.
   */
  achievementCreatedDate!: Moment;
  /**
   * achievementDate.
   */
  achievementDate!: Moment;
  /**
   * achievementId.
   */
  achievementId!: string;
  /**
   * achievementLastModifiedBy.
   */
  achievementLastModifiedBy!: string;
  /**
   * achievementLastModifiedDate.
   */
  achievementLastModifiedDate!: Moment;
  /**
   * achievementName.
   */
  achievementName!: string;
  /**
   * achievementParentExternalId.
   */
  achievementParentExternalId!: BigNumber;
  /**
   * achievementParentType.
   */
  achievementParentType!: string;
  /**
   * goalId.
   */
  goalId!: string;
  /**
   * subjectUserId.
   */
  subjectUserId!: string;

  /**
   * Returns an entity builder to construct instances `GoalAchievementsList`.
   * @returns A builder that constructs instances of entity type `GoalAchievementsList`.
   */
  static builder(): EntityBuilderType<GoalAchievementsList, GoalAchievementsListTypeForceMandatory> {
    return Entity.entityBuilder(GoalAchievementsList);
  }

  /**
   * Returns a request builder to construct requests for operations on the `GoalAchievementsList` entity type.
   * @returns A `GoalAchievementsList` request builder.
   */
  static requestBuilder(): GoalAchievementsListRequestBuilder {
    return new GoalAchievementsListRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalAchievementsList`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `GoalAchievementsList`.
   */
  static customField(fieldName: string): CustomField<GoalAchievementsList> {
    return Entity.customFieldSelector(fieldName, GoalAchievementsList);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface GoalAchievementsListType {
  achievementCreatedBy: string;
  achievementCreatedDate: Moment;
  achievementDate: Moment;
  achievementId: string;
  achievementLastModifiedBy: string;
  achievementLastModifiedDate: Moment;
  achievementName: string;
  achievementParentExternalId: BigNumber;
  achievementParentType: string;
  goalId: string;
  subjectUserId: string;
}

export interface GoalAchievementsListTypeForceMandatory {
  achievementCreatedBy: string;
  achievementCreatedDate: Moment;
  achievementDate: Moment;
  achievementId: string;
  achievementLastModifiedBy: string;
  achievementLastModifiedDate: Moment;
  achievementName: string;
  achievementParentExternalId: BigNumber;
  achievementParentType: string;
  goalId: string;
  subjectUserId: string;
}

export namespace GoalAchievementsList {
  /**
   * Static representation of the [[achievementCreatedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_CREATED_BY: StringField<GoalAchievementsList> = new StringField('achievementCreatedBy', GoalAchievementsList, 'Edm.String');
  /**
   * Static representation of the [[achievementCreatedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_CREATED_DATE: DateField<GoalAchievementsList> = new DateField('achievementCreatedDate', GoalAchievementsList, 'Edm.DateTime');
  /**
   * Static representation of the [[achievementDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_DATE: DateField<GoalAchievementsList> = new DateField('achievementDate', GoalAchievementsList, 'Edm.DateTime');
  /**
   * Static representation of the [[achievementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_ID: StringField<GoalAchievementsList> = new StringField('achievementId', GoalAchievementsList, 'Edm.String');
  /**
   * Static representation of the [[achievementLastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_LAST_MODIFIED_BY: StringField<GoalAchievementsList> = new StringField('achievementLastModifiedBy', GoalAchievementsList, 'Edm.String');
  /**
   * Static representation of the [[achievementLastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_LAST_MODIFIED_DATE: DateField<GoalAchievementsList> = new DateField('achievementLastModifiedDate', GoalAchievementsList, 'Edm.DateTime');
  /**
   * Static representation of the [[achievementName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_NAME: StringField<GoalAchievementsList> = new StringField('achievementName', GoalAchievementsList, 'Edm.String');
  /**
   * Static representation of the [[achievementParentExternalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_PARENT_EXTERNAL_ID: BigNumberField<GoalAchievementsList> = new BigNumberField('achievementParentExternalId', GoalAchievementsList, 'Edm.Int64');
  /**
   * Static representation of the [[achievementParentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACHIEVEMENT_PARENT_TYPE: StringField<GoalAchievementsList> = new StringField('achievementParentType', GoalAchievementsList, 'Edm.String');
  /**
   * Static representation of the [[goalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOAL_ID: StringField<GoalAchievementsList> = new StringField('goalId', GoalAchievementsList, 'Edm.String');
  /**
   * Static representation of the [[subjectUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER_ID: StringField<GoalAchievementsList> = new StringField('subjectUserId', GoalAchievementsList, 'Edm.String');
  /**
   * All fields of the GoalAchievementsList entity.
   */
  export const _allFields: Array<StringField<GoalAchievementsList> | DateField<GoalAchievementsList> | BigNumberField<GoalAchievementsList>> = [
    GoalAchievementsList.ACHIEVEMENT_CREATED_BY,
    GoalAchievementsList.ACHIEVEMENT_CREATED_DATE,
    GoalAchievementsList.ACHIEVEMENT_DATE,
    GoalAchievementsList.ACHIEVEMENT_ID,
    GoalAchievementsList.ACHIEVEMENT_LAST_MODIFIED_BY,
    GoalAchievementsList.ACHIEVEMENT_LAST_MODIFIED_DATE,
    GoalAchievementsList.ACHIEVEMENT_NAME,
    GoalAchievementsList.ACHIEVEMENT_PARENT_EXTERNAL_ID,
    GoalAchievementsList.ACHIEVEMENT_PARENT_TYPE,
    GoalAchievementsList.GOAL_ID,
    GoalAchievementsList.SUBJECT_USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<GoalAchievementsList> = new AllFields('*', GoalAchievementsList);
  /**
   * All key fields of the GoalAchievementsList entity.
   */
  export const _keyFields: Array<Selectable<GoalAchievementsList>> = [GoalAchievementsList.GOAL_ID, GoalAchievementsList.SUBJECT_USER_ID];
  /**
   * Mapping of all key field names to the respective static field property GoalAchievementsList.
   */
  export const _keys: { [keys: string]: Selectable<GoalAchievementsList> } = GoalAchievementsList._keyFields.reduce((acc: { [keys: string]: Selectable<GoalAchievementsList> }, field: Selectable<GoalAchievementsList>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
