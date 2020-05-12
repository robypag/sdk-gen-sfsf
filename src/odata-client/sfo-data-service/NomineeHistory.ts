/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NomineeHistoryRequestBuilder } from './NomineeHistoryRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "NomineeHistory" of service "SFOData".
 */
export class NomineeHistory extends Entity implements NomineeHistoryType {
  /**
   * Technical entity name for NomineeHistory.
   */
  static _entityName = 'NomineeHistory';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for NomineeHistory.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * changeType.
   */
  changeType!: number;
  /**
   * changeTypeLabel.
   * @nullable
   */
  changeTypeLabel?: string;
  /**
   * id.
   */
  id!: BigNumber;
  /**
   * modifiedBy.
   * Maximum length: 100.
   */
  modifiedBy!: string;
  /**
   * modifiedDate.
   */
  modifiedDateTime!: Moment;
  /**
   * nomineeId.
   */
  nomineeId!: BigNumber;
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
   */
  status!: number;
  /**
   * statusLabel.
   * @nullable
   */
  statusLabel?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  modifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  nomineeUserNav!: User;

  /**
   * Returns an entity builder to construct instances `NomineeHistory`.
   * @returns A builder that constructs instances of entity type `NomineeHistory`.
   */
  static builder(): EntityBuilderType<NomineeHistory, NomineeHistoryTypeForceMandatory> {
    return Entity.entityBuilder(NomineeHistory);
  }

  /**
   * Returns a request builder to construct requests for operations on the `NomineeHistory` entity type.
   * @returns A `NomineeHistory` request builder.
   */
  static requestBuilder(): NomineeHistoryRequestBuilder {
    return new NomineeHistoryRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `NomineeHistory`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `NomineeHistory`.
   */
  static customField(fieldName: string): CustomField<NomineeHistory> {
    return Entity.customFieldSelector(fieldName, NomineeHistory);
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

export interface NomineeHistoryType {
  changeType: number;
  changeTypeLabel?: string;
  id: BigNumber;
  modifiedBy: string;
  modifiedDateTime: Moment;
  nomineeId: BigNumber;
  note?: string;
  rank?: number;
  readiness?: number;
  readinessLabel?: string;
  status: number;
  statusLabel?: string;
  modifiedByNav: UserType;
  nomineeUserNav: UserType;
}

export interface NomineeHistoryTypeForceMandatory {
  changeType: number;
  changeTypeLabel: string;
  id: BigNumber;
  modifiedBy: string;
  modifiedDateTime: Moment;
  nomineeId: BigNumber;
  note: string;
  rank: number;
  readiness: number;
  readinessLabel: string;
  status: number;
  statusLabel: string;
  modifiedByNav: UserType;
  nomineeUserNav: UserType;
}

export namespace NomineeHistory {
  /**
   * Static representation of the [[changeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHANGE_TYPE: NumberField<NomineeHistory> = new NumberField('changeType', NomineeHistory, 'Edm.Int32');
  /**
   * Static representation of the [[changeTypeLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHANGE_TYPE_LABEL: StringField<NomineeHistory> = new StringField('changeTypeLabel', NomineeHistory, 'Edm.String');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<NomineeHistory> = new BigNumberField('id', NomineeHistory, 'Edm.Int64');
  /**
   * Static representation of the [[modifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODIFIED_BY: StringField<NomineeHistory> = new StringField('modifiedBy', NomineeHistory, 'Edm.String');
  /**
   * Static representation of the [[modifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODIFIED_DATE_TIME: DateField<NomineeHistory> = new DateField('modifiedDateTime', NomineeHistory, 'Edm.DateTime');
  /**
   * Static representation of the [[nomineeId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOMINEE_ID: BigNumberField<NomineeHistory> = new BigNumberField('nomineeId', NomineeHistory, 'Edm.Int64');
  /**
   * Static representation of the [[note]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTE: StringField<NomineeHistory> = new StringField('note', NomineeHistory, 'Edm.String');
  /**
   * Static representation of the [[rank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RANK: NumberField<NomineeHistory> = new NumberField('rank', NomineeHistory, 'Edm.Int32');
  /**
   * Static representation of the [[readiness]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const READINESS: NumberField<NomineeHistory> = new NumberField('readiness', NomineeHistory, 'Edm.Double');
  /**
   * Static representation of the [[readinessLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const READINESS_LABEL: StringField<NomineeHistory> = new StringField('readinessLabel', NomineeHistory, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<NomineeHistory> = new NumberField('status', NomineeHistory, 'Edm.Int32');
  /**
   * Static representation of the [[statusLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_LABEL: StringField<NomineeHistory> = new StringField('statusLabel', NomineeHistory, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[modifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODIFIED_BY_NAV: OneToOneLink<NomineeHistory, User> = new OneToOneLink('modifiedByNav', NomineeHistory, User);
  /**
   * Static representation of the one-to-one navigation property [[nomineeUserNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOMINEE_USER_NAV: OneToOneLink<NomineeHistory, User> = new OneToOneLink('nomineeUserNav', NomineeHistory, User);
  /**
   * All fields of the NomineeHistory entity.
   */
  export const _allFields: Array<NumberField<NomineeHistory> | StringField<NomineeHistory> | BigNumberField<NomineeHistory> | DateField<NomineeHistory> | OneToOneLink<NomineeHistory, User>> = [
    NomineeHistory.CHANGE_TYPE,
    NomineeHistory.CHANGE_TYPE_LABEL,
    NomineeHistory.ID,
    NomineeHistory.MODIFIED_BY,
    NomineeHistory.MODIFIED_DATE_TIME,
    NomineeHistory.NOMINEE_ID,
    NomineeHistory.NOTE,
    NomineeHistory.RANK,
    NomineeHistory.READINESS,
    NomineeHistory.READINESS_LABEL,
    NomineeHistory.STATUS,
    NomineeHistory.STATUS_LABEL,
    NomineeHistory.MODIFIED_BY_NAV,
    NomineeHistory.NOMINEE_USER_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<NomineeHistory> = new AllFields('*', NomineeHistory);
  /**
   * All key fields of the NomineeHistory entity.
   */
  export const _keyFields: Array<Selectable<NomineeHistory>> = [NomineeHistory.ID];
  /**
   * Mapping of all key field names to the respective static field property NomineeHistory.
   */
  export const _keys: { [keys: string]: Selectable<NomineeHistory> } = NomineeHistory._keyFields.reduce((acc: { [keys: string]: Selectable<NomineeHistory> }, field: Selectable<NomineeHistory>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
