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
var Background_AwardsRequestBuilder_1 = require("./Background_AwardsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_Awards" of service "SFOData".
 */
var Background_Awards = /** @class */ (function (_super) {
    __extends(Background_Awards, _super);
    function Background_Awards() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_Awards`.
     * @returns A builder that constructs instances of entity type `Background_Awards`.
     */
    Background_Awards.builder = function () {
        return core_1.Entity.entityBuilder(Background_Awards);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_Awards` entity type.
     * @returns A `Background_Awards` request builder.
     */
    Background_Awards.requestBuilder = function () {
        return new Background_AwardsRequestBuilder_1.Background_AwardsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Awards`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Awards`.
     */
    Background_Awards.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_Awards);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_Awards.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_Awards.
     */
    Background_Awards._entityName = 'Background_Awards';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Awards.
     */
    Background_Awards._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_Awards._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_Awards;
}(core_1.Entity));
exports.Background_Awards = Background_Awards;
var User_1 = require("./User");
(function (Background_Awards) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Awards.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_Awards, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Awards.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_Awards, 'Edm.Int64');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Awards.DESCRIPTION = new core_1.StringField('description', Background_Awards, 'Edm.String');
    /**
     * Static representation of the [[institution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Awards.INSTITUTION = new core_1.StringField('institution', Background_Awards, 'Edm.String');
    /**
     * Static representation of the [[issueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Awards.ISSUE_DATE = new core_1.DateField('issueDate', Background_Awards, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Awards.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_Awards, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Awards.NAME = new core_1.StringField('name', Background_Awards, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Awards.USER_ID = new core_1.StringField('userId', Background_Awards, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Awards.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_Awards, User_1.User);
    /**
     * All fields of the Background_Awards entity.
     */
    Background_Awards._allFields = [
        Background_Awards.BACKGROUND_ELEMENT_ID,
        Background_Awards.BG_ORDER_POS,
        Background_Awards.DESCRIPTION,
        Background_Awards.INSTITUTION,
        Background_Awards.ISSUE_DATE,
        Background_Awards.LAST_MODIFIED_DATE,
        Background_Awards.NAME,
        Background_Awards.USER_ID,
        Background_Awards.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_Awards.ALL_FIELDS = new core_1.AllFields('*', Background_Awards);
    /**
     * All key fields of the Background_Awards entity.
     */
    Background_Awards._keyFields = [Background_Awards.BACKGROUND_ELEMENT_ID, Background_Awards.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_Awards.
     */
    Background_Awards._keys = Background_Awards._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_Awards = exports.Background_Awards || (exports.Background_Awards = {}));
exports.Background_Awards = Background_Awards;
//# sourceMappingURL=Background_Awards.js.map