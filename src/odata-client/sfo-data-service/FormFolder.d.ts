import { FormFolderRequestBuilder } from './FormFolderRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormFolder" of service "SFOData".
 */
export declare class FormFolder extends Entity implements FormFolderType {
    /**
     * Technical entity name for FormFolder.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormFolder.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * folderId.
     */
    folderId: BigNumber;
    /**
     * folderName.
     */
    folderName: string;
    /**
     * userId.
     */
    userId: string;
    /**
     * One-to-many navigation property to the [[FormContent]] entity.
     */
    forms: FormContent[];
    /**
     * Returns an entity builder to construct instances `FormFolder`.
     * @returns A builder that constructs instances of entity type `FormFolder`.
     */
    static builder(): EntityBuilderType<FormFolder, FormFolderTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormFolder` entity type.
     * @returns A `FormFolder` request builder.
     */
    static requestBuilder(): FormFolderRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormFolder`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormFolder`.
     */
    static customField(fieldName: string): CustomField<FormFolder>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormContent, FormContentType } from './FormContent';
export interface FormFolderType {
    folderId: BigNumber;
    folderName: string;
    userId: string;
    forms: FormContentType[];
}
export interface FormFolderTypeForceMandatory {
    folderId: BigNumber;
    folderName: string;
    userId: string;
    forms: FormContentType[];
}
export declare namespace FormFolder {
    /**
     * Static representation of the [[folderId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLDER_ID: BigNumberField<FormFolder>;
    /**
     * Static representation of the [[folderName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLDER_NAME: StringField<FormFolder>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<FormFolder>;
    /**
     * Static representation of the one-to-many navigation property [[forms]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORMS: Link<FormFolder, FormContent>;
    /**
     * All fields of the FormFolder entity.
     */
    const _allFields: Array<BigNumberField<FormFolder> | StringField<FormFolder> | Link<FormFolder, FormContent>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormFolder>;
    /**
     * All key fields of the FormFolder entity.
     */
    const _keyFields: Array<Selectable<FormFolder>>;
    /**
     * Mapping of all key field names to the respective static field property FormFolder.
     */
    const _keys: {
        [keys: string]: Selectable<FormFolder>;
    };
}
//# sourceMappingURL=FormFolder.d.ts.map