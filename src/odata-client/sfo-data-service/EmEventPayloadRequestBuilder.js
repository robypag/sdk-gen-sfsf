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
var EmEventPayload_1 = require("./EmEventPayload");
/**
 * Request builder class for operations supported on the [[EmEventPayload]] entity.
 */
var EmEventPayloadRequestBuilder = /** @class */ (function (_super) {
    __extends(EmEventPayloadRequestBuilder, _super);
    function EmEventPayloadRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmEventPayload` entity based on its keys.
     * @param id Key property. See [[EmEventPayload.id]].
     * @returns A request builder for creating requests to retrieve one `EmEventPayload` entity based on its keys.
     */
    EmEventPayloadRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(EmEventPayload_1.EmEventPayload, { id: id });
    };
    /**
     * Returns a request builder for querying all `EmEventPayload` entities.
     * @returns A request builder for creating requests to retrieve all `EmEventPayload` entities.
     */
    EmEventPayloadRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmEventPayload_1.EmEventPayload);
    };
    /**
     * Returns a request builder for creating a `EmEventPayload` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmEventPayload`.
     */
    EmEventPayloadRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EmEventPayload_1.EmEventPayload, entity);
    };
    return EmEventPayloadRequestBuilder;
}(core_1.RequestBuilder));
exports.EmEventPayloadRequestBuilder = EmEventPayloadRequestBuilder;
//# sourceMappingURL=EmEventPayloadRequestBuilder.js.map