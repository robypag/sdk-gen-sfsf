import { SuccessStoreContentRequestBuilder } from './SuccessStoreContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SuccessStoreContent" of service "SFOData".
 */
export declare class SuccessStoreContent extends Entity implements SuccessStoreContentType {
    /**
     * Technical entity name for SuccessStoreContent.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SuccessStoreContent.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * bestPractice.
     * @nullable
     */
    bestPractice?: boolean;
    /**
     * comments.
     * @nullable
     */
    comments?: string;
    /**
     * contentId.
     */
    contentId: BigNumber;
    /**
     * contentType.
     * @nullable
     */
    contentType?: string;
    /**
     * customField.
     * @nullable
     */
    customField?: string;
    /**
     * defaultContent.
     * @nullable
     */
    defaultContent?: boolean;
    /**
     * defaultContentName.
     * @nullable
     */
    defaultContentName?: string;
    /**
     * domain.
     * @nullable
     */
    domain?: string;
    /**
     * expiryOnDate.
     * @nullable
     */
    expiryOnDate?: Moment;
    /**
     * publishOnDate.
     * @nullable
     */
    publishOnDate?: Moment;
    /**
     * revisionNo.
     * @nullable
     */
    revisionNo?: string;
    /**
     * status.
     * @nullable
     */
    status?: string;
    /**
     * wizardable.
     * @nullable
     */
    wizardable?: boolean;
    /**
     * One-to-one navigation property to the [[SuccessStoreContentBlob]] entity.
     */
    contentData: SuccessStoreContentBlob;
    /**
     * Returns an entity builder to construct instances `SuccessStoreContent`.
     * @returns A builder that constructs instances of entity type `SuccessStoreContent`.
     */
    static builder(): EntityBuilderType<SuccessStoreContent, SuccessStoreContentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SuccessStoreContent` entity type.
     * @returns A `SuccessStoreContent` request builder.
     */
    static requestBuilder(): SuccessStoreContentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SuccessStoreContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SuccessStoreContent`.
     */
    static customField(fieldName: string): CustomField<SuccessStoreContent>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SuccessStoreContentBlob, SuccessStoreContentBlobType } from './SuccessStoreContentBlob';
export interface SuccessStoreContentType {
    bestPractice?: boolean;
    comments?: string;
    contentId: BigNumber;
    contentType?: string;
    customField?: string;
    defaultContent?: boolean;
    defaultContentName?: string;
    domain?: string;
    expiryOnDate?: Moment;
    publishOnDate?: Moment;
    revisionNo?: string;
    status?: string;
    wizardable?: boolean;
    contentData: SuccessStoreContentBlobType;
}
export interface SuccessStoreContentTypeForceMandatory {
    bestPractice: boolean;
    comments: string;
    contentId: BigNumber;
    contentType: string;
    customField: string;
    defaultContent: boolean;
    defaultContentName: string;
    domain: string;
    expiryOnDate: Moment;
    publishOnDate: Moment;
    revisionNo: string;
    status: string;
    wizardable: boolean;
    contentData: SuccessStoreContentBlobType;
}
export declare namespace SuccessStoreContent {
    /**
     * Static representation of the [[bestPractice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BEST_PRACTICE: BooleanField<SuccessStoreContent>;
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTS: StringField<SuccessStoreContent>;
    /**
     * Static representation of the [[contentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTENT_ID: BigNumberField<SuccessStoreContent>;
    /**
     * Static representation of the [[contentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTENT_TYPE: StringField<SuccessStoreContent>;
    /**
     * Static representation of the [[customField]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_FIELD: StringField<SuccessStoreContent>;
    /**
     * Static representation of the [[defaultContent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_CONTENT: BooleanField<SuccessStoreContent>;
    /**
     * Static representation of the [[defaultContentName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_CONTENT_NAME: StringField<SuccessStoreContent>;
    /**
     * Static representation of the [[domain]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOMAIN: StringField<SuccessStoreContent>;
    /**
     * Static representation of the [[expiryOnDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPIRY_ON_DATE: DateField<SuccessStoreContent>;
    /**
     * Static representation of the [[publishOnDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PUBLISH_ON_DATE: DateField<SuccessStoreContent>;
    /**
     * Static representation of the [[revisionNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVISION_NO: StringField<SuccessStoreContent>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<SuccessStoreContent>;
    /**
     * Static representation of the [[wizardable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIZARDABLE: BooleanField<SuccessStoreContent>;
    /**
     * Static representation of the one-to-one navigation property [[contentData]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTENT_DATA: OneToOneLink<SuccessStoreContent, SuccessStoreContentBlob>;
    /**
     * All fields of the SuccessStoreContent entity.
     */
    const _allFields: Array<BooleanField<SuccessStoreContent> | StringField<SuccessStoreContent> | BigNumberField<SuccessStoreContent> | DateField<SuccessStoreContent> | OneToOneLink<SuccessStoreContent, SuccessStoreContentBlob>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SuccessStoreContent>;
    /**
     * All key fields of the SuccessStoreContent entity.
     */
    const _keyFields: Array<Selectable<SuccessStoreContent>>;
    /**
     * Mapping of all key field names to the respective static field property SuccessStoreContent.
     */
    const _keys: {
        [keys: string]: Selectable<SuccessStoreContent>;
    };
}
//# sourceMappingURL=SuccessStoreContent.d.ts.map