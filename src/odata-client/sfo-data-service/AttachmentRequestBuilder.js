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
var Attachment_1 = require("./Attachment");
/**
 * Request builder class for operations supported on the [[Attachment]] entity.
 */
var AttachmentRequestBuilder = /** @class */ (function (_super) {
    __extends(AttachmentRequestBuilder, _super);
    function AttachmentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Attachment` entity based on its keys.
     * @param attachmentId Key property. See [[Attachment.attachmentId]].
     * @returns A request builder for creating requests to retrieve one `Attachment` entity based on its keys.
     */
    AttachmentRequestBuilder.prototype.getByKey = function (attachmentId) {
        return new core_1.GetByKeyRequestBuilder(Attachment_1.Attachment, { attachmentId: attachmentId });
    };
    /**
     * Returns a request builder for querying all `Attachment` entities.
     * @returns A request builder for creating requests to retrieve all `Attachment` entities.
     */
    AttachmentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Attachment_1.Attachment);
    };
    /**
     * Returns a request builder for creating a `Attachment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Attachment`.
     */
    AttachmentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Attachment_1.Attachment, entity);
    };
    AttachmentRequestBuilder.prototype.delete = function (attachmentIdOrEntity) {
        return new core_1.DeleteRequestBuilder(Attachment_1.Attachment, attachmentIdOrEntity instanceof Attachment_1.Attachment ? attachmentIdOrEntity : { attachmentId: attachmentIdOrEntity });
    };
    return AttachmentRequestBuilder;
}(core_1.RequestBuilder));
exports.AttachmentRequestBuilder = AttachmentRequestBuilder;
//# sourceMappingURL=AttachmentRequestBuilder.js.map