/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_SpecialAssignRequestBuilder } from './Background_SpecialAssignRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_SpecialAssign" of service "SFOData".
 */
export class Background_SpecialAssign extends Entity implements Background_SpecialAssignType {
  /**
   * Technical entity name for Background_SpecialAssign.
   */
  static _entityName = 'Background_SpecialAssign';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_SpecialAssign.
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
   * Description.
   * @nullable
   */
  description?: string;
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
   * Assignment/Project.
   */
  project!: string;
  /**
   * From Date.
   */
  startDate!: Moment;
  /**
   * userId.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;

  /**
   * Returns an entity builder to construct instances `Background_SpecialAssign`.
   * @returns A builder that constructs instances of entity type `Background_SpecialAssign`.
   */
  static builder(): EntityBuilderType<Background_SpecialAssign, Background_SpecialAssignTypeForceMandatory> {
    return Entity.entityBuilder(Background_SpecialAssign);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_SpecialAssign` entity type.
   * @returns A `Background_SpecialAssign` request builder.
   */
  static requestBuilder(): Background_SpecialAssignRequestBuilder {
    return new Background_SpecialAssignRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_SpecialAssign`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_SpecialAssign`.
   */
  static customField(fieldName: string): CustomField<Background_SpecialAssign> {
    return Entity.customFieldSelector(fieldName, Background_SpecialAssign);
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

export interface Background_SpecialAssignType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  description?: string;
  endDate?: Moment;
  lastModifiedDate: Moment;
  project: string;
  startDate: Moment;
  userId: string;
  userIdNav: UserType;
}

export interface Background_SpecialAssignTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  description: string;
  endDate: Moment;
  lastModifiedDate: Moment;
  project: string;
  startDate: Moment;
  userId: string;
  userIdNav: UserType;
}

export namespace Background_SpecialAssign {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_SpecialAssign> = new BigNumberField('backgroundElementId', Background_SpecialAssign, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_SpecialAssign> = new BigNumberField('bgOrderPos', Background_SpecialAssign, 'Edm.Int64');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<Background_SpecialAssign> = new StringField('description', Background_SpecialAssign, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<Background_SpecialAssign> = new DateField('endDate', Background_SpecialAssign, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_SpecialAssign> = new DateField('lastModifiedDate', Background_SpecialAssign, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[project]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: StringField<Background_SpecialAssign> = new StringField('project', Background_SpecialAssign, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<Background_SpecialAssign> = new DateField('startDate', Background_SpecialAssign, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_SpecialAssign> = new StringField('userId', Background_SpecialAssign, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_SpecialAssign, User> = new OneToOneLink('userIdNav', Background_SpecialAssign, User);
  /**
   * All fields of the Background_SpecialAssign entity.
   */
  export const _allFields: Array<BigNumberField<Background_SpecialAssign> | StringField<Background_SpecialAssign> | DateField<Background_SpecialAssign> | OneToOneLink<Background_SpecialAssign, User>> = [
    Background_SpecialAssign.BACKGROUND_ELEMENT_ID,
    Background_SpecialAssign.BG_ORDER_POS,
    Background_SpecialAssign.DESCRIPTION,
    Background_SpecialAssign.END_DATE,
    Background_SpecialAssign.LAST_MODIFIED_DATE,
    Background_SpecialAssign.PROJECT,
    Background_SpecialAssign.START_DATE,
    Background_SpecialAssign.USER_ID,
    Background_SpecialAssign.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_SpecialAssign> = new AllFields('*', Background_SpecialAssign);
  /**
   * All key fields of the Background_SpecialAssign entity.
   */
  export const _keyFields: Array<Selectable<Background_SpecialAssign>> = [Background_SpecialAssign.BACKGROUND_ELEMENT_ID, Background_SpecialAssign.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_SpecialAssign.
   */
  export const _keys: { [keys: string]: Selectable<Background_SpecialAssign> } = Background_SpecialAssign._keyFields.reduce((acc: { [keys: string]: Selectable<Background_SpecialAssign> }, field: Selectable<Background_SpecialAssign>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
