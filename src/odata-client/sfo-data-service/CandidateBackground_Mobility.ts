/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CandidateBackground_MobilityRequestBuilder } from './CandidateBackground_MobilityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CandidateBackground_Mobility" of service "SFOData".
 */
export class CandidateBackground_Mobility extends Entity implements CandidateBackground_MobilityType {
  /**
   * Technical entity name for CandidateBackground_Mobility.
   */
  static _entityName = 'CandidateBackground_Mobility';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CandidateBackground_Mobility.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Background Element Id.
   */
  backgroundElementId!: BigNumber;
  /**
   * Background Order Position.
   */
  bgOrderPos!: BigNumber;
  /**
   * Candidate Id.
   */
  candidateId!: BigNumber;
  /**
   * Last Modified Date.
   */
  lastModifiedDateTime!: Moment;
  /**
   * Location Desired.
   * @nullable
   */
  location?: string;
  /**
   * Willing to Relocate.
   */
  willingness!: string;
  /**
   * One-to-one navigation property to the [[Candidate]] entity.
   */
  candidate!: Candidate;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  willingnessNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `CandidateBackground_Mobility`.
   * @returns A builder that constructs instances of entity type `CandidateBackground_Mobility`.
   */
  static builder(): EntityBuilderType<CandidateBackground_Mobility, CandidateBackground_MobilityTypeForceMandatory> {
    return Entity.entityBuilder(CandidateBackground_Mobility);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CandidateBackground_Mobility` entity type.
   * @returns A `CandidateBackground_Mobility` request builder.
   */
  static requestBuilder(): CandidateBackground_MobilityRequestBuilder {
    return new CandidateBackground_MobilityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_Mobility`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CandidateBackground_Mobility`.
   */
  static customField(fieldName: string): CustomField<CandidateBackground_Mobility> {
    return Entity.customFieldSelector(fieldName, CandidateBackground_Mobility);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Candidate, CandidateType } from './Candidate';
import { PicklistOption, PicklistOptionType } from './PicklistOption';

export interface CandidateBackground_MobilityType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  candidateId: BigNumber;
  lastModifiedDateTime: Moment;
  location?: string;
  willingness: string;
  candidate: CandidateType;
  willingnessNav: PicklistOptionType;
}

export interface CandidateBackground_MobilityTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  candidateId: BigNumber;
  lastModifiedDateTime: Moment;
  location: string;
  willingness: string;
  candidate: CandidateType;
  willingnessNav: PicklistOptionType;
}

export namespace CandidateBackground_Mobility {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<CandidateBackground_Mobility> = new BigNumberField('backgroundElementId', CandidateBackground_Mobility, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<CandidateBackground_Mobility> = new BigNumberField('bgOrderPos', CandidateBackground_Mobility, 'Edm.Int64');
  /**
   * Static representation of the [[candidateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_ID: BigNumberField<CandidateBackground_Mobility> = new BigNumberField('candidateId', CandidateBackground_Mobility, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CandidateBackground_Mobility> = new DateField('lastModifiedDateTime', CandidateBackground_Mobility, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: StringField<CandidateBackground_Mobility> = new StringField('location', CandidateBackground_Mobility, 'Edm.String');
  /**
   * Static representation of the [[willingness]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WILLINGNESS: StringField<CandidateBackground_Mobility> = new StringField('willingness', CandidateBackground_Mobility, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[candidate]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE: OneToOneLink<CandidateBackground_Mobility, Candidate> = new OneToOneLink('candidate', CandidateBackground_Mobility, Candidate);
  /**
   * Static representation of the one-to-one navigation property [[willingnessNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WILLINGNESS_NAV: OneToOneLink<CandidateBackground_Mobility, PicklistOption> = new OneToOneLink('willingnessNav', CandidateBackground_Mobility, PicklistOption);
  /**
   * All fields of the CandidateBackground_Mobility entity.
   */
  export const _allFields: Array<BigNumberField<CandidateBackground_Mobility> | DateField<CandidateBackground_Mobility> | StringField<CandidateBackground_Mobility> | OneToOneLink<CandidateBackground_Mobility, Candidate> | OneToOneLink<CandidateBackground_Mobility, PicklistOption>> = [
    CandidateBackground_Mobility.BACKGROUND_ELEMENT_ID,
    CandidateBackground_Mobility.BG_ORDER_POS,
    CandidateBackground_Mobility.CANDIDATE_ID,
    CandidateBackground_Mobility.LAST_MODIFIED_DATE_TIME,
    CandidateBackground_Mobility.LOCATION,
    CandidateBackground_Mobility.WILLINGNESS,
    CandidateBackground_Mobility.CANDIDATE,
    CandidateBackground_Mobility.WILLINGNESS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CandidateBackground_Mobility> = new AllFields('*', CandidateBackground_Mobility);
  /**
   * All key fields of the CandidateBackground_Mobility entity.
   */
  export const _keyFields: Array<Selectable<CandidateBackground_Mobility>> = [CandidateBackground_Mobility.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property CandidateBackground_Mobility.
   */
  export const _keys: { [keys: string]: Selectable<CandidateBackground_Mobility> } = CandidateBackground_Mobility._keyFields.reduce((acc: { [keys: string]: Selectable<CandidateBackground_Mobility> }, field: Selectable<CandidateBackground_Mobility>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
