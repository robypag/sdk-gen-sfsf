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
var TrendData_SysOverallObjectiveRequestBuilder_1 = require("./TrendData_SysOverallObjectiveRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TrendData_SysOverallObjective" of service "SFOData".
 */
var TrendData_SysOverallObjective = /** @class */ (function (_super) {
    __extends(TrendData_SysOverallObjective, _super);
    function TrendData_SysOverallObjective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TrendData_SysOverallObjective`.
     * @returns A builder that constructs instances of entity type `TrendData_SysOverallObjective`.
     */
    TrendData_SysOverallObjective.builder = function () {
        return core_1.Entity.entityBuilder(TrendData_SysOverallObjective);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TrendData_SysOverallObjective` entity type.
     * @returns A `TrendData_SysOverallObjective` request builder.
     */
    TrendData_SysOverallObjective.requestBuilder = function () {
        return new TrendData_SysOverallObjectiveRequestBuilder_1.TrendData_SysOverallObjectiveRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TrendData_SysOverallObjective`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TrendData_SysOverallObjective`.
     */
    TrendData_SysOverallObjective.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TrendData_SysOverallObjective);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TrendData_SysOverallObjective.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TrendData_SysOverallObjective.
     */
    TrendData_SysOverallObjective._entityName = 'TrendData_SysOverallObjective';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TrendData_SysOverallObjective.
     */
    TrendData_SysOverallObjective._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TrendData_SysOverallObjective._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TrendData_SysOverallObjective;
}(core_1.Entity));
exports.TrendData_SysOverallObjective = TrendData_SysOverallObjective;
var User_1 = require("./User");
(function (TrendData_SysOverallObjective) {
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallObjective.DESCRIPTION = new core_1.StringField('description', TrendData_SysOverallObjective, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallObjective.END_DATE = new core_1.DateField('endDate', TrendData_SysOverallObjective, 'Edm.DateTime');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallObjective.ID = new core_1.BigNumberField('id', TrendData_SysOverallObjective, 'Edm.Int64');
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallObjective.LABEL = new core_1.StringField('label', TrendData_SysOverallObjective, 'Edm.String');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallObjective.LAST_MODIFIED = new core_1.DateField('lastModified', TrendData_SysOverallObjective, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[max]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallObjective.MAX = new core_1.NumberField('max', TrendData_SysOverallObjective, 'Edm.Double');
    /**
     * Static representation of the [[min]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallObjective.MIN = new core_1.NumberField('min', TrendData_SysOverallObjective, 'Edm.Double');
    /**
     * Static representation of the [[module]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallObjective.MODULE = new core_1.StringField('module', TrendData_SysOverallObjective, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallObjective.NAME = new core_1.StringField('name', TrendData_SysOverallObjective, 'Edm.String');
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallObjective.RATING = new core_1.NumberField('rating', TrendData_SysOverallObjective, 'Edm.Double');
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallObjective.SOURCE = new core_1.StringField('source', TrendData_SysOverallObjective, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallObjective.START_DATE = new core_1.DateField('startDate', TrendData_SysOverallObjective, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallObjective.USER_ID = new core_1.StringField('userId', TrendData_SysOverallObjective, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallObjective.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', TrendData_SysOverallObjective, User_1.User);
    /**
     * All fields of the TrendData_SysOverallObjective entity.
     */
    TrendData_SysOverallObjective._allFields = [
        TrendData_SysOverallObjective.DESCRIPTION,
        TrendData_SysOverallObjective.END_DATE,
        TrendData_SysOverallObjective.ID,
        TrendData_SysOverallObjective.LABEL,
        TrendData_SysOverallObjective.LAST_MODIFIED,
        TrendData_SysOverallObjective.MAX,
        TrendData_SysOverallObjective.MIN,
        TrendData_SysOverallObjective.MODULE,
        TrendData_SysOverallObjective.NAME,
        TrendData_SysOverallObjective.RATING,
        TrendData_SysOverallObjective.SOURCE,
        TrendData_SysOverallObjective.START_DATE,
        TrendData_SysOverallObjective.USER_ID,
        TrendData_SysOverallObjective.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    TrendData_SysOverallObjective.ALL_FIELDS = new core_1.AllFields('*', TrendData_SysOverallObjective);
    /**
     * All key fields of the TrendData_SysOverallObjective entity.
     */
    TrendData_SysOverallObjective._keyFields = [TrendData_SysOverallObjective.ID];
    /**
     * Mapping of all key field names to the respective static field property TrendData_SysOverallObjective.
     */
    TrendData_SysOverallObjective._keys = TrendData_SysOverallObjective._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TrendData_SysOverallObjective = exports.TrendData_SysOverallObjective || (exports.TrendData_SysOverallObjective = {}));
exports.TrendData_SysOverallObjective = TrendData_SysOverallObjective;
//# sourceMappingURL=TrendData_SysOverallObjective.js.map