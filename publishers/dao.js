import model from "./model.js";

export const findPublisherByApiId = (apiId) =>
    model.findOne({ apiId: apiId }).populate("name");

export const createPublisher = (publisherData) =>
    model.create(publisherData);
export const deletePublisher = (publisherId) =>
    model.deleteOne({ _id: publisherId });