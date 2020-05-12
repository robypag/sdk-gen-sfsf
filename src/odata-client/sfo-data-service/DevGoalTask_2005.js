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
var DevGoalTask_2005RequestBuilder_1 = require("./DevGoalTask_2005RequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DevGoalTask_2005" of service "SFOData".
 */
var DevGoalTask_2005 = /** @class */ (function (_super) {
    __extends(DevGoalTask_2005, _super);
    function DevGoalTask_2005() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DevGoalTask_2005`.
     * @returns A builder that constructs instances of entity type `DevGoalTask_2005`.
     */
    DevGoalTask_2005.builder = function () {
        return core_1.Entity.entityBuilder(DevGoalTask_2005);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DevGoalTask_2005` entity type.
     * @returns A `DevGoalTask_2005` request builder.
     */
    DevGoalTask_2005.requestBuilder = function () {
        return new DevGoalTask_2005RequestBuilder_1.DevGoalTask_2005RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalTask_2005`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DevGoalTask_2005`.
     */
    DevGoalTask_2005.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DevGoalTask_2005);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DevGoalTask_2005.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DevGoalTask_2005.
     */
    DevGoalTask_2005._entityName = 'DevGoalTask_2005';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DevGoalTask_2005.
     */
    DevGoalTask_2005._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DevGoalTask_2005._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DevGoalTask_2005;
}(core_1.Entity));
exports.DevGoalTask_2005 = DevGoalTask_2005;
(function (DevGoalTask_2005) {
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalTask_2005.DESCRIPTION = new core_1.StringField('description', DevGoalTask_2005, 'Edm.String');
    /**
     * Static representation of the [[due]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalTask_2005.DUE = new core_1.DateField('due', DevGoalTask_2005, 'Edm.DateTime');
    /**
     * Static representation of the [[flag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalTask_2005.FLAG = new core_1.BigNumberField('flag', DevGoalTask_2005, 'Edm.Int64');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalTask_2005.ID = new core_1.BigNumberField('id', DevGoalTask_2005, 'Edm.Int64');
    /**
     * Static representation of the [[index]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalTask_2005.INDEX = new core_1.NumberField('index', DevGoalTask_2005, 'Edm.Int32');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalTask_2005.LAST_MODIFIED = new core_1.DateField('lastModified', DevGoalTask_2005, 'Edm.DateTime');
    /**
     * Static representation of the [[modifier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalTask_2005.MODIFIER = new core_1.StringField('modifier', DevGoalTask_2005, 'Edm.String');
    /**
     * Static representation of the [[objId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevGoalTask_2005.OBJ_ID = new core_1.BigNumberField('objId', DevGoalTask_2005, 'Edm.Int64');
    /**
     * All fields of the DevGoalTask_2005 entity.
     */
    DevGoalTask_2005._allFields = [
        DevGoalTask_2005.DESCRIPTION,
        DevGoalTask_2005.DUE,
        DevGoalTask_2005.FLAG,
        DevGoalTask_2005.ID,
        DevGoalTask_2005.INDEX,
        DevGoalTask_2005.LAST_MODIFIED,
        DevGoalTask_2005.MODIFIER,
        DevGoalTask_2005.OBJ_ID
    ];
    /**
     * All fields selector.
     */
    DevGoalTask_2005.ALL_FIELDS = new core_1.AllFields('*', DevGoalTask_2005);
    /**
     * All key fields of the DevGoalTask_2005 entity.
     */
    DevGoalTask_2005._keyFields = [DevGoalTask_2005.ID];
    /**
     * Mapping of all key field names to the respective static field property DevGoalTask_2005.
     */
    DevGoalTask_2005._keys = DevGoalTask_2005._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DevGoalTask_2005 = exports.DevGoalTask_2005 || (exports.DevGoalTask_2005 = {}));
exports.DevGoalTask_2005 = DevGoalTask_2005;
//# sourceMappingURL=DevGoalTask_2005.js.map