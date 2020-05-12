import { Background_DocumentsRequestBuilder } from './Background_DocumentsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_Documents" of service "SFOData".
 */
export declare class Background_Documents extends Entity implements Background_DocumentsType {
    /**
     * Technical entity name for Background_Documents.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Documents.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Document Name.
     * @nullable
     */
    docName?: string;
    /**
     * Attachment.
     */
    attachment: number;
    /**
     * backgroundElementId.
     */
    backgroundElementId: BigNumber;
    /**
     * bgOrderPos.
     */
    bgOrderPos: BigNumber;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * userId.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[Attachment]] entity.
     */
    attachmentNav: Attachment;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * Returns an entity builder to construct instances `Background_Documents`.
     * @returns A builder that constructs instances of entity type `Background_Documents`.
     */
    static builder(): EntityBuilderType<Background_Documents, Background_DocumentsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_Documents` entity type.
     * @returns A `Background_Documents` request builder.
     */
    static requestBuilder(): Background_DocumentsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Documents`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Documents`.
     */
    static customField(fieldName: string): CustomField<Background_Documents>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Attachment, AttachmentType } from './Attachment';
import { User, UserType } from './User';
export interface Background_DocumentsType {
    docName?: string;
    attachment: number;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    lastModifiedDate: Moment;
    userId: string;
    attachmentNav: AttachmentType;
    userIdNav: UserType;
}
export interface Background_DocumentsTypeForceMandatory {
    docName: string;
    attachment: number;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    lastModifiedDate: Moment;
    userId: string;
    attachmentNav: AttachmentType;
    userIdNav: UserType;
}
export declare namespace Background_Documents {
    /**
     * Static representation of the [[docName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NAME: StringField<Background_Documents>;
    /**
     * Static representation of the [[attachment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT: NumberField<Background_Documents>;
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Documents>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_Documents>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_Documents>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_Documents>;
    /**
     * Static representation of the one-to-one navigation property [[attachmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_NAV: OneToOneLink<Background_Documents, Attachment>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_Documents, User>;
    /**
     * All fields of the Background_Documents entity.
     */
    const _allFields: Array<StringField<Background_Documents> | NumberField<Background_Documents> | BigNumberField<Background_Documents> | DateField<Background_Documents> | OneToOneLink<Background_Documents, Attachment> | OneToOneLink<Background_Documents, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_Documents>;
    /**
     * All key fields of the Background_Documents entity.
     */
    const _keyFields: Array<Selectable<Background_Documents>>;
    /**
     * Mapping of all key field names to the respective static field property Background_Documents.
     */
    const _keys: {
        [keys: string]: Selectable<Background_Documents>;
    };
}
//# sourceMappingURL=Background_Documents.d.ts.map