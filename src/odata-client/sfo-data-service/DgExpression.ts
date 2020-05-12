/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DgExpressionRequestBuilder } from './DgExpressionRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DGExpression" of service "SFOData".
 */
export class DgExpression extends Entity implements DgExpressionType {
  /**
   * Technical entity name for DgExpression.
   */
  static _entityName = 'DGExpression';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DgExpression.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * expressionID.
   * Maximum length: 200.
   */
  expressionId!: string;
  /**
   * One-to-one navigation property to the [[DgFieldOperator]] entity.
   */
  operator!: DgFieldOperator;
  /**
   * One-to-many navigation property to the [[DgFieldValue]] entity.
   */
  values!: DgFieldValue[];

  /**
   * Returns an entity builder to construct instances `DgExpression`.
   * @returns A builder that constructs instances of entity type `DgExpression`.
   */
  static builder(): EntityBuilderType<DgExpression, DgExpressionTypeForceMandatory> {
    return Entity.entityBuilder(DgExpression);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DgExpression` entity type.
   * @returns A `DgExpression` request builder.
   */
  static requestBuilder(): DgExpressionRequestBuilder {
    return new DgExpressionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DgExpression`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DgExpression`.
   */
  static customField(fieldName: string): CustomField<DgExpression> {
    return Entity.customFieldSelector(fieldName, DgExpression);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { DgFieldOperator, DgFieldOperatorType } from './DgFieldOperator';
import { DgFieldValue, DgFieldValueType } from './DgFieldValue';

export interface DgExpressionType {
  expressionId: string;
  operator: DgFieldOperatorType;
  values: DgFieldValueType[];
}

export interface DgExpressionTypeForceMandatory {
  expressionId: string;
  operator: DgFieldOperatorType;
  values: DgFieldValueType[];
}

export namespace DgExpression {
  /**
   * Static representation of the [[expressionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPRESSION_ID: StringField<DgExpression> = new StringField('expressionID', DgExpression, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[operator]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATOR: OneToOneLink<DgExpression, DgFieldOperator> = new OneToOneLink('operator', DgExpression, DgFieldOperator);
  /**
   * Static representation of the one-to-many navigation property [[values]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUES: Link<DgExpression, DgFieldValue> = new Link('values', DgExpression, DgFieldValue);
  /**
   * All fields of the DgExpression entity.
   */
  export const _allFields: Array<StringField<DgExpression> | OneToOneLink<DgExpression, DgFieldOperator> | Link<DgExpression, DgFieldValue>> = [
    DgExpression.EXPRESSION_ID,
    DgExpression.OPERATOR,
    DgExpression.VALUES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DgExpression> = new AllFields('*', DgExpression);
  /**
   * All key fields of the DgExpression entity.
   */
  export const _keyFields: Array<Selectable<DgExpression>> = [DgExpression.EXPRESSION_ID];
  /**
   * Mapping of all key field names to the respective static field property DgExpression.
   */
  export const _keys: { [keys: string]: Selectable<DgExpression> } = DgExpression._keyFields.reduce((acc: { [keys: string]: Selectable<DgExpression> }, field: Selectable<DgExpression>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
