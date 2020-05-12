import { CalibrationTemplateRequestBuilder } from './CalibrationTemplateRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CalibrationTemplate" of service "SFOData".
 */
export declare class CalibrationTemplate extends Entity implements CalibrationTemplateType {
    /**
     * Technical entity name for CalibrationTemplate.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CalibrationTemplate.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * createdBy.
     */
    createdBy: string;
    /**
     * createdDateTime.
     */
    createdDateTime: Moment;
    /**
     * endDate.
     */
    endDate: Moment;
    /**
     * lastModifiedBy.
     */
    lastModifiedBy: string;
    /**
     * lastModifiedDateTime.
     */
    lastModifiedDateTime: Moment;
    /**
     * startDate.
     */
    startDate: Moment;
    /**
     * status.
     */
    status: number;
    /**
     * templateId.
     */
    templateId: BigNumber;
    /**
     * templateName.
     */
    templateName: string;
    /**
     * One-to-many navigation property to the [[User]] entity.
     */
    executiveReviewerList: User[];
    /**
     * Returns an entity builder to construct instances `CalibrationTemplate`.
     * @returns A builder that constructs instances of entity type `CalibrationTemplate`.
     */
    static builder(): EntityBuilderType<CalibrationTemplate, CalibrationTemplateTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CalibrationTemplate` entity type.
     * @returns A `CalibrationTemplate` request builder.
     */
    static requestBuilder(): CalibrationTemplateRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CalibrationTemplate`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CalibrationTemplate`.
     */
    static customField(fieldName: string): CustomField<CalibrationTemplate>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface CalibrationTemplateType {
    createdBy: string;
    createdDateTime: Moment;
    endDate: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    startDate: Moment;
    status: number;
    templateId: BigNumber;
    templateName: string;
    executiveReviewerList: UserType[];
}
export interface CalibrationTemplateTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    endDate: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    startDate: Moment;
    status: number;
    templateId: BigNumber;
    templateName: string;
    executiveReviewerList: UserType[];
}
export declare namespace CalibrationTemplate {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<CalibrationTemplate>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<CalibrationTemplate>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<CalibrationTemplate>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<CalibrationTemplate>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CalibrationTemplate>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<CalibrationTemplate>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: NumberField<CalibrationTemplate>;
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_ID: BigNumberField<CalibrationTemplate>;
    /**
     * Static representation of the [[templateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_NAME: StringField<CalibrationTemplate>;
    /**
     * Static representation of the one-to-many navigation property [[executiveReviewerList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXECUTIVE_REVIEWER_LIST: Link<CalibrationTemplate, User>;
    /**
     * All fields of the CalibrationTemplate entity.
     */
    const _allFields: Array<StringField<CalibrationTemplate> | DateField<CalibrationTemplate> | NumberField<CalibrationTemplate> | BigNumberField<CalibrationTemplate> | Link<CalibrationTemplate, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CalibrationTemplate>;
    /**
     * All key fields of the CalibrationTemplate entity.
     */
    const _keyFields: Array<Selectable<CalibrationTemplate>>;
    /**
     * Mapping of all key field names to the respective static field property CalibrationTemplate.
     */
    const _keys: {
        [keys: string]: Selectable<CalibrationTemplate>;
    };
}
//# sourceMappingURL=CalibrationTemplate.d.ts.map