import { FormSectionConfigurationRequestBuilder } from './FormSectionConfigurationRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormSectionConfiguration" of service "SFOData".
 */
export declare class FormSectionConfiguration extends Entity implements FormSectionConfigurationType {
    /**
     * Technical entity name for FormSectionConfiguration.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormSectionConfiguration.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * addExistingObjEnabled.
     * @nullable
     */
    addExistingObjEnabled?: boolean;
    /**
     * addItem.
     * @nullable
     */
    addItem?: boolean;
    /**
     * autoPopulateWeight.
     * @nullable
     */
    autoPopulateWeight?: boolean;
    /**
     * behaviorModeOption.
     * @nullable
     */
    behaviorModeOption?: number;
    /**
     * enforcePlainTextCharacterLimit.
     * @nullable
     */
    enforcePlainTextCharacterLimit?: boolean;
    /**
     * enforceRTECharacterLimit.
     * @nullable
     */
    enforceRteCharacterLimit?: boolean;
    /**
     * excludePrivateGoal.
     * @nullable
     */
    excludePrivateGoal?: boolean;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * hasItemComment.
     * @nullable
     */
    hasItemComment?: boolean;
    /**
     * hasSectionComment.
     * @nullable
     */
    hasSectionComment?: boolean;
    /**
     * itemNonremovablePermission.
     * @nullable
     */
    itemNonremovablePermission?: string;
    /**
     * objCategories.
     * @nullable
     */
    objCategories?: string;
    /**
     * objCategoriesCount.
     * @nullable
     */
    objCategoriesCount?: number;
    /**
     * rateByBehavior.
     * @nullable
     */
    rateByBehavior?: boolean;
    /**
     * ratingOption.
     * @nullable
     */
    ratingOption?: number;
    /**
     * ratingScaleLabelLinkEnabled.
     * @nullable
     */
    ratingScaleLabelLinkEnabled?: boolean;
    /**
     * sectionCommentRequired.
     * @nullable
     */
    sectionCommentRequired?: boolean;
    /**
     * sectionIndex.
     */
    sectionIndex: number;
    /**
     * sectionWeightPermission.
     * @nullable
     */
    sectionWeightPermission?: string;
    /**
     * smartWizardEnabled.
     * @nullable
     */
    smartWizardEnabled?: boolean;
    /**
     * teamRaterEnabled.
     * @nullable
     */
    teamRaterEnabled?: boolean;
    /**
     * waca.
     * @nullable
     */
    waca?: boolean;
    /**
     * weightTotal.
     * @nullable
     */
    weightTotal?: string;
    /**
     * One-to-one navigation property to the [[FormRatingScale]] entity.
     */
    formBehaviorRatingScale: FormRatingScale;
    /**
     * One-to-one navigation property to the [[FormRatingScale]] entity.
     */
    formRatingScale: FormRatingScale;
    /**
     * Returns an entity builder to construct instances `FormSectionConfiguration`.
     * @returns A builder that constructs instances of entity type `FormSectionConfiguration`.
     */
    static builder(): EntityBuilderType<FormSectionConfiguration, FormSectionConfigurationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormSectionConfiguration` entity type.
     * @returns A `FormSectionConfiguration` request builder.
     */
    static requestBuilder(): FormSectionConfigurationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormSectionConfiguration`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormSectionConfiguration`.
     */
    static customField(fieldName: string): CustomField<FormSectionConfiguration>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormRatingScale, FormRatingScaleType } from './FormRatingScale';
export interface FormSectionConfigurationType {
    addExistingObjEnabled?: boolean;
    addItem?: boolean;
    autoPopulateWeight?: boolean;
    behaviorModeOption?: number;
    enforcePlainTextCharacterLimit?: boolean;
    enforceRteCharacterLimit?: boolean;
    excludePrivateGoal?: boolean;
    formContentId: BigNumber;
    formDataId: BigNumber;
    hasItemComment?: boolean;
    hasSectionComment?: boolean;
    itemNonremovablePermission?: string;
    objCategories?: string;
    objCategoriesCount?: number;
    rateByBehavior?: boolean;
    ratingOption?: number;
    ratingScaleLabelLinkEnabled?: boolean;
    sectionCommentRequired?: boolean;
    sectionIndex: number;
    sectionWeightPermission?: string;
    smartWizardEnabled?: boolean;
    teamRaterEnabled?: boolean;
    waca?: boolean;
    weightTotal?: string;
    formBehaviorRatingScale: FormRatingScaleType;
    formRatingScale: FormRatingScaleType;
}
export interface FormSectionConfigurationTypeForceMandatory {
    addExistingObjEnabled: boolean;
    addItem: boolean;
    autoPopulateWeight: boolean;
    behaviorModeOption: number;
    enforcePlainTextCharacterLimit: boolean;
    enforceRteCharacterLimit: boolean;
    excludePrivateGoal: boolean;
    formContentId: BigNumber;
    formDataId: BigNumber;
    hasItemComment: boolean;
    hasSectionComment: boolean;
    itemNonremovablePermission: string;
    objCategories: string;
    objCategoriesCount: number;
    rateByBehavior: boolean;
    ratingOption: number;
    ratingScaleLabelLinkEnabled: boolean;
    sectionCommentRequired: boolean;
    sectionIndex: number;
    sectionWeightPermission: string;
    smartWizardEnabled: boolean;
    teamRaterEnabled: boolean;
    waca: boolean;
    weightTotal: string;
    formBehaviorRatingScale: FormRatingScaleType;
    formRatingScale: FormRatingScaleType;
}
export declare namespace FormSectionConfiguration {
    /**
     * Static representation of the [[addExistingObjEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADD_EXISTING_OBJ_ENABLED: BooleanField<FormSectionConfiguration>;
    /**
     * Static representation of the [[addItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADD_ITEM: BooleanField<FormSectionConfiguration>;
    /**
     * Static representation of the [[autoPopulateWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTO_POPULATE_WEIGHT: BooleanField<FormSectionConfiguration>;
    /**
     * Static representation of the [[behaviorModeOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BEHAVIOR_MODE_OPTION: NumberField<FormSectionConfiguration>;
    /**
     * Static representation of the [[enforcePlainTextCharacterLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENFORCE_PLAIN_TEXT_CHARACTER_LIMIT: BooleanField<FormSectionConfiguration>;
    /**
     * Static representation of the [[enforceRteCharacterLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENFORCE_RTE_CHARACTER_LIMIT: BooleanField<FormSectionConfiguration>;
    /**
     * Static representation of the [[excludePrivateGoal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXCLUDE_PRIVATE_GOAL: BooleanField<FormSectionConfiguration>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormSectionConfiguration>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormSectionConfiguration>;
    /**
     * Static representation of the [[hasItemComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_ITEM_COMMENT: BooleanField<FormSectionConfiguration>;
    /**
     * Static representation of the [[hasSectionComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_SECTION_COMMENT: BooleanField<FormSectionConfiguration>;
    /**
     * Static representation of the [[itemNonremovablePermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_NONREMOVABLE_PERMISSION: StringField<FormSectionConfiguration>;
    /**
     * Static representation of the [[objCategories]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJ_CATEGORIES: StringField<FormSectionConfiguration>;
    /**
     * Static representation of the [[objCategoriesCount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJ_CATEGORIES_COUNT: NumberField<FormSectionConfiguration>;
    /**
     * Static representation of the [[rateByBehavior]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATE_BY_BEHAVIOR: BooleanField<FormSectionConfiguration>;
    /**
     * Static representation of the [[ratingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_OPTION: NumberField<FormSectionConfiguration>;
    /**
     * Static representation of the [[ratingScaleLabelLinkEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_SCALE_LABEL_LINK_ENABLED: BooleanField<FormSectionConfiguration>;
    /**
     * Static representation of the [[sectionCommentRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_COMMENT_REQUIRED: BooleanField<FormSectionConfiguration>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormSectionConfiguration>;
    /**
     * Static representation of the [[sectionWeightPermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_WEIGHT_PERMISSION: StringField<FormSectionConfiguration>;
    /**
     * Static representation of the [[smartWizardEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SMART_WIZARD_ENABLED: BooleanField<FormSectionConfiguration>;
    /**
     * Static representation of the [[teamRaterEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEAM_RATER_ENABLED: BooleanField<FormSectionConfiguration>;
    /**
     * Static representation of the [[waca]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WACA: BooleanField<FormSectionConfiguration>;
    /**
     * Static representation of the [[weightTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_TOTAL: StringField<FormSectionConfiguration>;
    /**
     * Static representation of the one-to-one navigation property [[formBehaviorRatingScale]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_BEHAVIOR_RATING_SCALE: OneToOneLink<FormSectionConfiguration, FormRatingScale>;
    /**
     * Static representation of the one-to-one navigation property [[formRatingScale]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_RATING_SCALE: OneToOneLink<FormSectionConfiguration, FormRatingScale>;
    /**
     * All fields of the FormSectionConfiguration entity.
     */
    const _allFields: Array<BooleanField<FormSectionConfiguration> | NumberField<FormSectionConfiguration> | BigNumberField<FormSectionConfiguration> | StringField<FormSectionConfiguration> | OneToOneLink<FormSectionConfiguration, FormRatingScale>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormSectionConfiguration>;
    /**
     * All key fields of the FormSectionConfiguration entity.
     */
    const _keyFields: Array<Selectable<FormSectionConfiguration>>;
    /**
     * Mapping of all key field names to the respective static field property FormSectionConfiguration.
     */
    const _keys: {
        [keys: string]: Selectable<FormSectionConfiguration>;
    };
}
//# sourceMappingURL=FormSectionConfiguration.d.ts.map