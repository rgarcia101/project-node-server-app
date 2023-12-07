import * as dao from "./dao.js";

function PublisherRoutes(app) {
  const findPublisherByApiId = async (req, res) => {
   try {
     const apiId = req.params.apiId;
     const publisher = await dao.findPublisherByApiId(apiId);
     res.status(200).json(publisher);
   } catch (error) {
     console.error(error);
     res.status(500).send("Internal Server Error");
   }
  }

  const createPublisher = async (req, res) => {
    const publisher = await dao.createPublisher(req.body);
    res.json(publisher);
  };

  const deletePublisher = async (req, res) => {
    const status = await dao.deleteBook(req.params.publisherId);
    res.json(status);
  };

  app.get("/api/publishers/books/:apiId", findPublisherByApiId);
  app.post("/api/publishers", createPublisher);
  app.delete("/api/publishers/:id", deletePublisher);

}
export default PublisherRoutes;