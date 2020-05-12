/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_OutsideWorkExperienceRequestBuilder } from './Background_OutsideWorkExperienceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_OutsideWorkExperience" of service "SFOData".
 */
export class Background_OutsideWorkExperience extends Entity implements Background_OutsideWorkExperienceType {
  /**
   * Technical entity name for Background_OutsideWorkExperience.
   */
  static _entityName = 'Background_OutsideWorkExperience';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_OutsideWorkExperience.
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
   * Type of Business.
   * @nullable
   */
  businessType?: string;
  /**
   * Country&gt;.
   */
  country!: string;
  /**
   * Company Name.
   */
  employer!: string;
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
   * Present Employer&gt;.
   */
  presentEmployer!: string;
  /**
   * Start Date.
   */
  startDate!: Moment;
  /**
   * Title.
   */
  startTitle!: string;
  /**
   * userId.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  businessTypeNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  countryNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  presentEmployerNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;

  /**
   * Returns an entity builder to construct instances `Background_OutsideWorkExperience`.
   * @returns A builder that constructs instances of entity type `Background_OutsideWorkExperience`.
   */
  static builder(): EntityBuilderType<Background_OutsideWorkExperience, Background_OutsideWorkExperienceTypeForceMandatory> {
    return Entity.entityBuilder(Background_OutsideWorkExperience);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_OutsideWorkExperience` entity type.
   * @returns A `Background_OutsideWorkExperience` request builder.
   */
  static requestBuilder(): Background_OutsideWorkExperienceRequestBuilder {
    return new Background_OutsideWorkExperienceRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_OutsideWorkExperience`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_OutsideWorkExperience`.
   */
  static customField(fieldName: string): CustomField<Background_OutsideWorkExperience> {
    return Entity.customFieldSelector(fieldName, Background_OutsideWorkExperience);
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

export interface Background_OutsideWorkExperienceType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  businessType?: string;
  country: string;
  employer: string;
  endDate?: Moment;
  lastModifiedDate: Moment;
  presentEmployer: string;
  startDate: Moment;
  startTitle: string;
  userId: string;
  businessTypeNav: PicklistOptionType;
  countryNav: PicklistOptionType;
  presentEmployerNav: PicklistOptionType;
  userIdNav: UserType;
}

export interface Background_OutsideWorkExperienceTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  businessType: string;
  country: string;
  employer: string;
  endDate: Moment;
  lastModifiedDate: Moment;
  presentEmployer: string;
  startDate: Moment;
  startTitle: string;
  userId: string;
  businessTypeNav: PicklistOptionType;
  countryNav: PicklistOptionType;
  presentEmployerNav: PicklistOptionType;
  userIdNav: UserType;
}

export namespace Background_OutsideWorkExperience {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_OutsideWorkExperience> = new BigNumberField('backgroundElementId', Background_OutsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_OutsideWorkExperience> = new BigNumberField('bgOrderPos', Background_OutsideWorkExperience, 'Edm.Int64');
  /**
   * Static representation of the [[businessType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_TYPE: StringField<Background_OutsideWorkExperience> = new StringField('businessType', Background_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<Background_OutsideWorkExperience> = new StringField('country', Background_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[employer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYER: StringField<Background_OutsideWorkExperience> = new StringField('employer', Background_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<Background_OutsideWorkExperience> = new DateField('endDate', Background_OutsideWorkExperience, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_OutsideWorkExperience> = new DateField('lastModifiedDate', Background_OutsideWorkExperience, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[presentEmployer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRESENT_EMPLOYER: StringField<Background_OutsideWorkExperience> = new StringField('presentEmployer', Background_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<Background_OutsideWorkExperience> = new DateField('startDate', Background_OutsideWorkExperience, 'Edm.DateTime');
  /**
   * Static representation of the [[startTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_TITLE: StringField<Background_OutsideWorkExperience> = new StringField('startTitle', Background_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_OutsideWorkExperience> = new StringField('userId', Background_OutsideWorkExperience, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[businessTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_TYPE_NAV: OneToOneLink<Background_OutsideWorkExperience, PicklistOption> = new OneToOneLink('businessTypeNav', Background_OutsideWorkExperience, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<Background_OutsideWorkExperience, PicklistOption> = new OneToOneLink('countryNav', Background_OutsideWorkExperience, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[presentEmployerNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRESENT_EMPLOYER_NAV: OneToOneLink<Background_OutsideWorkExperience, PicklistOption> = new OneToOneLink('presentEmployerNav', Background_OutsideWorkExperience, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_OutsideWorkExperience, User> = new OneToOneLink('userIdNav', Background_OutsideWorkExperience, User);
  /**
   * All fields of the Background_OutsideWorkExperience entity.
   */
  export const _allFields: Array<BigNumberField<Background_OutsideWorkExperience> | StringField<Background_OutsideWorkExperience> | DateField<Background_OutsideWorkExperience> | OneToOneLink<Background_OutsideWorkExperience, PicklistOption> | OneToOneLink<Background_OutsideWorkExperience, User>> = [
    Background_OutsideWorkExperience.BACKGROUND_ELEMENT_ID,
    Background_OutsideWorkExperience.BG_ORDER_POS,
    Background_OutsideWorkExperience.BUSINESS_TYPE,
    Background_OutsideWorkExperience.COUNTRY,
    Background_OutsideWorkExperience.EMPLOYER,
    Background_OutsideWorkExperience.END_DATE,
    Background_OutsideWorkExperience.LAST_MODIFIED_DATE,
    Background_OutsideWorkExperience.PRESENT_EMPLOYER,
    Background_OutsideWorkExperience.START_DATE,
    Background_OutsideWorkExperience.START_TITLE,
    Background_OutsideWorkExperience.USER_ID,
    Background_OutsideWorkExperience.BUSINESS_TYPE_NAV,
    Background_OutsideWorkExperience.COUNTRY_NAV,
    Background_OutsideWorkExperience.PRESENT_EMPLOYER_NAV,
    Background_OutsideWorkExperience.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_OutsideWorkExperience> = new AllFields('*', Background_OutsideWorkExperience);
  /**
   * All key fields of the Background_OutsideWorkExperience entity.
   */
  export const _keyFields: Array<Selectable<Background_OutsideWorkExperience>> = [Background_OutsideWorkExperience.BACKGROUND_ELEMENT_ID, Background_OutsideWorkExperience.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_OutsideWorkExperience.
   */
  export const _keys: { [keys: string]: Selectable<Background_OutsideWorkExperience> } = Background_OutsideWorkExperience._keyFields.reduce((acc: { [keys: string]: Selectable<Background_OutsideWorkExperience> }, field: Selectable<Background_OutsideWorkExperience>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
