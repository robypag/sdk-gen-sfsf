/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_CoursesRequestBuilder } from './Background_CoursesRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_Courses" of service "SFOData".
 */
export class Background_Courses extends Entity implements Background_CoursesType {
  /**
   * Technical entity name for Background_Courses.
   */
  static _entityName = 'Background_Courses';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_Courses.
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
   * Course Name.
   */
  course!: string;
  /**
   * Date Completed.
   */
  endDate!: Moment;
  /**
   * Institution Name.
   * @nullable
   */
  institution?: string;
  /**
   * Type.
   * @nullable
   */
  instructionType?: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * Length.
   */
  length!: string;
  /**
   * userId.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  instructionTypeNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  lengthNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;

  /**
   * Returns an entity builder to construct instances `Background_Courses`.
   * @returns A builder that constructs instances of entity type `Background_Courses`.
   */
  static builder(): EntityBuilderType<Background_Courses, Background_CoursesTypeForceMandatory> {
    return Entity.entityBuilder(Background_Courses);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_Courses` entity type.
   * @returns A `Background_Courses` request builder.
   */
  static requestBuilder(): Background_CoursesRequestBuilder {
    return new Background_CoursesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Courses`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_Courses`.
   */
  static customField(fieldName: string): CustomField<Background_Courses> {
    return Entity.customFieldSelector(fieldName, Background_Courses);
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

export interface Background_CoursesType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  course: string;
  endDate: Moment;
  institution?: string;
  instructionType?: string;
  lastModifiedDate: Moment;
  length: string;
  userId: string;
  instructionTypeNav: PicklistOptionType;
  lengthNav: PicklistOptionType;
  userIdNav: UserType;
}

export interface Background_CoursesTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  course: string;
  endDate: Moment;
  institution: string;
  instructionType: string;
  lastModifiedDate: Moment;
  length: string;
  userId: string;
  instructionTypeNav: PicklistOptionType;
  lengthNav: PicklistOptionType;
  userIdNav: UserType;
}

export namespace Background_Courses {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Courses> = new BigNumberField('backgroundElementId', Background_Courses, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_Courses> = new BigNumberField('bgOrderPos', Background_Courses, 'Edm.Int64');
  /**
   * Static representation of the [[course]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COURSE: StringField<Background_Courses> = new StringField('course', Background_Courses, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<Background_Courses> = new DateField('endDate', Background_Courses, 'Edm.DateTime');
  /**
   * Static representation of the [[institution]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTITUTION: StringField<Background_Courses> = new StringField('institution', Background_Courses, 'Edm.String');
  /**
   * Static representation of the [[instructionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTRUCTION_TYPE: StringField<Background_Courses> = new StringField('instructionType', Background_Courses, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_Courses> = new DateField('lastModifiedDate', Background_Courses, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[length]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LENGTH: StringField<Background_Courses> = new StringField('length', Background_Courses, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_Courses> = new StringField('userId', Background_Courses, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[instructionTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTRUCTION_TYPE_NAV: OneToOneLink<Background_Courses, PicklistOption> = new OneToOneLink('instructionTypeNav', Background_Courses, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[lengthNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LENGTH_NAV: OneToOneLink<Background_Courses, PicklistOption> = new OneToOneLink('lengthNav', Background_Courses, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_Courses, User> = new OneToOneLink('userIdNav', Background_Courses, User);
  /**
   * All fields of the Background_Courses entity.
   */
  export const _allFields: Array<BigNumberField<Background_Courses> | StringField<Background_Courses> | DateField<Background_Courses> | OneToOneLink<Background_Courses, PicklistOption> | OneToOneLink<Background_Courses, User>> = [
    Background_Courses.BACKGROUND_ELEMENT_ID,
    Background_Courses.BG_ORDER_POS,
    Background_Courses.COURSE,
    Background_Courses.END_DATE,
    Background_Courses.INSTITUTION,
    Background_Courses.INSTRUCTION_TYPE,
    Background_Courses.LAST_MODIFIED_DATE,
    Background_Courses.LENGTH,
    Background_Courses.USER_ID,
    Background_Courses.INSTRUCTION_TYPE_NAV,
    Background_Courses.LENGTH_NAV,
    Background_Courses.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_Courses> = new AllFields('*', Background_Courses);
  /**
   * All key fields of the Background_Courses entity.
   */
  export const _keyFields: Array<Selectable<Background_Courses>> = [Background_Courses.BACKGROUND_ELEMENT_ID, Background_Courses.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_Courses.
   */
  export const _keys: { [keys: string]: Selectable<Background_Courses> } = Background_Courses._keyFields.reduce((acc: { [keys: string]: Selectable<Background_Courses> }, field: Selectable<Background_Courses>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
