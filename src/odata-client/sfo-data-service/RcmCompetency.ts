/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RcmCompetencyRequestBuilder } from './RcmCompetencyRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "RcmCompetency" of service "SFOData".
 */
export class RcmCompetency extends Entity implements RcmCompetencyType {
  /**
   * Technical entity name for RcmCompetency.
   */
  static _entityName = 'RcmCompetency';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for RcmCompetency.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Category.
   */
  category!: string;
  /**
   * Common Competency Id.
   */
  commonCompetencyId!: BigNumber;
  /**
   * Description.
   */
  description!: string;
  /**
   * Locale.
   */
  locale!: string;
  /**
   * Name.
   */
  name!: string;
  /**
   * RCM Competency Id.
   */
  rcmCompetencyId!: BigNumber;
  /**
   * Source.
   */
  source!: string;
  /**
   * Type.
   */
  type!: string;

  /**
   * Returns an entity builder to construct instances `RcmCompetency`.
   * @returns A builder that constructs instances of entity type `RcmCompetency`.
   */
  static builder(): EntityBuilderType<RcmCompetency, RcmCompetencyTypeForceMandatory> {
    return Entity.entityBuilder(RcmCompetency);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RcmCompetency` entity type.
   * @returns A `RcmCompetency` request builder.
   */
  static requestBuilder(): RcmCompetencyRequestBuilder {
    return new RcmCompetencyRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RcmCompetency`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RcmCompetency`.
   */
  static customField(fieldName: string): CustomField<RcmCompetency> {
    return Entity.customFieldSelector(fieldName, RcmCompetency);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface RcmCompetencyType {
  category: string;
  commonCompetencyId: BigNumber;
  description: string;
  locale: string;
  name: string;
  rcmCompetencyId: BigNumber;
  source: string;
  type: string;
}

export interface RcmCompetencyTypeForceMandatory {
  category: string;
  commonCompetencyId: BigNumber;
  description: string;
  locale: string;
  name: string;
  rcmCompetencyId: BigNumber;
  source: string;
  type: string;
}

export namespace RcmCompetency {
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<RcmCompetency> = new StringField('category', RcmCompetency, 'Edm.String');
  /**
   * Static representation of the [[commonCompetencyId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMON_COMPETENCY_ID: BigNumberField<RcmCompetency> = new BigNumberField('commonCompetencyId', RcmCompetency, 'Edm.Int64');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<RcmCompetency> = new StringField('description', RcmCompetency, 'Edm.String');
  /**
   * Static representation of the [[locale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALE: StringField<RcmCompetency> = new StringField('locale', RcmCompetency, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<RcmCompetency> = new StringField('name', RcmCompetency, 'Edm.String');
  /**
   * Static representation of the [[rcmCompetencyId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RCM_COMPETENCY_ID: BigNumberField<RcmCompetency> = new BigNumberField('rcmCompetencyId', RcmCompetency, 'Edm.Int64');
  /**
   * Static representation of the [[source]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE: StringField<RcmCompetency> = new StringField('source', RcmCompetency, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<RcmCompetency> = new StringField('type', RcmCompetency, 'Edm.String');
  /**
   * All fields of the RcmCompetency entity.
   */
  export const _allFields: Array<StringField<RcmCompetency> | BigNumberField<RcmCompetency>> = [
    RcmCompetency.CATEGORY,
    RcmCompetency.COMMON_COMPETENCY_ID,
    RcmCompetency.DESCRIPTION,
    RcmCompetency.LOCALE,
    RcmCompetency.NAME,
    RcmCompetency.RCM_COMPETENCY_ID,
    RcmCompetency.SOURCE,
    RcmCompetency.TYPE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RcmCompetency> = new AllFields('*', RcmCompetency);
  /**
   * All key fields of the RcmCompetency entity.
   */
  export const _keyFields: Array<Selectable<RcmCompetency>> = [RcmCompetency.RCM_COMPETENCY_ID];
  /**
   * Mapping of all key field names to the respective static field property RcmCompetency.
   */
  export const _keys: { [keys: string]: Selectable<RcmCompetency> } = RcmCompetency._keyFields.reduce((acc: { [keys: string]: Selectable<RcmCompetency> }, field: Selectable<RcmCompetency>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
