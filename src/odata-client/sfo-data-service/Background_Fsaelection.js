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
var Background_FsaelectionRequestBuilder_1 = require("./Background_FsaelectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_Fsaelection" of service "SFOData".
 */
var Background_Fsaelection = /** @class */ (function (_super) {
    __extends(Background_Fsaelection, _super);
    function Background_Fsaelection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_Fsaelection`.
     * @returns A builder that constructs instances of entity type `Background_Fsaelection`.
     */
    Background_Fsaelection.builder = function () {
        return core_1.Entity.entityBuilder(Background_Fsaelection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_Fsaelection` entity type.
     * @returns A `Background_Fsaelection` request builder.
     */
    Background_Fsaelection.requestBuilder = function () {
        return new Background_FsaelectionRequestBuilder_1.Background_FsaelectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Fsaelection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Fsaelection`.
     */
    Background_Fsaelection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_Fsaelection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_Fsaelection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_Fsaelection.
     */
    Background_Fsaelection._entityName = 'Background_Fsaelection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Fsaelection.
     */
    Background_Fsaelection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_Fsaelection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_Fsaelection;
}(core_1.Entity));
exports.Background_Fsaelection = Background_Fsaelection;
var User_1 = require("./User");
(function (Background_Fsaelection) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Fsaelection.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_Fsaelection, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Fsaelection.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_Fsaelection, 'Edm.Int64');
    /**
     * Static representation of the [[fsabalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Fsaelection.FSABALANCE = new core_1.StringField('fsabalance', Background_Fsaelection, 'Edm.String');
    /**
     * Static representation of the [[fsacontributions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Fsaelection.FSACONTRIBUTIONS = new core_1.StringField('fsacontributions', Background_Fsaelection, 'Edm.String');
    /**
     * Static representation of the [[fsaelectionamount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Fsaelection.FSAELECTIONAMOUNT = new core_1.StringField('fsaelectionamount', Background_Fsaelection, 'Edm.String');
    /**
     * Static representation of the [[fsafundsout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Fsaelection.FSAFUNDSOUT = new core_1.StringField('fsafundsout', Background_Fsaelection, 'Edm.String');
    /**
     * Static representation of the [[fsaplan]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Fsaelection.FSAPLAN = new core_1.StringField('fsaplan', Background_Fsaelection, 'Edm.String');
    /**
     * Static representation of the [[fsarepayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Fsaelection.FSAREPAYMENT = new core_1.StringField('fsarepayment', Background_Fsaelection, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Fsaelection.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_Fsaelection, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Fsaelection.USER_ID = new core_1.StringField('userId', Background_Fsaelection, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Fsaelection.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_Fsaelection, User_1.User);
    /**
     * All fields of the Background_Fsaelection entity.
     */
    Background_Fsaelection._allFields = [
        Background_Fsaelection.BACKGROUND_ELEMENT_ID,
        Background_Fsaelection.BG_ORDER_POS,
        Background_Fsaelection.FSABALANCE,
        Background_Fsaelection.FSACONTRIBUTIONS,
        Background_Fsaelection.FSAELECTIONAMOUNT,
        Background_Fsaelection.FSAFUNDSOUT,
        Background_Fsaelection.FSAPLAN,
        Background_Fsaelection.FSAREPAYMENT,
        Background_Fsaelection.LAST_MODIFIED_DATE,
        Background_Fsaelection.USER_ID,
        Background_Fsaelection.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_Fsaelection.ALL_FIELDS = new core_1.AllFields('*', Background_Fsaelection);
    /**
     * All key fields of the Background_Fsaelection entity.
     */
    Background_Fsaelection._keyFields = [Background_Fsaelection.BACKGROUND_ELEMENT_ID, Background_Fsaelection.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_Fsaelection.
     */
    Background_Fsaelection._keys = Background_Fsaelection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_Fsaelection = exports.Background_Fsaelection || (exports.Background_Fsaelection = {}));
exports.Background_Fsaelection = Background_Fsaelection;
//# sourceMappingURL=Background_Fsaelection.js.map