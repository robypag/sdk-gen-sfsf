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
var Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder_1 = require("./Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_SysScoreCardDevelopmentObjectivesPortlet" of service "SFOData".
 */
var Background_SysScoreCardDevelopmentObjectivesPortlet = /** @class */ (function (_super) {
    __extends(Background_SysScoreCardDevelopmentObjectivesPortlet, _super);
    function Background_SysScoreCardDevelopmentObjectivesPortlet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_SysScoreCardDevelopmentObjectivesPortlet`.
     * @returns A builder that constructs instances of entity type `Background_SysScoreCardDevelopmentObjectivesPortlet`.
     */
    Background_SysScoreCardDevelopmentObjectivesPortlet.builder = function () {
        return core_1.Entity.entityBuilder(Background_SysScoreCardDevelopmentObjectivesPortlet);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_SysScoreCardDevelopmentObjectivesPortlet` entity type.
     * @returns A `Background_SysScoreCardDevelopmentObjectivesPortlet` request builder.
     */
    Background_SysScoreCardDevelopmentObjectivesPortlet.requestBuilder = function () {
        return new Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder_1.Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_SysScoreCardDevelopmentObjectivesPortlet`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_SysScoreCardDevelopmentObjectivesPortlet`.
     */
    Background_SysScoreCardDevelopmentObjectivesPortlet.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_SysScoreCardDevelopmentObjectivesPortlet);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_SysScoreCardDevelopmentObjectivesPortlet.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_SysScoreCardDevelopmentObjectivesPortlet.
     */
    Background_SysScoreCardDevelopmentObjectivesPortlet._entityName = 'Background_SysScoreCardDevelopmentObjectivesPortlet';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_SysScoreCardDevelopmentObjectivesPortlet.
     */
    Background_SysScoreCardDevelopmentObjectivesPortlet._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_SysScoreCardDevelopmentObjectivesPortlet._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_SysScoreCardDevelopmentObjectivesPortlet;
}(core_1.Entity));
exports.Background_SysScoreCardDevelopmentObjectivesPortlet = Background_SysScoreCardDevelopmentObjectivesPortlet;
var User_1 = require("./User");
(function (Background_SysScoreCardDevelopmentObjectivesPortlet) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_SysScoreCardDevelopmentObjectivesPortlet.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_SysScoreCardDevelopmentObjectivesPortlet, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_SysScoreCardDevelopmentObjectivesPortlet.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_SysScoreCardDevelopmentObjectivesPortlet, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_SysScoreCardDevelopmentObjectivesPortlet.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_SysScoreCardDevelopmentObjectivesPortlet, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_SysScoreCardDevelopmentObjectivesPortlet.TITLE = new core_1.StringField('title', Background_SysScoreCardDevelopmentObjectivesPortlet, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_SysScoreCardDevelopmentObjectivesPortlet.USER_ID = new core_1.StringField('userId', Background_SysScoreCardDevelopmentObjectivesPortlet, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_SysScoreCardDevelopmentObjectivesPortlet.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_SysScoreCardDevelopmentObjectivesPortlet, User_1.User);
    /**
     * All fields of the Background_SysScoreCardDevelopmentObjectivesPortlet entity.
     */
    Background_SysScoreCardDevelopmentObjectivesPortlet._allFields = [
        Background_SysScoreCardDevelopmentObjectivesPortlet.BACKGROUND_ELEMENT_ID,
        Background_SysScoreCardDevelopmentObjectivesPortlet.BG_ORDER_POS,
        Background_SysScoreCardDevelopmentObjectivesPortlet.LAST_MODIFIED_DATE,
        Background_SysScoreCardDevelopmentObjectivesPortlet.TITLE,
        Background_SysScoreCardDevelopmentObjectivesPortlet.USER_ID,
        Background_SysScoreCardDevelopmentObjectivesPortlet.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_SysScoreCardDevelopmentObjectivesPortlet.ALL_FIELDS = new core_1.AllFields('*', Background_SysScoreCardDevelopmentObjectivesPortlet);
    /**
     * All key fields of the Background_SysScoreCardDevelopmentObjectivesPortlet entity.
     */
    Background_SysScoreCardDevelopmentObjectivesPortlet._keyFields = [Background_SysScoreCardDevelopmentObjectivesPortlet.BACKGROUND_ELEMENT_ID, Background_SysScoreCardDevelopmentObjectivesPortlet.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_SysScoreCardDevelopmentObjectivesPortlet.
     */
    Background_SysScoreCardDevelopmentObjectivesPortlet._keys = Background_SysScoreCardDevelopmentObjectivesPortlet._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_SysScoreCardDevelopmentObjectivesPortlet = exports.Background_SysScoreCardDevelopmentObjectivesPortlet || (exports.Background_SysScoreCardDevelopmentObjectivesPortlet = {}));
exports.Background_SysScoreCardDevelopmentObjectivesPortlet = Background_SysScoreCardDevelopmentObjectivesPortlet;
//# sourceMappingURL=Background_SysScoreCardDevelopmentObjectivesPortlet.js.map