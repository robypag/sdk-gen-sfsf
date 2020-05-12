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
var ExtPhoneInfo_1 = require("./ExtPhoneInfo");
/**
 * Request builder class for operations supported on the [[ExtPhoneInfo]] entity.
 */
var ExtPhoneInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(ExtPhoneInfoRequestBuilder, _super);
    function ExtPhoneInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ExtPhoneInfo` entity based on its keys.
     * @param phoneInfoId Key property. See [[ExtPhoneInfo.phoneInfoId]].
     * @returns A request builder for creating requests to retrieve one `ExtPhoneInfo` entity based on its keys.
     */
    ExtPhoneInfoRequestBuilder.prototype.getByKey = function (phoneInfoId) {
        return new core_1.GetByKeyRequestBuilder(ExtPhoneInfo_1.ExtPhoneInfo, { phoneInfoId: phoneInfoId });
    };
    /**
     * Returns a request builder for querying all `ExtPhoneInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExtPhoneInfo` entities.
     */
    ExtPhoneInfoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ExtPhoneInfo_1.ExtPhoneInfo);
    };
    /**
     * Returns a request builder for creating a `ExtPhoneInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExtPhoneInfo`.
     */
    ExtPhoneInfoRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ExtPhoneInfo_1.ExtPhoneInfo, entity);
    };
    return ExtPhoneInfoRequestBuilder;
}(core_1.RequestBuilder));
exports.ExtPhoneInfoRequestBuilder = ExtPhoneInfoRequestBuilder;
//# sourceMappingURL=ExtPhoneInfoRequestBuilder.js.map