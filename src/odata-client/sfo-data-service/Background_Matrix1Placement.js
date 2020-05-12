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
var Background_Matrix1PlacementRequestBuilder_1 = require("./Background_Matrix1PlacementRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_Matrix1placement" of service "SFOData".
 */
var Background_Matrix1Placement = /** @class */ (function (_super) {
    __extends(Background_Matrix1Placement, _super);
    function Background_Matrix1Placement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_Matrix1Placement`.
     * @returns A builder that constructs instances of entity type `Background_Matrix1Placement`.
     */
    Background_Matrix1Placement.builder = function () {
        return core_1.Entity.entityBuilder(Background_Matrix1Placement);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_Matrix1Placement` entity type.
     * @returns A `Background_Matrix1Placement` request builder.
     */
    Background_Matrix1Placement.requestBuilder = function () {
        return new Background_Matrix1PlacementRequestBuilder_1.Background_Matrix1PlacementRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Matrix1Placement`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Matrix1Placement`.
     */
    Background_Matrix1Placement.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_Matrix1Placement);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_Matrix1Placement.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_Matrix1Placement.
     */
    Background_Matrix1Placement._entityName = 'Background_Matrix1placement';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Matrix1Placement.
     */
    Background_Matrix1Placement._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_Matrix1Placement._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_Matrix1Placement;
}(core_1.Entity));
exports.Background_Matrix1Placement = Background_Matrix1Placement;
var User_1 = require("./User");
(function (Background_Matrix1Placement) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Matrix1Placement.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_Matrix1Placement, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Matrix1Placement.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_Matrix1Placement, 'Edm.Int64');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Matrix1Placement.END_DATE = new core_1.DateField('endDate', Background_Matrix1Placement, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Matrix1Placement.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_Matrix1Placement, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[nineBox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Matrix1Placement.NINE_BOX = new core_1.StringField('nineBox', Background_Matrix1Placement, 'Edm.String');
    /**
     * Static representation of the [[placement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Matrix1Placement.PLACEMENT = new core_1.NumberField('placement', Background_Matrix1Placement, 'Edm.Int32');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Matrix1Placement.START_DATE = new core_1.DateField('startDate', Background_Matrix1Placement, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Matrix1Placement.USER_ID = new core_1.StringField('userId', Background_Matrix1Placement, 'Edm.String');
    /**
     * Static representation of the [[xAxisEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Matrix1Placement.X_AXIS_END_DATE = new core_1.DateField('xAxisEndDate', Background_Matrix1Placement, 'Edm.DateTime');
    /**
     * Static representation of the [[xAxisStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Matrix1Placement.X_AXIS_START_DATE = new core_1.DateField('xAxisStartDate', Background_Matrix1Placement, 'Edm.DateTime');
    /**
     * Static representation of the [[xAxisTrend]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Matrix1Placement.X_AXIS_TREND = new core_1.NumberField('xAxisTrend', Background_Matrix1Placement, 'Edm.Int32');
    /**
     * Static representation of the [[yAxisEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Matrix1Placement.Y_AXIS_END_DATE = new core_1.DateField('yAxisEndDate', Background_Matrix1Placement, 'Edm.DateTime');
    /**
     * Static representation of the [[yAxisStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Matrix1Placement.Y_AXIS_START_DATE = new core_1.DateField('yAxisStartDate', Background_Matrix1Placement, 'Edm.DateTime');
    /**
     * Static representation of the [[yAxisTrend]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Matrix1Placement.Y_AXIS_TREND = new core_1.NumberField('yAxisTrend', Background_Matrix1Placement, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Matrix1Placement.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_Matrix1Placement, User_1.User);
    /**
     * All fields of the Background_Matrix1Placement entity.
     */
    Background_Matrix1Placement._allFields = [
        Background_Matrix1Placement.BACKGROUND_ELEMENT_ID,
        Background_Matrix1Placement.BG_ORDER_POS,
        Background_Matrix1Placement.END_DATE,
        Background_Matrix1Placement.LAST_MODIFIED_DATE,
        Background_Matrix1Placement.NINE_BOX,
        Background_Matrix1Placement.PLACEMENT,
        Background_Matrix1Placement.START_DATE,
        Background_Matrix1Placement.USER_ID,
        Background_Matrix1Placement.X_AXIS_END_DATE,
        Background_Matrix1Placement.X_AXIS_START_DATE,
        Background_Matrix1Placement.X_AXIS_TREND,
        Background_Matrix1Placement.Y_AXIS_END_DATE,
        Background_Matrix1Placement.Y_AXIS_START_DATE,
        Background_Matrix1Placement.Y_AXIS_TREND,
        Background_Matrix1Placement.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_Matrix1Placement.ALL_FIELDS = new core_1.AllFields('*', Background_Matrix1Placement);
    /**
     * All key fields of the Background_Matrix1Placement entity.
     */
    Background_Matrix1Placement._keyFields = [Background_Matrix1Placement.BACKGROUND_ELEMENT_ID, Background_Matrix1Placement.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_Matrix1Placement.
     */
    Background_Matrix1Placement._keys = Background_Matrix1Placement._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_Matrix1Placement = exports.Background_Matrix1Placement || (exports.Background_Matrix1Placement = {}));
exports.Background_Matrix1Placement = Background_Matrix1Placement;
//# sourceMappingURL=Background_Matrix1Placement.js.map