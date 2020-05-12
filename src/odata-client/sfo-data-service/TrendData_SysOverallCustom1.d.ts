import { TrendData_SysOverallCustom1RequestBuilder } from './TrendData_SysOverallCustom1RequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TrendData_SysOverallCustom1" of service "SFOData".
 */
export declare class TrendData_SysOverallCustom1 extends Entity implements TrendData_SysOverallCustom1Type {
    /**
     * Technical entity name for TrendData_SysOverallCustom1.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TrendData_SysOverallCustom1.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * description.
     * @nullable
     */
    description?: string;
    /**
     * End Date.
     */
    endDate: Moment;
    /**
     * id.
     */
    id: BigNumber;
    /**
     * Rating Label.
     * @nullable
     */
    label?: string;
    /**
     * Last Modified.
     * @nullable
     */
    lastModified?: Moment;
    /**
     * Maxinum Scale Rating.
     * @nullable
     */
    max?: number;
    /**
     * Mininum Scale Rating.
     * @nullable
     */
    min?: number;
    /**
     * Module.
     * @nullable
     */
    module?: string;
    /**
     * name.
     * @nullable
     */
    name?: string;
    /**
     * Rating.
     */
    rating: number;
    /**
     * Source.
     * @nullable
     */
    source?: string;
    /**
     * Start Date.
     */
    startDate: Moment;
    /**
     * userId.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * Returns an entity builder to construct instances `TrendData_SysOverallCustom1`.
     * @returns A builder that constructs instances of entity type `TrendData_SysOverallCustom1`.
     */
    static builder(): EntityBuilderType<TrendData_SysOverallCustom1, TrendData_SysOverallCustom1TypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TrendData_SysOverallCustom1` entity type.
     * @returns A `TrendData_SysOverallCustom1` request builder.
     */
    static requestBuilder(): TrendData_SysOverallCustom1RequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TrendData_SysOverallCustom1`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TrendData_SysOverallCustom1`.
     */
    static customField(fieldName: string): CustomField<TrendData_SysOverallCustom1>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface TrendData_SysOverallCustom1Type {
    description?: string;
    endDate: Moment;
    id: BigNumber;
    label?: string;
    lastModified?: Moment;
    max?: number;
    min?: number;
    module?: string;
    name?: string;
    rating: number;
    source?: string;
    startDate: Moment;
    userId: string;
    userIdNav: UserType;
}
export interface TrendData_SysOverallCustom1TypeForceMandatory {
    description: string;
    endDate: Moment;
    id: BigNumber;
    label: string;
    lastModified: Moment;
    max: number;
    min: number;
    module: string;
    name: string;
    rating: number;
    source: string;
    startDate: Moment;
    userId: string;
    userIdNav: UserType;
}
export declare namespace TrendData_SysOverallCustom1 {
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<TrendData_SysOverallCustom1>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<TrendData_SysOverallCustom1>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<TrendData_SysOverallCustom1>;
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL: StringField<TrendData_SysOverallCustom1>;
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED: DateField<TrendData_SysOverallCustom1>;
    /**
     * Static representation of the [[max]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX: NumberField<TrendData_SysOverallCustom1>;
    /**
     * Static representation of the [[min]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIN: NumberField<TrendData_SysOverallCustom1>;
    /**
     * Static representation of the [[module]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODULE: StringField<TrendData_SysOverallCustom1>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<TrendData_SysOverallCustom1>;
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING: NumberField<TrendData_SysOverallCustom1>;
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE: StringField<TrendData_SysOverallCustom1>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<TrendData_SysOverallCustom1>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<TrendData_SysOverallCustom1>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<TrendData_SysOverallCustom1, User>;
    /**
     * All fields of the TrendData_SysOverallCustom1 entity.
     */
    const _allFields: Array<StringField<TrendData_SysOverallCustom1> | DateField<TrendData_SysOverallCustom1> | BigNumberField<TrendData_SysOverallCustom1> | NumberField<TrendData_SysOverallCustom1> | OneToOneLink<TrendData_SysOverallCustom1, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TrendData_SysOverallCustom1>;
    /**
     * All key fields of the TrendData_SysOverallCustom1 entity.
     */
    const _keyFields: Array<Selectable<TrendData_SysOverallCustom1>>;
    /**
     * Mapping of all key field names to the respective static field property TrendData_SysOverallCustom1.
     */
    const _keys: {
        [keys: string]: Selectable<TrendData_SysOverallCustom1>;
    };
}
//# sourceMappingURL=TrendData_SysOverallCustom1.d.ts.map