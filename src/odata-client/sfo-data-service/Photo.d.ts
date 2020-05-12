import { PhotoRequestBuilder } from './PhotoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BinaryField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Photo" of service "SFOData".
 */
export declare class Photo extends Entity implements PhotoType {
    /**
     * Technical entity name for Photo.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Photo.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * height.
     */
    height: number;
    /**
     * lastModified.
     * @nullable
     */
    lastModified?: Moment;
    /**
     * lastModifiedDateTime.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * lastModifiedWithTZ.
     * @nullable
     */
    lastModifiedWithTz?: Moment;
    /**
     * mimeType.
     * Maximum length: 32.
     * @nullable
     */
    mimeType?: string;
    /**
     * photo.
     * @nullable
     */
    photo?: string;
    /**
     * photoId.
     */
    photoId: BigNumber;
    /**
     * photoName.
     * Maximum length: 128.
     * @nullable
     */
    photoName?: string;
    /**
     * photoType.
     */
    photoType: number;
    /**
     * userId.
     * Maximum length: 100.
     */
    userId: string;
    /**
     * width.
     */
    width: number;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userNav: User;
    /**
     * Returns an entity builder to construct instances `Photo`.
     * @returns A builder that constructs instances of entity type `Photo`.
     */
    static builder(): EntityBuilderType<Photo, PhotoTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Photo` entity type.
     * @returns A `Photo` request builder.
     */
    static requestBuilder(): PhotoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Photo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Photo`.
     */
    static customField(fieldName: string): CustomField<Photo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface PhotoType {
    height: number;
    lastModified?: Moment;
    lastModifiedDateTime?: Moment;
    lastModifiedWithTz?: Moment;
    mimeType?: string;
    photo?: string;
    photoId: BigNumber;
    photoName?: string;
    photoType: number;
    userId: string;
    width: number;
    userNav: UserType;
}
export interface PhotoTypeForceMandatory {
    height: number;
    lastModified: Moment;
    lastModifiedDateTime: Moment;
    lastModifiedWithTz: Moment;
    mimeType: string;
    photo: string;
    photoId: BigNumber;
    photoName: string;
    photoType: number;
    userId: string;
    width: number;
    userNav: UserType;
}
export declare namespace Photo {
    /**
     * Static representation of the [[height]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEIGHT: NumberField<Photo>;
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED: DateField<Photo>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<Photo>;
    /**
     * Static representation of the [[lastModifiedWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_WITH_TZ: DateField<Photo>;
    /**
     * Static representation of the [[mimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIME_TYPE: StringField<Photo>;
    /**
     * Static representation of the [[photo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHOTO: BinaryField<Photo>;
    /**
     * Static representation of the [[photoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHOTO_ID: BigNumberField<Photo>;
    /**
     * Static representation of the [[photoName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHOTO_NAME: StringField<Photo>;
    /**
     * Static representation of the [[photoType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHOTO_TYPE: NumberField<Photo>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Photo>;
    /**
     * Static representation of the [[width]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIDTH: NumberField<Photo>;
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAV: OneToOneLink<Photo, User>;
    /**
     * All fields of the Photo entity.
     */
    const _allFields: Array<NumberField<Photo> | DateField<Photo> | StringField<Photo> | BinaryField<Photo> | BigNumberField<Photo> | OneToOneLink<Photo, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Photo>;
    /**
     * All key fields of the Photo entity.
     */
    const _keyFields: Array<Selectable<Photo>>;
    /**
     * Mapping of all key field names to the respective static field property Photo.
     */
    const _keys: {
        [keys: string]: Selectable<Photo>;
    };
}
//# sourceMappingURL=Photo.d.ts.map