import { FormSignatureRequestBuilder } from './FormSignatureRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormSignature" of service "SFOData".
 */
export declare class FormSignature extends Entity implements FormSignatureType {
    /**
     * Technical entity name for FormSignature.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormSignature.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * actionInformation.
     * @nullable
     */
    actionInformation?: string;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * roleType.
     * @nullable
     */
    roleType?: string;
    /**
     * sectionIndex.
     */
    sectionIndex: number;
    /**
     * signedBy.
     * @nullable
     */
    signedBy?: string;
    /**
     * signedDate.
     * @nullable
     */
    signedDate?: string;
    /**
     * status.
     * @nullable
     */
    status?: string;
    /**
     * stepId.
     */
    stepId: string;
    /**
     * stepOrder.
     * @nullable
     */
    stepOrder?: number;
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    comment: FormUserRatingComment;
    /**
     * Returns an entity builder to construct instances `FormSignature`.
     * @returns A builder that constructs instances of entity type `FormSignature`.
     */
    static builder(): EntityBuilderType<FormSignature, FormSignatureTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormSignature` entity type.
     * @returns A `FormSignature` request builder.
     */
    static requestBuilder(): FormSignatureRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormSignature`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormSignature`.
     */
    static customField(fieldName: string): CustomField<FormSignature>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormUserRatingComment, FormUserRatingCommentType } from './FormUserRatingComment';
export interface FormSignatureType {
    actionInformation?: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    roleType?: string;
    sectionIndex: number;
    signedBy?: string;
    signedDate?: string;
    status?: string;
    stepId: string;
    stepOrder?: number;
    comment: FormUserRatingCommentType;
}
export interface FormSignatureTypeForceMandatory {
    actionInformation: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    roleType: string;
    sectionIndex: number;
    signedBy: string;
    signedDate: string;
    status: string;
    stepId: string;
    stepOrder: number;
    comment: FormUserRatingCommentType;
}
export declare namespace FormSignature {
    /**
     * Static representation of the [[actionInformation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTION_INFORMATION: StringField<FormSignature>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormSignature>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormSignature>;
    /**
     * Static representation of the [[roleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_TYPE: StringField<FormSignature>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormSignature>;
    /**
     * Static representation of the [[signedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIGNED_BY: StringField<FormSignature>;
    /**
     * Static representation of the [[signedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIGNED_DATE: StringField<FormSignature>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FormSignature>;
    /**
     * Static representation of the [[stepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STEP_ID: StringField<FormSignature>;
    /**
     * Static representation of the [[stepOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STEP_ORDER: NumberField<FormSignature>;
    /**
     * Static representation of the one-to-one navigation property [[comment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT: OneToOneLink<FormSignature, FormUserRatingComment>;
    /**
     * All fields of the FormSignature entity.
     */
    const _allFields: Array<StringField<FormSignature> | BigNumberField<FormSignature> | NumberField<FormSignature> | OneToOneLink<FormSignature, FormUserRatingComment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormSignature>;
    /**
     * All key fields of the FormSignature entity.
     */
    const _keyFields: Array<Selectable<FormSignature>>;
    /**
     * Mapping of all key field names to the respective static field property FormSignature.
     */
    const _keys: {
        [keys: string]: Selectable<FormSignature>;
    };
}
//# sourceMappingURL=FormSignature.d.ts.map