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
var TrendData_SysOverallPerformanceRequestBuilder_1 = require("./TrendData_SysOverallPerformanceRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TrendData_SysOverallPerformance" of service "SFOData".
 */
var TrendData_SysOverallPerformance = /** @class */ (function (_super) {
    __extends(TrendData_SysOverallPerformance, _super);
    function TrendData_SysOverallPerformance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TrendData_SysOverallPerformance`.
     * @returns A builder that constructs instances of entity type `TrendData_SysOverallPerformance`.
     */
    TrendData_SysOverallPerformance.builder = function () {
        return core_1.Entity.entityBuilder(TrendData_SysOverallPerformance);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TrendData_SysOverallPerformance` entity type.
     * @returns A `TrendData_SysOverallPerformance` request builder.
     */
    TrendData_SysOverallPerformance.requestBuilder = function () {
        return new TrendData_SysOverallPerformanceRequestBuilder_1.TrendData_SysOverallPerformanceRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TrendData_SysOverallPerformance`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TrendData_SysOverallPerformance`.
     */
    TrendData_SysOverallPerformance.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TrendData_SysOverallPerformance);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TrendData_SysOverallPerformance.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TrendData_SysOverallPerformance.
     */
    TrendData_SysOverallPerformance._entityName = 'TrendData_SysOverallPerformance';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TrendData_SysOverallPerformance.
     */
    TrendData_SysOverallPerformance._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TrendData_SysOverallPerformance._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TrendData_SysOverallPerformance;
}(core_1.Entity));
exports.TrendData_SysOverallPerformance = TrendData_SysOverallPerformance;
var User_1 = require("./User");
(function (TrendData_SysOverallPerformance) {
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPerformance.DESCRIPTION = new core_1.StringField('description', TrendData_SysOverallPerformance, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPerformance.END_DATE = new core_1.DateField('endDate', TrendData_SysOverallPerformance, 'Edm.DateTime');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPerformance.ID = new core_1.BigNumberField('id', TrendData_SysOverallPerformance, 'Edm.Int64');
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPerformance.LABEL = new core_1.StringField('label', TrendData_SysOverallPerformance, 'Edm.String');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPerformance.LAST_MODIFIED = new core_1.DateField('lastModified', TrendData_SysOverallPerformance, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[max]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPerformance.MAX = new core_1.NumberField('max', TrendData_SysOverallPerformance, 'Edm.Double');
    /**
     * Static representation of the [[min]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPerformance.MIN = new core_1.NumberField('min', TrendData_SysOverallPerformance, 'Edm.Double');
    /**
     * Static representation of the [[module]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPerformance.MODULE = new core_1.StringField('module', TrendData_SysOverallPerformance, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPerformance.NAME = new core_1.StringField('name', TrendData_SysOverallPerformance, 'Edm.String');
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPerformance.RATING = new core_1.NumberField('rating', TrendData_SysOverallPerformance, 'Edm.Double');
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPerformance.SOURCE = new core_1.StringField('source', TrendData_SysOverallPerformance, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPerformance.START_DATE = new core_1.DateField('startDate', TrendData_SysOverallPerformance, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPerformance.USER_ID = new core_1.StringField('userId', TrendData_SysOverallPerformance, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPerformance.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', TrendData_SysOverallPerformance, User_1.User);
    /**
     * All fields of the TrendData_SysOverallPerformance entity.
     */
    TrendData_SysOverallPerformance._allFields = [
        TrendData_SysOverallPerformance.DESCRIPTION,
        TrendData_SysOverallPerformance.END_DATE,
        TrendData_SysOverallPerformance.ID,
        TrendData_SysOverallPerformance.LABEL,
        TrendData_SysOverallPerformance.LAST_MODIFIED,
        TrendData_SysOverallPerformance.MAX,
        TrendData_SysOverallPerformance.MIN,
        TrendData_SysOverallPerformance.MODULE,
        TrendData_SysOverallPerformance.NAME,
        TrendData_SysOverallPerformance.RATING,
        TrendData_SysOverallPerformance.SOURCE,
        TrendData_SysOverallPerformance.START_DATE,
        TrendData_SysOverallPerformance.USER_ID,
        TrendData_SysOverallPerformance.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    TrendData_SysOverallPerformance.ALL_FIELDS = new core_1.AllFields('*', TrendData_SysOverallPerformance);
    /**
     * All key fields of the TrendData_SysOverallPerformance entity.
     */
    TrendData_SysOverallPerformance._keyFields = [TrendData_SysOverallPerformance.ID];
    /**
     * Mapping of all key field names to the respective static field property TrendData_SysOverallPerformance.
     */
    TrendData_SysOverallPerformance._keys = TrendData_SysOverallPerformance._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TrendData_SysOverallPerformance = exports.TrendData_SysOverallPerformance || (exports.TrendData_SysOverallPerformance = {}));
exports.TrendData_SysOverallPerformance = TrendData_SysOverallPerformance;
//# sourceMappingURL=TrendData_SysOverallPerformance.js.map