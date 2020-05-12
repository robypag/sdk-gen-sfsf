/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_InsideWorkExperienceRequestBuilder } from './Background_InsideWorkExperienceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_InsideWorkExperience" of service "SFOData".
 */
export class Background_InsideWorkExperience extends Entity implements Background_InsideWorkExperienceType {
  /**
   * Technical entity name for Background_InsideWorkExperience.
   */
  static _entityName = 'Background_InsideWorkExperience';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_InsideWorkExperience.
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
   * Department.
   * @nullable
   */
  department?: string;
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
   * Start Date.
   */
  startDate!: Moment;
  /**
   * Title.
   */
  title!: string;
  /**
   * userId.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;

  /**
   * Returns an entity builder to construct instances `Background_InsideWorkExperience`.
   * @returns A builder that constructs instances of entity type `Background_InsideWorkExperience`.
   */
  static builder(): EntityBuilderType<Background_InsideWorkExperience, Background_InsideWorkExperienceTypeForceMandatory> {
    return Entity.entityBuilder(Background_InsideWorkExperience);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_InsideWorkExperience` entity type.
   * @returns A `Background_InsideWorkExperience` request builder.
   */
  static requestBuilder(): Background_InsideWorkExperienceRequestBuilder {
    return new Background_InsideWorkExperienceRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_InsideWorkExperience`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_InsideWorkExperience`.
   */
  static customField(fieldName: string): CustomField<Background_InsideWorkExperience> {
    return Entity.customFieldSelector(fieldName, Background_InsideWorkExperience);
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

export interface Background_InsideWorkExperienceType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  department?: string;
  endDate?: Moment;
  lastModifiedDate: Moment;
  startDate: Moment;
  title: string;
  userId: string;
  userIdNav: UserType;
}

export interface Background_InsideWorkExperienceTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  department: string;
  endDate: Moment;
  lastModifiedDate: Moment;
  startDate: Moment;
  title: string;
  userId: string;
  userIdNav: UserType;
}

export namespace Background_InsideWorkExperience {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_InsideWorkExperience> = new BigNumberField('backgroundElementId', Background_InsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_InsideWorkExperience> = new BigNumberField('bgOrderPos', Background_InsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[department]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: StringField<Background_InsideWorkExperience> = new StringField('department', Background_InsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<Background_InsideWorkExperience> = new DateField('endDate', Background_InsideWorkExperience, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_InsideWorkExperience> = new DateField('lastModifiedDate', Background_InsideWorkExperience, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<Background_InsideWorkExperience> = new DateField('startDate', Background_InsideWorkExperience, 'Edm.DateTime');
  /**
   * Static representation of the [[title]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE: StringField<Background_InsideWorkExperience> = new StringField('title', Background_InsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_InsideWorkExperience> = new StringField('userId', Background_InsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_InsideWorkExperience, User> = new OneToOneLink('userIdNav', Background_InsideWorkExperience, User);
  /**
   * All fields of the Background_InsideWorkExperience entity.
   */
  export const _allFields: Array<BigNumberField<Background_InsideWorkExperience> | StringField<Background_InsideWorkExperience> | DateField<Background_InsideWorkExperience> | OneToOneLink<Background_InsideWorkExperience, User>> = [
    Background_InsideWorkExperience.BACKGROUND_ELEMENT_ID,
    Background_InsideWorkExperience.BG_ORDER_POS,
    Background_InsideWorkExperience.DEPARTMENT,
    Background_InsideWorkExperience.END_DATE,
    Background_InsideWorkExperience.LAST_MODIFIED_DATE,
    Background_InsideWorkExperience.START_DATE,
    Background_InsideWorkExperience.TITLE,
    Background_InsideWorkExperience.USER_ID,
    Background_InsideWorkExperience.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_InsideWorkExperience> = new AllFields('*', Background_InsideWorkExperience);
  /**
   * All key fields of the Background_InsideWorkExperience entity.
   */
  export const _keyFields: Array<Selectable<Background_InsideWorkExperience>> = [Background_InsideWorkExperience.BACKGROUND_ELEMENT_ID, Background_InsideWorkExperience.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_InsideWorkExperience.
   */
  export const _keys: { [keys: string]: Selectable<Background_InsideWorkExperience> } = Background_InsideWorkExperience._keyFields.reduce((acc: { [keys: string]: Selectable<Background_InsideWorkExperience> }, field: Selectable<Background_InsideWorkExperience>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
