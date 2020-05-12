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
var GoalComment_1RequestBuilder_1 = require("./GoalComment_1RequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "GoalComment_1" of service "SFOData".
 */
var GoalComment_1 = /** @class */ (function (_super) {
    __extends(GoalComment_1, _super);
    function GoalComment_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `GoalComment_1`.
     * @returns A builder that constructs instances of entity type `GoalComment_1`.
     */
    GoalComment_1.builder = function () {
        return core_1.Entity.entityBuilder(GoalComment_1);
    };
    /**
     * Returns a request builder to construct requests for operations on the `GoalComment_1` entity type.
     * @returns A `GoalComment_1` request builder.
     */
    GoalComment_1.requestBuilder = function () {
        return new GoalComment_1RequestBuilder_1.GoalComment_1RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalComment_1`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GoalComment_1`.
     */
    GoalComment_1.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, GoalComment_1);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    GoalComment_1.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for GoalComment_1.
     */
    GoalComment_1._entityName = 'GoalComment_1';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GoalComment_1.
     */
    GoalComment_1._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    GoalComment_1._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return GoalComment_1;
}(core_1.Entity));
exports.GoalComment_1 = GoalComment_1;
(function (GoalComment_1) {
    /**
     * Static representation of the [[commentator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalComment_1.COMMENTATOR = new core_1.StringField('commentator', GoalComment_1, 'Edm.String');
    /**
     * Static representation of the [[content]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalComment_1.CONTENT = new core_1.StringField('content', GoalComment_1, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalComment_1.ID = new core_1.BigNumberField('id', GoalComment_1, 'Edm.Int64');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalComment_1.LAST_MODIFIED = new core_1.DateField('lastModified', GoalComment_1, 'Edm.DateTime');
    /**
     * Static representation of the [[objId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoalComment_1.OBJ_ID = new core_1.BigNumberField('objId', GoalComment_1, 'Edm.Int64');
    /**
     * All fields of the GoalComment_1 entity.
     */
    GoalComment_1._allFields = [
        GoalComment_1.COMMENTATOR,
        GoalComment_1.CONTENT,
        GoalComment_1.ID,
        GoalComment_1.LAST_MODIFIED,
        GoalComment_1.OBJ_ID
    ];
    /**
     * All fields selector.
     */
    GoalComment_1.ALL_FIELDS = new core_1.AllFields('*', GoalComment_1);
    /**
     * All key fields of the GoalComment_1 entity.
     */
    GoalComment_1._keyFields = [GoalComment_1.ID];
    /**
     * Mapping of all key field names to the respective static field property GoalComment_1.
     */
    GoalComment_1._keys = GoalComment_1._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(GoalComment_1 = exports.GoalComment_1 || (exports.GoalComment_1 = {}));
exports.GoalComment_1 = GoalComment_1;
//# sourceMappingURL=GoalComment_1.js.map