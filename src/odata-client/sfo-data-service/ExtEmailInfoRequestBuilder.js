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
var ExtEmailInfo_1 = require("./ExtEmailInfo");
/**
 * Request builder class for operations supported on the [[ExtEmailInfo]] entity.
 */
var ExtEmailInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(ExtEmailInfoRequestBuilder, _super);
    function ExtEmailInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ExtEmailInfo` entity based on its keys.
     * @param emailInfoId Key property. See [[ExtEmailInfo.emailInfoId]].
     * @returns A request builder for creating requests to retrieve one `ExtEmailInfo` entity based on its keys.
     */
    ExtEmailInfoRequestBuilder.prototype.getByKey = function (emailInfoId) {
        return new core_1.GetByKeyRequestBuilder(ExtEmailInfo_1.ExtEmailInfo, { emailInfoId: emailInfoId });
    };
    /**
     * Returns a request builder for querying all `ExtEmailInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExtEmailInfo` entities.
     */
    ExtEmailInfoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ExtEmailInfo_1.ExtEmailInfo);
    };
    /**
     * Returns a request builder for creating a `ExtEmailInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExtEmailInfo`.
     */
    ExtEmailInfoRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ExtEmailInfo_1.ExtEmailInfo, entity);
    };
    return ExtEmailInfoRequestBuilder;
}(core_1.RequestBuilder));
exports.ExtEmailInfoRequestBuilder = ExtEmailInfoRequestBuilder;
//# sourceMappingURL=ExtEmailInfoRequestBuilder.js.map