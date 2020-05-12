import { EpProfilePortletRequestBuilder } from './EpProfilePortletRequestBuilder';
import { AllFields, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EPProfilePortlet" of service "SFOData".
 */
export declare class EpProfilePortlet extends Entity implements EpProfilePortletType {
    /**
     * Technical entity name for EpProfilePortlet.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EpProfilePortlet.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * backgruond Element Id.
     * @nullable
     */
    backgroundElementId?: string;
    /**
     * dashboard Id.
     */
    dashboardId: string;
    /**
     * entity Name.
     * @nullable
     */
    entityName?: string;
    /**
     * instructional Text.
     * @nullable
     */
    instructionalText?: string;
    /**
     * is Editable.
     * @nullable
     */
    isEditable?: boolean;
    /**
     * is Feedback Portlet.
     * @nullable
     */
    isFeedbackPortlet?: boolean;
    /**
     * portlet Id.
     */
    portletId: string;
    /**
     * portlet Label.
     * @nullable
     */
    portletLabel?: string;
    /**
     * portlet Type.
     * @nullable
     */
    portletType?: number;
    /**
     * user Id.
     */
    userId: string;
    /**
     * Returns an entity builder to construct instances `EpProfilePortlet`.
     * @returns A builder that constructs instances of entity type `EpProfilePortlet`.
     */
    static builder(): EntityBuilderType<EpProfilePortlet, EpProfilePortletTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EpProfilePortlet` entity type.
     * @returns A `EpProfilePortlet` request builder.
     */
    static requestBuilder(): EpProfilePortletRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EpProfilePortlet`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EpProfilePortlet`.
     */
    static customField(fieldName: string): CustomField<EpProfilePortlet>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface EpProfilePortletType {
    backgroundElementId?: string;
    dashboardId: string;
    entityName?: string;
    instructionalText?: string;
    isEditable?: boolean;
    isFeedbackPortlet?: boolean;
    portletId: string;
    portletLabel?: string;
    portletType?: number;
    userId: string;
}
export interface EpProfilePortletTypeForceMandatory {
    backgroundElementId: string;
    dashboardId: string;
    entityName: string;
    instructionalText: string;
    isEditable: boolean;
    isFeedbackPortlet: boolean;
    portletId: string;
    portletLabel: string;
    portletType: number;
    userId: string;
}
export declare namespace EpProfilePortlet {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: StringField<EpProfilePortlet>;
    /**
     * Static representation of the [[dashboardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DASHBOARD_ID: StringField<EpProfilePortlet>;
    /**
     * Static representation of the [[entityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENTITY_NAME: StringField<EpProfilePortlet>;
    /**
     * Static representation of the [[instructionalText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTRUCTIONAL_TEXT: StringField<EpProfilePortlet>;
    /**
     * Static representation of the [[isEditable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_EDITABLE: BooleanField<EpProfilePortlet>;
    /**
     * Static representation of the [[isFeedbackPortlet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_FEEDBACK_PORTLET: BooleanField<EpProfilePortlet>;
    /**
     * Static representation of the [[portletId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PORTLET_ID: StringField<EpProfilePortlet>;
    /**
     * Static representation of the [[portletLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PORTLET_LABEL: StringField<EpProfilePortlet>;
    /**
     * Static representation of the [[portletType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PORTLET_TYPE: NumberField<EpProfilePortlet>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EpProfilePortlet>;
    /**
     * All fields of the EpProfilePortlet entity.
     */
    const _allFields: Array<StringField<EpProfilePortlet> | BooleanField<EpProfilePortlet> | NumberField<EpProfilePortlet>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EpProfilePortlet>;
    /**
     * All key fields of the EpProfilePortlet entity.
     */
    const _keyFields: Array<Selectable<EpProfilePortlet>>;
    /**
     * Mapping of all key field names to the respective static field property EpProfilePortlet.
     */
    const _keys: {
        [keys: string]: Selectable<EpProfilePortlet>;
    };
}
//# sourceMappingURL=EpProfilePortlet.d.ts.map