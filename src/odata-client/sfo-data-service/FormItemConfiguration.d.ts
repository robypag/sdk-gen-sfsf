import { FormItemConfigurationRequestBuilder } from './FormItemConfigurationRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormItemConfiguration" of service "SFOData".
 */
export declare class FormItemConfiguration extends Entity implements FormItemConfigurationType {
    /**
     * Technical entity name for FormItemConfiguration.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormItemConfiguration.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * behaviorRemovable.
     * @nullable
     */
    behaviorRemovable?: boolean;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * itemCommentRequired.
     * @nullable
     */
    itemCommentRequired?: boolean;
    /**
     * itemEditable.
     * @nullable
     */
    itemEditable?: boolean;
    /**
     * itemId.
     */
    itemId: BigNumber;
    /**
     * itemRatingRequired.
     * @nullable
     */
    itemRatingRequired?: boolean;
    /**
     * itemRemovable.
     * @nullable
     */
    itemRemovable?: boolean;
    /**
     * itemRemovableKey.
     * @nullable
     */
    itemRemovableKey?: string;
    /**
     * itemWeightPermission.
     * @nullable
     */
    itemWeightPermission?: string;
    /**
     * itemWeightRequired.
     * @nullable
     */
    itemWeightRequired?: boolean;
    /**
     * sectionIndex.
     */
    sectionIndex: number;
    /**
     * suppressItemComments.
     * @nullable
     */
    suppressItemComments?: boolean;
    /**
     * suppressItemCommentsLabel.
     * @nullable
     */
    suppressItemCommentsLabel?: boolean;
    /**
     * Returns an entity builder to construct instances `FormItemConfiguration`.
     * @returns A builder that constructs instances of entity type `FormItemConfiguration`.
     */
    static builder(): EntityBuilderType<FormItemConfiguration, FormItemConfigurationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormItemConfiguration` entity type.
     * @returns A `FormItemConfiguration` request builder.
     */
    static requestBuilder(): FormItemConfigurationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormItemConfiguration`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormItemConfiguration`.
     */
    static customField(fieldName: string): CustomField<FormItemConfiguration>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface FormItemConfigurationType {
    behaviorRemovable?: boolean;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemCommentRequired?: boolean;
    itemEditable?: boolean;
    itemId: BigNumber;
    itemRatingRequired?: boolean;
    itemRemovable?: boolean;
    itemRemovableKey?: string;
    itemWeightPermission?: string;
    itemWeightRequired?: boolean;
    sectionIndex: number;
    suppressItemComments?: boolean;
    suppressItemCommentsLabel?: boolean;
}
export interface FormItemConfigurationTypeForceMandatory {
    behaviorRemovable: boolean;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemCommentRequired: boolean;
    itemEditable: boolean;
    itemId: BigNumber;
    itemRatingRequired: boolean;
    itemRemovable: boolean;
    itemRemovableKey: string;
    itemWeightPermission: string;
    itemWeightRequired: boolean;
    sectionIndex: number;
    suppressItemComments: boolean;
    suppressItemCommentsLabel: boolean;
}
export declare namespace FormItemConfiguration {
    /**
     * Static representation of the [[behaviorRemovable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BEHAVIOR_REMOVABLE: BooleanField<FormItemConfiguration>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormItemConfiguration>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormItemConfiguration>;
    /**
     * Static representation of the [[itemCommentRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_COMMENT_REQUIRED: BooleanField<FormItemConfiguration>;
    /**
     * Static representation of the [[itemEditable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_EDITABLE: BooleanField<FormItemConfiguration>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: BigNumberField<FormItemConfiguration>;
    /**
     * Static representation of the [[itemRatingRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_RATING_REQUIRED: BooleanField<FormItemConfiguration>;
    /**
     * Static representation of the [[itemRemovable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_REMOVABLE: BooleanField<FormItemConfiguration>;
    /**
     * Static representation of the [[itemRemovableKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_REMOVABLE_KEY: StringField<FormItemConfiguration>;
    /**
     * Static representation of the [[itemWeightPermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_WEIGHT_PERMISSION: StringField<FormItemConfiguration>;
    /**
     * Static representation of the [[itemWeightRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_WEIGHT_REQUIRED: BooleanField<FormItemConfiguration>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormItemConfiguration>;
    /**
     * Static representation of the [[suppressItemComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPRESS_ITEM_COMMENTS: BooleanField<FormItemConfiguration>;
    /**
     * Static representation of the [[suppressItemCommentsLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPRESS_ITEM_COMMENTS_LABEL: BooleanField<FormItemConfiguration>;
    /**
     * All fields of the FormItemConfiguration entity.
     */
    const _allFields: Array<BooleanField<FormItemConfiguration> | BigNumberField<FormItemConfiguration> | StringField<FormItemConfiguration> | NumberField<FormItemConfiguration>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormItemConfiguration>;
    /**
     * All key fields of the FormItemConfiguration entity.
     */
    const _keyFields: Array<Selectable<FormItemConfiguration>>;
    /**
     * Mapping of all key field names to the respective static field property FormItemConfiguration.
     */
    const _keys: {
        [keys: string]: Selectable<FormItemConfiguration>;
    };
}
//# sourceMappingURL=FormItemConfiguration.d.ts.map