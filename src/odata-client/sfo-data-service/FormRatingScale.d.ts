import { FormRatingScaleRequestBuilder } from './FormRatingScaleRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormRatingScale" of service "SFOData".
 */
export declare class FormRatingScale extends Entity implements FormRatingScaleType {
    /**
     * Technical entity name for FormRatingScale.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormRatingScale.
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
     * name.
     * @nullable
     */
    name?: string;
    /**
     * reverseScale.
     * @nullable
     */
    reverseScale?: boolean;
    /**
     * scaleId.
     */
    scaleId: string;
    /**
     * scaleType.
     * @nullable
     */
    scaleType?: string;
    /**
     * sectionIndex.
     */
    sectionIndex: number;
    /**
     * showValue.
     * @nullable
     */
    showValue?: boolean;
    /**
     * One-to-many navigation property to the [[FormRatingScaleValue]] entity.
     */
    ratingScaleList: FormRatingScaleValue[];
    /**
     * Returns an entity builder to construct instances `FormRatingScale`.
     * @returns A builder that constructs instances of entity type `FormRatingScale`.
     */
    static builder(): EntityBuilderType<FormRatingScale, FormRatingScaleTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormRatingScale` entity type.
     * @returns A `FormRatingScale` request builder.
     */
    static requestBuilder(): FormRatingScaleRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormRatingScale`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormRatingScale`.
     */
    static customField(fieldName: string): CustomField<FormRatingScale>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormRatingScaleValue, FormRatingScaleValueType } from './FormRatingScaleValue';
export interface FormRatingScaleType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    name?: string;
    reverseScale?: boolean;
    scaleId: string;
    scaleType?: string;
    sectionIndex: number;
    showValue?: boolean;
    ratingScaleList: FormRatingScaleValueType[];
}
export interface FormRatingScaleTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    name: string;
    reverseScale: boolean;
    scaleId: string;
    scaleType: string;
    sectionIndex: number;
    showValue: boolean;
    ratingScaleList: FormRatingScaleValueType[];
}
export declare namespace FormRatingScale {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormRatingScale>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormRatingScale>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FormRatingScale>;
    /**
     * Static representation of the [[reverseScale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVERSE_SCALE: BooleanField<FormRatingScale>;
    /**
     * Static representation of the [[scaleId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCALE_ID: StringField<FormRatingScale>;
    /**
     * Static representation of the [[scaleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCALE_TYPE: StringField<FormRatingScale>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormRatingScale>;
    /**
     * Static representation of the [[showValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHOW_VALUE: BooleanField<FormRatingScale>;
    /**
     * Static representation of the one-to-many navigation property [[ratingScaleList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_SCALE_LIST: Link<FormRatingScale, FormRatingScaleValue>;
    /**
     * All fields of the FormRatingScale entity.
     */
    const _allFields: Array<BigNumberField<FormRatingScale> | StringField<FormRatingScale> | BooleanField<FormRatingScale> | NumberField<FormRatingScale> | Link<FormRatingScale, FormRatingScaleValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormRatingScale>;
    /**
     * All key fields of the FormRatingScale entity.
     */
    const _keyFields: Array<Selectable<FormRatingScale>>;
    /**
     * Mapping of all key field names to the respective static field property FormRatingScale.
     */
    const _keys: {
        [keys: string]: Selectable<FormRatingScale>;
    };
}
//# sourceMappingURL=FormRatingScale.d.ts.map