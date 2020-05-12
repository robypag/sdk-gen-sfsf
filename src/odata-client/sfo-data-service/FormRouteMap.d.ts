import { FormRouteMapRequestBuilder } from './FormRouteMapRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormRouteMap" of service "SFOData".
 */
export declare class FormRouteMap extends Entity implements FormRouteMapType {
    /**
     * Technical entity name for FormRouteMap.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormRouteMap.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * routeId.
     * @nullable
     */
    routeId?: number;
    /**
     * routeName.
     * @nullable
     */
    routeName?: string;
    /**
     * One-to-many navigation property to the [[FormRouteStep]] entity.
     */
    routeStep: FormRouteStep[];
    /**
     * Returns an entity builder to construct instances `FormRouteMap`.
     * @returns A builder that constructs instances of entity type `FormRouteMap`.
     */
    static builder(): EntityBuilderType<FormRouteMap, FormRouteMapTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormRouteMap` entity type.
     * @returns A `FormRouteMap` request builder.
     */
    static requestBuilder(): FormRouteMapRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormRouteMap`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormRouteMap`.
     */
    static customField(fieldName: string): CustomField<FormRouteMap>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormRouteStep, FormRouteStepType } from './FormRouteStep';
export interface FormRouteMapType {
    formDataId: BigNumber;
    routeId?: number;
    routeName?: string;
    routeStep: FormRouteStepType[];
}
export interface FormRouteMapTypeForceMandatory {
    formDataId: BigNumber;
    routeId: number;
    routeName: string;
    routeStep: FormRouteStepType[];
}
export declare namespace FormRouteMap {
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormRouteMap>;
    /**
     * Static representation of the [[routeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUTE_ID: NumberField<FormRouteMap>;
    /**
     * Static representation of the [[routeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUTE_NAME: StringField<FormRouteMap>;
    /**
     * Static representation of the one-to-many navigation property [[routeStep]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUTE_STEP: Link<FormRouteMap, FormRouteStep>;
    /**
     * All fields of the FormRouteMap entity.
     */
    const _allFields: Array<BigNumberField<FormRouteMap> | NumberField<FormRouteMap> | StringField<FormRouteMap> | Link<FormRouteMap, FormRouteStep>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormRouteMap>;
    /**
     * All key fields of the FormRouteMap entity.
     */
    const _keyFields: Array<Selectable<FormRouteMap>>;
    /**
     * Mapping of all key field names to the respective static field property FormRouteMap.
     */
    const _keys: {
        [keys: string]: Selectable<FormRouteMap>;
    };
}
//# sourceMappingURL=FormRouteMap.d.ts.map