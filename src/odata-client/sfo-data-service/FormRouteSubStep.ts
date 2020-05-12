/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormRouteSubStepRequestBuilder } from './FormRouteSubStepRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormRouteSubStep" of service "SFOData".
 */
export class FormRouteSubStep extends Entity implements FormRouteSubStepType {
  /**
   * Technical entity name for FormRouteSubStep.
   */
  static _entityName = 'FormRouteSubStep';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormRouteSubStep.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * currentStep.
   * @nullable
   */
  currentStep?: boolean;
  /**
   * entryUser.
   * @nullable
   */
  entryUser?: boolean;
  /**
   * exitUser.
   * @nullable
   */
  exitUser?: boolean;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * stepOrder.
   */
  stepOrder!: number;
  /**
   * subStepOrder.
   */
  subStepOrder!: number;
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
   * Returns an entity builder to construct instances `FormRouteSubStep`.
   * @returns A builder that constructs instances of entity type `FormRouteSubStep`.
   */
  static builder(): EntityBuilderType<FormRouteSubStep, FormRouteSubStepTypeForceMandatory> {
    return Entity.entityBuilder(FormRouteSubStep);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormRouteSubStep` entity type.
   * @returns A `FormRouteSubStep` request builder.
   */
  static requestBuilder(): FormRouteSubStepRequestBuilder {
    return new FormRouteSubStepRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormRouteSubStep`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormRouteSubStep`.
   */
  static customField(fieldName: string): CustomField<FormRouteSubStep> {
    return Entity.customFieldSelector(fieldName, FormRouteSubStep);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface FormRouteSubStepType {
  currentStep?: boolean;
  entryUser?: boolean;
  exitUser?: boolean;
  formDataId: BigNumber;
  stepOrder: number;
  subStepOrder: number;
  userFullName?: string;
  userId?: string;
  userRole?: string;
}

export interface FormRouteSubStepTypeForceMandatory {
  currentStep: boolean;
  entryUser: boolean;
  exitUser: boolean;
  formDataId: BigNumber;
  stepOrder: number;
  subStepOrder: number;
  userFullName: string;
  userId: string;
  userRole: string;
}

export namespace FormRouteSubStep {
  /**
   * Static representation of the [[currentStep]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_STEP: BooleanField<FormRouteSubStep> = new BooleanField('currentStep', FormRouteSubStep, 'Edm.Boolean');
  /**
   * Static representation of the [[entryUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTRY_USER: BooleanField<FormRouteSubStep> = new BooleanField('entryUser', FormRouteSubStep, 'Edm.Boolean');
  /**
   * Static representation of the [[exitUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXIT_USER: BooleanField<FormRouteSubStep> = new BooleanField('exitUser', FormRouteSubStep, 'Edm.Boolean');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormRouteSubStep> = new BigNumberField('formDataId', FormRouteSubStep, 'Edm.Int64');
  /**
   * Static representation of the [[stepOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STEP_ORDER: NumberField<FormRouteSubStep> = new NumberField('stepOrder', FormRouteSubStep, 'Edm.Int32');
  /**
   * Static representation of the [[subStepOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_STEP_ORDER: NumberField<FormRouteSubStep> = new NumberField('subStepOrder', FormRouteSubStep, 'Edm.Int32');
  /**
   * Static representation of the [[userFullName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_FULL_NAME: StringField<FormRouteSubStep> = new StringField('userFullName', FormRouteSubStep, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<FormRouteSubStep> = new StringField('userId', FormRouteSubStep, 'Edm.String');
  /**
   * Static representation of the [[userRole]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ROLE: StringField<FormRouteSubStep> = new StringField('userRole', FormRouteSubStep, 'Edm.String');
  /**
   * All fields of the FormRouteSubStep entity.
   */
  export const _allFields: Array<BooleanField<FormRouteSubStep> | BigNumberField<FormRouteSubStep> | NumberField<FormRouteSubStep> | StringField<FormRouteSubStep>> = [
    FormRouteSubStep.CURRENT_STEP,
    FormRouteSubStep.ENTRY_USER,
    FormRouteSubStep.EXIT_USER,
    FormRouteSubStep.FORM_DATA_ID,
    FormRouteSubStep.STEP_ORDER,
    FormRouteSubStep.SUB_STEP_ORDER,
    FormRouteSubStep.USER_FULL_NAME,
    FormRouteSubStep.USER_ID,
    FormRouteSubStep.USER_ROLE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormRouteSubStep> = new AllFields('*', FormRouteSubStep);
  /**
   * All key fields of the FormRouteSubStep entity.
   */
  export const _keyFields: Array<Selectable<FormRouteSubStep>> = [FormRouteSubStep.FORM_DATA_ID, FormRouteSubStep.STEP_ORDER, FormRouteSubStep.SUB_STEP_ORDER];
  /**
   * Mapping of all key field names to the respective static field property FormRouteSubStep.
   */
  export const _keys: { [keys: string]: Selectable<FormRouteSubStep> } = FormRouteSubStep._keyFields.reduce((acc: { [keys: string]: Selectable<FormRouteSubStep> }, field: Selectable<FormRouteSubStep>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
