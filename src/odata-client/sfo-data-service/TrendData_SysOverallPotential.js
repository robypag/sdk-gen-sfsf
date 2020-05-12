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
var TrendData_SysOverallPotentialRequestBuilder_1 = require("./TrendData_SysOverallPotentialRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TrendData_SysOverallPotential" of service "SFOData".
 */
var TrendData_SysOverallPotential = /** @class */ (function (_super) {
    __extends(TrendData_SysOverallPotential, _super);
    function TrendData_SysOverallPotential() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TrendData_SysOverallPotential`.
     * @returns A builder that constructs instances of entity type `TrendData_SysOverallPotential`.
     */
    TrendData_SysOverallPotential.builder = function () {
        return core_1.Entity.entityBuilder(TrendData_SysOverallPotential);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TrendData_SysOverallPotential` entity type.
     * @returns A `TrendData_SysOverallPotential` request builder.
     */
    TrendData_SysOverallPotential.requestBuilder = function () {
        return new TrendData_SysOverallPotentialRequestBuilder_1.TrendData_SysOverallPotentialRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TrendData_SysOverallPotential`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TrendData_SysOverallPotential`.
     */
    TrendData_SysOverallPotential.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TrendData_SysOverallPotential);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TrendData_SysOverallPotential.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TrendData_SysOverallPotential.
     */
    TrendData_SysOverallPotential._entityName = 'TrendData_SysOverallPotential';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TrendData_SysOverallPotential.
     */
    TrendData_SysOverallPotential._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TrendData_SysOverallPotential._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TrendData_SysOverallPotential;
}(core_1.Entity));
exports.TrendData_SysOverallPotential = TrendData_SysOverallPotential;
var User_1 = require("./User");
(function (TrendData_SysOverallPotential) {
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPotential.DESCRIPTION = new core_1.StringField('description', TrendData_SysOverallPotential, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPotential.END_DATE = new core_1.DateField('endDate', TrendData_SysOverallPotential, 'Edm.DateTime');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPotential.ID = new core_1.BigNumberField('id', TrendData_SysOverallPotential, 'Edm.Int64');
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPotential.LABEL = new core_1.StringField('label', TrendData_SysOverallPotential, 'Edm.String');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPotential.LAST_MODIFIED = new core_1.DateField('lastModified', TrendData_SysOverallPotential, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[max]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPotential.MAX = new core_1.NumberField('max', TrendData_SysOverallPotential, 'Edm.Double');
    /**
     * Static representation of the [[min]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPotential.MIN = new core_1.NumberField('min', TrendData_SysOverallPotential, 'Edm.Double');
    /**
     * Static representation of the [[module]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPotential.MODULE = new core_1.StringField('module', TrendData_SysOverallPotential, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPotential.NAME = new core_1.StringField('name', TrendData_SysOverallPotential, 'Edm.String');
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPotential.RATING = new core_1.NumberField('rating', TrendData_SysOverallPotential, 'Edm.Double');
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPotential.SOURCE = new core_1.StringField('source', TrendData_SysOverallPotential, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPotential.START_DATE = new core_1.DateField('startDate', TrendData_SysOverallPotential, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPotential.USER_ID = new core_1.StringField('userId', TrendData_SysOverallPotential, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrendData_SysOverallPotential.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', TrendData_SysOverallPotential, User_1.User);
    /**
     * All fields of the TrendData_SysOverallPotential entity.
     */
    TrendData_SysOverallPotential._allFields = [
        TrendData_SysOverallPotential.DESCRIPTION,
        TrendData_SysOverallPotential.END_DATE,
        TrendData_SysOverallPotential.ID,
        TrendData_SysOverallPotential.LABEL,
        TrendData_SysOverallPotential.LAST_MODIFIED,
        TrendData_SysOverallPotential.MAX,
        TrendData_SysOverallPotential.MIN,
        TrendData_SysOverallPotential.MODULE,
        TrendData_SysOverallPotential.NAME,
        TrendData_SysOverallPotential.RATING,
        TrendData_SysOverallPotential.SOURCE,
        TrendData_SysOverallPotential.START_DATE,
        TrendData_SysOverallPotential.USER_ID,
        TrendData_SysOverallPotential.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    TrendData_SysOverallPotential.ALL_FIELDS = new core_1.AllFields('*', TrendData_SysOverallPotential);
    /**
     * All key fields of the TrendData_SysOverallPotential entity.
     */
    TrendData_SysOverallPotential._keyFields = [TrendData_SysOverallPotential.ID];
    /**
     * Mapping of all key field names to the respective static field property TrendData_SysOverallPotential.
     */
    TrendData_SysOverallPotential._keys = TrendData_SysOverallPotential._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TrendData_SysOverallPotential = exports.TrendData_SysOverallPotential || (exports.TrendData_SysOverallPotential = {}));
exports.TrendData_SysOverallPotential = TrendData_SysOverallPotential;
//# sourceMappingURL=TrendData_SysOverallPotential.js.map