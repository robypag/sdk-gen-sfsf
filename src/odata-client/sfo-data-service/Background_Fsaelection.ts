/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_FsaelectionRequestBuilder } from './Background_FsaelectionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_Fsaelection" of service "SFOData".
 */
export class Background_Fsaelection extends Entity implements Background_FsaelectionType {
  /**
   * Technical entity name for Background_Fsaelection.
   */
  static _entityName = 'Background_Fsaelection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_Fsaelection.
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
   * Available Balance.
   * @nullable
   */
  fsabalance?: string;
  /**
   * Total Contributions.
   * @nullable
   */
  fsacontributions?: string;
  /**
   * Election Amount.
   * @nullable
   */
  fsaelectionamount?: string;
  /**
   * Total Funds Out.
   * @nullable
   */
  fsafundsout?: string;
  /**
   * Plan Name.
   * @nullable
   */
  fsaplan?: string;
  /**
   * Total Repayments.
   * @nullable
   */
  fsarepayment?: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * userId.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;

  /**
   * Returns an entity builder to construct instances `Background_Fsaelection`.
   * @returns A builder that constructs instances of entity type `Background_Fsaelection`.
   */
  static builder(): EntityBuilderType<Background_Fsaelection, Background_FsaelectionTypeForceMandatory> {
    return Entity.entityBuilder(Background_Fsaelection);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_Fsaelection` entity type.
   * @returns A `Background_Fsaelection` request builder.
   */
  static requestBuilder(): Background_FsaelectionRequestBuilder {
    return new Background_FsaelectionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Fsaelection`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_Fsaelection`.
   */
  static customField(fieldName: string): CustomField<Background_Fsaelection> {
    return Entity.customFieldSelector(fieldName, Background_Fsaelection);
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

export interface Background_FsaelectionType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  fsabalance?: string;
  fsacontributions?: string;
  fsaelectionamount?: string;
  fsafundsout?: string;
  fsaplan?: string;
  fsarepayment?: string;
  lastModifiedDate: Moment;
  userId: string;
  userIdNav: UserType;
}

export interface Background_FsaelectionTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  fsabalance: string;
  fsacontributions: string;
  fsaelectionamount: string;
  fsafundsout: string;
  fsaplan: string;
  fsarepayment: string;
  lastModifiedDate: Moment;
  userId: string;
  userIdNav: UserType;
}

export namespace Background_Fsaelection {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Fsaelection> = new BigNumberField('backgroundElementId', Background_Fsaelection, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_Fsaelection> = new BigNumberField('bgOrderPos', Background_Fsaelection, 'Edm.Int64');
  /**
   * Static representation of the [[fsabalance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FSABALANCE: StringField<Background_Fsaelection> = new StringField('fsabalance', Background_Fsaelection, 'Edm.String');
  /**
   * Static representation of the [[fsacontributions]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FSACONTRIBUTIONS: StringField<Background_Fsaelection> = new StringField('fsacontributions', Background_Fsaelection, 'Edm.String');
  /**
   * Static representation of the [[fsaelectionamount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FSAELECTIONAMOUNT: StringField<Background_Fsaelection> = new StringField('fsaelectionamount', Background_Fsaelection, 'Edm.String');
  /**
   * Static representation of the [[fsafundsout]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FSAFUNDSOUT: StringField<Background_Fsaelection> = new StringField('fsafundsout', Background_Fsaelection, 'Edm.String');
  /**
   * Static representation of the [[fsaplan]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FSAPLAN: StringField<Background_Fsaelection> = new StringField('fsaplan', Background_Fsaelection, 'Edm.String');
  /**
   * Static representation of the [[fsarepayment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FSAREPAYMENT: StringField<Background_Fsaelection> = new StringField('fsarepayment', Background_Fsaelection, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_Fsaelection> = new DateField('lastModifiedDate', Background_Fsaelection, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_Fsaelection> = new StringField('userId', Background_Fsaelection, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_Fsaelection, User> = new OneToOneLink('userIdNav', Background_Fsaelection, User);
  /**
   * All fields of the Background_Fsaelection entity.
   */
  export const _allFields: Array<BigNumberField<Background_Fsaelection> | StringField<Background_Fsaelection> | DateField<Background_Fsaelection> | OneToOneLink<Background_Fsaelection, User>> = [
    Background_Fsaelection.BACKGROUND_ELEMENT_ID,
    Background_Fsaelection.BG_ORDER_POS,
    Background_Fsaelection.FSABALANCE,
    Background_Fsaelection.FSACONTRIBUTIONS,
    Background_Fsaelection.FSAELECTIONAMOUNT,
    Background_Fsaelection.FSAFUNDSOUT,
    Background_Fsaelection.FSAPLAN,
    Background_Fsaelection.FSAREPAYMENT,
    Background_Fsaelection.LAST_MODIFIED_DATE,
    Background_Fsaelection.USER_ID,
    Background_Fsaelection.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_Fsaelection> = new AllFields('*', Background_Fsaelection);
  /**
   * All key fields of the Background_Fsaelection entity.
   */
  export const _keyFields: Array<Selectable<Background_Fsaelection>> = [Background_Fsaelection.BACKGROUND_ELEMENT_ID, Background_Fsaelection.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_Fsaelection.
   */
  export const _keys: { [keys: string]: Selectable<Background_Fsaelection> } = Background_Fsaelection._keyFields.reduce((acc: { [keys: string]: Selectable<Background_Fsaelection> }, field: Selectable<Background_Fsaelection>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
