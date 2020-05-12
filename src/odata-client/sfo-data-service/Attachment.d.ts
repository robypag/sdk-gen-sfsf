import { AttachmentRequestBuilder } from './AttachmentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BinaryField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Attachment" of service "SFOData".
 */
export declare class Attachment extends Entity implements AttachmentType {
    /**
     * Technical entity name for Attachment.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Attachment.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * attachmentId.
     */
    attachmentId: BigNumber;
    /**
     * country.
     * Maximum length: 256.
     * @nullable
     */
    country?: string;
    /**
     * createdDate.
     */
    createdDate: Moment;
    /**
     * deletable.
     */
    deletable: boolean;
    /**
     * deprecable.
     */
    deprecable: boolean;
    /**
     * description.
     * Maximum length: 4000.
     * @nullable
     */
    description?: string;
    /**
     * documentCategory.
     * Maximum length: 256.
     * @nullable
     */
    documentCategory?: string;
    /**
     * documentEntityId.
     * Maximum length: 256.
     * @nullable
     */
    documentEntityId?: string;
    /**
     * documentEntityType.
     * Maximum length: 256.
     * @nullable
     */
    documentEntityType?: string;
    /**
     * documentType.
     * Maximum length: 256.
     * @nullable
     */
    documentType?: string;
    /**
     * externalId.
     * @nullable
     */
    externalId?: BigNumber;
    /**
     * fileContent.
     */
    fileContent: string;
    /**
     * fileExtension.
     * Maximum length: 5.
     */
    fileExtension: string;
    /**
     * fileName.
     * Maximum length: 256.
     */
    fileName: string;
    /**
     * fileSize.
     */
    fileSize: number;
    /**
     * imageConvertInProgress.
     */
    imageConvertInProgress: boolean;
    /**
     * language.
     * Maximum length: 256.
     * @nullable
     */
    language?: string;
    /**
     * lastAccessed.
     * @nullable
     */
    lastAccessed?: Moment;
    /**
     * lastModifiedDateTime.
     */
    lastModifiedDateTime: Moment;
    /**
     * mimeType.
     * Maximum length: 256.
     */
    mimeType: string;
    /**
     * module.
     * Maximum length: 100.
     */
    module: string;
    /**
     * moduleCategory.
     * Maximum length: 100.
     * @nullable
     */
    moduleCategory?: string;
    /**
     * ownerId.
     * Maximum length: 255.
     * @nullable
     */
    ownerId?: string;
    /**
     * ownerIdType.
     * Maximum length: 100.
     * @nullable
     */
    ownerIdType?: string;
    /**
     * piiFlag.
     * @nullable
     */
    piiFlag?: number;
    /**
     * searchable.
     */
    searchable: boolean;
    /**
     * softDelete.
     */
    softDelete: boolean;
    /**
     * userId.
     * Maximum length: 100.
     * @nullable
     */
    userId?: string;
    /**
     * viewable.
     */
    viewable: boolean;
    /**
     * One-to-one navigation property to the [[Candidate]] entity.
     */
    candidateNav: Candidate;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userNav: User;
    /**
     * Returns an entity builder to construct instances `Attachment`.
     * @returns A builder that constructs instances of entity type `Attachment`.
     */
    static builder(): EntityBuilderType<Attachment, AttachmentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Attachment` entity type.
     * @returns A `Attachment` request builder.
     */
    static requestBuilder(): AttachmentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Attachment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Attachment`.
     */
    static customField(fieldName: string): CustomField<Attachment>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Candidate, CandidateType } from './Candidate';
