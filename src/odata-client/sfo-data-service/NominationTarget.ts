/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NominationTargetRequestBuilder } from './NominationTargetRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "NominationTarget" of service "SFOData".
 */
export class NominationTarget extends Entity implements NominationTargetType {
  /**
   * Technical entity name for NominationTarget.
   */
  static _entityName = 'NominationTarget';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for NominationTarget.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * NominationId.
   */
  nominationId!: BigNumber;
  /**
   * NominationType.
   */
  nominationType!: number;
  /**
   * One-to-one navigation property to the [[Position]] entity.
   */
  positionNav!: Position;
  /**
   * One-to-many navigation property to the [[Successor]] entity.
   */
  successorNav!: Successor[];
  /**
   * One-to-one navigation property to the [[TalentPool]] entity.
   */
  talentPoolNav!: TalentPool;

  /**
   * Returns an entity builder to construct instances `NominationTarget`.
   * @returns A builder that constructs instances of entity type `NominationTarget`.
   */
  static builder(): EntityBuilderType<NominationTarget, NominationTargetTypeForceMandatory> {
    return Entity.entityBuilder(NominationTarget);
  }

  /**
   * Returns a request builder to construct requests for operations on the `NominationTarget` entity type.
   * @returns A `NominationTarget` request builder.
   */
  static requestBuilder(): NominationTargetRequestBuilder {
    return new NominationTargetRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `NominationTarget`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `NominationTarget`.
   */
  static customField(fieldName: string): CustomField<NominationTarget> {
    return Entity.customFieldSelector(fieldName, NominationTarget);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Position, PositionType } from './Position';
import { Successor, SuccessorType } from './Successor';
import { TalentPool, TalentPoolType } from './TalentPool';

export interface NominationTargetType {
  nominationId: BigNumber;
  nominationType: number;
  positionNav: PositionType;
  successorNav: SuccessorType[];
  talentPoolNav: TalentPoolType;
}

export interface NominationTargetTypeForceMandatory {
  nominationId: BigNumber;
  nominationType: number;
  positionNav: PositionType;
  successorNav: SuccessorType[];
  talentPoolNav: TalentPoolType;
}

export namespace NominationTarget {
  /**
   * Static representation of the [[nominationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOMINATION_ID: BigNumberField<NominationTarget> = new BigNumberField('nominationId', NominationTarget, 'Edm.Int64');
  /**
   * Static representation of the [[nominationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOMINATION_TYPE: NumberField<NominationTarget> = new NumberField('nominationType', NominationTarget, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[positionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_NAV: OneToOneLink<NominationTarget, Position> = new OneToOneLink('positionNav', NominationTarget, Position);
  /**
   * Static representation of the one-to-many navigation property [[successorNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUCCESSOR_NAV: Link<NominationTarget, Successor> = new Link('successorNav', NominationTarget, Successor);
  /**
   * Static representation of the one-to-one navigation property [[talentPoolNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TALENT_POOL_NAV: OneToOneLink<NominationTarget, TalentPool> = new OneToOneLink('talentPoolNav', NominationTarget, TalentPool);
  /**
   * All fields of the NominationTarget entity.
   */
  export const _allFields: Array<BigNumberField<NominationTarget> | NumberField<NominationTarget> | OneToOneLink<NominationTarget, Position> | Link<NominationTarget, Successor> | OneToOneLink<NominationTarget, TalentPool>> = [
    NominationTarget.NOMINATION_ID,
    NominationTarget.NOMINATION_TYPE,
    NominationTarget.POSITION_NAV,
    NominationTarget.SUCCESSOR_NAV,
    NominationTarget.TALENT_POOL_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<NominationTarget> = new AllFields('*', NominationTarget);
  /**
   * All key fields of the NominationTarget entity.
   */
  export const _keyFields: Array<Selectable<NominationTarget>> = [NominationTarget.NOMINATION_ID];
  /**
   * Mapping of all key field names to the respective static field property NominationTarget.
   */
  export const _keys: { [keys: string]: Selectable<NominationTarget> } = NominationTarget._keyFields.reduce((acc: { [keys: string]: Selectable<NominationTarget> }, field: Selectable<NominationTarget>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
