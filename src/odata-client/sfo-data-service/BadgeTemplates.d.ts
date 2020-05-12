import { BadgeTemplatesRequestBuilder } from './BadgeTemplatesRequestBuilder';
import { AllFields, BinaryField, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "BadgeTemplates" of service "SFOData".
 */
export declare class BadgeTemplates extends Entity implements BadgeTemplatesType {
    /**
     * Technical entity name for BadgeTemplates.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BadgeTemplates.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * badgeId.
     */
    badgeId: number;
    /**
     * badgeTitle.
     * @nullable
     */
    badgeTitle?: string;
    /**
     * customBadge.
     * @nullable
     */
    customBadge?: boolean;
    /**
     * photo.
     * @nullable
     */
    photo?: string;
    /**
     * Returns an entity builder to construct instances `BadgeTemplates`.
     * @returns A builder that constructs instances of entity type `BadgeTemplates`.
     */
    static builder(): EntityBuilderType<BadgeTemplates, BadgeTemplatesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BadgeTemplates` entity type.
     * @returns A `BadgeTemplates` request builder.
     */
    static requestBuilder(): BadgeTemplatesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BadgeTemplates`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BadgeTemplates`.
     */
    static customField(fieldName: string): CustomField<BadgeTemplates>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BadgeTemplatesType {
    badgeId: number;
    badgeTitle?: string;
    customBadge?: boolean;
    photo?: string;
}
export interface BadgeTemplatesTypeForceMandatory {
    badgeId: number;
    badgeTitle: string;
    customBadge: boolean;
    photo: string;
}
export declare namespace BadgeTemplates {
    /**
     * Static representation of the [[badgeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BADGE_ID: NumberField<BadgeTemplates>;
    /**
     * Static representation of the [[badgeTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BADGE_TITLE: StringField<BadgeTemplates>;
    /**
     * Static representation of the [[customBadge]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_BADGE: BooleanField<BadgeTemplates>;
    /**
     * Static representation of the [[photo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHOTO: BinaryField<BadgeTemplates>;
    /**
     * All fields of the BadgeTemplates entity.
     */
    const _allFields: Array<NumberField<BadgeTemplates> | StringField<BadgeTemplates> | BooleanField<BadgeTemplates> | BinaryField<BadgeTemplates>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BadgeTemplates>;
    /**
     * All key fields of the BadgeTemplates entity.
     */
    const _keyFields: Array<Selectable<BadgeTemplates>>;
    /**
     * Mapping of all key field names to the respective static field property BadgeTemplates.
     */
    const _keys: {
        [keys: string]: Selectable<BadgeTemplates>;
    };
}
//# sourceMappingURL=BadgeTemplates.d.ts.map