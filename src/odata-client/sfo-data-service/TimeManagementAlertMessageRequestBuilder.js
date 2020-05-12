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
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var TimeManagementAlertMessage_1 = require("./TimeManagementAlertMessage");
/**
 * Request builder class for operations supported on the [[TimeManagementAlertMessage]] entity.
 */
var TimeManagementAlertMessageRequestBuilder = /** @class */ (function (_super) {
    __extends(TimeManagementAlertMessageRequestBuilder, _super);
    function TimeManagementAlertMessageRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeManagementAlertMessage` entity based on its keys.
     * @param timeManagementAlertExternalCode Key property. See [[TimeManagementAlertMessage.timeManagementAlertExternalCode]].
     * @param externalCode Key property. See [[TimeManagementAlertMessage.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeManagementAlertMessage` entity based on its keys.
     */
    TimeManagementAlertMessageRequestBuilder.prototype.getByKey = function (timeManagementAlertExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(TimeManagementAlertMessage_1.TimeManagementAlertMessage, {
            TimeManagementAlert_externalCode: timeManagementAlertExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `TimeManagementAlertMessage` entities.
     * @returns A request builder for creating requests to retrieve all `TimeManagementAlertMessage` entities.
     */
    TimeManagementAlertMessageRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeManagementAlertMessage_1.TimeManagementAlertMessage);
    };
    return TimeManagementAlertMessageRequestBuilder;
}(core_1.RequestBuilder));
exports.TimeManagementAlertMessageRequestBuilder = TimeManagementAlertMessageRequestBuilder;
//# sourceMappingURL=TimeManagementAlertMessageRequestBuilder.js.map