/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_Matrix1PlacementRequestBuilder } from './Background_Matrix1PlacementRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_Matrix1placement" of service "SFOData".
 */
export class Background_Matrix1Placement extends Entity implements Background_Matrix1PlacementType {
  /**
   * Technical entity name for Background_Matrix1Placement.
   */
  static _entityName = 'Background_Matrix1placement';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_Matrix1Placement.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * backgroundElementId.
   */
  backgroundElementId!: BigNumber;
  /**
   * bgOrderPos.
   */
  bgOrderPos!: BigNumber;
  /**
   * Placement End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * Nine Box.
   * @nullable
   */
  nineBox?: string;
  /**
   * Placement.
   * @nullable
   */
  placement?: number;
  /**
   * Placement Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * userId.
   */
  userId!: string;
  /**
   * X End Date.
   * @nullable
   */
  xAxisEndDate?: Moment;
  /**
   * X Start Date.
   * @nullable
   */
  xAxisStartDate?: Moment;
  /**
   * Performance Label.
   * @nullable
   */
  xAxisTrend?: number;
  /**
   * Y End Date.
   * @nullable
   */
  yAxisEndDate?: Moment;
  /**
   * Y Start Date.
   * @nullable
   */
  yAxisStartDate?: Moment;
  /**
   * Potential Label.
   * @nullable
   */
  yAxisTrend?: number;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;

  /**
   * Returns an entity builder to construct instances `Background_Matrix1Placement`.
   * @returns A builder that constructs instances of entity type `Background_Matrix1Placement`.
   */
  static builder(): EntityBuilderType<Background_Matrix1Placement, Background_Matrix1PlacementTypeForceMandatory> {
    return Entity.entityBuilder(Background_Matrix1Placement);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_Matrix1Placement` entity type.
   * @returns A `Background_Matrix1Placement` request builder.
   */
  static requestBuilder(): Background_Matrix1PlacementRequestBuilder {
    return new Background_Matrix1PlacementRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Matrix1Placement`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_Matrix1Placement`.
   */
  static customField(fieldName: string): CustomField<Background_Matrix1Placement> {
    return Entity.customFieldSelector(fieldName, Background_Matrix1Placement);
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

export interface Background_Matrix1PlacementType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  endDate?: Moment;
  lastModifiedDate: Moment;
  nineBox?: string;
  placement?: number;
  startDate?: Moment;
  userId: string;
  xAxisEndDate?: Moment;
  xAxisStartDate?: Moment;
  xAxisTrend?: number;
  yAxisEndDate?: Moment;
  yAxisStartDate?: Moment;
  yAxisTrend?: number;
  userIdNav: UserType;
}

export interface Background_Matrix1PlacementTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  endDate: Moment;
  lastModifiedDate: Moment;
  nineBox: string;
  placement: number;
  startDate: Moment;
  userId: string;
  xAxisEndDate: Moment;
  xAxisStartDate: Moment;
  xAxisTrend: number;
  yAxisEndDate: Moment;
  yAxisStartDate: Moment;
  yAxisTrend: number;
  userIdNav: UserType;
}

export namespace Background_Matrix1Placement {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Matrix1Placement> = new BigNumberField('backgroundElementId', Background_Matrix1Placement, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_Matrix1Placement> = new BigNumberField('bgOrderPos', Background_Matrix1Placement, 'Edm.Int64');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<Background_Matrix1Placement> = new DateField('endDate', Background_Matrix1Placement, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_Matrix1Placement> = new DateField('lastModifiedDate', Background_Matrix1Placement, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[nineBox]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NINE_BOX: StringField<Background_Matrix1Placement> = new StringField('nineBox', Background_Matrix1Placement, 'Edm.String');
  /**
   * Static representation of the [[placement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLACEMENT: NumberField<Background_Matrix1Placement> = new NumberField('placement', Background_Matrix1Placement, 'Edm.Int32');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<Background_Matrix1Placement> = new DateField('startDate', Background_Matrix1Placement, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_Matrix1Placement> = new StringField('userId', Background_Matrix1Placement, 'Edm.String');
  /**
   * Static representation of the [[xAxisEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const X_AXIS_END_DATE: DateField<Background_Matrix1Placement> = new DateField('xAxisEndDate', Background_Matrix1Placement, 'Edm.DateTime');
  /**
   * Static representation of the [[xAxisStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const X_AXIS_START_DATE: DateField<Background_Matrix1Placement> = new DateField('xAxisStartDate', Background_Matrix1Placement, 'Edm.DateTime');
  /**
   * Static representation of the [[xAxisTrend]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const X_AXIS_TREND: NumberField<Background_Matrix1Placement> = new NumberField('xAxisTrend', Background_Matrix1Placement, 'Edm.Int32');
  /**
   * Static representation of the [[yAxisEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const Y_AXIS_END_DATE: DateField<Background_Matrix1Placement> = new DateField('yAxisEndDate', Background_Matrix1Placement, 'Edm.DateTime');
  /**
   * Static representation of the [[yAxisStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const Y_AXIS_START_DATE: DateField<Background_Matrix1Placement> = new DateField('yAxisStartDate', Background_Matrix1Placement, 'Edm.DateTime');
  /**
   * Static representation of the [[yAxisTrend]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const Y_AXIS_TREND: NumberField<Background_Matrix1Placement> = new NumberField('yAxisTrend', Background_Matrix1Placement, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_Matrix1Placement, User> = new OneToOneLink('userIdNav', Background_Matrix1Placement, User);
  /**
   * All fields of the Background_Matrix1Placement entity.
   */
  export const _allFields: Array<BigNumberField<Background_Matrix1Placement> | DateField<Background_Matrix1Placement> | StringField<Background_Matrix1Placement> | NumberField<Background_Matrix1Placement> | OneToOneLink<Background_Matrix1Placement, User>> = [
    Background_Matrix1Placement.BACKGROUND_ELEMENT_ID,
    Background_Matrix1Placement.BG_ORDER_POS,
    Background_Matrix1Placement.END_DATE,
    Background_Matrix1Placement.LAST_MODIFIED_DATE,
    Background_Matrix1Placement.NINE_BOX,
    Background_Matrix1Placement.PLACEMENT,
    Background_Matrix1Placement.START_DATE,
    Background_Matrix1Placement.USER_ID,
    Background_Matrix1Placement.X_AXIS_END_DATE,
    Background_Matrix1Placement.X_AXIS_START_DATE,
    Background_Matrix1Placement.X_AXIS_TREND,
    Background_Matrix1Placement.Y_AXIS_END_DATE,
    Background_Matrix1Placement.Y_AXIS_START_DATE,
    Background_Matrix1Placement.Y_AXIS_TREND,
    Background_Matrix1Placement.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_Matrix1Placement> = new AllFields('*', Background_Matrix1Placement);
  /**
   * All key fields of the Background_Matrix1Placement entity.
   */
  export const _keyFields: Array<Selectable<Background_Matrix1Placement>> = [Background_Matrix1Placement.BACKGROUND_ELEMENT_ID, Background_Matrix1Placement.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_Matrix1Placement.
   */
  export const _keys: { [keys: string]: Selectable<Background_Matrix1Placement> } = Background_Matrix1Placement._keyFields.reduce((acc: { [keys: string]: Selectable<Background_Matrix1Placement> }, field: Selectable<Background_Matrix1Placement>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
