/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_PreferredNextMoveRequestBuilder } from './Background_PreferredNextMoveRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_PreferredNextMove" of service "SFOData".
 */
export class Background_PreferredNextMove extends Entity implements Background_PreferredNextMoveType {
  /**
   * Technical entity name for Background_PreferredNextMove.
   */
  static _entityName = 'Background_PreferredNextMove';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_PreferredNextMove.
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
   * Comments.
   * @nullable
   */
  comments?: string;
  /**
   * Function.
   * @nullable
   */
  function?: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * Level.
   * @nullable
   */
  level?: string;
  /**
   * Timeframe.
   * @nullable
   */
  timeframe?: string;
  /**
   * Title.
   */
  title!: string;
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
   * Returns an entity builder to construct instances `Background_PreferredNextMove`.
   * @returns A builder that constructs instances of entity type `Background_PreferredNextMove`.
   */
  static builder(): EntityBuilderType<Background_PreferredNextMove, Background_PreferredNextMoveTypeForceMandatory> {
    return Entity.entityBuilder(Background_PreferredNextMove);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_PreferredNextMove` entity type.
   * @returns A `Background_PreferredNextMove` request builder.
   */
  static requestBuilder(): Background_PreferredNextMoveRequestBuilder {
    return new Background_PreferredNextMoveRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_PreferredNextMove`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_PreferredNextMove`.
   */
  static customField(fieldName: string): CustomField<Background_PreferredNextMove> {
    return Entity.customFieldSelector(fieldName, Background_PreferredNextMove);
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

export interface Background_PreferredNextMoveType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  comments?: string;
  function?: string;
  lastModifiedDate: Moment;
  level?: string;
  timeframe?: string;
  title: string;
  userId: string;
  functionNav: PicklistOptionType;
  levelNav: PicklistOptionType;
  timeframeNav: PicklistOptionType;
  userIdNav: UserType;
}

export interface Background_PreferredNextMoveTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  comments: string;
  function: string;
  lastModifiedDate: Moment;
  level: string;
  timeframe: string;
  title: string;
  userId: string;
  functionNav: PicklistOptionType;
  levelNav: PicklistOptionType;
  timeframeNav: PicklistOptionType;
  userIdNav: UserType;
}

export namespace Background_PreferredNextMove {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_PreferredNextMove> = new BigNumberField('backgroundElementId', Background_PreferredNextMove, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_PreferredNextMove> = new BigNumberField('bgOrderPos', Background_PreferredNextMove, 'Edm.Int64');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<Background_PreferredNextMove> = new StringField('comments', Background_PreferredNextMove, 'Edm.String');
  /**
   * Static representation of the [[function]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FUNCTION: StringField<Background_PreferredNextMove> = new StringField('function', Background_PreferredNextMove, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_PreferredNextMove> = new DateField('lastModifiedDate', Background_PreferredNextMove, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[level]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEVEL: StringField<Background_PreferredNextMove> = new StringField('level', Background_PreferredNextMove, 'Edm.String');
  /**
   * Static representation of the [[timeframe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIMEFRAME: StringField<Background_PreferredNextMove> = new StringField('timeframe', Background_PreferredNextMove, 'Edm.String');
  /**
   * Static representation of the [[title]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE: StringField<Background_PreferredNextMove> = new StringField('title', Background_PreferredNextMove, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_PreferredNextMove> = new StringField('userId', Background_PreferredNextMove, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[functionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FUNCTION_NAV: OneToOneLink<Background_PreferredNextMove, PicklistOption> = new OneToOneLink('functionNav', Background_PreferredNextMove, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[levelNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEVEL_NAV: OneToOneLink<Background_PreferredNextMove, PicklistOption> = new OneToOneLink('levelNav', Background_PreferredNextMove, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[timeframeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIMEFRAME_NAV: OneToOneLink<Background_PreferredNextMove, PicklistOption> = new OneToOneLink('timeframeNav', Background_PreferredNextMove, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_PreferredNextMove, User> = new OneToOneLink('userIdNav', Background_PreferredNextMove, User);
  /**
   * All fields of the Background_PreferredNextMove entity.
   */
  export const _allFields: Array<BigNumberField<Background_PreferredNextMove> | StringField<Background_PreferredNextMove> | DateField<Background_PreferredNextMove> | OneToOneLink<Background_PreferredNextMove, PicklistOption> | OneToOneLink<Background_PreferredNextMove, User>> = [
    Background_PreferredNextMove.BACKGROUND_ELEMENT_ID,
    Background_PreferredNextMove.BG_ORDER_POS,
    Background_PreferredNextMove.COMMENTS,
    Background_PreferredNextMove.FUNCTION,
    Background_PreferredNextMove.LAST_MODIFIED_DATE,
    Background_PreferredNextMove.LEVEL,
    Background_PreferredNextMove.TIMEFRAME,
    Background_PreferredNextMove.TITLE,
    Background_PreferredNextMove.USER_ID,
    Background_PreferredNextMove.FUNCTION_NAV,
    Background_PreferredNextMove.LEVEL_NAV,
    Background_PreferredNextMove.TIMEFRAME_NAV,
    Background_PreferredNextMove.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_PreferredNextMove> = new AllFields('*', Background_PreferredNextMove);
  /**
   * All key fields of the Background_PreferredNextMove entity.
   */
  export const _keyFields: Array<Selectable<Background_PreferredNextMove>> = [Background_PreferredNextMove.BACKGROUND_ELEMENT_ID, Background_PreferredNextMove.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_PreferredNextMove.
   */
  export const _keys: { [keys: string]: Selectable<Background_PreferredNextMove> } = Background_PreferredNextMove._keyFields.reduce((acc: { [keys: string]: Selectable<Background_PreferredNextMove> }, field: Selectable<Background_PreferredNextMove>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
