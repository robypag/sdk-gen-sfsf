import { FormCompetencyRequestBuilder } from './FormCompetencyRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormCompetency" of service "SFOData".
 */
export declare class FormCompetency extends Entity implements FormCompetencyType {
    /**
     * Technical entity name for FormCompetency.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormCompetency.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * assignments.
     * @nullable
     */
    assignments?: string;
    /**
     * category.
     * @nullable
     */
    category?: string;
    /**
     * description.
     * @nullable
     */
    description?: string;
    /**
     * expectedRating.
     * @nullable
     */
    expectedRating?: string;
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
     * itemIndex.
     * @nullable
     */
    itemIndex?: BigNumber;
    /**
     * name.
     * @nullable
     */
    name?: string;
    /**
     * sectionIndex.
     */
    sectionIndex: number;
    /**
     * source.
     * @nullable
     */
    source?: string;
    /**
     * weight.
     * @nullable
     */
    weight?: string;
    /**
     * weightKey.
     * @nullable
     */
    weightKey?: string;
    /**
     * One-to-many navigation property to the [[FormCompetencyBehavior]] entity.
     */
    competencyBehaviors: FormCompetencyBehavior[];
    /**
     * One-to-many navigation property to the [[FormCustomElement]] entity.
     */
    customElement: FormCustomElement[];
    /**
     * One-to-one navigation property to the [[FormItemConfiguration]] entity.
     */
    itemConfiguration: FormItemConfiguration;
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    officialRating: FormUserRatingComment;
    /**
     * One-to-many navigation property to the [[FormUserRatingComment]] entity.
     */
    othersRatingComment: FormUserRatingComment[];
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    selfRatingComment: FormUserRatingComment;
    /**
     * Returns an entity builder to construct instances `FormCompetency`.
     * @returns A builder that constructs instances of entity type `FormCompetency`.
     */
    static builder(): EntityBuilderType<FormCompetency, FormCompetencyTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormCompetency` entity type.
     * @returns A `FormCompetency` request builder.
     */
    static requestBuilder(): FormCompetencyRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormCompetency`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormCompetency`.
     */
    static customField(fieldName: string): CustomField<FormCompetency>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormCompetencyBehavior, FormCompetencyBehaviorType } from './FormCompetencyBehavior';
import { FormCustomElement, FormCustomElementType } from './FormCustomElement';
import { FormItemConfiguration, FormItemConfigurationType } from './FormItemConfiguration';
import { FormUserRatingComment, FormUserRatingCommentType } from './FormUserRatingComment';
export interface FormCompetencyType {
    assignments?: string;
    category?: string;
    description?: string;
    expectedRating?: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    itemIndex?: BigNumber;
    name?: string;
    sectionIndex: number;
    source?: string;
    weight?: string;
    weightKey?: string;
    competencyBehaviors: FormCompetencyBehaviorType[];
    customElement: FormCustomElementType[];
    itemConfiguration: FormItemConfigurationType;
    officialRating: FormUserRatingCommentType;
    othersRatingComment: FormUserRatingCommentType[];
    selfRatingComment: FormUserRatingCommentType;
}
export interface FormCompetencyTypeForceMandatory {
    assignments: string;
    category: string;
    description: string;
    expectedRating: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    itemIndex: BigNumber;
    name: string;
    sectionIndex: number;
    source: string;
    weight: string;
    weightKey: string;
    competencyBehaviors: FormCompetencyBehaviorType[];
    customElement: FormCustomElementType[];
    itemConfiguration: FormItemConfigurationType;
    officialRating: FormUserRatingCommentType;
    othersRatingComment: FormUserRatingCommentType[];
    selfRatingComment: FormUserRatingCommentType;
}
export declare namespace FormCompetency {
    /**
     * Static representation of the [[assignments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSIGNMENTS: StringField<FormCompetency>;
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: StringField<FormCompetency>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FormCompetency>;
    /**
     * Static representation of the [[expectedRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_RATING: StringField<FormCompetency>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormCompetency>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormCompetency>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: BigNumberField<FormCompetency>;
    /**
     * Static representation of the [[itemIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_INDEX: BigNumberField<FormCompetency>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FormCompetency>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormCompetency>;
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE: StringField<FormCompetency>;
    /**
     * Static representation of the [[weight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT: StringField<FormCompetency>;
    /**
     * Static representation of the [[weightKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_KEY: StringField<FormCompetency>;
    /**
     * Static representation of the one-to-many navigation property [[competencyBehaviors]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPETENCY_BEHAVIORS: Link<FormCompetency, FormCompetencyBehavior>;
    /**
     * Static representation of the one-to-many navigation property [[customElement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_ELEMENT: Link<FormCompetency, FormCustomElement>;
    /**
     * Static representation of the one-to-one navigation property [[itemConfiguration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_CONFIGURATION: OneToOneLink<FormCompetency, FormItemConfiguration>;
    /**
     * Static representation of the one-to-one navigation property [[officialRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFICIAL_RATING: OneToOneLink<FormCompetency, FormUserRatingComment>;
    /**
     * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OTHERS_RATING_COMMENT: Link<FormCompetency, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATING_COMMENT: OneToOneLink<FormCompetency, FormUserRatingComment>;
    /**
     * All fields of the FormCompetency entity.
     */
    const _allFields: Array<StringField<FormCompetency> | BigNumberField<FormCompetency> | NumberField<FormCompetency> | Link<FormCompetency, FormCompetencyBehavior> | Link<FormCompetency, FormCustomElement> | OneToOneLink<FormCompetency, FormItemConfiguration> | OneToOneLink<FormCompetency, FormUserRatingComment> | Link<FormCompetency, FormUserRatingComment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormCompetency>;
    /**
     * All key fields of the FormCompetency entity.
     */
    const _keyFields: Array<Selectable<FormCompetency>>;
    /**
     * Mapping of all key field names to the respective static field property FormCompetency.
     */
    const _keys: {
        [keys: string]: Selectable<FormCompetency>;
    };
}
//# sourceMappingURL=FormCompetency.d.ts.map