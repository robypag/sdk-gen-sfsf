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
var DgExpressionRequestBuilder_1 = require("./DgExpressionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DGExpression" of service "SFOData".
 */
var DgExpression = /** @class */ (function (_super) {
    __extends(DgExpression, _super);
    function DgExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DgExpression`.
     * @returns A builder that constructs instances of entity type `DgExpression`.
     */
    DgExpression.builder = function () {
        return core_1.Entity.entityBuilder(DgExpression);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DgExpression` entity type.
     * @returns A `DgExpression` request builder.
     */
    DgExpression.requestBuilder = function () {
        return new DgExpressionRequestBuilder_1.DgExpressionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DgExpression`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DgExpression`.
     */
    DgExpression.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DgExpression);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DgExpression.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DgExpression.
     */
    DgExpression._entityName = 'DGExpression';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DgExpression.
     */
    DgExpression._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DgExpression._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DgExpression;
}(core_1.Entity));
exports.DgExpression = DgExpression;
var DgFieldOperator_1 = require("./DgFieldOperator");
var DgFieldValue_1 = require("./DgFieldValue");
(function (DgExpression) {
    /**
     * Static representation of the [[expressionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DgExpression.EXPRESSION_ID = new core_1.StringField('expressionID', DgExpression, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[operator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DgExpression.OPERATOR = new core_1.OneToOneLink('operator', DgExpression, DgFieldOperator_1.DgFieldOperator);
    /**
     * Static representation of the one-to-many navigation property [[values]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DgExpression.VALUES = new core_1.Link('values', DgExpression, DgFieldValue_1.DgFieldValue);
    /**
     * All fields of the DgExpression entity.
     */
    DgExpression._allFields = [
        DgExpression.EXPRESSION_ID,
        DgExpression.OPERATOR,
        DgExpression.VALUES
    ];
    /**
     * All fields selector.
     */
    DgExpression.ALL_FIELDS = new core_1.AllFields('*', DgExpression);
    /**
     * All key fields of the DgExpression entity.
     */
    DgExpression._keyFields = [DgExpression.EXPRESSION_ID];
    /**
     * Mapping of all key field names to the respective static field property DgExpression.
     */
    DgExpression._keys = DgExpression._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DgExpression = exports.DgExpression || (exports.DgExpression = {}));
exports.DgExpression = DgExpression;
//# sourceMappingURL=DgExpression.js.map