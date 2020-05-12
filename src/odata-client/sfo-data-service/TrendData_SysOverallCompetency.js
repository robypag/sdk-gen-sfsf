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
var TrendData_SysOverallCompetencyRequestBuilder_1 = require("./TrendData_SysOverallCompetencyRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TrendData_SysOverallCompetency" of service "SFOData".
 */
var TrendData_SysOverallCompetency = /** @class */ (function (_super) {
    __extends(TrendData_SysOverallCompetency, _super);
    function TrendData_SysOverallCompetency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TrendData_SysOverallCompetency`.
     * @returns A builder that constructs instances of entity type `TrendData_SysOverallCompetency`.
     */
    TrendData_SysOverallCompetency.builder = function () {
        return core_1.Entity.entityBuilder(TrendData_SysOverallCompetency);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TrendData_SysOverallCompetency` entity type.
     * @returns A `TrendData_SysOverallCompetency` request builder.
     */
    TrendData_SysOverallCompetency.requestBuilder = function () {
        return new TrendData_SysOverallCompetencyRequestBuilder_1.TrendData_SysOverallCompetencyRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TrendData_SysOverallCompetency`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TrendData_SysOverallCompetency`.
     */
    TrendData_SysOverallCompetency.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TrendData_SysOverallCompetency);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TrendData_SysOverallCompetency.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TrendData_SysOverallCompetency.
     */
    TrendData_SysOverallCompetency._entityName = 'TrendData_SysOverallCompetency';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TrendData_SysOverallCompetency.
     */
    TrendData_SysOverallCompetency._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TrendData_SysOverallCompetency._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TrendData_SysOverallCompetency;
}(core_1.Entity));
exports.TrendData_SysOverallCompetency = TrendData_SysOverallCompetency;
var User_1 = require("./User");
(function (TrendData_SysOverallCompetency) {
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCompetency.DESCRIPTION = new core_1.StringField('description', TrendData_SysOverallCompetency, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCompetency.END_DATE = new core_1.DateField('endDate', TrendData_SysOverallCompetency, 'Edm.DateTime');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCompetency.ID = new core_1.BigNumberField('id', TrendData_SysOverallCompetency, 'Edm.Int64');
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCompetency.LABEL = new core_1.StringField('label', TrendData_SysOverallCompetency, 'Edm.String');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCompetency.LAST_MODIFIED = new core_1.DateField('lastModified', TrendData_SysOverallCompetency, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[max]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCompetency.MAX = new core_1.NumberField('max', TrendData_SysOverallCompetency, 'Edm.Double');
    /**
     * Static representation of the [[min]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCompetency.MIN = new core_1.NumberField('min', TrendData_SysOverallCompetency, 'Edm.Double');
    /**
     * Static representation of the [[module]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCompetency.MODULE = new core_1.StringField('module', TrendData_SysOverallCompetency, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCompetency.NAME = new core_1.StringField('name', TrendData_SysOverallCompetency, 'Edm.String');
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCompetency.RATING = new core_1.NumberField('rating', TrendData_SysOverallCompetency, 'Edm.Double');
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCompetency.SOURCE = new core_1.StringField('source', TrendData_SysOverallCompetency, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCompetency.START_DATE = new core_1.DateField('startDate', TrendData_SysOverallCompetency, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCompetency.USER_ID = new core_1.StringField('userId', TrendData_SysOverallCompetency, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCompetency.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', TrendData_SysOverallCompetency, User_1.User);
    /**
     * All fields of the TrendData_SysOverallCompetency entity.
     */
    TrendData_SysOverallCompetency._allFields = [
        TrendData_SysOverallCompetency.DESCRIPTION,
        TrendData_SysOverallCompetency.END_DATE,
        TrendData_SysOverallCompetency.ID,
        TrendData_SysOverallCompetency.LABEL,
        TrendData_SysOverallCompetency.LAST_MODIFIED,
        TrendData_SysOverallCompetency.MAX,
        TrendData_SysOverallCompetency.MIN,
        TrendData_SysOverallCompetency.MODULE,
        TrendData_SysOverallCompetency.NAME,
        TrendData_SysOverallCompetency.RATING,
        TrendData_SysOverallCompetency.SOURCE,
        TrendData_SysOverallCompetency.START_DATE,
        TrendData_SysOverallCompetency.USER_ID,
        TrendData_SysOverallCompetency.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    TrendData_SysOverallCompetency.ALL_FIELDS = new core_1.AllFields('*', TrendData_SysOverallCompetency);
    /**
     * All key fields of the TrendData_SysOverallCompetency entity.
     */
    TrendData_SysOverallCompetency._keyFields = [TrendData_SysOverallCompetency.ID];
    /**
     * Mapping of all key field names to the respective static field property TrendData_SysOverallCompetency.
     */
    TrendData_SysOverallCompetency._keys = TrendData_SysOverallCompetency._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TrendData_SysOverallCompetency = exports.TrendData_SysOverallCompetency || (exports.TrendData_SysOverallCompetency = {}));
exports.TrendData_SysOverallCompetency = TrendData_SysOverallCompetency;
//# sourceMappingURL=TrendData_SysOverallCompetency.js.map