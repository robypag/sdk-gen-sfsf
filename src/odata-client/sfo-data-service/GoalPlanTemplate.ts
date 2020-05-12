/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GoalPlanTemplateRequestBuilder } from './GoalPlanTemplateRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "GoalPlanTemplate" of service "SFOData".
 */
export class GoalPlanTemplate extends Entity implements GoalPlanTemplateType {
  /**
   * Technical entity name for GoalPlanTemplate.
   */
  static _entityName = 'GoalPlanTemplate';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for GoalPlanTemplate.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * defaultTemplate.
   */
  defaultTemplate!: boolean;
  /**
   * description.
   * @nullable
   */
  description?: string;
  /**
   * displayOrder.
   * @nullable
   */
  displayOrder?: BigNumber;
  /**
   * dueDate.
   * @nullable
   */
  dueDate?: Moment;
  /**
   * fieldOrder.
   * @nullable
   */
  fieldOrder?: string;
  /**
   * id.
   */
  id!: BigNumber;
  /**
   * mobileFields.
   * @nullable
   */
  mobileFields?: string;
  /**
   * name.
   * @nullable
   */
  name?: string;
  /**
   * parentPlanId.
   * @nullable
   */
  parentPlanId?: BigNumber;
  /**
   * percentageValueOver100.
   * @nullable
   */
  percentageValueOver100?: boolean;
  /**
   * startDate.
   * @nullable
   */
  startDate?: Moment;
  /**
   * useTextForPrivacy.
   * @nullable
   */
  useTextForPrivacy?: boolean;
  /**
   * One-to-many navigation property to the [[GoalEnum]] entity.
   */
  enums!: GoalEnum[];
  /**
   * One-to-many navigation property to the [[GoalWeight]] entity.
   */
  goalWeights!: GoalWeight[];
  /**
   * One-to-many navigation property to the [[SimpleGoal]] entity.
   */
  goals!: SimpleGoal[];
  /**
   * One-to-many navigation property to the [[GoalPlanState]] entity.
   */
  planStates!: GoalPlanState[];

  /**
   * Returns an entity builder to construct instances `GoalPlanTemplate`.
   * @returns A builder that constructs instances of entity type `GoalPlanTemplate`.
   */
  static builder(): EntityBuilderType<GoalPlanTemplate, GoalPlanTemplateTypeForceMandatory> {
    return Entity.entityBuilder(GoalPlanTemplate);
  }

