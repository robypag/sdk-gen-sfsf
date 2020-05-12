import { FormUserRatingCommentRequestBuilder } from './FormUserRatingCommentRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormUserRatingComment" of service "SFOData".
 */
export declare class FormUserRatingComment extends Entity implements FormUserRatingCommentType {
    /**
     * Technical entity name for FormUserRatingComment.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormUserRatingComment.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * comment.
     * @nullable
     */
    comment?: string;
    /**
     * commentKey.
     * @nullable
     */
    commentKey?: string;
    /**
     * commentLabel.
     * @nullable
     */
    commentLabel?: string;
    /**
     * commentPermission.
     * @nullable
     */
    commentPermission?: string;
    /**
     * firstName.
     * @nullable
     */
    firstName?: string;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * fullName.
     * @nullable
     */
    fullName?: string;
    /**
     * itemId.
     */
    itemId: BigNumber;
    /**
     * lastName.
     * @nullable
     */
    lastName?: string;
    /**
     * rating.
     * @nullable
     */
    rating?: string;
    /**
     * ratingKey.
     * @nullable
     */
    ratingKey?: string;
    /**
     * ratingLabel.
     * @nullable
     */
    ratingLabel?: string;
    /**
     * ratingPermission.
     * @nullable
     */
    ratingPermission?: string;
    /**
     * ratingType.
     */
    ratingType: string;
    /**
     * sectionIndex.
     */
    sectionIndex: number;
    /**
     * textRating.
     * @nullable
     */
    textRating?: string;
    /**
     * userId.
     */
    userId: string;
    /**
     * Returns an entity builder to construct instances `FormUserRatingComment`.
     * @returns A builder that constructs instances of entity type `FormUserRatingComment`.
     */
    static builder(): EntityBuilderType<FormUserRatingComment, FormUserRatingCommentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormUserRatingComment` entity type.
     * @returns A `FormUserRatingComment` request builder.
     */
    static requestBuilder(): FormUserRatingCommentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormUserRatingComment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormUserRatingComment`.
     */
    static customField(fieldName: string): CustomField<FormUserRatingComment>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface FormUserRatingCommentType {
    comment?: string;
    commentKey?: string;
    commentLabel?: string;
    commentPermission?: string;
    firstName?: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    fullName?: string;
    itemId: BigNumber;
    lastName?: string;
    rating?: string;
    ratingKey?: string;
    ratingLabel?: string;
    ratingPermission?: string;
    ratingType: string;
    sectionIndex: number;
    textRating?: string;
    userId: string;
}
export interface FormUserRatingCommentTypeForceMandatory {
    comment: string;
    commentKey: string;
    commentLabel: string;
    commentPermission: string;
    firstName: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    fullName: string;
    itemId: BigNumber;
    lastName: string;
    rating: string;
    ratingKey: string;
    ratingLabel: string;
    ratingPermission: string;
    ratingType: string;
    sectionIndex: number;
    textRating: string;
    userId: string;
}
export declare namespace FormUserRatingComment {
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT: StringField<FormUserRatingComment>;
    /**
     * Static representation of the [[commentKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT_KEY: StringField<FormUserRatingComment>;
    /**
     * Static representation of the [[commentLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT_LABEL: StringField<FormUserRatingComment>;
    /**
     * Static representation of the [[commentPermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT_PERMISSION: StringField<FormUserRatingComment>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: StringField<FormUserRatingComment>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormUserRatingComment>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormUserRatingComment>;
    /**
     * Static representation of the [[fullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FULL_NAME: StringField<FormUserRatingComment>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: BigNumberField<FormUserRatingComment>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: StringField<FormUserRatingComment>;
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING: StringField<FormUserRatingComment>;
    /**
     * Static representation of the [[ratingKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_KEY: StringField<FormUserRatingComment>;
    /**
     * Static representation of the [[ratingLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_LABEL: StringField<FormUserRatingComment>;
    /**
     * Static representation of the [[ratingPermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_PERMISSION: StringField<FormUserRatingComment>;
    /**
     * Static representation of the [[ratingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_TYPE: StringField<FormUserRatingComment>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormUserRatingComment>;
    /**
     * Static representation of the [[textRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEXT_RATING: StringField<FormUserRatingComment>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<FormUserRatingComment>;
    /**
     * All fields of the FormUserRatingComment entity.
     */
    const _allFields: Array<StringField<FormUserRatingComment> | BigNumberField<FormUserRatingComment> | NumberField<FormUserRatingComment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormUserRatingComment>;
    /**
     * All key fields of the FormUserRatingComment entity.
     */
    const _keyFields: Array<Selectable<FormUserRatingComment>>;
    /**
     * Mapping of all key field names to the respective static field property FormUserRatingComment.
     */
    const _keys: {
        [keys: string]: Selectable<FormUserRatingComment>;
    };
}
//# sourceMappingURL=FormUserRatingComment.d.ts.map