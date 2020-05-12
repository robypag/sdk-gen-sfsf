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
var LegacyPositionEntityRequestBuilder_1 = require("./LegacyPositionEntityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "LegacyPositionEntity" of service "SFOData".
 */
var LegacyPositionEntity = /** @class */ (function (_super) {
    __extends(LegacyPositionEntity, _super);
    function LegacyPositionEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `LegacyPositionEntity`.
     * @returns A builder that constructs instances of entity type `LegacyPositionEntity`.
     */
    LegacyPositionEntity.builder = function () {
        return core_1.Entity.entityBuilder(LegacyPositionEntity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `LegacyPositionEntity` entity type.
     * @returns A `LegacyPositionEntity` request builder.
     */
    LegacyPositionEntity.requestBuilder = function () {
        return new LegacyPositionEntityRequestBuilder_1.LegacyPositionEntityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegacyPositionEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LegacyPositionEntity`.
     */
    LegacyPositionEntity.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, LegacyPositionEntity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    LegacyPositionEntity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for LegacyPositionEntity.
     */
    LegacyPositionEntity._entityName = 'LegacyPositionEntity';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LegacyPositionEntity.
     */
    LegacyPositionEntity._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    LegacyPositionEntity._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return LegacyPositionEntity;
}(core_1.Entity));
exports.LegacyPositionEntity = LegacyPositionEntity;
var User_1 = require("./User");
var Successor_1 = require("./Successor");
(function (LegacyPositionEntity) {
    /**
     * Static representation of the [[createDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegacyPositionEntity.CREATE_DATE = new core_1.DateField('createDate', LegacyPositionEntity, 'Edm.DateTime');
    /**
     * Static representation of the [[incumbent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegacyPositionEntity.INCUMBENT = new core_1.StringField('incumbent', LegacyPositionEntity, 'Edm.String');
    /**
     * Static representation of the [[positionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegacyPositionEntity.POSITION_CODE = new core_1.StringField('positionCode', LegacyPositionEntity, 'Edm.String');
    /**
     * Static representation of the [[positionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegacyPositionEntity.POSITION_ID = new core_1.BigNumberField('positionId', LegacyPositionEntity, 'Edm.Int64');
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegacyPositionEntity.TITLE = new core_1.StringField('title', LegacyPositionEntity, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[incumbentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegacyPositionEntity.INCUMBENT_NAV = new core_1.OneToOneLink('incumbentNav', LegacyPositionEntity, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[parentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegacyPositionEntity.PARENT_NAV = new core_1.OneToOneLink('parentNav', LegacyPositionEntity, LegacyPositionEntity);
    /**
     * Static representation of the one-to-many navigation property [[successorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegacyPositionEntity.SUCCESSOR_NAV = new core_1.Link('successorNav', LegacyPositionEntity, Successor_1.Successor);
    /**
     * All fields of the LegacyPositionEntity entity.
     */
    LegacyPositionEntity._allFields = [
        LegacyPositionEntity.CREATE_DATE,
        LegacyPositionEntity.INCUMBENT,
        LegacyPositionEntity.POSITION_CODE,
        LegacyPositionEntity.POSITION_ID,
        LegacyPositionEntity.TITLE,
        LegacyPositionEntity.INCUMBENT_NAV,
        LegacyPositionEntity.PARENT_NAV,
        LegacyPositionEntity.SUCCESSOR_NAV
    ];
    /**
     * All fields selector.
     */
    LegacyPositionEntity.ALL_FIELDS = new core_1.AllFields('*', LegacyPositionEntity);
    /**
     * All key fields of the LegacyPositionEntity entity.
     */
    LegacyPositionEntity._keyFields = [LegacyPositionEntity.POSITION_ID];
    /**
     * Mapping of all key field names to the respective static field property LegacyPositionEntity.
     */
    LegacyPositionEntity._keys = LegacyPositionEntity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(LegacyPositionEntity = exports.LegacyPositionEntity || (exports.LegacyPositionEntity = {}));
exports.LegacyPositionEntity = LegacyPositionEntity;
//# sourceMappingURL=LegacyPositionEntity.js.map