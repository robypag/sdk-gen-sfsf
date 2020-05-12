import { FormObjectiveCommentRequestBuilder } from './FormObjectiveCommentRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormObjectiveComment" of service "SFOData".
 */
export declare class FormObjectiveComment extends Entity implements FormObjectiveCommentType {
    /**
     * Technical entity name for FormObjectiveComment.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjectiveComment.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * commentDate.
     * @nullable
     */
    commentDate?: string;
    /**
     * commentText.
     * @nullable
     */
    commentText?: string;
    /**
     * fieldDataType.
     * @nullable
     */
    fieldDataType?: string;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * itemId.
     */
    itemId: BigNumber;
    /**
     * label.
     * @nullable
     */
    label?: string;
    /**
     * order.
     * @nullable
     */
    order?: number;
    /**
     * sectionIndex.
     */
    sectionIndex: number;
    /**
     * type.
     */
    type: number;
    /**
     * userFullName.
     * @nullable
     */
    userFullName?: string;
    /**
     * userId.
     * @nullable
     */
    userId?: string;
    /**
     * Returns an entity builder to construct instances `FormObjectiveComment`.
     * @returns A builder that constructs instances of entity type `FormObjectiveComment`.
     */
    static builder(): EntityBuilderType<FormObjectiveComment, FormObjectiveCommentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormObjectiveComment` entity type.
     * @returns A `FormObjectiveComment` request builder.
     */
    static requestBuilder(): FormObjectiveCommentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveComment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjectiveComment`.
     */
    static customField(fieldName: string): CustomField<FormObjectiveComment>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface FormObjectiveCommentType {
    commentDate?: string;
    commentText?: string;
    fieldDataType?: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    label?: string;
    order?: number;
    sectionIndex: number;
    type: number;
    userFullName?: string;
    userId?: string;
}
export interface FormObjectiveCommentTypeForceMandatory {
    commentDate: string;
    commentText: string;
    fieldDataType: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    label: string;
    order: number;
    sectionIndex: number;
    type: number;
    userFullName: string;
    userId: string;
}
export declare namespace FormObjectiveComment {
    /**
     * Static representation of the [[commentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT_DATE: StringField<FormObjectiveComment>;
    /**
     * Static representation of the [[commentText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT_TEXT: StringField<FormObjectiveComment>;
    /**
     * Static representation of the [[fieldDataType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_DATA_TYPE: StringField<FormObjectiveComment>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormObjectiveComment>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormObjectiveComment>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: BigNumberField<FormObjectiveComment>;
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL: StringField<FormObjectiveComment>;
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER: NumberField<FormObjectiveComment>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormObjectiveComment>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: NumberField<FormObjectiveComment>;
    /**
     * Static representation of the [[userFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_FULL_NAME: StringField<FormObjectiveComment>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<FormObjectiveComment>;
    /**
     * All fields of the FormObjectiveComment entity.
     */
    const _allFields: Array<StringField<FormObjectiveComment> | BigNumberField<FormObjectiveComment> | NumberField<FormObjectiveComment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormObjectiveComment>;
    /**
     * All key fields of the FormObjectiveComment entity.
     */
    const _keyFields: Array<Selectable<FormObjectiveComment>>;
    /**
     * Mapping of all key field names to the respective static field property FormObjectiveComment.
     */
    const _keys: {
        [keys: string]: Selectable<FormObjectiveComment>;
    };
}
//# sourceMappingURL=FormObjectiveComment.d.ts.map