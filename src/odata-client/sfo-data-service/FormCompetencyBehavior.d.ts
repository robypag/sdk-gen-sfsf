import { FormCompetencyBehaviorRequestBuilder } from './FormCompetencyBehaviorRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormCompetencyBehavior" of service "SFOData".
 */
export declare class FormCompetencyBehavior extends Entity implements FormCompetencyBehaviorType {
    /**
     * Technical entity name for FormCompetencyBehavior.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormCompetencyBehavior.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * behaviorId.
     */
    behaviorId: BigNumber;
    /**
     * behaviorIndex.
     * @nullable
     */
    behaviorIndex?: BigNumber;
    /**
     * behaviorName.
     * @nullable
     */
    behaviorName?: string;
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
     * sectionIndex.
     */
    sectionIndex: number;
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
     * One-to-one navigation property to the [[FormBehaviorRatingComment]] entity.
     */
    officialRating: FormBehaviorRatingComment;
    /**
     * One-to-many navigation property to the [[FormBehaviorRatingComment]] entity.
     */
    othersRatingComment: FormBehaviorRatingComment[];
    /**
     * One-to-one navigation property to the [[FormBehaviorRatingComment]] entity.
     */
    selfRatingComment: FormBehaviorRatingComment;
    /**
     * Returns an entity builder to construct instances `FormCompetencyBehavior`.
     * @returns A builder that constructs instances of entity type `FormCompetencyBehavior`.
     */
    static builder(): EntityBuilderType<FormCompetencyBehavior, FormCompetencyBehaviorTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormCompetencyBehavior` entity type.
     * @returns A `FormCompetencyBehavior` request builder.
     */
    static requestBuilder(): FormCompetencyBehaviorRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormCompetencyBehavior`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormCompetencyBehavior`.
     */
    static customField(fieldName: string): CustomField<FormCompetencyBehavior>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormBehaviorRatingComment, FormBehaviorRatingCommentType } from './FormBehaviorRatingComment';
export interface FormCompetencyBehaviorType {
    behaviorId: BigNumber;
    behaviorIndex?: BigNumber;
    behaviorName?: string;
    category?: string;
    description?: string;
    expectedRating?: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    sectionIndex: number;
    weight?: string;
    weightKey?: string;
    officialRating: FormBehaviorRatingCommentType;
    othersRatingComment: FormBehaviorRatingCommentType[];
    selfRatingComment: FormBehaviorRatingCommentType;
}
export interface FormCompetencyBehaviorTypeForceMandatory {
    behaviorId: BigNumber;
    behaviorIndex: BigNumber;
    behaviorName: string;
    category: string;
    description: string;
    expectedRating: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    sectionIndex: number;
    weight: string;
    weightKey: string;
    officialRating: FormBehaviorRatingCommentType;
    othersRatingComment: FormBehaviorRatingCommentType[];
    selfRatingComment: FormBehaviorRatingCommentType;
}
export declare namespace FormCompetencyBehavior {
    /**
     * Static representation of the [[behaviorId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BEHAVIOR_ID: BigNumberField<FormCompetencyBehavior>;
    /**
     * Static representation of the [[behaviorIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BEHAVIOR_INDEX: BigNumberField<FormCompetencyBehavior>;
    /**
     * Static representation of the [[behaviorName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BEHAVIOR_NAME: StringField<FormCompetencyBehavior>;
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: StringField<FormCompetencyBehavior>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FormCompetencyBehavior>;
    /**
     * Static representation of the [[expectedRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_RATING: StringField<FormCompetencyBehavior>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormCompetencyBehavior>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormCompetencyBehavior>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: BigNumberField<FormCompetencyBehavior>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormCompetencyBehavior>;
    /**
     * Static representation of the [[weight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT: StringField<FormCompetencyBehavior>;
    /**
     * Static representation of the [[weightKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_KEY: StringField<FormCompetencyBehavior>;
    /**
     * Static representation of the one-to-one navigation property [[officialRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFICIAL_RATING: OneToOneLink<FormCompetencyBehavior, FormBehaviorRatingComment>;
    /**
     * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OTHERS_RATING_COMMENT: Link<FormCompetencyBehavior, FormBehaviorRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATING_COMMENT: OneToOneLink<FormCompetencyBehavior, FormBehaviorRatingComment>;
    /**
     * All fields of the FormCompetencyBehavior entity.
     */
    const _allFields: Array<BigNumberField<FormCompetencyBehavior> | StringField<FormCompetencyBehavior> | NumberField<FormCompetencyBehavior> | OneToOneLink<FormCompetencyBehavior, FormBehaviorRatingComment> | Link<FormCompetencyBehavior, FormBehaviorRatingComment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormCompetencyBehavior>;
    /**
     * All key fields of the FormCompetencyBehavior entity.
     */
    const _keyFields: Array<Selectable<FormCompetencyBehavior>>;
    /**
     * Mapping of all key field names to the respective static field property FormCompetencyBehavior.
     */
    const _keys: {
        [keys: string]: Selectable<FormCompetencyBehavior>;
    };
}
//# sourceMappingURL=FormCompetencyBehavior.d.ts.map