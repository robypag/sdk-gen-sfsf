/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_FuncExperienceRequestBuilder } from './Background_FuncExperienceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_FuncExperience" of service "SFOData".
 */
export class Background_FuncExperience extends Entity implements Background_FuncExperienceType {
  /**
   * Technical entity name for Background_FuncExperience.
   */
  static _entityName = 'Background_FuncExperience';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_FuncExperience.
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
   */
  experience!: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * userId.
   */
  userId!: string;
  /**
   * Years of Experience.
   */
  years!: number;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  experienceNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;

  /**
   * Returns an entity builder to construct instances `Background_FuncExperience`.
   * @returns A builder that constructs instances of entity type `Background_FuncExperience`.
   */
  static builder(): EntityBuilderType<Background_FuncExperience, Background_FuncExperienceTypeForceMandatory> {
    return Entity.entityBuilder(Background_FuncExperience);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_FuncExperience` entity type.
   * @returns A `Background_FuncExperience` request builder.
   */
  static requestBuilder(): Background_FuncExperienceRequestBuilder {
    return new Background_FuncExperienceRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_FuncExperience`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_FuncExperience`.
   */
  static customField(fieldName: string): CustomField<Background_FuncExperience> {
    return Entity.customFieldSelector(fieldName, Background_FuncExperience);
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

export interface Background_FuncExperienceType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  comments?: string;
  experience: string;
  lastModifiedDate: Moment;
  userId: string;
  years: number;
  experienceNav: PicklistOptionType;
  userIdNav: UserType;
}

export interface Background_FuncExperienceTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  comments: string;
  experience: string;
  lastModifiedDate: Moment;
  userId: string;
  years: number;
  experienceNav: PicklistOptionType;
  userIdNav: UserType;
}

export namespace Background_FuncExperience {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_FuncExperience> = new BigNumberField('backgroundElementId', Background_FuncExperience, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_FuncExperience> = new BigNumberField('bgOrderPos', Background_FuncExperience, 'Edm.Int64');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<Background_FuncExperience> = new StringField('comments', Background_FuncExperience, 'Edm.String');
  /**
   * Static representation of the [[experience]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPERIENCE: StringField<Background_FuncExperience> = new StringField('experience', Background_FuncExperience, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_FuncExperience> = new DateField('lastModifiedDate', Background_FuncExperience, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_FuncExperience> = new StringField('userId', Background_FuncExperience, 'Edm.String');
  /**
   * Static representation of the [[years]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const YEARS: NumberField<Background_FuncExperience> = new NumberField('years', Background_FuncExperience, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[experienceNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPERIENCE_NAV: OneToOneLink<Background_FuncExperience, PicklistOption> = new OneToOneLink('experienceNav', Background_FuncExperience, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_FuncExperience, User> = new OneToOneLink('userIdNav', Background_FuncExperience, User);
  /**
   * All fields of the Background_FuncExperience entity.
   */
  export const _allFields: Array<BigNumberField<Background_FuncExperience> | StringField<Background_FuncExperience> | DateField<Background_FuncExperience> | NumberField<Background_FuncExperience> | OneToOneLink<Background_FuncExperience, PicklistOption> | OneToOneLink<Background_FuncExperience, User>> = [
    Background_FuncExperience.BACKGROUND_ELEMENT_ID,
    Background_FuncExperience.BG_ORDER_POS,
    Background_FuncExperience.COMMENTS,
    Background_FuncExperience.EXPERIENCE,
    Background_FuncExperience.LAST_MODIFIED_DATE,
    Background_FuncExperience.USER_ID,
    Background_FuncExperience.YEARS,
    Background_FuncExperience.EXPERIENCE_NAV,
    Background_FuncExperience.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_FuncExperience> = new AllFields('*', Background_FuncExperience);
  /**
   * All key fields of the Background_FuncExperience entity.
   */
  export const _keyFields: Array<Selectable<Background_FuncExperience>> = [Background_FuncExperience.BACKGROUND_ELEMENT_ID, Background_FuncExperience.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_FuncExperience.
   */
  export const _keys: { [keys: string]: Selectable<Background_FuncExperience> } = Background_FuncExperience._keyFields.reduce((acc: { [keys: string]: Selectable<Background_FuncExperience> }, field: Selectable<Background_FuncExperience>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
