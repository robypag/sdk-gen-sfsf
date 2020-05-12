/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_MembershipsRequestBuilder } from './Background_MembershipsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_Memberships" of service "SFOData".
 */
export class Background_Memberships extends Entity implements Background_MembershipsType {
  /**
   * Technical entity name for Background_Memberships.
   */
  static _entityName = 'Background_Memberships';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_Memberships.
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
   * Organization.
   */
  organization!: string;
  /**
   * Position/Role.
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
   * Returns an entity builder to construct instances `Background_Memberships`.
   * @returns A builder that constructs instances of entity type `Background_Memberships`.
   */
  static builder(): EntityBuilderType<Background_Memberships, Background_MembershipsTypeForceMandatory> {
    return Entity.entityBuilder(Background_Memberships);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_Memberships` entity type.
   * @returns A `Background_Memberships` request builder.
   */
  static requestBuilder(): Background_MembershipsRequestBuilder {
    return new Background_MembershipsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Memberships`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_Memberships`.
   */
  static customField(fieldName: string): CustomField<Background_Memberships> {
    return Entity.customFieldSelector(fieldName, Background_Memberships);
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

export interface Background_MembershipsType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  endDate?: Moment;
  lastModifiedDate: Moment;
  organization: string;
  role?: string;
  startDate?: Moment;
  userId: string;
  userIdNav: UserType;
}

export interface Background_MembershipsTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  endDate: Moment;
  lastModifiedDate: Moment;
  organization: string;
  role: string;
  startDate: Moment;
  userId: string;
  userIdNav: UserType;
}

export namespace Background_Memberships {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Memberships> = new BigNumberField('backgroundElementId', Background_Memberships, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_Memberships> = new BigNumberField('bgOrderPos', Background_Memberships, 'Edm.Int64');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<Background_Memberships> = new DateField('endDate', Background_Memberships, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_Memberships> = new DateField('lastModifiedDate', Background_Memberships, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[organization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION: StringField<Background_Memberships> = new StringField('organization', Background_Memberships, 'Edm.String');
  /**
   * Static representation of the [[role]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE: StringField<Background_Memberships> = new StringField('role', Background_Memberships, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<Background_Memberships> = new DateField('startDate', Background_Memberships, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_Memberships> = new StringField('userId', Background_Memberships, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_Memberships, User> = new OneToOneLink('userIdNav', Background_Memberships, User);
  /**
   * All fields of the Background_Memberships entity.
   */
  export const _allFields: Array<BigNumberField<Background_Memberships> | DateField<Background_Memberships> | StringField<Background_Memberships> | OneToOneLink<Background_Memberships, User>> = [
    Background_Memberships.BACKGROUND_ELEMENT_ID,
    Background_Memberships.BG_ORDER_POS,
    Background_Memberships.END_DATE,
    Background_Memberships.LAST_MODIFIED_DATE,
    Background_Memberships.ORGANIZATION,
    Background_Memberships.ROLE,
    Background_Memberships.START_DATE,
    Background_Memberships.USER_ID,
    Background_Memberships.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_Memberships> = new AllFields('*', Background_Memberships);
  /**
   * All key fields of the Background_Memberships entity.
   */
  export const _keyFields: Array<Selectable<Background_Memberships>> = [Background_Memberships.BACKGROUND_ELEMENT_ID, Background_Memberships.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_Memberships.
   */
  export const _keys: { [keys: string]: Selectable<Background_Memberships> } = Background_Memberships._keyFields.reduce((acc: { [keys: string]: Selectable<Background_Memberships> }, field: Selectable<Background_Memberships>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
