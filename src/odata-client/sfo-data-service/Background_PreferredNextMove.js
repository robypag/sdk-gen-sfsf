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
var Background_PreferredNextMoveRequestBuilder_1 = require("./Background_PreferredNextMoveRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_PreferredNextMove" of service "SFOData".
 */
var Background_PreferredNextMove = /** @class */ (function (_super) {
    __extends(Background_PreferredNextMove, _super);
    function Background_PreferredNextMove() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_PreferredNextMove`.
     * @returns A builder that constructs instances of entity type `Background_PreferredNextMove`.
     */
    Background_PreferredNextMove.builder = function () {
        return core_1.Entity.entityBuilder(Background_PreferredNextMove);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_PreferredNextMove` entity type.
     * @returns A `Background_PreferredNextMove` request builder.
     */
    Background_PreferredNextMove.requestBuilder = function () {
        return new Background_PreferredNextMoveRequestBuilder_1.Background_PreferredNextMoveRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_PreferredNextMove`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_PreferredNextMove`.
     */
    Background_PreferredNextMove.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_PreferredNextMove);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_PreferredNextMove.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_PreferredNextMove.
     */
    Background_PreferredNextMove._entityName = 'Background_PreferredNextMove';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_PreferredNextMove.
     */
    Background_PreferredNextMove._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_PreferredNextMove._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_PreferredNextMove;
}(core_1.Entity));
exports.Background_PreferredNextMove = Background_PreferredNextMove;
var PicklistOption_1 = require("./PicklistOption");
var User_1 = require("./User");
(function (Background_PreferredNextMove) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_PreferredNextMove.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_PreferredNextMove, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_PreferredNextMove.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_PreferredNextMove, 'Edm.Int64');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_PreferredNextMove.COMMENTS = new core_1.StringField('comments', Background_PreferredNextMove, 'Edm.String');
    /**
     * Static representation of the [[function]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_PreferredNextMove.FUNCTION = new core_1.StringField('function', Background_PreferredNextMove, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_PreferredNextMove.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_PreferredNextMove, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[level]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_PreferredNextMove.LEVEL = new core_1.StringField('level', Background_PreferredNextMove, 'Edm.String');
    /**
     * Static representation of the [[timeframe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_PreferredNextMove.TIMEFRAME = new core_1.StringField('timeframe', Background_PreferredNextMove, 'Edm.String');
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_PreferredNextMove.TITLE = new core_1.StringField('title', Background_PreferredNextMove, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_PreferredNextMove.USER_ID = new core_1.StringField('userId', Background_PreferredNextMove, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[functionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_PreferredNextMove.FUNCTION_NAV = new core_1.OneToOneLink('functionNav', Background_PreferredNextMove, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[levelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_PreferredNextMove.LEVEL_NAV = new core_1.OneToOneLink('levelNav', Background_PreferredNextMove, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[timeframeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_PreferredNextMove.TIMEFRAME_NAV = new core_1.OneToOneLink('timeframeNav', Background_PreferredNextMove, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_PreferredNextMove.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_PreferredNextMove, User_1.User);
    /**
     * All fields of the Background_PreferredNextMove entity.
     */
    Background_PreferredNextMove._allFields = [
        Background_PreferredNextMove.BACKGROUND_ELEMENT_ID,
        Background_PreferredNextMove.BG_ORDER_POS,
        Background_PreferredNextMove.COMMENTS,
        Background_PreferredNextMove.FUNCTION,
        Background_PreferredNextMove.LAST_MODIFIED_DATE,
        Background_PreferredNextMove.LEVEL,
        Background_PreferredNextMove.TIMEFRAME,
        Background_PreferredNextMove.TITLE,
        Background_PreferredNextMove.USER_ID,
        Background_PreferredNextMove.FUNCTION_NAV,
        Background_PreferredNextMove.LEVEL_NAV,
        Background_PreferredNextMove.TIMEFRAME_NAV,
        Background_PreferredNextMove.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_PreferredNextMove.ALL_FIELDS = new core_1.AllFields('*', Background_PreferredNextMove);
    /**
     * All key fields of the Background_PreferredNextMove entity.
     */
    Background_PreferredNextMove._keyFields = [Background_PreferredNextMove.BACKGROUND_ELEMENT_ID, Background_PreferredNextMove.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_PreferredNextMove.
     */
    Background_PreferredNextMove._keys = Background_PreferredNextMove._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_PreferredNextMove = exports.Background_PreferredNextMove || (exports.Background_PreferredNextMove = {}));
exports.Background_PreferredNextMove = Background_PreferredNextMove;
//# sourceMappingURL=Background_PreferredNextMove.js.map