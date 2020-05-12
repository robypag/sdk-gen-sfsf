/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_LanguagesRequestBuilder } from './Background_LanguagesRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_Languages" of service "SFOData".
 */
export class Background_Languages extends Entity implements Background_LanguagesType {
  /**
   * Technical entity name for Background_Languages.
   */
  static _entityName = 'Background_Languages';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_Languages.
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
   * Language.
   */
  language!: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * Reading Proficiency.
   */
  readingProf!: string;
  /**
   * Speaking Proficiency.
   */
  speakingProf!: string;
  /**
   * userId.
   */
  userId!: string;
  /**
   * Language Variant.
   * @nullable
   */
  variant?: string;
  /**
   * Writing Proficiency.
   */
  writingProf!: string;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  languageNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  readingProfNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  speakingProfNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  variantNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  writingProfNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `Background_Languages`.
   * @returns A builder that constructs instances of entity type `Background_Languages`.
   */
  static builder(): EntityBuilderType<Background_Languages, Background_LanguagesTypeForceMandatory> {
    return Entity.entityBuilder(Background_Languages);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_Languages` entity type.
   * @returns A `Background_Languages` request builder.
   */
  static requestBuilder(): Background_LanguagesRequestBuilder {
    return new Background_LanguagesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Languages`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_Languages`.
   */
  static customField(fieldName: string): CustomField<Background_Languages> {
    return Entity.customFieldSelector(fieldName, Background_Languages);
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

export interface Background_LanguagesType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  language: string;
  lastModifiedDate: Moment;
  readingProf: string;
  speakingProf: string;
  userId: string;
  variant?: string;
  writingProf: string;
  languageNav: PicklistOptionType;
  readingProfNav: PicklistOptionType;
  speakingProfNav: PicklistOptionType;
  userIdNav: UserType;
  variantNav: PicklistOptionType;
  writingProfNav: PicklistOptionType;
}

export interface Background_LanguagesTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  language: string;
  lastModifiedDate: Moment;
  readingProf: string;
  speakingProf: string;
  userId: string;
  variant: string;
  writingProf: string;
  languageNav: PicklistOptionType;
  readingProfNav: PicklistOptionType;
  speakingProfNav: PicklistOptionType;
  userIdNav: UserType;
  variantNav: PicklistOptionType;
  writingProfNav: PicklistOptionType;
}

export namespace Background_Languages {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Languages> = new BigNumberField('backgroundElementId', Background_Languages, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_Languages> = new BigNumberField('bgOrderPos', Background_Languages, 'Edm.Int64');
  /**
   * Static representation of the [[language]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE: StringField<Background_Languages> = new StringField('language', Background_Languages, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_Languages> = new DateField('lastModifiedDate', Background_Languages, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[readingProf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const READING_PROF: StringField<Background_Languages> = new StringField('readingProf', Background_Languages, 'Edm.String');
  /**
   * Static representation of the [[speakingProf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPEAKING_PROF: StringField<Background_Languages> = new StringField('speakingProf', Background_Languages, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_Languages> = new StringField('userId', Background_Languages, 'Edm.String');
  /**
   * Static representation of the [[variant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VARIANT: StringField<Background_Languages> = new StringField('variant', Background_Languages, 'Edm.String');
  /**
   * Static representation of the [[writingProf]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WRITING_PROF: StringField<Background_Languages> = new StringField('writingProf', Background_Languages, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[languageNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE_NAV: OneToOneLink<Background_Languages, PicklistOption> = new OneToOneLink('languageNav', Background_Languages, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[readingProfNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const READING_PROF_NAV: OneToOneLink<Background_Languages, PicklistOption> = new OneToOneLink('readingProfNav', Background_Languages, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[speakingProfNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPEAKING_PROF_NAV: OneToOneLink<Background_Languages, PicklistOption> = new OneToOneLink('speakingProfNav', Background_Languages, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_Languages, User> = new OneToOneLink('userIdNav', Background_Languages, User);
  /**
   * Static representation of the one-to-one navigation property [[variantNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VARIANT_NAV: OneToOneLink<Background_Languages, PicklistOption> = new OneToOneLink('variantNav', Background_Languages, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[writingProfNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WRITING_PROF_NAV: OneToOneLink<Background_Languages, PicklistOption> = new OneToOneLink('writingProfNav', Background_Languages, PicklistOption);
  /**
   * All fields of the Background_Languages entity.
   */
  export const _allFields: Array<BigNumberField<Background_Languages> | StringField<Background_Languages> | DateField<Background_Languages> | OneToOneLink<Background_Languages, PicklistOption> | OneToOneLink<Background_Languages, User>> = [
    Background_Languages.BACKGROUND_ELEMENT_ID,
    Background_Languages.BG_ORDER_POS,
    Background_Languages.LANGUAGE,
    Background_Languages.LAST_MODIFIED_DATE,
    Background_Languages.READING_PROF,
    Background_Languages.SPEAKING_PROF,
    Background_Languages.USER_ID,
    Background_Languages.VARIANT,
    Background_Languages.WRITING_PROF,
    Background_Languages.LANGUAGE_NAV,
    Background_Languages.READING_PROF_NAV,
    Background_Languages.SPEAKING_PROF_NAV,
    Background_Languages.USER_ID_NAV,
    Background_Languages.VARIANT_NAV,
    Background_Languages.WRITING_PROF_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_Languages> = new AllFields('*', Background_Languages);
  /**
   * All key fields of the Background_Languages entity.
   */
  export const _keyFields: Array<Selectable<Background_Languages>> = [Background_Languages.BACKGROUND_ELEMENT_ID, Background_Languages.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_Languages.
   */
  export const _keys: { [keys: string]: Selectable<Background_Languages> } = Background_Languages._keyFields.reduce((acc: { [keys: string]: Selectable<Background_Languages> }, field: Selectable<Background_Languages>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
