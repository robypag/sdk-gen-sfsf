import { WfRequestUiDataRequestBuilder } from './WfRequestUiDataRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "WfRequestUIData" of service "SFOData".
 */
export declare class WfRequestUiData extends Entity implements WfRequestUiDataType {
    /**
     * Technical entity name for WfRequestUiData.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WfRequestUiData.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Action Type.
     * @nullable
     */
    actionType?: string;
    /**
     * Actions.
     * @nullable
     */
    actions?: string;
    /**
     * Assignee User Id.
     * @nullable
     */
    assigneeUserId?: string;
    /**
     * Assignee User Name.
     * @nullable
     */
    assigneeUserName?: string;
    /**
     * Business Unit.
     * @nullable
     */
    businessUnit?: string;
    /**
     * Changed Data.
     * @nullable
     */
    changedData?: string;
    /**
     * Cost Center.
     * @nullable
     */
    costCenter?: string;
    /**
     * Deep Link.
     * @nullable
     */
    deeplink?: string;
    /**
     * Department.
     * @nullable
     */
    department?: string;
    /**
     * Division.
     * @nullable
     */
    division?: string;
    /**
     * Effective Date.
     * @nullable
     */
    effectiveDate?: string;
    /**
     * Event Reason.
     * @nullable
     */
    eventReason?: string;
    /**
     * isAssigned.
     * @nullable
     */
    isAssigned?: boolean;
    /**
     * Is Effective Date Type.
     * @nullable
     */
    isEffectiveDateType?: boolean;
    /**
     * Is Object Base.
     * @nullable
     */
    isObjectBase?: boolean;
    /**
     * Job Title.
     * @nullable
     */
    jobTitle?: string;
    /**
     * Legal Entity.
     * @nullable
     */
    legalEntity?: string;
    /**
     * Location.
     * @nullable
     */
    location?: string;
    /**
     * Object Name.
     * @nullable
     */
    objectName?: string;
    /**
     * Object Type.
     * @nullable
     */
    objectType?: string;
    /**
     * Operate Date.
     * @nullable
     */
    operateDate?: string;
    /**
     * Operate Type.
     * @nullable
     */
    operateType?: string;
    /**
     * Operate User Id.
     * @nullable
     */
    operateUserId?: string;
    /**
     * Operate User Name.
     * @nullable
     */
    operateUserName?: string;
    /**
     * Received On.
     * @nullable
     */
    receivedOn?: string;
    /**
     * Subject User Id.
     * @nullable
     */
    subjectUserId?: string;
    /**
     * Subject User Name.
     * @nullable
     */
    subjectUserName?: string;
    /**
     * ToDo Subject Line.
     * @nullable
     */
    todoSubjectLine?: string;
    /**
     * Workflow Request Id.
     */
    wfRequestId: BigNumber;
    /**
     * Returns an entity builder to construct instances `WfRequestUiData`.
     * @returns A builder that constructs instances of entity type `WfRequestUiData`.
     */
    static builder(): EntityBuilderType<WfRequestUiData, WfRequestUiDataTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WfRequestUiData` entity type.
     * @returns A `WfRequestUiData` request builder.
     */
    static requestBuilder(): WfRequestUiDataRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WfRequestUiData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WfRequestUiData`.
     */
    static customField(fieldName: string): CustomField<WfRequestUiData>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface WfRequestUiDataType {
    actionType?: string;
    actions?: string;
    assigneeUserId?: string;
    assigneeUserName?: string;
    businessUnit?: string;
    changedData?: string;
    costCenter?: string;
    deeplink?: string;
    department?: string;
    division?: string;
    effectiveDate?: string;
    eventReason?: string;
    isAssigned?: boolean;
    isEffectiveDateType?: boolean;
    isObjectBase?: boolean;
    jobTitle?: string;
    legalEntity?: string;
    location?: string;
    objectName?: string;
    objectType?: string;
    operateDate?: string;
    operateType?: string;
    operateUserId?: string;
    operateUserName?: string;
    receivedOn?: string;
    subjectUserId?: string;
    subjectUserName?: string;
    todoSubjectLine?: string;
    wfRequestId: BigNumber;
}
export interface WfRequestUiDataTypeForceMandatory {
    actionType: string;
    actions: string;
    assigneeUserId: string;
    assigneeUserName: string;
    businessUnit: string;
    changedData: string;
    costCenter: string;
    deeplink: string;
    department: string;
    division: string;
    effectiveDate: string;
    eventReason: string;
    isAssigned: boolean;
    isEffectiveDateType: boolean;
    isObjectBase: boolean;
    jobTitle: string;
    legalEntity: string;
    location: string;
    objectName: string;
    objectType: string;
    operateDate: string;
    operateType: string;
    operateUserId: string;
    operateUserName: string;
    receivedOn: string;
    subjectUserId: string;
    subjectUserName: string;
    todoSubjectLine: string;
    wfRequestId: BigNumber;
}
export declare namespace WfRequestUiData {
    /**
     * Static representation of the [[actionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTION_TYPE: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[actions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIONS: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[assigneeUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSIGNEE_USER_ID: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[assigneeUserName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSIGNEE_USER_NAME: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[businessUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_UNIT: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[changedData]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHANGED_DATA: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[deeplink]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEEPLINK: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[effectiveDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_DATE: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[eventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_REASON: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[isAssigned]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ASSIGNED: BooleanField<WfRequestUiData>;
    /**
     * Static representation of the [[isEffectiveDateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_EFFECTIVE_DATE_TYPE: BooleanField<WfRequestUiData>;
    /**
     * Static representation of the [[isObjectBase]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_OBJECT_BASE: BooleanField<WfRequestUiData>;
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_TITLE: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[legalEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[objectName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECT_NAME: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[objectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECT_TYPE: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[operateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATE_DATE: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[operateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATE_TYPE: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[operateUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATE_USER_ID: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[operateUserName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATE_USER_NAME: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[receivedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECEIVED_ON: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_USER_ID: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[subjectUserName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_USER_NAME: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[todoSubjectLine]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TODO_SUBJECT_LINE: StringField<WfRequestUiData>;
    /**
     * Static representation of the [[wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_ID: BigNumberField<WfRequestUiData>;
    /**
     * All fields of the WfRequestUiData entity.
     */
    const _allFields: Array<StringField<WfRequestUiData> | BooleanField<WfRequestUiData> | BigNumberField<WfRequestUiData>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WfRequestUiData>;
    /**
     * All key fields of the WfRequestUiData entity.
     */
    const _keyFields: Array<Selectable<WfRequestUiData>>;
    /**
     * Mapping of all key field names to the respective static field property WfRequestUiData.
     */
    const _keys: {
        [keys: string]: Selectable<WfRequestUiData>;
    };
}
//# sourceMappingURL=WfRequestUiData.d.ts.map