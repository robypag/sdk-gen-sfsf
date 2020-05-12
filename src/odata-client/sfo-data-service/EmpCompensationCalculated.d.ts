import { EmpCompensationCalculatedRequestBuilder } from './EmpCompensationCalculatedRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmpCompensationCalculated" of service "SFOData".
 */
export declare class EmpCompensationCalculated extends Entity implements EmpCompensationCalculatedType {
    /**
     * Technical entity name for EmpCompensationCalculated.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpCompensationCalculated.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * compaRatio.
     * @nullable
     */
    compaRatio?: number;
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
     * rangePenetration.
     * @nullable
     */
    rangePenetration?: number;
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
     * Returns an entity builder to construct instances `EmpCompensationCalculated`.
     * @returns A builder that constructs instances of entity type `EmpCompensationCalculated`.
     */
    static builder(): EntityBuilderType<EmpCompensationCalculated, EmpCompensationCalculatedTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmpCompensationCalculated` entity type.
     * @returns A `EmpCompensationCalculated` request builder.
     */
    static requestBuilder(): EmpCompensationCalculatedRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpCompensationCalculated`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpCompensationCalculated`.
     */
    static customField(fieldName: string): CustomField<EmpCompensationCalculated>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface EmpCompensationCalculatedType {
    compaRatio?: number;
    errorCode?: string;
    errorMessage?: string;
    rangePenetration?: number;
    seqNumber: BigNumber;
    startDate: Moment;
    userId: string;
}
export interface EmpCompensationCalculatedTypeForceMandatory {
    compaRatio: number;
    errorCode: string;
    errorMessage: string;
    rangePenetration: number;
    seqNumber: BigNumber;
    startDate: Moment;
    userId: string;
}
export declare namespace EmpCompensationCalculated {
    /**
     * Static representation of the [[compaRatio]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPA_RATIO: NumberField<EmpCompensationCalculated>;
    /**
     * Static representation of the [[errorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ERROR_CODE: StringField<EmpCompensationCalculated>;
    /**
     * Static representation of the [[errorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ERROR_MESSAGE: StringField<EmpCompensationCalculated>;
    /**
     * Static representation of the [[rangePenetration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RANGE_PENETRATION: NumberField<EmpCompensationCalculated>;
    /**
     * Static representation of the [[seqNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQ_NUMBER: BigNumberField<EmpCompensationCalculated>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<EmpCompensationCalculated>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EmpCompensationCalculated>;
    /**
     * All fields of the EmpCompensationCalculated entity.
     */
    const _allFields: Array<NumberField<EmpCompensationCalculated> | StringField<EmpCompensationCalculated> | BigNumberField<EmpCompensationCalculated> | DateField<EmpCompensationCalculated>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmpCompensationCalculated>;
    /**
     * All key fields of the EmpCompensationCalculated entity.
     */
    const _keyFields: Array<Selectable<EmpCompensationCalculated>>;
    /**
     * Mapping of all key field names to the respective static field property EmpCompensationCalculated.
     */
    const _keys: {
        [keys: string]: Selectable<EmpCompensationCalculated>;
    };
}
//# sourceMappingURL=EmpCompensationCalculated.d.ts.map