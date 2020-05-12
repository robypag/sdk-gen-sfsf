"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PhotoRequestBuilder_1 = require("./PhotoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Photo" of service "SFOData".
 */
var Photo = /** @class */ (function (_super) {
    __extends(Photo, _super);
    function Photo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Photo`.
     * @returns A builder that constructs instances of entity type `Photo`.
     */
    Photo.builder = function () {
        return core_1.Entity.entityBuilder(Photo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Photo` entity type.
     * @returns A `Photo` request builder.
     */
    Photo.requestBuilder = function () {
        return new PhotoRequestBuilder_1.PhotoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Photo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Photo`.
     */
    Photo.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Photo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Photo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Photo.
     */
    Photo._entityName = 'Photo';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Photo.
     */
    Photo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Photo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Photo;
}(core_1.Entity));
exports.Photo = Photo;
var User_1 = require("./User");
(function (Photo) {
    /**
     * Static representation of the [[height]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Photo.HEIGHT = new core_1.NumberField('height', Photo, 'Edm.Int32');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Photo.LAST_MODIFIED = new core_1.DateField('lastModified', Photo, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Photo.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', Photo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Photo.LAST_MODIFIED_WITH_TZ = new core_1.DateField('lastModifiedWithTZ', Photo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Photo.MIME_TYPE = new core_1.StringField('mimeType', Photo, 'Edm.String');
    /**
     * Static representation of the [[photo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Photo.PHOTO = new core_1.BinaryField('photo', Photo, 'Edm.Binary');
    /**
     * Static representation of the [[photoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Photo.PHOTO_ID = new core_1.BigNumberField('photoId', Photo, 'Edm.Int64');
    /**
     * Static representation of the [[photoName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Photo.PHOTO_NAME = new core_1.StringField('photoName', Photo, 'Edm.String');
    /**
     * Static representation of the [[photoType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Photo.PHOTO_TYPE = new core_1.NumberField('photoType', Photo, 'Edm.Int32');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Photo.USER_ID = new core_1.StringField('userId', Photo, 'Edm.String');
    /**
     * Static representation of the [[width]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Photo.WIDTH = new core_1.NumberField('width', Photo, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Photo.USER_NAV = new core_1.OneToOneLink('userNav', Photo, User_1.User);
    /**
     * All fields of the Photo entity.
     */
    Photo._allFields = [
        Photo.HEIGHT,
        Photo.LAST_MODIFIED,
        Photo.LAST_MODIFIED_DATE_TIME,
        Photo.LAST_MODIFIED_WITH_TZ,
        Photo.MIME_TYPE,
        Photo.PHOTO,
        Photo.PHOTO_ID,
        Photo.PHOTO_NAME,
        Photo.PHOTO_TYPE,
        Photo.USER_ID,
        Photo.WIDTH,
        Photo.USER_NAV
    ];
    /**
     * All fields selector.
     */
    Photo.ALL_FIELDS = new core_1.AllFields('*', Photo);
    /**
     * All key fields of the Photo entity.
     */
    Photo._keyFields = [Photo.PHOTO_TYPE, Photo.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Photo.
     */
    Photo._keys = Photo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Photo = exports.Photo || (exports.Photo = {}));
exports.Photo = Photo;
//# sourceMappingURL=Photo.js.map