import { CompanyProvisionerRequestBuilder } from './CompanyProvisionerRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CompanyProvisioner" of service "SFOData".
 */
export declare class CompanyProvisioner extends Entity implements CompanyProvisionerType {
    /**
     * Technical entity name for CompanyProvisioner.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CompanyProvisioner.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * createdAdminAccountNumber.
     * @nullable
     */
    createdAdminAccountNumber?: number;
    /**
     * email.
     * @nullable
     */
    email?: string;
    /**
     * id.
     */
    id: string;
    /**
     * name.
     */
    name: string;
    /**
     * status.
     * @nullable
     */
    status?: string;
    /**
     * Returns an entity builder to construct instances `CompanyProvisioner`.
     * @returns A builder that constructs instances of entity type `CompanyProvisioner`.
     */
    static builder(): EntityBuilderType<CompanyProvisioner, CompanyProvisionerTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CompanyProvisioner` entity type.
     * @returns A `CompanyProvisioner` request builder.
     */
    static requestBuilder(): CompanyProvisionerRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CompanyProvisioner`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CompanyProvisioner`.
     */
    static customField(fieldName: string): CustomField<CompanyProvisioner>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CompanyProvisionerType {
    createdAdminAccountNumber?: number;
    email?: string;
    id: string;
    name: string;
    status?: string;
}
export interface CompanyProvisionerTypeForceMandatory {
    createdAdminAccountNumber: number;
    email: string;
    id: string;
    name: string;
    status: string;
}
export declare namespace CompanyProvisioner {
    /**
     * Static representation of the [[createdAdminAccountNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ADMIN_ACCOUNT_NUMBER: NumberField<CompanyProvisioner>;
    /**
     * Static representation of the [[email]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL: StringField<CompanyProvisioner>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<CompanyProvisioner>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<CompanyProvisioner>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<CompanyProvisioner>;
    /**
     * All fields of the CompanyProvisioner entity.
     */
    const _allFields: Array<NumberField<CompanyProvisioner> | StringField<CompanyProvisioner>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CompanyProvisioner>;
    /**
     * All key fields of the CompanyProvisioner entity.
     */
    const _keyFields: Array<Selectable<CompanyProvisioner>>;
    /**
     * Mapping of all key field names to the respective static field property CompanyProvisioner.
     */
    const _keys: {
        [keys: string]: Selectable<CompanyProvisioner>;
    };
}
//# sourceMappingURL=CompanyProvisioner.d.ts.map