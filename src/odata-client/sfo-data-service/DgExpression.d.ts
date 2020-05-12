import { DgExpressionRequestBuilder } from './DgExpressionRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DGExpression" of service "SFOData".
 */
export declare class DgExpression extends Entity implements DgExpressionType {
    /**
     * Technical entity name for DgExpression.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DgExpression.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * expressionID.
     * Maximum length: 200.
     */
    expressionId: string;
    /**
     * One-to-one navigation property to the [[DgFieldOperator]] entity.
     */
    operator: DgFieldOperator;
    /**
     * One-to-many navigation property to the [[DgFieldValue]] entity.
     */
    values: DgFieldValue[];
    /**
     * Returns an entity builder to construct instances `DgExpression`.
     * @returns A builder that constructs instances of entity type `DgExpression`.
     */
    static builder(): EntityBuilderType<DgExpression, DgExpressionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DgExpression` entity type.
     * @returns A `DgExpression` request builder.
     */
    static requestBuilder(): DgExpressionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DgExpression`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DgExpression`.
     */
    static customField(fieldName: string): CustomField<DgExpression>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace DgExpression {
    /**
     * Static representation of the [[expressionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPRESSION_ID: StringField<DgExpression>;
    /**
     * Static representation of the one-to-one navigation property [[operator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATOR: OneToOneLink<DgExpression, DgFieldOperator>;
    /**
     * Static representation of the one-to-many navigation property [[values]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUES: Link<DgExpression, DgFieldValue>;
    /**
     * All fields of the DgExpression entity.
     */
    const _allFields: Array<StringField<DgExpression> | OneToOneLink<DgExpression, DgFieldOperator> | Link<DgExpression, DgFieldValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DgExpression>;
    /**
     * All key fields of the DgExpression entity.
     */
    const _keyFields: Array<Selectable<DgExpression>>;
    /**
     * Mapping of all key field names to the respective static field property DgExpression.
     */
    const _keys: {
        [keys: string]: Selectable<DgExpression>;
    };
}
//# sourceMappingURL=DgExpression.d.ts.map