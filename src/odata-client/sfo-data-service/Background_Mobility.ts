/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_MobilityRequestBuilder } from './Background_MobilityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_Mobility" of service "SFOData".
 */
export class Background_Mobility extends Entity implements Background_MobilityType {
  /**
   * Technical entity name for Background_Mobility.
   */
  static _entityName = 'Background_Mobility';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_Mobility.
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
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * Location Desired.
   * @nullable
   */
  location?: string;
  /**
   * userId.
   */
  userId!: string;
  /**
   * Willing to Relocate.
   */
  willingness!: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  willingnessNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `Background_Mobility`.
   * @returns A builder that constructs instances of entity type `Background_Mobility`.
   */
  static builder(): EntityBuilderType<Background_Mobility, Background_MobilityTypeForceMandatory> {
    return Entity.entityBuilder(Background_Mobility);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_Mobility` entity type.
   * @returns A `Background_Mobility` request builder.
   */
  static requestBuilder(): Background_MobilityRequestBuilder {
    return new Background_MobilityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Mobility`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_Mobility`.
   */
  static customField(fieldName: string): CustomField<Background_Mobility> {
    return Entity.customFieldSelector(fieldName, Background_Mobility);
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
import { PicklistOption, PicklistOptionType } from './PicklistOption';

export interface Background_MobilityType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  lastModifiedDate: Moment;
  location?: string;
  userId: string;
  willingness: string;
  userIdNav: UserType;
  willingnessNav: PicklistOptionType;
}

export interface Background_MobilityTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  lastModifiedDate: Moment;
  location: string;
  userId: string;
  willingness: string;
  userIdNav: UserType;
  willingnessNav: PicklistOptionType;
}

export namespace Background_Mobility {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Mobility> = new BigNumberField('backgroundElementId', Background_Mobility, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_Mobility> = new BigNumberField('bgOrderPos', Background_Mobility, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_Mobility> = new DateField('lastModifiedDate', Background_Mobility, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: StringField<Background_Mobility> = new StringField('location', Background_Mobility, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_Mobility> = new StringField('userId', Background_Mobility, 'Edm.String');
  /**
   * Static representation of the [[willingness]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WILLINGNESS: StringField<Background_Mobility> = new StringField('willingness', Background_Mobility, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_Mobility, User> = new OneToOneLink('userIdNav', Background_Mobility, User);
  /**
   * Static representation of the one-to-one navigation property [[willingnessNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WILLINGNESS_NAV: OneToOneLink<Background_Mobility, PicklistOption> = new OneToOneLink('willingnessNav', Background_Mobility, PicklistOption);
  /**
   * All fields of the Background_Mobility entity.
   */
  export const _allFields: Array<BigNumberField<Background_Mobility> | DateField<Background_Mobility> | StringField<Background_Mobility> | OneToOneLink<Background_Mobility, User> | OneToOneLink<Background_Mobility, PicklistOption>> = [
    Background_Mobility.BACKGROUND_ELEMENT_ID,
    Background_Mobility.BG_ORDER_POS,
    Background_Mobility.LAST_MODIFIED_DATE,
    Background_Mobility.LOCATION,
    Background_Mobility.USER_ID,
    Background_Mobility.WILLINGNESS,
    Background_Mobility.USER_ID_NAV,
    Background_Mobility.WILLINGNESS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_Mobility> = new AllFields('*', Background_Mobility);
  /**
   * All key fields of the Background_Mobility entity.
   */
  export const _keyFields: Array<Selectable<Background_Mobility>> = [Background_Mobility.BACKGROUND_ELEMENT_ID, Background_Mobility.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_Mobility.
   */
  export const _keys: { [keys: string]: Selectable<Background_Mobility> } = Background_Mobility._keyFields.reduce((acc: { [keys: string]: Selectable<Background_Mobility> }, field: Selectable<Background_Mobility>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