import { User, UserType } from './User';
export interface AttachmentType {
    attachmentId: BigNumber;
    country?: string;
    createdDate: Moment;
    deletable: boolean;
    deprecable: boolean;
    description?: string;
    documentCategory?: string;
    documentEntityId?: string;
    documentEntityType?: string;
    documentType?: string;
    externalId?: BigNumber;
    fileContent: string;
    fileExtension: string;
    fileName: string;
    fileSize: number;
    imageConvertInProgress: boolean;
    language?: string;
    lastAccessed?: Moment;
    lastModifiedDateTime: Moment;
    mimeType: string;
    module: string;
    moduleCategory?: string;
    ownerId?: string;
    ownerIdType?: string;
    piiFlag?: number;
    searchable: boolean;
    softDelete: boolean;
    userId?: string;
    viewable: boolean;
    candidateNav: CandidateType;
    userNav: UserType;
}
export interface AttachmentTypeForceMandatory {
    attachmentId: BigNumber;
    country: string;
    createdDate: Moment;
    deletable: boolean;
    deprecable: boolean;
    description: string;
    documentCategory: string;
    documentEntityId: string;
    documentEntityType: string;
    documentType: string;
    externalId: BigNumber;
    fileContent: string;
    fileExtension: string;
    fileName: string;
    fileSize: number;
    imageConvertInProgress: boolean;
    language: string;
    lastAccessed: Moment;
    lastModifiedDateTime: Moment;
    mimeType: string;
    module: string;
    moduleCategory: string;
    ownerId: string;
    ownerIdType: string;
    piiFlag: number;
    searchable: boolean;
    softDelete: boolean;
    userId: string;
    viewable: boolean;
    candidateNav: CandidateType;
    userNav: UserType;
}
export declare namespace Attachment {
    /**
     * Static representation of the [[attachmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ID: BigNumberField<Attachment>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<Attachment>;
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE: DateField<Attachment>;
    /**
     * Static representation of the [[deletable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELETABLE: BooleanField<Attachment>;
    /**
     * Static representation of the [[deprecable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPRECABLE: BooleanField<Attachment>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<Attachment>;
    /**
     * Static representation of the [[documentCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_CATEGORY: StringField<Attachment>;
    /**
     * Static representation of the [[documentEntityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_ENTITY_ID: StringField<Attachment>;
    /**
     * Static representation of the [[documentEntityType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_ENTITY_TYPE: StringField<Attachment>;
    /**
     * Static representation of the [[documentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_TYPE: StringField<Attachment>;
    /**
     * Static representation of the [[externalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_ID: BigNumberField<Attachment>;
    /**
     * Static representation of the [[fileContent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILE_CONTENT: BinaryField<Attachment>;
    /**
     * Static representation of the [[fileExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILE_EXTENSION: StringField<Attachment>;
    /**
     * Static representation of the [[fileName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILE_NAME: StringField<Attachment>;
    /**
     * Static representation of the [[fileSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILE_SIZE: NumberField<Attachment>;
    /**
     * Static representation of the [[imageConvertInProgress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IMAGE_CONVERT_IN_PROGRESS: BooleanField<Attachment>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: StringField<Attachment>;
    /**
     * Static representation of the [[lastAccessed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_ACCESSED: DateField<Attachment>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<Attachment>;
    /**
     * Static representation of the [[mimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIME_TYPE: StringField<Attachment>;
    /**
     * Static representation of the [[module]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODULE: StringField<Attachment>;
    /**
     * Static representation of the [[moduleCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODULE_CATEGORY: StringField<Attachment>;
    /**
     * Static representation of the [[ownerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER_ID: StringField<Attachment>;
    /**
     * Static representation of the [[ownerIdType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER_ID_TYPE: StringField<Attachment>;
    /**
     * Static representation of the [[piiFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PII_FLAG: NumberField<Attachment>;
    /**
     * Static representation of the [[searchable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEARCHABLE: BooleanField<Attachment>;
    /**
     * Static representation of the [[softDelete]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOFT_DELETE: BooleanField<Attachment>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Attachment>;
    /**
     * Static representation of the [[viewable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VIEWABLE: BooleanField<Attachment>;
    /**
     * Static representation of the one-to-one navigation property [[candidateNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_NAV: OneToOneLink<Attachment, Candidate>;
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAV: OneToOneLink<Attachment, User>;
    /**
     * All fields of the Attachment entity.
     */
    const _allFields: Array<BigNumberField<Attachment> | StringField<Attachment> | DateField<Attachment> | BooleanField<Attachment> | BinaryField<Attachment> | NumberField<Attachment> | OneToOneLink<Attachment, Candidate> | OneToOneLink<Attachment, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Attachment>;
    /**
     * All key fields of the Attachment entity.
     */
    const _keyFields: Array<Selectable<Attachment>>;
    /**
     * Mapping of all key field names to the respective static field property Attachment.
     */
    const _keys: {
        [keys: string]: Selectable<Attachment>;
    };
}
//# sourceMappingURL=Attachment.d.ts.map