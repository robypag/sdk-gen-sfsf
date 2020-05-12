/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_BenefitselectionRequestBuilder } from './Background_BenefitselectionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_Benefitselection" of service "SFOData".
 */
export class Background_Benefitselection extends Entity implements Background_BenefitselectionType {
  /**
   * Technical entity name for Background_Benefitselection.
   */
  static _entityName = 'Background_Benefitselection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_Benefitselection.
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
   * Dental Plan.
   */
  dental!: string;
  /**
   * Disabled?.
   */
  depdisability!: string;
  /**
   * Gender.
   */
  depgender!: string;
  /**
   * Dependent Name.
   */
  depname!: string;
  /**
   * National ID.
   */
  depnationalid!: string;
  /**
   * Smoker?.
   */
  depsmoke!: string;
  /**
   * Student?.
   */
  depstudent!: string;
  /**
   * Birth Date.
   */
  endDate!: Moment;
  /**
   * Health Plan.
   */
  health!: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * Relation.
   */
  relation!: string;
  /**
   * userId.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  depdisabilityNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  depsmokeNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  depstudentNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  relationNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;

  /**
   * Returns an entity builder to construct instances `Background_Benefitselection`.
   * @returns A builder that constructs instances of entity type `Background_Benefitselection`.
   */
  static builder(): EntityBuilderType<Background_Benefitselection, Background_BenefitselectionTypeForceMandatory> {
    return Entity.entityBuilder(Background_Benefitselection);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_Benefitselection` entity type.
   * @returns A `Background_Benefitselection` request builder.
   */
  static requestBuilder(): Background_BenefitselectionRequestBuilder {
    return new Background_BenefitselectionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Benefitselection`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_Benefitselection`.
   */
  static customField(fieldName: string): CustomField<Background_Benefitselection> {
    return Entity.customFieldSelector(fieldName, Background_Benefitselection);
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

export interface Background_BenefitselectionType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  dental: string;
  depdisability: string;
  depgender: string;
  depname: string;
  depnationalid: string;
  depsmoke: string;
  depstudent: string;
  endDate: Moment;
  health: string;
  lastModifiedDate: Moment;
  relation: string;
  userId: string;
  depdisabilityNav: PicklistOptionType;
  depsmokeNav: PicklistOptionType;
  depstudentNav: PicklistOptionType;
  relationNav: PicklistOptionType;
  userIdNav: UserType;
}

export interface Background_BenefitselectionTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  dental: string;
  depdisability: string;
  depgender: string;
  depname: string;
  depnationalid: string;
  depsmoke: string;
  depstudent: string;
  endDate: Moment;
  health: string;
  lastModifiedDate: Moment;
  relation: string;
  userId: string;
  depdisabilityNav: PicklistOptionType;
  depsmokeNav: PicklistOptionType;
  depstudentNav: PicklistOptionType;
  relationNav: PicklistOptionType;
  userIdNav: UserType;
}

export namespace Background_Benefitselection {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Benefitselection> = new BigNumberField('backgroundElementId', Background_Benefitselection, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_Benefitselection> = new BigNumberField('bgOrderPos', Background_Benefitselection, 'Edm.Int64');
  /**
   * Static representation of the [[dental]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DENTAL: StringField<Background_Benefitselection> = new StringField('dental', Background_Benefitselection, 'Edm.String');
  /**
   * Static representation of the [[depdisability]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPDISABILITY: StringField<Background_Benefitselection> = new StringField('depdisability', Background_Benefitselection, 'Edm.String');
  /**
   * Static representation of the [[depgender]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPGENDER: StringField<Background_Benefitselection> = new StringField('depgender', Background_Benefitselection, 'Edm.String');
  /**
   * Static representation of the [[depname]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPNAME: StringField<Background_Benefitselection> = new StringField('depname', Background_Benefitselection, 'Edm.String');
  /**
   * Static representation of the [[depnationalid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPNATIONALID: StringField<Background_Benefitselection> = new StringField('depnationalid', Background_Benefitselection, 'Edm.String');
  /**
   * Static representation of the [[depsmoke]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPSMOKE: StringField<Background_Benefitselection> = new StringField('depsmoke', Background_Benefitselection, 'Edm.String');
  /**
   * Static representation of the [[depstudent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPSTUDENT: StringField<Background_Benefitselection> = new StringField('depstudent', Background_Benefitselection, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<Background_Benefitselection> = new DateField('endDate', Background_Benefitselection, 'Edm.DateTime');
  /**
   * Static representation of the [[health]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEALTH: StringField<Background_Benefitselection> = new StringField('health', Background_Benefitselection, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_Benefitselection> = new DateField('lastModifiedDate', Background_Benefitselection, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[relation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATION: StringField<Background_Benefitselection> = new StringField('relation', Background_Benefitselection, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_Benefitselection> = new StringField('userId', Background_Benefitselection, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[depdisabilityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPDISABILITY_NAV: OneToOneLink<Background_Benefitselection, PicklistOption> = new OneToOneLink('depdisabilityNav', Background_Benefitselection, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[depsmokeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPSMOKE_NAV: OneToOneLink<Background_Benefitselection, PicklistOption> = new OneToOneLink('depsmokeNav', Background_Benefitselection, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[depstudentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPSTUDENT_NAV: OneToOneLink<Background_Benefitselection, PicklistOption> = new OneToOneLink('depstudentNav', Background_Benefitselection, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[relationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATION_NAV: OneToOneLink<Background_Benefitselection, PicklistOption> = new OneToOneLink('relationNav', Background_Benefitselection, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_Benefitselection, User> = new OneToOneLink('userIdNav', Background_Benefitselection, User);
  /**
   * All fields of the Background_Benefitselection entity.
   */
  export const _allFields: Array<BigNumberField<Background_Benefitselection> | StringField<Background_Benefitselection> | DateField<Background_Benefitselection> | OneToOneLink<Background_Benefitselection, PicklistOption> | OneToOneLink<Background_Benefitselection, User>> = [
    Background_Benefitselection.BACKGROUND_ELEMENT_ID,
    Background_Benefitselection.BG_ORDER_POS,
    Background_Benefitselection.DENTAL,
    Background_Benefitselection.DEPDISABILITY,
    Background_Benefitselection.DEPGENDER,
    Background_Benefitselection.DEPNAME,
    Background_Benefitselection.DEPNATIONALID,
    Background_Benefitselection.DEPSMOKE,
    Background_Benefitselection.DEPSTUDENT,
    Background_Benefitselection.END_DATE,
    Background_Benefitselection.HEALTH,
    Background_Benefitselection.LAST_MODIFIED_DATE,
    Background_Benefitselection.RELATION,
    Background_Benefitselection.USER_ID,
    Background_Benefitselection.DEPDISABILITY_NAV,
    Background_Benefitselection.DEPSMOKE_NAV,
    Background_Benefitselection.DEPSTUDENT_NAV,
    Background_Benefitselection.RELATION_NAV,
    Background_Benefitselection.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_Benefitselection> = new AllFields('*', Background_Benefitselection);
  /**
   * All key fields of the Background_Benefitselection entity.
   */
  export const _keyFields: Array<Selectable<Background_Benefitselection>> = [Background_Benefitselection.BACKGROUND_ELEMENT_ID, Background_Benefitselection.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_Benefitselection.
   */
  export const _keys: { [keys: string]: Selectable<Background_Benefitselection> } = Background_Benefitselection._keyFields.reduce((acc: { [keys: string]: Selectable<Background_Benefitselection> }, field: Selectable<Background_Benefitselection>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
