/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormRouteMapRequestBuilder } from './FormRouteMapRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormRouteMap" of service "SFOData".
 */
export class FormRouteMap extends Entity implements FormRouteMapType {
  /**
   * Technical entity name for FormRouteMap.
   */
  static _entityName = 'FormRouteMap';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormRouteMap.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * routeId.
   * @nullable
   */
  routeId?: number;
  /**
   * routeName.
   * @nullable
   */
  routeName?: string;
  /**
   * One-to-many navigation property to the [[FormRouteStep]] entity.
   */
  routeStep!: FormRouteStep[];

  /**
   * Returns an entity builder to construct instances `FormRouteMap`.
   * @returns A builder that constructs instances of entity type `FormRouteMap`.
   */
  static builder(): EntityBuilderType<FormRouteMap, FormRouteMapTypeForceMandatory> {
    return Entity.entityBuilder(FormRouteMap);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormRouteMap` entity type.
   * @returns A `FormRouteMap` request builder.
   */
  static requestBuilder(): FormRouteMapRequestBuilder {
    return new FormRouteMapRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormRouteMap`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormRouteMap`.
   */
  static customField(fieldName: string): CustomField<FormRouteMap> {
    return Entity.customFieldSelector(fieldName, FormRouteMap);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormRouteStep, FormRouteStepType } from './FormRouteStep';

export interface FormRouteMapType {
  formDataId: BigNumber;
  routeId?: number;
  routeName?: string;
  routeStep: FormRouteStepType[];
}

export interface FormRouteMapTypeForceMandatory {
  formDataId: BigNumber;
  routeId: number;
  routeName: string;
  routeStep: FormRouteStepType[];
}

export namespace FormRouteMap {
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormRouteMap> = new BigNumberField('formDataId', FormRouteMap, 'Edm.Int64');
  /**
   * Static representation of the [[routeId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUTE_ID: NumberField<FormRouteMap> = new NumberField('routeId', FormRouteMap, 'Edm.Int32');
  /**
   * Static representation of the [[routeName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUTE_NAME: StringField<FormRouteMap> = new StringField('routeName', FormRouteMap, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[routeStep]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUTE_STEP: Link<FormRouteMap, FormRouteStep> = new Link('routeStep', FormRouteMap, FormRouteStep);
  /**
   * All fields of the FormRouteMap entity.
   */
  export const _allFields: Array<BigNumberField<FormRouteMap> | NumberField<FormRouteMap> | StringField<FormRouteMap> | Link<FormRouteMap, FormRouteStep>> = [
    FormRouteMap.FORM_DATA_ID,
    FormRouteMap.ROUTE_ID,
    FormRouteMap.ROUTE_NAME,
    FormRouteMap.ROUTE_STEP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormRouteMap> = new AllFields('*', FormRouteMap);
  /**
   * All key fields of the FormRouteMap entity.
   */
  export const _keyFields: Array<Selectable<FormRouteMap>> = [FormRouteMap.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property FormRouteMap.
   */
  export const _keys: { [keys: string]: Selectable<FormRouteMap> } = FormRouteMap._keyFields.reduce((acc: { [keys: string]: Selectable<FormRouteMap> }, field: Selectable<FormRouteMap>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
