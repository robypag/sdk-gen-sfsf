import { FormJobDescSectionRequestBuilder } from './FormJobDescSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormJobDescSection" of service "SFOData".
 */
export declare class FormJobDescSection extends Entity implements FormJobDescSectionType {
    /**
     * Technical entity name for FormJobDescSection.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormJobDescSection.
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
     * sectionDescription.
     * @nullable
     */
    sectionDescription?: string;
    /**
     * sectionIndex.
     */
    sectionIndex: number;
    /**
     * sectionName.
     */
    sectionName: string;
    /**
     * One-to-many navigation property to the [[FormJobRole]] entity.
     */
    jobRoles: FormJobRole[];
    /**
     * Returns an entity builder to construct instances `FormJobDescSection`.
     * @returns A builder that constructs instances of entity type `FormJobDescSection`.
     */
    static builder(): EntityBuilderType<FormJobDescSection, FormJobDescSectionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormJobDescSection` entity type.
     * @returns A `FormJobDescSection` request builder.
     */
    static requestBuilder(): FormJobDescSectionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormJobDescSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormJobDescSection`.
     */
    static customField(fieldName: string): CustomField<FormJobDescSection>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormJobRole, FormJobRoleType } from './FormJobRole';
export interface FormJobDescSectionType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionDescription?: string;
    sectionIndex: number;
    sectionName: string;
    jobRoles: FormJobRoleType[];
}
export interface FormJobDescSectionTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionDescription: string;
    sectionIndex: number;
    sectionName: string;
    jobRoles: FormJobRoleType[];
}
export declare namespace FormJobDescSection {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormJobDescSection>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormJobDescSection>;
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_DESCRIPTION: StringField<FormJobDescSection>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormJobDescSection>;
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_NAME: StringField<FormJobDescSection>;
    /**
     * Static representation of the one-to-many navigation property [[jobRoles]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_ROLES: Link<FormJobDescSection, FormJobRole>;
    /**
     * All fields of the FormJobDescSection entity.
     */
    const _allFields: Array<BigNumberField<FormJobDescSection> | StringField<FormJobDescSection> | NumberField<FormJobDescSection> | Link<FormJobDescSection, FormJobRole>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormJobDescSection>;
    /**
     * All key fields of the FormJobDescSection entity.
     */
    const _keyFields: Array<Selectable<FormJobDescSection>>;
    /**
     * Mapping of all key field names to the respective static field property FormJobDescSection.
     */
    const _keys: {
        [keys: string]: Selectable<FormJobDescSection>;
    };
}
//# sourceMappingURL=FormJobDescSection.d.ts.map