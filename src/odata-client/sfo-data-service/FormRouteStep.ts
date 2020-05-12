/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormRouteStepRequestBuilder } from './FormRouteStepRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormRouteStep" of service "SFOData".
 */
export class FormRouteStep extends Entity implements FormRouteStepType {
  /**
   * Technical entity name for FormRouteStep.
   */
  static _entityName = 'FormRouteStep';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormRouteStep.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * completed.
   * @nullable
   */
  completed?: boolean;
  /**
   * current.
   * @nullable
   */
  current?: boolean;
  /**
   * dueDate.
   * @nullable
   */
  dueDate?: string;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * overDue.
   * @nullable
   */
  overDue?: boolean;
  /**
   * stageName.
   * @nullable
   */
  stageName?: string;
  /**
   * stageType.
   * @nullable
   */
  stageType?: string;
  /**
   * stepDescription.
   * @nullable
   */
  stepDescription?: string;
  /**
   * stepId.
   * @nullable
   */
  stepId?: string;
  /**
   * stepName.
   * @nullable
   */
  stepName?: string;
  /**
   * stepOrder.
   */
  stepOrder!: number;
  /**
   * stepType.
   * @nullable
   */
  stepType?: string;
  /**
   * userFullName.
   * @nullable
   */
  userFullName?: string;
  /**
   * userId.
   * @nullable
   */
  userId?: string;
  /**
   * userRole.
   * @nullable
   */
  userRole?: string;
  /**
   * One-to-many navigation property to the [[FormRouteSubStep]] entity.
   */
  routeSubStep!: FormRouteSubStep[];

  /**
   * Returns an entity builder to construct instances `FormRouteStep`.
   * @returns A builder that constructs instances of entity type `FormRouteStep`.
   */
  static builder(): EntityBuilderType<FormRouteStep, FormRouteStepTypeForceMandatory> {
    return Entity.entityBuilder(FormRouteStep);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormRouteStep` entity type.
   * @returns A `FormRouteStep` request builder.
   */
  static requestBuilder(): FormRouteStepRequestBuilder {
    return new FormRouteStepRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormRouteStep`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormRouteStep`.
   */
  static customField(fieldName: string): CustomField<FormRouteStep> {
    return Entity.customFieldSelector(fieldName, FormRouteStep);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormRouteSubStep, FormRouteSubStepType } from './FormRouteSubStep';

export interface FormRouteStepType {
  completed?: boolean;
  current?: boolean;
  dueDate?: string;
  formDataId: BigNumber;
  overDue?: boolean;
  stageName?: string;
  stageType?: string;
  stepDescription?: string;
  stepId?: string;
  stepName?: string;
  stepOrder: number;
  stepType?: string;
  userFullName?: string;
  userId?: string;
  userRole?: string;
  routeSubStep: FormRouteSubStepType[];
}

export interface FormRouteStepTypeForceMandatory {
  completed: boolean;
  current: boolean;
  dueDate: string;
  formDataId: BigNumber;
  overDue: boolean;
  stageName: string;
  stageType: string;
  stepDescription: string;
  stepId: string;
  stepName: string;
  stepOrder: number;
  stepType: string;
  userFullName: string;
  userId: string;
  userRole: string;
  routeSubStep: FormRouteSubStepType[];
}

export namespace FormRouteStep {
  /**
   * Static representation of the [[completed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPLETED: BooleanField<FormRouteStep> = new BooleanField('completed', FormRouteStep, 'Edm.Boolean');
  /**
   * Static representation of the [[current]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT: BooleanField<FormRouteStep> = new BooleanField('current', FormRouteStep, 'Edm.Boolean');
  /**
   * Static representation of the [[dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE: StringField<FormRouteStep> = new StringField('dueDate', FormRouteStep, 'Edm.String');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormRouteStep> = new BigNumberField('formDataId', FormRouteStep, 'Edm.Int64');
  /**
   * Static representation of the [[overDue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVER_DUE: BooleanField<FormRouteStep> = new BooleanField('overDue', FormRouteStep, 'Edm.Boolean');
  /**
   * Static representation of the [[stageName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STAGE_NAME: StringField<FormRouteStep> = new StringField('stageName', FormRouteStep, 'Edm.String');
  /**
   * Static representation of the [[stageType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STAGE_TYPE: StringField<FormRouteStep> = new StringField('stageType', FormRouteStep, 'Edm.String');
  /**
   * Static representation of the [[stepDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STEP_DESCRIPTION: StringField<FormRouteStep> = new StringField('stepDescription', FormRouteStep, 'Edm.String');
  /**
   * Static representation of the [[stepId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STEP_ID: StringField<FormRouteStep> = new StringField('stepId', FormRouteStep, 'Edm.String');
  /**
   * Static representation of the [[stepName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STEP_NAME: StringField<FormRouteStep> = new StringField('stepName', FormRouteStep, 'Edm.String');
  /**
   * Static representation of the [[stepOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STEP_ORDER: NumberField<FormRouteStep> = new NumberField('stepOrder', FormRouteStep, 'Edm.Int32');
  /**
   * Static representation of the [[stepType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STEP_TYPE: StringField<FormRouteStep> = new StringField('stepType', FormRouteStep, 'Edm.String');
  /**
   * Static representation of the [[userFullName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_FULL_NAME: StringField<FormRouteStep> = new StringField('userFullName', FormRouteStep, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<FormRouteStep> = new StringField('userId', FormRouteStep, 'Edm.String');
  /**
   * Static representation of the [[userRole]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ROLE: StringField<FormRouteStep> = new StringField('userRole', FormRouteStep, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[routeSubStep]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUTE_SUB_STEP: Link<FormRouteStep, FormRouteSubStep> = new Link('routeSubStep', FormRouteStep, FormRouteSubStep);
  /**
   * All fields of the FormRouteStep entity.
   */
  export const _allFields: Array<BooleanField<FormRouteStep> | StringField<FormRouteStep> | BigNumberField<FormRouteStep> | NumberField<FormRouteStep> | Link<FormRouteStep, FormRouteSubStep>> = [
    FormRouteStep.COMPLETED,
    FormRouteStep.CURRENT,
    FormRouteStep.DUE_DATE,
    FormRouteStep.FORM_DATA_ID,
    FormRouteStep.OVER_DUE,
    FormRouteStep.STAGE_NAME,
    FormRouteStep.STAGE_TYPE,
    FormRouteStep.STEP_DESCRIPTION,
    FormRouteStep.STEP_ID,
    FormRouteStep.STEP_NAME,
    FormRouteStep.STEP_ORDER,
    FormRouteStep.STEP_TYPE,
    FormRouteStep.USER_FULL_NAME,
    FormRouteStep.USER_ID,
    FormRouteStep.USER_ROLE,
    FormRouteStep.ROUTE_SUB_STEP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormRouteStep> = new AllFields('*', FormRouteStep);
  /**
   * All key fields of the FormRouteStep entity.
   */
  export const _keyFields: Array<Selectable<FormRouteStep>> = [FormRouteStep.FORM_DATA_ID, FormRouteStep.STEP_ORDER];
  /**
   * Mapping of all key field names to the respective static field property FormRouteStep.
   */
  export const _keys: { [keys: string]: Selectable<FormRouteStep> } = FormRouteStep._keyFields.reduce((acc: { [keys: string]: Selectable<FormRouteStep> }, field: Selectable<FormRouteStep>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
