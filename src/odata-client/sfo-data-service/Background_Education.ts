/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_EducationRequestBuilder } from './Background_EducationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_Education" of service "SFOData".
 */
export class Background_Education extends Entity implements Background_EducationType {
  /**
   * Technical entity name for Background_Education.
   */
  static _entityName = 'Background_Education';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_Education.
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
   * Degree.
   */
  degree!: string;
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
   * Major.
   */
  major!: string;
  /**
   * School.
   */
  school!: string;
  /**
   * Start Date.
   */
  startDate!: Moment;
  /**
   * userId.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  degreeNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  majorNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;

  /**
   * Returns an entity builder to construct instances `Background_Education`.
   * @returns A builder that constructs instances of entity type `Background_Education`.
   */
  static builder(): EntityBuilderType<Background_Education, Background_EducationTypeForceMandatory> {
    return Entity.entityBuilder(Background_Education);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_Education` entity type.
   * @returns A `Background_Education` request builder.
   */
  static requestBuilder(): Background_EducationRequestBuilder {
    return new Background_EducationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Education`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_Education`.
   */
  static customField(fieldName: string): CustomField<Background_Education> {
    return Entity.customFieldSelector(fieldName, Background_Education);
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

export interface Background_EducationType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  degree: string;
  endDate?: Moment;
  lastModifiedDate: Moment;
  major: string;
  school: string;
  startDate: Moment;
  userId: string;
  degreeNav: PicklistOptionType;
  majorNav: PicklistOptionType;
  userIdNav: UserType;
}

export interface Background_EducationTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  degree: string;
  endDate: Moment;
  lastModifiedDate: Moment;
  major: string;
  school: string;
  startDate: Moment;
  userId: string;
  degreeNav: PicklistOptionType;
  majorNav: PicklistOptionType;
  userIdNav: UserType;
}

export namespace Background_Education {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Education> = new BigNumberField('backgroundElementId', Background_Education, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_Education> = new BigNumberField('bgOrderPos', Background_Education, 'Edm.Int64');
  /**
   * Static representation of the [[degree]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE: StringField<Background_Education> = new StringField('degree', Background_Education, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<Background_Education> = new DateField('endDate', Background_Education, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_Education> = new DateField('lastModifiedDate', Background_Education, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[major]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAJOR: StringField<Background_Education> = new StringField('major', Background_Education, 'Edm.String');
  /**
   * Static representation of the [[school]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHOOL: StringField<Background_Education> = new StringField('school', Background_Education, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<Background_Education> = new DateField('startDate', Background_Education, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_Education> = new StringField('userId', Background_Education, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[degreeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_NAV: OneToOneLink<Background_Education, PicklistOption> = new OneToOneLink('degreeNav', Background_Education, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[majorNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAJOR_NAV: OneToOneLink<Background_Education, PicklistOption> = new OneToOneLink('majorNav', Background_Education, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_Education, User> = new OneToOneLink('userIdNav', Background_Education, User);
  /**
   * All fields of the Background_Education entity.
   */
  export const _allFields: Array<BigNumberField<Background_Education> | StringField<Background_Education> | DateField<Background_Education> | OneToOneLink<Background_Education, PicklistOption> | OneToOneLink<Background_Education, User>> = [
    Background_Education.BACKGROUND_ELEMENT_ID,
    Background_Education.BG_ORDER_POS,
    Background_Education.DEGREE,
    Background_Education.END_DATE,
    Background_Education.LAST_MODIFIED_DATE,
    Background_Education.MAJOR,
    Background_Education.SCHOOL,
    Background_Education.START_DATE,
    Background_Education.USER_ID,
    Background_Education.DEGREE_NAV,
    Background_Education.MAJOR_NAV,
    Background_Education.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_Education> = new AllFields('*', Background_Education);
  /**
   * All key fields of the Background_Education entity.
   */
  export const _keyFields: Array<Selectable<Background_Education>> = [Background_Education.BACKGROUND_ELEMENT_ID, Background_Education.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_Education.
   */
  export const _keys: { [keys: string]: Selectable<Background_Education> } = Background_Education._keyFields.reduce((acc: { [keys: string]: Selectable<Background_Education> }, field: Selectable<Background_Education>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
