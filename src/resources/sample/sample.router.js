import { Router } from "express";
import controllers from "./sample.controller";

const router = Router();

router.route("/").get(controllers.getMany).post(controllers.createOne);

router
  .route("/:id")
  .get(controllers.getone)
  .put(controllers.updateOne)
  .delete(controllers.deleteOne);
