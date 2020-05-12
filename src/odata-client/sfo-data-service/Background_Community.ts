/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_CommunityRequestBuilder } from './Background_CommunityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_Community" of service "SFOData".
 */
export class Background_Community extends Entity implements Background_CommunityType {
  /**
   * Technical entity name for Background_Community.
   */
  static _entityName = 'Background_Community';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_Community.
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
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * Community/Volunteer Organization Name.
   */
  name!: string;
  /**
   * Role.
   * @nullable
   */
  role?: string;
  /**
   * From Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * userId.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;

  /**
   * Returns an entity builder to construct instances `Background_Community`.
   * @returns A builder that constructs instances of entity type `Background_Community`.
   */
  static builder(): EntityBuilderType<Background_Community, Background_CommunityTypeForceMandatory> {
    return Entity.entityBuilder(Background_Community);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_Community` entity type.
   * @returns A `Background_Community` request builder.
   */
  static requestBuilder(): Background_CommunityRequestBuilder {
    return new Background_CommunityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Community`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_Community`.
   */
  static customField(fieldName: string): CustomField<Background_Community> {
    return Entity.customFieldSelector(fieldName, Background_Community);
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

export interface Background_CommunityType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  endDate?: Moment;
  lastModifiedDate: Moment;
  name: string;
  role?: string;
  startDate?: Moment;
  userId: string;
  userIdNav: UserType;
}

export interface Background_CommunityTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  endDate: Moment;
  lastModifiedDate: Moment;
  name: string;
  role: string;
  startDate: Moment;
  userId: string;
  userIdNav: UserType;
}

export namespace Background_Community {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Community> = new BigNumberField('backgroundElementId', Background_Community, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_Community> = new BigNumberField('bgOrderPos', Background_Community, 'Edm.Int64');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<Background_Community> = new DateField('endDate', Background_Community, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_Community> = new DateField('lastModifiedDate', Background_Community, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<Background_Community> = new StringField('name', Background_Community, 'Edm.String');
  /**
   * Static representation of the [[role]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE: StringField<Background_Community> = new StringField('role', Background_Community, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<Background_Community> = new DateField('startDate', Background_Community, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_Community> = new StringField('userId', Background_Community, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_Community, User> = new OneToOneLink('userIdNav', Background_Community, User);
  /**
   * All fields of the Background_Community entity.
   */
  export const _allFields: Array<BigNumberField<Background_Community> | DateField<Background_Community> | StringField<Background_Community> | OneToOneLink<Background_Community, User>> = [
    Background_Community.BACKGROUND_ELEMENT_ID,
    Background_Community.BG_ORDER_POS,
    Background_Community.END_DATE,
    Background_Community.LAST_MODIFIED_DATE,
    Background_Community.NAME,
    Background_Community.ROLE,
    Background_Community.START_DATE,
    Background_Community.USER_ID,
    Background_Community.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_Community> = new AllFields('*', Background_Community);
  /**
   * All key fields of the Background_Community entity.
   */
  export const _keyFields: Array<Selectable<Background_Community>> = [Background_Community.BACKGROUND_ELEMENT_ID, Background_Community.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_Community.
   */
  export const _keys: { [keys: string]: Selectable<Background_Community> } = Background_Community._keyFields.reduce((acc: { [keys: string]: Selectable<Background_Community> }, field: Selectable<Background_Community>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
