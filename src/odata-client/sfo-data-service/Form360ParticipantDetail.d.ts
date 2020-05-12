import { Form360ParticipantDetailRequestBuilder } from './Form360ParticipantDetailRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Form360ParticipantDetail" of service "SFOData".
 */
export declare class Form360ParticipantDetail extends Entity implements Form360ParticipantDetailType {
    /**
     * Technical entity name for Form360ParticipantDetail.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360ParticipantDetail.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * columnKey.
     */
    columnKey: string;
    /**
     * columnValue.
     * @nullable
     */
    columnValue?: string;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * participantId.
     */
    participantId: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    participantUser: User;
    /**
     * Returns an entity builder to construct instances `Form360ParticipantDetail`.
     * @returns A builder that constructs instances of entity type `Form360ParticipantDetail`.
     */
    static builder(): EntityBuilderType<Form360ParticipantDetail, Form360ParticipantDetailTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Form360ParticipantDetail` entity type.
     * @returns A `Form360ParticipantDetail` request builder.
     */
    static requestBuilder(): Form360ParticipantDetailRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360ParticipantDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360ParticipantDetail`.
     */
    static customField(fieldName: string): CustomField<Form360ParticipantDetail>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface Form360ParticipantDetailType {
    columnKey: string;
    columnValue?: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    participantId: string;
    participantUser: UserType;
}
export interface Form360ParticipantDetailTypeForceMandatory {
    columnKey: string;
    columnValue: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    participantId: string;
    participantUser: UserType;
}
export declare namespace Form360ParticipantDetail {
    /**
     * Static representation of the [[columnKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLUMN_KEY: StringField<Form360ParticipantDetail>;
    /**
     * Static representation of the [[columnValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLUMN_VALUE: StringField<Form360ParticipantDetail>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<Form360ParticipantDetail>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<Form360ParticipantDetail>;
    /**
     * Static representation of the [[participantId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_ID: StringField<Form360ParticipantDetail>;
    /**
     * Static representation of the one-to-one navigation property [[participantUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER: OneToOneLink<Form360ParticipantDetail, User>;
    /**
     * All fields of the Form360ParticipantDetail entity.
     */
    const _allFields: Array<StringField<Form360ParticipantDetail> | BigNumberField<Form360ParticipantDetail> | OneToOneLink<Form360ParticipantDetail, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Form360ParticipantDetail>;
    /**
     * All key fields of the Form360ParticipantDetail entity.
     */
    const _keyFields: Array<Selectable<Form360ParticipantDetail>>;
    /**
     * Mapping of all key field names to the respective static field property Form360ParticipantDetail.
     */
    const _keys: {
        [keys: string]: Selectable<Form360ParticipantDetail>;
    };
}
//# sourceMappingURL=Form360ParticipantDetail.d.ts.map