import { FormJobRoleRequestBuilder } from './FormJobRoleRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormJobRole" of service "SFOData".
 */
export declare class FormJobRole extends Entity implements FormJobRoleType {
    /**
     * Technical entity name for FormJobRole.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormJobRole.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * order.
     */
    order: number;
    /**
     * roleDesc.
     * @nullable
     */
    roleDesc?: string;
    /**
     * roleId.
     */
    roleId: BigNumber;
    /**
     * roleName.
     */
    roleName: string;
    /**
     * Returns an entity builder to construct instances `FormJobRole`.
     * @returns A builder that constructs instances of entity type `FormJobRole`.
     */
    static builder(): EntityBuilderType<FormJobRole, FormJobRoleTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormJobRole` entity type.
     * @returns A `FormJobRole` request builder.
     */
    static requestBuilder(): FormJobRoleRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormJobRole`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormJobRole`.
     */
    static customField(fieldName: string): CustomField<FormJobRole>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface FormJobRoleType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    order: number;
    roleDesc?: string;
    roleId: BigNumber;
    roleName: string;
}
export interface FormJobRoleTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    order: number;
    roleDesc: string;
    roleId: BigNumber;
    roleName: string;
}
export declare namespace FormJobRole {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormJobRole>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormJobRole>;
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER: NumberField<FormJobRole>;
    /**
     * Static representation of the [[roleDesc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_DESC: StringField<FormJobRole>;
    /**
     * Static representation of the [[roleId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_ID: BigNumberField<FormJobRole>;
    /**
     * Static representation of the [[roleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_NAME: StringField<FormJobRole>;
    /**
     * All fields of the FormJobRole entity.
     */
    const _allFields: Array<BigNumberField<FormJobRole> | NumberField<FormJobRole> | StringField<FormJobRole>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormJobRole>;
    /**
     * All key fields of the FormJobRole entity.
     */
    const _keyFields: Array<Selectable<FormJobRole>>;
    /**
     * Mapping of all key field names to the respective static field property FormJobRole.
     */
    const _keys: {
        [keys: string]: Selectable<FormJobRole>;
    };
}
//# sourceMappingURL=FormJobRole.d.ts.map