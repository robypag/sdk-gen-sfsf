import { TrendData_SysOverallPotentialRequestBuilder } from './TrendData_SysOverallPotentialRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TrendData_SysOverallPotential" of service "SFOData".
 */
export declare class TrendData_SysOverallPotential extends Entity implements TrendData_SysOverallPotentialType {
    /**
     * Technical entity name for TrendData_SysOverallPotential.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TrendData_SysOverallPotential.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Description.
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
     * Maximum Scale Rating.
     * @nullable
     */
    max?: number;
    /**
     * Minimum Scale Rating.
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
     * Returns an entity builder to construct instances `TrendData_SysOverallPotential`.
     * @returns A builder that constructs instances of entity type `TrendData_SysOverallPotential`.
     */
    static builder(): EntityBuilderType<TrendData_SysOverallPotential, TrendData_SysOverallPotentialTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TrendData_SysOverallPotential` entity type.
     * @returns A `TrendData_SysOverallPotential` request builder.
     */
    static requestBuilder(): TrendData_SysOverallPotentialRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TrendData_SysOverallPotential`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TrendData_SysOverallPotential`.
     */
    static customField(fieldName: string): CustomField<TrendData_SysOverallPotential>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface TrendData_SysOverallPotentialType {
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
export interface TrendData_SysOverallPotentialTypeForceMandatory {
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
export declare namespace TrendData_SysOverallPotential {
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<TrendData_SysOverallPotential>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<TrendData_SysOverallPotential>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<TrendData_SysOverallPotential>;
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL: StringField<TrendData_SysOverallPotential>;
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED: DateField<TrendData_SysOverallPotential>;
    /**
     * Static representation of the [[max]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX: NumberField<TrendData_SysOverallPotential>;
    /**
     * Static representation of the [[min]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIN: NumberField<TrendData_SysOverallPotential>;
    /**
     * Static representation of the [[module]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODULE: StringField<TrendData_SysOverallPotential>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<TrendData_SysOverallPotential>;
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING: NumberField<TrendData_SysOverallPotential>;
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE: StringField<TrendData_SysOverallPotential>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<TrendData_SysOverallPotential>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<TrendData_SysOverallPotential>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<TrendData_SysOverallPotential, User>;
    /**
     * All fields of the TrendData_SysOverallPotential entity.
     */
    const _allFields: Array<StringField<TrendData_SysOverallPotential> | DateField<TrendData_SysOverallPotential> | BigNumberField<TrendData_SysOverallPotential> | NumberField<TrendData_SysOverallPotential> | OneToOneLink<TrendData_SysOverallPotential, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TrendData_SysOverallPotential>;
    /**
     * All key fields of the TrendData_SysOverallPotential entity.
     */
    const _keyFields: Array<Selectable<TrendData_SysOverallPotential>>;
    /**
     * Mapping of all key field names to the respective static field property TrendData_SysOverallPotential.
     */
    const _keys: {
        [keys: string]: Selectable<TrendData_SysOverallPotential>;
    };
}
//# sourceMappingURL=TrendData_SysOverallPotential.d.ts.map