/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MapEntry_String_String_, MapEntry_String_String_Field } from './MapEntry_String_String_';
import { ComplexTypeField, Entity, createComplexType } from '@sap-cloud-sdk/core';

/**
 * GetEligibleSpotAwardsProgramCodesResponse
 */
export interface GetEligibleSpotAwardsProgramCodesResponse {
  /**
   * eligibleProgramCodes.
   * @nullable
   */
  eligibleProgramCodes?: MapEntry_String_String_;
}

/**
 * @deprecated since v1.6.0. Use [[GetEligibleSpotAwardsProgramCodesResponse.build]] instead.
 */
export function createGetEligibleSpotAwardsProgramCodesResponse(json: any): GetEligibleSpotAwardsProgramCodesResponse {
  return GetEligibleSpotAwardsProgramCodesResponse.build(json);
}

/**
 * GetEligibleSpotAwardsProgramCodesResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class GetEligibleSpotAwardsProgramCodesResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[GetEligibleSpotAwardsProgramCodesResponse.eligibleProgramCodes]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eligibleProgramCodes: MapEntry_String_String_Field<EntityT> = new MapEntry_String_String_Field('eligibleProgramCodes', this);
}

export namespace GetEligibleSpotAwardsProgramCodesResponse {
  export function build(json: { [keys: string]: FieldType }): GetEligibleSpotAwardsProgramCodesResponse {
    return createComplexType(json, {
      eligibleProgramCodes: (eligibleProgramCodes: MapEntry_String_String_) => ({ eligibleProgramCodes: MapEntry_String_String_.build(eligibleProgramCodes) })
    });
  }
}
