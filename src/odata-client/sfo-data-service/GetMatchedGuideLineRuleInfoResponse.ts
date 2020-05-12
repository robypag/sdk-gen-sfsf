/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MapEntry_String_String_, MapEntry_String_String_Field } from './MapEntry_String_String_';
import { ComplexTypeField, Entity, createComplexType } from '@sap-cloud-sdk/core';

/**
 * GetMatchedGuideLineRuleInfoResponse
 */
export interface GetMatchedGuideLineRuleInfoResponse {
  /**
   * userIdToMatchedGuideLineMap.
   * @nullable
   */
  userIdToMatchedGuideLineMap?: MapEntry_String_String_;
}

/**
 * @deprecated since v1.6.0. Use [[GetMatchedGuideLineRuleInfoResponse.build]] instead.
 */
export function createGetMatchedGuideLineRuleInfoResponse(json: any): GetMatchedGuideLineRuleInfoResponse {
  return GetMatchedGuideLineRuleInfoResponse.build(json);
}

/**
 * GetMatchedGuideLineRuleInfoResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class GetMatchedGuideLineRuleInfoResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[GetMatchedGuideLineRuleInfoResponse.userIdToMatchedGuideLineMap]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userIdToMatchedGuideLineMap: MapEntry_String_String_Field<EntityT> = new MapEntry_String_String_Field('userIdToMatchedGuideLineMap', this);
}

export namespace GetMatchedGuideLineRuleInfoResponse {
  export function build(json: { [keys: string]: FieldType }): GetMatchedGuideLineRuleInfoResponse {
    return createComplexType(json, {
      userIdToMatchedGuideLineMap: (userIdToMatchedGuideLineMap: MapEntry_String_String_) => ({ userIdToMatchedGuideLineMap: MapEntry_String_String_.build(userIdToMatchedGuideLineMap) })
    });
  }
}
