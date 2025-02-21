import express from "express";
import {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../Applications/category.js";

export const categoryRouter =  express.Router()


categoryRouter.route('/').get(getCategories).post(createCategory)
categoryRouter.route("/:id").get(getCategory).delete(deleteCategory).patch(updateCategory)


