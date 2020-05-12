import { FormRouteSubStepRequestBuilder } from './FormRouteSubStepRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormRouteSubStep" of service "SFOData".
 */
export declare class FormRouteSubStep extends Entity implements FormRouteSubStepType {
    /**
     * Technical entity name for FormRouteSubStep.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormRouteSubStep.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * currentStep.
     * @nullable
     */
    currentStep?: boolean;
    /**
     * entryUser.
     * @nullable
     */
    entryUser?: boolean;
    /**
     * exitUser.
     * @nullable
     */
    exitUser?: boolean;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * stepOrder.
     */
    stepOrder: number;
    /**
     * subStepOrder.
     */
    subStepOrder: number;
    /**
     * userFullName.
     * @nullable
     */
    userFullName?: string;
    /**
     * userId.
     * @nullable
     */
    userId?: string;
    /**
     * userRole.
     * @nullable
     */
    userRole?: string;
    /**
     * Returns an entity builder to construct instances `FormRouteSubStep`.
     * @returns A builder that constructs instances of entity type `FormRouteSubStep`.
     */
    static builder(): EntityBuilderType<FormRouteSubStep, FormRouteSubStepTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormRouteSubStep` entity type.
     * @returns A `FormRouteSubStep` request builder.
     */
    static requestBuilder(): FormRouteSubStepRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormRouteSubStep`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormRouteSubStep`.
     */
    static customField(fieldName: string): CustomField<FormRouteSubStep>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface FormRouteSubStepType {
    currentStep?: boolean;
    entryUser?: boolean;
    exitUser?: boolean;
    formDataId: BigNumber;
    stepOrder: number;
    subStepOrder: number;
    userFullName?: string;
    userId?: string;
    userRole?: string;
}
export interface FormRouteSubStepTypeForceMandatory {
    currentStep: boolean;
    entryUser: boolean;
    exitUser: boolean;
    formDataId: BigNumber;
    stepOrder: number;
    subStepOrder: number;
    userFullName: string;
    userId: string;
    userRole: string;
}
export declare namespace FormRouteSubStep {
    /**
     * Static representation of the [[currentStep]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENT_STEP: BooleanField<FormRouteSubStep>;
    /**
     * Static representation of the [[entryUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENTRY_USER: BooleanField<FormRouteSubStep>;
    /**
     * Static representation of the [[exitUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXIT_USER: BooleanField<FormRouteSubStep>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormRouteSubStep>;
    /**
     * Static representation of the [[stepOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STEP_ORDER: NumberField<FormRouteSubStep>;
    /**
     * Static representation of the [[subStepOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_STEP_ORDER: NumberField<FormRouteSubStep>;
    /**
     * Static representation of the [[userFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_FULL_NAME: StringField<FormRouteSubStep>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<FormRouteSubStep>;
    /**
     * Static representation of the [[userRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ROLE: StringField<FormRouteSubStep>;
    /**
     * All fields of the FormRouteSubStep entity.
     */
    const _allFields: Array<BooleanField<FormRouteSubStep> | BigNumberField<FormRouteSubStep> | NumberField<FormRouteSubStep> | StringField<FormRouteSubStep>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormRouteSubStep>;
    /**
     * All key fields of the FormRouteSubStep entity.
     */
    const _keyFields: Array<Selectable<FormRouteSubStep>>;
    /**
     * Mapping of all key field names to the respective static field property FormRouteSubStep.
     */
    const _keys: {
        [keys: string]: Selectable<FormRouteSubStep>;
    };
}
//# sourceMappingURL=FormRouteSubStep.d.ts.map