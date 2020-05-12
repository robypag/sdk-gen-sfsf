import { Form360RaterSectionRequestBuilder } from './Form360RaterSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Form360RaterSection" of service "SFOData".
 */
export declare class Form360RaterSection extends Entity implements Form360RaterSectionType {
    /**
     * Technical entity name for Form360RaterSection.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360RaterSection.
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
     * formRating.
     * @nullable
     */
    formRating?: string;
    /**
     * formStatus.
     * @nullable
     */
    formStatus?: number;
    /**
     * formStatusDescription.
     * @nullable
     */
    formStatusDescription?: string;
    /**
     * One-to-many navigation property to the [[Form360Rater]] entity.
     */
    form360Raters: Form360Rater[];
    /**
     * Returns an entity builder to construct instances `Form360RaterSection`.
     * @returns A builder that constructs instances of entity type `Form360RaterSection`.
     */
    static builder(): EntityBuilderType<Form360RaterSection, Form360RaterSectionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Form360RaterSection` entity type.
     * @returns A `Form360RaterSection` request builder.
     */
    static requestBuilder(): Form360RaterSectionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360RaterSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360RaterSection`.
     */
    static customField(fieldName: string): CustomField<Form360RaterSection>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Form360Rater, Form360RaterType } from './Form360Rater';
export interface Form360RaterSectionType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    formRating?: string;
    formStatus?: number;
    formStatusDescription?: string;
    form360Raters: Form360RaterType[];
}
export interface Form360RaterSectionTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    formRating: string;
    formStatus: number;
    formStatusDescription: string;
    form360Raters: Form360RaterType[];
}
export declare namespace Form360RaterSection {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<Form360RaterSection>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<Form360RaterSection>;
    /**
     * Static representation of the [[formRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_RATING: StringField<Form360RaterSection>;
    /**
     * Static representation of the [[formStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_STATUS: NumberField<Form360RaterSection>;
    /**
     * Static representation of the [[formStatusDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_STATUS_DESCRIPTION: StringField<Form360RaterSection>;
    /**
     * Static representation of the one-to-many navigation property [[form360Raters]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_360_RATERS: Link<Form360RaterSection, Form360Rater>;
    /**
     * All fields of the Form360RaterSection entity.
     */
    const _allFields: Array<BigNumberField<Form360RaterSection> | StringField<Form360RaterSection> | NumberField<Form360RaterSection> | Link<Form360RaterSection, Form360Rater>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Form360RaterSection>;
    /**
     * All key fields of the Form360RaterSection entity.
     */
    const _keyFields: Array<Selectable<Form360RaterSection>>;
    /**
     * Mapping of all key field names to the respective static field property Form360RaterSection.
     */
    const _keys: {
        [keys: string]: Selectable<Form360RaterSection>;
    };
}
//# sourceMappingURL=Form360RaterSection.d.ts.map