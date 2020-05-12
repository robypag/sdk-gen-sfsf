/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SuccessorRequestBuilder } from './SuccessorRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Successor" of service "SFOData".
 */
export class Successor extends Entity implements SuccessorType {
  /**
   * Technical entity name for Successor.
   */
  static _entityName = 'Successor';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Successor.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * id.
   */
  id!: BigNumber;
  /**
   * lastModifiedBy.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * nomineeUserId.
   * Maximum length: 100.
   * @nullable
   */
  nomineeUserId?: string;
  /**
   * note.
   * Maximum length: 4000.
   * @nullable
   */
  note?: string;
  /**
   * rank.
   * @nullable
   */
  rank?: number;
  /**
   * readiness.
   * @nullable
   */
  readiness?: number;
  /**
   * readinessLabel.
   * @nullable
   */
  readinessLabel?: string;
  /**
   * status.
   * @nullable
   */
  status?: number;
  /**
   * statusLabel.
   * @nullable
   */
  statusLabel?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-many navigation property to the [[NomineeHistory]] entity.
   */
  nomineeHistoryNav!: NomineeHistory[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userNav!: User;

  /**
   * Returns an entity builder to construct instances `Successor`.
   * @returns A builder that constructs instances of entity type `Successor`.
   */
  static builder(): EntityBuilderType<Successor, SuccessorTypeForceMandatory> {
    return Entity.entityBuilder(Successor);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Successor` entity type.
   * @returns A `Successor` request builder.
   */
  static requestBuilder(): SuccessorRequestBuilder {
    return new SuccessorRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Successor`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Successor`.
   */
  static customField(fieldName: string): CustomField<Successor> {
    return Entity.customFieldSelector(fieldName, Successor);
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
import { NomineeHistory, NomineeHistoryType } from './NomineeHistory';

export interface SuccessorType {
  id: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  nomineeUserId?: string;
  note?: string;
  rank?: number;
  readiness?: number;
  readinessLabel?: string;
  status?: number;
  statusLabel?: string;
  lastModifiedByNav: UserType;
  nomineeHistoryNav: NomineeHistoryType[];
  userNav: UserType;
}

export interface SuccessorTypeForceMandatory {
  id: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  nomineeUserId: string;
  note: string;
  rank: number;
  readiness: number;
  readinessLabel: string;
  status: number;
  statusLabel: string;
  lastModifiedByNav: UserType;
  nomineeHistoryNav: NomineeHistoryType[];
  userNav: UserType;
}

export namespace Successor {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<Successor> = new BigNumberField('id', Successor, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<Successor> = new StringField('lastModifiedBy', Successor, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<Successor> = new DateField('lastModifiedDateTime', Successor, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[nomineeUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOMINEE_USER_ID: StringField<Successor> = new StringField('nomineeUserId', Successor, 'Edm.String');
  /**
   * Static representation of the [[note]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTE: StringField<Successor> = new StringField('note', Successor, 'Edm.String');
  /**
   * Static representation of the [[rank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RANK: NumberField<Successor> = new NumberField('rank', Successor, 'Edm.Int32');
  /**
   * Static representation of the [[readiness]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const READINESS: NumberField<Successor> = new NumberField('readiness', Successor, 'Edm.Double');
  /**
   * Static representation of the [[readinessLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const READINESS_LABEL: StringField<Successor> = new StringField('readinessLabel', Successor, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<Successor> = new NumberField('status', Successor, 'Edm.Int32');
  /**
   * Static representation of the [[statusLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_LABEL: StringField<Successor> = new StringField('statusLabel', Successor, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<Successor, User> = new OneToOneLink('lastModifiedByNav', Successor, User);
  /**
   * Static representation of the one-to-many navigation property [[nomineeHistoryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOMINEE_HISTORY_NAV: Link<Successor, NomineeHistory> = new Link('nomineeHistoryNav', Successor, NomineeHistory);
  /**
   * Static representation of the one-to-one navigation property [[userNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAV: OneToOneLink<Successor, User> = new OneToOneLink('userNav', Successor, User);
  /**
   * All fields of the Successor entity.
   */
  export const _allFields: Array<BigNumberField<Successor> | StringField<Successor> | DateField<Successor> | NumberField<Successor> | OneToOneLink<Successor, User> | Link<Successor, NomineeHistory>> = [
    Successor.ID,
    Successor.LAST_MODIFIED_BY,
    Successor.LAST_MODIFIED_DATE_TIME,
    Successor.NOMINEE_USER_ID,
    Successor.NOTE,
    Successor.RANK,
    Successor.READINESS,
    Successor.READINESS_LABEL,
    Successor.STATUS,
    Successor.STATUS_LABEL,
    Successor.LAST_MODIFIED_BY_NAV,
    Successor.NOMINEE_HISTORY_NAV,
    Successor.USER_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Successor> = new AllFields('*', Successor);
  /**
   * All key fields of the Successor entity.
   */
  export const _keyFields: Array<Selectable<Successor>> = [Successor.ID];
  /**
   * Mapping of all key field names to the respective static field property Successor.
   */
  export const _keys: { [keys: string]: Selectable<Successor> } = Successor._keyFields.reduce((acc: { [keys: string]: Selectable<Successor> }, field: Selectable<Successor>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
