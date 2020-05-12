import { GoalPlanTemplateRequestBuilder } from './GoalPlanTemplateRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "GoalPlanTemplate" of service "SFOData".
 */
export declare class GoalPlanTemplate extends Entity implements GoalPlanTemplateType {
    /**
     * Technical entity name for GoalPlanTemplate.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GoalPlanTemplate.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * defaultTemplate.
     */
    defaultTemplate: boolean;
    /**
     * description.
     * @nullable
     */
    description?: string;
    /**
     * displayOrder.
     * @nullable
     */
    displayOrder?: BigNumber;
    /**
     * dueDate.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * fieldOrder.
     * @nullable
     */
    fieldOrder?: string;
    /**
     * id.
     */
    id: BigNumber;
    /**
     * mobileFields.
     * @nullable
     */
    mobileFields?: string;
    /**
     * name.
     * @nullable
     */
    name?: string;
    /**
     * parentPlanId.
     * @nullable
     */
    parentPlanId?: BigNumber;
    /**
     * percentageValueOver100.
     * @nullable
     */
    percentageValueOver100?: boolean;
    /**
     * startDate.
     * @nullable
     */
    startDate?: Moment;
    /**
     * useTextForPrivacy.
     * @nullable
     */
    useTextForPrivacy?: boolean;
    /**
     * One-to-many navigation property to the [[GoalEnum]] entity.
     */
    enums: GoalEnum[];
    /**
     * One-to-many navigation property to the [[GoalWeight]] entity.
     */
    goalWeights: GoalWeight[];
    /**
     * One-to-many navigation property to the [[SimpleGoal]] entity.
     */
    goals: SimpleGoal[];
    /**
     * One-to-many navigation property to the [[GoalPlanState]] entity.
     */
    planStates: GoalPlanState[];
    /**
     * Returns an entity builder to construct instances `GoalPlanTemplate`.
     * @returns A builder that constructs instances of entity type `GoalPlanTemplate`.
     */
    static builder(): EntityBuilderType<GoalPlanTemplate, GoalPlanTemplateTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `GoalPlanTemplate` entity type.
     * @returns A `GoalPlanTemplate` request builder.
     */
    static requestBuilder(): GoalPlanTemplateRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalPlanTemplate`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GoalPlanTemplate`.
     */
    static customField(fieldName: string): CustomField<GoalPlanTemplate>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { GoalEnum, GoalEnumType } from './GoalEnum';
import { GoalWeight, GoalWeightType } from './GoalWeight';
import { SimpleGoal, SimpleGoalType } from './SimpleGoal';
import { GoalPlanState, GoalPlanStateType } from './GoalPlanState';
export interface GoalPlanTemplateType {
    defaultTemplate: boolean;
    description?: string;
    displayOrder?: BigNumber;
    dueDate?: Moment;
    fieldOrder?: string;
    id: BigNumber;
    mobileFields?: string;
    name?: string;
    parentPlanId?: BigNumber;
    percentageValueOver100?: boolean;
    startDate?: Moment;
    useTextForPrivacy?: boolean;
    enums: GoalEnumType[];
    goalWeights: GoalWeightType[];
    goals: SimpleGoalType[];
    planStates: GoalPlanStateType[];
}
export interface GoalPlanTemplateTypeForceMandatory {
    defaultTemplate: boolean;
    description: string;
    displayOrder: BigNumber;
    dueDate: Moment;
    fieldOrder: string;
    id: BigNumber;
    mobileFields: string;
    name: string;
    parentPlanId: BigNumber;
    percentageValueOver100: boolean;
    startDate: Moment;
    useTextForPrivacy: boolean;
    enums: GoalEnumType[];
    goalWeights: GoalWeightType[];
    goals: SimpleGoalType[];
    planStates: GoalPlanStateType[];
}
export declare namespace GoalPlanTemplate {
    /**
     * Static representation of the [[defaultTemplate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_TEMPLATE: BooleanField<GoalPlanTemplate>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<GoalPlanTemplate>;
    /**
     * Static representation of the [[displayOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISPLAY_ORDER: BigNumberField<GoalPlanTemplate>;
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUE_DATE: DateField<GoalPlanTemplate>;
    /**
     * Static representation of the [[fieldOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_ORDER: StringField<GoalPlanTemplate>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<GoalPlanTemplate>;
    /**
     * Static representation of the [[mobileFields]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MOBILE_FIELDS: StringField<GoalPlanTemplate>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<GoalPlanTemplate>;
    /**
     * Static representation of the [[parentPlanId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_PLAN_ID: BigNumberField<GoalPlanTemplate>;
    /**
     * Static representation of the [[percentageValueOver100]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERCENTAGE_VALUE_OVER_100: BooleanField<GoalPlanTemplate>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<GoalPlanTemplate>;
    /**
     * Static representation of the [[useTextForPrivacy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USE_TEXT_FOR_PRIVACY: BooleanField<GoalPlanTemplate>;
    /**
     * Static representation of the one-to-many navigation property [[enums]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENUMS: Link<GoalPlanTemplate, GoalEnum>;
    /**
     * Static representation of the one-to-many navigation property [[goalWeights]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_WEIGHTS: Link<GoalPlanTemplate, GoalWeight>;
    /**
     * Static representation of the one-to-many navigation property [[goals]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOALS: Link<GoalPlanTemplate, SimpleGoal>;
    /**
     * Static representation of the one-to-many navigation property [[planStates]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLAN_STATES: Link<GoalPlanTemplate, GoalPlanState>;
    /**
     * All fields of the GoalPlanTemplate entity.
     */
    const _allFields: Array<BooleanField<GoalPlanTemplate> | StringField<GoalPlanTemplate> | BigNumberField<GoalPlanTemplate> | DateField<GoalPlanTemplate> | Link<GoalPlanTemplate, GoalEnum> | Link<GoalPlanTemplate, GoalWeight> | Link<GoalPlanTemplate, SimpleGoal> | Link<GoalPlanTemplate, GoalPlanState>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<GoalPlanTemplate>;
    /**
     * All key fields of the GoalPlanTemplate entity.
     */
    const _keyFields: Array<Selectable<GoalPlanTemplate>>;
    /**
     * Mapping of all key field names to the respective static field property GoalPlanTemplate.
     */
    const _keys: {
        [keys: string]: Selectable<GoalPlanTemplate>;
    };
}
//# sourceMappingURL=GoalPlanTemplate.d.ts.map