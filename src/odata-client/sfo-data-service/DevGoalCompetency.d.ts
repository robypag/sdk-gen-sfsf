import { DevGoalCompetencyRequestBuilder } from './DevGoalCompetencyRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DevGoalCompetency" of service "SFOData".
 */
export declare class DevGoalCompetency extends Entity implements DevGoalCompetencyType {
    /**
     * Technical entity name for DevGoalCompetency.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DevGoalCompetency.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * category.
     * @nullable
     */
    category?: string;
    /**
     * id.
     */
    id: BigNumber;
    /**
     * library.
     * @nullable
     */
    library?: string;
    /**
     * name.
     * @nullable
     */
    name?: string;
    /**
     * objId.
     * @nullable
     */
    objId?: BigNumber;
    /**
     * planId.
     * @nullable
     */
    planId?: BigNumber;
    /**
     * userId.
     * @nullable
     */
    userId?: string;
    /**
     * Returns an entity builder to construct instances `DevGoalCompetency`.
     * @returns A builder that constructs instances of entity type `DevGoalCompetency`.
     */
    static builder(): EntityBuilderType<DevGoalCompetency, DevGoalCompetencyTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DevGoalCompetency` entity type.
     * @returns A `DevGoalCompetency` request builder.
     */
    static requestBuilder(): DevGoalCompetencyRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalCompetency`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DevGoalCompetency`.
     */
    static customField(fieldName: string): CustomField<DevGoalCompetency>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface DevGoalCompetencyType {
    category?: string;
    id: BigNumber;
    library?: string;
    name?: string;
    objId?: BigNumber;
    planId?: BigNumber;
    userId?: string;
}
export interface DevGoalCompetencyTypeForceMandatory {
    category: string;
    id: BigNumber;
    library: string;
    name: string;
    objId: BigNumber;
    planId: BigNumber;
    userId: string;
}
export declare namespace DevGoalCompetency {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: StringField<DevGoalCompetency>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<DevGoalCompetency>;
    /**
     * Static representation of the [[library]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LIBRARY: StringField<DevGoalCompetency>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<DevGoalCompetency>;
    /**
     * Static representation of the [[objId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJ_ID: BigNumberField<DevGoalCompetency>;
    /**
     * Static representation of the [[planId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLAN_ID: BigNumberField<DevGoalCompetency>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<DevGoalCompetency>;
    /**
     * All fields of the DevGoalCompetency entity.
     */
    const _allFields: Array<StringField<DevGoalCompetency> | BigNumberField<DevGoalCompetency>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DevGoalCompetency>;
    /**
     * All key fields of the DevGoalCompetency entity.
     */
    const _keyFields: Array<Selectable<DevGoalCompetency>>;
    /**
     * Mapping of all key field names to the respective static field property DevGoalCompetency.
     */
    const _keys: {
        [keys: string]: Selectable<DevGoalCompetency>;
    };
}
//# sourceMappingURL=DevGoalCompetency.d.ts.map