/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeBooleanPropertyField, ComplexTypeField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * IsUserEligibleForSpotAwardProgramResponse
 */
export interface IsUserEligibleForSpotAwardProgramResponse {
  /**
   * isUserEligible.
   * @nullable
   */
  isUserEligible?: boolean;
}

/**
 * @deprecated since v1.6.0. Use [[IsUserEligibleForSpotAwardProgramResponse.build]] instead.
 */
export function createIsUserEligibleForSpotAwardProgramResponse(json: any): IsUserEligibleForSpotAwardProgramResponse {
  return IsUserEligibleForSpotAwardProgramResponse.build(json);
}

/**
 * IsUserEligibleForSpotAwardProgramResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class IsUserEligibleForSpotAwardProgramResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[IsUserEligibleForSpotAwardProgramResponse.isUserEligible]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isUserEligible: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('isUserEligible', this, 'Edm.Boolean');
}

export namespace IsUserEligibleForSpotAwardProgramResponse {
  export function build(json: { [keys: string]: FieldType }): IsUserEligibleForSpotAwardProgramResponse {
    return createComplexType(json, {
      isUserEligible: (isUserEligible: boolean) => ({ isUserEligible: edmToTs(isUserEligible, 'Edm.Boolean') })
    });
  }
}
