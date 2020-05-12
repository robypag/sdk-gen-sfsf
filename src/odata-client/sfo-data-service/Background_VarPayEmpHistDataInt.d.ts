import { Background_VarPayEmpHistDataIntRequestBuilder } from './Background_VarPayEmpHistDataIntRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_VarPayEmpHistDataInt" of service "SFOData".
 */
export declare class Background_VarPayEmpHistDataInt extends Entity implements Background_VarPayEmpHistDataIntType {
    /**
     * Technical entity name for Background_VarPayEmpHistDataInt.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_VarPayEmpHistDataInt.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * backgroundElementId.
     */
    backgroundElementId: BigNumber;
    /**
     * Target Amount.
     * @nullable
     */
    basis?: number;
    /**
     * Country.
     * @nullable
     */
    country?: string;
    /**
     * End Date.
     */
    endDate: Moment;
    /**
     * Incentive Plan.
     * @nullable
     */
    incentivePlan?: string;
    /**
     * Job Grade.
     * @nullable
     */
    jobGrade?: string;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * Currency.
     * @nullable
     */
    localCurrencyCode?: string;
    /**
     * Record Type.
     * @nullable
     */
    recordType?: string;
    /**
     * Salary.
     * @nullable
     */
    salary?: number;
    /**
     * Start Date.
     */
    startDate: Moment;
    /**
     * userId.
     */
    userId: string;
    /**
     * Variable Pay Program Name.
     */
    varPayProgramName: number;
    /**
     * Returns an entity builder to construct instances `Background_VarPayEmpHistDataInt`.
     * @returns A builder that constructs instances of entity type `Background_VarPayEmpHistDataInt`.
     */
    static builder(): EntityBuilderType<Background_VarPayEmpHistDataInt, Background_VarPayEmpHistDataIntTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_VarPayEmpHistDataInt` entity type.
     * @returns A `Background_VarPayEmpHistDataInt` request builder.
     */
    static requestBuilder(): Background_VarPayEmpHistDataIntRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_VarPayEmpHistDataInt`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_VarPayEmpHistDataInt`.
     */
    static customField(fieldName: string): CustomField<Background_VarPayEmpHistDataInt>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface Background_VarPayEmpHistDataIntType {
    backgroundElementId: BigNumber;
    basis?: number;
    country?: string;
    endDate: Moment;
    incentivePlan?: string;
    jobGrade?: string;
    lastModifiedDate: Moment;
    localCurrencyCode?: string;
    recordType?: string;
    salary?: number;
    startDate: Moment;
    userId: string;
    varPayProgramName: number;
}
export interface Background_VarPayEmpHistDataIntTypeForceMandatory {
    backgroundElementId: BigNumber;
    basis: number;
    country: string;
    endDate: Moment;
    incentivePlan: string;
    jobGrade: string;
    lastModifiedDate: Moment;
    localCurrencyCode: string;
    recordType: string;
    salary: number;
    startDate: Moment;
    userId: string;
    varPayProgramName: number;
}
export declare namespace Background_VarPayEmpHistDataInt {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_VarPayEmpHistDataInt>;
    /**
     * Static representation of the [[basis]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASIS: NumberField<Background_VarPayEmpHistDataInt>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<Background_VarPayEmpHistDataInt>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<Background_VarPayEmpHistDataInt>;
    /**
     * Static representation of the [[incentivePlan]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCENTIVE_PLAN: StringField<Background_VarPayEmpHistDataInt>;
    /**
     * Static representation of the [[jobGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_GRADE: StringField<Background_VarPayEmpHistDataInt>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_VarPayEmpHistDataInt>;
    /**
     * Static representation of the [[localCurrencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_CURRENCY_CODE: StringField<Background_VarPayEmpHistDataInt>;
    /**
     * Static representation of the [[recordType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECORD_TYPE: StringField<Background_VarPayEmpHistDataInt>;
    /**
     * Static representation of the [[salary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALARY: NumberField<Background_VarPayEmpHistDataInt>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<Background_VarPayEmpHistDataInt>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_VarPayEmpHistDataInt>;
    /**
     * Static representation of the [[varPayProgramName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAR_PAY_PROGRAM_NAME: NumberField<Background_VarPayEmpHistDataInt>;
    /**
     * All fields of the Background_VarPayEmpHistDataInt entity.
     */
    const _allFields: Array<BigNumberField<Background_VarPayEmpHistDataInt> | NumberField<Background_VarPayEmpHistDataInt> | StringField<Background_VarPayEmpHistDataInt> | DateField<Background_VarPayEmpHistDataInt>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_VarPayEmpHistDataInt>;
    /**
     * All key fields of the Background_VarPayEmpHistDataInt entity.
     */
    const _keyFields: Array<Selectable<Background_VarPayEmpHistDataInt>>;
    /**
     * Mapping of all key field names to the respective static field property Background_VarPayEmpHistDataInt.
     */
    const _keys: {
        [keys: string]: Selectable<Background_VarPayEmpHistDataInt>;
    };
}
//# sourceMappingURL=Background_VarPayEmpHistDataInt.d.ts.map