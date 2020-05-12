import { RcmCompetencyRequestBuilder } from './RcmCompetencyRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "RcmCompetency" of service "SFOData".
 */
export declare class RcmCompetency extends Entity implements RcmCompetencyType {
    /**
     * Technical entity name for RcmCompetency.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RcmCompetency.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Category.
     */
    category: string;
    /**
     * Common Competency Id.
     */
    commonCompetencyId: BigNumber;
    /**
     * Description.
     */
    description: string;
    /**
     * Locale.
     */
    locale: string;
    /**
     * Name.
     */
    name: string;
    /**
     * RCM Competency Id.
     */
    rcmCompetencyId: BigNumber;
    /**
     * Source.
     */
    source: string;
    /**
     * Type.
     */
    type: string;
    /**
     * Returns an entity builder to construct instances `RcmCompetency`.
     * @returns A builder that constructs instances of entity type `RcmCompetency`.
     */
    static builder(): EntityBuilderType<RcmCompetency, RcmCompetencyTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `RcmCompetency` entity type.
     * @returns A `RcmCompetency` request builder.
     */
    static requestBuilder(): RcmCompetencyRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RcmCompetency`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RcmCompetency`.
     */
    static customField(fieldName: string): CustomField<RcmCompetency>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface RcmCompetencyType {
    category: string;
    commonCompetencyId: BigNumber;
    description: string;
    locale: string;
    name: string;
    rcmCompetencyId: BigNumber;
    source: string;
    type: string;
}
export interface RcmCompetencyTypeForceMandatory {
    category: string;
    commonCompetencyId: BigNumber;
    description: string;
    locale: string;
    name: string;
    rcmCompetencyId: BigNumber;
    source: string;
    type: string;
}
export declare namespace RcmCompetency {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: StringField<RcmCompetency>;
    /**
     * Static representation of the [[commonCompetencyId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMON_COMPETENCY_ID: BigNumberField<RcmCompetency>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<RcmCompetency>;
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALE: StringField<RcmCompetency>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<RcmCompetency>;
    /**
     * Static representation of the [[rcmCompetencyId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RCM_COMPETENCY_ID: BigNumberField<RcmCompetency>;
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE: StringField<RcmCompetency>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<RcmCompetency>;
    /**
     * All fields of the RcmCompetency entity.
     */
    const _allFields: Array<StringField<RcmCompetency> | BigNumberField<RcmCompetency>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<RcmCompetency>;
    /**
     * All key fields of the RcmCompetency entity.
     */
    const _keyFields: Array<Selectable<RcmCompetency>>;
    /**
     * Mapping of all key field names to the respective static field property RcmCompetency.
     */
    const _keys: {
        [keys: string]: Selectable<RcmCompetency>;
    };
}
//# sourceMappingURL=RcmCompetency.d.ts.map