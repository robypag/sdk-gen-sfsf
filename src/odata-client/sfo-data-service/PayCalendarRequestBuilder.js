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
var PayCalendar_1 = require("./PayCalendar");
/**
 * Request builder class for operations supported on the [[PayCalendar]] entity.
 */
var PayCalendarRequestBuilder = /** @class */ (function (_super) {
    __extends(PayCalendarRequestBuilder, _super);
    function PayCalendarRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PayCalendar` entity based on its keys.
     * @param payGroup Key property. See [[PayCalendar.payGroup]].
     * @returns A request builder for creating requests to retrieve one `PayCalendar` entity based on its keys.
     */
    PayCalendarRequestBuilder.prototype.getByKey = function (payGroup) {
        return new core_1.GetByKeyRequestBuilder(PayCalendar_1.PayCalendar, { payGroup: payGroup });
    };
    /**
     * Returns a request builder for querying all `PayCalendar` entities.
     * @returns A request builder for creating requests to retrieve all `PayCalendar` entities.
     */
    PayCalendarRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PayCalendar_1.PayCalendar);
    };
    /**
     * Returns a request builder for creating a `PayCalendar` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PayCalendar`.
     */
    PayCalendarRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PayCalendar_1.PayCalendar, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PayCalendar`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PayCalendar`.
     */
    PayCalendarRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PayCalendar_1.PayCalendar, entity);
    };
    PayCalendarRequestBuilder.prototype.delete = function (payGroupOrEntity) {
        return new core_1.DeleteRequestBuilder(PayCalendar_1.PayCalendar, payGroupOrEntity instanceof PayCalendar_1.PayCalendar ? payGroupOrEntity : { payGroup: payGroupOrEntity });
    };
    return PayCalendarRequestBuilder;
}(core_1.RequestBuilder));
exports.PayCalendarRequestBuilder = PayCalendarRequestBuilder;
//# sourceMappingURL=PayCalendarRequestBuilder.js.map