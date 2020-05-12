import { EmpCompensationGroupSumCalculatedRequestBuilder } from './EmpCompensationGroupSumCalculatedRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmpCompensationGroupSumCalculated" of service "SFOData".
 */
export declare class EmpCompensationGroupSumCalculated extends Entity implements EmpCompensationGroupSumCalculatedType {
    /**
     * Technical entity name for EmpCompensationGroupSumCalculated.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpCompensationGroupSumCalculated.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * amount.
     * @nullable
     */
    amount?: number;
    /**
     * currencyCode.
     * @nullable
     */
    currencyCode?: string;
    /**
     * errorCode.
     * @nullable
     */
    errorCode?: string;
    /**
     * errorMessage.
     * @nullable
     */
    errorMessage?: string;
    /**
     * payComponentGroupId.
     * @nullable
     */
    payComponentGroupId?: string;
    /**
     * seqNumber.
     */
    seqNumber: BigNumber;
    /**
     * startDate.
     */
    startDate: Moment;
    /**
     * userId.
     */
    userId: string;
    /**
     * Returns an entity builder to construct instances `EmpCompensationGroupSumCalculated`.
     * @returns A builder that constructs instances of entity type `EmpCompensationGroupSumCalculated`.
     */
    static builder(): EntityBuilderType<EmpCompensationGroupSumCalculated, EmpCompensationGroupSumCalculatedTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmpCompensationGroupSumCalculated` entity type.
     * @returns A `EmpCompensationGroupSumCalculated` request builder.
     */
    static requestBuilder(): EmpCompensationGroupSumCalculatedRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpCompensationGroupSumCalculated`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpCompensationGroupSumCalculated`.
     */
    static customField(fieldName: string): CustomField<EmpCompensationGroupSumCalculated>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface EmpCompensationGroupSumCalculatedType {
    amount?: number;
    currencyCode?: string;
    errorCode?: string;
    errorMessage?: string;
    payComponentGroupId?: string;
    seqNumber: BigNumber;
    startDate: Moment;
    userId: string;
}
export interface EmpCompensationGroupSumCalculatedTypeForceMandatory {
    amount: number;
    currencyCode: string;
    errorCode: string;
    errorMessage: string;
    payComponentGroupId: string;
    seqNumber: BigNumber;
    startDate: Moment;
    userId: string;
}
export declare namespace EmpCompensationGroupSumCalculated {
    /**
     * Static representation of the [[amount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AMOUNT: NumberField<EmpCompensationGroupSumCalculated>;
    /**
     * Static representation of the [[currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_CODE: StringField<EmpCompensationGroupSumCalculated>;
    /**
     * Static representation of the [[errorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ERROR_CODE: StringField<EmpCompensationGroupSumCalculated>;
    /**
     * Static representation of the [[errorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ERROR_MESSAGE: StringField<EmpCompensationGroupSumCalculated>;
    /**
     * Static representation of the [[payComponentGroupId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_GROUP_ID: StringField<EmpCompensationGroupSumCalculated>;
    /**
     * Static representation of the [[seqNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQ_NUMBER: BigNumberField<EmpCompensationGroupSumCalculated>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<EmpCompensationGroupSumCalculated>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EmpCompensationGroupSumCalculated>;
    /**
     * All fields of the EmpCompensationGroupSumCalculated entity.
     */
    const _allFields: Array<NumberField<EmpCompensationGroupSumCalculated> | StringField<EmpCompensationGroupSumCalculated> | BigNumberField<EmpCompensationGroupSumCalculated> | DateField<EmpCompensationGroupSumCalculated>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmpCompensationGroupSumCalculated>;
    /**
     * All key fields of the EmpCompensationGroupSumCalculated entity.
     */
    const _keyFields: Array<Selectable<EmpCompensationGroupSumCalculated>>;
    /**
     * Mapping of all key field names to the respective static field property EmpCompensationGroupSumCalculated.
     */
    const _keys: {
        [keys: string]: Selectable<EmpCompensationGroupSumCalculated>;
    };
}
//# sourceMappingURL=EmpCompensationGroupSumCalculated.d.ts.map