import { Background_VarPayEmpHistDataRequestBuilder } from './Background_VarPayEmpHistDataRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_VarPayEmpHistData" of service "SFOData".
 */
export declare class Background_VarPayEmpHistData extends Entity implements Background_VarPayEmpHistDataType {
    /**
     * Technical entity name for Background_VarPayEmpHistData.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_VarPayEmpHistData.
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
     * Job Grade.
     * @nullable
     */
    jobGrade?: string;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * Location.
     * @nullable
     */
    location?: string;
    /**
     * Salary.
     * @nullable
     */
    salary?: string;
    /**
     * Start Date.
     */
    startDate: Moment;
    /**
     * Target Percent.
     * @nullable
     */
    tgtPct?: string;
    /**
     * Title.
     * @nullable
     */
    title?: string;
    /**
     * userId.
     */
    userId: string;
    /**
     * Variable Pay Program Name.
     */
    varPayProgramName: number;
    /**
     * Returns an entity builder to construct instances `Background_VarPayEmpHistData`.
     * @returns A builder that constructs instances of entity type `Background_VarPayEmpHistData`.
     */
    static builder(): EntityBuilderType<Background_VarPayEmpHistData, Background_VarPayEmpHistDataTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_VarPayEmpHistData` entity type.
     * @returns A `Background_VarPayEmpHistData` request builder.
     */
    static requestBuilder(): Background_VarPayEmpHistDataRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_VarPayEmpHistData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_VarPayEmpHistData`.
     */
    static customField(fieldName: string): CustomField<Background_VarPayEmpHistData>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface Background_VarPayEmpHistDataType {
    backgroundElementId: BigNumber;
    basis?: number;
    country?: string;
    endDate: Moment;
    jobGrade?: string;
    lastModifiedDate: Moment;
    location?: string;
    salary?: string;
    startDate: Moment;
    tgtPct?: string;
    title?: string;
    userId: string;
    varPayProgramName: number;
}
export interface Background_VarPayEmpHistDataTypeForceMandatory {
    backgroundElementId: BigNumber;
    basis: number;
    country: string;
    endDate: Moment;
    jobGrade: string;
    lastModifiedDate: Moment;
    location: string;
    salary: string;
    startDate: Moment;
    tgtPct: string;
    title: string;
    userId: string;
    varPayProgramName: number;
}
export declare namespace Background_VarPayEmpHistData {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_VarPayEmpHistData>;
    /**
     * Static representation of the [[basis]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASIS: NumberField<Background_VarPayEmpHistData>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<Background_VarPayEmpHistData>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<Background_VarPayEmpHistData>;
    /**
     * Static representation of the [[jobGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_GRADE: StringField<Background_VarPayEmpHistData>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_VarPayEmpHistData>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: StringField<Background_VarPayEmpHistData>;
    /**
     * Static representation of the [[salary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALARY: StringField<Background_VarPayEmpHistData>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<Background_VarPayEmpHistData>;
    /**
     * Static representation of the [[tgtPct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TGT_PCT: StringField<Background_VarPayEmpHistData>;
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE: StringField<Background_VarPayEmpHistData>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_VarPayEmpHistData>;
    /**
     * Static representation of the [[varPayProgramName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAR_PAY_PROGRAM_NAME: NumberField<Background_VarPayEmpHistData>;
    /**
     * All fields of the Background_VarPayEmpHistData entity.
     */
    const _allFields: Array<BigNumberField<Background_VarPayEmpHistData> | NumberField<Background_VarPayEmpHistData> | StringField<Background_VarPayEmpHistData> | DateField<Background_VarPayEmpHistData>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_VarPayEmpHistData>;
    /**
     * All key fields of the Background_VarPayEmpHistData entity.
     */
    const _keyFields: Array<Selectable<Background_VarPayEmpHistData>>;
    /**
     * Mapping of all key field names to the respective static field property Background_VarPayEmpHistData.
     */
    const _keys: {
        [keys: string]: Selectable<Background_VarPayEmpHistData>;
    };
}
//# sourceMappingURL=Background_VarPayEmpHistData.d.ts.map