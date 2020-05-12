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
var PicklistRequestBuilder_1 = require("./PicklistRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Picklist" of service "SFOData".
 */
var Picklist = /** @class */ (function (_super) {
    __extends(Picklist, _super);
    function Picklist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Picklist`.
     * @returns A builder that constructs instances of entity type `Picklist`.
     */
    Picklist.builder = function () {
        return core_1.Entity.entityBuilder(Picklist);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Picklist` entity type.
     * @returns A `Picklist` request builder.
     */
    Picklist.requestBuilder = function () {
        return new PicklistRequestBuilder_1.PicklistRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Picklist`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Picklist`.
     */
    Picklist.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Picklist);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Picklist.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Picklist.
     */
    Picklist._entityName = 'Picklist';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Picklist.
     */
    Picklist._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Picklist._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Picklist;
}(core_1.Entity));
exports.Picklist = Picklist;
var PicklistOption_1 = require("./PicklistOption");
(function (Picklist) {
    /**
     * Static representation of the [[picklistId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Picklist.PICKLIST_ID = new core_1.StringField('picklistId', Picklist, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[picklistOptions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Picklist.PICKLIST_OPTIONS = new core_1.Link('picklistOptions', Picklist, PicklistOption_1.PicklistOption);
    /**
     * All fields of the Picklist entity.
     */
    Picklist._allFields = [
        Picklist.PICKLIST_ID,
        Picklist.PICKLIST_OPTIONS
    ];
    /**
     * All fields selector.
     */
    Picklist.ALL_FIELDS = new core_1.AllFields('*', Picklist);
    /**
     * All key fields of the Picklist entity.
     */
    Picklist._keyFields = [Picklist.PICKLIST_ID];
    /**
     * Mapping of all key field names to the respective static field property Picklist.
     */
    Picklist._keys = Picklist._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Picklist = exports.Picklist || (exports.Picklist = {}));
exports.Picklist = Picklist;
//# sourceMappingURL=Picklist.js.map