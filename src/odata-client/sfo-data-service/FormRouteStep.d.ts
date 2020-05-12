import { FormRouteStepRequestBuilder } from './FormRouteStepRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormRouteStep" of service "SFOData".
 */
export declare class FormRouteStep extends Entity implements FormRouteStepType {
    /**
     * Technical entity name for FormRouteStep.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormRouteStep.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * completed.
     * @nullable
     */
    completed?: boolean;
    /**
     * current.
     * @nullable
     */
    current?: boolean;
    /**
     * dueDate.
     * @nullable
     */
    dueDate?: string;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * overDue.
     * @nullable
     */
    overDue?: boolean;
    /**
     * stageName.
     * @nullable
     */
    stageName?: string;
    /**
     * stageType.
     * @nullable
     */
    stageType?: string;
    /**
     * stepDescription.
     * @nullable
     */
    stepDescription?: string;
    /**
     * stepId.
     * @nullable
     */
    stepId?: string;
    /**
     * stepName.
     * @nullable
     */
    stepName?: string;
    /**
     * stepOrder.
     */
    stepOrder: number;
    /**
     * stepType.
     * @nullable
     */
    stepType?: string;
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
     * One-to-many navigation property to the [[FormRouteSubStep]] entity.
     */
    routeSubStep: FormRouteSubStep[];
    /**
     * Returns an entity builder to construct instances `FormRouteStep`.
     * @returns A builder that constructs instances of entity type `FormRouteStep`.
     */
    static builder(): EntityBuilderType<FormRouteStep, FormRouteStepTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormRouteStep` entity type.
     * @returns A `FormRouteStep` request builder.
     */
    static requestBuilder(): FormRouteStepRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormRouteStep`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormRouteStep`.
     */
    static customField(fieldName: string): CustomField<FormRouteStep>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormRouteSubStep, FormRouteSubStepType } from './FormRouteSubStep';
export interface FormRouteStepType {
    completed?: boolean;
    current?: boolean;
    dueDate?: string;
    formDataId: BigNumber;
    overDue?: boolean;
    stageName?: string;
    stageType?: string;
    stepDescription?: string;
    stepId?: string;
    stepName?: string;
    stepOrder: number;
    stepType?: string;
    userFullName?: string;
    userId?: string;
    userRole?: string;
    routeSubStep: FormRouteSubStepType[];
}
export interface FormRouteStepTypeForceMandatory {
    completed: boolean;
    current: boolean;
    dueDate: string;
    formDataId: BigNumber;
    overDue: boolean;
    stageName: string;
    stageType: string;
    stepDescription: string;
    stepId: string;
    stepName: string;
    stepOrder: number;
    stepType: string;
    userFullName: string;
    userId: string;
    userRole: string;
    routeSubStep: FormRouteSubStepType[];
}
export declare namespace FormRouteStep {
    /**
     * Static representation of the [[completed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPLETED: BooleanField<FormRouteStep>;
    /**
     * Static representation of the [[current]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENT: BooleanField<FormRouteStep>;
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUE_DATE: StringField<FormRouteStep>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormRouteStep>;
    /**
     * Static representation of the [[overDue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVER_DUE: BooleanField<FormRouteStep>;
    /**
     * Static representation of the [[stageName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STAGE_NAME: StringField<FormRouteStep>;
    /**
     * Static representation of the [[stageType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STAGE_TYPE: StringField<FormRouteStep>;
    /**
     * Static representation of the [[stepDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STEP_DESCRIPTION: StringField<FormRouteStep>;
    /**
     * Static representation of the [[stepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STEP_ID: StringField<FormRouteStep>;
    /**
     * Static representation of the [[stepName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STEP_NAME: StringField<FormRouteStep>;
    /**
     * Static representation of the [[stepOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STEP_ORDER: NumberField<FormRouteStep>;
    /**
     * Static representation of the [[stepType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STEP_TYPE: StringField<FormRouteStep>;
    /**
     * Static representation of the [[userFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_FULL_NAME: StringField<FormRouteStep>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<FormRouteStep>;
    /**
     * Static representation of the [[userRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ROLE: StringField<FormRouteStep>;
    /**
     * Static representation of the one-to-many navigation property [[routeSubStep]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUTE_SUB_STEP: Link<FormRouteStep, FormRouteSubStep>;
    /**
     * All fields of the FormRouteStep entity.
     */
    const _allFields: Array<BooleanField<FormRouteStep> | StringField<FormRouteStep> | BigNumberField<FormRouteStep> | NumberField<FormRouteStep> | Link<FormRouteStep, FormRouteSubStep>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormRouteStep>;
    /**
     * All key fields of the FormRouteStep entity.
     */
    const _keyFields: Array<Selectable<FormRouteStep>>;
    /**
     * Mapping of all key field names to the respective static field property FormRouteStep.
     */
    const _keys: {
        [keys: string]: Selectable<FormRouteStep>;
    };
}
//# sourceMappingURL=FormRouteStep.d.ts.map