  /**
   * Returns a request builder to construct requests for operations on the `GoalPlanTemplate` entity type.
   * @returns A `GoalPlanTemplate` request builder.
   */
  static requestBuilder(): GoalPlanTemplateRequestBuilder {
    return new GoalPlanTemplateRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalPlanTemplate`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `GoalPlanTemplate`.
   */
  static customField(fieldName: string): CustomField<GoalPlanTemplate> {
    return Entity.customFieldSelector(fieldName, GoalPlanTemplate);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { GoalEnum, GoalEnumType } from './GoalEnum';
import { GoalWeight, GoalWeightType } from './GoalWeight';
import { SimpleGoal, SimpleGoalType } from './SimpleGoal';
import { GoalPlanState, GoalPlanStateType } from './GoalPlanState';

export interface GoalPlanTemplateType {
  defaultTemplate: boolean;
  description?: string;
  displayOrder?: BigNumber;
  dueDate?: Moment;
  fieldOrder?: string;
  id: BigNumber;
  mobileFields?: string;
  name?: string;
  parentPlanId?: BigNumber;
  percentageValueOver100?: boolean;
  startDate?: Moment;
  useTextForPrivacy?: boolean;
  enums: GoalEnumType[];
  goalWeights: GoalWeightType[];
  goals: SimpleGoalType[];
  planStates: GoalPlanStateType[];
}

export interface GoalPlanTemplateTypeForceMandatory {
  defaultTemplate: boolean;
  description: string;
  displayOrder: BigNumber;
  dueDate: Moment;
  fieldOrder: string;
  id: BigNumber;
  mobileFields: string;
  name: string;
  parentPlanId: BigNumber;
  percentageValueOver100: boolean;
  startDate: Moment;
  useTextForPrivacy: boolean;
  enums: GoalEnumType[];
  goalWeights: GoalWeightType[];
  goals: SimpleGoalType[];
  planStates: GoalPlanStateType[];
}

export namespace GoalPlanTemplate {
  /**
   * Static representation of the [[defaultTemplate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_TEMPLATE: BooleanField<GoalPlanTemplate> = new BooleanField('defaultTemplate', GoalPlanTemplate, 'Edm.Boolean');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<GoalPlanTemplate> = new StringField('description', GoalPlanTemplate, 'Edm.String');
  /**
   * Static representation of the [[displayOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISPLAY_ORDER: BigNumberField<GoalPlanTemplate> = new BigNumberField('displayOrder', GoalPlanTemplate, 'Edm.Int64');
  /**
   * Static representation of the [[dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE: DateField<GoalPlanTemplate> = new DateField('dueDate', GoalPlanTemplate, 'Edm.DateTime');
  /**
   * Static representation of the [[fieldOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_ORDER: StringField<GoalPlanTemplate> = new StringField('fieldOrder', GoalPlanTemplate, 'Edm.String');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<GoalPlanTemplate> = new BigNumberField('id', GoalPlanTemplate, 'Edm.Int64');
  /**
   * Static representation of the [[mobileFields]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MOBILE_FIELDS: StringField<GoalPlanTemplate> = new StringField('mobileFields', GoalPlanTemplate, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<GoalPlanTemplate> = new StringField('name', GoalPlanTemplate, 'Edm.String');
  /**
   * Static representation of the [[parentPlanId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_PLAN_ID: BigNumberField<GoalPlanTemplate> = new BigNumberField('parentPlanId', GoalPlanTemplate, 'Edm.Int64');
  /**
   * Static representation of the [[percentageValueOver100]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERCENTAGE_VALUE_OVER_100: BooleanField<GoalPlanTemplate> = new BooleanField('percentageValueOver100', GoalPlanTemplate, 'Edm.Boolean');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<GoalPlanTemplate> = new DateField('startDate', GoalPlanTemplate, 'Edm.DateTime');
  /**
   * Static representation of the [[useTextForPrivacy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_TEXT_FOR_PRIVACY: BooleanField<GoalPlanTemplate> = new BooleanField('useTextForPrivacy', GoalPlanTemplate, 'Edm.Boolean');
  /**
   * Static representation of the one-to-many navigation property [[enums]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENUMS: Link<GoalPlanTemplate, GoalEnum> = new Link('enums', GoalPlanTemplate, GoalEnum);
  /**
   * Static representation of the one-to-many navigation property [[goalWeights]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOAL_WEIGHTS: Link<GoalPlanTemplate, GoalWeight> = new Link('goalWeights', GoalPlanTemplate, GoalWeight);
  /**
   * Static representation of the one-to-many navigation property [[goals]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOALS: Link<GoalPlanTemplate, SimpleGoal> = new Link('goals', GoalPlanTemplate, SimpleGoal);
  /**
   * Static representation of the one-to-many navigation property [[planStates]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLAN_STATES: Link<GoalPlanTemplate, GoalPlanState> = new Link('planStates', GoalPlanTemplate, GoalPlanState);
  /**
   * All fields of the GoalPlanTemplate entity.
   */
  export const _allFields: Array<BooleanField<GoalPlanTemplate> | StringField<GoalPlanTemplate> | BigNumberField<GoalPlanTemplate> | DateField<GoalPlanTemplate> | Link<GoalPlanTemplate, GoalEnum> | Link<GoalPlanTemplate, GoalWeight> | Link<GoalPlanTemplate, SimpleGoal> | Link<GoalPlanTemplate, GoalPlanState>> = [
    GoalPlanTemplate.DEFAULT_TEMPLATE,
    GoalPlanTemplate.DESCRIPTION,
    GoalPlanTemplate.DISPLAY_ORDER,
    GoalPlanTemplate.DUE_DATE,
    GoalPlanTemplate.FIELD_ORDER,
    GoalPlanTemplate.ID,
    GoalPlanTemplate.MOBILE_FIELDS,
    GoalPlanTemplate.NAME,
    GoalPlanTemplate.PARENT_PLAN_ID,
    GoalPlanTemplate.PERCENTAGE_VALUE_OVER_100,
    GoalPlanTemplate.START_DATE,
    GoalPlanTemplate.USE_TEXT_FOR_PRIVACY,
    GoalPlanTemplate.ENUMS,
    GoalPlanTemplate.GOAL_WEIGHTS,
    GoalPlanTemplate.GOALS,
    GoalPlanTemplate.PLAN_STATES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<GoalPlanTemplate> = new AllFields('*', GoalPlanTemplate);
  /**
   * All key fields of the GoalPlanTemplate entity.
   */
  export const _keyFields: Array<Selectable<GoalPlanTemplate>> = [GoalPlanTemplate.ID];
  /**
   * Mapping of all key field names to the respective static field property GoalPlanTemplate.
   */
  export const _keys: { [keys: string]: Selectable<GoalPlanTemplate> } = GoalPlanTemplate._keyFields.reduce((acc: { [keys: string]: Selectable<GoalPlanTemplate> }, field: Selectable<GoalPlanTemplate>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
