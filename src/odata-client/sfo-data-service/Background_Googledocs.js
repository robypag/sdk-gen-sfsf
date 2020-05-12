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
var Background_GoogledocsRequestBuilder_1 = require("./Background_GoogledocsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_Googledocs" of service "SFOData".
 */
var Background_Googledocs = /** @class */ (function (_super) {
    __extends(Background_Googledocs, _super);
    function Background_Googledocs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_Googledocs`.
     * @returns A builder that constructs instances of entity type `Background_Googledocs`.
     */
    Background_Googledocs.builder = function () {
        return core_1.Entity.entityBuilder(Background_Googledocs);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_Googledocs` entity type.
     * @returns A `Background_Googledocs` request builder.
     */
    Background_Googledocs.requestBuilder = function () {
        return new Background_GoogledocsRequestBuilder_1.Background_GoogledocsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Googledocs`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Googledocs`.
     */
    Background_Googledocs.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_Googledocs);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_Googledocs.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_Googledocs.
     */
    Background_Googledocs._entityName = 'Background_Googledocs';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Googledocs.
     */
    Background_Googledocs._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_Googledocs._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_Googledocs;
}(core_1.Entity));
exports.Background_Googledocs = Background_Googledocs;
var User_1 = require("./User");
(function (Background_Googledocs) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Googledocs.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_Googledocs, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Googledocs.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_Googledocs, 'Edm.Int64');
    /**
     * Static representation of the [[documentName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Googledocs.DOCUMENT_NAME = new core_1.StringField('documentName', Background_Googledocs, 'Edm.String');
    /**
     * Static representation of the [[documenturl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Googledocs.DOCUMENTURL = new core_1.StringField('documenturl', Background_Googledocs, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Googledocs.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_Googledocs, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastmodifieddate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Googledocs.LASTMODIFIEDDATE = new core_1.DateField('lastmodifieddate', Background_Googledocs, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Googledocs.USER_ID = new core_1.StringField('userId', Background_Googledocs, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Googledocs.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_Googledocs, User_1.User);
    /**
     * All fields of the Background_Googledocs entity.
     */
    Background_Googledocs._allFields = [
        Background_Googledocs.BACKGROUND_ELEMENT_ID,
        Background_Googledocs.BG_ORDER_POS,
        Background_Googledocs.DOCUMENT_NAME,
        Background_Googledocs.DOCUMENTURL,
        Background_Googledocs.LAST_MODIFIED_DATE,
        Background_Googledocs.LASTMODIFIEDDATE,
        Background_Googledocs.USER_ID,
        Background_Googledocs.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_Googledocs.ALL_FIELDS = new core_1.AllFields('*', Background_Googledocs);
    /**
     * All key fields of the Background_Googledocs entity.
     */
    Background_Googledocs._keyFields = [Background_Googledocs.BACKGROUND_ELEMENT_ID, Background_Googledocs.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_Googledocs.
     */
    Background_Googledocs._keys = Background_Googledocs._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_Googledocs = exports.Background_Googledocs || (exports.Background_Googledocs = {}));
exports.Background_Googledocs = Background_Googledocs;
//# sourceMappingURL=Background_Googledocs.js.map