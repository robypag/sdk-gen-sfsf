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
var TrendData_SysOverallCustom1RequestBuilder_1 = require("./TrendData_SysOverallCustom1RequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TrendData_SysOverallCustom1" of service "SFOData".
 */
var TrendData_SysOverallCustom1 = /** @class */ (function (_super) {
    __extends(TrendData_SysOverallCustom1, _super);
    function TrendData_SysOverallCustom1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TrendData_SysOverallCustom1`.
     * @returns A builder that constructs instances of entity type `TrendData_SysOverallCustom1`.
     */
    TrendData_SysOverallCustom1.builder = function () {
        return core_1.Entity.entityBuilder(TrendData_SysOverallCustom1);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TrendData_SysOverallCustom1` entity type.
     * @returns A `TrendData_SysOverallCustom1` request builder.
     */
    TrendData_SysOverallCustom1.requestBuilder = function () {
        return new TrendData_SysOverallCustom1RequestBuilder_1.TrendData_SysOverallCustom1RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TrendData_SysOverallCustom1`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TrendData_SysOverallCustom1`.
     */
    TrendData_SysOverallCustom1.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TrendData_SysOverallCustom1);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TrendData_SysOverallCustom1.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TrendData_SysOverallCustom1.
     */
    TrendData_SysOverallCustom1._entityName = 'TrendData_SysOverallCustom1';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TrendData_SysOverallCustom1.
     */
    TrendData_SysOverallCustom1._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TrendData_SysOverallCustom1._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TrendData_SysOverallCustom1;
}(core_1.Entity));
exports.TrendData_SysOverallCustom1 = TrendData_SysOverallCustom1;
var User_1 = require("./User");
(function (TrendData_SysOverallCustom1) {
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCustom1.DESCRIPTION = new core_1.StringField('description', TrendData_SysOverallCustom1, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCustom1.END_DATE = new core_1.DateField('endDate', TrendData_SysOverallCustom1, 'Edm.DateTime');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCustom1.ID = new core_1.BigNumberField('id', TrendData_SysOverallCustom1, 'Edm.Int64');
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCustom1.LABEL = new core_1.StringField('label', TrendData_SysOverallCustom1, 'Edm.String');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCustom1.LAST_MODIFIED = new core_1.DateField('lastModified', TrendData_SysOverallCustom1, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[max]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCustom1.MAX = new core_1.NumberField('max', TrendData_SysOverallCustom1, 'Edm.Double');
    /**
     * Static representation of the [[min]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCustom1.MIN = new core_1.NumberField('min', TrendData_SysOverallCustom1, 'Edm.Double');
    /**
     * Static representation of the [[module]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCustom1.MODULE = new core_1.StringField('module', TrendData_SysOverallCustom1, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCustom1.NAME = new core_1.StringField('name', TrendData_SysOverallCustom1, 'Edm.String');
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCustom1.RATING = new core_1.NumberField('rating', TrendData_SysOverallCustom1, 'Edm.Double');
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCustom1.SOURCE = new core_1.StringField('source', TrendData_SysOverallCustom1, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCustom1.START_DATE = new core_1.DateField('startDate', TrendData_SysOverallCustom1, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCustom1.USER_ID = new core_1.StringField('userId', TrendData_SysOverallCustom1, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallCustom1.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', TrendData_SysOverallCustom1, User_1.User);
    /**
     * All fields of the TrendData_SysOverallCustom1 entity.
     */
    TrendData_SysOverallCustom1._allFields = [
        TrendData_SysOverallCustom1.DESCRIPTION,
        TrendData_SysOverallCustom1.END_DATE,
        TrendData_SysOverallCustom1.ID,
        TrendData_SysOverallCustom1.LABEL,
        TrendData_SysOverallCustom1.LAST_MODIFIED,
        TrendData_SysOverallCustom1.MAX,
        TrendData_SysOverallCustom1.MIN,
        TrendData_SysOverallCustom1.MODULE,
        TrendData_SysOverallCustom1.NAME,
        TrendData_SysOverallCustom1.RATING,
        TrendData_SysOverallCustom1.SOURCE,
        TrendData_SysOverallCustom1.START_DATE,
        TrendData_SysOverallCustom1.USER_ID,
        TrendData_SysOverallCustom1.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    TrendData_SysOverallCustom1.ALL_FIELDS = new core_1.AllFields('*', TrendData_SysOverallCustom1);
    /**
     * All key fields of the TrendData_SysOverallCustom1 entity.
     */
    TrendData_SysOverallCustom1._keyFields = [TrendData_SysOverallCustom1.ID];
    /**
     * Mapping of all key field names to the respective static field property TrendData_SysOverallCustom1.
     */
    TrendData_SysOverallCustom1._keys = TrendData_SysOverallCustom1._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TrendData_SysOverallCustom1 = exports.TrendData_SysOverallCustom1 || (exports.TrendData_SysOverallCustom1 = {}));
exports.TrendData_SysOverallCustom1 = TrendData_SysOverallCustom1;
//# sourceMappingURL=TrendData_SysOverallCustom1.js.map