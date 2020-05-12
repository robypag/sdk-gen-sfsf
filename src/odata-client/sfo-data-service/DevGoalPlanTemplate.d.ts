import { DevGoalPlanTemplateRequestBuilder } from './DevGoalPlanTemplateRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DevGoalPlanTemplate" of service "SFOData".
 */
export declare class DevGoalPlanTemplate extends Entity implements DevGoalPlanTemplateType {
    /**
     * Technical entity name for DevGoalPlanTemplate.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DevGoalPlanTemplate.
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
     * id.
     */
    id: BigNumber;
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
     * One-to-many navigation property to the [[SimpleDevGoal]] entity.
     */
    devgoals: SimpleDevGoal[];
    /**
     * One-to-many navigation property to the [[DevGoalEnum]] entity.
     */
    enums: DevGoalEnum[];
    /**
     * Returns an entity builder to construct instances `DevGoalPlanTemplate`.
     * @returns A builder that constructs instances of entity type `DevGoalPlanTemplate`.
     */
    static builder(): EntityBuilderType<DevGoalPlanTemplate, DevGoalPlanTemplateTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DevGoalPlanTemplate` entity type.
     * @returns A `DevGoalPlanTemplate` request builder.
     */
    static requestBuilder(): DevGoalPlanTemplateRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalPlanTemplate`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DevGoalPlanTemplate`.
     */
    static customField(fieldName: string): CustomField<DevGoalPlanTemplate>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SimpleDevGoal, SimpleDevGoalType } from './SimpleDevGoal';
import { DevGoalEnum, DevGoalEnumType } from './DevGoalEnum';
export interface DevGoalPlanTemplateType {
    defaultTemplate: boolean;
    description?: string;
    displayOrder?: BigNumber;
    dueDate?: Moment;
    id: BigNumber;
    name?: string;
    parentPlanId?: BigNumber;
    startDate?: Moment;
    useTextForPrivacy?: boolean;
    devgoals: SimpleDevGoalType[];
    enums: DevGoalEnumType[];
}
export interface DevGoalPlanTemplateTypeForceMandatory {
    defaultTemplate: boolean;
    description: string;
    displayOrder: BigNumber;
    dueDate: Moment;
    id: BigNumber;
    name: string;
    parentPlanId: BigNumber;
    startDate: Moment;
    useTextForPrivacy: boolean;
    devgoals: SimpleDevGoalType[];
    enums: DevGoalEnumType[];
}
export declare namespace DevGoalPlanTemplate {
    /**
     * Static representation of the [[defaultTemplate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_TEMPLATE: BooleanField<DevGoalPlanTemplate>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<DevGoalPlanTemplate>;
    /**
     * Static representation of the [[displayOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISPLAY_ORDER: BigNumberField<DevGoalPlanTemplate>;
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUE_DATE: DateField<DevGoalPlanTemplate>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<DevGoalPlanTemplate>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<DevGoalPlanTemplate>;
    /**
     * Static representation of the [[parentPlanId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_PLAN_ID: BigNumberField<DevGoalPlanTemplate>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<DevGoalPlanTemplate>;
    /**
     * Static representation of the [[useTextForPrivacy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USE_TEXT_FOR_PRIVACY: BooleanField<DevGoalPlanTemplate>;
    /**
     * Static representation of the one-to-many navigation property [[devgoals]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEVGOALS: Link<DevGoalPlanTemplate, SimpleDevGoal>;
    /**
     * Static representation of the one-to-many navigation property [[enums]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENUMS: Link<DevGoalPlanTemplate, DevGoalEnum>;
    /**
     * All fields of the DevGoalPlanTemplate entity.
     */
    const _allFields: Array<BooleanField<DevGoalPlanTemplate> | StringField<DevGoalPlanTemplate> | BigNumberField<DevGoalPlanTemplate> | DateField<DevGoalPlanTemplate> | Link<DevGoalPlanTemplate, SimpleDevGoal> | Link<DevGoalPlanTemplate, DevGoalEnum>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DevGoalPlanTemplate>;
    /**
     * All key fields of the DevGoalPlanTemplate entity.
     */
    const _keyFields: Array<Selectable<DevGoalPlanTemplate>>;
    /**
     * Mapping of all key field names to the respective static field property DevGoalPlanTemplate.
     */
    const _keys: {
        [keys: string]: Selectable<DevGoalPlanTemplate>;
    };
}
//# sourceMappingURL=DevGoalPlanTemplate.d.ts.map