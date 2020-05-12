/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DevGoalPlanTemplateRequestBuilder } from './DevGoalPlanTemplateRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DevGoalPlanTemplate" of service "SFOData".
 */
export class DevGoalPlanTemplate extends Entity implements DevGoalPlanTemplateType {
  /**
   * Technical entity name for DevGoalPlanTemplate.
   */
  static _entityName = 'DevGoalPlanTemplate';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DevGoalPlanTemplate.
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
   * id.
   */
  id!: BigNumber;
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
   * One-to-many navigation property to the [[SimpleDevGoal]] entity.
   */
  devgoals!: SimpleDevGoal[];
  /**
   * One-to-many navigation property to the [[DevGoalEnum]] entity.
   */
  enums!: DevGoalEnum[];

  /**
   * Returns an entity builder to construct instances `DevGoalPlanTemplate`.
   * @returns A builder that constructs instances of entity type `DevGoalPlanTemplate`.
   */
  static builder(): EntityBuilderType<DevGoalPlanTemplate, DevGoalPlanTemplateTypeForceMandatory> {
    return Entity.entityBuilder(DevGoalPlanTemplate);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DevGoalPlanTemplate` entity type.
   * @returns A `DevGoalPlanTemplate` request builder.
   */
  static requestBuilder(): DevGoalPlanTemplateRequestBuilder {
    return new DevGoalPlanTemplateRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalPlanTemplate`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DevGoalPlanTemplate`.
   */
  static customField(fieldName: string): CustomField<DevGoalPlanTemplate> {
    return Entity.customFieldSelector(fieldName, DevGoalPlanTemplate);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SimpleDevGoal, SimpleDevGoalType } from './SimpleDevGoal';
import { DevGoalEnum, DevGoalEnumType } from './DevGoalEnum';

export interface DevGoalPlanTemplateType {
  defaultTemplate: boolean;
  description?: string;
  displayOrder?: BigNumber;
  dueDate?: Moment;
  id: BigNumber;
  name?: string;
  parentPlanId?: BigNumber;
  startDate?: Moment;
  useTextForPrivacy?: boolean;
  devgoals: SimpleDevGoalType[];
  enums: DevGoalEnumType[];
}

export interface DevGoalPlanTemplateTypeForceMandatory {
  defaultTemplate: boolean;
  description: string;
  displayOrder: BigNumber;
  dueDate: Moment;
  id: BigNumber;
  name: string;
  parentPlanId: BigNumber;
  startDate: Moment;
  useTextForPrivacy: boolean;
  devgoals: SimpleDevGoalType[];
  enums: DevGoalEnumType[];
}

export namespace DevGoalPlanTemplate {
  /**
   * Static representation of the [[defaultTemplate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_TEMPLATE: BooleanField<DevGoalPlanTemplate> = new BooleanField('defaultTemplate', DevGoalPlanTemplate, 'Edm.Boolean');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<DevGoalPlanTemplate> = new StringField('description', DevGoalPlanTemplate, 'Edm.String');
  /**
   * Static representation of the [[displayOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISPLAY_ORDER: BigNumberField<DevGoalPlanTemplate> = new BigNumberField('displayOrder', DevGoalPlanTemplate, 'Edm.Int64');
  /**
   * Static representation of the [[dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE: DateField<DevGoalPlanTemplate> = new DateField('dueDate', DevGoalPlanTemplate, 'Edm.DateTime');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<DevGoalPlanTemplate> = new BigNumberField('id', DevGoalPlanTemplate, 'Edm.Int64');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<DevGoalPlanTemplate> = new StringField('name', DevGoalPlanTemplate, 'Edm.String');
  /**
   * Static representation of the [[parentPlanId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_PLAN_ID: BigNumberField<DevGoalPlanTemplate> = new BigNumberField('parentPlanId', DevGoalPlanTemplate, 'Edm.Int64');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<DevGoalPlanTemplate> = new DateField('startDate', DevGoalPlanTemplate, 'Edm.DateTime');
  /**
   * Static representation of the [[useTextForPrivacy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_TEXT_FOR_PRIVACY: BooleanField<DevGoalPlanTemplate> = new BooleanField('useTextForPrivacy', DevGoalPlanTemplate, 'Edm.Boolean');
  /**
   * Static representation of the one-to-many navigation property [[devgoals]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEVGOALS: Link<DevGoalPlanTemplate, SimpleDevGoal> = new Link('devgoals', DevGoalPlanTemplate, SimpleDevGoal);
  /**
   * Static representation of the one-to-many navigation property [[enums]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENUMS: Link<DevGoalPlanTemplate, DevGoalEnum> = new Link('enums', DevGoalPlanTemplate, DevGoalEnum);
  /**
   * All fields of the DevGoalPlanTemplate entity.
   */
  export const _allFields: Array<BooleanField<DevGoalPlanTemplate> | StringField<DevGoalPlanTemplate> | BigNumberField<DevGoalPlanTemplate> | DateField<DevGoalPlanTemplate> | Link<DevGoalPlanTemplate, SimpleDevGoal> | Link<DevGoalPlanTemplate, DevGoalEnum>> = [
    DevGoalPlanTemplate.DEFAULT_TEMPLATE,
    DevGoalPlanTemplate.DESCRIPTION,
    DevGoalPlanTemplate.DISPLAY_ORDER,
    DevGoalPlanTemplate.DUE_DATE,
    DevGoalPlanTemplate.ID,
    DevGoalPlanTemplate.NAME,
    DevGoalPlanTemplate.PARENT_PLAN_ID,
    DevGoalPlanTemplate.START_DATE,
    DevGoalPlanTemplate.USE_TEXT_FOR_PRIVACY,
    DevGoalPlanTemplate.DEVGOALS,
    DevGoalPlanTemplate.ENUMS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DevGoalPlanTemplate> = new AllFields('*', DevGoalPlanTemplate);
  /**
   * All key fields of the DevGoalPlanTemplate entity.
   */
  export const _keyFields: Array<Selectable<DevGoalPlanTemplate>> = [DevGoalPlanTemplate.ID];
  /**
   * Mapping of all key field names to the respective static field property DevGoalPlanTemplate.
   */
  export const _keys: { [keys: string]: Selectable<DevGoalPlanTemplate> } = DevGoalPlanTemplate._keyFields.reduce((acc: { [keys: string]: Selectable<DevGoalPlanTemplate> }, field: Selectable<DevGoalPlanTemplate>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
