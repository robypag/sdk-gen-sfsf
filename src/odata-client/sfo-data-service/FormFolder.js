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
var FormFolderRequestBuilder_1 = require("./FormFolderRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormFolder" of service "SFOData".
 */
var FormFolder = /** @class */ (function (_super) {
    __extends(FormFolder, _super);
    function FormFolder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormFolder`.
     * @returns A builder that constructs instances of entity type `FormFolder`.
     */
    FormFolder.builder = function () {
        return core_1.Entity.entityBuilder(FormFolder);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormFolder` entity type.
     * @returns A `FormFolder` request builder.
     */
    FormFolder.requestBuilder = function () {
        return new FormFolderRequestBuilder_1.FormFolderRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormFolder`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormFolder`.
     */
    FormFolder.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormFolder);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormFolder.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormFolder.
     */
    FormFolder._entityName = 'FormFolder';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormFolder.
     */
    FormFolder._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormFolder._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormFolder;
}(core_1.Entity));
exports.FormFolder = FormFolder;
var FormContent_1 = require("./FormContent");
(function (FormFolder) {
    /**
     * Static representation of the [[folderId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormFolder.FOLDER_ID = new core_1.BigNumberField('folderId', FormFolder, 'Edm.Int64');
    /**
     * Static representation of the [[folderName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormFolder.FOLDER_NAME = new core_1.StringField('folderName', FormFolder, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormFolder.USER_ID = new core_1.StringField('userId', FormFolder, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[forms]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormFolder.FORMS = new core_1.Link('forms', FormFolder, FormContent_1.FormContent);
    /**
     * All fields of the FormFolder entity.
     */
    FormFolder._allFields = [
        FormFolder.FOLDER_ID,
        FormFolder.FOLDER_NAME,
        FormFolder.USER_ID,
        FormFolder.FORMS
    ];
    /**
     * All fields selector.
     */
    FormFolder.ALL_FIELDS = new core_1.AllFields('*', FormFolder);
    /**
     * All key fields of the FormFolder entity.
     */
    FormFolder._keyFields = [FormFolder.FOLDER_ID];
    /**
     * Mapping of all key field names to the respective static field property FormFolder.
     */
    FormFolder._keys = FormFolder._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormFolder = exports.FormFolder || (exports.FormFolder = {}));
exports.FormFolder = FormFolder;
//# sourceMappingURL=FormFolder.js.map