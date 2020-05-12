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
var core_1 = require("@sap-cloud-sdk/core");
var PayPeriod_1 = require("./PayPeriod");
/**
 * Request builder class for operations supported on the [[PayPeriod]] entity.
 */
var PayPeriodRequestBuilder = /** @class */ (function (_super) {
    __extends(PayPeriodRequestBuilder, _super);
    function PayPeriodRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PayPeriod` entity based on its keys.
     * @param payCalendarPayGroup Key property. See [[PayPeriod.payCalendarPayGroup]].
     * @param externalCode Key property. See [[PayPeriod.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PayPeriod` entity based on its keys.
     */
    PayPeriodRequestBuilder.prototype.getByKey = function (payCalendarPayGroup, externalCode) {
        return new core_1.GetByKeyRequestBuilder(PayPeriod_1.PayPeriod, {
            PayCalendar_payGroup: payCalendarPayGroup,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `PayPeriod` entities.
     * @returns A request builder for creating requests to retrieve all `PayPeriod` entities.
     */
    PayPeriodRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PayPeriod_1.PayPeriod);
    };
    /**
     * Returns a request builder for creating a `PayPeriod` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PayPeriod`.
     */
    PayPeriodRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PayPeriod_1.PayPeriod, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PayPeriod`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PayPeriod`.
     */
    PayPeriodRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PayPeriod_1.PayPeriod, entity);
    };
    PayPeriodRequestBuilder.prototype.delete = function (payCalendarPayGroupOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(PayPeriod_1.PayPeriod, payCalendarPayGroupOrEntity instanceof PayPeriod_1.PayPeriod ? payCalendarPayGroupOrEntity : {
            PayCalendar_payGroup: payCalendarPayGroupOrEntity,
            externalCode: externalCode
        });
    };
    return PayPeriodRequestBuilder;
}(core_1.RequestBuilder));
exports.PayPeriodRequestBuilder = PayPeriodRequestBuilder;
//# sourceMappingURL=PayPeriodRequestBuilder.js.map