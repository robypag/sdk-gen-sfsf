import { FormObjectiveRequestBuilder } from './FormObjectiveRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormObjective" of service "SFOData".
 */
export declare class FormObjective extends Entity implements FormObjectiveType {
    /**
     * Technical entity name for FormObjective.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjective.
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
     * done.
     * @nullable
     */
    done?: string;
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
     * itemOrder.
     * @nullable
     */
    itemOrder?: number;
    /**
     * metric.
     * @nullable
     */
    metric?: string;
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
     * state.
     * @nullable
     */
    state?: string;
    /**
     * stateColor.
     * @nullable
     */
    stateColor?: string;
    /**
     * useMLTRating.
     * @nullable
     */
    useMltRating?: boolean;
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
     * One-to-many navigation property to the [[FormObjectiveComment]] entity.
     */
    comments: FormObjectiveComment[];
    /**
     * One-to-many navigation property to the [[FormCustomElement]] entity.
     */
    customElement: FormCustomElement[];
    /**
     * One-to-one navigation property to the [[FormItemConfiguration]] entity.
     */
    itemConfiguration: FormItemConfiguration;
    /**
     * One-to-many navigation property to the [[FormObjectiveDetails]] entity.
     */
    metricLookupTables: FormObjectiveDetails[];
    /**
     * One-to-many navigation property to the [[FormObjectiveDetails]] entity.
     */
    milestones: FormObjectiveDetails[];
    /**
     * One-to-many navigation property to the [[FormObjectiveDetails]] entity.
     */
    objectiveDetails: FormObjectiveDetails[];
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    officialRating: FormUserRatingComment;
    /**
     * One-to-one navigation property to the [[FormObjectiveOtherDetails]] entity.
     */
    otherDetails: FormObjectiveOtherDetails;
    /**
     * One-to-many navigation property to the [[FormUserRatingComment]] entity.
     */
    othersRatingComment: FormUserRatingComment[];
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    selfRatingComment: FormUserRatingComment;
    /**
     * One-to-many navigation property to the [[FormObjectiveDetails]] entity.
     */
    targets: FormObjectiveDetails[];
    /**
     * One-to-many navigation property to the [[FormObjectiveDetails]] entity.
     */
    tasks: FormObjectiveDetails[];
    /**
     * Returns an entity builder to construct instances `FormObjective`.
     * @returns A builder that constructs instances of entity type `FormObjective`.
     */
    static builder(): EntityBuilderType<FormObjective, FormObjectiveTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormObjective` entity type.
     * @returns A `FormObjective` request builder.
     */
    static requestBuilder(): FormObjectiveRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjective`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjective`.
     */
    static customField(fieldName: string): CustomField<FormObjective>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormObjectiveComment, FormObjectiveCommentType } from './FormObjectiveComment';
import { FormCustomElement, FormCustomElementType } from './FormCustomElement';
import { FormItemConfiguration, FormItemConfigurationType } from './FormItemConfiguration';
import { FormObjectiveDetails, FormObjectiveDetailsType } from './FormObjectiveDetails';
import { FormUserRatingComment, FormUserRatingCommentType } from './FormUserRatingComment';
import { FormObjectiveOtherDetails, FormObjectiveOtherDetailsType } from './FormObjectiveOtherDetails';
export interface FormObjectiveType {
    assignments?: string;
    category?: string;
    done?: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    itemOrder?: number;
    metric?: string;
    name?: string;
    sectionIndex: number;
    state?: string;
    stateColor?: string;
    useMltRating?: boolean;
    weight?: string;
    weightKey?: string;
    comments: FormObjectiveCommentType[];
    customElement: FormCustomElementType[];
    itemConfiguration: FormItemConfigurationType;
    metricLookupTables: FormObjectiveDetailsType[];
    milestones: FormObjectiveDetailsType[];
    objectiveDetails: FormObjectiveDetailsType[];
    officialRating: FormUserRatingCommentType;
    otherDetails: FormObjectiveOtherDetailsType;
    othersRatingComment: FormUserRatingCommentType[];
    selfRatingComment: FormUserRatingCommentType;
    targets: FormObjectiveDetailsType[];
    tasks: FormObjectiveDetailsType[];
}
export interface FormObjectiveTypeForceMandatory {
    assignments: string;
    category: string;
    done: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    itemOrder: number;
    metric: string;
    name: string;
    sectionIndex: number;
    state: string;
    stateColor: string;
    useMltRating: boolean;
    weight: string;
    weightKey: string;
    comments: FormObjectiveCommentType[];
    customElement: FormCustomElementType[];
    itemConfiguration: FormItemConfigurationType;
    metricLookupTables: FormObjectiveDetailsType[];
    milestones: FormObjectiveDetailsType[];
    objectiveDetails: FormObjectiveDetailsType[];
    officialRating: FormUserRatingCommentType;
    otherDetails: FormObjectiveOtherDetailsType;
    othersRatingComment: FormUserRatingCommentType[];
    selfRatingComment: FormUserRatingCommentType;
    targets: FormObjectiveDetailsType[];
    tasks: FormObjectiveDetailsType[];
}
export declare namespace FormObjective {
    /**
     * Static representation of the [[assignments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSIGNMENTS: StringField<FormObjective>;
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: StringField<FormObjective>;
    /**
     * Static representation of the [[done]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DONE: StringField<FormObjective>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormObjective>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormObjective>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: BigNumberField<FormObjective>;
    /**
     * Static representation of the [[itemOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ORDER: NumberField<FormObjective>;
    /**
     * Static representation of the [[metric]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const METRIC: StringField<FormObjective>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FormObjective>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormObjective>;
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: StringField<FormObjective>;
    /**
     * Static representation of the [[stateColor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE_COLOR: StringField<FormObjective>;
    /**
     * Static representation of the [[useMltRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USE_MLT_RATING: BooleanField<FormObjective>;
    /**
     * Static representation of the [[weight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT: StringField<FormObjective>;
    /**
     * Static representation of the [[weightKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_KEY: StringField<FormObjective>;
    /**
     * Static representation of the one-to-many navigation property [[comments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTS: Link<FormObjective, FormObjectiveComment>;
    /**
     * Static representation of the one-to-many navigation property [[customElement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_ELEMENT: Link<FormObjective, FormCustomElement>;
    /**
     * Static representation of the one-to-one navigation property [[itemConfiguration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_CONFIGURATION: OneToOneLink<FormObjective, FormItemConfiguration>;
    /**
     * Static representation of the one-to-many navigation property [[metricLookupTables]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const METRIC_LOOKUP_TABLES: Link<FormObjective, FormObjectiveDetails>;
    /**
     * Static representation of the one-to-many navigation property [[milestones]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MILESTONES: Link<FormObjective, FormObjectiveDetails>;
    /**
     * Static representation of the one-to-many navigation property [[objectiveDetails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECTIVE_DETAILS: Link<FormObjective, FormObjectiveDetails>;
    /**
     * Static representation of the one-to-one navigation property [[officialRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFICIAL_RATING: OneToOneLink<FormObjective, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[otherDetails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OTHER_DETAILS: OneToOneLink<FormObjective, FormObjectiveOtherDetails>;
    /**
     * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OTHERS_RATING_COMMENT: Link<FormObjective, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATING_COMMENT: OneToOneLink<FormObjective, FormUserRatingComment>;
    /**
     * Static representation of the one-to-many navigation property [[targets]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGETS: Link<FormObjective, FormObjectiveDetails>;
    /**
     * Static representation of the one-to-many navigation property [[tasks]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TASKS: Link<FormObjective, FormObjectiveDetails>;
    /**
     * All fields of the FormObjective entity.
     */
    const _allFields: Array<StringField<FormObjective> | BigNumberField<FormObjective> | NumberField<FormObjective> | BooleanField<FormObjective> | Link<FormObjective, FormObjectiveComment> | Link<FormObjective, FormCustomElement> | OneToOneLink<FormObjective, FormItemConfiguration> | Link<FormObjective, FormObjectiveDetails> | OneToOneLink<FormObjective, FormUserRatingComment> | OneToOneLink<FormObjective, FormObjectiveOtherDetails> | Link<FormObjective, FormUserRatingComment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormObjective>;
    /**
     * All key fields of the FormObjective entity.
     */
    const _keyFields: Array<Selectable<FormObjective>>;
    /**
     * Mapping of all key field names to the respective static field property FormObjective.
     */
    const _keys: {
        [keys: string]: Selectable<FormObjective>;
    };
}
//# sourceMappingURL=FormObjective.d.ts.map