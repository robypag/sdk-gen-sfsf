/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_PromotabilityRequestBuilder } from './Background_PromotabilityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_Promotability" of service "SFOData".
 */
export class Background_Promotability extends Entity implements Background_PromotabilityType {
  /**
   * Technical entity name for Background_Promotability.
   */
  static _entityName = 'Background_Promotability';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_Promotability.
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
   * Function.
   */
  function!: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * Level.
   */
  level!: string;
  /**
   * Timeframe.
   */
  timeframe!: string;
  /**
   * userId.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  functionNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  levelNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  timeframeNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;

  /**
   * Returns an entity builder to construct instances `Background_Promotability`.
   * @returns A builder that constructs instances of entity type `Background_Promotability`.
   */
  static builder(): EntityBuilderType<Background_Promotability, Background_PromotabilityTypeForceMandatory> {
    return Entity.entityBuilder(Background_Promotability);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_Promotability` entity type.
   * @returns A `Background_Promotability` request builder.
   */
  static requestBuilder(): Background_PromotabilityRequestBuilder {
    return new Background_PromotabilityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Promotability`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_Promotability`.
   */
  static customField(fieldName: string): CustomField<Background_Promotability> {
    return Entity.customFieldSelector(fieldName, Background_Promotability);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { User, UserType } from './User';

export interface Background_PromotabilityType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  function: string;
  lastModifiedDate: Moment;
  level: string;
  timeframe: string;
  userId: string;
  functionNav: PicklistOptionType;
  levelNav: PicklistOptionType;
  timeframeNav: PicklistOptionType;
  userIdNav: UserType;
}

export interface Background_PromotabilityTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  function: string;
  lastModifiedDate: Moment;
  level: string;
  timeframe: string;
  userId: string;
  functionNav: PicklistOptionType;
  levelNav: PicklistOptionType;
  timeframeNav: PicklistOptionType;
  userIdNav: UserType;
}

export namespace Background_Promotability {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Promotability> = new BigNumberField('backgroundElementId', Background_Promotability, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_Promotability> = new BigNumberField('bgOrderPos', Background_Promotability, 'Edm.Int64');
  /**
   * Static representation of the [[function]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FUNCTION: StringField<Background_Promotability> = new StringField('function', Background_Promotability, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_Promotability> = new DateField('lastModifiedDate', Background_Promotability, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[level]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEVEL: StringField<Background_Promotability> = new StringField('level', Background_Promotability, 'Edm.String');
  /**
   * Static representation of the [[timeframe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIMEFRAME: StringField<Background_Promotability> = new StringField('timeframe', Background_Promotability, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_Promotability> = new StringField('userId', Background_Promotability, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[functionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FUNCTION_NAV: OneToOneLink<Background_Promotability, PicklistOption> = new OneToOneLink('functionNav', Background_Promotability, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[levelNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEVEL_NAV: OneToOneLink<Background_Promotability, PicklistOption> = new OneToOneLink('levelNav', Background_Promotability, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[timeframeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIMEFRAME_NAV: OneToOneLink<Background_Promotability, PicklistOption> = new OneToOneLink('timeframeNav', Background_Promotability, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_Promotability, User> = new OneToOneLink('userIdNav', Background_Promotability, User);
  /**
   * All fields of the Background_Promotability entity.
   */
  export const _allFields: Array<BigNumberField<Background_Promotability> | StringField<Background_Promotability> | DateField<Background_Promotability> | OneToOneLink<Background_Promotability, PicklistOption> | OneToOneLink<Background_Promotability, User>> = [
    Background_Promotability.BACKGROUND_ELEMENT_ID,
    Background_Promotability.BG_ORDER_POS,
    Background_Promotability.FUNCTION,
    Background_Promotability.LAST_MODIFIED_DATE,
    Background_Promotability.LEVEL,
    Background_Promotability.TIMEFRAME,
    Background_Promotability.USER_ID,
    Background_Promotability.FUNCTION_NAV,
    Background_Promotability.LEVEL_NAV,
    Background_Promotability.TIMEFRAME_NAV,
    Background_Promotability.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_Promotability> = new AllFields('*', Background_Promotability);
  /**
   * All key fields of the Background_Promotability entity.
   */
  export const _keyFields: Array<Selectable<Background_Promotability>> = [Background_Promotability.BACKGROUND_ELEMENT_ID, Background_Promotability.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_Promotability.
   */
  export const _keys: { [keys: string]: Selectable<Background_Promotability> } = Background_Promotability._keyFields.reduce((acc: { [keys: string]: Selectable<Background_Promotability> }, field: Selectable<Background_Promotability>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
